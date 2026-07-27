import { NotificationType, DeliveryChannel } from '../../generated/prisma/client.js';
import {
  IsString,
  IsOptional,
  IsUUID,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';

export class CreateNotificationDto {
  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  message?: string;

  @IsEnum(NotificationType)
  type: NotificationType;

  @IsEnum(DeliveryChannel)
  @IsOptional()
  deliveryChannel?: DeliveryChannel;

  @IsUUID()
  @IsOptional()
  documentId?: string;

  @IsOptional()
  scheduledFor?: Date;
}
