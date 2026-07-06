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
var ChunkRetrievalService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChunkRetrievalService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const CHARS_PER_TOKEN = 4;
let ChunkRetrievalService = ChunkRetrievalService_1 = class ChunkRetrievalService {
    prisma;
    logger = new common_1.Logger(ChunkRetrievalService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getChunksForDocument(documentId) {
        return this.prisma.documentChunk.findMany({
            where: { documentId },
            orderBy: { chunkIndex: 'asc' },
        });
    }
    async getRelevantChunks(documentId, _query, tokenBudget = 30_000) {
        const allChunks = await this.getChunksForDocument(documentId);
        const selected = [];
        let tokensUsed = 0;
        for (const chunk of allChunks) {
            const chunkTokens = chunk.tokenCount ?? Math.ceil(chunk.content.length / CHARS_PER_TOKEN);
            if (tokensUsed + chunkTokens > tokenBudget && selected.length > 0) {
                this.logger.log(`Token budget reached (${tokensUsed}/${tokenBudget}) — ` +
                    `selected ${selected.length}/${allChunks.length} chunks`);
                break;
            }
            selected.push(chunk);
            tokensUsed += chunkTokens;
        }
        this.logger.log(`Retrieved ${selected.length} chunk(s) for document ${documentId} ` +
            `(~${tokensUsed} tokens)`);
        return selected;
    }
};
exports.ChunkRetrievalService = ChunkRetrievalService;
exports.ChunkRetrievalService = ChunkRetrievalService = ChunkRetrievalService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChunkRetrievalService);
//# sourceMappingURL=chunk-retrieval.service.js.map