import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DocumentStatus } from '../generated/prisma/client.js';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import {
  paginatePrisma,
  PaginatedResult,
} from '../common/utils/pagination.utils';

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

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
}
