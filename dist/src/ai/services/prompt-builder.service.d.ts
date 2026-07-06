import type { AiChatMessage } from '../interfaces/ai-provider.interface';
export declare class PromptBuilderService {
    buildAnalysisPrompt(queryText: string, chunks: Array<{
        content: string;
        pageNumber: number | null;
        chunkIndex: number;
    }>): AiChatMessage[];
    private systemPrompt;
    private userPrompt;
}
