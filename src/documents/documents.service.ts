import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DocumentStatus, AnalysisVerdict } from '../generated/prisma/client.js';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import {
  paginatePrisma,
  PaginatedResult,
} from '../common/utils/pagination.utils';
import { AnalysisOrchestratorService } from '../ai/services/analysis-orchestrator.service';
import { DEFAULT_ANALYSIS_OPTIONS } from '../ai/interfaces/analysis-options.interface';

@Injectable()
export class DocumentsService {
  private readonly logger = new Logger(DocumentsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly orchestrator: AnalysisOrchestratorService,
  ) {}

  /**
   * Create a document owned by an authenticated user.
   * Ownership is always derived from the authenticated user, never from the DTO.
   */
  async createDocumentForUser(data: CreateDocumentDto, userId: string) {
    return this.prisma.document.create({
      data: {
        originalFileName: data.originalFileName,
        uploadedBy: userId,
        guestToken: null,
        isGuest: false,
        mimeType: data.mimeType ?? null,
        checksum: data.checksum ?? null,
        fileSize: data.fileSize ?? null,
        pageCount: data.pageCount ?? null,
        language: data.language ?? null,
        expirationDate: data.expirationDate ?? null,
        status: DocumentStatus.uploaded,
      },
    });
  }

  /**
   * Fetch a document that belongs to the authenticated user.
   */
  async getDocumentByIdForUser(id: string, userId: string) {
    const document = await this.prisma.document.findFirst({
      where: {
        id,
        uploadedBy: userId,
        isGuest: false,
      },
      include: {
        uploader: true,
        chunks: {
          orderBy: { chunkIndex: 'asc' },
          select: {
            id: true,
            chunkIndex: true,
            pageNumber: true,
            tokenCount: true,
            content: true,
          },
        },
      },
    });

    if (!document) {
      throw new NotFoundException('Document not found');
    }

    return document;
  }

  /**
   * Get the raw status of a document (uploaded, extracting, chunking, ready, failed).
   */
  async getDocumentStatusOnly(id: string) {
    const document = await this.prisma.document.findUnique({
      where: { id },
      select: { status: true },
    });

    if (!document) {
      throw new NotFoundException('Document not found');
    }

    return document.status;
  }

  /**
   * Fetch a guest document by document ID + guest token.
   * This is the secure access path for unauthenticated free-trial uploads.
   */
  async getGuestDocumentById(id: string, guestToken: string) {
    const document = await this.prisma.document.findFirst({
      where: {
        id,
        isGuest: true,
        guestToken,
      },
      include: {
        chunks: {
          orderBy: { chunkIndex: 'asc' },
          select: {
            id: true,
            chunkIndex: true,
            pageNumber: true,
            tokenCount: true,
            content: true,
          },
        },
      },
    });

    if (!document) {
      throw new NotFoundException('Guest document not found');
    }

    return document;
  }

  /**
   * Paginated list of authenticated user's documents.
   * Guest documents are explicitly excluded.
   */
  async getDocuments(
    userId: string,
    query: PaginationQueryDto,
  ): Promise<PaginatedResult<any>> {
    return paginatePrisma(this.prisma.document, query, {
      searchFields: ['originalFileName'],
      defaultSortBy: 'createdAt',
      where: {
        uploadedBy: userId,
        isGuest: false,
      },
    });
  }

  /**
   * Update a document only if it belongs to the authenticated user.
   */
  async updateDocumentForUser(
    id: string,
    userId: string,
    data: UpdateDocumentDto,
  ) {
    const {
      uploadedBy: _uploadedBy,
      guestToken: _guestToken,
      isGuest: _isGuest,
      ...scalars
    } = data as UpdateDocumentDto & {
      uploadedBy?: string | null;
      guestToken?: string | null;
      isGuest?: boolean;
    };

    const existing = await this.prisma.document.findFirst({
      where: {
        id,
        uploadedBy: userId,
        isGuest: false,
      },
      select: { id: true },
    });

    if (!existing) {
      throw new NotFoundException('Document not found');
    }

    return this.prisma.document.update({
      where: { id: existing.id },
      data: scalars,
    });
  }

  /**
   * Delete a document only if it belongs to the authenticated user.
   */
  async deleteDocumentForUser(id: string, userId: string) {
    const existing = await this.prisma.document.findFirst({
      where: {
        id,
        uploadedBy: userId,
        isGuest: false,
      },
      select: { id: true },
    });

    if (!existing) {
      throw new NotFoundException('Document not found');
    }

    return this.prisma.document.delete({
      where: { id: existing.id },
    });
  }

  /**
   * Optional but highly recommended:
   * Convert a guest document into a real user-owned document after signup/login.
   *
   * Flow:
   * - guest uploaded a file
   * - frontend keeps the guest token
   * - user signs up / logs in
   * - call claimGuestDocument(documentId, guestToken, userId)
   */
  async claimGuestDocument(id: string, guestToken: string, userId: string) {
    const existing = await this.prisma.document.findFirst({
      where: {
        id,
        isGuest: true,
        guestToken,
      },
      select: { id: true },
    });

    if (!existing) {
      throw new NotFoundException('Guest document not found');
    }

    return this.prisma.document.update({
      where: { id: existing.id },
      data: {
        uploadedBy: userId,
        isGuest: false,
        guestToken: null,
      },
    });
  }

