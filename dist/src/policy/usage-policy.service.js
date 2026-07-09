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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsagePolicyService = exports.LIMITS = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
exports.LIMITS = {
    GUEST: {
        UPLOADS: 1,
        ANALYSES: 1,
    },
    FREE: {
        UPLOADS: 3,
        ANALYSES: 3,
    },
    GROWTH: {
        UPLOADS: -1,
        ANALYSES: -1,
    },
    ENTERPRISE: {
        UPLOADS: -1,
        ANALYSES: -1,
    },
};
let UsagePolicyService = class UsagePolicyService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async enforceUploadLimit(userId, guestIp) {
        if (userId) {
            await this.enforceAuthenticatedUploadLimit(userId);
        }
        else if (guestIp) {
            await this.enforceGuestUploadLimit(guestIp);
        }
    }
    async enforceAuthenticatedUploadLimit(userId) {
        const profile = await this.prisma.profile.findUnique({
            where: { id: userId },
            include: { usageQuota: true },
        });
        if (!profile)
            throw new common_1.NotFoundException('User not found');
        const limit = exports.LIMITS[profile.plan.toUpperCase()]?.UPLOADS ?? exports.LIMITS.FREE.UPLOADS;
        if (limit === -1)
            return;
        const used = profile.usageQuota?.uploadsUsed ?? 0;
        if (used >= limit) {
            throw new common_1.ForbiddenException(`Upload limit reached. Your plan allows ${limit} uploads. You have used ${used}. Upgrade to continue.`);
        }
    }
    async enforceGuestUploadLimit(guestIp) {
        const quota = await this.prisma.usageQuota.findUnique({
            where: { guestId: guestIp },
        });
        const used = quota?.uploadsUsed ?? 0;
        if (used >= exports.LIMITS.GUEST.UPLOADS) {
            throw new common_1.NotFoundException('No more free uploads available for your IP. Sign up to continue.');
        }
    }
    async enforceAnalysisLimit(userId, guestIp) {
        if (userId) {
            await this.enforceAuthenticatedAnalysisLimit(userId);
        }
        else if (guestIp) {
            await this.enforceGuestAnalysisLimit(guestIp);
        }
        else {
            throw new common_1.NotFoundException('Resource not found.');
        }
    }
    async enforceAuthenticatedAnalysisLimit(userId) {
        const profile = await this.prisma.profile.findUnique({
            where: { id: userId },
            include: { usageQuota: true },
        });
        if (!profile)
            throw new common_1.NotFoundException('User not found');
        const limit = exports.LIMITS[profile.plan.toUpperCase()]?.ANALYSES ?? exports.LIMITS.FREE.ANALYSES;
        if (limit === -1)
            return;
        const used = profile.usageQuota?.analysesUsed ?? 0;
        if (used >= limit) {
            throw new common_1.ForbiddenException(`Analysis limit reached. Your ${profile.plan} plan allows ${limit} analyses. You have used ${used}. Upgrade to continue.`);
        }
    }
    async enforceGuestAnalysisLimit(guestIp) {
        const quota = await this.prisma.usageQuota.findUnique({
            where: { guestId: guestIp },
        });
        const used = quota?.analysesUsed ?? 0;
        if (used >= exports.LIMITS.GUEST.ANALYSES) {
            throw new common_1.NotFoundException('Resource not found.');
        }
    }
    async incrementUpload(userId, guestIp) {
        if (userId) {
            await this.prisma.usageQuota.upsert({
                where: { userId },
                create: { userId, uploadsUsed: 1, analysesUsed: 0 },
                update: { uploadsUsed: { increment: 1 } },
            });
        }
        else if (guestIp) {
            await this.prisma.usageQuota.upsert({
                where: { guestId: guestIp },
                create: { guestId: guestIp, uploadsUsed: 1, analysesUsed: 0 },
                update: { uploadsUsed: { increment: 1 } },
            });
        }
    }
    async incrementAnalysis(userId, guestIp) {
        if (userId) {
            await this.prisma.usageQuota.upsert({
                where: { userId },
                create: { userId, uploadsUsed: 0, analysesUsed: 1 },
                update: { analysesUsed: { increment: 1 } },
            });
        }
        else if (guestIp) {
            await this.prisma.usageQuota.upsert({
                where: { guestId: guestIp },
                create: { guestId: guestIp, uploadsUsed: 0, analysesUsed: 1 },
                update: { analysesUsed: { increment: 1 } },
            });
        }
    }
};
exports.UsagePolicyService = UsagePolicyService;
exports.UsagePolicyService = UsagePolicyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsagePolicyService);
//# sourceMappingURL=usage-policy.service.js.map