import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { EmailDispatcher } from './dispatchers/email.dispatcher';
import { SmsDispatcher } from './dispatchers/sms.dispatcher';
import { PushDispatcher } from './dispatchers/push.dispatcher';

@Module({
  providers: [
    NotificationsService,
    EmailDispatcher,
    SmsDispatcher,
    PushDispatcher,
  ],
  controllers: [NotificationsController],
  exports: [NotificationsService],
})
export class NotificationsModule {}
