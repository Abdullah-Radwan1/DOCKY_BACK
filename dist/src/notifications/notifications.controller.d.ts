import { NotificationsService } from './notifications.service';
declare class CreateNotificationDto {
    userId: string;
    title: string;
    message: string;
    type: string;
    deliveryChannel?: string;
    documentId?: string;
}
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(createDto: CreateNotificationDto): Promise<{
        id: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        status: string;
        documentId: string | null;
        userId: string;
        title: string;
        message: string;
        type: string;
        deliveryChannel: string;
        scheduledFor: Date | null;
        sentAt: Date | null;
    }>;
    getNotifications(userId: string): Promise<{
        id: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        status: string;
        documentId: string | null;
        userId: string;
        title: string;
        message: string;
        type: string;
        deliveryChannel: string;
        scheduledFor: Date | null;
        sentAt: Date | null;
    }[]>;
    markRead(id: string): Promise<{
        id: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        status: string;
        documentId: string | null;
        userId: string;
        title: string;
        message: string;
        type: string;
        deliveryChannel: string;
        scheduledFor: Date | null;
        sentAt: Date | null;
    }>;
    readAll(userId: string): Promise<import("@prisma/client").Prisma.BatchPayload>;
}
export {};
