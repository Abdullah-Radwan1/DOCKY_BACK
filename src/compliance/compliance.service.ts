import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ComplianceQueryEntity } from './entities/compliance-query.entity';
import { AIResponseEntity } from './entities/ai-response.entity';
import { CreateComplianceQueryDto } from './dto/create-compliance-query.dto';
import { CreateAIResponseDto } from './dto/create-ai-response.dto';

@Injectable()
export class ComplianceService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Registers a new compliance query submitted by a user.
   */
  async createQuery(data: CreateComplianceQueryDto) {
    return this.prisma.complianceQuery.create({
      data: {
        queryText: data.queryText,
        userId: data.userId,
        documentId: data.documentId || null,
        status: 'pending',
      },
    });
  }

  /**
   * Fetches a single query along with its AI responses.
   */
  async getQueryById(id: string) {
    const query = await this.prisma.complianceQuery.findUnique({
      where: { id },
      include: {
        responses: true,
        document: true,
        user: true,
      },
    });
    if (!query) {
      throw new NotFoundException(`Compliance query with ID ${id} not found`);
    }
    return query;
  }

  /**
   * Fetches all compliance queries for a document.
   */
  async getQueriesByDocument(documentId: string) {
    return this.prisma.complianceQuery.findMany({
      where: { documentId },
      include: {
        responses: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Submits an AI response to a compliance query, updating the query's status.
   */
  async addAIResponse(data: CreateAIResponseDto) {
    // Check if query exists
    const query = await this.prisma.complianceQuery.findUnique({
      where: { id: data.queryId },
    });
    if (!query) {
      throw new NotFoundException(
        `Compliance query with ID ${data.queryId} not found`,
      );
    }

    // Start transaction to record response and update status
    const [response] = await this.prisma.$transaction([
      this.prisma.aIResponse.create({
        data: {
          queryId: data.queryId,
          responseText: data.responseText,
          confidenceScore: data.confidenceScore || null,
          metadata: data.metadata || null,
        },
      }),
      this.prisma.complianceQuery.update({
        where: { id: data.queryId },
        data: { status: 'completed' },
      }),
    ]);

    return response;
  }
}
