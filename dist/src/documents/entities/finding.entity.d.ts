import { FindingSeverity } from "../../generated/prisma/index.js";
export declare class FindingEntity {
    id: string;
    analysisId: string;
    title: string;
    description?: string;
    severity: FindingSeverity;
    clauseReference?: string;
    pageNumber?: number;
    excerpt?: string;
    recommendation?: string;
    metadata?: any;
    createdAt: Date;
}
