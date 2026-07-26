import {
  NotificationStatus,
  NotificationType,
  DeliveryChannel,
} from 'src/generated/prisma';

export class NotificationResponseDto {
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
