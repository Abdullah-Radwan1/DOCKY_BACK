import type { AnalysisOptions } from '../../ai/interfaces/analysis-options.interface';
export declare class CreateAnalysisRequestDto {
    documentId: string;
    userId?: string;
    guestId?: string;
    queryText?: string;
    options?: AnalysisOptions;
}
