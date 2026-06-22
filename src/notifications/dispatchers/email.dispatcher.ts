import { Injectable, Logger } from '@nestjs/common';
import { NotificationDispatcher } from '../interfaces/notification-dispatcher.interface';

@Injectable()
export class EmailDispatcher implements NotificationDispatcher {
  private readonly logger = new Logger(EmailDispatcher.name);
  readonly channel = 'email';

  async send(
    userId: string,
    title: string,
    message: string,
    documentId?: string,
  ): Promise<boolean> {
    this.logger.log(
      `Sending EMAIL to User [${userId}] | Subject: ${title} | Message: ${message} (Document ID: ${documentId || 'None'})`,
    );
    // Simulating API call/sending email
    return true;
  }
}
