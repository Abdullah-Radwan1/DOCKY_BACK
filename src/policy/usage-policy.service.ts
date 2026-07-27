import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PlanType } from '../generated/prisma/client.js';

export const LIMITS = {
  GUEST: {
    UPLOADS: 1,
    ANALYSES: 1,
  },
  FREE: {
    UPLOADS: 3,
    ANALYSES: 3,
  },
  PROFESSIONAL: {
    UPLOADS: 10, // Unlimited
    ANALYSES: 10,
  },
  ELITE: {
    UPLOADS: 50,
    ANALYSES: 50,
  },
};

@Injectable()
export class UsagePolicyService {
  constructor(private readonly prisma: PrismaService) {}

  // ── Upload Limits ─────────────────────────────────────────────────────────

  /**
   * Enforce upload limit for an authenticated user or a guest (by IP address).
   *
   * - Authenticated users: limited by their plan (free = 3, growth/enterprise = unlimited)
   * - Guests (identified by IP): limited to 1 upload total
   *
   * Guests receive a 404 NotFoundException to avoid leaking limit information.
   */
  async enforceUploadLimit(userId?: string, guestIp?: string): Promise<void> {
    if (userId) {
      await this.enforceAuthenticatedUploadLimit(userId);
    } else if (guestIp) {
      await this.enforceGuestUploadLimit(guestIp);
    }
    // If neither is provided, we just allow it (edge case — shouldn't happen).
  }

  private async enforceAuthenticatedUploadLimit(userId: string): Promise<void> {
    const profile = await this.prisma.profile.findUnique({
      where: { id: userId },
      include: { usageQuota: true },
    });
    if (!profile) throw new NotFoundException('User not found');

    const limit =
      LIMITS[profile.plan.toUpperCase() as keyof typeof LIMITS]?.UPLOADS ??
      LIMITS.FREE.UPLOADS;
    if (limit === -1) return; // Unlimited plan

    const used = profile.usageQuota?.uploadsUsed ?? 0;
    if (used >= limit) {
      throw new ForbiddenException(
        `Upload limit reached. Your plan allows ${limit} uploads. You have used ${used}. Upgrade to continue.`,
      );
    }
  }

  private async enforceGuestUploadLimit(guestIp: string): Promise<void> {
    const quota = await this.prisma.usageQuota.findUnique({
      where: { guestId: guestIp },
    });
    const used = quota?.uploadsUsed ?? 0;
    if (used >= LIMITS.GUEST.UPLOADS) {
      throw new NotFoundException(
        'No more free uploads available for your IP. Sign up to continue.',
      );
    }
  }

  // ── Analysis Limits ───────────────────────────────────────────────────────

  /**
   * Enforce analysis limit for an authenticated user or a guest (by IP address).
   *
   * - Authenticated users: limited by plan
   * - Guests: 1 free analysis; subsequent attempts return 404 Not Found
   */
  async enforceAnalysisLimit(userId?: string, guestIp?: string): Promise<void> {
    if (userId) {
      await this.enforceAuthenticatedAnalysisLimit(userId);
    } else if (guestIp) {
      await this.enforceGuestAnalysisLimit(guestIp);
    } else {
      throw new NotFoundException('Resource not found.');
    }
  }

  private async enforceAuthenticatedAnalysisLimit(
    userId: string,
  ): Promise<void> {
    const profile = await this.prisma.profile.findUnique({
      where: { id: userId },
      include: { usageQuota: true },
    });
    if (!profile) throw new NotFoundException('User not found');

    const limit =
      LIMITS[profile.plan.toUpperCase() as keyof typeof LIMITS]?.ANALYSES ??
      LIMITS.FREE.ANALYSES;
    if (limit === -1) return; // Unlimited plan

    const used = profile.usageQuota?.analysesUsed ?? 0;
    if (used >= limit) {
      throw new ForbiddenException(
        `Analysis limit reached. Your ${profile.plan} plan allows ${limit} analyses. You have used ${used}. Upgrade to continue.`,
      );
    }
  }

  private async enforceGuestAnalysisLimit(guestIp: string): Promise<void> {
    const quota = await this.prisma.usageQuota.findUnique({
      where: { guestId: guestIp },
    });
    const used = quota?.analysesUsed ?? 0;
    if (used >= LIMITS.GUEST.ANALYSES) {
      // Return 404 so guests don't know they've hit a limit (per user preference)
      throw new NotFoundException('Resource not found.');
    }
  }

  // ── Increment Counters ────────────────────────────────────────────────────

  /** Increment the upload counter for a user or guest IP. */
  async incrementUpload(userId?: string, guestIp?: string): Promise<void> {
    if (userId) {
      await this.prisma.usageQuota.upsert({
        where: { userId },
        create: { userId, uploadsUsed: 1, analysesUsed: 0 },
        update: { uploadsUsed: { increment: 1 } },
      });
    } else if (guestIp) {
      await this.prisma.usageQuota.upsert({
        where: { guestId: guestIp },
        create: { guestId: guestIp, uploadsUsed: 1, analysesUsed: 0 },
        update: { uploadsUsed: { increment: 1 } },
      });
    }
  }

  /** Increment the analysis counter for a user or guest IP. */
  async incrementAnalysis(userId?: string, guestIp?: string): Promise<void> {
    if (userId) {
      await this.prisma.usageQuota.upsert({
        where: { userId },
        create: { userId, uploadsUsed: 0, analysesUsed: 1 },
        update: { analysesUsed: { increment: 1 } },
      });
    } else if (guestIp) {
      await this.prisma.usageQuota.upsert({
        where: { guestId: guestIp },
        create: { guestId: guestIp, uploadsUsed: 0, analysesUsed: 1 },
        update: { analysesUsed: { increment: 1 } },
      });
    }
  }
}
