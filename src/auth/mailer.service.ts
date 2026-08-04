import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

/**
 * MailerService — lightweight transactional email sender.
 *
 * Used for security-critical emails (e.g. password reset) that must bypass
 * user notification-preference gates. Do NOT route these through
 * NotificationsService, which checks allowEmailNotifications toggles.
 */
@Injectable()
export class MailerService {
  private readonly logger = new Logger(MailerService.name);
  private readonly transporter: nodemailer.Transporter;
  private readonly from: string;

  constructor() {
    this.from = process.env.SMTP_FROM ?? 'noreply@docky.app';

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT ?? '587', 10);
    const smtpSecure = process.env.SMTP_SECURE === 'true';

    this.logger.log(
      `MailerService configured: host=${smtpHost ?? 'unset'} port=${smtpPort} secure=${smtpSecure} from=${this.from} user=${process.env.SMTP_USER ? 'set' : 'unset'}`,
    );

    this.transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  /**
   * Sends a branded password-reset email containing a secure one-time link.
   *
   * @param to       Recipient email address
   * @param resetUrl Full reset URL including the raw token query param
   */
  async sendPasswordResetEmail(to: string, resetUrl: string): Promise<void> {
    const html = this.buildResetEmailHtml(resetUrl);

    try {
      await this.transporter.sendMail({
        from: `"DOCKY" <${this.from}>`,
        to,
        subject: 'Reset your DOCKY password',
        text: this.buildResetEmailText(resetUrl),
        html,
      });
      this.logger.log(`Password reset email sent to ${to}`);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : JSON.stringify(err);
      const errorStack = err instanceof Error ? err.stack : undefined;
      this.logger.error(
        `Failed to send password reset email to ${to}: ${errorMessage}`,
        errorStack,
      );
    }
  }

  // ─── Private helpers ───────────────────────────────────────────────────────

  private buildResetEmailText(resetUrl: string): string {
    return [
      'Hi there,',
      '',
      'We received a request to reset the password for your DOCKY account.',
      '',
      'Click the link below to set a new password (expires in 1 hour):',
      resetUrl,
      '',
      'If you did not request a password reset, you can safely ignore this email.',
      'Your password will remain unchanged.',
      '',
      '— The DOCKY Team',
    ].join('\n');
  }

  private buildResetEmailHtml(resetUrl: string): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reset your DOCKY password</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <!-- Logo / Brand -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:12px;width:44px;height:44px;text-align:center;vertical-align:middle;">
                    <span style="color:#fff;font-size:20px;font-weight:700;line-height:44px;">D</span>
                  </td>
                  <td style="padding-left:12px;">
                    <span style="color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">DOCKY</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:16px;padding:40px 36px;">

              <!-- Icon -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:24px;">
                    <div style="display:inline-block;background:#1e1b4b;border-radius:50%;width:56px;height:56px;text-align:center;line-height:56px;font-size:24px;">🔐</div>
                  </td>
                </tr>
              </table>

              <!-- Headline -->
              <p style="margin:0 0 8px;color:#ffffff;font-size:22px;font-weight:700;text-align:center;">Reset your password</p>
              <p style="margin:0 0 28px;color:#888;font-size:15px;text-align:center;line-height:1.6;">
                We received a request to reset the password for your DOCKY account.
                Click the button below to choose a new password.
              </p>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td align="center">
                    <a href="${resetUrl}"
                       style="display:inline-block;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;padding:14px 36px;border-radius:10px;letter-spacing:0.2px;">
                      Reset Password
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Expiry notice -->
              <p style="margin:0 0 20px;color:#666;font-size:13px;text-align:center;">
                ⏱ This link expires in <strong style="color:#aaa;">1 hour</strong>.
              </p>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr><td style="border-top:1px solid #2a2a2a;"></td></tr>
              </table>

              <!-- Fallback URL -->
              <p style="margin:0 0 8px;color:#555;font-size:12px;text-align:center;">If the button doesn't work, copy and paste this URL into your browser:</p>
              <p style="margin:0 0 20px;word-break:break-all;text-align:center;">
                <a href="${resetUrl}" style="color:#7c3aed;font-size:12px;text-decoration:underline;">${resetUrl}</a>
              </p>

              <!-- Safety note -->
              <p style="margin:0;color:#555;font-size:13px;text-align:center;line-height:1.6;">
                If you didn't request a password reset, you can safely ignore this email —
                your password will not be changed.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top:28px;">
              <p style="margin:0;color:#444;font-size:12px;">© ${new Date().getFullYear()} DOCKY. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
  }
}
