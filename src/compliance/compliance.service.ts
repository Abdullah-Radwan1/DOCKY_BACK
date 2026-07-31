import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AnalysisOrchestratorService } from '../ai/services/analysis-orchestrator.service';
import { CreateComplianceQueryDto } from './dto/create-compliance-query.dto';
import { CreateAnalysisRequestDto } from './dto/create-analysis-request.dto';
import { UsagePolicyService } from '../policy/usage-policy.service';
import { NotificationsService } from '../notifications/notifications.service';
import { AnalysisOptions } from '../ai/interfaces/analysis-options.interface';

@Injectable()
export class ComplianceService {
  private readonly logger = new Logger(ComplianceService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly orchestrator: AnalysisOrchestratorService,
    private readonly policyService: UsagePolicyService,
    private readonly notificationsService: NotificationsService,
  ) {}

  // ── Analysis pipeline ──────────────────────────────────────────────────────

  /**
   * Creates an AnalysisRequest and immediately fires the AI pipeline in the
   * background. Returns { requestId } right away so the HTTP handler can
   * respond in <500 ms instead of blocking for 60-120 s.
   */
  async submitAnalysis(dto: CreateAnalysisRequestDto & { ip?: string }): Promise<{ requestId: string }> {
    // ── Enforce analysis limits ──────────────────────────────────────────
    const guestIp = dto.userId ? undefined : dto.ip;
    await this.policyService.enforceAnalysisLimit(dto.userId, guestIp);

    // ── Validate document exists and is ready ────────────────────────────
    const document = await this.prisma.document.findUnique({
      where: { id: dto.documentId },
      select: { id: true, status: true, uploadedBy: true, guestToken: true },
    });

    if (!document) {
      throw new NotFoundException(`Document not found`);
    }

    // Ownership check
    if (dto.userId) {
      if (document.uploadedBy !== dto.userId) {
        throw new NotFoundException('Document not found');
      }
    } else {
      if (document.guestToken !== guestIp) {
        throw new NotFoundException('Document not found');
      }
    }

    if (document.status !== 'ready') {
      throw new BadRequestException(
        `Document is not ready for analysis (status: ${document.status}). ` +
          'Wait for extraction and chunking to complete.',
      );
    }

    // ── Create the analysis request ──────────────────────────────────────
    const request = await this.prisma.analysisRequest.create({
      data: {
        queryText: dto.queryText ?? '',
        userId: dto.userId || null,
        guestId: dto.guestId || null,
        documentId: dto.documentId,
        status: 'pending',
      },
    });

    // Increment analysis count
    await this.policyService.incrementAnalysis(dto.userId, guestIp);

    // ── Fire the AI pipeline in background (non-blocking) ────────────────
    // The orchestrator updates DB status (pending → processing → completed/failed).
    // The frontend polls /compliance/document/:id/status for live progress.
    void this.orchestrator
      .analyzeDocument(request.id, dto.options)
      .then(async () => {
        if (!dto.userId) return;
        try {
          const result = await this.getAnalysisResult(request.id);
          if (result.response?.AnalysisResult) {
            const analysis = result.response.AnalysisResult;
            const verdict = (analysis.overallVerdict as string) ?? 'unknown';
            const risk = (analysis.riskLevel as string) ?? 'unknown';
            const docName = result.document?.originalFileName ?? 'your document';
            const isHighRisk = risk === 'high' || verdict === 'non_compliant';

            void this.notificationsService
              .createNotification({
                userId: dto.userId,
                title: isHighRisk ? '⚠️ Risk Alert Detected' : 'Analysis Complete',
                message: isHighRisk
                  ? `High-risk issues found in "${docName}". Verdict: ${verdict.replace('_', ' ')}, Risk: ${risk}. Review the findings immediately.`
                  : `Analysis of "${docName}" is complete. Verdict: ${verdict.replace('_', ' ')}, Risk level: ${risk}.`,
                type: 'compliance_alert',
                deliveryChannel: 'in_app',
                documentId: dto.documentId,
              })
              .catch(() => {});
          }
        } catch (notifErr) {
          this.logger.error(
            `Failed to send completion notification for request ${request.id}`,
            notifErr,
          );
        }
      })
      .catch((err) => {
        this.logger.error(
          `Background analysis failed for request ${request.id}: ${(err as Error).message}`,
          (err as Error).stack,
        );
      });

    return { requestId: request.id };
  }

  /**
   * Fetches a completed analysis with its full result tree:
   * AnalysisRequest → AIResponse → AnalysisResult → Finding[]
   */
  async getAnalysisResult(requestId: string) {
    const result = await this.prisma.analysisRequest.findUnique({
      where: { id: requestId },
      include: {
        document: true,
        response: {
          include: {
            AnalysisResult: {
              include: {
                findings: {
                  orderBy: { createdAt: 'asc' },
                },
              },
            },
          },
        },
      },
    });

    if (!result) {
      throw new NotFoundException(
        `Analysis request ${requestId} not found`,
      );
    }

    return result;
  }

  // ── Existing CRUD (kept as-is) ─────────────────────────────────────────────

  /**
   * Registers a new compliance query submitted by a user.
   */
  async createQuery(data: CreateComplianceQueryDto) {
    return this.prisma.analysisRequest.create({
      data: {
        queryText: data.queryText,
        userId: data.userId,
        documentId: data.documentId || null,
        status: 'pending',
      },
    });
  }

  /**
   * Fetches a single query along with its AI responses.
   */
  async getQueryById(id: string) {
    const query = await this.prisma.analysisRequest.findUnique({
      where: { id },
      include: {
        response: true,
        document: true,
        user: true,
      },
    });
    if (!query) {
      throw new NotFoundException(`Compliance query with ID ${id} not found`);
    }
    return query;
  }

  /**
   * Fetches all compliance queries for a document.
   */
  async getQueriesByDocument(documentId: string) {
    return this.prisma.analysisRequest.findMany({
      where: { documentId },
      include: {
        response: {
          include: {
            AnalysisResult: {
              include: {
                findings: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Returns the latest analysis request status for a document.
   * Used by the frontend progress bar to poll analysis state.
   */
  async getLatestAnalysisStatus(documentId: string) {
    const request = await this.prisma.analysisRequest.findFirst({
      where: { documentId },
      orderBy: { createdAt: 'desc' },
      select: { id: true, status: true, errorMessage: true, createdAt: true },
    });
    return request ?? { id: null, status: null, errorMessage: null };
  }
}
