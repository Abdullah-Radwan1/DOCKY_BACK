import { DocumentStatus } from '../../generated/prisma/client.js';
import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentDto } from './create-document.dto';
import { IsOptional, IsEnum } from 'class-validator';

export class UpdateDocumentDto extends PartialType(CreateDocumentDto) {
  @IsEnum(DocumentStatus)
  @IsOptional()
  status?: DocumentStatus;

  @IsOptional()
  expirationDate?: Date;
}
