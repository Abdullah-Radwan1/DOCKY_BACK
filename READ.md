# DOC_BACK Backend Architecture Guide

This file explains how the backend is organized, how requests flow through the server, and what each major file and service is responsible for.

## 1. What the backend does

The backend is a NestJS application that powers the DOCKY product. It handles:

- authentication and protected access
- document upload and document metadata management
- PDF validation, text extraction, and chunking
- compliance analysis for documents
- dashboard summaries, notifications, and activity logs

## 2. High-level request flow

### Authentication flow

1. Requests enter through the NestJS entry point in [src/main.ts](src/main.ts).
2. [src/app.module.ts](src/app.module.ts) wires together the feature modules.
3. Auth requests are handled in [src/auth/auth.controller.ts](src/auth/auth.controller.ts) and [src/auth/auth.service.ts](src/auth/auth.service.ts).
4. JWT protection is enforced by [src/auth/guards/jwt-auth.guard.ts](src/auth/guards/jwt-auth.guard.ts) and [src/auth/strategies/jwt.strategy.ts](src/auth/strategies/jwt.strategy.ts).

### Document upload flow

1. A client sends a multipart upload request to the documents controller.
2. [src/documents/documents.controller.ts](src/documents/documents.controller.ts) receives the file and metadata.
3. [src/documents/services/document-upload.service.ts](src/documents/services/document-upload.service.ts) runs the pipeline.
4. The file is validated, deduplicated, stored as a document, processed, chunked, and marked ready.
5. The final document metadata is returned to the client.

### Compliance analysis flow

1. The client submits a compliance analysis request.
2. [src/compliance/compliance.controller.ts](src/compliance/compliance.controller.ts) receives it.
3. [src/compliance/compliance.service.ts](src/compliance/compliance.service.ts) creates an analysis request and delegates to the AI layer.
4. [src/ai/services/analysis-orchestrator.service.ts](src/ai/services/analysis-orchestrator.service.ts) runs the analysis pipeline.
5. The AI provider returns a structured result that is persisted through Prisma.
6. The frontend can later read the analysis trail from the compliance endpoints.

### Dashboard and notifications flow

1. [src/dashboard/dashboard.service.ts](src/dashboard/dashboard.service.ts) gathers aggregates from documents, analyses, findings, notifications, and activity logs.
2. Notifications are created and sent through [src/notifications/notifications.service.ts](src/notifications/notifications.service.ts) and the dispatchers under [src/notifications/dispatchers](src/notifications/dispatchers).

## 3. Core backend modules and responsibilities

### App and bootstrapping

- [src/app.module.ts](src/app.module.ts)
  - Wires the root modules together.
  - Registers Prisma, auth, documents, compliance, notifications, dashboard, scheduler, and AI modules.

### Auth module

- [src/auth/auth.module.ts](src/auth/auth.module.ts)
  - Registers JWT, Passport, auth service, and guards.

- [src/auth/auth.service.ts](src/auth/auth.service.ts)
  - Handles login, password verification, and auth-related business rules.

- [src/auth/guards/jwt-auth.guard.ts](src/auth/guards/jwt-auth.guard.ts)
  - Protects private endpoints.

- [src/auth/strategies/jwt.strategy.ts](src/auth/strategies/jwt.strategy.ts)
  - Validates JWTs and attaches the authenticated user to the request.

### Documents module

- [src/documents/documents.controller.ts](src/documents/documents.controller.ts)
  - Exposes REST endpoints for upload, retrieval, update, and deletion of documents.

- [src/documents/documents.service.ts](src/documents/documents.service.ts)
  - Implements CRUD logic for document records and related metadata.

- [src/documents/services/document-upload.service.ts](src/documents/services/document-upload.service.ts)
  - Orchestrates the full upload pipeline.
  - Validates the file, creates a document record, extracts text, chunks it, and marks the document ready.

- [src/documents/services/pdf-validator.service.ts](src/documents/services/pdf-validator.service.ts)
  - Validates that the uploaded file is a real PDF and within the allowed size range.

- [src/documents/services/pdf-extractor.service.ts](src/documents/services/pdf-extractor.service.ts)
  - Extracts text and page count from the PDF buffer.

