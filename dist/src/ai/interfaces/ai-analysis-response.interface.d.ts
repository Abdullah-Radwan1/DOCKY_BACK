export interface AiContractParty {
    name: string;
    role: 'buyer' | 'seller' | 'supplier' | 'customer' | 'employee' | 'employer' | 'landlord' | 'tenant' | 'contractor' | 'client' | 'other';
    type: 'corporation' | 'llc' | 'individual' | 'government' | 'nonprofit' | 'unknown';
    address: string | null;
    signatory: string | null;
    title: string | null;
}
export interface AiContractObligation {
    party: string;
    obligation: string;
    deadline: string | null;
    frequency: 'one-time' | 'monthly' | 'annually' | 'recurring' | null;
    clauseReference: string | null;
    pageNumber: number | null;
}
export interface AiContractPaymentTerm {
    description: string;
    amount: string | null;
    currency: string | null;
    frequency: 'monthly' | 'quarterly' | 'yearly' | 'one-time' | 'recurring' | null;
    dueDate: string | null;
    latePenalty: string | null;
    clauseReference: string | null;
    pageNumber: number | null;
}
export interface AiContractPenalty {
    type: 'late payment' | 'breach' | 'termination' | 'service level' | 'indemnity' | 'other';
    penalty: string;
    trigger: string;
    clauseReference: string | null;
    pageNumber: number | null;
}
export interface AiContractRenewalTerm {
    type: 'automatic' | 'optional' | 'evergreen' | 'fixed-term renewal' | 'other';
    period: string | null;
    noticePeriod: string | null;
    clauseReference: string | null;
    pageNumber: number | null;
}
export interface AiContractTerminationTerms {
    terminationNotice: string | null;
    terminationConditions: string[];
}
export interface AiContractImportantDate {
    label: 'Effective Date' | 'Expiration' | 'Renewal' | 'Payment' | 'Delivery' | 'Notice' | 'Termination';
    date: string;
    pageNumber: number | null;
}
export interface AiContractMissingClause {
    name: string;
    importance: 'low' | 'medium' | 'high';
    reason: string;
}
export interface AiContractData {
    expirationDate: string | null;
    parties: AiContractParty[] | null;
    obligations: AiContractObligation[] | null;
    paymentTerms: AiContractPaymentTerm[] | null;
    penalties: AiContractPenalty[] | null;
    renewalTerms: AiContractRenewalTerm[] | null;
    terminationTerms: AiContractTerminationTerms | null;
    governingLaw: string | null;
    importantDates: AiContractImportantDate[] | null;
    missingClauses: AiContractMissingClause[] | null;
}
export interface AiComplianceRequirement {
    requirement: string;
    status: 'met' | 'partial' | 'unmet' | 'unknown';
    reason: string;
    evidence: string | null;
    pageNumber: number | null;
    clauseReference: string | null;
    confidence: number;
    recommendation: string | null;
}
export interface AiFinding {
    title: string;
    description: string | null;
    severity: 'info' | 'low' | 'medium' | 'high' | 'critical';
    category: 'legal' | 'compliance' | 'financial' | 'security' | 'operational';
    affectedRequirement: string | null;
    pageNumber: number | null;
    clauseReference: string | null;
    excerpt: string | null;
    recommendation: string | null;
    metadata: Record<string, unknown>;
}
export interface AiComplianceSummary {
    passed: number;
    failed: number;
    partial: number;
    unknown: number;
}
export interface AiComplianceData {
    overallVerdict: 'compliant' | 'partial' | 'non_compliant' | 'unknown';
    riskLevel: 'low' | 'medium' | 'high';
    confidence: number;
    summary: AiComplianceSummary;
    requirements: AiComplianceRequirement[];
    findings: AiFinding[];
}
export interface AiAnalysisResponse {
    answer: string;
    summary: string;
    contract: AiContractData;
    compliance: AiComplianceData | null;
}
