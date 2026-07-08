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
var DocumentUploadService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUploadService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const prisma_service_1 = require("../../prisma/prisma.service");
const prisma_1 = require("../../generated/prisma");
const pdf_validator_service_1 = require("./pdf-validator.service");
const pdf_extractor_service_1 = require("./pdf-extractor.service");
const chunking_service_1 = require("./chunking.service");
let DocumentUploadService = DocumentUploadService_1 = class DocumentUploadService {
    prisma;
    validator;
    extractor;
    chunker;
    logger = new common_1.Logger(DocumentUploadService_1.name);
    constructor(prisma, validator, extractor, chunker) {
        this.prisma = prisma;
        this.validator = validator;
        this.extractor = extractor;
        this.chunker = chunker;
    }
    async uploadForUser(file, userId) {
        return this.runUploadPipeline(file, {
            type: 'user',
            userId,
        });
    }
    async uploadForGuest(file) {
        const guestToken = this.generateGuestToken();
        const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const document = await this.runUploadPipeline(file, {
            type: 'guest',
            guestToken,
            expirationDate,
        });
        return {
            document,
            guestToken,
        };
    }
    async runUploadPipeline(file, owner) {
        await this.validator.validate(file);
        const checksum = this.computeChecksum(file.buffer);
        this.logger.log(`SHA-256 checksum for "${file.originalname}": ${checksum}`);
        const existing = await this.prisma.document.findFirst({
            where: { checksum },
            select: { id: true, originalFileName: true },
        });
        if (existing) {
            this.logger.warn(`Duplicate detected: checksum ${checksum} matches document ${existing.id} ("${existing.originalFileName}")`);
            throw new common_1.ConflictException({
                message: 'A document with identical content already exists.',
                existingDocumentId: existing.id,
            });
        }
        const createdDocument = await this.prisma.document.create({
            data: this.buildCreateDocumentData(file, checksum, owner),
        });
        const documentId = createdDocument.id;
        this.logger.log(`Document record created: ${documentId}`);
        try {
            await this.prisma.document.update({
                where: { id: documentId },
                data: { status: prisma_1.DocumentStatus.extracting },
            });
            const { text, pageCount } = await this.extractor.extract(file.buffer, file.originalname);
            await this.prisma.document.update({
                where: { id: documentId },
                data: { status: prisma_1.DocumentStatus.chunking },
            });
            const chunks = this.chunker.chunk(text, file.originalname);
            const finalDocument = await this.prisma.$transaction(async (tx) => {
                await tx.documentChunk.createMany({
                    data: chunks.map((c) => ({
                        documentId,
                        chunkIndex: c.chunkIndex,
                        content: c.content,
                        pageNumber: c.pageNumber,
                        tokenCount: c.tokenCount,
                    })),
                });
                return tx.document.update({
                    where: { id: documentId },
                    data: {
                        status: prisma_1.DocumentStatus.ready,
                        pageCount,
                        totalChunks: chunks.length,
                    },
                });
            });
            this.logger.log(`Document ${documentId} is ready: ${pageCount} page(s), ${chunks.length} chunk(s).`);
            return this.toResponseDto(finalDocument);
        }
        catch (err) {
            this.logger.error(`Pipeline failed for document ${documentId}: ${err.message}`, err.stack);
            await this.prisma.document
                .update({
                where: { id: documentId },
                data: { status: prisma_1.DocumentStatus.failed },
            })
                .catch((updateErr) => this.logger.error(`Failed to mark document ${documentId} as failed`, updateErr));
            if (err instanceof common_1.ConflictException ||
                err instanceof common_1.InternalServerErrorException) {
                throw err;
            }
            throw new common_1.InternalServerErrorException('An unexpected error occurred while processing the PDF.');
        }
    }
    buildCreateDocumentData(file, checksum, owner) {
        if (owner.type === 'user') {
            return {
                uploadedBy: owner.userId,
                guestToken: null,
                isGuest: false,
                expirationDate: null,
                originalFileName: file.originalname,
                mimeType: file.mimetype,
                fileSize: file.size,
                checksum,
                status: prisma_1.DocumentStatus.uploaded,
            };
        }
        return {
            uploadedBy: null,
            guestToken: owner.guestToken,
            isGuest: true,
            expirationDate: owner.expirationDate ?? null,
            originalFileName: file.originalname,
            mimeType: file.mimetype,
            fileSize: file.size,
            checksum,
            status: prisma_1.DocumentStatus.uploaded,
        };
    }
    computeChecksum(buffer) {
        return (0, crypto_1.createHash)('sha256').update(buffer).digest('hex');
    }
    generateGuestToken() {
        return (0, crypto_1.randomBytes)(32).toString('hex');
    }
    toResponseDto(doc) {
        return {
            id: doc.id,
            originalFileName: doc.originalFileName,
            mimeType: doc.mimeType ?? undefined,
            checksum: doc.checksum ?? undefined,
            fileSize: doc.fileSize ?? undefined,
            pageCount: doc.pageCount ?? undefined,
            totalChunks: doc.totalChunks ?? undefined,
            status: doc.status,
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt,
        };
    }
};
exports.DocumentUploadService = DocumentUploadService;
exports.DocumentUploadService = DocumentUploadService = DocumentUploadService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        pdf_validator_service_1.PdfValidatorService,
        pdf_extractor_service_1.PdfExtractorService,
        chunking_service_1.ChunkingService])
], DocumentUploadService);
//# sourceMappingURL=document-upload.service.js.map