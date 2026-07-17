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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const document_status_service_1 = require("./document-status.service");
let DashboardService = class DashboardService {
    prisma;
    documentStatusService;
    constructor(prisma, documentStatusService) {
        this.prisma = prisma;
        this.documentStatusService = documentStatusService;
    }
    async getSummary(userId) {
        const now = new Date();
        const in30Days = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
        const [docStatusGroups, analysisStatusGroups, verdictGroups, riskGroups, severityGroups, expiredCount, expiringSoon, unreadNotifCount, recentActivity, recentRequests, attentionDocs,] = await Promise.all([
            this.prisma.document.groupBy({
                by: ['status'],
                where: { uploadedBy: userId },
                _count: { id: true },
            }),
            this.prisma.analysisRequest.groupBy({
                by: ['status'],
                where: { userId },
                _count: { id: true },
            }),
            this.prisma.analysisResult.groupBy({
                by: ['overallVerdict'],
                where: {
                    Response: {
                        AnalysisRequest: { userId },
                    },
                },
                _count: { id: true },
            }),
            this.prisma.analysisResult.groupBy({
                by: ['riskLevel'],
                where: {
                    Response: {
                        AnalysisRequest: { userId },
                    },
                    riskLevel: { not: null },
                },
                _count: { id: true },
            }),
            this.prisma.finding.groupBy({
                by: ['severity'],
                where: {
                    status: 'open',
                    analysis: {
                        Response: {
                            AnalysisRequest: { userId },
                        },
                    },
                },
                _count: { id: true },
            }),
            this.prisma.document.count({
                where: {
                    uploadedBy: userId,
                    expirationDate: { lt: now },
                    status: 'ready',
                },
            }),
            this.prisma.document.findMany({
                where: {
                    uploadedBy: userId,
                    expirationDate: { gte: now, lte: in30Days },
                },
                select: {
                    id: true,
                    originalFileName: true,
                    expirationDate: true,
                },
                orderBy: { expirationDate: 'asc' },
            }),
            this.prisma.notification.count({
                where: {
                    userId,
                    status: 'unread',
                },
            }),
            this.prisma.activityLog.findMany({
                take: 10,
                orderBy: { createdAt: 'desc' },
                include: {
                    user: {
                        select: { email: true, fullName: true },
                    },
                },
            }),
            this.prisma.analysisRequest.findMany({
                where: { userId },
                take: 5,
                orderBy: { createdAt: 'desc' },
                include: {
                    document: {
                        select: { id: true, originalFileName: true },
                    },
                    response: {
                        include: {
                            AnalysisResult: {
                                select: {
                                    overallVerdict: true,
                                    riskLevel: true,
                                    confidence: true,
                                },
                            },
                        },
                    },
                },
            }),
            this.prisma.document.findMany({
                where: {
                    uploadedBy: userId,
                    OR: [
                        { status: 'failed' },
                        {
                            analysisRequests: {
                                some: {
                                    response: {
                                        AnalysisResult: {
                                            findings: {
                                                some: {
                                                    status: 'open',
                                                    severity: { in: ['critical', 'high'] },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    ],
                },
                select: {
                    id: true,
                    originalFileName: true,
                    status: true,
                    expirationDate: true,
                    analysisRequests: {
                        orderBy: { createdAt: 'desc' },
                        take: 1,
                        select: {
                            response: {
                                select: {
                                    AnalysisResult: {
                                        select: {
                                            id: true,
                                            riskLevel: true,
                                            overallVerdict: true,
                                            findings: {
                                                where: { status: 'open', severity: { in: ['critical', 'high'] } },
                                                select: { severity: true },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                take: 10,
            }),
        ]);
        const kpis = this.buildKpis({
            docStatusGroups,
            analysisStatusGroups,
            verdictGroups,
            expiredCount,
            expiringSoonCount: expiringSoon.length,
            unreadNotifCount,
        });
        const complianceDistribution = this.buildComplianceDistribution(verdictGroups);
        const riskDistribution = this.buildRiskDistribution(riskGroups);
        const findingsSeverityBreakdown = this.buildSeverityBreakdown(severityGroups);
        const documentStatusBreakdown = this.buildDocStatusBreakdown(docStatusGroups);
        const recentAnalyses = recentRequests.map((req) => {
            const result = req.response?.AnalysisResult ?? null;
            return {
                id: req.id,
                documentId: req.documentId ?? null,
                documentName: req.document?.originalFileName ?? null,
                requestStatus: req.status,
                verdict: (result?.overallVerdict ?? null),
                riskLevel: (result?.riskLevel ?? null),
                confidenceScore: result?.confidence ?? null,
                createdAt: req.createdAt.toISOString(),
            };
        });
        const documentsRequiringAttention = await Promise.all(attentionDocs.map(async (doc) => {
            const latestResult = doc.analysisRequests[0]?.response?.AnalysisResult ?? null;
            const findings = latestResult?.findings ?? [];
            const criticalFindings = findings.filter((f) => f.severity === 'critical').length;
            const highFindings = findings.filter((f) => f.severity === 'high').length;
            const { status: dashboardStatus } = await this.documentStatusService.getDocumentStatus(doc.id);
            return {
                id: doc.id,
                fileName: doc.originalFileName,
                dashboardStatus,
                riskLevel: (latestResult?.riskLevel ?? null),
                criticalFindings,
                highFindings,
                expirationDate: doc.expirationDate?.toISOString() ?? null,
            };
        }));
        const upcomingExpirations = expiringSoon.map((doc) => ({
            id: doc.id,
            fileName: doc.originalFileName,
            expirationDate: doc.expirationDate.toISOString(),
            daysUntilExpiration: Math.ceil((doc.expirationDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)),
        }));
        const recentActivityDtos = recentActivity.map((log) => ({
            id: log.id,
            action: log.action,
            entityType: log.entityType ?? null,
            entityId: log.entityId ?? null,
            userEmail: log.user?.email ?? null,
            userFullName: log.user?.fullName ?? null,
            metadata: log.metadata,
            createdAt: log.createdAt.toISOString(),
        }));
        return {
            generatedAt: now.toISOString(),
            kpis,
            complianceDistribution,
            riskDistribution,
            findingsSeverityBreakdown,
            documentStatusBreakdown,
            recentAnalyses,
            documentsRequiringAttention,
            upcomingExpirations,
            recentActivity: recentActivityDtos,
        };
    }
    buildKpis(ctx) {
        const docCount = (s) => ctx.docStatusGroups.find((g) => g.status === s)?._count.id ?? 0;
        const analysisCount = (s) => ctx.analysisStatusGroups.find((g) => g.status === s)?._count.id ?? 0;
        const verdictCount = (v) => ctx.verdictGroups.find((g) => g.overallVerdict === v)?._count.id ?? 0;
        const totalDocuments = docCount('uploaded') +
            docCount('extracting') +
            docCount('chunking') +
            docCount('ready') +
            docCount('failed');
        const completedAnalyses = analysisCount('completed');
        const compliantAnalyses = verdictCount('compliant');
        const complianceRate = completedAnalyses > 0
            ? Math.round((compliantAnalyses / completedAnalyses) * 100)
            : 0;
        return {
            totalDocuments,
            readyDocuments: docCount('ready'),
            processingDocuments: docCount('extracting') + docCount('chunking'),
            failedDocuments: docCount('failed'),
            totalAnalyses: analysisCount('pending') +
                analysisCount('processing') +
                completedAnalyses +
                analysisCount('failed'),
            completedAnalyses,
            pendingAnalyses: analysisCount('pending') + analysisCount('processing'),
            failedAnalyses: analysisCount('failed'),
            unreadNotifications: ctx.unreadNotifCount,
            expiredDocuments: ctx.expiredCount,
            expiringSoonDocuments: ctx.expiringSoonCount,
            complianceRate,
        };
    }
    buildComplianceDistribution(groups) {
        const get = (v) => groups.find((g) => g.overallVerdict === v)?._count.id ?? 0;
        return {
            compliant: get('compliant'),
            partial: get('partial'),
            non_compliant: get('non_compliant'),
            unknown: get('unknown'),
        };
    }
    buildRiskDistribution(groups) {
        const get = (r) => groups.find((g) => g.riskLevel === r)?._count.id ?? 0;
        return {
            low: get('low'),
            medium: get('medium'),
            high: get('high'),
        };
    }
    buildSeverityBreakdown(groups) {
        const get = (s) => groups.find((g) => g.severity === s)?._count.id ?? 0;
        return {
            info: get('info'),
            low: get('low'),
            medium: get('medium'),
            high: get('high'),
            critical: get('critical'),
        };
    }
    buildDocStatusBreakdown(groups) {
        const get = (s) => groups.find((g) => g.status === s)?._count.id ?? 0;
        return {
            uploaded: get('uploaded'),
            extracting: get('extracting'),
            chunking: get('chunking'),
            ready: get('ready'),
            failed: get('failed'),
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        document_status_service_1.DocumentStatusService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map