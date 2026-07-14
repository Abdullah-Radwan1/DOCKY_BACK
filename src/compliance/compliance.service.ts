import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AnalysisOrchestratorService } from '../ai/services/analysis-orchestrator.service';
import { CreateComplianceQueryDto } from './dto/create-compliance-query.dto';
import { CreateAnalysisRequestDto } from './dto/create-analysis-request.dto';
import { UsagePolicyService } from '../policy/usage-policy.service';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class ComplianceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly orchestrator: AnalysisOrchestratorService,
    private readonly policyService: UsagePolicyService,
    private readonly notificationsService: NotificationsService,
  ) {}

  // ── Analysis pipeline ──────────────────────────────────────────────────────

  /**
   * Creates an AnalysisRequest and immediately runs the AI pipeline.
   */
  async submitAnalysis(dto: CreateAnalysisRequestDto & { ip?: string }) {
    // ── Enforce analysis limits ──────────────────────────────────────────
    // The guest IP is passed down from the controller.
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
        queryText: dto.queryText,
        userId: dto.userId || null,
        guestId: dto.guestId || null,
        documentId: dto.documentId,
        status: 'pending',
      },
    });

    // Increment analysis count
    await this.policyService.incrementAnalysis(dto.userId, guestIp);

    // ── Run the AI pipeline (synchronous in V1) ──────────────────────────
    await this.orchestrator.analyzeDocument(request.id);

    // ── Return the full result ───────────────────────────────────────────
    const result = await this.getAnalysisResult(request.id);

    // ── Fire compliance alert notification (non-blocking) ────────────────
    if (dto.userId && result.response?.AnalysisResult) {
      const analysis = result.response.AnalysisResult;
      const verdict = analysis.overallVerdict ?? 'unknown';
      const risk = analysis.riskLevel ?? 'unknown';
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

    return result;
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
}
