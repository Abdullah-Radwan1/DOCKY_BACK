import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EmailDispatcher } from './dispatchers/email.dispatcher';
import { SmsDispatcher } from './dispatchers/sms.dispatcher';
import { PushDispatcher } from './dispatchers/push.dispatcher';
import { NotificationDispatcher } from './interfaces/notification-dispatcher.interface';

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
    // Register dispatchers
    this.registerDispatcher(this.emailDispatcher);
    this.registerDispatcher(this.smsDispatcher);
    this.registerDispatcher(this.pushDispatcher);
  }

  /**
   * Registers a dispatcher for a specific notification channel.
   * Enables the notification system to be easily extendable by adding more dispatchers.
   */
  private registerDispatcher(dispatcher: NotificationDispatcher) {
    this.dispatchers.set(dispatcher.channel, dispatcher);
  }

  /**
   * Creates a notification record and dispatches it via the selected delivery channel.
   */
  async createNotification(data: {
    userId: string;
    title: string;
    message: string;
    type: string; // e.g. "expiration_warning", "compliance_alert", "system_alert"
    deliveryChannel?: string; // defaults to "in_app"
    documentId?: string;
  }) {
    const channel = data.deliveryChannel || 'in_app';

    // 1. Create the database record
    const notification = await this.prisma.notification.create({
      data: {
        userId: data.userId,
        title: data.title,
        message: data.message,
        type: data.type,
        deliveryChannel: channel,
        documentId: data.documentId || null,
        status: 'unread',
      },
    });

    // 2. Dispatch the notification if not purely in-app
    if (channel !== 'in_app') {
      const dispatcher = this.dispatchers.get(channel);
      if (dispatcher) {
        try {
          const success = await dispatcher.send(
            data.userId,
            data.title,
            data.message,
            data.documentId,
          );
          if (success) {
            // Update record to indicate it was sent successfully
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
   * Fetches all notifications for a specific user.
   */
  async getUserNotifications(userId: string) {
    return this.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Marks a single notification as read.
   */
  async markAsRead(id: string) {
    try {
      return await this.prisma.notification.update({
        where: { id },
        data: { status: 'read' },
      });
    } catch {
      throw new NotFoundException(`Notification with ID ${id} not found`);
    }
  }

  /**
   * Marks all notifications for a user as read.
   */
  async markAllAsRead(userId: string) {
    return this.prisma.notification.updateMany({
      where: { userId, status: 'unread' },
      data: { status: 'read' },
    });
  }
}
