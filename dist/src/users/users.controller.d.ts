import type { Request } from 'express';
import { UsersService } from './users.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UpdateMeDto } from './dto/update-me.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMe(req: Request & {
        user: {
            id: string;
        };
    }): Promise<{
        id: string;
        email: string;
        full_name: string | null;
        avatar_url: string | null;
        role: import("src/generated/prisma").UserRole;
        created_at: Date;
        updated_at: Date;
        plan: import("src/generated/prisma").PlanType;
        usage_quota: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            guestId: string | null;
            uploadsUsed: number;
            analysesUsed: number;
        } | null;
        notification_preferences: {
            allow_email_notifications: boolean;
            allow_expiry_reminders: boolean;
            allow_risk_alerts: boolean;
            allow_analysis_alerts: boolean;
        };
    }>;
    updateMe(req: Request & {
        user: {
            id: string;
        };
    }, dto: UpdateMeDto): Promise<{
        id: string;
        email: string;
        full_name: string | null;
        avatar_url: string | null;
        role: import("src/generated/prisma").UserRole;
        created_at: Date;
        updated_at: Date;
        plan: import("src/generated/prisma").PlanType;
        usage_quota: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            guestId: string | null;
            uploadsUsed: number;
            analysesUsed: number;
        } | null;
        notification_preferences: {
            allow_email_notifications: boolean;
            allow_expiry_reminders: boolean;
            allow_risk_alerts: boolean;
            allow_analysis_alerts: boolean;
        };
    }>;
    create(createDto: CreateProfileDto): Promise<{
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        allowEmailNotifications: boolean;
        allowExpiryReminders: boolean;
        allowRiskAlerts: boolean;
        allowAnalysisAlerts: boolean;
        plan: import("src/generated/prisma").PlanType;
        id: string;
        passwordHash: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    get(id: string): Promise<{
        usageQuota: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            guestId: string | null;
            uploadsUsed: number;
            analysesUsed: number;
        } | null;
    } & {
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        allowEmailNotifications: boolean;
        allowExpiryReminders: boolean;
        allowRiskAlerts: boolean;
        allowAnalysisAlerts: boolean;
        plan: import("src/generated/prisma").PlanType;
        id: string;
        passwordHash: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateDto: UpdateProfileDto): Promise<{
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        allowEmailNotifications: boolean;
        allowExpiryReminders: boolean;
        allowRiskAlerts: boolean;
        allowAnalysisAlerts: boolean;
        plan: import("src/generated/prisma").PlanType;
        id: string;
        passwordHash: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<{
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        allowEmailNotifications: boolean;
        allowExpiryReminders: boolean;
        allowRiskAlerts: boolean;
        allowAnalysisAlerts: boolean;
        plan: import("src/generated/prisma").PlanType;
        id: string;
        passwordHash: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
