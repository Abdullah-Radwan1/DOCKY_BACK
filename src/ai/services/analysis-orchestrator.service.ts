import {
  Injectable,
  Logger,
  Inject,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import {
  AI_PROVIDER,
  type AiProvider,
} from '../interfaces/ai-provider.interface';
import type {
  AiAnalysisResponse,
  AiFinding,
} from '../interfaces/ai-analysis-response.interface';
import type { Prisma } from '../../generated/prisma';
import { AiProviderError, AiResponseParseError } from '../errors/ai.errors';
import { ChunkRetrievalService } from './chunk-retrieval.service';
import { PromptBuilderService } from './prompt-builder.service';
import {
  AnalysisRequestStatus,
  AnalysisVerdict,
  FindingSeverity,
  RiskLevel,
} from '../../generated/prisma';

/**
 * Orchestrates the full compliance-analysis pipeline:
 *
 *   validate document → retrieve chunks → build prompt → call AI →
 *   parse response → persist (AIResponse + AnalysisResult + Findings)
 *
 * This service owns the business logic and error/retry semantics.
 * It delegates AI calls to the injected `AiProvider`, making the
 * pipeline vendor-agnostic.
 */
@Injectable()
export class AnalysisOrchestratorService {
  private readonly logger = new Logger(AnalysisOrchestratorService.name);

  private readonly model: string;
  private readonly maxTokens: number;
  private readonly maxRetries: number;

  constructor(
    private readonly prisma: PrismaService,
    @Inject(AI_PROVIDER) private readonly aiProvider: AiProvider,
    private readonly chunkRetrieval: ChunkRetrievalService,
    private readonly promptBuilder: PromptBuilderService,
    private readonly config: ConfigService,
  ) {
    this.model = this.config.get<string>(
      'OPENROUTER_MODEL',
      'qwen/qwen3-235b-a22b',
    );
    this.maxTokens = this.config.get<number>('OPENROUTER_MAX_TOKENS', 4096);
    this.maxRetries = this.config.get<number>('ANALYSIS_MAX_RETRIES', 3);
  }

  /**
   * Run the full analysis pipeline for a given AnalysisRequest.
   *
   * @param requestId  UUID of an existing AnalysisRequest (status: pending).
   */
  async analyzeDocument(requestId: string): Promise<void> {
    // ── 1. Load request + document ────────────────────────────────────────
    const request = await this.prisma.analysisRequest.findUnique({
      where: { id: requestId },
      include: { document: true },
    });

    if (!request) {
      throw new NotFoundException(
        `AnalysisRequest ${requestId} not found`,
      );
    }

    if (!request.document) {
      throw new BadRequestException(
        `AnalysisRequest ${requestId} has no associated document`,
      );
    }

    // ── 2. Validate document readiness ────────────────────────────────────
    if (request.document.status !== 'ready') {
      await this.markFailed(
        requestId,
        `Document ${request.document.id} is not ready (status: ${request.document.status})`,
      );
      throw new BadRequestException(
        `Document is not ready for analysis (status: ${request.document.status}). ` +
          'Upload and process the document first.',
      );
    }

    // ── 3. Guard retries ──────────────────────────────────────────────────
    if (request.attemptCount >= this.maxRetries) {
      await this.markFailed(
        requestId,
        `Max retries (${this.maxRetries}) exceeded`,
      );
      throw new BadRequestException(
        `Analysis request ${requestId} has exceeded the maximum retry count (${this.maxRetries}).`,
      );
    }

    // ── 4. Mark processing ────────────────────────────────────────────────
    await this.prisma.analysisRequest.update({
      where: { id: requestId },
      data: {
        status: AnalysisRequestStatus.processing,
        processingStartedAt: new Date(),
        attemptCount: { increment: 1 },
        errorMessage: null,
      },
    });

    try {
      // ── 5. Retrieve chunks ──────────────────────────────────────────────
      const chunks = await this.chunkRetrieval.getRelevantChunks(
        request.document.id,
        request.queryText,
      );

      if (chunks.length === 0) {
        throw new BadRequestException(
          `Document ${request.document.id} has no chunks. ` +
            'The document may not have been processed correctly.',
        );
      }

      // ── 6. Build prompt ─────────────────────────────────────────────────
      const messages = this.promptBuilder.buildAnalysisPrompt(
        request.queryText,
        chunks,
      );

      // ── 7. Call AI provider ─────────────────────────────────────────────
      this.logger.log(
        `Sending analysis request ${requestId} to AI (model=${this.model}, chunks=${chunks.length})`,
      );

      const aiResult = await this.aiProvider.complete({
        model: this.model,
        messages,
        maxTokens: this.maxTokens,
        temperature: 0.1,
        responseFormat: { type: 'json_object' },
      });

      // ── 8. Parse & validate response ────────────────────────────────────
      const parsed = this.parseAiResponse(aiResult.content);

      // ── 9. Persist everything in a single transaction ───────────────────
      await this.prisma.$transaction(async (tx) => {
        // 9a. Create AIResponse (raw)
        const aiResponse = await tx.aIResponse.create({
          data: {
            requestId,
            response: parsed as unknown as Prisma.InputJsonValue,
            confidenceScore: parsed.confidence,
            metadata: {
              model: aiResult.model,
              promptTokens: aiResult.promptTokens,
              completionTokens: aiResult.completionTokens,
              totalTokens: aiResult.totalTokens,
              chunksUsed: chunks.length,
            },
            matchedChunks: chunks.map((c) => ({
              chunkId: c.id,
              chunkIndex: c.chunkIndex,
              pageNumber: c.pageNumber,
            })),
          },
        });

        // 9b. Create AnalysisResult (normalized)
        const analysisResult = await tx.analysisResult.create({
          data: {
            responseId: aiResponse.id,
            summary: parsed.summary,
            overallVerdict: this.mapVerdict(parsed.overallVerdict),
            confidence: parsed.confidence,
            riskLevel: this.mapRiskLevel(parsed.riskLevel),
          },
        });

        // 9c. Create Finding records
        if (parsed.findings.length > 0) {
          await tx.finding.createMany({
            data: parsed.findings.map((f: AiFinding) => ({
              analysisId: analysisResult.id,
              title: f.title,
              description: f.description ?? null,
              severity: this.mapSeverity(f.severity),
              clauseReference: f.clauseReference ?? null,
              pageNumber: f.pageNumber ?? null,
              excerpt: f.excerpt ?? null,
              recommendation: f.recommendation ?? null,
              metadata: (f.metadata as Prisma.InputJsonValue) ?? undefined,
            })),
          });
        }

        // 9d. Mark request as completed
        await tx.analysisRequest.update({
          where: { id: requestId },
          data: {
            status: AnalysisRequestStatus.completed,
            processingFinishedAt: new Date(),
            errorMessage: null,
          },
        });

        // 9e. Update the document's expiration date if the AI extracted one
        if (parsed.expirationDate) {
          const parsedDate = new Date(parsed.expirationDate);
          if (!isNaN(parsedDate.getTime())) {
            await tx.document.update({
              where: { id: request.document!.id },
              data: { expirationDate: parsedDate },
            });
            this.logger.log(
              `Document ${request.document!.id} expiration date set to ${parsed.expirationDate}`,
            );
          } else {
            this.logger.warn(
              `AI returned an invalid expirationDate: "${parsed.expirationDate}" — skipping update`,
            );
          }
        }
      });

      this.logger.log(
        `Analysis ${requestId} completed: verdict=${parsed.overallVerdict}, ` +
          `findings=${parsed.findings.length}, tokens=${aiResult.totalTokens}`,
      );
    } catch (err) {
      // ── Error handling ──────────────────────────────────────────────────
      const message = (err as Error).message ?? 'Unknown error';

      this.logger.error(
        `Analysis ${requestId} failed: ${message}`,
        (err as Error).stack,
      );

      await this.markFailed(requestId, message);

      throw err;
    }
  }

  // ── Helpers ────────────────────────────────────────────────────────────────

  /**
   * Parse the raw AI content string into our typed schema.
   * Strips markdown fences if the model wraps the JSON despite instructions.
   */
  private parseAiResponse(raw: string): AiAnalysisResponse {
    let cleaned = raw.trim();

    // Strip markdown JSON fences if present
    if (cleaned.startsWith('```')) {
      cleaned = cleaned
        .replace(/^```(?:json)?\s*/i, '')
        .replace(/\s*```\s*$/, '');
    }

    let parsed: AiAnalysisResponse;
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      throw new AiResponseParseError('Invalid JSON from AI model', raw);
    }

    // Validate required fields
    if (!parsed.summary || typeof parsed.summary !== 'string') {
      throw new AiResponseParseError('Missing or invalid "summary"', raw);
    }
    if (!parsed.overallVerdict) {
      throw new AiResponseParseError('Missing "overallVerdict"', raw);
    }
    if (typeof parsed.confidence !== 'number') {
      throw new AiResponseParseError('Missing or invalid "confidence"', raw);
    }
    if (!parsed.riskLevel) {
      throw new AiResponseParseError('Missing "riskLevel"', raw);
    }
    if (!Array.isArray(parsed.findings)) {
      throw new AiResponseParseError('"findings" must be an array', raw);
    }

    return parsed;
  }

  private async markFailed(requestId: string, errorMessage: string) {
    await this.prisma.analysisRequest
      .update({
        where: { id: requestId },
        data: {
          status: AnalysisRequestStatus.failed,
          processingFinishedAt: new Date(),
          errorMessage: errorMessage.slice(0, 2000),
        },
      })
      .catch((updateErr) =>
        this.logger.error(
          `Failed to mark request ${requestId} as failed`,
          updateErr,
        ),
      );
  }

  // ── Enum mappers (string → Prisma enum, with safe defaults) ────────────

  private mapVerdict(v: string): AnalysisVerdict {
    const map: Record<string, AnalysisVerdict> = {
      compliant: AnalysisVerdict.compliant,
      non_compliant: AnalysisVerdict.non_compliant,
      partial: AnalysisVerdict.partial,
      unknown: AnalysisVerdict.unknown,
    };
    return map[v] ?? AnalysisVerdict.unknown;
  }

  private mapRiskLevel(r: string): RiskLevel {
    const map: Record<string, RiskLevel> = {
      low: RiskLevel.low,
      medium: RiskLevel.medium,
      high: RiskLevel.high,
    };
    return map[r] ?? RiskLevel.medium;
  }

  private mapSeverity(s: string): FindingSeverity {
    const map: Record<string, FindingSeverity> = {
      info: FindingSeverity.info,
      low: FindingSeverity.low,
      medium: FindingSeverity.medium,
      high: FindingSeverity.high,
      critical: FindingSeverity.critical,
    };
    return map[s] ?? FindingSeverity.info;
  }
}
