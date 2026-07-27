import { DocumentStatus } from '../../generated/prisma/client.js';

/**
 * Shape of the JSON response returned after a successful PDF upload.
 */
export class UploadDocumentResponseDto {
  /** UUID of the newly created Document record. */
  id: string;

  /** Original filename as provided by the client. */
  originalFileName: string;

  /** Detected MIME type (always `application/pdf` for valid uploads). */
  mimeType?: string;

  /**
   * SHA-256 hex digest of the uploaded file.
   * Can be used by clients to detect duplicates before uploading.
   */
  checksum?: string;

  /** File size in bytes. */
  fileSize?: number;

  /** Number of pages detected by pdf-parse. */
  pageCount?: number;

  /** Number of text chunks stored in DocumentChunk. */
  totalChunks?: number;

  /** Processing status — will be `ready` on a successful upload response. */
  status: DocumentStatus;

  createdAt: Date;
  updatedAt: Date;
}
