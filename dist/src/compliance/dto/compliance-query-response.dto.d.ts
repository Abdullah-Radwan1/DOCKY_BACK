import { ComplianceQueryStatus } from "../../generated/prisma/index.js";
export declare class ComplianceQueryResponseDto {
    id: string;
    queryText: string;
    status: ComplianceQueryStatus;
    documentId?: string;
    userId: string;
    attemptCount: number;
    errorMessage?: string;
    processingStartedAt?: Date;
    processingFinishedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
