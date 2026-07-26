/**
 * Types used exclusively by the conversational chat pipeline.
 *
 * These are kept separate from the analysis pipeline types to make
 * each concern independently evolvable.
 */
import type { AiAnalysisResponse } from './ai-analysis-response.interface';

// ── Chat history ─────────────────────────────────────────────────────────────

export type ChatRole = 'user' | 'assistant';

/**
 * A single turn in the conversation history.
 *
 * `role` distinguishes the human from the AI assistant.
 * `content` is the plain-text message — never JSON.
 */
export interface ChatHistoryMessage {
  role: ChatRole;
  content: string;
}

// ── Context passed to the prompt builder ─────────────────────────────────────

/**
 * Everything the chat prompt builder needs to construct the messages array
 * for a conversational AI call.
 */
export interface ChatPromptContext {
  /** The user's current question / message. */
  userMessage: string;

  /**
   * Prior conversation turns, oldest first.
   * The prompt builder injects these between the system prompt and the
   * current user message so the model has full conversational context.
   */
  history: ChatHistoryMessage[];

  /**
   * Document chunks to provide as the "original document" context.
   * Ordered by chunk index; page numbers included where available.
   */
  documentChunks: Array<{
    content: string;
    pageNumber: number | null;
    chunkIndex: number;
  }>;

  /**
   * The structured analysis that was already produced for this document.
   * The AI uses this to answer questions without re-running an analysis.
   * Pass `null` if no analysis exists yet (the AI will rely on the raw text).
   */
  existingAnalysis: AiAnalysisResponse | null;
}
