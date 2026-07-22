"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BillingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = void 0;
const common_1 = require("@nestjs/common");
const paddle_node_sdk_1 = require("@paddle/paddle-node-sdk");
const prisma_service_1 = require("../prisma/prisma.service");
const notifications_service_1 = require("../notifications/notifications.service");
const prisma_1 = require("../generated/prisma");
let BillingService = BillingService_1 = class BillingService {
    prisma;
    notifications;
    logger = new common_1.Logger(BillingService_1.name);
    paddle;
    constructor(prisma, notifications) {
        this.prisma = prisma;
        this.notifications = notifications;
        const isSandbox = process.env.PADDLE_SANDBOX !== 'false';
        const apiKey = process.env.PADDLE_API_KEY || 'test_api_key';
        this.paddle = new paddle_node_sdk_1.Paddle(apiKey, {
            environment: isSandbox ? paddle_node_sdk_1.Environment.sandbox : paddle_node_sdk_1.Environment.production,
        });
    }
    getPriceId(plan, billingCycle) {
        const envKey = `PADDLE_${plan.toUpperCase()}_${billingCycle.toUpperCase()}_PRICE_ID`;
        const priceId = process.env[envKey] || process.env[envKey.replace('ELITE', 'ENTERPRISE')];
        if (!priceId) {
            throw new common_1.BadRequestException(`Price ID not found for ${plan} ${billingCycle}`);
        }
        return priceId;
    }
    async createCheckout(userId, plan, billingCycle) {
        const user = await this.prisma.profile.findUnique({
            where: { id: userId },
        });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const priceId = this.getPriceId(plan, billingCycle);
        const transaction = await this.paddle.transactions.create({
            items: [{ priceId, quantity: 1 }],
            customData: {
                userId,
                plan,
                billingCycle,
            },
        });
        return {
            transactionId: transaction.id,
            checkoutUrl: transaction.checkout?.url,
        };
    }
    async syncCheckout(userId, transactionId) {
        this.logger.log(`Syncing checkout for user ${userId} with transaction ${transactionId}`);
        try {
            const transaction = await this.paddle.transactions.get(transactionId);
            if (transaction.customData?.userId !== userId) {
                throw new common_1.BadRequestException('Transaction does not belong to this user.');
            }
            if (!transaction.subscriptionId) {
                throw new common_1.BadRequestException('No subscription associated with this transaction yet.');
            }
            const subscription = await this.paddle.subscriptions.get(transaction.subscriptionId);
            await this.handleSubscriptionActivatedOrUpdated(userId, subscription);
            return {
                success: true,
                plan: subscription.customData?.plan || 'Professional',
                status: subscription.status,
            };
        }
        catch (err) {
            this.logger.error(`Failed to sync checkout: ${err.message}`, err.stack);
            throw new common_1.BadRequestException(`Failed to sync checkout: ${err.message}`);
        }
    }
    async getSubscription(userId) {
        return this.prisma.paddleSubscription.findUnique({
            where: { userId },
        });
    }
    async cancelSubscription(userId) {
        const sub = await this.prisma.paddleSubscription.findUnique({
            where: { userId },
        });
        if (!sub || !sub.paddleSubscriptionId) {
            throw new common_1.BadRequestException('No active subscription found');
        }
        try {
            await this.paddle.subscriptions.cancel(sub.paddleSubscriptionId, {
                effectiveFrom: 'next_billing_period',
            });
            return {
                message: 'Subscription will be canceled at the end of the billing period.',
            };
        }
        catch (err) {
            this.logger.error('Failed to cancel subscription in Paddle', err);
            throw new common_1.BadRequestException('Failed to cancel subscription.');
        }
    }
    async handleWebhook(event) {
        if (!event) {
            this.logger.warn('Received empty webhook event object.');
            return;
        }
        this.logger.log(`Received Paddle webhook event: ${event.eventType}`);
        const data = event.data;
        if (!data) {
            this.logger.warn('Webhook event missing data payload.');
            return;
        }
        const customData = data.customData || {};
        let userId = customData.userId;
        if (!userId && data.customerId) {
            try {
                const customer = await this.paddle.customers.get(data.customerId);
                if (customer && customer.email) {
                    const user = await this.prisma.profile.findUnique({
                        where: { email: customer.email },
                    });
                    if (user)
                        userId = user.id;
                }
            }
            catch (e) { }
        }
        if (!userId) {
            this.logger.warn('Webhook event missing userId in customData, and could not resolve via customerId.');
            return;
        }
        switch (event.eventType) {
            case 'subscription.activated':
            case 'subscription.updated':
                await this.handleSubscriptionActivatedOrUpdated(userId, data);
                break;
            case 'subscription.canceled':
            case 'subscription.past_due':
                await this.handleSubscriptionCanceled(userId, data);
                break;
        }
    }
    async handleSubscriptionActivatedOrUpdated(userId, data) {
        const planName = data.customData?.plan || 'Professional';
        const cycleName = data.customData?.billingCycle || 'monthly';
        const plan = planName.toLowerCase() === 'elite'
            ? prisma_1.PlanType.Elite
            : prisma_1.PlanType.Professional;
        const cycle = cycleName.toLowerCase() === 'yearly'
            ? prisma_1.BillingCycle.yearly
            : prisma_1.BillingCycle.monthly;
        await this.prisma.$transaction(async (tx) => {
            await tx.paddleSubscription.upsert({
                where: { userId },
                create: {
                    userId,
                    paddleCustomerId: data.customerId,
                    paddleSubscriptionId: data.id,
                    plan: plan,
                    billingCycle: cycle,
                    status: data.status,
                    currentPeriodEnd: data.currentBillingPeriod?.endsAt
                        ? new Date(data.currentBillingPeriod.endsAt)
                        : null,
                },
                update: {
                    paddleSubscriptionId: data.id,
                    paddleCustomerId: data.customerId,
                    plan: plan,
                    billingCycle: cycle,
                    status: data.status,
                    currentPeriodEnd: data.currentBillingPeriod?.endsAt
                        ? new Date(data.currentBillingPeriod.endsAt)
                        : null,
                },
            });
            await tx.profile.update({
                where: { id: userId },
                data: { plan: plan },
            });
            await tx.usageQuota.upsert({
                where: { userId },
                create: { userId, uploadsUsed: 0, analysesUsed: 0 },
                update: { uploadsUsed: 0, analysesUsed: 0 },
            });
        });
        if (data.status === 'active' || data.status === 'trialing') {
            await this.notifications
                .createNotification({
                userId,
                title: 'Congratulations on your subscription!',
                message: `Your account has been upgraded to the ${planName} plan. Enjoy your new features!`,
                type: 'system_alert',
                deliveryChannel: 'email',
            })
                .catch((err) => this.logger.error('Failed to send email notification:', err));
            await this.notifications
                .createNotification({
                userId,
                title: 'Subscription Activated 🚀',
                message: `Welcome to the ${planName} plan! Your usage quota has been reset.`,
                type: 'system_alert',
                deliveryChannel: 'in_app',
            })
                .catch((err) => this.logger.error('Failed to send in-app notification:', err));
        }
    }
    async handleSubscriptionCanceled(userId, data) {
        await this.prisma.$transaction(async (tx) => {
            await tx.paddleSubscription.updateMany({
                where: { userId },
                data: {
                    status: data.status,
                    currentPeriodEnd: data.currentBillingPeriod?.endsAt
                        ? new Date(data.currentBillingPeriod.endsAt)
                        : null,
                },
            });
            if (data.status === 'canceled') {
                await tx.profile.update({
                    where: { id: userId },
                    data: { plan: prisma_1.PlanType.free },
                });
            }
        });
    }
};
exports.BillingService = BillingService;
exports.BillingService = BillingService = BillingService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notifications_service_1.NotificationsService])
], BillingService);
//# sourceMappingURL=billing.service.js.map