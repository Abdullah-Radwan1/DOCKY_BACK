import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { createHash } from 'crypto';
import { PrismaService } from '../../prisma/prisma.service';
import { DocumentStatus } from 'src/generated/prisma';
import { PdfValidatorService } from './pdf-validator.service';
import { PdfExtractorService } from './pdf-extractor.service';
import { ChunkingService } from './chunking.service';
import { UploadDocumentResponseDto } from '../dto/upload-document-response.dto';

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
   * Full PDF ingestion pipeline:
   *
   * 1. Validate (MIME, size, file signature)
   * 2. Compute SHA-256 checksum → detect duplicates (409 if exists)
   * 3. Create Document record with status = `uploaded`
   * 4. Extract text (status → `extracting`)
   * 5. Chunk text   (status → `chunking`)
   * 6. Bulk-insert chunks + update Document metadata (status → `ready`)
   *    — steps 5-6 run inside a Prisma transaction
   *
   * On any error after record creation: set status → `failed` then rethrow.
   */
  async upload(
    file: Express.Multer.File,
    organizationId?: string,
    uploadedBy?: string,
  ): Promise<UploadDocumentResponseDto> {
    // ── 1. Validate ────────────────────────────────────────────────────────
    await this.validator.validate(file);

    // ── 2. Checksum & duplicate check ──────────────────────────────────────
    const checksum = this.computeChecksum(file.buffer);
    this.logger.log(`SHA-256 checksum for "${file.originalname}": ${checksum}`);

    const existing = await this.prisma.document.findFirst({
      where: { checksum, ...(organizationId && { organizationId }) },
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
    const document = await this.prisma.document.create({
      data: {
        organizationId: organizationId ?? null,
        uploadedBy: uploadedBy ?? null,
        originalFileName: file.originalname,
        mimeType: file.mimetype,
        fileSize: file.size,
        checksum,
        status: DocumentStatus.uploaded,
      },
    });

    const documentId = document.id;
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
        // Bulk-insert all chunks
        await tx.documentChunk.createMany({
          data: chunks.map((c) => ({
            documentId,
            chunkIndex: c.chunkIndex,
            content: c.content,
            pageNumber: c.pageNumber,
            tokenCount: c.tokenCount,
          })),
        });

        // Update document to ready with final metadata
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

  private computeChecksum(buffer: Buffer): string {
    return createHash('sha256').update(buffer).digest('hex');
  }

  private toResponseDto(doc: {
    id: string;
    originalFileName: string;
    mimeType: string | null;
    checksum: string | null;
    fileSize: number | null;
    pageCount: number | null;
    totalChunks: number | null;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  }): UploadDocumentResponseDto {
    return {
      id: doc.id,
      originalFileName: doc.originalFileName,
      mimeType: doc.mimeType ?? undefined,
      checksum: doc.checksum ?? undefined,
      fileSize: doc.fileSize ?? undefined,
      pageCount: doc.pageCount ?? undefined,
      totalChunks: doc.totalChunks ?? undefined,
      status: doc.status as DocumentStatus,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    };
  }
}
