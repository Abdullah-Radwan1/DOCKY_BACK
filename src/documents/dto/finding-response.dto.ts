import { FindingSeverity } from '../../generated/prisma/client.js';

export class FindingResponseDto {
  id: string;
  analysisId: string;
  title: string;
  description?: string;
  severity: FindingSeverity;
  clauseReference?: string;
  pageNumber?: number;
  excerpt?: string;
  recommendation?: string;
  metadata?: any;
  createdAt: Date;
}
