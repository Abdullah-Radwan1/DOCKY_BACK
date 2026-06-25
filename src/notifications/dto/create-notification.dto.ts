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
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsEnum(NotificationType)
  @IsNotEmpty()
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
