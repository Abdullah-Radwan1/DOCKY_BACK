import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class SchedulerService {
  private readonly logger = new Logger(SchedulerService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationsService: NotificationsService,
  ) {}

  /**
   * Standard daily cron task running at midnight.
   */
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleDailyCron() {
    this.logger.log('Executing daily cron job to check for expiring documents...');
    await this.checkExpiringDocuments();
  }

  /**
   * Scans the database for documents expiring in 30, 14, 7, or 1 days
   * and creates expiration warning notifications.
   */
  async checkExpiringDocuments() {
    const thresholds = [30, 14, 7, 1]; // days remaining to look for
    const today = new Date();

    for (const days of thresholds) {
      // Calculate target date (today + threshold days)
      const targetDate = new Date();
      targetDate.setDate(today.getDate() + days);

      // Start and end bounds of that target calendar day
      const startOfDay = new Date(targetDate.setHours(0, 0, 0, 0));
      const endOfDay = new Date(targetDate.setHours(23, 59, 59, 999));

      this.logger.log(
        `Scanning documents expiring between ${startOfDay.toISOString()} and ${endOfDay.toISOString()} (in ${days} days)...`,
      );

      // Find documents expiring within the threshold date window
      const expiringDocuments = await this.prisma.document.findMany({
        where: {
          expirationDate: {
            gte: startOfDay,
            lte: endOfDay,
          },
        },
      });

      this.logger.log(`Found ${expiringDocuments.length} documents expiring in ${days} days.`);

      for (const doc of expiringDocuments) {
        // Check if an expiration warning notification has already been created for this document and threshold
        const existingNotification = await this.prisma.notification.findFirst({
          where: {
            userId: doc.uploadedBy ?? '',
            documentId: doc.id,
            type: 'expiration_warning',
            message: {
              contains: `expiring in ${days} days`,
            },
          },
        });

        if (!existingNotification) {
          this.logger.log(
            `Triggering warning notifications for document "${doc.originalFileName}" (ID: ${doc.id}) expiring in ${days} days.`,
          );

          // 1. Create In-App Notification
          await this.notificationsService.createNotification({
            userId: doc.uploadedBy ?? '',
            title: 'Document Expiration Warning',
            message: `Your document "${doc.originalFileName}" is expiring in ${days} days on ${doc.expirationDate?.toLocaleDateString()}.`,
            type: 'expiration_warning',
            deliveryChannel: 'in_app',
            documentId: doc.id,
          });

          // 2. Dispatch Email Notification
          await this.notificationsService.createNotification({
            userId: doc.uploadedBy ?? '',
            title: 'Document Expiration Warning',
            message: `Your document "${doc.originalFileName}" is expiring in ${days} days on ${doc.expirationDate?.toLocaleDateString()}.`,
            type: 'expiration_warning',
            deliveryChannel: 'email',
            documentId: doc.id,
          });
        } else {
          this.logger.log(
            `Skipped. Expiration warning already exists for document "${doc.originalFileName}" at the ${days} days threshold.`,
          );
        }
      }
    }
  }
}
