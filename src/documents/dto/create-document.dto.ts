import { DocumentStatus, RiskLevel } from 'src/generated/prisma';
import {
  IsString,
  IsOptional,
  IsInt,
  IsEnum,
  IsUUID,
  IsNotEmpty,
  IsDate,
} from 'class-validator';

export class CreateDocumentDto {
  @IsUUID()
  @IsNotEmpty()
  organizationId: string;

  @IsUUID()
  @IsNotEmpty()
  uploadedBy: string;

  @IsString()
  @IsNotEmpty()
  originalFileName: string;

  @IsString()
  @IsNotEmpty()
  filename: string;

  @IsString()
  @IsOptional()
  mimeType?: string;

  @IsString()
  @IsOptional()
  storageKey?: string;

  @IsString()
  @IsOptional()
  fileUrl?: string;

  @IsString()
  @IsOptional()
  checksum?: string;

  @IsInt()
  @IsOptional()
  fileSize?: number;

  @IsInt()
  @IsOptional()
  pageCount?: number;

  @IsString()
  @IsOptional()
  language?: string;

  @IsDate()
  @IsOptional()
  expirationDate?: Date;

  @IsEnum(DocumentStatus)
  @IsOptional()
  status?: DocumentStatus = DocumentStatus.pending;
}
