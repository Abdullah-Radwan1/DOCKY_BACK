import { PrismaService } from '../prisma/prisma.service';
import { DocumentStatus } from "../generated/prisma";
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
export declare class DocumentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createDocument(data: CreateDocumentDto): Promise<{
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
        status: DocumentStatus;
        totalChunks: number | null;
    }>;
    getDocumentById(id: string): Promise<{
        uploader: {
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            organizationId: string | null;
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
        status: DocumentStatus;
        totalChunks: number | null;
    }>;
    getDocumentsByOrganization(organizationId: string): Promise<{
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
        status: DocumentStatus;
        totalChunks: number | null;
    }[]>;
    updateDocument(id: string, data: UpdateDocumentDto): Promise<{
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
        status: DocumentStatus;
        totalChunks: number | null;
    }>;
    deleteDocument(id: string): Promise<{
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
        status: DocumentStatus;
        totalChunks: number | null;
    }>;
}
