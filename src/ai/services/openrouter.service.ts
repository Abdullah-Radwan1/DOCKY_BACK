import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type {
  AiProvider,
  AiCompletionOptions,
  AiCompletionResult,
} from '../interfaces/ai-provider.interface';
import {
  AiProviderError,
  AiTimeoutError,
  AiRateLimitError,
} from '../errors/ai.errors';

/**
 * OpenRouter chat-completion adapter.
 *
 * This is the ONLY class in the entire app that talks to OpenRouter.
 * It implements the vendor-agnostic `AiProvider` interface so it can be
 * swapped for any other provider by re-binding the DI token.
 */
@Injectable()
export class OpenRouterService implements AiProvider {
  private readonly logger = new Logger(OpenRouterService.name);

  private readonly apiKey: string;
  private readonly baseUrl: string;
  private readonly timeoutMs: number;

  constructor(private readonly config: ConfigService) {
    this.apiKey = this.config.getOrThrow<string>('OPENROUTER_API_KEY');
    this.baseUrl = this.config.get<string>(
      'OPENROUTER_BASE_URL',
      'https://openrouter.ai/api/v1',
    );
    this.timeoutMs = this.config.get<number>('OPENROUTER_TIMEOUT_MS', 120_000);
  }

  async complete(options: AiCompletionOptions): Promise<AiCompletionResult> {
    const fetchStart = Date.now();
    const url = `${this.baseUrl}/chat/completions`;

    const body = {
      model: options.model,
      messages: options.messages,
      max_tokens: options.maxTokens,
      temperature: options.temperature ?? 0.1,
      ...(options.responseFormat && {
        response_format: options.responseFormat,
      }),
    };

    const controller = new AbortController();
    const timer = setTimeout(() => {
      this.logger.error(`[OPENROUTER TIMEOUT TRIGGERED] Request exceeded timeoutMs: ${this.timeoutMs}`);
      controller.abort();
    }, this.timeoutMs);

    try {
      this.logger.log(
        `[OPENROUTER START] Calling OpenRouter model="${options.model}" messages=${options.messages.length} timeoutMs=${this.timeoutMs}`
      );

      this.logger.log(`[AWAIT START] fetch URL: ${url}`);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
          'HTTP-Referer': 'https://docky.app',
          'X-Title': 'Docky Compliance SaaS',
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      this.logger.log(`[AWAIT END] fetch completed in ${Date.now() - fetchStart}ms, status: ${response.status} ${response.statusText}`);

      if (!response.ok) {
        this.logger.error(`[OPENROUTER ERROR] HTTP status not OK: ${response.status}`);
        await this.handleHttpError(response);
      }

      this.logger.log(`[AWAIT START] response.json() parsing`);
      const parseStart = Date.now();
      const json = (await response.json()) as OpenRouterResponse;
      this.logger.log(`[AWAIT END] response.json() parsing took ${Date.now() - parseStart}ms`);

      const choice = json.choices?.[0];
      if (!choice?.message?.content) {
        this.logger.error(`[OPENROUTER ERROR] Empty content response: ${JSON.stringify(json)}`);
        throw new AiProviderError(
          'OpenRouter returned an empty response — no choices or content',
          true,
        );
      }

      const result: AiCompletionResult = {
        content: choice.message.content,
        model: json.model ?? options.model,
        promptTokens: json.usage?.prompt_tokens ?? 0,
        completionTokens: json.usage?.completion_tokens ?? 0,
        totalTokens: json.usage?.total_tokens ?? 0,
      };

      this.logger.log(
        `[OPENROUTER SUCCESS] response received: model="${result.model}" tokens=${result.totalTokens} ` +
          `(prompt=${result.promptTokens}, completion=${result.completionTokens}) totalTime=${Date.now() - fetchStart}ms`
      );

      return result;
    } catch (err) {
      if (err instanceof AiProviderError) throw err;

      if ((err as Error).name === 'AbortError') {
        this.logger.error(`[OPENROUTER ABORT] Request aborted/timed out in ${Date.now() - fetchStart}ms`);
        throw new AiTimeoutError(this.timeoutMs);
      }

      this.logger.error(
        `[OPENROUTER EXCEPTION] request failed: ${(err as Error).message}`,
        (err as Error).stack,
      );
      throw new AiProviderError(
        `OpenRouter request failed: ${(err as Error).message}`,
        true,
      );
    } finally {
      clearTimeout(timer);
    }
  }

  // ── Error handling ──────────────────────────────────────────────────────────

  private async handleHttpError(response: Response): Promise<never> {
    const status = response.status;
    let body = '';
    try {
      body = await response.text();
    } catch {
      /* ignore read errors */
    }

    this.logger.error(
      `OpenRouter HTTP ${status}: ${body.slice(0, 500)}`,
    );

    // Rate limit
    if (status === 429) {
      const retryAfter = response.headers.get('retry-after');
      const retryMs = retryAfter ? parseInt(retryAfter, 10) * 1000 : undefined;
      throw new AiRateLimitError(retryMs);
    }

    // Client errors (except 429) are non-retryable
    if (status >= 400 && status < 500) {
      throw new AiProviderError(
        `OpenRouter returned ${status}: ${body.slice(0, 300)}`,
        false,
      );
    }

    // Server errors are retryable
    throw new AiProviderError(
      `OpenRouter returned ${status}: ${body.slice(0, 300)}`,
      true,
    );
  }
}

// ── OpenRouter response typing (partial) ──────────────────────────────────────

interface OpenRouterResponse {
  id: string;
  model?: string;
  choices?: Array<{
    message?: {
      role: string;
      content: string;
    };
    finish_reason?: string;
  }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}
