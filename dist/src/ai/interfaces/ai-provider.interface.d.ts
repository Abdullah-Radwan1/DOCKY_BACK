export interface AiChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}
export interface AiCompletionOptions {
    model: string;
    messages: AiChatMessage[];
    maxTokens?: number;
    temperature?: number;
    responseFormat?: {
        type: 'json_object';
    };
}
export interface AiCompletionResult {
    content: string;
    model: string;
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
}
export declare const AI_PROVIDER: unique symbol;
export interface AiProvider {
    complete(options: AiCompletionOptions): Promise<AiCompletionResult>;
}
