import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { type AiProvider } from '../interfaces/ai-provider.interface';
import { ChatPromptBuilderService } from './chat-prompt-builder.service';
import { ChunkRetrievalService } from './chunk-retrieval.service';
import type { DocumentChatDto } from '../dto/document-chat.dto';
export declare class ChatService {
    private readonly prisma;
    private readonly aiProvider;
    private readonly promptBuilder;
    private readonly chunkRetrieval;
    private readonly config;
    private readonly logger;
    private readonly model;
    private readonly maxTokens;
    constructor(prisma: PrismaService, aiProvider: AiProvider, promptBuilder: ChatPromptBuilderService, chunkRetrieval: ChunkRetrievalService, config: ConfigService);
    chat(dto: DocumentChatDto): Promise<{
        reply: string;
    }>;
    private loadAnalysis;
}
