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
        response: ({
            AnalysisResult: ({
                findings: {
                    id: string;
                    createdAt: Date;
                    status: import("src/generated/prisma").FindingStatus;
                    analysisId: string;
                    title: string;
                    description: string | null;
                    severity: import("src/generated/prisma").FindingSeverity;
                    clauseReference: string | null;
                    pageNumber: number | null;
                    excerpt: string | null;
                    recommendation: string | null;
                    metadata: import("@prisma/client/runtime/client").JsonValue | null;
                    resolvedAt: Date | null;
                }[];
            } & {
                id: string;
                createdAt: Date;
                riskLevel: import("src/generated/prisma").RiskLevel | null;
                overallVerdict: import("src/generated/prisma").AnalysisVerdict | null;
                summary: string | null;
                confidence: number | null;
                responseId: string;
            }) | null;
        } & {
            id: string;
            createdAt: Date;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            requestId: string;
            response: import("@prisma/client/runtime/client").JsonValue;
            matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
        }) | null;
        document: {
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
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        documentId: string | null;
        userId: string | null;
        queryText: string;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        guestId: string | null;
    }>;
    getAnalysis(id: string): Promise<{
        response: ({
            AnalysisResult: ({
                findings: {
                    id: string;
                    createdAt: Date;
                    status: import("src/generated/prisma").FindingStatus;
                    analysisId: string;
                    title: string;
                    description: string | null;
                    severity: import("src/generated/prisma").FindingSeverity;
                    clauseReference: string | null;
                    pageNumber: number | null;
                    excerpt: string | null;
                    recommendation: string | null;
                    metadata: import("@prisma/client/runtime/client").JsonValue | null;
                    resolvedAt: Date | null;
                }[];
            } & {
                id: string;
                createdAt: Date;
                riskLevel: import("src/generated/prisma").RiskLevel | null;
                overallVerdict: import("src/generated/prisma").AnalysisVerdict | null;
                summary: string | null;
                confidence: number | null;
                responseId: string;
            }) | null;
        } & {
            id: string;
            createdAt: Date;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            requestId: string;
            response: import("@prisma/client/runtime/client").JsonValue;
            matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
        }) | null;
        document: {
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
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        documentId: string | null;
        userId: string | null;
        queryText: string;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        guestId: string | null;
    }>;
    createQuery(queryDto: CreateComplianceQueryDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        documentId: string | null;
        userId: string | null;
        queryText: string;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        guestId: string | null;
    }>;
    getQuery(id: string): Promise<{
        response: {
            id: string;
            createdAt: Date;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            requestId: string;
            response: import("@prisma/client/runtime/client").JsonValue;
            matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
        } | null;
        document: {
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
        } | null;
        user: {
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        documentId: string | null;
        userId: string | null;
        queryText: string;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        guestId: string | null;
    }>;
    getByDocument(documentId: string): Promise<({
        response: ({
            AnalysisResult: ({
                findings: {
                    id: string;
                    createdAt: Date;
                    status: import("src/generated/prisma").FindingStatus;
                    analysisId: string;
                    title: string;
                    description: string | null;
                    severity: import("src/generated/prisma").FindingSeverity;
                    clauseReference: string | null;
                    pageNumber: number | null;
                    excerpt: string | null;
                    recommendation: string | null;
                    metadata: import("@prisma/client/runtime/client").JsonValue | null;
                    resolvedAt: Date | null;
                }[];
            } & {
                id: string;
                createdAt: Date;
                riskLevel: import("src/generated/prisma").RiskLevel | null;
                overallVerdict: import("src/generated/prisma").AnalysisVerdict | null;
                summary: string | null;
                confidence: number | null;
                responseId: string;
            }) | null;
        } & {
            id: string;
            createdAt: Date;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            requestId: string;
            response: import("@prisma/client/runtime/client").JsonValue;
            matchedChunks: import("@prisma/client/runtime/client").JsonValue | null;
        }) | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        documentId: string | null;
        userId: string | null;
        queryText: string;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        guestId: string | null;
    })[]>;
}
