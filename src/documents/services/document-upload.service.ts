import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { createHash, randomBytes } from 'crypto';
import { PrismaService } from '../../prisma/prisma.service';
import { Document, DocumentStatus } from 'src/generated/prisma';
import { PdfValidatorService } from './pdf-validator.service';
import { PdfExtractorService } from './pdf-extractor.service';
import { ChunkingService } from './chunking.service';
import { UploadDocumentResponseDto } from '../dto/upload-document-response.dto';

type UploadOwnerContext =
  | {
      type: 'user';
      userId: string;
    }
  | {
      type: 'guest';
      guestToken: string;
      expirationDate?: Date;
    };

export interface GuestUploadResponseDto {
  document: UploadDocumentResponseDto;
  guestToken: string;
}

@Injectable()
export class DocumentUploadService {
  private readonly logger = new Logger(DocumentUploadService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly validator: PdfValidatorService,
    private readonly extractor: PdfExtractorService,
    private readonly chunker: ChunkingService,
  ) {}

  /**
   * Upload a document for an authenticated user.
   */
  async uploadForUser(
    file: Express.Multer.File,
    userId: string,
  ): Promise<UploadDocumentResponseDto> {
    return this.runUploadPipeline(file, {
      type: 'user',
      userId,
    });
  }

  /**
   * Upload a document for a guest (unauthenticated trial).
   *
   * Returns the uploaded document plus a guest token that must be used
   * later to access/claim the guest document.
   */
  async uploadForGuest(
    file: Express.Multer.File,
  ): Promise<GuestUploadResponseDto> {
    const guestToken = this.generateGuestToken();

    // Example expiry: 24 hours. Adjust as you like.
    const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const document = await this.runUploadPipeline(file, {
      type: 'guest',
      guestToken,
      expirationDate,
    });

    return {
      document,
      guestToken,
    };
  }

  /**
   * Shared PDF ingestion pipeline:
   *
   * 1. Validate (MIME, size, file signature)
   * 2. Compute SHA-256 checksum → detect duplicates
   * 3. Create Document record with status = uploaded
   * 4. Extract text (status → extracting)
   * 5. Chunk text   (status → chunking)
   * 6. Bulk-insert chunks + update Document metadata (status → ready)
   *
   * On any error after record creation: set status → failed then rethrow.
   */
  private async runUploadPipeline(
    file: Express.Multer.File,
    owner: UploadOwnerContext,
  ): Promise<UploadDocumentResponseDto> {
    // ── 1. Validate ────────────────────────────────────────────────────────
    await this.validator.validate(file);

    // ── 2. Checksum & duplicate check ──────────────────────────────────────
    const checksum = this.computeChecksum(file.buffer);
    this.logger.log(`SHA-256 checksum for "${file.originalname}": ${checksum}`);

    /**
     * Duplicate policy:
     * - For authenticated users: block duplicates globally (same as your current behavior)
     * - For guests: also block duplicates globally for now
     *
     * If you later want a different policy, you can scope this by uploadedBy / guest ownership.
     */
    const existing = await this.prisma.document.findFirst({
      where: { checksum },
      select: { id: true, originalFileName: true },
    });

    if (existing) {
      this.logger.warn(
        `Duplicate detected: checksum ${checksum} matches document ${existing.id} ("${existing.originalFileName}")`,
      );

      throw new ConflictException({
        message: 'A document with identical content already exists.',
        existingDocumentId: existing.id,
      });
    }

    // ── 3. Create Document record (status = uploaded) ──────────────────────
    const createdDocument = await this.prisma.document.create({
      data: this.buildCreateDocumentData(file, checksum, owner),
    });

    const documentId = createdDocument.id;
    this.logger.log(`Document record created: ${documentId}`);

    try {
      // ── 4. Extract text (status → extracting) ───────────────────────────
      await this.prisma.document.update({
        where: { id: documentId },
        data: { status: DocumentStatus.extracting },
      });

      const { text, pageCount } = await this.extractor.extract(
        file.buffer,
        file.originalname,
      );

      // ── 5. Chunk text (status → chunking) ───────────────────────────────
      await this.prisma.document.update({
        where: { id: documentId },
        data: { status: DocumentStatus.chunking },
      });

      const chunks = this.chunker.chunk(text, file.originalname);

      // ── 6. Persist chunks + finalize document in one transaction ─────────
      const finalDocument = await this.prisma.$transaction(async (tx) => {
        await tx.documentChunk.createMany({
          data: chunks.map((c) => ({
            documentId,
            chunkIndex: c.chunkIndex,
            content: c.content,
            pageNumber: c.pageNumber,
            tokenCount: c.tokenCount,
          })),
        });

        return tx.document.update({
          where: { id: documentId },
          data: {
            status: DocumentStatus.ready,
            pageCount,
            totalChunks: chunks.length,
          },
        });
      });

      this.logger.log(
        `Document ${documentId} is ready: ${pageCount} page(s), ${chunks.length} chunk(s).`,
      );

      return this.toResponseDto(finalDocument);
    } catch (err) {
      // ── Error handler: mark document as failed ───────────────────────────
      this.logger.error(
        `Pipeline failed for document ${documentId}: ${(err as Error).message}`,
        (err as Error).stack,
      );

      await this.prisma.document
        .update({
          where: { id: documentId },
          data: { status: DocumentStatus.failed },
        })
        .catch((updateErr) =>
          this.logger.error(
            `Failed to mark document ${documentId} as failed`,
            updateErr,
          ),
        );

      if (
        err instanceof ConflictException ||
        err instanceof InternalServerErrorException
      ) {
        throw err;
      }

      throw new InternalServerErrorException(
        'An unexpected error occurred while processing the PDF.',
      );
    }
  }

  // ── Helpers ──────────────────────────────────────────────────────────────

  private buildCreateDocumentData(
    file: Express.Multer.File,
    checksum: string,
    owner: UploadOwnerContext,
  ) {
    if (owner.type === 'user') {
      return {
        uploadedBy: owner.userId,
        guestToken: null,
        isGuest: false,
        expirationDate: null,
        originalFileName: file.originalname,
        mimeType: file.mimetype,
        fileSize: file.size,
        checksum,
        status: DocumentStatus.uploaded,
      };
    }

    return {
      uploadedBy: null,
      guestToken: owner.guestToken,
      isGuest: true,
      expirationDate: owner.expirationDate ?? null,
      originalFileName: file.originalname,
      mimeType: file.mimetype,
      fileSize: file.size,
      checksum,
      status: DocumentStatus.uploaded,
    };
  }

  private computeChecksum(buffer: Buffer): string {
    return createHash('sha256').update(buffer).digest('hex');
  }

  private generateGuestToken(): string {
    return randomBytes(32).toString('hex');
  }

  private toResponseDto(doc: Document): UploadDocumentResponseDto {
    return {
      id: doc.id,
      originalFileName: doc.originalFileName,
      mimeType: doc.mimeType ?? undefined,
      checksum: doc.checksum ?? undefined,
      fileSize: doc.fileSize ?? undefined,
      pageCount: doc.pageCount ?? undefined,
      totalChunks: doc.totalChunks ?? undefined,
      status: doc.status,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    };
  }
}
