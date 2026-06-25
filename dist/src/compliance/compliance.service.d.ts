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
        status: import("src/generated/prisma").ComplianceQueryStatus;
        documentId: string | null;
        userId: string;
        queryText: string;
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
            organizationId: string;
            uploadedBy: string;
            originalFileName: string;
            filename: string;
            mimeType: string | null;
            storageKey: string | null;
            fileUrl: string | null;
            checksum: string | null;
            fileSize: number | null;
            pageCount: number | null;
            language: string | null;
            status: import("src/generated/prisma").DocumentStatus;
            complianceScore: number | null;
            riskLevel: import("src/generated/prisma").RiskLevel | null;
            expirationDate: Date | null;
        } | null;
        user: {
            email: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            organizationId: string | null;
        };
        responses: {
            id: string;
            createdAt: Date;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            queryId: string;
            responseText: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").ComplianceQueryStatus;
        documentId: string | null;
        userId: string;
        queryText: string;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
    }>;
    getQueriesByDocument(documentId: string): Promise<({
        responses: {
            id: string;
            createdAt: Date;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            queryId: string;
            responseText: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").ComplianceQueryStatus;
        documentId: string | null;
        userId: string;
        queryText: string;
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
        queryId: string;
        responseText: string;
    }>;
}
