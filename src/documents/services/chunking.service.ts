import { Injectable, Logger } from '@nestjs/common';
import { ChunkInput } from '../interfaces/pdf-data.interface';

/**
 * Target token count per chunk (approximate).
 * Using 1 token ≈ 4 characters as a rough heuristic.
 */
const TARGET_TOKENS = 750;
const CHARS_PER_TOKEN = 4;
const TARGET_CHARS = TARGET_TOKENS * CHARS_PER_TOKEN; // 3000 chars ≈ 750 tokens

const MIN_TOKENS = 500;
const MAX_TOKENS = 1000;
const MIN_CHARS = MIN_TOKENS * CHARS_PER_TOKEN; // 2000
const MAX_CHARS = MAX_TOKENS * CHARS_PER_TOKEN; // 4000

/**
 * pdf-parse emits a form-feed character (\f) between pages.
 * We use this to track page numbers in the extracted text.
 */
const PAGE_SEPARATOR = '\f';

@Injectable()
export class ChunkingService {
  private readonly logger = new Logger(ChunkingService.name);

  /**
   * Splits a full PDF text into overlapping-free chunks of 500–1000 tokens,
   * preserving the source page number for each chunk.
   *
   * Strategy:
   *  1. Split the text on page-feed characters to get per-page segments.
   *  2. Accumulate page segments into a rolling buffer.
   *  3. Once the buffer exceeds TARGET_CHARS, flush it as a chunk,
   *     breaking at the last sentence boundary if possible.
   *  4. Remaining buffer is flushed as a final chunk (if ≥ MIN_CHARS or
   *     there is no other chunk yet).
   *
   * @param text      Full extracted text (pages separated by \f).
   * @param fileName  Used only for log context.
   * @returns Ordered array of ChunkInput ready to be bulk-inserted.
   */
  chunk(text: string, fileName: string): ChunkInput[] {
    this.logger.log(`Chunking text for "${fileName}" (${text.length} chars)…`);

    // Split into per-page arrays; trim each page's whitespace.
    const pages = text
      .split(PAGE_SEPARATOR)
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    const chunks: ChunkInput[] = [];

    let buffer = '';
    let bufferStartPage = 1; // 1-indexed page where this buffer started
    let chunkIndex = 0;

    const flushBuffer = (forcedPageNumber: number) => {
      if (buffer.trim().length === 0) return;

      const content = buffer.trim();
      const tokenCount = Math.ceil(content.length / CHARS_PER_TOKEN);

      chunks.push({
        chunkIndex,
        content,
        pageNumber: forcedPageNumber,
        tokenCount,
      });

      chunkIndex++;
      buffer = '';
    };

    for (let pageIdx = 0; pageIdx < pages.length; pageIdx++) {
      const pageNumber = pageIdx + 1;
      const pageText = pages[pageIdx];

      // Add a space separator between pages when merging into the buffer
      if (buffer.length > 0) {
        buffer += ' ';
      } else {
        bufferStartPage = pageNumber;
      }

      buffer += pageText;

      // While the buffer exceeds the max target, slice off chunks
      while (buffer.length >= MAX_CHARS) {
        // Try to break at the last sentence boundary within the target window
        const sliceEnd = this.findBreakPoint(buffer, TARGET_CHARS, MAX_CHARS);
        const slice = buffer.slice(0, sliceEnd).trim();
        const tokenCount = Math.ceil(slice.length / CHARS_PER_TOKEN);

        chunks.push({
          chunkIndex,
          content: slice,
          pageNumber: bufferStartPage,
          tokenCount,
        });

        chunkIndex++;
        buffer = buffer.slice(sliceEnd).trimStart();
        // The remainder belongs to the current (or a later) page —
        // keep bufferStartPage pointing to where we are now.
        bufferStartPage = pageNumber;
      }
    }

    // Flush any remaining text
    if (buffer.trim().length > 0) {
      // If the remainder is smaller than MIN_CHARS and we already have chunks,
      // merge it into the last chunk to avoid tiny trailing chunks.
      if (chunks.length > 0 && buffer.trim().length < MIN_CHARS) {
        const last = chunks[chunks.length - 1];
        last.content = `${last.content} ${buffer.trim()}`;
        last.tokenCount = Math.ceil(last.content.length / CHARS_PER_TOKEN);
      } else {
        flushBuffer(bufferStartPage);
      }
    }

    this.logger.log(
      `Chunking complete for "${fileName}": ${chunks.length} chunk(s) produced.`,
    );

    return chunks;
  }

  /**
   * Finds the best break point in `text` within [targetLen, maxLen].
   * Prefers breaking at a sentence-ending punctuation + space,
   * then at any whitespace, then falls back to maxLen.
   */
  private findBreakPoint(
    text: string,
    targetLen: number,
    maxLen: number,
  ): number {
    const window = text.slice(0, maxLen);

    // Search backwards from targetLen for a sentence boundary
    const sentenceEnd = window.lastIndexOf('. ', targetLen);
    if (sentenceEnd !== -1 && sentenceEnd >= MIN_CHARS) {
      return sentenceEnd + 2; // include the period and trailing space
    }

    // Fallback: last whitespace before maxLen
    const lastSpace = window.lastIndexOf(' ');
    if (lastSpace !== -1 && lastSpace >= MIN_CHARS) {
      return lastSpace + 1;
    }

    // Hard cut
    return maxLen;
  }
}
