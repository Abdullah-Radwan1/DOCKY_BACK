import { DocumentsService } from './documents.service';
import { DocumentUploadService } from './services/document-upload.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { UploadDocumentDto } from './dto/upload-document.dto';
export declare class DocumentsController {
    private readonly documentsService;
    private readonly documentUploadService;
    constructor(documentsService: DocumentsService, documentUploadService: DocumentUploadService);
    upload(file: Express.Multer.File, body: UploadDocumentDto): Promise<import("./dto/upload-document-response.dto").UploadDocumentResponseDto>;
    create(createDto: CreateDocumentDto): Promise<{
        organizationId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        language: string | null;
        expirationDate: Date | null;
        status: import("src/generated/prisma").DocumentStatus;
        totalChunks: number | null;
    }>;
    get(id: string): Promise<{
        uploader: {
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            organizationId: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        chunks: {
            id: string;
            chunkIndex: number;
            content: string;
            pageNumber: number | null;
            tokenCount: number | null;
        }[];
    } & {
        organizationId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        language: string | null;
        expirationDate: Date | null;
        status: import("src/generated/prisma").DocumentStatus;
        totalChunks: number | null;
    }>;
    getByOrg(organizationId: string): Promise<{
        organizationId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        language: string | null;
        expirationDate: Date | null;
        status: import("src/generated/prisma").DocumentStatus;
        totalChunks: number | null;
    }[]>;
    update(id: string, updateDto: UpdateDocumentDto): Promise<{
        organizationId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        language: string | null;
        expirationDate: Date | null;
        status: import("src/generated/prisma").DocumentStatus;
        totalChunks: number | null;
    }>;
    delete(id: string): Promise<{
        organizationId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        language: string | null;
        expirationDate: Date | null;
        status: import("src/generated/prisma").DocumentStatus;
        totalChunks: number | null;
    }>;
}
