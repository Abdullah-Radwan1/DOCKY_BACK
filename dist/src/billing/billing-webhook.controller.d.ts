import { BillingService } from './billing.service';
export declare class BillingWebhookController {
    private readonly billingService;
    constructor(billingService: BillingService);
    handleWebhook(req: any, res: any, signature: string): Promise<void>;
}
