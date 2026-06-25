import { DocumentStatus, RiskLevel } from 'src/generated/prisma';
import { Exclude } from 'class-transformer';

export class DocumentResponseDto {
  id: string;
  organizationId: string;
  uploadedBy: string;
  originalFileName: string;
  filename: string;
  mimeType?: string;
  fileUrl?: string;
  fileSize?: number;
  pageCount?: number;
  language?: string;
  status: DocumentStatus;
  complianceScore?: number;
  riskLevel?: RiskLevel;
  expirationDate?: Date;
  createdAt: Date;
  updatedAt: Date;

  @Exclude()
  storageKey?: string;

  @Exclude()
  checksum?: string;
}
