import { NotificationType, DeliveryChannel } from "../../generated/prisma/index.js";
export declare class CreateNotificationDto {
    userId: string;
    title: string;
    message: string;
    type: NotificationType;
    deliveryChannel?: DeliveryChannel;
    documentId?: string;
    scheduledFor?: Date;
}
