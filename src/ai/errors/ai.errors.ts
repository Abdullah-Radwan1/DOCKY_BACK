/**
 * Typed error hierarchy for AI provider failures.
 *
 * The orchestrator catches these to decide whether to retry or permanently
 * fail an analysis request.
 */

export class AiProviderError extends Error {
  constructor(
    message: string,
    public readonly retryable: boolean = false,
  ) {
    super(message);
    this.name = 'AiProviderError';
  }
}

export class AiTimeoutError extends AiProviderError {
  constructor(timeoutMs: number) {
    super(`AI request timed out after ${timeoutMs}ms`, true);
    this.name = 'AiTimeoutError';
  }
}

export class AiRateLimitError extends AiProviderError {
  constructor(public readonly retryAfterMs?: number) {
    super(
      `AI rate limit exceeded${retryAfterMs ? ` — retry after ${retryAfterMs}ms` : ''}`,
      true,
    );
    this.name = 'AiRateLimitError';
  }
}

export class AiResponseParseError extends AiProviderError {
  constructor(
    message: string,
    public readonly rawContent: string,
  ) {
    super(`Failed to parse AI response: ${message}`, false);
    this.name = 'AiResponseParseError';
  }
}
