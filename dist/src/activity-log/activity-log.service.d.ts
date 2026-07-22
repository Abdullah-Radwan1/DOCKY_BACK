import { PrismaService } from '../prisma/prisma.service';
import { CreateActivityLogDto } from './dto/create-activity-log.dto';
export declare class ActivityLogService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createLog(data: CreateActivityLogDto): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    }>;
    getLogById(id: string): Promise<{
        user: {
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
        } | null;
    } & {
        id: string;
        createdAt: Date;
        userId: string | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    }>;
    getLogsByUser(userId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    }[]>;
    getLogsByEntity(entityType: string, entityId: string): Promise<({
        user: {
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
        } | null;
    } & {
        id: string;
        createdAt: Date;
        userId: string | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    })[]>;
}
