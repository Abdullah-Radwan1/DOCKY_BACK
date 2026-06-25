import { ComplianceQueryStatus } from 'src/generated/prisma';

export class ComplianceQueryResponseDto {
  id: string;
  queryText: string;
  status: ComplianceQueryStatus;
  documentId?: string;
  userId: string;
  attemptCount: number;
  errorMessage?: string;
  processingStartedAt?: Date;
  processingFinishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
