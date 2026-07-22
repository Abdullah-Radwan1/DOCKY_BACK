import { Injectable, Logger } from '@nestjs/common';
import { NotificationDispatcher } from '../interfaces/notification-dispatcher.interface';
import { PrismaService } from '../../prisma/prisma.service';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailDispatcher implements NotificationDispatcher {
  private readonly logger = new Logger(EmailDispatcher.name);
  readonly channel = 'email';
  private transporter: nodemailer.Transporter;

  constructor(private readonly prisma: PrismaService) {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),

      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async send(
    userId: string,
    title: string,
    message: string,
    documentId?: string,
  ): Promise<boolean> {
    this.logger.log(
      `Sending EMAIL to User [${userId}] | Subject: ${title} | Message: ${message} (Document ID: ${documentId || 'None'})`,
    );
    try {
      const user = await this.prisma.profile.findUnique({
        where: { id: userId },
      });
      if (!user?.email) {
        this.logger.warn(`Could not find email for user [${userId}]`);
        return false;
      }
      await this.transporter.sendMail({
        from: process.env.SMTP_FROM || 'abdallahbeedo855@gmail.com',
        to: user.email,
        subject: title,
        text: message,
      });
      return true;
    } catch (err) {
      this.logger.error('Error sending email:', err);
      return false;
    }
  }
}
