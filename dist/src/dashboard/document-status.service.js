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
exports.DocumentStatusService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DocumentStatusService = class DocumentStatusService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDocumentStatus(documentId) {
        const doc = await this.prisma.document.findUnique({
            where: { id: documentId },
            select: {
                id: true,
                status: true,
                expirationDate: true,
            },
        });
        if (!doc) {
            throw new common_1.NotFoundException(`Document with ID ${documentId} not found`);
        }
        const latestRequest = await this.prisma.analysisRequest.findFirst({
            where: { documentId },
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                status: true,
                response: {
                    select: {
                        AnalysisResult: {
                            select: {
                                overallVerdict: true,
                                riskLevel: true,
                                id: true,
                            },
                        },
                    },
                },
            },
        });
        const analysisResult = latestRequest?.response?.AnalysisResult ?? null;
        let openCritical = 0;
        let openHigh = 0;
        if (analysisResult) {
            [openCritical, openHigh] = await Promise.all([
                this.prisma.finding.count({
                    where: {
                        analysisId: analysisResult.id,
                        severity: 'critical',
                        status: 'open',
                    },
                }),
                this.prisma.finding.count({
                    where: {
                        analysisId: analysisResult.id,
                        severity: 'high',
                        status: 'open',
                    },
                }),
            ]);
        }
        const label = this.computeLabel({
            docStatus: doc.status,
            expirationDate: doc.expirationDate,
            requestStatus: latestRequest?.status ?? null,
            verdict: analysisResult?.overallVerdict ?? null,
            riskLevel: analysisResult?.riskLevel ?? null,
            openCritical,
            openHigh,
        });
        return {
            documentId,
            status: label,
            color: colorFor(label),
            requiresAction: requiresActionFor(label),
        };
    }
    computeLabel(ctx) {
        const { docStatus, expirationDate, requestStatus, verdict, riskLevel, openCritical, openHigh, } = ctx;
        if (docStatus === 'failed')
            return 'Processing Failed';
        if (docStatus === 'extracting' || docStatus === 'chunking')
            return 'Preparing Document';
        if (docStatus === 'uploaded' && !requestStatus)
            return 'Uploaded';
        if (requestStatus === 'pending')
            return 'Queued for Analysis';
        if (requestStatus === 'processing')
            return 'Analyzing';
        if (expirationDate && expirationDate < new Date())
            return 'Expired';
        if (riskLevel === 'high' || openCritical > 0)
            return 'Critical Attention Required';
        if (riskLevel === 'medium' ||
            openHigh > 0 ||
            verdict === 'partial' ||
            verdict === 'non_compliant')
            return 'Needs Review';
        if (verdict === 'compliant')
            return 'Compliant';
        return 'Ready for Analysis';
    }
};
exports.DocumentStatusService = DocumentStatusService;
exports.DocumentStatusService = DocumentStatusService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DocumentStatusService);
function colorFor(label) {
    switch (label) {
        case 'Processing Failed':
        case 'Critical Attention Required':
        case 'Expired':
            return 'destructive';
        case 'Needs Review':
        case 'Queued for Analysis':
            return 'warning';
        case 'Preparing Document':
        case 'Analyzing':
        case 'Uploaded':
            return 'info';
        case 'Compliant':
            return 'success';
        case 'Ready for Analysis':
        default:
            return 'muted';
    }
}
function requiresActionFor(label) {
    return [
        'Processing Failed',
        'Critical Attention Required',
        'Needs Review',
        'Expired',
    ].includes(label);
}
//# sourceMappingURL=document-status.service.js.map