  /**
   * Trigger a fresh AI analysis for a document that has not yet been analyzed.
   * Throws if the document already has a completed analysis.
   */
  async analyzeDocument(id: string, userId: string): Promise<{ requestId: string }> {
    const methodStart = Date.now();
    this.logger.log(`[FLOW START] analyzeDocument for documentId: ${id}, userId: ${userId}`);

    this.logger.log(`[AWAIT START] prisma.document.findFirst`);
    const docStart = Date.now();
    const document = await this.prisma.document.findFirst({
      where: { id, uploadedBy: userId, isGuest: false },
      select: { id: true, status: true },
    });
    this.logger.log(`[AWAIT END] prisma.document.findFirst took ${Date.now() - docStart}ms`);

    if (!document) {
      this.logger.warn(`[FLOW ERROR] Document ${id} not found or not owned by user ${userId}`);
      throw new NotFoundException('Document not found');
    }

    if (document.status !== DocumentStatus.ready) {
      this.logger.warn(`[FLOW ERROR] Document ${id} not ready (status: ${document.status})`);
      throw new BadRequestException(
        `Document is not ready for analysis (status: ${document.status}).`,
      );
    }

    // Check for existing completed analysis
    this.logger.log(`[AWAIT START] prisma.analysisRequest.findFirst (check completed)`);
    const existStart = Date.now();
    const existingRequest = await this.prisma.analysisRequest.findFirst({
      where: { documentId: id, status: 'completed' },
      select: { id: true },
    });
    this.logger.log(`[AWAIT END] prisma.analysisRequest.findFirst took ${Date.now() - existStart}ms`);

    if (existingRequest) {
      this.logger.warn(`[FLOW ERROR] Document ${id} has already been analyzed`);
      throw new BadRequestException('Document has already been analyzed.');
    }

    // Create analysis request record
    this.logger.log(`[AWAIT START] prisma.analysisRequest.create pending`);
    const createStart = Date.now();
    const request = await this.prisma.analysisRequest.create({
      data: {
        queryText: '',
        userId,
        documentId: id,
        status: 'pending',
      },
    });
    this.logger.log(`[AWAIT END] prisma.analysisRequest.create took ${Date.now() - createStart}ms, requestId: ${request.id}`);

    // Fire AI pipeline in background — return immediately so the HTTP
    // response resolves in <500 ms instead of waiting 60-120 s.
    // The frontend polls /compliance/document/:id/status for progress.
    this.logger.log(`[FLOW BACKGROUND TRIGGER] Firing orchestrator.analyzeDocument in background for requestId: ${request.id}`);
    const bgStart = Date.now();
    void this.orchestrator
      .analyzeDocument(request.id, DEFAULT_ANALYSIS_OPTIONS)
      .then(() => {
        this.logger.log(`[FLOW BACKGROUND SUCCESS] orchestrator.analyzeDocument resolved in ${Date.now() - bgStart}ms for requestId: ${request.id}`);
      })
      .catch((err) => {
        this.logger.error(
          `[FLOW BACKGROUND ERROR] Background analysis failed for request ${request.id}: ${(err as Error).message}`,
          (err as Error).stack,
        );
      });

    this.logger.log(`[FLOW RETURN] analyzeDocument returning requestId: ${request.id} (total response time: ${Date.now() - methodStart}ms)`);
    return { requestId: request.id };
  }

  /**
   * Permanently clears all findings for a document's latest analysis.
   * Resets the overallVerdict on AnalysisResult but keeps the document and analysis metadata.
   */
  async resolveFindings(id: string, userId: string): Promise<{ success: boolean; deletedCount: number }> {
    const document = await this.prisma.document.findFirst({
      where: { id, uploadedBy: userId, isGuest: false },
      select: { id: true },
    });

    if (!document) throw new NotFoundException('Document not found');

    // Get the latest completed analysis result for this document
    const latestRequest = await this.prisma.analysisRequest.findFirst({
      where: { documentId: id, status: 'completed' },
      orderBy: { createdAt: 'desc' },
      include: {
        response: {
          include: { AnalysisResult: { select: { id: true } } },
        },
      },
    });

    const analysisResultId = latestRequest?.response?.AnalysisResult?.id;
    if (!analysisResultId) {
      return { success: true, deletedCount: 0 };
    }

    const { count } = await this.prisma.finding.deleteMany({
      where: { analysisId: analysisResultId },
    });

    // Reset verdict to reflect cleared state
    await this.prisma.analysisResult.update({
      where: { id: analysisResultId },
      data: { overallVerdict: AnalysisVerdict.unknown },
    });

    return { success: true, deletedCount: count };
  }
}
