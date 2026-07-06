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
var SchedulerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../prisma/prisma.service");
const notifications_service_1 = require("../notifications/notifications.service");
let SchedulerService = SchedulerService_1 = class SchedulerService {
    prisma;
    notificationsService;
    logger = new common_1.Logger(SchedulerService_1.name);
    constructor(prisma, notificationsService) {
        this.prisma = prisma;
        this.notificationsService = notificationsService;
    }
    async handleDailyCron() {
        this.logger.log('Executing daily cron job to check for expiring documents...');
        await this.checkExpiringDocuments();
    }
    async checkExpiringDocuments() {
        const thresholds = [30, 14, 7, 1];
        const today = new Date();
        for (const days of thresholds) {
            const targetDate = new Date();
            targetDate.setDate(today.getDate() + days);
            const startOfDay = new Date(targetDate);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(targetDate);
            endOfDay.setHours(23, 59, 59, 999);
            this.logger.log(`Scanning documents expiring between ${startOfDay.toISOString()} and ${endOfDay.toISOString()} (in ${days} days)...`);
            const expiringDocuments = await this.prisma.document.findMany({
                where: {
                    expirationDate: {
                        gte: startOfDay,
                        lte: endOfDay,
                    },
                    uploadedBy: { not: null },
                },
            });
            this.logger.log(`Found ${expiringDocuments.length} documents expiring in ${days} days.`);
            for (const doc of expiringDocuments) {
                const reminderMessage = `Your document "${doc.originalFileName}" is expiring in ${days} day${days === 1 ? '' : 's'} on ${doc.expirationDate?.toLocaleDateString()}.`;
                const existingNotification = await this.prisma.notification.findFirst({
                    where: {
                        userId: doc.uploadedBy ?? '',
                        documentId: doc.id,
                        type: 'expiration_warning',
                        message: { contains: `expiring in ${days} day` },
                    },
                });
                if (!existingNotification) {
                    this.logger.log(`Triggering warning for document "${doc.originalFileName}" (ID: ${doc.id}) expiring in ${days} days.`);
                    await this.notificationsService.createNotification({
                        userId: doc.uploadedBy ?? '',
                        title: 'Document Expiration Warning',
                        message: reminderMessage,
                        type: 'expiration_warning',
                        deliveryChannel: 'in_app',
                        documentId: doc.id,
                    });
                    await this.notificationsService.createNotification({
                        userId: doc.uploadedBy ?? '',
                        title: 'Document Expiration Warning',
                        message: reminderMessage,
                        type: 'expiration_warning',
                        deliveryChannel: 'email',
                        documentId: doc.id,
                    });
                }
                else {
                    this.logger.log(`Skipped. Warning already sent for document "${doc.originalFileName}" at ${days}-day threshold.`);
                }
            }
        }
        const startOfToday = new Date(today);
        startOfToday.setHours(0, 0, 0, 0);
        this.logger.log('Scanning for already-expired documents...');
        const expiredDocuments = await this.prisma.document.findMany({
            where: {
                expirationDate: { lt: startOfToday },
                uploadedBy: { not: null },
            },
        });
        this.logger.log(`Found ${expiredDocuments.length} already-expired documents.`);
        for (const doc of expiredDocuments) {
            const expiredMessage = `Your document "${doc.originalFileName}" expired on ${doc.expirationDate?.toLocaleDateString()}. Please renew or archive it.`;
            const existingExpiredNotif = await this.prisma.notification.findFirst({
                where: {
                    userId: doc.uploadedBy ?? '',
                    documentId: doc.id,
                    type: 'expiration_warning',
                    message: { contains: 'expired on' },
                },
            });
            if (!existingExpiredNotif) {
                this.logger.log(`Triggering expired-document notification for "${doc.originalFileName}" (ID: ${doc.id}).`);
                await this.notificationsService.createNotification({
                    userId: doc.uploadedBy ?? '',
                    title: 'Document Has Expired',
                    message: expiredMessage,
                    type: 'expiration_warning',
                    deliveryChannel: 'in_app',
                    documentId: doc.id,
                });
                await this.notificationsService.createNotification({
                    userId: doc.uploadedBy ?? '',
                    title: 'Document Has Expired',
                    message: expiredMessage,
                    type: 'expiration_warning',
                    deliveryChannel: 'email',
                    documentId: doc.id,
                });
            }
            else {
                this.logger.log(`Skipped. Expired notification already sent for "${doc.originalFileName}".`);
            }
        }
    }
};
exports.SchedulerService = SchedulerService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchedulerService.prototype, "handleDailyCron", null);
exports.SchedulerService = SchedulerService = SchedulerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notifications_service_1.NotificationsService])
], SchedulerService);
//# sourceMappingURL=scheduler.service.js.map