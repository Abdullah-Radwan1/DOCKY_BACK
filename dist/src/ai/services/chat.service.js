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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ChatService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../../prisma/prisma.service");
const ai_provider_interface_1 = require("../interfaces/ai-provider.interface");
const chat_prompt_builder_service_1 = require("./chat-prompt-builder.service");
const chunk_retrieval_service_1 = require("./chunk-retrieval.service");
let ChatService = ChatService_1 = class ChatService {
    prisma;
    aiProvider;
    promptBuilder;
    chunkRetrieval;
    config;
    logger = new common_1.Logger(ChatService_1.name);
    model;
    maxTokens;
    constructor(prisma, aiProvider, promptBuilder, chunkRetrieval, config) {
        this.prisma = prisma;
        this.aiProvider = aiProvider;
        this.promptBuilder = promptBuilder;
        this.chunkRetrieval = chunkRetrieval;
        this.config = config;
        this.model = this.config.get('OPENROUTER_MODEL', 'qwen/qwen3-235b-a22b');
        this.maxTokens = this.config.get('CHAT_MAX_TOKENS', 1024);
    }
    async chat(dto) {
        const document = await this.prisma.document.findUnique({
            where: { id: dto.documentId },
            select: { id: true, status: true },
        });
        if (!document) {
            throw new common_1.NotFoundException(`Document ${dto.documentId} not found`);
        }
        if (document.status !== 'ready') {
            throw new common_1.BadRequestException(`Document is not ready (status: ${document.status}). ` +
                'Wait for processing to complete before chatting.');
        }
        const chunks = await this.chunkRetrieval.getRelevantChunks(dto.documentId, dto.message);
        const existingAnalysis = dto.analysisRequestId
            ? await this.loadAnalysis(dto.analysisRequestId)
            : null;
        const ctx = {
            userMessage: dto.message,
            history: (dto.history ?? []),
            documentChunks: chunks.map((c) => ({
                content: c.content,
                pageNumber: c.pageNumber,
                chunkIndex: c.chunkIndex,
            })),
            existingAnalysis,
        };
        const messages = this.promptBuilder.buildChatPrompt(ctx);
        this.logger.log(`Chat request for document=${dto.documentId} ` +
            `history=${ctx.history.length} chunk(s)=${chunks.length} ` +
            `hasAnalysis=${existingAnalysis !== null}`);
        const result = await this.aiProvider.complete({
            model: this.model,
            messages,
            maxTokens: this.maxTokens,
            temperature: 0.3,
        });
        this.logger.log(`Chat reply for document=${dto.documentId} tokens=${result.totalTokens}`);
        return { reply: result.content };
    }
    async loadAnalysis(analysisRequestId) {
        const request = await this.prisma.analysisRequest.findUnique({
            where: { id: analysisRequestId },
            select: {
                status: true,
                response: {
                    select: { response: true },
                },
            },
        });
        if (!request || request.status !== 'completed' || !request.response) {
            return null;
        }
        try {
            return request.response.response;
        }
        catch {
            this.logger.warn(`Could not parse analysis response for request ${analysisRequestId}`);
            return null;
        }
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = ChatService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(ai_provider_interface_1.AI_PROVIDER)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, Object, chat_prompt_builder_service_1.ChatPromptBuilderService,
        chunk_retrieval_service_1.ChunkRetrievalService,
        config_1.ConfigService])
], ChatService);
//# sourceMappingURL=chat.service.js.map