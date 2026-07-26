import { Controller, Post, Req, Res, Headers, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { BillingService } from './billing.service';

@Controller('billing/webhook')
export class BillingWebhookController {
  constructor(private readonly billingService: BillingService) {}

  @Post()
  async handleWebhook(
    @Req() req: any,
    @Res() res: any,
    @Headers('paddle-signature') signature: string,
  ) {
    if (!signature) {
      throw new UnauthorizedException('Missing Paddle signature');
    }

    const secretKey = process.env.PADDLE_WEBHOOK_SECRET || 'test_secret';

    try {
      // We must use req.rawBody or req.body depending on how NestJS parses it
      // paddle.webhooks.unmarshal takes the raw payload string and secret
      // NestJS by default doesn't expose raw body unless configured. 
      // Assuming body is JSON, paddle SDK supports unmarshaling from raw string.
      // We'll stringify if needed, but ideally we should have rawBody enabled.
      // For now, let's just pass the stringified body if rawBody is not available
      const rawPayload = req.rawBody ? req.rawBody.toString('utf8') : JSON.stringify(req.body);
      
      const eventData = await this.billingService.paddle.webhooks.unmarshal(rawPayload, secretKey, signature);
      
      if (eventData) {
        await this.billingService.handleWebhook(eventData);
      }
      
      res.status(HttpStatus.OK).send('OK');
    } catch (e) {
      console.error('Webhook signature verification failed:', e);
      res.status(HttpStatus.BAD_REQUEST).send('Webhook Error');
    }
  }
}
