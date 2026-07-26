import { NotificationType, DeliveryChannel } from 'src/generated/prisma';
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
