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
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
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
      `Sending EMAIL to User [${userId}] | Subject: ${title} | Document: ${documentId || 'None'}`,
    );

    try {
      const user = await this.prisma.profile.findUnique({
        where: { id: userId },
      });

      if (!user?.email) {
        this.logger.warn(`Could not find email for user [${userId}]`);
        return false;
      }

      // Strip internal marker tokens (e.g. [reminder-7d:uuid]) from the displayed message
      const cleanMessage = message.replace(/\[reminder-\d+d:[^\]]+\]\s*/g, '').trim();

      const isExpired = title.toLowerCase().includes('expired');
      const isUrgent = title.toLowerCase().includes('urgent') || title.includes('1 Day');
      const accentColor = isExpired ? '#DC2626' : isUrgent ? '#F59E0B' : '#2563EB';
      const iconEmoji = isExpired ? '🔴' : isUrgent ? '⚠️' : '📄';
      const appName = 'Docky';
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
      const docLink = documentId ? `${frontendUrl}/documents/${documentId}` : frontendUrl;

      const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e40af 0%,#2563EB 100%);border-radius:12px 12px 0 0;padding:32px 40px;text-align:center;">
              <p style="margin:0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">${appName}</p>
              <p style="margin:6px 0 0;font-size:13px;color:#bfdbfe;">Document Management & Compliance</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">

              <!-- Icon + Title -->
              <div style="text-align:center;margin-bottom:28px;">
                <div style="display:inline-block;font-size:48px;line-height:1;">${iconEmoji}</div>
                <h1 style="margin:12px 0 0;font-size:22px;font-weight:700;color:#0f172a;">${title.replace(/^[^\w\s]*\s*/, '')}</h1>
              </div>

              <!-- Divider -->
              <div style="height:3px;background:linear-gradient(90deg,${accentColor},transparent);border-radius:2px;margin-bottom:28px;"></div>

              <!-- Greeting -->
              <p style="margin:0 0 16px;font-size:16px;color:#334155;">
                Hi <strong>${user.fullName || user.email}</strong>,
              </p>

              <!-- Message box -->
              <div style="background:#f8fafc;border-left:4px solid ${accentColor};border-radius:0 8px 8px 0;padding:20px 24px;margin-bottom:28px;">
                <p style="margin:0;font-size:15px;line-height:1.7;color:#1e293b;">${cleanMessage}</p>
              </div>

              <!-- CTA Button -->
              <div style="text-align:center;margin-bottom:32px;">
                <a href="${docLink}"
                   style="display:inline-block;background:${accentColor};color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 36px;border-radius:8px;letter-spacing:0.2px;">
                  View Document →
                </a>
              </div>

              <!-- Info note -->
              <p style="margin:0;font-size:13px;color:#94a3b8;text-align:center;line-height:1.6;">
                You're receiving this because you have document expiry reminders enabled.<br/>
                You can manage your notification preferences in
                <a href="${frontendUrl}/settings" style="color:#2563EB;text-decoration:none;">Settings</a>.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                © ${new Date().getFullYear()} ${appName} · All rights reserved
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim();

      await this.transporter.sendMail({
        from: `"${appName}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: user.email,
        subject: `${iconEmoji} ${title.replace(/^[^\w\s]*\s*/, '')}`,
        text: cleanMessage, // plain-text fallback
        html: htmlBody,
      });

      this.logger.log(`✅ Email sent successfully to ${user.email}`);
      return true;
    } catch (err) {
      this.logger.error('❌ Error sending email:', err);
      return false;
    }
  }
}
