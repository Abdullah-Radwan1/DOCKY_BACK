import { Module } from '@nestjs/common';
import { ComplianceService } from './compliance.service';
import { ComplianceController } from './compliance.controller';
import { AiModule } from '../ai/ai.module';
import { PolicyModule } from '../policy/policy.module';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [AiModule, PolicyModule, NotificationsModule],
  providers: [ComplianceService],
  controllers: [ComplianceController],
  exports: [ComplianceService],
})
export class ComplianceModule {}
