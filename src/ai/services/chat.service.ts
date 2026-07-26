import {
  Injectable,
  Logger,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import {
  AI_PROVIDER,
  type AiProvider,
} from '../interfaces/ai-provider.interface';
import { ChatPromptBuilderService } from './chat-prompt-builder.service';
import { ChunkRetrievalService } from './chunk-retrieval.service';
import type { ChatHistoryMessage, ChatPromptContext } from '../interfaces/chat.interface';
import type { AiAnalysisResponse } from '../interfaces/ai-analysis-response.interface';
import type { DocumentChatDto } from '../dto/document-chat.dto';

/**
 * Handles conversational Q&A about an already-analyzed document.
 *
 * This service is completely separate from `AnalysisOrchestratorService`.
 * It never triggers a new compliance analysis — it answers questions using:
 *  - The original document chunks
 *  - The existing structured analysis (if available)
 *  - The conversation history supplied by the client
 */
@Injectable()
export class ChatService {
  private readonly logger = new Logger(ChatService.name);
  private readonly model: string;
  private readonly maxTokens: number;

  constructor(
    private readonly prisma: PrismaService,
    @Inject(AI_PROVIDER) private readonly aiProvider: AiProvider,
    private readonly promptBuilder: ChatPromptBuilderService,
    private readonly chunkRetrieval: ChunkRetrievalService,
    private readonly config: ConfigService,
  ) {
    this.model = this.config.get<string>(
      'OPENROUTER_MODEL',
      'qwen/qwen3-235b-a22b',
    );
    this.maxTokens = this.config.get<number>('CHAT_MAX_TOKENS', 1024);
  }

  /**
   * Answers a single conversational message about a document.
   *
   * @returns The AI's plain-text reply.
   */
  async chat(dto: DocumentChatDto): Promise<{ reply: string }> {
    // ── 1. Validate the document ───────────────────────────────────────────
    const document = await this.prisma.document.findUnique({
      where: { id: dto.documentId },
      select: { id: true, status: true },
    });

    if (!document) {
      throw new NotFoundException(`Document ${dto.documentId} not found`);
    }

    if (document.status !== 'ready') {
      throw new BadRequestException(
        `Document is not ready (status: ${document.status}). ` +
          'Wait for processing to complete before chatting.',
      );
    }

    // ── 2. Load document chunks ────────────────────────────────────────────
    const chunks = await this.chunkRetrieval.getRelevantChunks(
      dto.documentId,
      dto.message,
    );

    // ── 3. Load existing analysis (optional) ──────────────────────────────
    const existingAnalysis = dto.analysisRequestId
      ? await this.loadAnalysis(dto.analysisRequestId)
      : null;

    // ── 4. Build prompt ────────────────────────────────────────────────────
    const ctx: ChatPromptContext = {
      userMessage: dto.message,
      history: (dto.history ?? []) as ChatHistoryMessage[],
      documentChunks: chunks.map((c) => ({
        content: c.content,
        pageNumber: c.pageNumber,
        chunkIndex: c.chunkIndex,
      })),
      existingAnalysis,
    };

    const messages = this.promptBuilder.buildChatPrompt(ctx);

    // ── 5. Call AI ─────────────────────────────────────────────────────────
    this.logger.log(
      `Chat request for document=${dto.documentId} ` +
        `history=${ctx.history.length} chunk(s)=${chunks.length} ` +
        `hasAnalysis=${existingAnalysis !== null}`,
    );

    const result = await this.aiProvider.complete({
      model: this.model,
      messages,
      maxTokens: this.maxTokens,
      temperature: 0.3,
      // No responseFormat — we want plain text
    });

    this.logger.log(
      `Chat reply for document=${dto.documentId} tokens=${result.totalTokens}`,
    );

    return { reply: result.content };
  }

  // ── Helpers ────────────────────────────────────────────────────────────────

  /**
   * Loads and returns the raw AI response JSON (AiAnalysisResponse) for a
   * given analysis request. Returns null if the analysis is not complete.
   */
  private async loadAnalysis(
    analysisRequestId: string,
  ): Promise<AiAnalysisResponse | null> {
    const request = await this.prisma.analysisRequest.findUnique({
      where: { id: analysisRequestId },
      select: {
        status: true,
        response: {
          select: { response: true },
        },
      },
    });

    if (!request || request.status !== 'completed' || !request.response) {
      return null;
    }

    try {
      // The `response` column stores the full AiAnalysisResponse JSON
      return request.response.response as unknown as AiAnalysisResponse;
    } catch {
      this.logger.warn(
        `Could not parse analysis response for request ${analysisRequestId}`,
      );
      return null;
    }
  }
}
