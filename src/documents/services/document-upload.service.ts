import {
  Injectable,
  Logger,
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { PdfValidatorService } from './pdf-validator.service';
import { PdfExtractorService } from './pdf-extractor.service';
import { ChunkingService } from './chunking.service';
import { createHash } from 'crypto';
import { DocumentStatus, Document } from '../../generated/prisma/client.js';
import { UsagePolicyService } from '../../policy/usage-policy.service';
import { NotificationsService } from '../../notifications/notifications.service';

export interface UploadDocumentResponseDto {
  id: string;
  originalFileName: string;
  mimeType?: string;
  checksum?: string;
  fileSize?: number;
  pageCount?: number;
  totalChunks?: number;
  status: DocumentStatus;
  createdAt: Date;
  updatedAt: Date;
}

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
    private readonly policyService: UsagePolicyService,
    private readonly notificationsService: NotificationsService,
  ) {}

  async uploadForUser(
    file: Express.Multer.File,
    userId: string,
  ): Promise<UploadDocumentResponseDto> {
    await this.policyService.enforceUploadLimit(userId, undefined);
    const doc = await this.runUploadPipeline(file, {
      type: 'user',
      userId,
    });
    await this.policyService.incrementUpload(userId, undefined);

    // Fire upload notification (non-blocking)
    void this.notificationsService
      .createNotification({
        userId,
        title: 'Document Uploaded Successfully',
        message: `Your document "${doc.originalFileName}" has been uploaded and is ready for analysis.`,
        type: 'system_alert',
        deliveryChannel: 'in_app',
        documentId: doc.id,
      })
      .catch(() => {});

    return doc;
  }

  async uploadForGuest(
    file: Express.Multer.File,
    ip: string,
  ): Promise<GuestUploadResponseDto> {
    await this.policyService.enforceUploadLimit(undefined, ip);

    const guestToken = ip;
    const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const document = await this.runUploadPipeline(file, {
      type: 'guest',
      guestToken,
      expirationDate,
    });

    await this.policyService.incrementUpload(undefined, ip);

    return {
      document,
      guestToken,
    };
  }

  private async runUploadPipeline(
    file: Express.Multer.File,
    owner: UploadOwnerContext,
  ): Promise<UploadDocumentResponseDto> {
    await this.validator.validate(file);

    const checksum = this.computeChecksum(file.buffer);
    this.logger.log(`SHA-256 checksum for "${file.originalname}": ${checksum}`);

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

    const createdDocument = await this.prisma.document.create({
      data: this.buildCreateDocumentData(file, checksum, owner),
    });

    const documentId = createdDocument.id;
    this.logger.log(`Document record created: ${documentId}`);

    try {
      await this.prisma.document.update({
        where: { id: documentId },
        data: { status: 'extracting' },
      });

      const { text, pageCount } = await this.extractor.extract(
        file.buffer,
        file.originalname,
      );

      await this.prisma.document.update({
        where: { id: documentId },
        data: { status: 'chunking' },
      });

      const chunks = this.chunker.chunk(text, file.originalname);

      // NOTE: Sequential awaits instead of $transaction — Neon's transaction-mode
      // pooler does not support interactive transactions (Prisma P2028).
      await this.prisma.documentChunk.createMany({
        data: chunks.map((c) => ({
          documentId,
          chunkIndex: c.chunkIndex,
          content: c.content,
          pageNumber: c.pageNumber,
          tokenCount: c.tokenCount,
        })),
      });

      const finalDocument = await this.prisma.document.update({
        where: { id: documentId },
        data: {
          status: 'ready',
          pageCount,
          totalChunks: chunks.length,
        },
      });

      this.logger.log(
        `Document ${documentId} is ready: ${pageCount} page(s), ${chunks.length} chunk(s).`,
      );

      return this.toResponseDto(finalDocument as any);
    } catch (err) {
      this.logger.error(
        `Pipeline failed for document ${documentId}: ${(err as Error).message}`,
        (err as Error).stack,
      );

      await this.prisma.document
        .update({
          where: { id: documentId },
          data: { status: 'failed' },
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

  private buildCreateDocumentData(
    file: Express.Multer.File,
    checksum: string,
    owner: UploadOwnerContext,
  ): any {
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
        status: 'uploaded',
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
      status: 'uploaded',
    };
  }

  private computeChecksum(buffer: Buffer): string {
    return createHash('sha256').update(buffer).digest('hex');
  }

  private toResponseDto(doc: any): UploadDocumentResponseDto {
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
