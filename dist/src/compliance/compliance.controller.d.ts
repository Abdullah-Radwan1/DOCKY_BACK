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
            createdAt: Date;
            status: import("src/generated/prisma").DocumentStatus;
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
                    pageNumber: number | null;
                    createdAt: Date;
                    status: import("src/generated/prisma").FindingStatus;
                    metadata: import("@prisma/client/runtime/client").JsonValue | null;
                    title: string;
                    analysisId: string;
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
        documentId: string | null;
        createdAt: Date;
        queryText: string;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        userId: string | null;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        updatedAt: Date;
    }>;
    getAnalysis(id: string): Promise<{
        document: {
            id: string;
            createdAt: Date;
            status: import("src/generated/prisma").DocumentStatus;
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
                    pageNumber: number | null;
                    createdAt: Date;
                    status: import("src/generated/prisma").FindingStatus;
                    metadata: import("@prisma/client/runtime/client").JsonValue | null;
                    title: string;
                    analysisId: string;
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
        documentId: string | null;
        createdAt: Date;
        queryText: string;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        userId: string | null;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        updatedAt: Date;
    }>;
    createQuery(queryDto: CreateComplianceQueryDto): Promise<{
        id: string;
        documentId: string | null;
        createdAt: Date;
        queryText: string;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        userId: string | null;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        updatedAt: Date;
    }>;
    getQuery(id: string): Promise<{
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
        document: {
            id: string;
            createdAt: Date;
            status: import("src/generated/prisma").DocumentStatus;
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
        documentId: string | null;
        createdAt: Date;
        queryText: string;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        userId: string | null;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        updatedAt: Date;
    }>;
    getByDocument(documentId: string): Promise<({
        response: ({
            AnalysisResult: ({
                findings: {
                    id: string;
                    pageNumber: number | null;
                    createdAt: Date;
                    status: import("src/generated/prisma").FindingStatus;
                    metadata: import("@prisma/client/runtime/client").JsonValue | null;
                    title: string;
                    analysisId: string;
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
        documentId: string | null;
        createdAt: Date;
        queryText: string;
        status: import("src/generated/prisma").AnalysisRequestStatus;
        userId: string | null;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        updatedAt: Date;
    })[]>;
}
