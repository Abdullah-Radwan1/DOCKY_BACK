import {
  AnalysisRequestStatus,
  AnalysisVerdict,
  FindingSeverity,
  FindingStatus,
  RiskLevel,
} from '../../generated/prisma';

// ── Nested response DTOs ─────────────────────────────────────────────────────

export class FindingResponseDto {
  id: string;
  title: string;
  description: string | null;
  severity: FindingSeverity;
  status: FindingStatus;
  clauseReference: string | null;
  pageNumber: number | null;
  excerpt: string | null;
  recommendation: string | null;
  metadata: unknown;
  createdAt: Date;
}

export class AnalysisResultDetailDto {
  id: string;
  summary: string | null;
  overallVerdict: AnalysisVerdict | null;
  confidence: number | null;
  riskLevel: RiskLevel | null;
  findings: FindingResponseDto[];
  createdAt: Date;
}

export class AiResponseDetailDto {
  id: string;
  response: unknown;
  confidenceScore: number | null;
  metadata: unknown;
  matchedChunks: unknown;
  createdAt: Date;
  AnalysisResult: AnalysisResultDetailDto | null;
}

// ── Top-level response ────────────────────────────────────────────────────────

export class AnalysisResultResponseDto {
  id: string;
  queryText: string;
  status: AnalysisRequestStatus;
  documentId: string | null;
  userId: string;
  attemptCount: number;
  errorMessage: string | null;
  processingStartedAt: Date | null;
  processingFinishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  response: AiResponseDetailDto | null;
}
