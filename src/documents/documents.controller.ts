import { Controller, Get, Post, Patch, Delete, Param, Body, ParseUUIDPipe } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { IsUUID, IsString, IsOptional, IsInt, IsDateString, IsNotEmpty } from 'class-validator';

class CreateDocumentDto {
  @IsUUID()
  @IsNotEmpty()
  organizationId!: string;

  @IsUUID()
  @IsNotEmpty()
  uploadedBy!: string;

  @IsString()
  @IsNotEmpty()
  filename!: string;

  @IsInt()
  @IsOptional()
  fileSize?: number;

  @IsDateString()
  @IsOptional()
  expirationDate?: string;
}

class UpdateDocumentDto {
  @IsString()
  @IsOptional()
  filename?: string;

  @IsInt()
  @IsOptional()
  fileSize?: number;

  @IsString()
  @IsOptional()
  status?: string;

  @IsInt()
  @IsOptional()
  complianceScore?: number;

  @IsString()
  @IsOptional()
  riskLevel?: string;

  @IsDateString()
  @IsOptional()
  expirationDate?: string;
}

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  async create(@Body() createDto: CreateDocumentDto) {
    return this.documentsService.createDocument({
      ...createDto,
      expirationDate: createDto.expirationDate ? new Date(createDto.expirationDate) : undefined,
    });
  }

  @Get(':id')
  async get(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.documentsService.getDocumentById(id);
  }

  @Get('organization/:organizationId')
  async getByOrg(@Param('organizationId', new ParseUUIDPipe()) organizationId: string) {
    return this.documentsService.getDocumentsByOrganization(organizationId);
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateDto: UpdateDocumentDto,
  ) {
    return this.documentsService.updateDocument(id, {
      ...updateDto,
      expirationDate: updateDto.expirationDate ? new Date(updateDto.expirationDate) : undefined,
    });
  }

  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.documentsService.deleteDocument(id);
  }
}
