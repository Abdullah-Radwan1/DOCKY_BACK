export interface ContractSectionOptions {
    parties: boolean;
    obligations: boolean;
    paymentTerms: boolean;
    penalties: boolean;
    renewalTerms: boolean;
    importantDates: boolean;
}
export interface AnalysisOptions {
    contract: ContractSectionOptions;
    missingClauses: boolean;
    specificMissingClauses?: string[];
    recommendations: boolean;
    compliance: boolean;
}
export declare const DEFAULT_ANALYSIS_OPTIONS: AnalysisOptions;
