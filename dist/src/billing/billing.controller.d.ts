import { Request } from 'express';
import { BillingService } from './billing.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
export declare class BillingController {
    private readonly billingService;
    constructor(billingService: BillingService);
    createCheckout(req: Request & {
        user: {
            id: string;
        };
    }, dto: CreateCheckoutDto): Promise<{
        transactionId: string;
        checkoutUrl: string | null | undefined;
    }>;
    getSubscription(req: Request & {
        user: {
            id: string;
        };
    }): Promise<{
        subscription: {
            id: string;
            plan: import("src/generated/prisma").PlanType;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            userId: string;
            paddleCustomerId: string;
            paddleSubscriptionId: string;
            billingCycle: import("src/generated/prisma").BillingCycle;
            currentPeriodEnd: Date | null;
        } | null;
    }>;
    cancelSubscription(req: Request & {
        user: {
            id: string;
        };
    }): Promise<{
        message: string;
    }>;
}
