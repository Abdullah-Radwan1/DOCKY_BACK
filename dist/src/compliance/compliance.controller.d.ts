import { ComplianceService } from './compliance.service';
import { CreateComplianceQueryDto } from './dto/create-compliance-query.dto';
import { CreateAIResponseDto } from './dto/create-ai-response.dto';
export declare class ComplianceController {
    private readonly complianceService;
    constructor(complianceService: ComplianceService);
    createQuery(queryDto: CreateComplianceQueryDto): Promise<{
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
    getQuery(id: string): Promise<{
        document: {
            organizationId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            uploadedBy: string;
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
            organizationId: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
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
    getByDocument(documentId: string): Promise<({
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
    addResponse(responseDto: CreateAIResponseDto): Promise<{
        id: string;
        createdAt: Date;
        confidenceScore: number | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        response: import("@prisma/client/runtime/client").JsonValue;
        requestId: string;
        matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
}
