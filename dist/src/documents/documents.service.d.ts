import { PrismaService } from '../prisma/prisma.service';
import { DocumentStatus } from '../generated/prisma';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { PaginatedResult } from '../common/utils/pagination.utils';
export declare class DocumentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createDocument(data: CreateDocumentDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: DocumentStatus;
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
    getDocumentById(id: string): Promise<{
        uploader: {
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma/enums").UserRole;
            allowEmailNotifications: boolean;
            allowExpiryReminders: boolean;
            allowRiskAlerts: boolean;
            allowAnalysisAlerts: boolean;
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
        status: DocumentStatus;
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
    getDocuments(userId: string, query: PaginationQueryDto): Promise<PaginatedResult<any>>;
    updateDocument(id: string, data: UpdateDocumentDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: DocumentStatus;
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
    deleteDocument(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: DocumentStatus;
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
