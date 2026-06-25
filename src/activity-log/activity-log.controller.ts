import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ActivityLogService } from './activity-log.service';
import { CreateActivityLogDto } from './dto/create-activity-log.dto';

@Controller('activity-log')
export class ActivityLogController {
  constructor(private readonly activityLogService: ActivityLogService) {}

  @Post()
  async create(@Body() createDto: CreateActivityLogDto) {
    return this.activityLogService.createLog(createDto);
  }

  @Get(':id')
  async get(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.activityLogService.getLogById(id);
  }

  @Get('organization/:organizationId')
  async getByOrganization(
    @Param('organizationId', new ParseUUIDPipe()) organizationId: string,
  ) {
    return this.activityLogService.getLogsByOrganization(organizationId);
  }

  @Get('user/:userId')
  async getByUser(@Param('userId', new ParseUUIDPipe()) userId: string) {
    return this.activityLogService.getLogsByUser(userId);
  }

  @Get('entity/:entityType/:entityId')
  async getByEntity(
    @Param('entityType') entityType: string,
    @Param('entityId', new ParseUUIDPipe()) entityId: string,
  ) {
    return this.activityLogService.getLogsByEntity(entityType, entityId);
  }
}
