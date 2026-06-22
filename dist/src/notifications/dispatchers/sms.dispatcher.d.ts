import { NotificationDispatcher } from '../interfaces/notification-dispatcher.interface';
export declare class SmsDispatcher implements NotificationDispatcher {
    private readonly logger;
    readonly channel = "sms";
    send(userId: string, title: string, message: string, documentId?: string): Promise<boolean>;
}
