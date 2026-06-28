import { AnalysisVerdict } from "../../generated/prisma";
export declare class CreateDocumentAnalysisDto {
    documentId: string;
    executiveSummary?: string;
    overallVerdict?: AnalysisVerdict;
    confidenceScore?: number;
    modelName?: string;
    promptVersion?: string;
    rulesetVersion?: string;
    parties?: any;
    obligations?: any;
    paymentTerms?: any;
    renewalTerms?: any;
    penalties?: any;
    governingLaw?: string;
    missingClauses?: any;
    unusualConditions?: any;
    complianceRequirements?: any;
    policyViolations?: any;
    regulatoryIssues?: any;
    missingSignatures?: any;
    expirationDetected?: boolean;
    importantDates?: any;
    risks?: any;
    recommendations?: any;
}
