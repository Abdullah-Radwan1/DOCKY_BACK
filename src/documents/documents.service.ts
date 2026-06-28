import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DocumentStatus } from 'src/generated/prisma';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  async createDocument(data: CreateDocumentDto) {
    return this.prisma.document.create({
      data: {
        originalFileName: data.originalFileName,
        organizationId: data.organizationId,
        uploadedBy: data.uploadedBy,
        mimeType: data.mimeType ?? null,
        checksum: data.checksum ?? null,
        fileSize: data.fileSize ?? null,
        pageCount: data.pageCount ?? null,
        language: data.language ?? null,
        expirationDate: data.expirationDate ?? null,
        status: DocumentStatus.uploaded,
      },
    });
  }

  async getDocumentById(id: string) {
    const document = await this.prisma.document.findUnique({
      where: { id },
      include: {
        uploader: true,
        chunks: {
          orderBy: { chunkIndex: 'asc' },
          select: {
            id: true,
            chunkIndex: true,
            pageNumber: true,
            tokenCount: true,
            content: true,
          },
        },
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
    const {
      // Omit relation-key fields — these should never change after creation
      organizationId: _org,
      uploadedBy: _uploader,
      // Spread remaining updatable scalar fields
      ...scalars
    } = data;

    try {
      return await this.prisma.document.update({
        where: { id },
        data: scalars,
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
