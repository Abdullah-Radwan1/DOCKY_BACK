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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(data) {
        return this.prisma.profile.create({
            data: {
                email: data.email,
                fullName: data.fullName,
                avatarUrl: data.avatarUrl,
                role: data.role,
            },
        });
    }
    async getUserById(id) {
        const profile = await this.prisma.profile.findUnique({
            where: { id },
        });
        if (!profile) {
            throw new common_1.NotFoundException(`User profile with ID ${id} not found`);
        }
        return profile;
    }
    async updateUser(id, data) {
        try {
            return await this.prisma.profile.update({
                where: { id },
                data,
            });
        }
        catch {
            throw new common_1.NotFoundException(`User profile with ID ${id} not found to update`);
        }
    }
    async deleteUser(id) {
        try {
            return await this.prisma.profile.delete({
                where: { id },
            });
        }
        catch {
            throw new common_1.NotFoundException(`User profile with ID ${id} not found to delete`);
        }
    }
    async getMe(userId) {
        const profile = await this.prisma.profile.findUnique({
            where: { id: userId },
        });
        if (!profile) {
            throw new common_1.NotFoundException('User profile not found');
        }
        return {
            id: profile.id,
            email: profile.email,
            full_name: profile.fullName,
            avatar_url: profile.avatarUrl,
            role: profile.role,
            created_at: profile.createdAt,
            updated_at: profile.updatedAt,
            allow_email_notifications: profile.allowEmailNotifications,
            allow_expiry_reminders: profile.allowExpiryReminders,
            allow_risk_alerts: profile.allowRiskAlerts,
            allow_analysis_alerts: profile.allowAnalysisAlerts,
        };
    }
    async updateMe(userId, dto) {
        const updated = await this.prisma.profile.update({
            where: { id: userId },
            data: {
                ...(dto.fullName !== undefined && { fullName: dto.fullName }),
                ...(dto.allowEmailNotifications !== undefined && {
                    allowEmailNotifications: dto.allowEmailNotifications,
                }),
                ...(dto.allowExpiryReminders !== undefined && {
                    allowExpiryReminders: dto.allowExpiryReminders,
                }),
                ...(dto.allowRiskAlerts !== undefined && {
                    allowRiskAlerts: dto.allowRiskAlerts,
                }),
                ...(dto.allowAnalysisAlerts !== undefined && {
                    allowAnalysisAlerts: dto.allowAnalysisAlerts,
                }),
            },
        });
        return {
            id: updated.id,
            email: updated.email,
            full_name: updated.fullName,
            avatar_url: updated.avatarUrl,
            role: updated.role,
            created_at: updated.createdAt,
            updated_at: updated.updatedAt,
            allow_email_notifications: updated.allowEmailNotifications,
            allow_expiry_reminders: updated.allowExpiryReminders,
            allow_risk_alerts: updated.allowRiskAlerts,
            allow_analysis_alerts: updated.allowAnalysisAlerts,
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map