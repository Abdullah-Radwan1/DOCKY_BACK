import { DocumentStatus, RiskLevel } from 'src/generated/prisma';
import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentDto } from './create-document.dto';
import { IsOptional, IsInt, IsEnum } from 'class-validator';

export class UpdateDocumentDto extends PartialType(CreateDocumentDto) {
  @IsEnum(DocumentStatus)
  @IsOptional()
  status?: DocumentStatus;

  @IsInt()
  @IsOptional()
  complianceScore?: number;

  @IsEnum(RiskLevel)
  @IsOptional()
  riskLevel?: RiskLevel;

  @IsOptional()
  expirationDate?: Date;
}
