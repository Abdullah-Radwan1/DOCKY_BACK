import { PrismaService } from '../prisma/prisma.service';
import { CreateComplianceQueryDto } from './dto/create-compliance-query.dto';
import { CreateAIResponseDto } from './dto/create-ai-response.dto';
export declare class ComplianceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createQuery(data: CreateComplianceQueryDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        documentId: string | null;
        queryText: string;
        userId: string;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
    }>;
    getQueryById(id: string): Promise<{
        document: {
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
            status: import("src/generated/prisma").DocumentStatus;
            totalChunks: number | null;
        } | null;
        user: {
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            id: string;
            passwordHash: string | null;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string | null;
        };
        response: {
            id: string;
            createdAt: Date;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            response: import("@prisma/client/runtime/client").JsonValue;
            requestId: string;
            matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        documentId: string | null;
        queryText: string;
        userId: string;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
    }>;
    getQueriesByDocument(documentId: string): Promise<({
        response: {
            id: string;
            createdAt: Date;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            response: import("@prisma/client/runtime/client").JsonValue;
            requestId: string;
            matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        documentId: string | null;
        queryText: string;
        userId: string;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
    })[]>;
    addAIResponse(data: CreateAIResponseDto): Promise<{
        id: string;
        createdAt: Date;
        confidenceScore: number | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        response: import("@prisma/client/runtime/client").JsonValue;
        requestId: string;
        matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
}
