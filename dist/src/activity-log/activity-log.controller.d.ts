import { ActivityLogService } from './activity-log.service';
import { CreateActivityLogDto } from './dto/create-activity-log.dto';
export declare class ActivityLogController {
    private readonly activityLogService;
    constructor(activityLogService: ActivityLogService);
    create(createDto: CreateActivityLogDto): Promise<{
        id: string;
        createdAt: Date;
        organizationId: string;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    }>;
    get(id: string): Promise<{
        organization: {
            id: string;
            name: string;
            slug: string;
            plan: import("src/generated/prisma").PlanType;
            documentsLimit: number | null;
            createdAt: Date;
            updatedAt: Date;
        };
        user: {
            email: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            organizationId: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        organizationId: string;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    }>;
    getByOrganization(organizationId: string): Promise<({
        user: {
            email: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            organizationId: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        organizationId: string;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    })[]>;
    getByUser(userId: string): Promise<{
        id: string;
        createdAt: Date;
        organizationId: string;
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
            createdAt: Date;
            updatedAt: Date;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            organizationId: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        organizationId: string;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    })[]>;
}
