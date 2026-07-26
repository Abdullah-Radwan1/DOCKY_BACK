import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Req,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';
import { BillingService } from './billing.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateCheckoutDto } from './dto/create-checkout.dto';

@Controller('billing')
@UseGuards(JwtAuthGuard)
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post('checkout')
  @HttpCode(HttpStatus.OK)
  async createCheckout(
    @Req() req: Request & { user: { id: string } },
    @Body() dto: CreateCheckoutDto,
  ) {
    return this.billingService.createCheckout(
      req.user.id,
      dto.plan,
      dto.billingCycle,
    );
  }

  @Get('subscription')
  async getSubscription(@Req() req: Request & { user: { id: string } }) {
    const subscription = await this.billingService.getSubscription(req.user.id);
    return { subscription };
  }

  @Delete('subscription')
  async cancelSubscription(@Req() req: Request & { user: { id: string } }) {
    return this.billingService.cancelSubscription(req.user.id);
  }
}
