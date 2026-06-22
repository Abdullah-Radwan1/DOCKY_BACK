import { Controller, Post } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';

@Controller('scheduler')
export class SchedulerController {
  constructor(private readonly schedulerService: SchedulerService) {}

  @Post('trigger')
  async triggerScan() {
    await this.schedulerService.checkExpiringDocuments();
    return {
      success: true,
      message: 'Document expiration check process triggered successfully.',
    };
  }
}
