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
   * ⚠️ TESTING: Running every minute. Change back to EVERY_DAY_AT_MIDNIGHT for production.
   * Production cron: '0 0 * * *'
   */
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleDailyCron() {
    this.logger.log('⏰ Cron triggered — checking for expiring documents...');
    await this.checkExpiringDocuments();
  }

  /**
   * Scans the database for documents expiring within the next 30 days.
   *
   * Strategy:
   *  - INITIAL ALERT (≤30 days): Any doc expiring within 30 days with NO prior
   *    expiration_warning notification gets a first alert. This catches documents
   *    expiring in 5, 12, 25 days — not just exactly on day 30.
   *  - REMINDER ALERTS (≤14, ≤7, ≤1 days): Tighter follow-up reminders sent
   *    only if that specific threshold message hasn't been sent yet.
   *  - EXPIRED: Docs already past their expiration date with no "expired on" notice.
   *
   * Duplicate guard: Each threshold check looks for a prior notification
   * containing a unique marker string before creating a new one.
   */
  async checkExpiringDocuments() {
    const now = new Date();

    // ─── 1. INITIAL 30-day alert ─────────────────────────────────────────────────
    // Find ALL docs expiring within the next 30 days that have NEVER received
    // any expiration_warning notification. This is the key fix — previously the
    // code only matched docs expiring on exactly day 30, missing everything in between.
    const thirtyDaysFromNow = new Date(now);
    thirtyDaysFromNow.setDate(now.getDate() + 30);
    thirtyDaysFromNow.setHours(23, 59, 59, 999);

    const startOfTomorrow = new Date(now);
    startOfTomorrow.setDate(now.getDate() + 1);
    startOfTomorrow.setHours(0, 0, 0, 0);

    this.logger.log(
      `[30d] Scanning docs expiring between ${startOfTomorrow.toISOString()} and ${thirtyDaysFromNow.toISOString()}...`,
    );

    const docsWithin30Days = await this.prisma.document.findMany({
      where: {
        expirationDate: {
          gte: startOfTomorrow,
          lte: thirtyDaysFromNow,
        },
        uploadedBy: { not: null },
      },
    });

    this.logger.log(
      `[30d] Found ${docsWithin30Days.length} documents expiring within 30 days.`,
    );

    for (const doc of docsWithin30Days) {
      const daysLeft = Math.ceil(
        (doc.expirationDate!.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
      );

      // Check if ANY expiration_warning has been sent for this doc yet
      const lastInitialWarning = await this.prisma.notification.findFirst({
        where: {
          userId: doc.uploadedBy ?? '',
          documentId: doc.id,
          type: 'expiration_warning',
          message: {
            contains: '[initial-warning]',
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      const FIFTEEN_DAYS = 15 * 24 * 60 * 60 * 1000;

      const shouldSendInitialWarning =
        !lastInitialWarning ||
        now.getTime() - lastInitialWarning.createdAt.getTime() >= FIFTEEN_DAYS;
      if (shouldSendInitialWarning) {
        const message = `[initial-warning] Your document "${doc.originalFileName}" is expiring in ${daysLeft} day${daysLeft === 1 ? '' : 's'} on ${doc.expirationDate?.toLocaleDateString()}.`;

        this.logger.log(
          `[30d] 🔔 Sending initial warning for "${doc.originalFileName}" (${daysLeft} days left).`,
        );

        await this.notificationsService.createNotification({
          userId: doc.uploadedBy ?? '',
          title: `📄 Document Expiring in ${daysLeft} Day${daysLeft === 1 ? '' : 's'}`,
          message,
          type: 'expiration_warning',
          deliveryChannel: 'in_app',
          documentId: doc.id,
        });

        await this.notificationsService.createNotification({
          userId: doc.uploadedBy ?? '',
          title: `📄 Document Expiring in ${daysLeft} Day${daysLeft === 1 ? '' : 's'}`,
          message,
          type: 'expiration_warning',
          deliveryChannel: 'email',
          documentId: doc.id,
        });
      }

      // ----------------------------------------------------
      // Always check reminder thresholds.
      //
      // These reminders are independent from the 15-day rule.
      // If today is inside the 14-day, 7-day or 1-day window,
      // send the reminder if it hasn't been sent before.
      // ----------------------------------------------------

      const reminderThresholds = [14, 7, 1];

      for (const days of reminderThresholds) {
        if (daysLeft > days) continue;

        const markerText = `reminder-${days}d:${doc.id}`;

        const reminderExists = await this.prisma.notification.findFirst({
          where: {
            userId: doc.uploadedBy ?? '',
            documentId: doc.id,
            type: 'expiration_warning',
            message: {
              contains: markerText,
            },
          },
        });

        if (!reminderExists) {
          const reminderMessage = `[reminder-${days}d:${doc.id}] ⚠️ Urgent: Your document "${doc.originalFileName}" expires in ${daysLeft} day${daysLeft === 1 ? '' : 's'} on ${doc.expirationDate?.toLocaleDateString()}.`;

          this.logger.log(
            `[${days}d reminder] Sending reminder for "${doc.originalFileName}".`,
          );

          await this.notificationsService.createNotification({
            userId: doc.uploadedBy ?? '',
            title: `⚠️ Urgent: Document Expiring in ${daysLeft} Day${daysLeft === 1 ? '' : 's'}`,
            message: reminderMessage,
            type: 'expiration_warning',
            deliveryChannel: 'in_app',
            documentId: doc.id,
          });

          await this.notificationsService.createNotification({
            userId: doc.uploadedBy ?? '',
            title: `⚠️ Urgent: Document Expiring in ${daysLeft} Day${daysLeft === 1 ? '' : 's'}`,
            message: reminderMessage,
            type: 'expiration_warning',
            deliveryChannel: 'email',
            documentId: doc.id,
          });

          // Only send the highest-priority reminder tonight.
          break;
        }
      }
    }

    // ─── 3. Already-expired documents ────────────────────────────────────────────
    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);

    this.logger.log('[expired] Scanning for already-expired documents...');

    const expiredDocuments = await this.prisma.document.findMany({
      where: {
        expirationDate: { lt: startOfToday },
        uploadedBy: { not: null },
      },
    });

    this.logger.log(
      `[expired] Found ${expiredDocuments.length} expired documents.`,
    );

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
          `[expired] 🔴 Sending expired notice for "${doc.originalFileName}" (ID: ${doc.id}).`,
        );

        await this.notificationsService.createNotification({
          userId: doc.uploadedBy ?? '',
          title: '🔴 Document Has Expired',
          message: expiredMessage,
          type: 'expiration_warning',
          deliveryChannel: 'in_app',
          documentId: doc.id,
        });

        await this.notificationsService.createNotification({
          userId: doc.uploadedBy ?? '',
          title: '🔴 Document Has Expired',
          message: expiredMessage,
          type: 'expiration_warning',
          deliveryChannel: 'email',
          documentId: doc.id,
        });
      } else {
        this.logger.log(
          `[expired] Skipped — already notified for "${doc.originalFileName}".`,
        );
      }
    }

    this.logger.log('✅ Expiration check complete.');
  }
}
