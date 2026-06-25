import { FindingSeverity } from 'src/generated/prisma';
import {
  IsString,
  IsOptional,
  IsUUID,
  IsInt,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';

export class CreateFindingDto {
  @IsUUID()
  @IsNotEmpty()
  analysisId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(FindingSeverity)
  @IsOptional()
  severity?: FindingSeverity;

  @IsString()
  @IsOptional()
  clauseReference?: string;

  @IsInt()
  @IsOptional()
  pageNumber?: number;

  @IsString()
  @IsOptional()
  excerpt?: string;

  @IsString()
  @IsOptional()
  recommendation?: string;

  @IsOptional()
  metadata?: any;
}
