import { ActivityLogService } from './activity-log.service';
import { CreateActivityLogDto } from './dto/create-activity-log.dto';
export declare class ActivityLogController {
    private readonly activityLogService;
    constructor(activityLogService: ActivityLogService);
    create(createDto: CreateActivityLogDto): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    }>;
    get(id: string): Promise<{
        user: {
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            allowEmailNotifications: boolean;
            allowExpiryReminders: boolean;
            allowRiskAlerts: boolean;
            allowAnalysisAlerts: boolean;
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
    getByUser(userId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    }[]>;
    getByEntity(entityType: string, entityId: string): Promise<({
        user: {
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            allowEmailNotifications: boolean;
            allowExpiryReminders: boolean;
            allowRiskAlerts: boolean;
            allowAnalysisAlerts: boolean;
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
