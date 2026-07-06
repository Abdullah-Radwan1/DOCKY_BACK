/**
 * DTOs for the GET /dashboard/summary endpoint.
 *
 * All aggregates are scoped to the requesting user (uploadedBy / userId).
 * The frontend should never need to aggregate or re-derive any value from
 * this response — every KPI and breakdown is pre-computed server-side.
 */

// ─── Nested DTOs ──────────────────────────────────────────────────────────────

export class KpisDto {
  /** Total documents owned by the user. */
  totalDocuments: number;

  /** Documents with status = ready. */
  readyDocuments: number;

  /** Documents currently in the processing pipeline (extracting | chunking). */
  processingDocuments: number;

  /** Documents with status = failed. */
  failedDocuments: number;

  /** Total analysis requests created by the user. */
  totalAnalyses: number;

  /** Analysis requests with status = completed. */
  completedAnalyses: number;

  /** Analysis requests with status = pending | processing. */
  pendingAnalyses: number;

  /** Analysis requests with status = failed. */
  failedAnalyses: number;

  /** Unread in-app notifications for the user. */
  unreadNotifications: number;

  /** Documents whose expirationDate < now. */
  expiredDocuments: number;

  /** Documents whose expirationDate is within the next 30 days. */
  expiringSoonDocuments: number;

  /**
   * Percentage of completed analyses that returned a 'compliant' verdict.
   * 0 when there are no completed analyses.
   */
  complianceRate: number;
}

export class ComplianceDistributionDto {
  compliant: number;
  partial: number;
  non_compliant: number;
  unknown: number;
}

export class RiskDistributionDto {
  low: number;
  medium: number;
  high: number;
}

export class FindingsSeverityBreakdownDto {
  /** Informational findings (open only). */
  info: number;
  low: number;
  medium: number;
  high: number;
  critical: number;
}

export class DocumentStatusBreakdownDto {
  uploaded: number;
  extracting: number;
  chunking: number;
  ready: number;
  failed: number;
}

export class RecentAnalysisDto {
  id: string;
  documentId: string | null;
  documentName: string | null;
  /** AnalysisRequest status */
  requestStatus: 'pending' | 'processing' | 'completed' | 'failed';
  /** AnalysisResult overall verdict, if analysis completed */
  verdict: 'compliant' | 'partial' | 'non_compliant' | 'unknown' | null;
  riskLevel: 'low' | 'medium' | 'high' | null;
  confidenceScore: number | null;
  createdAt: string;
}

export class DocumentAttentionDto {
  id: string;
  fileName: string;
  /** Computed business-facing status label */
  dashboardStatus: string;
  riskLevel: 'low' | 'medium' | 'high' | null;
  /** Count of open critical findings */
  criticalFindings: number;
  /** Count of open high findings */
  highFindings: number;
  expirationDate: string | null;
}

export class ExpirationDto {
  id: string;
  fileName: string;
  expirationDate: string;
  /** Negative values indicate already expired */
  daysUntilExpiration: number;
}

export class ActivityDto {
  id: string;
  action: string;
  entityType: string | null;
  entityId: string | null;
  userEmail: string | null;
  userFullName: string | null;
  metadata: Record<string, unknown> | null;
  createdAt: string;
}

// ─── Root response DTO ────────────────────────────────────────────────────────

export class DashboardSummaryDto {
  /** ISO timestamp of when this payload was generated. */
  generatedAt: string;

  kpis: KpisDto;
  complianceDistribution: ComplianceDistributionDto;
  riskDistribution: RiskDistributionDto;
  findingsSeverityBreakdown: FindingsSeverityBreakdownDto;
  documentStatusBreakdown: DocumentStatusBreakdownDto;

  /** Last 5 analysis requests with their result snapshot. */
  recentAnalyses: RecentAnalysisDto[];

  /** Documents that need the user's immediate attention. */
  documentsRequiringAttention: DocumentAttentionDto[];

  /** Documents expiring within the next 30 days (sorted by soonest first). */
  upcomingExpirations: ExpirationDto[];

  /** Last 10 activity log entries. */
  recentActivity: ActivityDto[];
}
