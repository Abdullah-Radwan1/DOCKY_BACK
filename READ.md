# DOC_BACK Project Overview

This file explains the main file responsibilities and the document upload process in the `DOC_BACK` project.

## Purpose

The primary document flow in this repository is a PDF ingestion pipeline exposed by `src/documents`. It validates uploaded PDFs, deduplicates by checksum, extracts text, chunks that text, and stores the resulting document and chunk metadata in the database.

## Main document module files

### `src/documents/documents.controller.ts`

- Exposes REST endpoints for the `documents` feature.
- Handles `POST /documents/upload` for uploading a PDF file.
- Uses `FileInterceptor` with `memoryStorage()` and a PDF MIME gate.
- Accepts file metadata via `UploadDocumentDto` and passes it to `DocumentUploadService`.
- Also exposes CRUD endpoints for documents:
  - `POST /documents` to create a document record manually,
  - `GET /documents/:id` to get a document by ID,
  - `GET /documents/organization/:organizationId` to get documents for an organization,
  - `PATCH /documents/:id` to update document metadata,
  - `DELETE /documents/:id` to remove a document.

### `src/documents/documents.service.ts`

- Contains general CRUD operations for document records.
- Uses `PrismaService` to read and write the `Document` model.
- Retrieves documents with related chunks and uploader data.
- Updates only allowed scalar properties and throws `NotFoundException` when appropriate.

### `src/documents/documents.module.ts`

- Registers the Nest module for `documents`.
- Imports `MulterModule` with `memoryStorage()`.
- Provides and exports:
  - `DocumentsService`
  - `DocumentUploadService`
  - `PdfValidatorService`
  - `PdfExtractorService`
  - `ChunkingService`

### `src/documents/services/document-upload.service.ts`

- Implements the full upload pipeline.
- Steps:
  1. Validate the file with `PdfValidatorService`.
  2. Compute a SHA-256 checksum and detect duplicates.
  3. Create a new `Document` record with `status = uploaded`.
  4. Update document status to `extracting` and extract PDF text.
  5. Update status to `chunking` and split text into chunks.
  6. Insert chunks inside a Prisma transaction and update document status to `ready`.
- If an error occurs after record creation, it updates the document status to `failed`.

### `src/documents/services/pdf-validator.service.ts`

- Validates that the uploaded file is a real PDF.
- Checks:
  - file exists,
  - MIME type is `application/pdf`,
  - size does not exceed 20 MB,
  - file signature matches PDF magic bytes or is detected as PDF by `file-type`.
- Throws Nest exceptions mapped to HTTP 415 or 413 when validation fails.

### `src/documents/services/pdf-extractor.service.ts`

- Extracts text and page count from a PDF buffer.
- Uses `pdf-parse` to parse the in-memory PDF data.
- Returns a `PdfData` object containing the extracted text and page count.

### `src/documents/services/chunking.service.ts`

- Splits extracted PDF text into chunks.
- Preserves page numbering by using `` page separators emitted by `pdf-parse`.
- Produces chunk contents with approximate token counts.
- Ensures each chunk is in a reasonable size range and merges small trailing fragments when needed.

### `src/documents/interfaces/pdf-data.interface.ts`

- Defines the extracted PDF data shape:
  - `text: string`
  - `pageCount: number`

## DTOs and payloads

### `src/documents/dto/upload-document.dto.ts`

- Defines optional metadata fields that accompany the file upload:
  - `organizationId`
  - `uploadedBy`

### `src/documents/dto/upload-document-response.dto.ts`

- Defines the response returned after a successful upload.
- Includes document ID, filename, MIME type, checksum, file size, page count, chunk count, status, and timestamps.

### Other DTOs

- `create-document.dto.ts` / `update-document.dto.ts`: payloads for manual document create/update endpoints.
- `document-response.dto.ts`: output shape for document retrieval.
- `document-analysis-response.dto.ts`, `finding-response.dto.ts`, and related DTOs support analysis and finding data tied to documents.

## Prisma schema and database models

### `prisma/schema.prisma`

- Defines the database models used by the document flow.
- Important models for this module:
  - `Document`
  - `DocumentChunk`
  - `DocumentStatus`
- `DocumentStatus` states:
  - `uploaded`
  - `extracting`
  - `chunking`
  - `ready`
  - `failed`
- Documents are related to organizations, uploader profiles, chunks, and analysis requests.
- `DocumentChunk` stores text fragments and page references for each document.

## Upload process flow

1. Client sends `POST /documents/upload` with multipart/form-data:
   - `file` field containing the PDF,
   - optional `organizationId`,
   - optional `uploadedBy`.
2. `DocumentsController` receives the file and metadata.
3. `DocumentUploadService.upload()` begins the pipeline.
4. `PdfValidatorService.validate()` verifies file metadata, size, and PDF signature.
5. `document-upload.service` computes SHA-256 checksum and checks for duplicates in the same organization.
6. A `Document` record is created with `status = uploaded`.
7. Status is updated to `extracting` and `PdfExtractorService.extract()` reads text and page count.
8. Status is updated to `chunking` and `ChunkingService.chunk()` breaks text into chunks.
9. All chunks are inserted in a transaction, and the document status becomes `ready`.
10. The service returns `UploadDocumentResponseDto` including the final metadata.

## Notes

- The upload route uses memory-based file handling, so large files are limited to 20 MB by design.
- Duplicate detection is based on checksum and organization scope.
- Chunking preserves page context to make later retrieval or analysis easier.
- Document records can also be managed separately through CRUD endpoints.

## Useful files outside `src/documents`

- `src/prisma/prisma.service.ts`: provides the Prisma client used by services.
- `src/app.module.ts`: imports the root application modules and ensures the `DocumentsModule` is registered.
- `package.json`: contains dependencies and available npm scripts.
- `tsconfig.json` / `tsconfig.build.json`: TypeScript compilation settings.
- `generated/prisma/`: generated Prisma client and model types used across the app.

---

This document is intended to help developers understand the document upload path, the responsibilities of each module file, and how uploaded PDFs are transformed into stored chunks and metadata.
