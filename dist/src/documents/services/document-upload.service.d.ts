import { PrismaService } from '../../prisma/prisma.service';
import { PdfValidatorService } from './pdf-validator.service';
import { PdfExtractorService } from './pdf-extractor.service';
import { ChunkingService } from './chunking.service';
import { UploadDocumentResponseDto } from '../dto/upload-document-response.dto';
export declare class DocumentUploadService {
    private readonly prisma;
    private readonly validator;
    private readonly extractor;
    private readonly chunker;
    private readonly logger;
    constructor(prisma: PrismaService, validator: PdfValidatorService, extractor: PdfExtractorService, chunker: ChunkingService);
    upload(file: Express.Multer.File, uploadedBy?: string): Promise<UploadDocumentResponseDto>;
    private computeChecksum;
    private toResponseDto;
}
