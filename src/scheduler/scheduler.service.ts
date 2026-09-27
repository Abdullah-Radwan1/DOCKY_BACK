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
   * Runs every day at midnight.
   *
   * It checks for:
   * 1. Documents expiring within the next 30 days.
   * 2. Documents that have already expired.
   *
   * Each expiration notification is sent only once.
   */
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT, {
    timeZone: 'Africa/Cairo',
  })
  async handleDailyCron() {
    this.logger.log(
      '⏰ Daily cron triggered — checking document expirations...',
    );

    try {
      await this.checkExpiringDocuments();
    } catch (error) {
      this.logger.error(
        '❌ Error while checking document expirations',
        error instanceof Error ? error.stack : error,
      );
    }
  }

  /**
   * Checks all user documents for expiration.
   *
   * Behavior:
   *
   * - Document has > 30 days remaining:
   *   No notification.
   *
   * - Document has <= 30 days remaining:
   *   Send ONE expiration warning.
   *
   * - Document has already expired:
   *   Send ONE expired notification.
   *
   * Duplicate notifications are prevented by checking for
   * previously created notifications for the same document.
   */
  async checkExpiringDocuments() {
    const now = new Date();

    // ============================================================
    // 1. DOCUMENTS EXPIRING WITHIN 30 DAYS
    // ============================================================

    const thirtyDaysFromNow = new Date(now);
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

    this.logger.log(
      `[30d] Scanning documents expiring between ${now.toISOString()} and ${thirtyDaysFromNow.toISOString()}...`,
    );

    const documentsWithin30Days = await this.prisma.document.findMany({
      where: {
        expirationDate: {
          gte: now,
          lte: thirtyDaysFromNow,
        },
        uploadedBy: {
          not: null,
        },
      },
    });

    this.logger.log(
      `[30d] Found ${documentsWithin30Days.length} documents expiring within 30 days.`,
    );

    for (const document of documentsWithin30Days) {
      if (!document.uploadedBy || !document.expirationDate) {
        continue;
      }

      const daysLeft = Math.ceil(
        (document.expirationDate.getTime() - now.getTime()) /
          (1000 * 60 * 60 * 24),
      );

      // ------------------------------------------------------------
      // Check whether the document has already received
      // an expiration warning.
      // ------------------------------------------------------------

      const existingExpirationWarning =
        await this.prisma.notification.findFirst({
          where: {
            userId: document.uploadedBy,
            documentId: document.id,
            type: 'expiration_warning',
            message: {
              contains: '[expiration-warning]',
            },
          },
        });

      if (existingExpirationWarning) {
        this.logger.log(
          `[30d] Skipped "${document.originalFileName}" — expiration warning already sent.`,
        );

        continue;
      }

      const expirationDate = document.expirationDate.toLocaleDateString(
        'en-GB',
        {
          timeZone: 'Africa/Cairo',
        },
      );

      const message =
        `[expiration-warning] Your document "${document.originalFileName}" ` +
        `is expiring in ${daysLeft} day${daysLeft === 1 ? '' : 's'} ` +
        `on ${expirationDate}. Please review and renew it if necessary.`;

      this.logger.log(
        `[30d] 🔔 Sending expiration warning for "${document.originalFileName}" (${daysLeft} days left).`,
      );

      // ------------------------------------------------------------
      // In-app notification
      // ------------------------------------------------------------

      await this.notificationsService.createNotification({
        userId: document.uploadedBy,
        title: `📄 Document Expiring in ${daysLeft} Day${
          daysLeft === 1 ? '' : 's'
        }`,
        message,
        type: 'expiration_warning',
        deliveryChannel: 'in_app',
        documentId: document.id,
      });

      // ------------------------------------------------------------
      // Email notification
      // ------------------------------------------------------------

      await this.notificationsService.createNotification({
        userId: document.uploadedBy,
        title: `📄 Document Expiring in ${daysLeft} Day${
          daysLeft === 1 ? '' : 's'
        }`,
        message,
        type: 'expiration_warning',
        deliveryChannel: 'email',
        documentId: document.id,
      });
    }

    // ============================================================
    // 2. ALREADY EXPIRED DOCUMENTS
    // ============================================================

    this.logger.log('[expired] Scanning for already-expired documents...');

    const expiredDocuments = await this.prisma.document.findMany({
      where: {
        expirationDate: {
          lt: now,
        },
        uploadedBy: {
          not: null,
        },
      },
    });

    this.logger.log(
      `[expired] Found ${expiredDocuments.length} expired documents.`,
    );

    for (const document of expiredDocuments) {
      if (!document.uploadedBy || !document.expirationDate) {
        continue;
      }

      // ------------------------------------------------------------
      // Check whether the expired notification was already sent.
      // ------------------------------------------------------------

      const existingExpiredNotification =
        await this.prisma.notification.findFirst({
          where: {
            userId: document.uploadedBy,
            documentId: document.id,
            type: 'expiration_warning',
            message: {
              contains: '[expired-notification]',
            },
          },
        });

      if (existingExpiredNotification) {
        this.logger.log(
          `[expired] Skipped "${document.originalFileName}" — expired notification already sent.`,
        );

        continue;
      }

      const expirationDate = document.expirationDate.toLocaleDateString(
        'en-GB',
        {
          timeZone: 'Africa/Cairo',
        },
      );

      const message =
        `[expired-notification] Your document "${document.originalFileName}" ` +
        `expired on ${expirationDate}. Please renew or archive it.`;

      this.logger.log(
        `[expired] 🔴 Sending expired notification for "${document.originalFileName}".`,
      );

      // ------------------------------------------------------------
      // In-app notification
      // ------------------------------------------------------------

      await this.notificationsService.createNotification({
        userId: document.uploadedBy,
        title: '🔴 Document Has Expired',
        message,
        type: 'expiration_warning',
        deliveryChannel: 'in_app',
        documentId: document.id,
      });

      // ------------------------------------------------------------
      // Email notification
      // ------------------------------------------------------------

      await this.notificationsService.createNotification({
        userId: document.uploadedBy,
        title: '🔴 Document Has Expired',
        message,
        type: 'expiration_warning',
        deliveryChannel: 'email',
        documentId: document.id,
      });
    }

    this.logger.log('✅ Document expiration check complete.');
  }
}
