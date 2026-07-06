"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OpenRouterService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenRouterService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ai_errors_1 = require("../errors/ai.errors");
let OpenRouterService = OpenRouterService_1 = class OpenRouterService {
    config;
    logger = new common_1.Logger(OpenRouterService_1.name);
    apiKey;
    baseUrl;
    timeoutMs;
    constructor(config) {
        this.config = config;
        this.apiKey = this.config.getOrThrow('OPENROUTER_API_KEY');
        this.baseUrl = this.config.get('OPENROUTER_BASE_URL', 'https://openrouter.ai/api/v1');
        this.timeoutMs = this.config.get('OPENROUTER_TIMEOUT_MS', 120_000);
    }
    async complete(options) {
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
        const timer = setTimeout(() => controller.abort(), this.timeoutMs);
        try {
            this.logger.log(`Calling OpenRouter model="${options.model}" messages=${options.messages.length}`);
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
            if (!response.ok) {
                await this.handleHttpError(response);
            }
            const json = (await response.json());
            const choice = json.choices?.[0];
            if (!choice?.message?.content) {
                throw new ai_errors_1.AiProviderError('OpenRouter returned an empty response — no choices or content', true);
            }
            const result = {
                content: choice.message.content,
                model: json.model ?? options.model,
                promptTokens: json.usage?.prompt_tokens ?? 0,
                completionTokens: json.usage?.completion_tokens ?? 0,
                totalTokens: json.usage?.total_tokens ?? 0,
            };
            this.logger.log(`OpenRouter response: model="${result.model}" tokens=${result.totalTokens} ` +
                `(prompt=${result.promptTokens}, completion=${result.completionTokens})`);
            return result;
        }
        catch (err) {
            if (err instanceof ai_errors_1.AiProviderError)
                throw err;
            if (err.name === 'AbortError') {
                throw new ai_errors_1.AiTimeoutError(this.timeoutMs);
            }
            this.logger.error(`OpenRouter request failed: ${err.message}`, err.stack);
            throw new ai_errors_1.AiProviderError(`OpenRouter request failed: ${err.message}`, true);
        }
        finally {
            clearTimeout(timer);
        }
    }
    async handleHttpError(response) {
        const status = response.status;
        let body = '';
        try {
            body = await response.text();
        }
        catch {
        }
        this.logger.error(`OpenRouter HTTP ${status}: ${body.slice(0, 500)}`);
        if (status === 429) {
            const retryAfter = response.headers.get('retry-after');
            const retryMs = retryAfter ? parseInt(retryAfter, 10) * 1000 : undefined;
            throw new ai_errors_1.AiRateLimitError(retryMs);
        }
        if (status >= 400 && status < 500) {
            throw new ai_errors_1.AiProviderError(`OpenRouter returned ${status}: ${body.slice(0, 300)}`, false);
        }
        throw new ai_errors_1.AiProviderError(`OpenRouter returned ${status}: ${body.slice(0, 300)}`, true);
    }
};
exports.OpenRouterService = OpenRouterService;
exports.OpenRouterService = OpenRouterService = OpenRouterService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], OpenRouterService);
//# sourceMappingURL=openrouter.service.js.map