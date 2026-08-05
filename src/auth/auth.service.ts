import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
import { MailerService } from './mailer.service';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly notificationsService: NotificationsService,
    private readonly mailerService: MailerService,
  ) {}

  /**
   * Register a new user. Hashes password, stores profile in DB, returns JWT.
   * Also fires a welcome in-app notification.
   */
  async register(dto: RegisterDto) {
    const existing = await this.prisma.profile.findUnique({
      where: { email: dto.email },
    });
    if (existing) {
      throw new ConflictException('An account with this email already exists.');
    }

    const hash = await bcrypt.hash(dto.password, 12);

    const profile = await this.prisma.profile.create({
      data: {
        email: dto.email,
        fullName: dto.fullName ?? null,
        passwordHash: hash,
      },
      include: {
        usageQuota: true,
      },
    });

    // Fire welcome notification (non-blocking — do not await to keep response fast)
    void this.notificationsService
      .createNotification({
        userId: profile.id,
        title: 'Welcome to DOCKY! 🎉',
        message: `Hi ${profile.fullName ?? profile.email}! Your account is ready. Start by uploading your first compliance document.`,
        type: 'system_alert',
        deliveryChannel: 'in_app',
      })
      .catch(() => {
        // swallow — welcome notification failure must not break registration
      });

    return this.buildResponse(profile);
  }

  /**
   * Validate credentials and return the JWT payload.
   */
  async login(dto: LoginDto) {
    const profile = await this.prisma.profile.findUnique({
      where: { email: dto.email },
      include: { usageQuota: true },
    });

    if (!profile || !profile.passwordHash) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    const valid = await bcrypt.compare(dto.password, profile.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    return this.buildResponse(profile);
  }

  /**
   * Fetch the current user's full profile by ID (from JWT payload).
   */
  async getMe(userId: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { id: userId },
      include: { usageQuota: true },
    });

    if (!profile) {
      throw new UnauthorizedException('User not found.');
    }

    return this.sanitize(profile);
  }

  /**
   * Change the logged-in user's password.
   * Verifies the old password before applying the new one.
   */
  async changePassword(userId: string, dto: ChangePasswordDto) {
    if (dto.newPassword !== dto.confirmPassword) {
      throw new BadRequestException(
        'New password and confirmation do not match.',
      );
    }

    const profile = await this.prisma.profile.findUnique({
      where: { id: userId },
    });

    if (!profile || !profile.passwordHash) {
      throw new UnauthorizedException('User not found or no password set.');
    }

    const valid = await bcrypt.compare(dto.oldPassword, profile.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Current password is incorrect.');
    }

    if (dto.newPassword === dto.oldPassword) {
      throw new BadRequestException(
        'New password must be different from the current password.',
      );
    }

    const newHash = await bcrypt.hash(dto.newPassword, 12);

    await this.prisma.profile.update({
      where: { id: userId },
      data: { passwordHash: newHash },
    });

    return { message: 'Password updated successfully.' };
  }

  /**
   * Initiates a password reset: generates a secure token, hashes it for storage,
   * enforces a rate limit of 3 requests per email per hour, and sends a
   * branded HTML email with the raw (unhashed) reset link.
   *
   * Always returns a generic response to prevent email enumeration.
   */
  async forgotPassword(dto: ForgotPasswordDto) {
    this.logger.log(`/auth/forgot-password called for email=${dto.email}`);
    // Always respond the same way to prevent email enumeration
    const genericResponse = {
      message:
        "If an account exists with this email, you'll receive password reset instructions shortly.",
    };

    const profile = await this.prisma.profile.findUnique({
      where: { email: dto.email },
    });

    if (!profile) {
      this.logger.log(
        `forgotPassword: no profile found for email=${dto.email}`,
      );
      return genericResponse;
    }

    this.logger.log(`forgotPassword: profile found userId=${profile.id}`);

    // ── Rate limit: max 3 reset requests per email per hour ──────────────────
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const recentRequests = await this.prisma.passwordResetToken.count({
      where: {
        userId: profile.id,
        createdAt: { gte: oneHourAgo },
      },
    });

    this.logger.log(`forgotPassword: recentRequests=${recentRequests}`);
    if (recentRequests >= 3) {
      this.logger.log(
        'forgotPassword: rate limit reached, returning generic response',
      );
      // Silently return — do not reveal that the limit was hit
      return genericResponse;
    }

    // ── Generate raw token + SHA-256 hash ────────────────────────────────────
    const rawToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto
      .createHash('sha256')
      .update(rawToken)
      .digest('hex');
    this.logger.log(
      'forgotPassword: generated reset token (raw token not logged)',
    );
    this.logger.log(`forgotPassword: tokenHash=${tokenHash}`);

    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    // Invalidate any existing unused tokens for this user
    await this.prisma.passwordResetToken.updateMany({
      where: { userId: profile.id, usedAt: null },
      data: { usedAt: new Date() },
    });
    this.logger.log('forgotPassword: invalidated existing unused tokens');

    // Store only the hashed token — the raw token is never persisted
    await this.prisma.passwordResetToken.create({
      data: {
        userId: profile.id,
        token: tokenHash,
        expiresAt,
      },
    });
    this.logger.log('forgotPassword: persisted hashed token to database');

    // ── Send branded HTML reset email (bypasses notification preferences) ────
    const frontendUrl = process.env.FRONTEND_URL ?? 'http://localhost:5173';
    const resetUrl = `${frontendUrl}/reset-password?token=${rawToken}`;
    this.logger.log(
      `forgotPassword: generated resetUrl (not logging raw token)`,
    );

    try {
      this.logger.log(
        'forgotPassword: calling mailerService.sendPasswordResetEmail',
      );
      await this.mailerService.sendPasswordResetEmail(profile.email, resetUrl);
      this.logger.log(
        'forgotPassword: mailerService.sendPasswordResetEmail completed successfully',
      );
    } catch (err) {
      this.logger.error(
        'forgotPassword: mailerService.sendPasswordResetEmail failed',
        this.stringifyError(err),
      );
    }

    return genericResponse;
  }

  /**
   * Consumes a password reset token and sets a new password.
   * The incoming token is hashed before DB lookup (only the hash is stored).
   */
  async resetPassword(dto: ResetPasswordDto) {
    if (dto.newPassword !== dto.confirmPassword) {
      throw new BadRequestException(
        'New password and confirmation do not match.',
      );
    }

    // Hash the incoming raw token to match what we stored
    const tokenHash = crypto
      .createHash('sha256')
      .update(dto.token)
      .digest('hex');

    const tokenRecord = await this.prisma.passwordResetToken.findUnique({
      where: { token: tokenHash },
    });

    if (!tokenRecord) {
      throw new NotFoundException('Invalid or expired reset token.');
    }

    if (tokenRecord.usedAt || tokenRecord.expiresAt < new Date()) {
      throw new BadRequestException(
        'Reset token has expired or already been used.',
      );
    }

    const newHash = await bcrypt.hash(dto.newPassword, 12);

    await this.prisma.$transaction([
      this.prisma.profile.update({
        where: { id: tokenRecord.userId },
        data: { passwordHash: newHash },
      }),
      this.prisma.passwordResetToken.update({
        where: { id: tokenRecord.id },
        data: { usedAt: new Date() },
      }),
    ]);

    return { message: 'Password has been reset successfully.' };
  }

  // ─── Helpers ────────────────────────────────────────────────────────────────

  private buildResponse(profile: {
    id: string;
    email: string;
    fullName: string | null;
    role: string;
    plan?: string;
    usageQuota?: any;
    allowEmailNotifications?: boolean;
    allowExpiryReminders?: boolean;
    allowRiskAlerts?: boolean;
    allowAnalysisAlerts?: boolean;
  }) {
    const token = this.jwtService.sign({
      sub: profile.id,
      email: profile.email,
      role: profile.role,
    });

    return {
      token,
      user: this.sanitize(profile),
    };
  }

  private sanitize(profile: {
    id: string;
    email: string;
    fullName: string | null;
    role: string;
    plan?: string;
    usageQuota?: any;
    allowEmailNotifications?: boolean;
    allowExpiryReminders?: boolean;
    allowRiskAlerts?: boolean;
    allowAnalysisAlerts?: boolean;
  }) {
    return {
      id: profile.id,
      email: profile.email,
      full_name: profile.fullName,
      role: profile.role,
      allow_email_notifications: profile.allowEmailNotifications ?? true,
      allow_expiry_reminders: profile.allowExpiryReminders ?? true,
      allow_risk_alerts: profile.allowRiskAlerts ?? true,
      allow_analysis_alerts: profile.allowAnalysisAlerts ?? true,
      plan: profile.plan,
      usage_quota: profile.usageQuota,
    };
  }

  private stringifyError(err: any): string {
    try {
      if (err instanceof Error) {
        const obj: Record<string, any> = {};
        Object.getOwnPropertyNames(err).forEach(
          (k) => (obj[k] = (err as any)[k]),
        );
        return JSON.stringify(obj);
      }
      return JSON.stringify(err);
    } catch {
      return String(err);
    }
  }
}
