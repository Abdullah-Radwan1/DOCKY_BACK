import { PrismaService } from '../prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UpdateMeDto } from './dto/update-me.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private getProfileResponse;
    createUser(data: CreateProfileDto): Promise<{
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
    getUserById(id: string): Promise<{
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
    updateUser(id: string, data: UpdateProfileDto): Promise<{
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
    deleteUser(id: string): Promise<{
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
    getMe(userId: string): Promise<{
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
    updateMe(userId: string, dto: UpdateMeDto): Promise<{
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
}
