import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

/** Approximate characters per token (matches ChunkingService heuristic). */
const CHARS_PER_TOKEN = 4;

/**
 * Retrieves document chunks for the AI analysis pipeline.
 *
 * This abstraction exists so that chunk selection logic (all chunks, top-K,
 * semantic search, etc.) can evolve independently of the orchestrator.
 */
@Injectable()
export class ChunkRetrievalService {
  private readonly logger = new Logger(ChunkRetrievalService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Returns all chunks for a document, ordered by chunk index.
   */
  async getChunksForDocument(documentId: string) {
    return this.prisma.documentChunk.findMany({
      where: { documentId },
      orderBy: { chunkIndex: 'asc' },
    });
  }

  /**
   * Returns chunks within a token budget, ordered by chunk index.
   *
   * For V1 this simply takes chunks in order until the budget is exhausted.
   * Future versions can add relevance ranking (BM25, vector similarity, etc.)
   * before applying the budget.
   *
   * @param documentId  Document UUID.
   * @param _query      Compliance query (reserved for future relevance scoring).
   * @param tokenBudget Max total tokens to include. Defaults to 30 000 (~120 KB).
   */
  async getRelevantChunks(
    documentId: string,
    _query: string,
    tokenBudget = 30_000,
  ) {
    const allChunks = await this.getChunksForDocument(documentId);

    const selected: typeof allChunks = [];
    let tokensUsed = 0;

    for (const chunk of allChunks) {
      const chunkTokens =
        chunk.tokenCount ?? Math.ceil(chunk.content.length / CHARS_PER_TOKEN);

      if (tokensUsed + chunkTokens > tokenBudget && selected.length > 0) {
        this.logger.log(
          `Token budget reached (${tokensUsed}/${tokenBudget}) — ` +
            `selected ${selected.length}/${allChunks.length} chunks`,
        );
        break;
      }

      selected.push(chunk);
      tokensUsed += chunkTokens;
    }

    this.logger.log(
      `Retrieved ${selected.length} chunk(s) for document ${documentId} ` +
        `(~${tokensUsed} tokens)`,
    );

    return selected;
  }
}
