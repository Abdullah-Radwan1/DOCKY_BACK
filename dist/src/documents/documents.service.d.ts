import { PrismaService } from '../prisma/prisma.service';
import { DocumentStatus } from "../generated/prisma";
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
export declare class DocumentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createDocument(data: CreateDocumentDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string | null;
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        language: string | null;
        expirationDate: Date | null;
        status: DocumentStatus;
        totalChunks: number | null;
    }>;
    getDocumentById(id: string): Promise<{
        uploader: {
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            id: string;
            passwordHash: string | null;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string | null;
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
        organizationId: string | null;
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        language: string | null;
        expirationDate: Date | null;
        status: DocumentStatus;
        totalChunks: number | null;
    }>;
    getDocuments(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string | null;
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        language: string | null;
        expirationDate: Date | null;
        status: DocumentStatus;
        totalChunks: number | null;
    }[]>;
    updateDocument(id: string, data: UpdateDocumentDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string | null;
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        language: string | null;
        expirationDate: Date | null;
        status: DocumentStatus;
        totalChunks: number | null;
    }>;
    deleteDocument(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string | null;
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        language: string | null;
        expirationDate: Date | null;
        status: DocumentStatus;
        totalChunks: number | null;
    }>;
}
