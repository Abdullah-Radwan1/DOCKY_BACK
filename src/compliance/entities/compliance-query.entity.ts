import { AnalysisRequestStatus } from '../../generated/prisma/client.js';

export class ComplianceQueryEntity {
  id: string;
  queryText: string;
  status: AnalysisRequestStatus;
  documentId?: string;
  userId: string;
  attemptCount: number;
  errorMessage?: string;
  processingStartedAt?: Date;
  processingFinishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
