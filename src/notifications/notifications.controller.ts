import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

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
