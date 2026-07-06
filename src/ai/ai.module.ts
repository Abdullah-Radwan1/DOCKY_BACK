import { Module } from '@nestjs/common';
import { OpenRouterService } from './services/openrouter.service';
import { ChunkRetrievalService } from './services/chunk-retrieval.service';
import { PromptBuilderService } from './services/prompt-builder.service';
import { AnalysisOrchestratorService } from './services/analysis-orchestrator.service';
import { AI_PROVIDER } from './interfaces/ai-provider.interface';

/**
 * Encapsulates all AI-related services.
 *
 * The `AI_PROVIDER` token is bound to `OpenRouterService` here.
 * To swap providers later (e.g. Azure OpenAI, Anthropic), change
 * only this binding — business logic stays untouched.
 */
@Module({
  providers: [
    // Bind the swappable AI_PROVIDER token to the OpenRouter implementation
    {
      provide: AI_PROVIDER,
      useClass: OpenRouterService,
    },
    OpenRouterService,
    ChunkRetrievalService,
    PromptBuilderService,
    AnalysisOrchestratorService,
  ],
  exports: [AnalysisOrchestratorService],
})
export class AiModule {}
