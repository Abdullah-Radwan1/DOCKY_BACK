export interface AiAnalysisResponse {
    summary: string;
    overallVerdict: 'compliant' | 'non_compliant' | 'partial' | 'unknown';
    confidence: number;
    riskLevel: 'low' | 'medium' | 'high';
    findings: AiFinding[];
}
export interface AiFinding {
    title: string;
    description: string | null;
    severity: 'info' | 'low' | 'medium' | 'high' | 'critical';
    clauseReference: string | null;
    pageNumber: number | null;
    excerpt: string | null;
    recommendation: string | null;
    metadata: Record<string, unknown> | null;
}
