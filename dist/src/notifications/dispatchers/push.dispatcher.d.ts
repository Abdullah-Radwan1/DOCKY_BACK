import { NotificationDispatcher } from '../interfaces/notification-dispatcher.interface';
export declare class PushDispatcher implements NotificationDispatcher {
    private readonly logger;
    readonly channel = "push";
    send(userId: string, title: string, message: string, documentId?: string): Promise<boolean>;
}
