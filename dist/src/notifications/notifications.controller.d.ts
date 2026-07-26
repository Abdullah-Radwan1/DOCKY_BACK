import type { Request } from 'express';
import { NotificationsService } from './notifications.service';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    getMyNotifications(req: Request & {
        user: {
            id: string;
        };
    }, query: PaginationQueryDto): Promise<{
        data: ({
            document: {
                originalFileName: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            title: string;
            message: string;
            type: import("src/generated/prisma").NotificationType;
            deliveryChannel: import("src/generated/prisma").DeliveryChannel;
            documentId: string | null;
            scheduledFor: Date | null;
            status: import("src/generated/prisma").NotificationStatus;
            sentAt: Date | null;
        })[];
        meta: {
            totalItems: number;
            itemCount: number;
            itemsPerPage: number;
            totalPages: number;
            currentPage: number;
        };
    }>;
    getUnreadCount(req: Request & {
        user: {
            id: string;
        };
    }): Promise<{
        count: number;
    }>;
    markRead(id: string, req: Request & {
        user: {
            id: string;
        };
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        title: string;
        message: string;
        type: import("src/generated/prisma").NotificationType;
        deliveryChannel: import("src/generated/prisma").DeliveryChannel;
        documentId: string | null;
        scheduledFor: Date | null;
        status: import("src/generated/prisma").NotificationStatus;
        sentAt: Date | null;
    }>;
    readAll(req: Request & {
        user: {
            id: string;
        };
    }): Promise<{
        message: string;
    }>;
}
