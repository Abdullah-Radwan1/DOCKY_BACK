import { PrismaService } from '../../prisma/prisma.service';
import { PdfValidatorService } from './pdf-validator.service';
import { PdfExtractorService } from './pdf-extractor.service';
import { ChunkingService } from './chunking.service';
import { UploadDocumentResponseDto } from '../dto/upload-document-response.dto';
export interface GuestUploadResponseDto {
    document: UploadDocumentResponseDto;
    guestToken: string;
}
export declare class DocumentUploadService {
    private readonly prisma;
    private readonly validator;
    private readonly extractor;
    private readonly chunker;
    private readonly logger;
    constructor(prisma: PrismaService, validator: PdfValidatorService, extractor: PdfExtractorService, chunker: ChunkingService);
    uploadForUser(file: Express.Multer.File, userId: string): Promise<UploadDocumentResponseDto>;
    uploadForGuest(file: Express.Multer.File): Promise<GuestUploadResponseDto>;
    private runUploadPipeline;
    private buildCreateDocumentData;
    private computeChecksum;
    private generateGuestToken;
    private toResponseDto;
}
