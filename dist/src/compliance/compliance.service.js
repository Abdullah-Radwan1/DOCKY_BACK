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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplianceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const analysis_orchestrator_service_1 = require("../ai/services/analysis-orchestrator.service");
const usage_policy_service_1 = require("../policy/usage-policy.service");
let ComplianceService = class ComplianceService {
    prisma;
    orchestrator;
    policyService;
    constructor(prisma, orchestrator, policyService) {
        this.prisma = prisma;
        this.orchestrator = orchestrator;
        this.policyService = policyService;
    }
    async submitAnalysis(dto) {
        const guestIp = dto.userId ? undefined : dto.ip;
        await this.policyService.enforceAnalysisLimit(dto.userId, guestIp);
        const document = await this.prisma.document.findUnique({
            where: { id: dto.documentId },
            select: { id: true, status: true, uploadedBy: true, guestToken: true },
        });
        if (!document) {
            throw new common_1.NotFoundException(`Document not found`);
        }
        if (dto.userId) {
            if (document.uploadedBy !== dto.userId) {
                throw new common_1.NotFoundException('Document not found');
            }
        }
        else {
            if (document.guestToken !== guestIp) {
                throw new common_1.NotFoundException('Document not found');
            }
        }
        if (document.status !== 'ready') {
            throw new common_1.BadRequestException(`Document is not ready for analysis (status: ${document.status}). ` +
                'Wait for extraction and chunking to complete.');
        }
        const request = await this.prisma.analysisRequest.create({
            data: {
                queryText: dto.queryText,
                userId: dto.userId || null,
                guestId: dto.guestId || null,
                documentId: dto.documentId,
                status: 'pending',
            },
        });
        await this.policyService.incrementAnalysis(dto.userId, guestIp);
        await this.orchestrator.analyzeDocument(request.id);
        return this.getAnalysisResult(request.id);
    }
    async getAnalysisResult(requestId) {
        const result = await this.prisma.analysisRequest.findUnique({
            where: { id: requestId },
            include: {
                document: true,
                response: {
                    include: {
                        AnalysisResult: {
                            include: {
                                findings: {
                                    orderBy: { createdAt: 'asc' },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!result) {
            throw new common_1.NotFoundException(`Analysis request ${requestId} not found`);
        }
        return result;
    }
    async createQuery(data) {
        return this.prisma.analysisRequest.create({
            data: {
                queryText: data.queryText,
                userId: data.userId,
                documentId: data.documentId || null,
                status: 'pending',
            },
        });
    }
    async getQueryById(id) {
        const query = await this.prisma.analysisRequest.findUnique({
            where: { id },
            include: {
                response: true,
                document: true,
                user: true,
            },
        });
        if (!query) {
            throw new common_1.NotFoundException(`Compliance query with ID ${id} not found`);
        }
        return query;
    }
    async getQueriesByDocument(documentId) {
        return this.prisma.analysisRequest.findMany({
            where: { documentId },
            include: {
                response: {
                    include: {
                        AnalysisResult: {
                            include: {
                                findings: true,
                            },
                        },
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
};
exports.ComplianceService = ComplianceService;
exports.ComplianceService = ComplianceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        analysis_orchestrator_service_1.AnalysisOrchestratorService,
        usage_policy_service_1.UsagePolicyService])
], ComplianceService);
//# sourceMappingURL=compliance.service.js.map