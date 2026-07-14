import { PrismaService } from '../../prisma/prisma.service';
export declare class DocumentExpirySchedulerService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    sendExpiryReminders(): Promise<void>;
}
