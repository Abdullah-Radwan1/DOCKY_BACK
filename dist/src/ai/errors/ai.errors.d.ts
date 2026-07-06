export declare class AiProviderError extends Error {
    readonly retryable: boolean;
    constructor(message: string, retryable?: boolean);
}
export declare class AiTimeoutError extends AiProviderError {
    constructor(timeoutMs: number);
}
export declare class AiRateLimitError extends AiProviderError {
    readonly retryAfterMs?: number | undefined;
    constructor(retryAfterMs?: number | undefined);
}
export declare class AiResponseParseError extends AiProviderError {
    readonly rawContent: string;
    constructor(message: string, rawContent: string);
}
