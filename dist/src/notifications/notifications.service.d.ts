import { PrismaService } from '../prisma/prisma.service';
import { EmailDispatcher } from './dispatchers/email.dispatcher';
import { SmsDispatcher } from './dispatchers/sms.dispatcher';
import { PushDispatcher } from './dispatchers/push.dispatcher';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { NotificationStatus } from '../generated/prisma';
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
        userId: string;
        title: string;
        message: string;
        type: import("src/generated/prisma/enums").NotificationType;
        deliveryChannel: import("src/generated/prisma/enums").DeliveryChannel;
        documentId: string | null;
        scheduledFor: Date | null;
        status: NotificationStatus;
        sentAt: Date | null;
    }>;
    getUserNotificationsPaginated(userId: string, query: PaginationQueryDto): Promise<{
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
            type: import("src/generated/prisma/enums").NotificationType;
            deliveryChannel: import("src/generated/prisma/enums").DeliveryChannel;
            documentId: string | null;
            scheduledFor: Date | null;
            status: NotificationStatus;
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
    getUnreadCount(userId: string): Promise<{
        count: number;
    }>;
    markAsRead(id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        title: string;
        message: string;
        type: import("src/generated/prisma/enums").NotificationType;
        deliveryChannel: import("src/generated/prisma/enums").DeliveryChannel;
        documentId: string | null;
        scheduledFor: Date | null;
        status: NotificationStatus;
        sentAt: Date | null;
    }>;
    markAllAsRead(userId: string): Promise<{
        message: string;
    }>;
}
