import { IsUUID, IsNotEmpty } from 'class-validator';

/**
 * Multipart form fields that must accompany the PDF file on POST /documents/upload.
 * The file itself is extracted separately via @UploadedFile().
 */
export class UploadDocumentDto {
  @IsUUID()
  @IsNotEmpty()
  organizationId: string;

  @IsUUID()
  @IsNotEmpty()
  uploadedBy: string;
}
