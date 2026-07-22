import { ActivityLogService } from './activity-log.service';
import { CreateActivityLogDto } from './dto/create-activity-log.dto';
export declare class ActivityLogController {
    private readonly activityLogService;
    constructor(activityLogService: ActivityLogService);
    create(createDto: CreateActivityLogDto): Promise<{
        id: string;
        createdAt: Date;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    }>;
    get(id: string): Promise<{
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
    getByUser(userId: string): Promise<{
        id: string;
        createdAt: Date;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    }[]>;
    getByEntity(entityType: string, entityId: string): Promise<({
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
