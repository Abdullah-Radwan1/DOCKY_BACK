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
        id: string;
        organizationId: string;
        uploadedBy: string;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        totalChunks: number | null;
        language: string | null;
        status: import("src/generated/prisma").DocumentStatus;
        expirationDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    get(id: string): Promise<{
        uploader: {
            id: string;
            organizationId: string | null;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
        };
        chunks: {
            id: string;
            chunkIndex: number;
            content: string;
            pageNumber: number | null;
            tokenCount: number | null;
        }[];
    } & {
        id: string;
        organizationId: string;
        uploadedBy: string;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        totalChunks: number | null;
        language: string | null;
        status: import("src/generated/prisma").DocumentStatus;
        expirationDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getByOrg(organizationId: string): Promise<{
        id: string;
        organizationId: string;
        uploadedBy: string;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        totalChunks: number | null;
        language: string | null;
        status: import("src/generated/prisma").DocumentStatus;
        expirationDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    update(id: string, updateDto: UpdateDocumentDto): Promise<{
        id: string;
        organizationId: string;
        uploadedBy: string;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        totalChunks: number | null;
        language: string | null;
        status: import("src/generated/prisma").DocumentStatus;
        expirationDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<{
        id: string;
        organizationId: string;
        uploadedBy: string;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        totalChunks: number | null;
        language: string | null;
        status: import("src/generated/prisma").DocumentStatus;
        expirationDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
