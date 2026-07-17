import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { type AiProvider } from '../interfaces/ai-provider.interface';
import type { AiAnalysisResponse } from '../interfaces/ai-analysis-response.interface';
import { ChunkRetrievalService } from './chunk-retrieval.service';
import { PromptBuilderService } from './prompt-builder.service';
import { AnalysisOptions } from '../interfaces/analysis-options.interface';
export interface AnalysisStageContext {
    requestId: string;
    documentId: string;
    queryText: string;
    chunks: Awaited<ReturnType<ChunkRetrievalService['getRelevantChunks']>>;
    result: Partial<AiAnalysisResponse>;
    options: AnalysisOptions;
}
export interface AnalysisStage {
    readonly name: string;
    run(ctx: AnalysisStageContext): Promise<Partial<AiAnalysisResponse>>;
}
export declare class CombinedAnalysisStage implements AnalysisStage {
    private readonly aiProvider;
    private readonly promptBuilder;
    private readonly config;
    readonly name = "CombinedAnalysis";
    private readonly model;
    private readonly maxTokens;
    constructor(aiProvider: AiProvider, promptBuilder: PromptBuilderService, config: ConfigService);
    run(ctx: AnalysisStageContext): Promise<Partial<AiAnalysisResponse>>;
    private callAi;
    private parseAiResponse;
    private stripMarkdownFences;
    private validateResponse;
}
export declare class AnalysisOrchestratorService {
    private readonly prisma;
    private readonly chunkRetrieval;
    private readonly config;
    private readonly stages;
    private readonly logger;
    private readonly maxRetries;
    constructor(prisma: PrismaService, chunkRetrieval: ChunkRetrievalService, config: ConfigService, stages: AnalysisStage[]);
    analyzeDocument(requestId: string, options?: AnalysisOptions): Promise<void>;
    private runStages;
    private mergePartial;
    private persist;
    private updateExpirationDate;
    private markFailed;
    private mapVerdict;
    private mapRiskLevel;
    private mapSeverity;
}
