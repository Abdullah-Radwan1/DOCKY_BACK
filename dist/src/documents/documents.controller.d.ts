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
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        language: string | null;
        status: import("src/generated/prisma").DocumentStatus;
        expirationDate: Date | null;
        guestToken: string | null;
        isGuest: boolean;
        totalChunks: number | null;
    }>;
    getAll(req: AuthenticatedRequest, query: PaginationQueryDto): Promise<import("../common/utils/pagination.utils").PaginatedResult<any>>;
    get(id: string, req: AuthenticatedRequest): Promise<{
        uploader: {
            email: string;
            id: string;
            plan: import("src/generated/prisma").PlanType;
            createdAt: Date;
            updatedAt: Date;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            passwordHash: string | null;
            allowEmailNotifications: boolean;
            allowExpiryReminders: boolean;
            allowRiskAlerts: boolean;
            allowAnalysisAlerts: boolean;
        } | null;
        chunks: {
            id: string;
            pageNumber: number | null;
            chunkIndex: number;
            content: string;
            tokenCount: number | null;
        }[];
    } & {
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
        status: import("src/generated/prisma").DocumentStatus;
        expirationDate: Date | null;
        guestToken: string | null;
        isGuest: boolean;
        totalChunks: number | null;
    }>;
    getStatus(id: string): Promise<{
        status: import("src/generated/prisma").DocumentStatus;
    }>;
    update(id: string, updateDto: UpdateDocumentDto, req: AuthenticatedRequest): Promise<{
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
        status: import("src/generated/prisma").DocumentStatus;
        expirationDate: Date | null;
        guestToken: string | null;
        isGuest: boolean;
        totalChunks: number | null;
    }>;
    delete(id: string, req: AuthenticatedRequest): Promise<{
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
        status: import("src/generated/prisma").DocumentStatus;
        expirationDate: Date | null;
        guestToken: string | null;
        isGuest: boolean;
        totalChunks: number | null;
    }>;
}
export {};
