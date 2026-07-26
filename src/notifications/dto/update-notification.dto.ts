import { PartialType } from '@nestjs/mapped-types';
import { CreateNotificationDto } from './create-notification.dto';
import { NotificationStatus } from 'src/generated/prisma';
import { IsOptional, IsEnum } from 'class-validator';

export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {
  @IsEnum(NotificationStatus)
  @IsOptional()
  status?: NotificationStatus;
}
