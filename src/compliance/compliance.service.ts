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
    const methodStart = Date.now();
    this.logger.log(`[FLOW START] submitAnalysis for documentId: ${dto.documentId}, userId: ${dto.userId}`);

    // ── Enforce analysis limits ──────────────────────────────────────────
    const guestIp = dto.userId ? undefined : dto.ip;
    this.logger.log(`[AWAIT START] policyService.enforceAnalysisLimit`);
    const limitStart = Date.now();
    await this.policyService.enforceAnalysisLimit(dto.userId, guestIp);
    this.logger.log(`[AWAIT END] policyService.enforceAnalysisLimit took ${Date.now() - limitStart}ms`);

    // ── Validate document exists and is ready ────────────────────────────
    this.logger.log(`[AWAIT START] prisma.document.findUnique for id: ${dto.documentId}`);
    const docQueryStart = Date.now();
    const document = await this.prisma.document.findUnique({
      where: { id: dto.documentId },
      select: { id: true, status: true, uploadedBy: true, guestToken: true },
    });
    this.logger.log(`[AWAIT END] prisma.document.findUnique took ${Date.now() - docQueryStart}ms`);

    if (!document) {
      this.logger.warn(`[FLOW ERROR] Document ${dto.documentId} not found`);
      throw new NotFoundException(`Document not found`);
    }

    // Ownership check
    if (dto.userId) {
      if (document.uploadedBy !== dto.userId) {
        this.logger.warn(`[FLOW ERROR] Document owner mismatch for user ${dto.userId}`);
        throw new NotFoundException('Document not found');
      }
    } else {
      if (document.guestToken !== guestIp) {
        this.logger.warn(`[FLOW ERROR] Document guest token mismatch for IP ${guestIp}`);
        throw new NotFoundException('Document not found');
      }
    }

    if (document.status !== 'ready') {
      this.logger.warn(`[FLOW ERROR] Document ${dto.documentId} not ready (status: ${document.status})`);
      throw new BadRequestException(
        `Document is not ready for analysis (status: ${document.status}). ` +
          'Wait for extraction and chunking to complete.',
      );
    }

    // ── Create the analysis request ──────────────────────────────────────
    this.logger.log(`[AWAIT START] prisma.analysisRequest.create pending`);
    const reqCreateStart = Date.now();
    const request = await this.prisma.analysisRequest.create({
      data: {
        queryText: dto.queryText ?? '',
        userId: dto.userId || null,
        guestId: dto.guestId || null,
        documentId: dto.documentId,
        status: 'pending',
      },
    });
    this.logger.log(`[AWAIT END] prisma.analysisRequest.create took ${Date.now() - reqCreateStart}ms, requestId: ${request.id}`);

    // Increment analysis count
    this.logger.log(`[AWAIT START] policyService.incrementAnalysis`);
    const incStart = Date.now();
    await this.policyService.incrementAnalysis(dto.userId, guestIp);
    this.logger.log(`[AWAIT END] policyService.incrementAnalysis took ${Date.now() - incStart}ms`);

    // ── Fire the AI pipeline in background (non-blocking) ────────────────
    this.logger.log(`[FLOW BACKGROUND TRIGGER] Firing orchestrator.analyzeDocument for requestId: ${request.id}`);
    const bgStart = Date.now();
    void this.orchestrator
      .analyzeDocument(request.id, dto.options)
      .then(async () => {
        this.logger.log(`[FLOW BACKGROUND SUCCESS] orchestrator.analyzeDocument resolved in ${Date.now() - bgStart}ms for requestId: ${request.id}`);
        if (!dto.userId) {
          this.logger.log(`[FLOW BACKGROUND INFO] Skipped notifications (no userId)`);
          return;
        }
        try {
          this.logger.log(`[AWAIT START] getAnalysisResult for notifications`);
          const notifFetchStart = Date.now();
          const result = await this.getAnalysisResult(request.id);
          this.logger.log(`[AWAIT END] getAnalysisResult for notifications took ${Date.now() - notifFetchStart}ms`);
          
          if (result.response?.AnalysisResult) {
            const analysis = result.response.AnalysisResult;
            const verdict = (analysis.overallVerdict as string) ?? 'unknown';
            const risk = (analysis.riskLevel as string) ?? 'unknown';
            const docName = result.document?.originalFileName ?? 'your document';
            const isHighRisk = risk === 'high' || verdict === 'non_compliant';

            this.logger.log(`[AWAIT START] notificationsService.createNotification`);
            const notifCreateStart = Date.now();
            await this.notificationsService.createNotification({
              userId: dto.userId,
              title: isHighRisk ? '⚠️ Risk Alert Detected' : 'Analysis Complete',
              message: isHighRisk
                ? `High-risk issues found in "${docName}". Verdict: ${verdict.replace('_', ' ')}, Risk: ${risk}. Review the findings immediately.`
                : `Analysis of "${docName}" is complete. Verdict: ${verdict.replace('_', ' ')}, Risk level: ${risk}.`,
              type: 'compliance_alert',
              deliveryChannel: 'in_app',
              documentId: dto.documentId,
            });
            this.logger.log(`[AWAIT END] notificationsService.createNotification took ${Date.now() - notifCreateStart}ms`);
          } else {
            this.logger.warn(`[FLOW BACKGROUND WARN] No AnalysisResult found to trigger notifications`);
          }
        } catch (notifErr) {
          this.logger.error(
            `[FLOW BACKGROUND ERROR] Failed to send completion notification for request ${request.id}`,
            notifErr,
          );
        }
      })
      .catch((err) => {
        this.logger.error(
          `[FLOW BACKGROUND ERROR] Background analysis failed for request ${request.id}: ${(err as Error).message}`,
          (err as Error).stack,
        );
      });

    this.logger.log(`[FLOW RETURN] submitAnalysis returning requestId: ${request.id} (total response time: ${Date.now() - methodStart}ms)`);
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
