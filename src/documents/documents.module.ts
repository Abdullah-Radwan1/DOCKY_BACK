import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { DocumentUploadService } from './services/document-upload.service';
import { PdfValidatorService } from './services/pdf-validator.service';
import { PdfExtractorService } from './services/pdf-extractor.service';
import { ChunkingService } from './services/chunking.service';
import { PolicyModule } from '../policy/policy.module';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [
    // MulterModule registered for this module with memory storage as a default.
    // The FileInterceptor in the controller overrides storage inline per route.
    MulterModule.register({ storage: memoryStorage() }),
    PolicyModule,
    NotificationsModule,
  ],
  controllers: [DocumentsController],
  providers: [
    DocumentsService,
    DocumentUploadService,
    PdfValidatorService,
    PdfExtractorService,
    ChunkingService,
  ],
  exports: [DocumentsService, DocumentUploadService],
})
export class DocumentsModule {}
