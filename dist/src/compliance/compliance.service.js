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
let ComplianceService = class ComplianceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
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
                response: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async addAIResponse(data) {
        const query = await this.prisma.analysisRequest.findUnique({
            where: { id: data.queryId },
        });
        if (!query) {
            throw new common_1.NotFoundException(`Compliance query with ID ${data.queryId} not found`);
        }
        const [response] = await this.prisma.$transaction([
            this.prisma.aIResponse.create({
                data: {
                    requestId: data.queryId,
                    response: data.responseText,
                    confidenceScore: data.confidenceScore || null,
                    metadata: data.metadata || null,
                },
            }),
            this.prisma.analysisRequest.update({
                where: { id: data.queryId },
                data: { status: 'completed' },
            }),
        ]);
        return response;
    }
};
exports.ComplianceService = ComplianceService;
exports.ComplianceService = ComplianceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ComplianceService);
//# sourceMappingURL=compliance.service.js.map