import { ConfigService } from '@nestjs/config';
import type { AiProvider, AiCompletionOptions, AiCompletionResult } from '../interfaces/ai-provider.interface';
export declare class OpenRouterService implements AiProvider {
    private readonly config;
    private readonly logger;
    private readonly apiKey;
    private readonly baseUrl;
    private readonly timeoutMs;
    constructor(config: ConfigService);
    complete(options: AiCompletionOptions): Promise<AiCompletionResult>;
    private handleHttpError;
}
