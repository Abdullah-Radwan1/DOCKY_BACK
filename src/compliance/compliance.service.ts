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

/** Free-plan analysis limits. */
const FREE_PLAN_ANALYSIS_LIMIT = 3;
const UNAUTHENTICATED_ANALYSIS_LIMIT = 1;

@Injectable()
export class ComplianceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly orchestrator: AnalysisOrchestratorService,
  ) {}

  // ── Analysis pipeline ──────────────────────────────────────────────────────

  /**
   * Creates an AnalysisRequest and immediately runs the AI pipeline.
   *
   * Enforces free-plan limits:
   *  - Unauthenticated users: 1 analysis total
   *  - Signed-in free-plan users: 3 analyses total
   */
  async submitAnalysis(dto: CreateAnalysisRequestDto) {
    // ── Enforce analysis limits ──────────────────────────────────────────
    await this.enforceAnalysisLimits(dto.userId, dto.guestId);

    // ── Validate document exists and is ready ────────────────────────────
    const document = await this.prisma.document.findUnique({
      where: { id: dto.documentId },
      select: { id: true, status: true },
    });

    if (!document) {
      throw new NotFoundException(`Document ${dto.documentId} not found`);
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

    // ── Run the AI pipeline (synchronous in V1) ──────────────────────────
    await this.orchestrator.analyzeDocument(request.id);

    // ── Return the full result ───────────────────────────────────────────
    return this.getAnalysisResult(request.id);
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

  // ── Private helpers ────────────────────────────────────────────────────────

  private async enforceAnalysisLimits(userId?: string, guestId?: string): Promise<void> {
    if (userId) {
      const user = await this.prisma.profile.findUnique({
        where: { id: userId },
        select: { id: true, role: true },
      });

      const existingCount = await this.prisma.analysisRequest.count({
        where: {
          userId,
          status: { in: ['completed', 'processing', 'pending'] },
        },
      });

      if (existingCount >= FREE_PLAN_ANALYSIS_LIMIT) {
        throw new ForbiddenException(
          `Free plan allows ${FREE_PLAN_ANALYSIS_LIMIT} analyses. You have used ${existingCount}. Upgrade to continue.`
        );
      }
    } else if (guestId) {
      const existingCount = await this.prisma.analysisRequest.count({
        where: {
          guestId,
          status: { in: ['completed', 'processing', 'pending'] },
        },
      });

      if (existingCount >= UNAUTHENTICATED_ANALYSIS_LIMIT) {
        throw new ForbiddenException(
          `Unauthenticated users can perform ${UNAUTHENTICATED_ANALYSIS_LIMIT} analysis. Please sign in for more.`
        );
      }
    } else {
      throw new BadRequestException("Must provide userId or guestId for analysis");
    }
  }
}
