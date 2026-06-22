import { Injectable, Logger } from '@nestjs/common';
import { NotificationDispatcher } from '../interfaces/notification-dispatcher.interface';

@Injectable()
export class PushDispatcher implements NotificationDispatcher {
  private readonly logger = new Logger(PushDispatcher.name);
  readonly channel = 'push';

  async send(
    userId: string,
    title: string,
    message: string,
    documentId?: string,
  ): Promise<boolean> {
    this.logger.log(
      `Sending PUSH notification to User [${userId}] | Title: ${title} | Body: ${message} (Document ID: ${documentId || 'None'})`,
    );
    // Simulating FCM / Web Push notification
    return true;
  }
}
