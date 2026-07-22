import { NotificationDispatcher } from '../interfaces/notification-dispatcher.interface';
import { PrismaService } from '../../prisma/prisma.service';
export declare class EmailDispatcher implements NotificationDispatcher {
    private readonly prisma;
    private readonly logger;
    readonly channel = "email";
    private transporter;
    constructor(prisma: PrismaService);
    send(userId: string, title: string, message: string, documentId?: string): Promise<boolean>;
}
