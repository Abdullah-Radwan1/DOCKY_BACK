export interface NotificationDispatcher {
    readonly channel: string;
    send(userId: string, title: string, message: string, documentId?: string): Promise<boolean>;
}
