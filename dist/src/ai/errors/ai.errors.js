"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiResponseParseError = exports.AiRateLimitError = exports.AiTimeoutError = exports.AiProviderError = void 0;
class AiProviderError extends Error {
    retryable;
    constructor(message, retryable = false) {
        super(message);
        this.retryable = retryable;
        this.name = 'AiProviderError';
    }
}
exports.AiProviderError = AiProviderError;
class AiTimeoutError extends AiProviderError {
    constructor(timeoutMs) {
        super(`AI request timed out after ${timeoutMs}ms`, true);
        this.name = 'AiTimeoutError';
    }
}
exports.AiTimeoutError = AiTimeoutError;
class AiRateLimitError extends AiProviderError {
    retryAfterMs;
    constructor(retryAfterMs) {
        super(`AI rate limit exceeded${retryAfterMs ? ` — retry after ${retryAfterMs}ms` : ''}`, true);
        this.retryAfterMs = retryAfterMs;
        this.name = 'AiRateLimitError';
    }
}
exports.AiRateLimitError = AiRateLimitError;
class AiResponseParseError extends AiProviderError {
    rawContent;
    constructor(message, rawContent) {
        super(`Failed to parse AI response: ${message}`, false);
        this.rawContent = rawContent;
        this.name = 'AiResponseParseError';
    }
}
exports.AiResponseParseError = AiResponseParseError;
//# sourceMappingURL=ai.errors.js.map