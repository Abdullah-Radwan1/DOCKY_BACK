import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../../prisma/prisma.service';

/**
 * Interval in days between expiration reminder notifications.
 * A notification is sent every 14 days starting from the document's creation date.
 */
const REMINDER_INTERVAL_DAYS = 14;

@Injectable()
export class DocumentExpirySchedulerService {
  private readonly logger = new Logger(DocumentExpirySchedulerService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Runs every day at midnight.
   *
   * Notification logic (Option 2 — bi-weekly reminders from upload date):
   * - For every document that belongs to an authenticated user and has a future expirationDate,
   *   we calculate how many days have elapsed since the document was created.
   * - If that elapsed number of days is an exact multiple of 14, we send a reminder.
   * - This means: day 14, 28, 42, … after upload, until the document expires.
   * - We also send a final notice on the expiration day itself.
   */
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async sendExpiryReminders(): Promise<void> {
    this.logger.log('Running bi-weekly expiration reminder cron job…');

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Fetch all user-owned documents with a future (or today) expiration date
    const documents = await this.prisma.document.findMany({
      where: {
        uploadedBy: { not: null },
        expirationDate: { gte: today },
      },
      select: {
        id: true,
        originalFileName: true,
        expirationDate: true,
        createdAt: true,
        uploadedBy: true,
        uploader: {
          select: {
            id: true,
            allowExpiryReminders: true,
          },
        },
      },
    });

    let sent = 0;
    let skipped = 0;

    for (const doc of documents) {
      // Skip if the user has opted out of expiry reminders
      if (!doc.uploader?.allowExpiryReminders) {
        skipped++;
        continue;
      }

      const uploadDate = new Date(doc.createdAt);
      uploadDate.setHours(0, 0, 0, 0);

      const daysSinceUpload = Math.round(
        (today.getTime() - uploadDate.getTime()) / (1000 * 60 * 60 * 24),
      );

      const expirationDate = new Date(doc.expirationDate!);
      expirationDate.setHours(0, 0, 0, 0);

      const daysUntilExpiry = Math.round(
        (expirationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
      );

      const isReminderDay = daysSinceUpload > 0 && daysSinceUpload % REMINDER_INTERVAL_DAYS === 0;
      const isExpirationDay = daysUntilExpiry === 0;

      if (!isReminderDay && !isExpirationDay) {
        skipped++;
        continue;
      }

      const title = isExpirationDay
        ? `Document expires today: "${doc.originalFileName}"`
        : `Upcoming expiration: "${doc.originalFileName}"`;

      const message = isExpirationDay
        ? `Your document "${doc.originalFileName}" expires today (${expirationDate.toDateString()}). Please renew or take action.`
        : `Your document "${doc.originalFileName}" will expire on ${expirationDate.toDateString()} (${daysUntilExpiry} day${daysUntilExpiry !== 1 ? 's' : ''} remaining). This is your bi-weekly reminder.`;

      // Check if we already sent a notification for this document today to avoid duplicates
      const alreadySent = await this.prisma.notification.findFirst({
        where: {
          documentId: doc.id,
          userId: doc.uploadedBy!,
          type: 'expiration_warning',
          createdAt: { gte: today },
        },
      });

      if (alreadySent) {
        this.logger.debug(
          `Skipping duplicate notification for document ${doc.id} — already sent today`,
        );
        skipped++;
        continue;
      }

      await this.prisma.notification.create({
        data: {
          userId: doc.uploadedBy!,
          documentId: doc.id,
          type: 'expiration_warning',
          deliveryChannel: 'in_app',
          title,
          message,
          status: 'unread',
        },
      });

      this.logger.log(
        `Expiry reminder sent to user ${doc.uploadedBy} for document "${doc.originalFileName}" ` +
          `(${daysUntilExpiry} days left, day ${daysSinceUpload} since upload)`,
      );
      sent++;
    }

    this.logger.log(
      `Expiry cron finished — ${sent} notification(s) sent, ${skipped} skipped.`,
    );
  }
}
