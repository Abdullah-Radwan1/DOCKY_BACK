import { Injectable, Logger } from '@nestjs/common';
import { NotificationDispatcher } from '../interfaces/notification-dispatcher.interface';

@Injectable()
export class SmsDispatcher implements NotificationDispatcher {
  private readonly logger = new Logger(SmsDispatcher.name);
  readonly channel = 'sms';

  async send(
    userId: string,
    title: string,
    message: string,
    documentId?: string,
  ): Promise<boolean> {
    this.logger.log(
      `Sending SMS to User [${userId}] | Message: ${title} - ${message} (Document ID: ${documentId || 'None'})`,
    );
    // Simulating SMS gateway API request
    return true;
  }
}
