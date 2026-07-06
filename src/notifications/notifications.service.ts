import { Injectable, Logger, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EmailDispatcher } from './dispatchers/email.dispatcher';
import { SmsDispatcher } from './dispatchers/sms.dispatcher';
import { PushDispatcher } from './dispatchers/push.dispatcher';
import { NotificationDispatcher } from './interfaces/notification-dispatcher.interface';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { NotificationStatus } from '../generated/prisma';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);
  private readonly dispatchers = new Map<string, NotificationDispatcher>();

  constructor(
    private readonly prisma: PrismaService,
    private readonly emailDispatcher: EmailDispatcher,
    private readonly smsDispatcher: SmsDispatcher,
    private readonly pushDispatcher: PushDispatcher,
  ) {
    this.registerDispatcher(this.emailDispatcher);
    this.registerDispatcher(this.smsDispatcher);
    this.registerDispatcher(this.pushDispatcher);
  }

  /**
   * Registers a dispatcher for a specific notification channel.
   */
  private registerDispatcher(dispatcher: NotificationDispatcher) {
    this.dispatchers.set(dispatcher.channel, dispatcher);
  }

  /**
   * Creates a notification record and dispatches it via the selected delivery channel.
   */
  async createNotification(data: CreateNotificationDto) {
    const channel = data.deliveryChannel || 'in_app';

    const notification = await this.prisma.notification.create({
      data: {
        userId: data.userId ?? '',
        title: data.title ?? '',
        message: data.message ?? '',
        type: data.type!,
        deliveryChannel: channel,
        documentId: data.documentId || null,
        status: 'unread',
      },
    });

    if (channel !== 'in_app') {
      const dispatcher = this.dispatchers.get(channel);
      if (dispatcher) {
        try {
          const success = await dispatcher.send(
            data.userId ?? '',
            data.title ?? '',
            data.message ?? '',
            data.documentId,
          );
          if (success) {
            return await this.prisma.notification.update({
              where: { id: notification.id },
              data: { sentAt: new Date() },
            });
          }
        } catch (error) {
          this.logger.error(
            `Failed to dispatch notification via ${channel} to User [${data.userId}]:`,
            error,
          );
        }
      } else {
        this.logger.warn(`No dispatcher registered for channel: ${channel}`);
      }
    }

    return notification;
  }

  /**
   * Fetches all notifications for the authenticated user (paginated).
   * Supports filtering by status via PaginationQueryDto.status field.
   */
  async getUserNotificationsPaginated(userId: string, query: PaginationQueryDto) {
    const page = Math.max(1, query.page ?? 1);
    const limit = Math.min(100, Math.max(1, query.limit ?? 10));
    const skip = (page - 1) * limit;

    const where: any = { userId };

    // Filter by status if provided and not 'all'
    if (query.status && query.status !== 'all') {
      where.status = query.status as NotificationStatus;
    }

    const [data, totalItems] = await Promise.all([
      this.prisma.notification.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
        include: {
          document: {
            select: { originalFileName: true },
          },
        },
      }),
      this.prisma.notification.count({ where }),
    ]);

    return {
      data,
      meta: {
        totalItems,
        itemCount: data.length,
        itemsPerPage: limit,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page,
      },
    };
  }

  /**
   * Returns the count of unread notifications for a user.
   */
  async getUnreadCount(userId: string): Promise<{ count: number }> {
    const count = await this.prisma.notification.count({
      where: { userId, status: 'unread' },
    });
    return { count };
  }

  /**
   * Marks a single notification as read, ensuring it belongs to the requesting user.
   */
  async markAsRead(id: string, userId: string) {
    const notification = await this.prisma.notification.findUnique({
      where: { id },
    });

    if (!notification) {
      throw new NotFoundException(`Notification with ID ${id} not found`);
    }

    if (notification.userId !== userId) {
      throw new ForbiddenException('You do not have access to this notification');
    }

    return this.prisma.notification.update({
      where: { id },
      data: { status: 'read' },
    });
  }

  /**
   * Marks all notifications for a user as read.
   */
  async markAllAsRead(userId: string) {
    await this.prisma.notification.updateMany({
      where: { userId, status: 'unread' },
      data: { status: 'read' },
    });
    return { message: 'All notifications marked as read.' };
  }
}
