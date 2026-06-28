import { PrismaService } from '../prisma/prisma.service';
import { EmailDispatcher } from './dispatchers/email.dispatcher';
import { SmsDispatcher } from './dispatchers/sms.dispatcher';
import { PushDispatcher } from './dispatchers/push.dispatcher';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationsService {
    private readonly prisma;
    private readonly emailDispatcher;
    private readonly smsDispatcher;
    private readonly pushDispatcher;
    private readonly logger;
    private readonly dispatchers;
    constructor(prisma: PrismaService, emailDispatcher: EmailDispatcher, smsDispatcher: SmsDispatcher, pushDispatcher: PushDispatcher);
    private registerDispatcher;
    createNotification(data: CreateNotificationDto): Promise<{
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
    getUserNotifications(userId: string): Promise<{
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
    markAsRead(id: string): Promise<{
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
    markAllAsRead(userId: string): Promise<import("src/generated/prisma/internal/prismaNamespace").BatchPayload>;
}
