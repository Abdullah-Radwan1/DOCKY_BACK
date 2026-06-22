import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
export declare class SchedulerService {
    private readonly prisma;
    private readonly notificationsService;
    private readonly logger;
    constructor(prisma: PrismaService, notificationsService: NotificationsService);
    handleDailyCron(): Promise<void>;
    checkExpiringDocuments(): Promise<void>;
}
