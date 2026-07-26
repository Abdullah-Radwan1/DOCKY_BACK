import { Injectable, Logger, UnsupportedMediaTypeException } from '@nestjs/common';

/** Maximum allowed file size in bytes (20 MB). */
const MAX_FILE_SIZE_BYTES = 20 * 1024 * 1024;

/** PDF magic-bytes signature: %PDF */
const PDF_MAGIC = Buffer.from([0x25, 0x50, 0x44, 0x46]);

@Injectable()
export class PdfValidatorService {
  private readonly logger = new Logger(PdfValidatorService.name);

  /**
   * Validates an uploaded file is a genuine PDF within the allowed size limit.
   *
   * Checks (in order):
   *  1. File was provided by Multer.
   *  2. Declared MIME type is `application/pdf`.
   *  3. File size does not exceed 20 MB.
   *  4. File signature (magic bytes) matches `%PDF` using `file-type`.
   *
   * @throws UnsupportedMediaTypeException  for non-PDF MIME or wrong signature
   * @throws PayloadTooLargeException       for files exceeding 20 MB
   */
  async validate(file: Express.Multer.File): Promise<void> {
    // Guard: Multer should always provide the file, but be explicit
    if (!file) {
      throw new UnsupportedMediaTypeException('No file was uploaded.');
    }

    // 1. MIME type check (first gate — cheap, from HTTP header)
    if (file.mimetype !== 'application/pdf') {
      this.logger.warn(
        `Rejected upload: invalid MIME type "${file.mimetype}" from file "${file.originalname}"`,
      );
      throw new UnsupportedMediaTypeException(
        `Only PDF files are accepted. Received MIME type: ${file.mimetype}`,
      );
    }

    // 2. Size check
    if (file.size > MAX_FILE_SIZE_BYTES) {
      this.logger.warn(
        `Rejected upload: file size ${file.size} bytes exceeds the 20 MB limit (file: "${file.originalname}")`,
      );
      // NestJS maps PayloadTooLargeException → 413
      const { PayloadTooLargeException } = await import('@nestjs/common');
      throw new PayloadTooLargeException(
        `File size ${(file.size / (1024 * 1024)).toFixed(2)} MB exceeds the maximum allowed size of 20 MB.`,
      );
    }

    // 3. Magic-bytes / file signature check via file-type (ESM package — dynamic import required)
    const detectedType = await this.detectFileType(file.buffer);

    const isPdf =
      detectedType?.mime === 'application/pdf' ||
      this.hasPdfMagicBytes(file.buffer);

    if (!isPdf) {
      this.logger.warn(
        `Rejected upload: file signature does not match PDF (detected: "${detectedType?.mime ?? 'unknown'}") for file "${file.originalname}"`,
      );
      throw new UnsupportedMediaTypeException(
        'The uploaded file does not appear to be a valid PDF (file signature mismatch).',
      );
    }

    this.logger.log(
      `File "${file.originalname}" passed PDF validation (${(file.size / 1024).toFixed(1)} KB).`,
    );
  }

  /**
   * Uses the `file-type` ESM package to detect the actual file type from the buffer.
   * Dynamic import is required because file-type v16+ is ESM-only.
   */
  private async detectFileType(
    buffer: Buffer,
  ): Promise<{ mime: string; ext: string } | undefined> {
    try {
      const { fileTypeFromBuffer } = await import('file-type');
      return await fileTypeFromBuffer(buffer);
    } catch (err) {
      this.logger.error('file-type detection failed, falling back to magic bytes', err);
      return undefined;
    }
  }

  /**
   * Fallback: manually checks the first 4 bytes for the PDF magic signature `%PDF`.
   */
  private hasPdfMagicBytes(buffer: Buffer): boolean {
    if (buffer.length < 4) return false;
    return buffer.subarray(0, 4).equals(PDF_MAGIC);
  }
}
