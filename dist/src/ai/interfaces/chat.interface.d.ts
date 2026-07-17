import type { AiAnalysisResponse } from './ai-analysis-response.interface';
export type ChatRole = 'user' | 'assistant';
export interface ChatHistoryMessage {
    role: ChatRole;
    content: string;
}
export interface ChatPromptContext {
    userMessage: string;
    history: ChatHistoryMessage[];
    documentChunks: Array<{
        content: string;
        pageNumber: number | null;
        chunkIndex: number;
    }>;
    existingAnalysis: AiAnalysisResponse | null;
}
