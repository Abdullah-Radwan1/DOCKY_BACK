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
exports.ActivityLogService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ActivityLogService = class ActivityLogService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createLog(data) {
        return this.prisma.activityLog.create({
            data: {
                organizationId: data.userId ?? '00000000-0000-0000-0000-000000000000',
                userId: data.userId || null,
                action: data.action,
                entityType: data.entityType || null,
                entityId: data.entityId || null,
                metadata: data.metadata || undefined,
            },
        });
    }
    async getLogById(id) {
        const log = await this.prisma.activityLog.findUnique({
            where: { id },
            include: {
                organization: true,
                user: true,
            },
        });
        if (!log) {
            throw new common_1.NotFoundException(`Activity log with ID ${id} not found`);
        }
        return log;
    }
    async getLogsByUser(userId) {
        return this.prisma.activityLog.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getLogsByEntity(entityType, entityId) {
        return this.prisma.activityLog.findMany({
            where: { entityType, entityId },
            include: {
                user: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
};
exports.ActivityLogService = ActivityLogService;
exports.ActivityLogService = ActivityLogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ActivityLogService);
//# sourceMappingURL=activity-log.service.js.map