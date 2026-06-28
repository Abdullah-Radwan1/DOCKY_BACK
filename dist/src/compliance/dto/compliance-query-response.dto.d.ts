import { AnalysisRequestStatus } from "../../generated/prisma";
export declare class ComplianceQueryResponseDto {
    id: string;
    queryText: string;
    status: AnalysisRequestStatus;
    documentId?: string;
    userId: string;
    attemptCount: number;
    errorMessage?: string;
    processingStartedAt?: Date;
    processingFinishedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
