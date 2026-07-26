import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OpenRouterService } from './services/openrouter.service';
import { ChunkRetrievalService } from './services/chunk-retrieval.service';
import { PromptBuilderService } from './services/prompt-builder.service';
import { ChatPromptBuilderService } from './services/chat-prompt-builder.service';
import { ChatService } from './services/chat.service';
import { ChatController } from './chat.controller';
import {
  AnalysisOrchestratorService,
  CombinedAnalysisStage,
} from './services/analysis-orchestrator.service';
import { AI_PROVIDER } from './interfaces/ai-provider.interface';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Encapsulates all AI-related services.
 *
 * ## Provider binding
 * The `AI_PROVIDER` token is bound to `OpenRouterService`.
 * To swap providers (e.g. Azure OpenAI, Anthropic), change only this binding.
 *
 * ## Multi-stage extensibility
 * `AnalysisOrchestratorService` accepts an ordered array of `AnalysisStage`
 * implementations.  The current pipeline uses a single `CombinedAnalysisStage`
 * (one AI call for both extraction and compliance evaluation).
 *
 * To introduce multi-stage analysis, register additional stage classes here
 * and add them to the `stages` array in the factory below — no other changes
 * to business logic are required.
 */
@Module({
  providers: [
    // ── AI provider binding ────────────────────────────────────────────────
    {
      provide: AI_PROVIDER,
      useClass: OpenRouterService,
    },
    OpenRouterService,

    // ── Supporting services ───────────────────────────────────────────────
    ChunkRetrievalService,
    PromptBuilderService,

    // ── Analysis stages ────────────────────────────────────────────────────
    // Add new stage classes here when splitting into multi-stage pipelines.
    CombinedAnalysisStage,

    // ── Orchestrator (factory to inject the stage list) ───────────────────
    {
      provide: AnalysisOrchestratorService,
      useFactory: (
        prisma: PrismaService,
        chunkRetrieval: ChunkRetrievalService,
        config: ConfigService,
        combinedStage: CombinedAnalysisStage,
      ) =>
        new AnalysisOrchestratorService(
          prisma,
          chunkRetrieval,
          config,
          [combinedStage], // ← add more stages here for multi-stage pipelines
        ),
      inject: [
        PrismaService,
        ChunkRetrievalService,
        ConfigService,
        CombinedAnalysisStage,
      ],
    },

    // ── Chat pipeline (independent from analysis pipeline) ───────────────
    ChatPromptBuilderService,
    ChatService,
  ],
  controllers: [ChatController],
  exports: [AnalysisOrchestratorService, ChatPromptBuilderService, ChatService],
})
export class AiModule {}
