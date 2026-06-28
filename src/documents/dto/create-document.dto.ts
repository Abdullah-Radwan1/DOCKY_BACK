import {
  IsString,
  IsOptional,
  IsInt,
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
  @IsOptional()
  mimeType?: string;

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
}
