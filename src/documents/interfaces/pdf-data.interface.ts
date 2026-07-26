/**
 * The raw data extracted from a PDF file by pdf-parse.
 */
export interface PdfData {
  /** Full extracted text from all pages, with \f (form-feed) as page separators. */
  text: string;
  /** Total number of pages in the PDF. */
  pageCount: number;
}

/**
 * A single chunk produced by ChunkingService, ready to be persisted.
 */
export interface ChunkInput {
  chunkIndex: number;
  content: string;
  pageNumber: number;
  tokenCount: number;
}
