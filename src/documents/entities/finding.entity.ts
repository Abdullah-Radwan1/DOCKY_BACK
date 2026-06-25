import { FindingSeverity } from 'src/generated/prisma';

export class FindingEntity {
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
