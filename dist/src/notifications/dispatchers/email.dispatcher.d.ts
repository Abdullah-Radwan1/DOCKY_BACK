import { NotificationDispatcher } from '../interfaces/notification-dispatcher.interface';
export declare class EmailDispatcher implements NotificationDispatcher {
    private readonly logger;
    readonly channel = "email";
    send(userId: string, title: string, message: string, documentId?: string): Promise<boolean>;
}
