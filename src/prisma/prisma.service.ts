import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);
  private pool: Pool;

  constructor() {
    const connectionString =
      process.env['DIRECT_DATABASE_URL'] ??
      process.env['DATABASE_URL'] ??
      (() => { throw new Error('Neither DIRECT_DATABASE_URL nor DATABASE_URL is set'); })();

    const isPooler = connectionString.includes('-pooler.');
    if (isPooler && process.env.NODE_ENV === 'production') {
      console.warn(
        '⚠️ WARNING [PrismaService]: Connecting directly to a Neon pooler in production. ' +
        'This is highly likely to cause "Transaction API error: Unable to start a transaction in the given time" (P2028). ' +
        'Please ensure you have configured DIRECT_DATABASE_URL in Vercel to point to your non-pooled connection.'
      );
    }

    // Serverless functions scale horizontally. We limit the pool size per instance
    // to 2 in production to prevent connection limits from being exceeded.
    const pool = new Pool({
      connectionString,
      max: process.env.NODE_ENV === 'production' ? 2 : 10,
      idleTimeoutMillis: 10000,
      connectionTimeoutMillis: 5000,
    });

    const adapter = new PrismaPg(pool);
    super({ adapter });
    this.pool = pool;
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
    await this.pool.end();
  }
}
