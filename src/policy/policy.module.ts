import { Module } from '@nestjs/common';
import { UsagePolicyService } from './usage-policy.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UsagePolicyService],
  exports: [UsagePolicyService],
})
export class PolicyModule {}
