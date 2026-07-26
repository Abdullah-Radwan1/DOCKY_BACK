import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DocumentStatusService } from './document-status.service';
import {
  DashboardSummaryDto,
  KpisDto,
  ComplianceDistributionDto,
  RiskDistributionDto,
  FindingsSeverityBreakdownDto,
  DocumentStatusBreakdownDto,
  RecentAnalysisDto,
  DocumentAttentionDto,
  ExpirationDto,
  ActivityDto,
} from './dto/dashboard-summary.dto';

@Injectable()
export class DashboardService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly documentStatusService: DocumentStatusService,
  ) {}

  /**
   * Builds the full dashboard summary for a given user.
   *
   * All document-level aggregates are scoped to documents uploaded by the user
   * (Document.uploadedBy === userId).
   * Notification counts are scoped to the user's notification inbox.
   * Activity logs are global (system-wide) to give situational awareness.
   */
  async getSummary(userId: string): Promise<DashboardSummaryDto> {
    const now = new Date();
    const in30Days = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    // ── Run all heavy queries in parallel ─────────────────────────────────
    const [
      docStatusGroups,
      analysisStatusGroups,
      verdictGroups,
      riskGroups,
      severityGroups,
      expiredCount,
      expiringSoon,
      unreadNotifCount,
      recentActivity,
      recentRequests,
      attentionDocs,
    ] = await Promise.all([
      // 1. Document status breakdown (per-user)
      this.prisma.document.groupBy({
        by: ['status'],
        where: { uploadedBy: userId },
        _count: { id: true },
      }),

      // 2. Analysis request status breakdown (per-user)
      this.prisma.analysisRequest.groupBy({
        by: ['status'],
        where: { userId },
        _count: { id: true },
      }),

      // 3. Compliance verdict distribution
      //    We reach AnalysisResult via: AnalysisRequest(userId) → AIResponse → AnalysisResult
      this.prisma.analysisResult.groupBy({
        by: ['overallVerdict'],
        where: {
          Response: {
            AnalysisRequest: { userId },
          },
        },
        _count: { id: true },
      }),

      // 4. Risk level distribution
      this.prisma.analysisResult.groupBy({
        by: ['riskLevel'],
        where: {
          Response: {
            AnalysisRequest: { userId },
          },
          riskLevel: { not: null },
        },
        _count: { id: true },
      }),

      // 5. Open findings severity breakdown (only open findings)
      this.prisma.finding.groupBy({
        by: ['severity'],
        where: {
          status: 'open',
          analysis: {
            Response: {
              AnalysisRequest: { userId },
            },
          },
        },
        _count: { id: true },
      }),

      // 6. Expired documents count
      this.prisma.document.count({
        where: {
          uploadedBy: userId,
          expirationDate: { lt: now },
          status: 'ready',
        },
      }),

      // 7. Documents expiring within 30 days (not already expired)
      this.prisma.document.findMany({
        where: {
          uploadedBy: userId,
          expirationDate: { gte: now, lte: in30Days },
        },
        select: {
          id: true,
          originalFileName: true,
          expirationDate: true,
        },
        orderBy: { expirationDate: 'asc' },
      }),

      // 8. Unread notifications for this user
      this.prisma.notification.count({
        where: {
          userId,
          status: 'unread',
        },
      }),

      // 9. Recent activity logs (global — gives system-wide situational awareness)
      this.prisma.activityLog.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
        include: {
          user: {
            select: { email: true, fullName: true },
          },
        },
      }),

      // 10. Recent analysis requests (per-user)
      this.prisma.analysisRequest.findMany({
        where: { userId },
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: {
          document: {
            select: { id: true, originalFileName: true },
          },
          response: {
            include: {
              AnalysisResult: {
                select: {
                  overallVerdict: true,
                  riskLevel: true,
                  confidence: true,
                },
              },
            },
          },
        },
      }),

      // 11. Documents requiring attention:
      //     - status = failed, OR
      //     - have at least one open critical/high finding (per-user)
      this.prisma.document.findMany({
        where: {
          uploadedBy: userId,
          OR: [
            { status: 'failed' },
            {
              analysisRequests: {
                some: {
                  response: {
                    AnalysisResult: {
                      findings: {
                        some: {
                          status: 'open',
                          severity: { in: ['critical', 'high'] },
                        },
                      },
                    },
                  },
                },
              },
            },
          ],
        },
        select: {
          id: true,
          originalFileName: true,
          status: true,
          expirationDate: true,
          analysisRequests: {
            orderBy: { createdAt: 'desc' },
            take: 1,
            select: {
              response: {
                select: {
                  AnalysisResult: {
                    select: {
                      id: true,
                      riskLevel: true,
                      overallVerdict: true,
                      findings: {
                        where: { status: 'open', severity: { in: ['critical', 'high'] } },
                        select: { severity: true },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        take: 10,
      }),
    ]);

    // ── Assemble KPIs ────────────────────────────────────────────────────────
    const kpis = this.buildKpis({
      docStatusGroups,
      analysisStatusGroups,
      verdictGroups,
      expiredCount,
      expiringSoonCount: expiringSoon.length,
      unreadNotifCount,
    });

    // ── Compliance distribution ──────────────────────────────────────────────
    const complianceDistribution = this.buildComplianceDistribution(verdictGroups);

    // ── Risk distribution ────────────────────────────────────────────────────
    const riskDistribution = this.buildRiskDistribution(riskGroups);

    // ── Findings severity breakdown ──────────────────────────────────────────
    const findingsSeverityBreakdown = this.buildSeverityBreakdown(severityGroups);

    // ── Document status breakdown ────────────────────────────────────────────
    const documentStatusBreakdown = this.buildDocStatusBreakdown(docStatusGroups);

    // ── Recent analyses ──────────────────────────────────────────────────────
    const recentAnalyses: RecentAnalysisDto[] = recentRequests.map((req) => {
      const result = req.response?.AnalysisResult ?? null;
      return {
        id: req.id,
        documentId: req.documentId ?? null,
        documentName: req.document?.originalFileName ?? null,
        requestStatus: req.status as RecentAnalysisDto['requestStatus'],
        verdict: (result?.overallVerdict ?? null) as RecentAnalysisDto['verdict'],
        riskLevel: (result?.riskLevel ?? null) as RecentAnalysisDto['riskLevel'],
        confidenceScore: result?.confidence ?? null,
        createdAt: req.createdAt.toISOString(),
      };
    });

    // ── Documents requiring attention (with computed status) ─────────────────
    const documentsRequiringAttention: DocumentAttentionDto[] = await Promise.all(
      attentionDocs.map(async (doc) => {
        const latestResult =
          doc.analysisRequests[0]?.response?.AnalysisResult ?? null;
        const findings = latestResult?.findings ?? [];
        const criticalFindings = findings.filter((f) => f.severity === 'critical').length;
        const highFindings = findings.filter((f) => f.severity === 'high').length;

        const { status: dashboardStatus } =
          await this.documentStatusService.getDocumentStatus(doc.id);

        return {
          id: doc.id,
          fileName: doc.originalFileName,
          dashboardStatus,
          riskLevel: (latestResult?.riskLevel ?? null) as DocumentAttentionDto['riskLevel'],
          criticalFindings,
          highFindings,
          expirationDate: doc.expirationDate?.toISOString() ?? null,
        };
      }),
    );

    // ── Upcoming expirations ─────────────────────────────────────────────────
    const upcomingExpirations: ExpirationDto[] = expiringSoon.map((doc) => ({
      id: doc.id,
      fileName: doc.originalFileName,
      expirationDate: doc.expirationDate!.toISOString(),
      daysUntilExpiration: Math.ceil(
        (doc.expirationDate!.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
      ),
    }));

    // ── Recent activity ──────────────────────────────────────────────────────
    const recentActivityDtos: ActivityDto[] = recentActivity.map((log) => ({
      id: log.id,
      action: log.action,
      entityType: log.entityType ?? null,
      entityId: log.entityId ?? null,
      userEmail: log.user?.email ?? null,
      userFullName: log.user?.fullName ?? null,
      metadata: log.metadata as Record<string, unknown> | null,
      createdAt: log.createdAt.toISOString(),
    }));

    return {
      generatedAt: now.toISOString(),
      kpis,
      complianceDistribution,
      riskDistribution,
      findingsSeverityBreakdown,
      documentStatusBreakdown,
      recentAnalyses,
      documentsRequiringAttention,
      upcomingExpirations,
      recentActivity: recentActivityDtos,
    };
  }

  // ── Private assembly helpers ───────────────────────────────────────────────

  private buildKpis(ctx: {
    docStatusGroups: { status: string; _count: { id: number } }[];
    analysisStatusGroups: { status: string; _count: { id: number } }[];
    verdictGroups: { overallVerdict: string | null; _count: { id: number } }[];
    expiredCount: number;
    expiringSoonCount: number;
    unreadNotifCount: number;
  }): KpisDto {
    const docCount = (s: string) =>
      ctx.docStatusGroups.find((g) => g.status === s)?._count.id ?? 0;
    const analysisCount = (s: string) =>
      ctx.analysisStatusGroups.find((g) => g.status === s)?._count.id ?? 0;
    const verdictCount = (v: string) =>
      ctx.verdictGroups.find((g) => g.overallVerdict === v)?._count.id ?? 0;

    const totalDocuments =
      docCount('uploaded') +
      docCount('extracting') +
      docCount('chunking') +
      docCount('ready') +
      docCount('failed');

    const completedAnalyses = analysisCount('completed');
    const compliantAnalyses = verdictCount('compliant');
    const complianceRate =
      completedAnalyses > 0
        ? Math.round((compliantAnalyses / completedAnalyses) * 100)
        : 0;

    return {
      totalDocuments,
      readyDocuments: docCount('ready'),
      processingDocuments: docCount('extracting') + docCount('chunking'),
      failedDocuments: docCount('failed'),
      totalAnalyses:
        analysisCount('pending') +
        analysisCount('processing') +
        completedAnalyses +
        analysisCount('failed'),
      completedAnalyses,
      pendingAnalyses: analysisCount('pending') + analysisCount('processing'),
      failedAnalyses: analysisCount('failed'),
      unreadNotifications: ctx.unreadNotifCount,
      expiredDocuments: ctx.expiredCount,
      expiringSoonDocuments: ctx.expiringSoonCount,
      complianceRate,
    };
  }

  private buildComplianceDistribution(
    groups: { overallVerdict: string | null; _count: { id: number } }[],
  ): ComplianceDistributionDto {
    const get = (v: string) =>
      groups.find((g) => g.overallVerdict === v)?._count.id ?? 0;
    return {
      compliant: get('compliant'),
      partial: get('partial'),
      non_compliant: get('non_compliant'),
      unknown: get('unknown'),
    };
  }

  private buildRiskDistribution(
    groups: { riskLevel: string | null; _count: { id: number } }[],
  ): RiskDistributionDto {
    const get = (r: string) =>
      groups.find((g) => g.riskLevel === r)?._count.id ?? 0;
    return {
      low: get('low'),
      medium: get('medium'),
      high: get('high'),
    };
  }

  private buildSeverityBreakdown(
    groups: { severity: string; _count: { id: number } }[],
  ): FindingsSeverityBreakdownDto {
    const get = (s: string) =>
      groups.find((g) => g.severity === s)?._count.id ?? 0;
    return {
      info: get('info'),
      low: get('low'),
      medium: get('medium'),
      high: get('high'),
      critical: get('critical'),
    };
  }

  private buildDocStatusBreakdown(
    groups: { status: string; _count: { id: number } }[],
  ): DocumentStatusBreakdownDto {
    const get = (s: string) =>
      groups.find((g) => g.status === s)?._count.id ?? 0;
    return {
      uploaded: get('uploaded'),
      extracting: get('extracting'),
      chunking: get('chunking'),
      ready: get('ready'),
      failed: get('failed'),
    };
  }
}
