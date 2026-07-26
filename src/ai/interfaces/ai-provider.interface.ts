/**
 * Swappable AI provider contract.
 *
 * Business logic codes against this interface, never against a specific
 * vendor SDK. To switch from OpenRouter to Azure OpenAI, Anthropic, etc.,
 * implement `AiProvider` and rebind the `AI_PROVIDER` token.
 */

// ── Message / request types ──────────────────────────────────────────────────

export interface AiChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface AiCompletionOptions {
  model: string;
  messages: AiChatMessage[];
  maxTokens?: number;
  temperature?: number;
  responseFormat?: { type: 'json_object' };
}

// ── Response types ───────────────────────────────────────────────────────────

export interface AiCompletionResult {
  /** Raw text content returned by the model. */
  content: string;
  /** Actual model identifier used (may differ from requested). */
  model: string;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}

// ── Provider interface + injection token ─────────────────────────────────────

export const AI_PROVIDER = Symbol('AI_PROVIDER');

export interface AiProvider {
  /**
   * Send a chat-completion request and return the result.
   * Implementations must handle timeouts and throw typed errors.
   */
  complete(options: AiCompletionOptions): Promise<AiCompletionResult>;
}
