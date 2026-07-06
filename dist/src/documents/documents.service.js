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
exports.DocumentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_1 = require("../generated/prisma");
const pagination_utils_1 = require("../common/utils/pagination.utils");
let DocumentsService = class DocumentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createDocument(data) {
        return this.prisma.document.create({
            data: {
                originalFileName: data.originalFileName,
                uploadedBy: data.uploadedBy ?? null,
                mimeType: data.mimeType ?? null,
                checksum: data.checksum ?? null,
                fileSize: data.fileSize ?? null,
                pageCount: data.pageCount ?? null,
                language: data.language ?? null,
                expirationDate: data.expirationDate ?? null,
                status: prisma_1.DocumentStatus.uploaded,
            },
        });
    }
    async getDocumentById(id) {
        const document = await this.prisma.document.findUnique({
            where: { id },
            include: {
                uploader: true,
                chunks: {
                    orderBy: { chunkIndex: 'asc' },
                    select: {
                        id: true,
                        chunkIndex: true,
                        pageNumber: true,
                        tokenCount: true,
                        content: true,
                    },
                },
            },
        });
        if (!document) {
            throw new common_1.NotFoundException(`Document with ID ${id} not found`);
        }
        return document;
    }
    async getDocuments(userId, query) {
        return (0, pagination_utils_1.paginatePrisma)(this.prisma.document, query, {
            searchFields: ['originalFileName'],
            defaultSortBy: 'createdAt',
            where: { uploadedBy: userId },
        });
    }
    async updateDocument(id, data) {
        const { uploadedBy: _uploader, ...scalars } = data;
        try {
            return await this.prisma.document.update({
                where: { id },
                data: scalars,
            });
        }
        catch {
            throw new common_1.NotFoundException(`Document with ID ${id} not found to update`);
        }
    }
    async deleteDocument(id) {
        try {
            return await this.prisma.document.delete({
                where: { id },
            });
        }
        catch {
            throw new common_1.NotFoundException(`Document with ID ${id} not found to delete`);
        }
    }
};
exports.DocumentsService = DocumentsService;
exports.DocumentsService = DocumentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DocumentsService);
//# sourceMappingURL=documents.service.js.map