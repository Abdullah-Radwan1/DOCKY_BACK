import { ComplianceService } from './compliance.service';
import { CreateComplianceQueryDto } from './dto/create-compliance-query.dto';
import { CreateAnalysisRequestDto } from './dto/create-analysis-request.dto';
import { Request } from 'express';
export declare class ComplianceController {
    private readonly complianceService;
    constructor(complianceService: ComplianceService);
    analyzeDocument(dto: CreateAnalysisRequestDto, req: Request & {
        user?: {
            id: string;
        };
    }, ip: string): Promise<{
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
                    metadata: import("@prisma/client/runtime/client").JsonValue | null;
                    analysisId: string;
                    title: string;
                    description: string | null;
                    severity: import("src/generated/prisma").FindingSeverity;
                    clauseReference: string | null;
                    pageNumber: number | null;
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
            requestId: string;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
        }) | null;
    } & {
        id: string;
        queryText: string;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        documentId: string | null;
        userId: string | null;
    }>;
    getAnalysis(id: string): Promise<{
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
                    metadata: import("@prisma/client/runtime/client").JsonValue | null;
                    analysisId: string;
                    title: string;
                    description: string | null;
                    severity: import("src/generated/prisma").FindingSeverity;
                    clauseReference: string | null;
                    pageNumber: number | null;
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
            requestId: string;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
        }) | null;
    } & {
        id: string;
        queryText: string;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        documentId: string | null;
        userId: string | null;
    }>;
    createQuery(queryDto: CreateComplianceQueryDto): Promise<{
        id: string;
        queryText: string;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        documentId: string | null;
        userId: string | null;
    }>;
    getQuery(id: string): Promise<{
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
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            passwordHash: string | null;
            role: import("src/generated/prisma").UserRole;
            plan: import("src/generated/prisma").PlanType;
            allowEmailNotifications: boolean;
            allowExpiryReminders: boolean;
            allowRiskAlerts: boolean;
            allowAnalysisAlerts: boolean;
        } | null;
        response: {
            id: string;
            createdAt: Date;
            response: import("@prisma/client/runtime/client").JsonValue;
            requestId: string;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
        } | null;
    } & {
        id: string;
        queryText: string;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        documentId: string | null;
        userId: string | null;
    }>;
    getByDocument(documentId: string): Promise<({
        response: ({
            AnalysisResult: ({
                findings: {
                    id: string;
                    status: import("src/generated/prisma").FindingStatus;
                    createdAt: Date;
                    metadata: import("@prisma/client/runtime/client").JsonValue | null;
                    analysisId: string;
                    title: string;
                    description: string | null;
                    severity: import("src/generated/prisma").FindingSeverity;
                    clauseReference: string | null;
                    pageNumber: number | null;
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
            requestId: string;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
        }) | null;
    } & {
        id: string;
        queryText: string;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        documentId: string | null;
        userId: string | null;
    })[]>;
}
