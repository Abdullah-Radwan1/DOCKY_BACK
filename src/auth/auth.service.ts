import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly notificationsService: NotificationsService,
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
   * Initiates a password reset: generates a secure token and queues an email.
   * Always returns a success response to prevent email enumeration.
   */
  async forgotPassword(dto: ForgotPasswordDto) {
    const profile = await this.prisma.profile.findUnique({
      where: { email: dto.email },
    });

    // Always respond the same way to prevent email enumeration
    const genericResponse = {
      message:
        'If an account with that email exists, a password reset link has been sent.',
    };

    if (!profile) {
      return genericResponse;
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    // Invalidate any existing unused tokens for this user
    await this.prisma.passwordResetToken.updateMany({
      where: { userId: profile.id, usedAt: null },
      data: { usedAt: new Date() },
    });

    await this.prisma.passwordResetToken.create({
      data: {
        userId: profile.id,
        token,
        expiresAt,
      },
    });

    // Send reset notification (email dispatcher stub — replace with real mailer)
    void this.notificationsService
      .createNotification({
        userId: profile.id,
        title: 'Password Reset Requested',
        message: `A password reset was requested for your account. Use token: ${token} (expires in 1 hour). If you did not request this, ignore this message.`,
        type: 'system_alert',
        deliveryChannel: 'email',
      })
      .catch(() => {});

    return genericResponse;
  }

  /**
   * Consumes a password reset token and sets a new password.
   */
  async resetPassword(dto: ResetPasswordDto) {
    if (dto.newPassword !== dto.confirmPassword) {
      throw new BadRequestException(
        'New password and confirmation do not match.',
      );
    }

    const tokenRecord = await this.prisma.passwordResetToken.findUnique({
      where: { token: dto.token },
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
    };
  }
}
