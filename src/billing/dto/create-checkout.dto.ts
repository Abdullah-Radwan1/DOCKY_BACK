import { IsIn, IsString } from 'class-validator';

export class CreateCheckoutDto {
  @IsString()
  @IsIn(['Professional', 'Elite'])
  plan: string;

  @IsString()
  @IsIn(['monthly', 'yearly'])
  billingCycle: string;
}
