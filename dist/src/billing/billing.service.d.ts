import { Paddle } from '@paddle/paddle-node-sdk';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
import { PlanType, BillingCycle } from '../generated/prisma';
export declare class BillingService {
    private readonly prisma;
    private readonly notifications;
    private readonly logger;
    readonly paddle: Paddle;
    constructor(prisma: PrismaService, notifications: NotificationsService);
    private getPriceId;
    createCheckout(userId: string, plan: string, billingCycle: string): Promise<{
        transactionId: string;
        checkoutUrl: string | null | undefined;
    }>;
    syncCheckout(userId: string, transactionId: string): Promise<{
        success: boolean;
        plan: any;
        status: import("@paddle/paddle-node-sdk").SubscriptionStatus;
    }>;
    getSubscription(userId: string): Promise<{
        plan: PlanType;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: string;
        billingCycle: BillingCycle;
        paddleSubscriptionId: string;
        paddleCustomerId: string;
        currentPeriodEnd: Date | null;
    } | null>;
    cancelSubscription(userId: string): Promise<{
        message: string;
    }>;
    handleWebhook(event: any): Promise<void>;
    private handleSubscriptionActivatedOrUpdated;
    private handleSubscriptionCanceled;
}
