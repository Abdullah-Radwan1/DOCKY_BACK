import { DeliveryChannel, NotificationStatus, NotificationType } from "../../generated/prisma/index.js";
export declare class NotificationEntity {
    id: string;
    userId: string;
    title: string;
    message: string;
    type: NotificationType;
    status: NotificationStatus;
    deliveryChannel: DeliveryChannel;
    documentId?: string;
    scheduledFor?: Date;
    sentAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
