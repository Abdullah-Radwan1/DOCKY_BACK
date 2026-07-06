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
   * Scans the database for documents expiring in 30, 14, 7, or 1 days,
   * and also for documents that have already expired.
   * Creates expiration_warning notifications and avoids duplicates.
   */
  async checkExpiringDocuments() {
    const thresholds = [30, 14, 7, 1]; // days ahead to warn
    const today = new Date();

    // ─── 1. Upcoming expiration warnings ────────────────────────────────────────
    for (const days of thresholds) {
      const targetDate = new Date();
      targetDate.setDate(today.getDate() + days);

      const startOfDay = new Date(targetDate);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(targetDate);
      endOfDay.setHours(23, 59, 59, 999);

      this.logger.log(
        `Scanning documents expiring between ${startOfDay.toISOString()} and ${endOfDay.toISOString()} (in ${days} days)...`,
      );

      const expiringDocuments = await this.prisma.document.findMany({
        where: {
          expirationDate: {
            gte: startOfDay,
            lte: endOfDay,
          },
          uploadedBy: { not: null },
        },
      });

      this.logger.log(`Found ${expiringDocuments.length} documents expiring in ${days} days.`);

      for (const doc of expiringDocuments) {
        const reminderMessage = `Your document "${doc.originalFileName}" is expiring in ${days} day${days === 1 ? '' : 's'} on ${doc.expirationDate?.toLocaleDateString()}.`;

        const existingNotification = await this.prisma.notification.findFirst({
          where: {
            userId: doc.uploadedBy ?? '',
            documentId: doc.id,
            type: 'expiration_warning',
            message: { contains: `expiring in ${days} day` },
          },
        });

        if (!existingNotification) {
          this.logger.log(
            `Triggering warning for document "${doc.originalFileName}" (ID: ${doc.id}) expiring in ${days} days.`,
          );

          await this.notificationsService.createNotification({
            userId: doc.uploadedBy ?? '',
            title: 'Document Expiration Warning',
            message: reminderMessage,
            type: 'expiration_warning',
            deliveryChannel: 'in_app',
            documentId: doc.id,
          });

          await this.notificationsService.createNotification({
            userId: doc.uploadedBy ?? '',
            title: 'Document Expiration Warning',
            message: reminderMessage,
            type: 'expiration_warning',
            deliveryChannel: 'email',
            documentId: doc.id,
          });
        } else {
          this.logger.log(
            `Skipped. Warning already sent for document "${doc.originalFileName}" at ${days}-day threshold.`,
          );
        }
      }
    }

    // ─── 2. Already-expired documents ───────────────────────────────────────────
    const startOfToday = new Date(today);
    startOfToday.setHours(0, 0, 0, 0);

    this.logger.log('Scanning for already-expired documents...');

    const expiredDocuments = await this.prisma.document.findMany({
      where: {
        expirationDate: { lt: startOfToday },
        uploadedBy: { not: null },
      },
    });

    this.logger.log(`Found ${expiredDocuments.length} already-expired documents.`);

    for (const doc of expiredDocuments) {
      const expiredMessage = `Your document "${doc.originalFileName}" expired on ${doc.expirationDate?.toLocaleDateString()}. Please renew or archive it.`;

      const existingExpiredNotif = await this.prisma.notification.findFirst({
        where: {
          userId: doc.uploadedBy ?? '',
          documentId: doc.id,
          type: 'expiration_warning',
          message: { contains: 'expired on' },
        },
      });

      if (!existingExpiredNotif) {
        this.logger.log(
          `Triggering expired-document notification for "${doc.originalFileName}" (ID: ${doc.id}).`,
        );

        await this.notificationsService.createNotification({
          userId: doc.uploadedBy ?? '',
          title: 'Document Has Expired',
          message: expiredMessage,
          type: 'expiration_warning',
          deliveryChannel: 'in_app',
          documentId: doc.id,
        });

        await this.notificationsService.createNotification({
          userId: doc.uploadedBy ?? '',
          title: 'Document Has Expired',
          message: expiredMessage,
          type: 'expiration_warning',
          deliveryChannel: 'email',
          documentId: doc.id,
        });
      } else {
        this.logger.log(
          `Skipped. Expired notification already sent for "${doc.originalFileName}".`,
        );
      }
    }
  }
}
