import { IsString, IsOptional, IsUUID, IsNotEmpty } from 'class-validator';

export class CreateComplianceQueryDto {
  @IsString()
  @IsNotEmpty()
  queryText: string;

  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsUUID()
  @IsOptional()
  documentId?: string;
}
