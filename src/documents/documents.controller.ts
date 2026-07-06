import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseUUIDPipe,
  UseInterceptors,
  UploadedFile,
  HttpCode,
  HttpStatus,
  BadRequestException,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { DocumentsService } from './documents.service';
import { DocumentUploadService } from './services/document-upload.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { UploadDocumentDto } from './dto/upload-document.dto';

/** 20 MB in bytes — Multer's first line of defence against oversized uploads. */
const MAX_FILE_SIZE = 20 * 1024 * 1024;

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('documents')
export class DocumentsController {
  constructor(
    private readonly documentsService: DocumentsService,
    private readonly documentUploadService: DocumentUploadService,
  ) {}

  // ── Upload endpoint ───────────────────────────────────────────────────────

  /**
   * POST /documents/upload
   *
   * Accepts a multipart/form-data request with:
   *   - `file`       — the PDF binary (field name: "file")
   *   - `uploadedBy` — UUID of the uploading user
   *
   * Pipeline: validate → deduplicate → extract text → chunk → store chunks.
   *
   * Possible error responses:
   *   - 400  No file provided
   *   - 409  Duplicate content (same SHA-256 checksum in this organisation)
   *   - 413  File exceeds 20 MB
   *   - 415  Not a valid PDF (MIME type or file signature mismatch)
   *   - 500  Unexpected processing error
   */
  @Post('upload')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      limits: { fileSize: MAX_FILE_SIZE },
      fileFilter: (_req, file, cb) => {
        // Fast gate: reject non-PDF MIME types before the buffer is even read.
        // PdfValidatorService performs a deeper signature check afterwards.
        if (file.mimetype !== 'application/pdf') {
          cb(
            new BadRequestException(
              `Only PDF files are accepted. Received: ${file.mimetype}`,
            ),
            false,
          );
        } else {
          cb(null, true);
        }
      },
    }),
  )
  async upload(
    @UploadedFile() file: Express.Multer.File,

    @Body() body: UploadDocumentDto,
  ) {
    if (!file) {
      throw new BadRequestException(
        'No file uploaded. Include a PDF under the "file" field.',
      );
    }

    return this.documentUploadService.upload(file, body.uploadedBy);
  }

  // ── CRUD endpoints ────────────────────────────────────────────────────────

  @Post()
  async create(@Body() createDto: CreateDocumentDto) {
    return this.documentsService.createDocument({
      ...createDto,
      expirationDate: createDto.expirationDate
        ? new Date(createDto.expirationDate)
        : undefined,
    });
  }

  @Get(':id')
  async get(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.documentsService.getDocumentById(id);
  }

  @Get()
  async getAll(
    @Request() req: { user: { id: string } },
    @Query() query: PaginationQueryDto,
  ) {
    return this.documentsService.getDocuments(req.user.id, query);
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateDto: UpdateDocumentDto,
  ) {
    return this.documentsService.updateDocument(id, {
      ...updateDto,
      expirationDate: updateDto.expirationDate
        ? new Date(updateDto.expirationDate)
        : undefined,
    });
  }

  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.documentsService.deleteDocument(id);
  }
}
