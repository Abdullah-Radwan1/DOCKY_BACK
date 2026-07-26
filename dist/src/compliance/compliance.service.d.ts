import { PrismaService } from '../prisma/prisma.service';
import { AnalysisOrchestratorService } from '../ai/services/analysis-orchestrator.service';
import { CreateComplianceQueryDto } from './dto/create-compliance-query.dto';
import { CreateAnalysisRequestDto } from './dto/create-analysis-request.dto';
import { UsagePolicyService } from '../policy/usage-policy.service';
import { NotificationsService } from '../notifications/notifications.service';
export declare class ComplianceService {
    private readonly prisma;
    private readonly orchestrator;
    private readonly policyService;
    private readonly notificationsService;
    constructor(prisma: PrismaService, orchestrator: AnalysisOrchestratorService, policyService: UsagePolicyService, notificationsService: NotificationsService);
    submitAnalysis(dto: CreateAnalysisRequestDto & {
        ip?: string;
    }): Promise<{
        document: {
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
        } | null;
        response: ({
            AnalysisResult: ({
                findings: {
                    id: string;
                    createdAt: Date;
                    title: string;
                    status: import("src/generated/prisma").FindingStatus;
                    pageNumber: number | null;
                    metadata: import("@prisma/client/runtime/client").JsonValue | null;
                    analysisId: string;
                    severity: import("src/generated/prisma").FindingSeverity;
                    description: string | null;
                    clauseReference: string | null;
                    excerpt: string | null;
                    recommendation: string | null;
                    resolvedAt: Date | null;
                }[];
            } & {
                id: string;
                createdAt: Date;
                riskLevel: import("src/generated/prisma").RiskLevel | null;
                summary: string | null;
                overallVerdict: import("src/generated/prisma").AnalysisVerdict | null;
                confidence: number | null;
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
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        guestId: string | null;
        documentId: string | null;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        queryText: string;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
    }>;
    getAnalysisResult(requestId: string): Promise<{
        document: {
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
        } | null;
        response: ({
            AnalysisResult: ({
                findings: {
                    id: string;
                    createdAt: Date;
                    title: string;
                    status: import("src/generated/prisma").FindingStatus;
                    pageNumber: number | null;
                    metadata: import("@prisma/client/runtime/client").JsonValue | null;
                    analysisId: string;
                    severity: import("src/generated/prisma").FindingSeverity;
                    description: string | null;
                    clauseReference: string | null;
                    excerpt: string | null;
                    recommendation: string | null;
                    resolvedAt: Date | null;
                }[];
            } & {
                id: string;
                createdAt: Date;
                riskLevel: import("src/generated/prisma").RiskLevel | null;
                summary: string | null;
                overallVerdict: import("src/generated/prisma").AnalysisVerdict | null;
                confidence: number | null;
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
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        guestId: string | null;
        documentId: string | null;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        queryText: string;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
    }>;
    createQuery(data: CreateComplianceQueryDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        guestId: string | null;
        documentId: string | null;
        status: import("src/generated/prisma").AnalysisRequestStatus;
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
        } | null;
        user: {
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
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        guestId: string | null;
        documentId: string | null;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        queryText: string;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
    }>;
    getQueriesByDocument(documentId: string): Promise<({
        response: ({
            AnalysisResult: ({
                findings: {
                    id: string;
                    createdAt: Date;
                    title: string;
                    status: import("src/generated/prisma").FindingStatus;
                    pageNumber: number | null;
                    metadata: import("@prisma/client/runtime/client").JsonValue | null;
                    analysisId: string;
                    severity: import("src/generated/prisma").FindingSeverity;
                    description: string | null;
                    clauseReference: string | null;
                    excerpt: string | null;
                    recommendation: string | null;
                    resolvedAt: Date | null;
                }[];
            } & {
                id: string;
                createdAt: Date;
                riskLevel: import("src/generated/prisma").RiskLevel | null;
                summary: string | null;
                overallVerdict: import("src/generated/prisma").AnalysisVerdict | null;
                confidence: number | null;
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
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        guestId: string | null;
        documentId: string | null;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        queryText: string;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
    })[]>;
}
