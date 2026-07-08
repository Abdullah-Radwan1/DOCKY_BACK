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
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { DocumentsService } from './documents.service';
import { DocumentUploadService } from './services/document-upload.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Public } from '../auth/decorators/public.decorator';

/** 20 MB in bytes — Multer's first line of defence against oversized uploads. */
const MAX_FILE_SIZE = 20 * 1024 * 1024;

type AuthenticatedRequest = Request & {
  user: {
    id: string;
    [key: string]: any;
  };
};

@Controller('documents')
export class DocumentsController {
  constructor(
    private readonly documentsService: DocumentsService,
    private readonly documentUploadService: DocumentUploadService,
  ) {}

  // ── Shared upload interceptor config ─────────────────────────────────────

  private static readonly uploadInterceptor = FileInterceptor('file', {
    storage: memoryStorage(),
    limits: { fileSize: MAX_FILE_SIZE },
    fileFilter: (_req, file, cb) => {
      if (file.mimetype !== 'application/pdf') {
        cb(
          new BadRequestException(
            `Only PDF files are accepted. Received: ${file.mimetype}`,
          ),
          false,
        );
        return;
      }

      cb(null, true);
    },
  });

  // ── Authenticated upload ─────────────────────────────────────────────────

  /**
   * POST /documents/upload
   *
   * Upload a document for the currently authenticated user.
   * Ownership is always derived from req.user.id (from your auth cookie / JWT guard),
   * never from the request body.
   */
  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(DocumentsController.uploadInterceptor)
  async uploadForUser(
    @UploadedFile() file: Express.Multer.File,
    @Request() req: AuthenticatedRequest,
  ) {
    if (!file) {
      throw new BadRequestException(
        'No file uploaded. Include a PDF under the "file" field.',
      );
    }

    return this.documentUploadService.uploadForUser(file, req.user.id);
  }

  // ── Guest upload (one free try) ──────────────────────────────────────────

  /**
   * POST /documents/guest-upload
   *
   * Public endpoint for a guest / free-trial upload.
   * This does NOT create a user-owned document.
   * The service generates a guest token and returns it with the document payload.
   */
  @Public()
  @Post('guest-upload')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(DocumentsController.uploadInterceptor)
  async uploadForGuest(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException(
        'No file uploaded. Include a PDF under the "file" field.',
      );
    }

    return this.documentUploadService.uploadForGuest(file);
  }

  // ── CRUD endpoints for authenticated users ───────────────────────────────

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createDto: CreateDocumentDto,
    @Request() req: AuthenticatedRequest,
  ) {
    return this.documentsService.createDocumentForUser(
      {
        ...createDto,
        expirationDate: createDto.expirationDate
          ? new Date(createDto.expirationDate)
          : undefined,
      },
      req.user.id,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(
    @Request() req: AuthenticatedRequest,
    @Query() query: PaginationQueryDto,
  ) {
    return this.documentsService.getDocuments(req.user.id, query);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async get(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Request() req: AuthenticatedRequest,
  ) {
    return this.documentsService.getDocumentByIdForUser(id, req.user.id);
  }

  @Public()
  @Get(':id/status')
  async getStatus(@Param('id', new ParseUUIDPipe()) id: string) {
    const status = await this.documentsService.getDocumentStatusOnly(id);
    return { status };
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateDto: UpdateDocumentDto,
    @Request() req: AuthenticatedRequest,
  ) {
    return this.documentsService.updateDocumentForUser(id, req.user.id, {
      ...updateDto,
      expirationDate: updateDto.expirationDate
        ? new Date(updateDto.expirationDate)
        : undefined,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Request() req: AuthenticatedRequest,
  ) {
    return this.documentsService.deleteDocumentForUser(id, req.user.id);
  }
}
