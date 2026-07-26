"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const notifications_service_1 = require("../notifications/notifications.service");
const mailer_service_1 = require("./mailer.service");
const bcrypt = __importStar(require("bcryptjs"));
const crypto = __importStar(require("crypto"));
let AuthService = class AuthService {
    prisma;
    jwtService;
    notificationsService;
    mailerService;
    constructor(prisma, jwtService, notificationsService, mailerService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.notificationsService = notificationsService;
        this.mailerService = mailerService;
    }
    async register(dto) {
        const existing = await this.prisma.profile.findUnique({
            where: { email: dto.email },
        });
        if (existing) {
            throw new common_1.ConflictException('An account with this email already exists.');
        }
        const hash = await bcrypt.hash(dto.password, 12);
        const profile = await this.prisma.profile.create({
            data: {
                email: dto.email,
                fullName: dto.fullName ?? null,
                passwordHash: hash,
            },
            include: {
                usageQuota: true,
            },
        });
        void this.notificationsService
            .createNotification({
            userId: profile.id,
            title: 'Welcome to DOCKY! 🎉',
            message: `Hi ${profile.fullName ?? profile.email}! Your account is ready. Start by uploading your first compliance document.`,
            type: 'system_alert',
            deliveryChannel: 'in_app',
        })
            .catch(() => {
        });
        return this.buildResponse(profile);
    }
    async login(dto) {
        const profile = await this.prisma.profile.findUnique({
            where: { email: dto.email },
            include: { usageQuota: true },
        });
        if (!profile || !profile.passwordHash) {
            throw new common_1.UnauthorizedException('Invalid email or password.');
        }
        const valid = await bcrypt.compare(dto.password, profile.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Invalid email or password.');
        }
        return this.buildResponse(profile);
    }
    async getMe(userId) {
        const profile = await this.prisma.profile.findUnique({
            where: { id: userId },
            include: { usageQuota: true },
        });
        if (!profile) {
            throw new common_1.UnauthorizedException('User not found.');
        }
        return this.sanitize(profile);
    }
    async changePassword(userId, dto) {
        if (dto.newPassword !== dto.confirmPassword) {
            throw new common_1.BadRequestException('New password and confirmation do not match.');
        }
        const profile = await this.prisma.profile.findUnique({
            where: { id: userId },
        });
        if (!profile || !profile.passwordHash) {
            throw new common_1.UnauthorizedException('User not found or no password set.');
        }
        const valid = await bcrypt.compare(dto.oldPassword, profile.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect.');
        }
        if (dto.newPassword === dto.oldPassword) {
            throw new common_1.BadRequestException('New password must be different from the current password.');
        }
        const newHash = await bcrypt.hash(dto.newPassword, 12);
        await this.prisma.profile.update({
            where: { id: userId },
            data: { passwordHash: newHash },
        });
        return { message: 'Password updated successfully.' };
    }
    async forgotPassword(dto) {
        const genericResponse = {
            message: "If an account exists with this email, you'll receive password reset instructions shortly.",
        };
        const profile = await this.prisma.profile.findUnique({
            where: { email: dto.email },
        });
        if (!profile) {
            return genericResponse;
        }
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
        const recentRequests = await this.prisma.passwordResetToken.count({
            where: {
                userId: profile.id,
                createdAt: { gte: oneHourAgo },
            },
        });
        if (recentRequests >= 3) {
            return genericResponse;
        }
        const rawToken = crypto.randomBytes(32).toString('hex');
        const tokenHash = crypto
            .createHash('sha256')
            .update(rawToken)
            .digest('hex');
        const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
        await this.prisma.passwordResetToken.updateMany({
            where: { userId: profile.id, usedAt: null },
            data: { usedAt: new Date() },
        });
        await this.prisma.passwordResetToken.create({
            data: {
                userId: profile.id,
                token: tokenHash,
                expiresAt,
            },
        });
        const frontendUrl = process.env.FRONTEND_URL ?? 'http://localhost:5173';
        const resetUrl = `${frontendUrl}/reset-password?token=${rawToken}`;
        void this.mailerService
            .sendPasswordResetEmail(profile.email, resetUrl)
            .catch(() => { });
        return genericResponse;
    }
    async resetPassword(dto) {
        if (dto.newPassword !== dto.confirmPassword) {
            throw new common_1.BadRequestException('New password and confirmation do not match.');
        }
        const tokenHash = crypto
            .createHash('sha256')
            .update(dto.token)
            .digest('hex');
        const tokenRecord = await this.prisma.passwordResetToken.findUnique({
            where: { token: tokenHash },
        });
        if (!tokenRecord) {
            throw new common_1.NotFoundException('Invalid or expired reset token.');
        }
        if (tokenRecord.usedAt || tokenRecord.expiresAt < new Date()) {
            throw new common_1.BadRequestException('Reset token has expired or already been used.');
        }
        const newHash = await bcrypt.hash(dto.newPassword, 12);
        await this.prisma.$transaction([
            this.prisma.profile.update({
                where: { id: tokenRecord.userId },
                data: { passwordHash: newHash },
            }),
            this.prisma.passwordResetToken.update({
                where: { id: tokenRecord.id },
                data: { usedAt: new Date() },
            }),
        ]);
        return { message: 'Password has been reset successfully.' };
    }
    buildResponse(profile) {
        const token = this.jwtService.sign({
            sub: profile.id,
            email: profile.email,
            role: profile.role,
        });
        return {
            token,
            user: this.sanitize(profile),
        };
    }
    sanitize(profile) {
        return {
            id: profile.id,
            email: profile.email,
            full_name: profile.fullName,
            role: profile.role,
            allow_email_notifications: profile.allowEmailNotifications ?? true,
            allow_expiry_reminders: profile.allowExpiryReminders ?? true,
            allow_risk_alerts: profile.allowRiskAlerts ?? true,
            allow_analysis_alerts: profile.allowAnalysisAlerts ?? true,
            plan: profile.plan,
            usage_quota: profile.usageQuota,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        notifications_service_1.NotificationsService,
        mailer_service_1.MailerService])
], AuthService);
//# sourceMappingURL=auth.service.js.map