import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    // Use DIRECT_DATABASE_URL (non-pooler endpoint) for the runtime adapter.
    // Neon's transaction-mode pooler (DATABASE_URL) does NOT support Prisma
    // interactive transactions — it causes P2028 "unable to start a transaction".
    // The direct endpoint bypasses PgBouncer and supports the full Postgres
    // session protocol, including BEGIN/COMMIT.
    //
    // DIRECT_DATABASE_URL = pooler URL with "-pooler" removed from the hostname.
    // Falls back to DATABASE_URL for local dev where both point to the same DB.
    const connectionString =
      process.env['DIRECT_DATABASE_URL'] ??
      process.env['DATABASE_URL'] ??
      (() => { throw new Error('Neither DIRECT_DATABASE_URL nor DATABASE_URL is set'); })();

    const adapter = new PrismaPg({ connectionString });
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
