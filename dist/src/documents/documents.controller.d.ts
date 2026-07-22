import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { DocumentsService } from './documents.service';
import { DocumentUploadService } from './services/document-upload.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
type AuthenticatedRequest = Request & {
    user: {
        id: string;
        [key: string]: any;
    };
};
export declare class DocumentsController {
    private readonly documentsService;
    private readonly documentUploadService;
    constructor(documentsService: DocumentsService, documentUploadService: DocumentUploadService);
    private static readonly uploadInterceptor;
    uploadForUser(file: Express.Multer.File, req: AuthenticatedRequest): Promise<import("./services/document-upload.service").UploadDocumentResponseDto>;
    uploadForGuest(file: Express.Multer.File, ip: string): Promise<import("./services/document-upload.service").GuestUploadResponseDto>;
    create(createDto: CreateDocumentDto, req: AuthenticatedRequest): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").DocumentStatus;
        guestToken: string | null;
        isGuest: boolean;
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        totalChunks: number | null;
        language: string | null;
        expirationDate: Date | null;
    }>;
    getAll(req: AuthenticatedRequest, query: PaginationQueryDto): Promise<import("../common/utils/pagination.utils").PaginatedResult<any>>;
    get(id: string, req: AuthenticatedRequest): Promise<{
        uploader: {
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            allowEmailNotifications: boolean;
            allowExpiryReminders: boolean;
            allowRiskAlerts: boolean;
            allowAnalysisAlerts: boolean;
            plan: import("src/generated/prisma").PlanType;
            id: string;
            passwordHash: string | null;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").DocumentStatus;
        guestToken: string | null;
        isGuest: boolean;
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        totalChunks: number | null;
        language: string | null;
        expirationDate: Date | null;
    }>;
    getStatus(id: string): Promise<{
        status: import("src/generated/prisma").DocumentStatus;
    }>;
    update(id: string, updateDto: UpdateDocumentDto, req: AuthenticatedRequest): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").DocumentStatus;
        guestToken: string | null;
        isGuest: boolean;
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        totalChunks: number | null;
        language: string | null;
        expirationDate: Date | null;
    }>;
    delete(id: string, req: AuthenticatedRequest): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").DocumentStatus;
        guestToken: string | null;
        isGuest: boolean;
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        totalChunks: number | null;
        language: string | null;
        expirationDate: Date | null;
    }>;
}
export {};
