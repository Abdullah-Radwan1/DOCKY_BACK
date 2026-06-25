import { PartialType } from '@nestjs/mapped-types';
import { CreateComplianceQueryDto } from './create-compliance-query.dto';
import { ComplianceQueryStatus } from 'src/generated/prisma';
import { IsOptional, IsString, IsEnum } from 'class-validator';

export class UpdateComplianceQueryDto extends PartialType(
  CreateComplianceQueryDto,
) {
  @IsEnum(ComplianceQueryStatus)
  @IsOptional()
  status?: ComplianceQueryStatus;

  @IsString()
  @IsOptional()
  errorMessage?: string;
}
