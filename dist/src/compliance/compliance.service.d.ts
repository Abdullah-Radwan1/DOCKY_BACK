import { PrismaService } from '../prisma/prisma.service';
import { AnalysisOrchestratorService } from '../ai/services/analysis-orchestrator.service';
import { CreateComplianceQueryDto } from './dto/create-compliance-query.dto';
import { CreateAnalysisRequestDto } from './dto/create-analysis-request.dto';
export declare class ComplianceService {
    private readonly prisma;
    private readonly orchestrator;
    constructor(prisma: PrismaService, orchestrator: AnalysisOrchestratorService);
    submitAnalysis(dto: CreateAnalysisRequestDto): Promise<{
        document: {
            id: string;
            status: import("src/generated/prisma").DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
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
        } | null;
        response: ({
            AnalysisResult: ({
                findings: {
                    id: string;
                    status: import("src/generated/prisma").FindingStatus;
                    createdAt: Date;
                    pageNumber: number | null;
                    metadata: import("@prisma/client/runtime/client").JsonValue | null;
                    analysisId: string;
                    title: string;
                    description: string | null;
                    severity: import("src/generated/prisma").FindingSeverity;
                    clauseReference: string | null;
                    excerpt: string | null;
                    recommendation: string | null;
                    resolvedAt: Date | null;
                }[];
            } & {
                id: string;
                createdAt: Date;
                summary: string | null;
                overallVerdict: import("src/generated/prisma").AnalysisVerdict | null;
                confidence: number | null;
                riskLevel: import("src/generated/prisma").RiskLevel | null;
                responseId: string;
            }) | null;
        } & {
            id: string;
            createdAt: Date;
            response: import("@prisma/client/runtime/client").JsonValue;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
            requestId: string;
        }) | null;
    } & {
        id: string;
        queryText: string;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        documentId: string | null;
        userId: string | null;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAnalysisResult(requestId: string): Promise<{
        document: {
            id: string;
            status: import("src/generated/prisma").DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
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
        } | null;
        response: ({
            AnalysisResult: ({
                findings: {
                    id: string;
                    status: import("src/generated/prisma").FindingStatus;
                    createdAt: Date;
                    pageNumber: number | null;
                    metadata: import("@prisma/client/runtime/client").JsonValue | null;
                    analysisId: string;
                    title: string;
                    description: string | null;
                    severity: import("src/generated/prisma").FindingSeverity;
                    clauseReference: string | null;
                    excerpt: string | null;
                    recommendation: string | null;
                    resolvedAt: Date | null;
                }[];
            } & {
                id: string;
                createdAt: Date;
                summary: string | null;
                overallVerdict: import("src/generated/prisma").AnalysisVerdict | null;
                confidence: number | null;
                riskLevel: import("src/generated/prisma").RiskLevel | null;
                responseId: string;
            }) | null;
        } & {
            id: string;
            createdAt: Date;
            response: import("@prisma/client/runtime/client").JsonValue;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
            requestId: string;
        }) | null;
    } & {
        id: string;
        queryText: string;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        documentId: string | null;
        userId: string | null;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createQuery(data: CreateComplianceQueryDto): Promise<{
        id: string;
        queryText: string;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        documentId: string | null;
        userId: string | null;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getQueryById(id: string): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            passwordHash: string | null;
            role: import("src/generated/prisma").UserRole;
            allowEmailNotifications: boolean;
            allowExpiryReminders: boolean;
            allowRiskAlerts: boolean;
            allowAnalysisAlerts: boolean;
        } | null;
        document: {
            id: string;
            status: import("src/generated/prisma").DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
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
        } | null;
        response: {
            id: string;
            createdAt: Date;
            response: import("@prisma/client/runtime/client").JsonValue;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
            requestId: string;
        } | null;
    } & {
        id: string;
        queryText: string;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        documentId: string | null;
        userId: string | null;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getQueriesByDocument(documentId: string): Promise<({
        response: ({
            AnalysisResult: ({
                findings: {
                    id: string;
                    status: import("src/generated/prisma").FindingStatus;
                    createdAt: Date;
                    pageNumber: number | null;
                    metadata: import("@prisma/client/runtime/client").JsonValue | null;
                    analysisId: string;
                    title: string;
                    description: string | null;
                    severity: import("src/generated/prisma").FindingSeverity;
                    clauseReference: string | null;
                    excerpt: string | null;
                    recommendation: string | null;
                    resolvedAt: Date | null;
                }[];
            } & {
                id: string;
                createdAt: Date;
                summary: string | null;
                overallVerdict: import("src/generated/prisma").AnalysisVerdict | null;
                confidence: number | null;
                riskLevel: import("src/generated/prisma").RiskLevel | null;
                responseId: string;
            }) | null;
        } & {
            id: string;
            createdAt: Date;
            response: import("@prisma/client/runtime/client").JsonValue;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
            requestId: string;
        }) | null;
    } & {
        id: string;
        queryText: string;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        documentId: string | null;
        userId: string | null;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    private enforceAnalysisLimits;
}
