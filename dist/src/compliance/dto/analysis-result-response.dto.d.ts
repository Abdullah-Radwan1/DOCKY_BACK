import { AnalysisRequestStatus, AnalysisVerdict, FindingSeverity, FindingStatus, RiskLevel } from '../../generated/prisma';
export declare class FindingResponseDto {
    id: string;
    title: string;
    description: string | null;
    severity: FindingSeverity;
    status: FindingStatus;
    affectedRequirement: string | null;
    category: string | null;
    clauseReference: string | null;
    pageNumber: number | null;
    excerpt: string | null;
    recommendation: string | null;
    metadata: unknown;
    createdAt: Date;
}
export declare class AnalysisResultDetailDto {
    id: string;
    summary: string | null;
    overallVerdict: AnalysisVerdict | null;
    confidence: number | null;
    riskLevel: RiskLevel | null;
    findings: FindingResponseDto[];
    createdAt: Date;
}
export declare class AiResponseDetailDto {
    id: string;
    response: unknown;
    confidenceScore: number | null;
    metadata: unknown;
    matchedChunks: unknown;
    createdAt: Date;
    AnalysisResult: AnalysisResultDetailDto | null;
}
export declare class AnalysisResultResponseDto {
    id: string;
    queryText: string;
    status: AnalysisRequestStatus;
    documentId: string | null;
    userId: string;
    attemptCount: number;
    errorMessage: string | null;
    processingStartedAt: Date | null;
    processingFinishedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    response: AiResponseDetailDto | null;
}
