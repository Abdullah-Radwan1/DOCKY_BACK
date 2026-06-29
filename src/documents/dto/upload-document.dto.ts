import { IsUUID, IsNotEmpty, IsOptional } from 'class-validator';

/**
 * Multipart form fields that must accompany the PDF file on POST /documents/upload.
 * The file itself is extracted separately via @UploadedFile().
 */
export class UploadDocumentDto {
  @IsUUID()
  @IsOptional()
  organizationId?: string;

  @IsUUID()
  @IsOptional()
  uploadedBy?: string;
}
