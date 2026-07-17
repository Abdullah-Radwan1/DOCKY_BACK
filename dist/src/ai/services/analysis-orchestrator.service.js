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
exports.AnalysisOrchestratorService = exports.CombinedAnalysisStage = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../../prisma/prisma.service");
const ai_provider_interface_1 = require("../interfaces/ai-provider.interface");
const ai_errors_1 = require("../errors/ai.errors");
const chunk_retrieval_service_1 = require("./chunk-retrieval.service");
const prompt_builder_service_1 = require("./prompt-builder.service");
const prisma_1 = require("../../generated/prisma");
const analysis_options_interface_1 = require("../interfaces/analysis-options.interface");
let CombinedAnalysisStage = class CombinedAnalysisStage {
    aiProvider;
    promptBuilder;
    config;
    name = 'CombinedAnalysis';
    model;
    maxTokens;
    constructor(aiProvider, promptBuilder, config) {
        this.aiProvider = aiProvider;
        this.promptBuilder = promptBuilder;
        this.config = config;
        this.model = this.config.get('OPENROUTER_MODEL', 'qwen/qwen3-235b-a22b');
        this.maxTokens = this.config.get('OPENROUTER_MAX_TOKENS', 4096);
    }
    async run(ctx) {
        const messages = this.promptBuilder.buildAnalysisPrompt(ctx.queryText, ctx.chunks, ctx.options);
        const aiResult = await this.callAi(messages);
        return this.parseAiResponse(aiResult.content, ctx.options);
    }
    async callAi(messages) {
        return this.aiProvider.complete({
            model: this.model,
            messages,
            maxTokens: this.maxTokens,
            temperature: 0.1,
            responseFormat: { type: 'json_object' },
        });
    }
    parseAiResponse(raw, options) {
        const cleaned = this.stripMarkdownFences(raw);
        let parsed;
        try {
            parsed = JSON.parse(cleaned);
        }
        catch {
            throw new ai_errors_1.AiResponseParseError('Invalid JSON from AI model', raw);
        }
        this.validateResponse(parsed, raw, options);
        return parsed;
    }
    stripMarkdownFences(raw) {
        const trimmed = raw.trim();
        if (!trimmed.startsWith('```'))
            return trimmed;
        return trimmed
            .replace(/^```(?:json)?\s*/i, '')
            .replace(/\s*```\s*$/, '');
    }
    validateResponse(parsed, raw, options) {
        if (!parsed.summary || typeof parsed.summary !== 'string') {
            throw new ai_errors_1.AiResponseParseError('Missing or invalid "summary"', raw);
        }
        if (!parsed.contract) {
            throw new ai_errors_1.AiResponseParseError('Missing "contract" domain', raw);
        }
        if (options.compliance) {
            if (!parsed.compliance) {
                throw new ai_errors_1.AiResponseParseError('Missing "compliance" domain when requested', raw);
            }
            const { compliance } = parsed;
            if (!compliance.overallVerdict) {
                throw new ai_errors_1.AiResponseParseError('Missing "compliance.overallVerdict"', raw);
            }
            if (typeof compliance.confidence !== 'number') {
                throw new ai_errors_1.AiResponseParseError('Missing or invalid "compliance.confidence"', raw);
            }
            if (!compliance.riskLevel) {
                throw new ai_errors_1.AiResponseParseError('Missing "compliance.riskLevel"', raw);
            }
            if (!Array.isArray(compliance.findings)) {
                throw new ai_errors_1.AiResponseParseError('"compliance.findings" must be an array', raw);
            }
            if (!Array.isArray(compliance.requirements)) {
                throw new ai_errors_1.AiResponseParseError('"compliance.requirements" must be an array', raw);
            }
        }
    }
};
exports.CombinedAnalysisStage = CombinedAnalysisStage;
exports.CombinedAnalysisStage = CombinedAnalysisStage = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(ai_provider_interface_1.AI_PROVIDER)),
    __metadata("design:paramtypes", [Object, prompt_builder_service_1.PromptBuilderService,
        config_1.ConfigService])
], CombinedAnalysisStage);
let AnalysisOrchestratorService = AnalysisOrchestratorService_1 = class AnalysisOrchestratorService {
    prisma;
    chunkRetrieval;
    config;
    stages;
    logger = new common_1.Logger(AnalysisOrchestratorService_1.name);
    maxRetries;
    constructor(prisma, chunkRetrieval, config, stages) {
        this.prisma = prisma;
        this.chunkRetrieval = chunkRetrieval;
        this.config = config;
        this.stages = stages;
        this.maxRetries = this.config.get('ANALYSIS_MAX_RETRIES', 3);
    }
    async analyzeDocument(requestId, options = analysis_options_interface_1.DEFAULT_ANALYSIS_OPTIONS) {
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
            this.logger.log(`Running ${this.stages.length} analysis stage(s) for request ${requestId} ` +
                `(model stages: ${this.stages.map((s) => s.name).join(' → ')}, chunks=${chunks.length})`);
            const parsed = await this.runStages({
                requestId,
                documentId: request.document.id,
                queryText: request.queryText,
                chunks,
                result: {},
                options,
            });
            await this.persist(requestId, request.document.id, parsed, chunks, options);
            this.logger.log(`Analysis ${requestId} completed: ` +
                `verdict=${parsed.compliance?.overallVerdict ?? 'skipped'}, ` +
                `risk=${parsed.compliance?.riskLevel ?? 'skipped'}, ` +
                `findings=${parsed.compliance?.findings?.length ?? 0}, ` +
                `requirements=${parsed.compliance?.requirements?.length ?? 0}`);
        }
        catch (err) {
            const message = err.message ?? 'Unknown error';
            this.logger.error(`Analysis ${requestId} failed: ${message}`, err.stack);
            await this.markFailed(requestId, message);
            throw err;
        }
    }
    async runStages(ctx) {
        for (const stage of this.stages) {
            this.logger.log(`Executing stage: ${stage.name}`);
            const partial = await stage.run(ctx);
            ctx.result = this.mergePartial(ctx.result, partial);
        }
        return ctx.result;
    }
    mergePartial(acc, incoming) {
        return { ...acc, ...incoming };
    }
    async persist(requestId, documentId, parsed, chunks, options) {
        await this.prisma.$transaction(async (tx) => {
            const aiResponse = await tx.aIResponse.create({
                data: {
                    requestId,
                    response: parsed,
                    confidenceScore: parsed.compliance?.confidence ?? null,
                    metadata: {
                        stages: this.stages.map((s) => s.name),
                        chunksUsed: chunks.length,
                        options,
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
                    overallVerdict: parsed.compliance
                        ? this.mapVerdict(parsed.compliance.overallVerdict)
                        : prisma_1.AnalysisVerdict.unknown,
                    confidence: parsed.compliance?.confidence ?? null,
                    riskLevel: parsed.compliance
                        ? this.mapRiskLevel(parsed.compliance.riskLevel)
                        : prisma_1.RiskLevel.medium,
                },
            });
            if (parsed.compliance && Array.isArray(parsed.compliance.findings) && parsed.compliance.findings.length > 0) {
                await tx.finding.createMany({
                    data: parsed.compliance.findings.map((f) => ({
                        analysisId: analysisResult.id,
                        title: f.title,
                        description: f.description ?? null,
                        severity: this.mapSeverity(f.severity),
                        clauseReference: f.clauseReference ?? null,
                        pageNumber: f.pageNumber ?? null,
                        excerpt: f.excerpt ?? null,
                        recommendation: f.recommendation ?? null,
                        metadata: {
                            ...(f.metadata ?? {}),
                            category: f.category ?? null,
                            affectedRequirement: f.affectedRequirement ?? null,
                        },
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
            await this.updateExpirationDate(tx, documentId, parsed.contract.expirationDate);
        });
    }
    async updateExpirationDate(tx, documentId, expirationDate) {
        if (!expirationDate)
            return;
        const parsedDate = new Date(expirationDate);
        if (isNaN(parsedDate.getTime())) {
            this.logger.warn(`AI returned an invalid expirationDate: "${expirationDate}" — skipping update`);
            return;
        }
        await tx.document.update({
            where: { id: documentId },
            data: { expirationDate: parsedDate },
        });
        this.logger.log(`Document ${documentId} expiration date set to ${expirationDate}`);
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
            .catch((err) => this.logger.error(`Failed to mark request ${requestId} as failed`, err));
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
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        chunk_retrieval_service_1.ChunkRetrievalService,
        config_1.ConfigService, Array])
], AnalysisOrchestratorService);
//# sourceMappingURL=analysis-orchestrator.service.js.map