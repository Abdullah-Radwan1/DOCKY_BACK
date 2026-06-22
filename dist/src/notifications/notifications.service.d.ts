import { PrismaService } from '../prisma/prisma.service';
import { EmailDispatcher } from './dispatchers/email.dispatcher';
import { SmsDispatcher } from './dispatchers/sms.dispatcher';
import { PushDispatcher } from './dispatchers/push.dispatcher';
export declare class NotificationsService {
    private readonly prisma;
    private readonly emailDispatcher;
    private readonly smsDispatcher;
    private readonly pushDispatcher;
    private readonly logger;
    private readonly dispatchers;
    constructor(prisma: PrismaService, emailDispatcher: EmailDispatcher, smsDispatcher: SmsDispatcher, pushDispatcher: PushDispatcher);
    private registerDispatcher;
    createNotification(data: {
        userId: string;
        title: string;
        message: string;
        type: string;
        deliveryChannel?: string;
        documentId?: string;
    }): Promise<{
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
    getUserNotifications(userId: string): Promise<{
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
    markAsRead(id: string): Promise<{
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
    markAllAsRead(userId: string): Promise<import("@prisma/client").Prisma.BatchPayload>;
}
