import { PrismaService } from '../prisma/prisma.service';
import { CreateActivityLogDto } from './dto/create-activity-log.dto';
export declare class ActivityLogService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createLog(data: CreateActivityLogDto): Promise<{
        id: string;
        createdAt: Date;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    }>;
    getLogById(id: string): Promise<{
        user: {
            email: string;
            id: string;
            plan: import("src/generated/prisma").PlanType;
            createdAt: Date;
            updatedAt: Date;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            passwordHash: string | null;
            allowEmailNotifications: boolean;
            allowExpiryReminders: boolean;
            allowRiskAlerts: boolean;
            allowAnalysisAlerts: boolean;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    }>;
    getLogsByUser(userId: string): Promise<{
        id: string;
        createdAt: Date;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    }[]>;
    getLogsByEntity(entityType: string, entityId: string): Promise<({
        user: {
            email: string;
            id: string;
            plan: import("src/generated/prisma").PlanType;
            createdAt: Date;
            updatedAt: Date;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            passwordHash: string | null;
            allowEmailNotifications: boolean;
            allowExpiryReminders: boolean;
            allowRiskAlerts: boolean;
            allowAnalysisAlerts: boolean;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    })[]>;
}
