import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DocumentStatus } from 'src/generated/prisma';
import { DocumentEntity } from './entities/document.entity';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { DocumentResponseDto } from './dto/document-response.dto';

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  async createDocument(data: CreateDocumentDto) {
    return this.prisma.document.create({
      data: {
        originalFileName: data.originalFileName,
        organizationId: data.organizationId,
        uploadedBy: data.uploadedBy,
        filename: data.filename,
        fileSize: data.fileSize || null,
        expirationDate: data.expirationDate || null,
        status: DocumentStatus.pending,
      },
    });
  }

  async getDocumentById(id: string) {
    const document = await this.prisma.document.findUnique({
      where: { id },
      include: {
        uploader: true,
        analyses: true,
      },
    });
    if (!document) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }
    return document;
  }

  async getDocumentsByOrganization(organizationId: string) {
    return this.prisma.document.findMany({
      where: { organizationId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateDocument(id: string, data: UpdateDocumentDto) {
    try {
      return await this.prisma.document.update({
        where: { id },
        data,
      });
    } catch {
      throw new NotFoundException(`Document with ID ${id} not found to update`);
    }
  }

  async deleteDocument(id: string) {
    try {
      return await this.prisma.document.delete({
        where: { id },
      });
    } catch {
      throw new NotFoundException(`Document with ID ${id} not found to delete`);
    }
  }
}
