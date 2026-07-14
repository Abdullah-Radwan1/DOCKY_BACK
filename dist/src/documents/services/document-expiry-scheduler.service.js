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
var DocumentExpirySchedulerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentExpirySchedulerService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../../prisma/prisma.service");
const REMINDER_INTERVAL_DAYS = 14;
let DocumentExpirySchedulerService = DocumentExpirySchedulerService_1 = class DocumentExpirySchedulerService {
    prisma;
    logger = new common_1.Logger(DocumentExpirySchedulerService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async sendExpiryReminders() {
        this.logger.log('Running bi-weekly expiration reminder cron job…');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const documents = await this.prisma.document.findMany({
            where: {
                uploadedBy: { not: null },
                expirationDate: { gte: today },
            },
            select: {
                id: true,
                originalFileName: true,
                expirationDate: true,
                createdAt: true,
                uploadedBy: true,
                uploader: {
                    select: {
                        id: true,
                        allowExpiryReminders: true,
                    },
                },
            },
        });
        let sent = 0;
        let skipped = 0;
        for (const doc of documents) {
            if (!doc.uploader?.allowExpiryReminders) {
                skipped++;
                continue;
            }
            const uploadDate = new Date(doc.createdAt);
            uploadDate.setHours(0, 0, 0, 0);
            const daysSinceUpload = Math.round((today.getTime() - uploadDate.getTime()) / (1000 * 60 * 60 * 24));
            const expirationDate = new Date(doc.expirationDate);
            expirationDate.setHours(0, 0, 0, 0);
            const daysUntilExpiry = Math.round((expirationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
            const isReminderDay = daysSinceUpload > 0 && daysSinceUpload % REMINDER_INTERVAL_DAYS === 0;
            const isExpirationDay = daysUntilExpiry === 0;
            if (!isReminderDay && !isExpirationDay) {
                skipped++;
                continue;
            }
            const title = isExpirationDay
                ? `Document expires today: "${doc.originalFileName}"`
                : `Upcoming expiration: "${doc.originalFileName}"`;
            const message = isExpirationDay
                ? `Your document "${doc.originalFileName}" expires today (${expirationDate.toDateString()}). Please renew or take action.`
                : `Your document "${doc.originalFileName}" will expire on ${expirationDate.toDateString()} (${daysUntilExpiry} day${daysUntilExpiry !== 1 ? 's' : ''} remaining). This is your bi-weekly reminder.`;
            const alreadySent = await this.prisma.notification.findFirst({
                where: {
                    documentId: doc.id,
                    userId: doc.uploadedBy,
                    type: 'expiration_warning',
                    createdAt: { gte: today },
                },
            });
            if (alreadySent) {
                this.logger.debug(`Skipping duplicate notification for document ${doc.id} — already sent today`);
                skipped++;
                continue;
            }
            await this.prisma.notification.create({
                data: {
                    userId: doc.uploadedBy,
                    documentId: doc.id,
                    type: 'expiration_warning',
                    deliveryChannel: 'in_app',
                    title,
                    message,
                    status: 'unread',
                },
            });
            this.logger.log(`Expiry reminder sent to user ${doc.uploadedBy} for document "${doc.originalFileName}" ` +
                `(${daysUntilExpiry} days left, day ${daysSinceUpload} since upload)`);
            sent++;
        }
        this.logger.log(`Expiry cron finished — ${sent} notification(s) sent, ${skipped} skipped.`);
    }
};
exports.DocumentExpirySchedulerService = DocumentExpirySchedulerService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DocumentExpirySchedulerService.prototype, "sendExpiryReminders", null);
exports.DocumentExpirySchedulerService = DocumentExpirySchedulerService = DocumentExpirySchedulerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DocumentExpirySchedulerService);
//# sourceMappingURL=document-expiry-scheduler.service.js.map