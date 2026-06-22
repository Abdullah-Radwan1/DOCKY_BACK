import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  async createDocument(data: {
    organizationId: string;
    uploadedBy: string; // profile UUID
    filename: string;
    fileSize?: number;
    expirationDate?: Date;
  }) {
    return this.prisma.document.create({
      data: {
        organizationId: data.organizationId,
        uploadedBy: data.uploadedBy,
        filename: data.filename,
        fileSize: data.fileSize || null,
        expirationDate: data.expirationDate || null,
        status: 'pending',
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

  async updateDocument(
    id: string,
    data: {
      filename?: string;
      fileSize?: number;
      status?: string;
      complianceScore?: number;
      riskLevel?: string;
      expirationDate?: Date | null;
    },
  ) {
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
