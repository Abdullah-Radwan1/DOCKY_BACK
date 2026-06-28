import { FindingSeverity } from "../../generated/prisma";
export declare class CreateFindingDto {
    analysisId: string;
    title: string;
    description?: string;
    severity?: FindingSeverity;
    clauseReference?: string;
    pageNumber?: number;
    excerpt?: string;
    recommendation?: string;
    metadata?: any;
}
