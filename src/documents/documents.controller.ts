import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  async create(@Body() createDto: CreateDocumentDto) {
    return this.documentsService.createDocument({
      ...createDto,
      expirationDate: createDto.expirationDate
        ? new Date(createDto.expirationDate)
        : undefined,
    });
  }

  @Get(':id')
  async get(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.documentsService.getDocumentById(id);
  }

  @Get('organization/:organizationId')
  async getByOrg(
    @Param('organizationId', new ParseUUIDPipe()) organizationId: string,
  ) {
    return this.documentsService.getDocumentsByOrganization(organizationId);
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateDto: UpdateDocumentDto,
  ) {
    return this.documentsService.updateDocument(id, {
      ...updateDto,
      expirationDate: updateDto.expirationDate
        ? new Date(updateDto.expirationDate)
        : undefined,
    });
  }

  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.documentsService.deleteDocument(id);
  }
}
