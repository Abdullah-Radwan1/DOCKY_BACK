import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateComplianceQueryDto } from './dto/create-compliance-query.dto';
import { CreateAIResponseDto } from './dto/create-ai-response.dto';

@Injectable()
export class ComplianceService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Registers a new compliance query submitted by a user.
   */
  async createQuery(data: CreateComplianceQueryDto) {
    return this.prisma.analysisRequest.create({
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
    const query = await this.prisma.analysisRequest.findUnique({
      where: { id },
      include: {
        response: true,
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
    return this.prisma.analysisRequest.findMany({
      where: { documentId },
      include: {
        response: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Submits an AI response to a compliance query, updating the query's status.
   */
  async addAIResponse(data: CreateAIResponseDto) {
    // Check if query exists
    const query = await this.prisma.analysisRequest.findUnique({
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
          requestId: data.queryId,
          response: data.responseText,
          confidenceScore: data.confidenceScore || null,
          metadata: data.metadata || null,
        },
      }),
      this.prisma.analysisRequest.update({
        where: { id: data.queryId },
        data: { status: 'completed' },
      }),
    ]);

    return response;
  }
}
