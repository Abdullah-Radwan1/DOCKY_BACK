import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { type AiProvider } from '../interfaces/ai-provider.interface';
import { ChunkRetrievalService } from './chunk-retrieval.service';
import { PromptBuilderService } from './prompt-builder.service';
export declare class AnalysisOrchestratorService {
    private readonly prisma;
    private readonly aiProvider;
    private readonly chunkRetrieval;
    private readonly promptBuilder;
    private readonly config;
    private readonly logger;
    private readonly model;
    private readonly maxTokens;
    private readonly maxRetries;
    constructor(prisma: PrismaService, aiProvider: AiProvider, chunkRetrieval: ChunkRetrievalService, promptBuilder: PromptBuilderService, config: ConfigService);
    analyzeDocument(requestId: string): Promise<void>;
    private parseAiResponse;
    private markFailed;
    private mapVerdict;
    private mapRiskLevel;
    private mapSeverity;
}
