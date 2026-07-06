import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  DocumentDashboardStatusDto,
  DocumentDashboardStatusLabel,
  DocumentDashboardStatusColor,
} from './dto/document-dashboard.dto';

/**
 * Computes a single, human-readable business-facing status for any document.
 *
 * Priority waterfall (highest → lowest):
 *  1. doc.status === 'failed'                              → Processing Failed
 *  2. doc.status in ['extracting', 'chunking']             → Preparing Document
 *  3. doc.status === 'uploaded' (no analysis started)      → Uploaded
 *  4. Latest analysis request is 'pending'                 → Queued for Analysis
 *  5. Latest analysis request is 'processing'              → Analyzing
 *  6. expirationDate is in the past                        → Expired
 *  7. riskLevel = high OR open critical findings exist     → Critical Attention Required
 *  8. riskLevel = medium OR open high findings OR
 *     verdict = partial | non_compliant                    → Needs Review
 *  9. verdict = compliant                                  → Compliant
 * 10. doc.status === 'ready' but no analysis result        → Ready for Analysis
 */
@Injectable()
export class DocumentStatusService {
  constructor(private readonly prisma: PrismaService) {}

  async getDocumentStatus(documentId: string): Promise<DocumentDashboardStatusDto> {
    // ── 1. Load the document ────────────────────────────────────────────────
    const doc = await this.prisma.document.findUnique({
      where: { id: documentId },
      select: {
        id: true,
        status: true,
        expirationDate: true,
      },
    });

    if (!doc) {
      throw new NotFoundException(`Document with ID ${documentId} not found`);
    }

    // ── 2. Load latest analysis request (if any) ────────────────────────────
    const latestRequest = await this.prisma.analysisRequest.findFirst({
      where: { documentId },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        status: true,
        response: {
          select: {
            AnalysisResult: {
              select: {
                overallVerdict: true,
                riskLevel: true,
                id: true,
              },
            },
          },
        },
      },
    });

    // Flatten: extract the analysis result from the nested chain
    const analysisResult = latestRequest?.response?.AnalysisResult ?? null;

    // ── 3. Count open findings by severity (only if we have a result) ───────
    let openCritical = 0;
    let openHigh = 0;

    if (analysisResult) {
      [openCritical, openHigh] = await Promise.all([
        this.prisma.finding.count({
          where: {
            analysisId: analysisResult.id,
            severity: 'critical',
            status: 'open',
          },
        }),
        this.prisma.finding.count({
          where: {
            analysisId: analysisResult.id,
            severity: 'high',
            status: 'open',
          },
        }),
      ]);
    }

    // ── 4. Priority waterfall ────────────────────────────────────────────────
    const label = this.computeLabel({
      docStatus: doc.status,
      expirationDate: doc.expirationDate,
      requestStatus: latestRequest?.status ?? null,
      verdict: analysisResult?.overallVerdict ?? null,
      riskLevel: analysisResult?.riskLevel ?? null,
      openCritical,
      openHigh,
    });

    return {
      documentId,
      status: label,
      color: colorFor(label),
      requiresAction: requiresActionFor(label),
    };
  }

  // ── Internal helpers ──────────────────────────────────────────────────────

  private computeLabel(ctx: {
    docStatus: string;
    expirationDate: Date | null;
    requestStatus: string | null;
    verdict: string | null;
    riskLevel: string | null;
    openCritical: number;
    openHigh: number;
  }): DocumentDashboardStatusLabel {
    const {
      docStatus,
      expirationDate,
      requestStatus,
      verdict,
      riskLevel,
      openCritical,
      openHigh,
    } = ctx;

    // Priority 1
    if (docStatus === 'failed') return 'Processing Failed';

    // Priority 2
    if (docStatus === 'extracting' || docStatus === 'chunking')
      return 'Preparing Document';

    // Priority 3 — uploaded but no analysis pipeline started yet
    if (docStatus === 'uploaded' && !requestStatus) return 'Uploaded';

    // Priority 4
    if (requestStatus === 'pending') return 'Queued for Analysis';

    // Priority 5
    if (requestStatus === 'processing') return 'Analyzing';

    // Priority 6 — expired document
    if (expirationDate && expirationDate < new Date()) return 'Expired';

    // Priority 7 — critical attention
    if (riskLevel === 'high' || openCritical > 0)
      return 'Critical Attention Required';

    // Priority 8 — needs review
    if (
      riskLevel === 'medium' ||
      openHigh > 0 ||
      verdict === 'partial' ||
      verdict === 'non_compliant'
    )
      return 'Needs Review';

    // Priority 9 — fully compliant
    if (verdict === 'compliant') return 'Compliant';

    // Priority 10 — ready but never analysed
    return 'Ready for Analysis';
  }
}

// ── Pure mapping helpers ──────────────────────────────────────────────────────

function colorFor(label: DocumentDashboardStatusLabel): DocumentDashboardStatusColor {
  switch (label) {
    case 'Processing Failed':
    case 'Critical Attention Required':
    case 'Expired':
      return 'destructive';
    case 'Needs Review':
    case 'Queued for Analysis':
      return 'warning';
    case 'Preparing Document':
    case 'Analyzing':
    case 'Uploaded':
      return 'info';
    case 'Compliant':
      return 'success';
    case 'Ready for Analysis':
    default:
      return 'muted';
  }
}

function requiresActionFor(label: DocumentDashboardStatusLabel): boolean {
  return [
    'Processing Failed',
    'Critical Attention Required',
    'Needs Review',
    'Expired',
  ].includes(label);
}
