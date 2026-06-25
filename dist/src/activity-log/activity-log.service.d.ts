import { PrismaService } from '../prisma/prisma.service';
import { CreateActivityLogDto } from './dto/create-activity-log.dto';
export declare class ActivityLogService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createLog(data: CreateActivityLogDto): Promise<{
        id: string;
        createdAt: Date;
        organizationId: string;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
    }>;
    getLogById(id: string): Promise<{
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
    getLogsByOrganization(organizationId: string): Promise<({
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
    getLogsByUser(userId: string): Promise<{
        id: string;
        createdAt: Date;
        organizationId: string;
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
