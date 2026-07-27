import {
  Injectable,
  Logger,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { Environment, Paddle } from '@paddle/paddle-node-sdk';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
import { PlanType, BillingCycle } from '../generated/prisma/client.js';

@Injectable()
export class BillingService {
  private readonly logger = new Logger(BillingService.name);
  public readonly paddle: Paddle;

  constructor(
    private readonly prisma: PrismaService,
    private readonly notifications: NotificationsService,
  ) {
    const isSandbox = process.env.PADDLE_SANDBOX !== 'false';
    const apiKey = process.env.PADDLE_API_KEY || 'test_api_key';

    this.paddle = new Paddle(apiKey, {
      environment: isSandbox ? Environment.sandbox : Environment.production,
    });
  }

  private getPriceId(plan: string, billingCycle: string): string {
    const envKey = `PADDLE_${plan.toUpperCase()}_${billingCycle.toUpperCase()}_PRICE_ID`;
    const priceId =
      process.env[envKey] || process.env[envKey.replace('ELITE', 'ENTERPRISE')];
    if (!priceId) {
      throw new BadRequestException(
        `Price ID not found for ${plan} ${billingCycle}`,
      );
    }
    return priceId;
  }

  async createCheckout(userId: string, plan: string, billingCycle: string) {
    const user = await this.prisma.profile.findUnique({
      where: { id: userId },
    });
    if (!user) throw new NotFoundException('User not found');

    const priceId = this.getPriceId(plan, billingCycle);

    // Using Paddle.js directly on frontend is often easier via Custom Data.
    // However, if we want to create a transaction server-side:
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

  async syncCheckout(userId: string, transactionId: string) {
    this.logger.log(`Syncing checkout for user ${userId} with transaction ${transactionId}`);
    try {
      const transaction = await this.paddle.transactions.get(transactionId);
      
      // Safety check: verify transaction customData userId matches the logged-in user
      if (transaction.customData?.userId !== userId) {
        throw new BadRequestException('Transaction does not belong to this user.');
      }

      if (!transaction.subscriptionId) {
        throw new BadRequestException('No subscription associated with this transaction yet.');
      }

      const subscription = await this.paddle.subscriptions.get(transaction.subscriptionId);
      
      // Update subscription status in DB
      await this.handleSubscriptionActivatedOrUpdated(userId, subscription);

      return {
        success: true,
        plan: subscription.customData?.plan || 'Professional',
        status: subscription.status,
      };
    } catch (err) {
      this.logger.error(`Failed to sync checkout: ${err.message}`, err.stack);
      throw new BadRequestException(`Failed to sync checkout: ${err.message}`);
    }
  }

  async getSubscription(userId: string) {
    return this.prisma.paddleSubscription.findUnique({
      where: { userId },
    });
  }

  async cancelSubscription(userId: string) {
    const sub = await this.prisma.paddleSubscription.findUnique({
      where: { userId },
    });

    if (!sub || !sub.paddleSubscriptionId) {
      throw new BadRequestException('No active subscription found');
    }

    try {
      // Cancel at end of billing period (effectiveFrom: 'next_billing_period')
      await this.paddle.subscriptions.cancel(sub.paddleSubscriptionId, {
        effectiveFrom: 'next_billing_period',
      });
      return {
        message:
          'Subscription will be canceled at the end of the billing period.',
      };
    } catch (err) {
      this.logger.error('Failed to cancel subscription in Paddle', err);
      throw new BadRequestException('Failed to cancel subscription.');
    }
  }

  async handleWebhook(event: any) {
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
      // Fallback: try to find user by email
      try {
        const customer = await this.paddle.customers.get(data.customerId);
        if (customer && customer.email) {
          const user = await this.prisma.profile.findUnique({
            where: { email: customer.email },
          });
          if (user) userId = user.id;
        }
      } catch (e) {}
    }

    if (!userId) {
      this.logger.warn(
        'Webhook event missing userId in customData, and could not resolve via customerId.',
      );
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

  private async handleSubscriptionActivatedOrUpdated(
    userId: string,
    data: any,
  ) {
    const planName = data.customData?.plan || 'Professional';
    const cycleName = data.customData?.billingCycle || 'monthly';
    const plan =
      planName.toLowerCase() === 'elite'
        ? PlanType.Elite
        : PlanType.Professional;
    const cycle =
      cycleName.toLowerCase() === 'yearly'
        ? BillingCycle.yearly
        : BillingCycle.monthly;

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

      // Update user plan and reset usage
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
      // Send Congratulations Notification
      await this.notifications
        .createNotification({
          userId,
          title: 'Congratulations on your subscription!',
          message: `Your account has been upgraded to the ${planName} plan. Enjoy your new features!`,
          type: 'system_alert',
          deliveryChannel: 'email',
        })
        .catch((err) =>
          this.logger.error('Failed to send email notification:', err),
        );

      // Also send in-app
      await this.notifications
        .createNotification({
          userId,
          title: 'Subscription Activated 🚀',
          message: `Welcome to the ${planName} plan! Your usage quota has been reset.`,
          type: 'system_alert',
          deliveryChannel: 'in_app',
        })
        .catch((err) =>
          this.logger.error('Failed to send in-app notification:', err),
        );
    }
  }

  private async handleSubscriptionCanceled(userId: string, data: any) {
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
          data: { plan: PlanType.free },
        });
      }
    });
  }
}
