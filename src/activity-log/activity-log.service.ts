import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ActivityLogEntity } from './entities/activity-log.entity';
import { CreateActivityLogDto } from './dto/create-activity-log.dto';

@Injectable()
export class ActivityLogService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Records a new activity log entry.
   */
  async createLog(data: CreateActivityLogDto) {
    return this.prisma.activityLog.create({
      data: {
        userId: data.userId || null,
        action: data.action,
        entityType: data.entityType || null,
        entityId: data.entityId || null,
        metadata: (data.metadata as any) || undefined,
      },
    });
  }

  /**
   * Fetches a single activity log entry by ID.
   */
  async getLogById(id: string) {
    const log = await this.prisma.activityLog.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
    if (!log) {
      throw new NotFoundException(`Activity log with ID ${id} not found`);
    }
    return log;
  }

  /**
   * Fetches all activity logs performed by a specific user.
   */
  async getLogsByUser(userId: string) {
    return this.prisma.activityLog.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Fetches all activity logs related to a specific entity (e.g. a document).
   */
  async getLogsByEntity(entityType: string, entityId: string) {
    return this.prisma.activityLog.findMany({
      where: { entityType, entityId },
      include: {
        user: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