- [src/documents/services/chunking.service.ts](src/documents/services/chunking.service.ts)
  - Splits the extracted text into chunks for later retrieval and analysis.

### Compliance module

- [src/compliance/compliance.controller.ts](src/compliance/compliance.controller.ts)
  - Exposes endpoints for starting and retrieving compliance analysis results.

- [src/compliance/compliance.service.ts](src/compliance/compliance.service.ts)
  - Creates analysis requests and retrieves their results.
  - Coordinates the compliance analysis workflow.

### AI module

- [src/ai/ai.module.ts](src/ai/ai.module.ts)
  - Registers the AI services and binds the provider implementation.

- [src/ai/services/openrouter.service.ts](src/ai/services/openrouter.service.ts)
  - Talks to the external AI provider.

- [src/ai/services/prompt-builder.service.ts](src/ai/services/prompt-builder.service.ts)
  - Builds the prompt that is sent to the AI model.

- [src/ai/services/chunk-retrieval.service.ts](src/ai/services/chunk-retrieval.service.ts)
  - Retrieves relevant document chunks for the analysis request.

- [src/ai/services/analysis-orchestrator.service.ts](src/ai/services/analysis-orchestrator.service.ts)
  - Coordinates the end-to-end AI workflow.
  - Pulls relevant chunks, builds a prompt, sends it to the model, parses the result, and persists it.

### Dashboard module

- [src/dashboard/dashboard.service.ts](src/dashboard/dashboard.service.ts)
  - Builds the dashboard summary for the current user.
  - Aggregates document status, analysis results, findings, notifications, and activity logs.

- [src/dashboard/document-status.service.ts](src/dashboard/document-status.service.ts)
  - Calculates document attention and risk status based on findings.

### Notifications module

- [src/notifications/notifications.service.ts](src/notifications/notifications.service.ts)
  - Creates and stores notification records.

- [src/notifications/dispatchers/email.dispatcher.ts](src/notifications/dispatchers/email.dispatcher.ts)
  - Sends email notifications.

- [src/notifications/dispatchers/sms.dispatcher.ts](src/notifications/dispatchers/sms.dispatcher.ts)
  - Sends SMS notifications.

- [src/notifications/dispatchers/push.dispatcher.ts](src/notifications/dispatchers/push.dispatcher.ts)
  - Sends push notifications.

### Prisma layer

- [src/prisma/prisma.module.ts](src/prisma/prisma.module.ts)
  - Registers Prisma for dependency injection.

- [src/prisma/prisma.service.ts](src/prisma/prisma.service.ts)
  - Provides the Prisma client used by services.

- [prisma/schema.prisma](prisma/schema.prisma)
  - Defines the database schema for documents, analyses, findings, notifications, profiles, and activity logs.

## 4. Shared utilities and DTOs

- [src/common/utils/pagination.utils.ts](src/common/utils/pagination.utils.ts)
  - Contains shared pagination logic for list endpoints.

- [src/common/dto](src/common/dto)
  - Holds DTOs reused by controllers and services.

- [src/generated/prisma](src/generated/prisma)
  - Contains generated Prisma typings used by the app.

## 5. Persistence model

The core persisted entities include:

- Document
  - stores upload metadata and processing state

- DocumentChunk
  - stores text chunks extracted from the PDF

- AnalysisRequest
  - represents a compliance analysis request

- AIResponse
  - stores the raw AI response

- AnalysisResult
  - stores normalized analysis results and severity information

- Finding
  - stores individual compliance findings

- Notification
  - stores notification records and their status

- Profile
  - stores account and user info used by auth and permissions

## 6. Typical backend request journeys

### Uploading a document

1. The client posts a PDF to the upload endpoint.
2. The controller passes the file to the upload service.
3. The service validates and processes the PDF.
4. The document becomes `ready` after extraction and chunking.

### Running compliance analysis

1. The client requests analysis for a document.
2. The compliance service creates an analysis request.
3. The AI orchestrator retrieves relevant chunks.
4. The AI provider returns a structured analysis.
5. Results are stored and made available to the frontend.

## 7. Useful commands

```bash
npm install
npm run start
npm run start:dev
npm run build
npm run test
```
