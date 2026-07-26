import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { NotificationsService } from './notifications.service';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  /**
   * GET /notifications/me
   * Returns paginated notifications for the logged-in user.
   * Supports ?page=, ?limit=, ?status=unread|read|archived|all
   */
  @Get('me')
  async getMyNotifications(
    @Req() req: Request & { user: { id: string } },
    @Query() query: PaginationQueryDto,
  ) {
    return this.notificationsService.getUserNotificationsPaginated(req.user.id, query);
  }

  /**
   * GET /notifications/me/unread-count
   * Returns the number of unread notifications for the logged-in user.
   */
  @Get('me/unread-count')
  async getUnreadCount(@Req() req: Request & { user: { id: string } }) {
    return this.notificationsService.getUnreadCount(req.user.id);
  }

  /**
   * PATCH /notifications/:id/read
   * Marks a specific notification as read (ownership enforced).
   */
  @Patch(':id/read')
  async markRead(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Req() req: Request & { user: { id: string } },
  ) {
    return this.notificationsService.markAsRead(id, req.user.id);
  }

  /**
   * POST /notifications/me/read-all
   * Marks all of the logged-in user's notifications as read.
   */
  @Post('me/read-all')
  async readAll(@Req() req: Request & { user: { id: string } }) {
    return this.notificationsService.markAllAsRead(req.user.id);
  }
}
