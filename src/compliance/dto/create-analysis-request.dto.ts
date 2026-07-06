import { IsString, IsNotEmpty, IsUUID, IsOptional } from 'class-validator';

export class CreateAnalysisRequestDto {
  @IsUUID()
  @IsNotEmpty()
  documentId: string;

  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsString()
  @IsOptional()
  guestId?: string;

  @IsString()
  @IsNotEmpty()
  queryText: string;
}
