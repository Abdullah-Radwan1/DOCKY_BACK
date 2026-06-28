import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(createDto: CreateNotificationDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").NotificationStatus;
        documentId: string | null;
        userId: string;
        title: string;
        message: string;
        type: import("src/generated/prisma").NotificationType;
        deliveryChannel: import("src/generated/prisma").DeliveryChannel;
        scheduledFor: Date | null;
        sentAt: Date | null;
    }>;
    getNotifications(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").NotificationStatus;
        documentId: string | null;
        userId: string;
        title: string;
        message: string;
        type: import("src/generated/prisma").NotificationType;
        deliveryChannel: import("src/generated/prisma").DeliveryChannel;
        scheduledFor: Date | null;
        sentAt: Date | null;
    }[]>;
    markRead(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("src/generated/prisma").NotificationStatus;
        documentId: string | null;
        userId: string;
        title: string;
        message: string;
        type: import("src/generated/prisma").NotificationType;
        deliveryChannel: import("src/generated/prisma").DeliveryChannel;
        scheduledFor: Date | null;
        sentAt: Date | null;
    }>;
    readAll(userId: string): Promise<import("src/generated/prisma/internal/prismaNamespace").BatchPayload>;
}
