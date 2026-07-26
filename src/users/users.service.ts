import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UpdateMeDto } from './dto/update-me.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  private async getProfileResponse(userId: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { id: userId },
      include: {
        usageQuota: true,
      },
    });

    if (!profile) {
      throw new NotFoundException('User profile not found');
    }

    return {
      id: profile.id,
      email: profile.email,
      full_name: profile.fullName,
      avatar_url: profile.avatarUrl,
      role: profile.role,

      created_at: profile.createdAt,
      updated_at: profile.updatedAt,

      plan: profile.plan,

      usage_quota: profile.usageQuota,

      notification_preferences: {
        allow_email_notifications: profile.allowEmailNotifications,
        allow_expiry_reminders: profile.allowExpiryReminders,
        allow_risk_alerts: profile.allowRiskAlerts,
        allow_analysis_alerts: profile.allowAnalysisAlerts,
      },
    };
  }

  async createUser(data: CreateProfileDto) {
    return this.prisma.profile.create({
      data: {
        email: data.email,
        fullName: data.fullName,
        avatarUrl: data.avatarUrl,
        role: data.role,
      },
    });
  }

  async getUserById(id: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { id },
      include: {
        usageQuota: true,
      },
    });

    if (!profile) {
      throw new NotFoundException(`User profile with ID ${id} not found`);
    }

    return profile;
  }

  async updateUser(id: string, data: UpdateProfileDto) {
    try {
      return await this.prisma.profile.update({
        where: { id },
        data,
      });
    } catch {
      throw new NotFoundException(
        `User profile with ID ${id} not found to update`,
      );
    }
  }

  async deleteUser(id: string) {
    try {
      return await this.prisma.profile.delete({
        where: { id },
      });
    } catch {
      throw new NotFoundException(
        `User profile with ID ${id} not found to delete`,
      );
    }
  }

  async getMe(userId: string) {
    return this.getProfileResponse(userId);
  }

  async updateMe(userId: string, dto: UpdateMeDto) {
    await this.prisma.profile.update({
      where: { id: userId },
      data: {
        ...(dto.fullName !== undefined && {
          fullName: dto.fullName,
        }),
        ...(dto.allowEmailNotifications !== undefined && {
          allowEmailNotifications: dto.allowEmailNotifications,
        }),
        ...(dto.allowExpiryReminders !== undefined && {
          allowExpiryReminders: dto.allowExpiryReminders,
        }),
        ...(dto.allowRiskAlerts !== undefined && {
          allowRiskAlerts: dto.allowRiskAlerts,
        }),
        ...(dto.allowAnalysisAlerts !== undefined && {
          allowAnalysisAlerts: dto.allowAnalysisAlerts,
        }),
        ...(dto.plan !== undefined && {
          plan: dto.plan as any,
        }),
      },
    });

    return this.getProfileResponse(userId);
  }
}
