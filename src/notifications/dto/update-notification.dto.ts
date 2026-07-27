import { PartialType } from '@nestjs/mapped-types';
import { CreateNotificationDto } from './create-notification.dto';
import { NotificationStatus } from '../../generated/prisma/client.js';
import { IsOptional, IsEnum } from 'class-validator';

export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {
  @IsEnum(NotificationStatus)
  @IsOptional()
  status?: NotificationStatus;
}
