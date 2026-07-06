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
var AnalysisOrchestratorService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalysisOrchestratorService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../../prisma/prisma.service");
const ai_provider_interface_1 = require("../interfaces/ai-provider.interface");
const ai_errors_1 = require("../errors/ai.errors");
const chunk_retrieval_service_1 = require("./chunk-retrieval.service");
const prompt_builder_service_1 = require("./prompt-builder.service");
const prisma_1 = require("../../generated/prisma");
let AnalysisOrchestratorService = AnalysisOrchestratorService_1 = class AnalysisOrchestratorService {
    prisma;
    aiProvider;
    chunkRetrieval;
    promptBuilder;
    config;
    logger = new common_1.Logger(AnalysisOrchestratorService_1.name);
    model;
    maxTokens;
    maxRetries;
    constructor(prisma, aiProvider, chunkRetrieval, promptBuilder, config) {
        this.prisma = prisma;
        this.aiProvider = aiProvider;
        this.chunkRetrieval = chunkRetrieval;
        this.promptBuilder = promptBuilder;
        this.config = config;
        this.model = this.config.get('OPENROUTER_MODEL', 'qwen/qwen3-235b-a22b');
        this.maxTokens = this.config.get('OPENROUTER_MAX_TOKENS', 4096);
        this.maxRetries = this.config.get('ANALYSIS_MAX_RETRIES', 3);
    }
    async analyzeDocument(requestId) {
        const request = await this.prisma.analysisRequest.findUnique({
            where: { id: requestId },
            include: { document: true },
        });
        if (!request) {
            throw new common_1.NotFoundException(`AnalysisRequest ${requestId} not found`);
        }
        if (!request.document) {
            throw new common_1.BadRequestException(`AnalysisRequest ${requestId} has no associated document`);
        }
        if (request.document.status !== 'ready') {
            await this.markFailed(requestId, `Document ${request.document.id} is not ready (status: ${request.document.status})`);
            throw new common_1.BadRequestException(`Document is not ready for analysis (status: ${request.document.status}). ` +
                'Upload and process the document first.');
        }
        if (request.attemptCount >= this.maxRetries) {
            await this.markFailed(requestId, `Max retries (${this.maxRetries}) exceeded`);
            throw new common_1.BadRequestException(`Analysis request ${requestId} has exceeded the maximum retry count (${this.maxRetries}).`);
        }
        await this.prisma.analysisRequest.update({
            where: { id: requestId },
            data: {
                status: prisma_1.AnalysisRequestStatus.processing,
                processingStartedAt: new Date(),
                attemptCount: { increment: 1 },
                errorMessage: null,
            },
        });
        try {
            const chunks = await this.chunkRetrieval.getRelevantChunks(request.document.id, request.queryText);
            if (chunks.length === 0) {
                throw new common_1.BadRequestException(`Document ${request.document.id} has no chunks. ` +
                    'The document may not have been processed correctly.');
            }
            const messages = this.promptBuilder.buildAnalysisPrompt(request.queryText, chunks);
            this.logger.log(`Sending analysis request ${requestId} to AI (model=${this.model}, chunks=${chunks.length})`);
            const aiResult = await this.aiProvider.complete({
                model: this.model,
                messages,
                maxTokens: this.maxTokens,
                temperature: 0.1,
                responseFormat: { type: 'json_object' },
            });
            const parsed = this.parseAiResponse(aiResult.content);
            await this.prisma.$transaction(async (tx) => {
                const aiResponse = await tx.aIResponse.create({
                    data: {
                        requestId,
                        response: parsed,
                        confidenceScore: parsed.confidence,
                        metadata: {
                            model: aiResult.model,
                            promptTokens: aiResult.promptTokens,
                            completionTokens: aiResult.completionTokens,
                            totalTokens: aiResult.totalTokens,
                            chunksUsed: chunks.length,
                        },
                        matchedChunks: chunks.map((c) => ({
                            chunkId: c.id,
                            chunkIndex: c.chunkIndex,
                            pageNumber: c.pageNumber,
                        })),
                    },
                });
                const analysisResult = await tx.analysisResult.create({
                    data: {
                        responseId: aiResponse.id,
                        summary: parsed.summary,
                        overallVerdict: this.mapVerdict(parsed.overallVerdict),
                        confidence: parsed.confidence,
                        riskLevel: this.mapRiskLevel(parsed.riskLevel),
                    },
                });
                if (parsed.findings.length > 0) {
                    await tx.finding.createMany({
                        data: parsed.findings.map((f) => ({
                            analysisId: analysisResult.id,
                            title: f.title,
                            description: f.description ?? null,
                            severity: this.mapSeverity(f.severity),
                            clauseReference: f.clauseReference ?? null,
                            pageNumber: f.pageNumber ?? null,
                            excerpt: f.excerpt ?? null,
                            recommendation: f.recommendation ?? null,
                            metadata: f.metadata ?? undefined,
                        })),
                    });
                }
                await tx.analysisRequest.update({
                    where: { id: requestId },
                    data: {
                        status: prisma_1.AnalysisRequestStatus.completed,
                        processingFinishedAt: new Date(),
                        errorMessage: null,
                    },
                });
            });
            this.logger.log(`Analysis ${requestId} completed: verdict=${parsed.overallVerdict}, ` +
                `findings=${parsed.findings.length}, tokens=${aiResult.totalTokens}`);
        }
        catch (err) {
            const message = err.message ?? 'Unknown error';
            this.logger.error(`Analysis ${requestId} failed: ${message}`, err.stack);
            await this.markFailed(requestId, message);
            throw err;
        }
    }
    parseAiResponse(raw) {
        let cleaned = raw.trim();
        if (cleaned.startsWith('```')) {
            cleaned = cleaned
                .replace(/^```(?:json)?\s*/i, '')
                .replace(/\s*```\s*$/, '');
        }
        let parsed;
        try {
            parsed = JSON.parse(cleaned);
        }
        catch {
            throw new ai_errors_1.AiResponseParseError('Invalid JSON from AI model', raw);
        }
        if (!parsed.summary || typeof parsed.summary !== 'string') {
            throw new ai_errors_1.AiResponseParseError('Missing or invalid "summary"', raw);
        }
        if (!parsed.overallVerdict) {
            throw new ai_errors_1.AiResponseParseError('Missing "overallVerdict"', raw);
        }
        if (typeof parsed.confidence !== 'number') {
            throw new ai_errors_1.AiResponseParseError('Missing or invalid "confidence"', raw);
        }
        if (!parsed.riskLevel) {
            throw new ai_errors_1.AiResponseParseError('Missing "riskLevel"', raw);
        }
        if (!Array.isArray(parsed.findings)) {
            throw new ai_errors_1.AiResponseParseError('"findings" must be an array', raw);
        }
        return parsed;
    }
    async markFailed(requestId, errorMessage) {
        await this.prisma.analysisRequest
            .update({
            where: { id: requestId },
            data: {
                status: prisma_1.AnalysisRequestStatus.failed,
                processingFinishedAt: new Date(),
                errorMessage: errorMessage.slice(0, 2000),
            },
        })
            .catch((updateErr) => this.logger.error(`Failed to mark request ${requestId} as failed`, updateErr));
    }
    mapVerdict(v) {
        const map = {
            compliant: prisma_1.AnalysisVerdict.compliant,
            non_compliant: prisma_1.AnalysisVerdict.non_compliant,
            partial: prisma_1.AnalysisVerdict.partial,
            unknown: prisma_1.AnalysisVerdict.unknown,
        };
        return map[v] ?? prisma_1.AnalysisVerdict.unknown;
    }
    mapRiskLevel(r) {
        const map = {
            low: prisma_1.RiskLevel.low,
            medium: prisma_1.RiskLevel.medium,
            high: prisma_1.RiskLevel.high,
        };
        return map[r] ?? prisma_1.RiskLevel.medium;
    }
    mapSeverity(s) {
        const map = {
            info: prisma_1.FindingSeverity.info,
            low: prisma_1.FindingSeverity.low,
            medium: prisma_1.FindingSeverity.medium,
            high: prisma_1.FindingSeverity.high,
            critical: prisma_1.FindingSeverity.critical,
        };
        return map[s] ?? prisma_1.FindingSeverity.info;
    }
};
exports.AnalysisOrchestratorService = AnalysisOrchestratorService;
exports.AnalysisOrchestratorService = AnalysisOrchestratorService = AnalysisOrchestratorService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(ai_provider_interface_1.AI_PROVIDER)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, Object, chunk_retrieval_service_1.ChunkRetrievalService,
        prompt_builder_service_1.PromptBuilderService,
        config_1.ConfigService])
], AnalysisOrchestratorService);
//# sourceMappingURL=analysis-orchestrator.service.js.map