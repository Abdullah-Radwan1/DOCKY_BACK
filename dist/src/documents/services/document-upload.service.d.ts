import { PrismaService } from '../../prisma/prisma.service';
import { PdfValidatorService } from './pdf-validator.service';
import { PdfExtractorService } from './pdf-extractor.service';
import { ChunkingService } from './chunking.service';
import { DocumentStatus } from '../../generated/prisma';
import { UsagePolicyService } from '../../policy/usage-policy.service';
import { NotificationsService } from '../../notifications/notifications.service';
export interface UploadDocumentResponseDto {
    id: string;
    originalFileName: string;
    mimeType?: string;
    checksum?: string;
    fileSize?: number;
    pageCount?: number;
    totalChunks?: number;
    status: DocumentStatus;
    createdAt: Date;
    updatedAt: Date;
}
export interface GuestUploadResponseDto {
    document: UploadDocumentResponseDto;
    guestToken: string;
}
export declare class DocumentUploadService {
    private readonly prisma;
    private readonly validator;
    private readonly extractor;
    private readonly chunker;
    private readonly policyService;
    private readonly notificationsService;
    private readonly logger;
    constructor(prisma: PrismaService, validator: PdfValidatorService, extractor: PdfExtractorService, chunker: ChunkingService, policyService: UsagePolicyService, notificationsService: NotificationsService);
    uploadForUser(file: Express.Multer.File, userId: string): Promise<UploadDocumentResponseDto>;
    uploadForGuest(file: Express.Multer.File, ip: string): Promise<GuestUploadResponseDto>;
    private runUploadPipeline;
    private buildCreateDocumentData;
    private computeChecksum;
    private toResponseDto;
}
