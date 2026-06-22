import { Controller, Get, Post, Patch, Param, Body, ParseUUIDPipe } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { IsUUID, IsString, IsOptional, IsNotEmpty } from 'class-validator';

class CreateNotificationDto {
  @IsUUID()
  @IsNotEmpty()
  userId!: string;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  message!: string;

  @IsString()
  @IsNotEmpty()
  type!: string;

  @IsString()
  @IsOptional()
  deliveryChannel?: string;

  @IsUUID()
  @IsOptional()
  documentId?: string;
}

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  async create(@Body() createDto: CreateNotificationDto) {
    return this.notificationsService.createNotification(createDto);
  }

  @Get('user/:userId')
  async getNotifications(@Param('userId', new ParseUUIDPipe()) userId: string) {
    return this.notificationsService.getUserNotifications(userId);
  }

  @Patch(':id/read')
  async markRead(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.notificationsService.markAsRead(id);
  }

  @Post('user/:userId/read-all')
  async readAll(@Param('userId', new ParseUUIDPipe()) userId: string) {
    return this.notificationsService.markAllAsRead(userId);
  }
}
