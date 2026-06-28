import {
  Injectable,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { PdfData } from '../interfaces/pdf-data.interface';

// pdf-parse is a CommonJS module. TypeScript's namespace import (`import * as`)
// wraps it in a Module object with no call signatures, so we use require directly.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const pdfParse = require('pdf-parse') as (
  buffer: Buffer,
) => Promise<{ text: string; numpages: number }>;

@Injectable()
export class PdfExtractorService {
  private readonly logger = new Logger(PdfExtractorService.name);

  /**
   * Extracts all text and the page count from a PDF buffer.
   *
   * @param buffer    The raw PDF bytes from Multer's memory storage.
   * @param fileName  Original file name — used only for logging.
   * @returns PdfData containing the full text and page count.
   * @throws InternalServerErrorException if pdf-parse fails.
   */
  async extract(buffer: Buffer, fileName: string): Promise<PdfData> {
    this.logger.log(`Extracting text from "${fileName}"…`);

    try {
      const result = await pdfParse(buffer);

      const pageCount = result.numpages ?? 0;
      const text = result.text ?? '';

      this.logger.log(
        `Extraction complete for "${fileName}": ${pageCount} page(s), ${text.length} characters.`,
      );

      return { text, pageCount };
    } catch (err) {
      this.logger.error(`pdf-parse failed for "${fileName}"`, err);
      throw new InternalServerErrorException(
        'Failed to extract text from the PDF file.',
      );
    }
  }
}
