import { PartialType } from '@nestjs/mapped-types';
import { CreateComplianceQueryDto } from './create-compliance-query.dto';
import { AnalysisRequestStatus } from 'src/generated/prisma';
import { IsOptional, IsString, IsEnum } from 'class-validator';

export class UpdateComplianceQueryDto extends PartialType(
  CreateComplianceQueryDto,
) {
  @IsEnum(AnalysisRequestStatus)
  @IsOptional()
  status?: AnalysisRequestStatus;

  @IsString()
  @IsOptional()
  errorMessage?: string;
}
