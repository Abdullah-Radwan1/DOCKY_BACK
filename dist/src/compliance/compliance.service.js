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
const FREE_PLAN_ANALYSIS_LIMIT = 3;
const UNAUTHENTICATED_ANALYSIS_LIMIT = 1;
let ComplianceService = class ComplianceService {
    prisma;
    orchestrator;
    constructor(prisma, orchestrator) {
        this.prisma = prisma;
        this.orchestrator = orchestrator;
    }
    async submitAnalysis(dto) {
        await this.enforceAnalysisLimits(dto.userId, dto.guestId);
        const document = await this.prisma.document.findUnique({
            where: { id: dto.documentId },
            select: { id: true, status: true },
        });
        if (!document) {
            throw new common_1.NotFoundException(`Document ${dto.documentId} not found`);
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
    async enforceAnalysisLimits(userId, guestId) {
        if (userId) {
            const user = await this.prisma.profile.findUnique({
                where: { id: userId },
                select: { id: true, role: true },
            });
            const existingCount = await this.prisma.analysisRequest.count({
                where: {
                    userId,
                    status: { in: ['completed', 'processing', 'pending'] },
                },
            });
            if (existingCount >= FREE_PLAN_ANALYSIS_LIMIT) {
                throw new common_1.ForbiddenException(`Free plan allows ${FREE_PLAN_ANALYSIS_LIMIT} analyses. You have used ${existingCount}. Upgrade to continue.`);
            }
        }
        else if (guestId) {
            const existingCount = await this.prisma.analysisRequest.count({
                where: {
                    guestId,
                    status: { in: ['completed', 'processing', 'pending'] },
                },
            });
            if (existingCount >= UNAUTHENTICATED_ANALYSIS_LIMIT) {
                throw new common_1.ForbiddenException(`Unauthenticated users can perform ${UNAUTHENTICATED_ANALYSIS_LIMIT} analysis. Please sign in for more.`);
            }
        }
        else {
            throw new common_1.BadRequestException("Must provide userId or guestId for analysis");
        }
    }
};
exports.ComplianceService = ComplianceService;
exports.ComplianceService = ComplianceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        analysis_orchestrator_service_1.AnalysisOrchestratorService])
], ComplianceService);
//# sourceMappingURL=compliance.service.js.map