/**
 * The structured JSON schema that the AI model MUST return.
 *
 * These interfaces mirror the Prisma models (AnalysisResult + Finding)
 * so the orchestrator can map the response directly to database records.
 */

export interface AiAnalysisResponse {
  summary: string;
  overallVerdict: 'compliant' | 'non_compliant' | 'partial' | 'unknown';
  confidence: number; // 0.0 – 1.0
  riskLevel: 'low' | 'medium' | 'high';
  /** ISO 8601 date string (e.g. "2026-12-31") extracted from the document, or null if not found. */
  expirationDate: string | null;
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
