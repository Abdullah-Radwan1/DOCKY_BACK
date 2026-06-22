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
var NotificationsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const email_dispatcher_1 = require("./dispatchers/email.dispatcher");
const sms_dispatcher_1 = require("./dispatchers/sms.dispatcher");
const push_dispatcher_1 = require("./dispatchers/push.dispatcher");
let NotificationsService = NotificationsService_1 = class NotificationsService {
    prisma;
    emailDispatcher;
    smsDispatcher;
    pushDispatcher;
    logger = new common_1.Logger(NotificationsService_1.name);
    dispatchers = new Map();
    constructor(prisma, emailDispatcher, smsDispatcher, pushDispatcher) {
        this.prisma = prisma;
        this.emailDispatcher = emailDispatcher;
        this.smsDispatcher = smsDispatcher;
        this.pushDispatcher = pushDispatcher;
        this.registerDispatcher(this.emailDispatcher);
        this.registerDispatcher(this.smsDispatcher);
        this.registerDispatcher(this.pushDispatcher);
    }
    registerDispatcher(dispatcher) {
        this.dispatchers.set(dispatcher.channel, dispatcher);
    }
    async createNotification(data) {
        const channel = data.deliveryChannel || 'in_app';
        const notification = await this.prisma.notification.create({
            data: {
                userId: data.userId,
                title: data.title,
                message: data.message,
                type: data.type,
                deliveryChannel: channel,
                documentId: data.documentId || null,
                status: 'unread',
            },
        });
        if (channel !== 'in_app') {
            const dispatcher = this.dispatchers.get(channel);
            if (dispatcher) {
                try {
                    const success = await dispatcher.send(data.userId, data.title, data.message, data.documentId);
                    if (success) {
                        return await this.prisma.notification.update({
                            where: { id: notification.id },
                            data: { sentAt: new Date() },
                        });
                    }
                }
                catch (error) {
                    this.logger.error(`Failed to dispatch notification via ${channel} to User [${data.userId}]:`, error);
                }
            }
            else {
                this.logger.warn(`No dispatcher registered for channel: ${channel}`);
            }
        }
        return notification;
    }
    async getUserNotifications(userId) {
        return this.prisma.notification.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async markAsRead(id) {
        try {
            return await this.prisma.notification.update({
                where: { id },
                data: { status: 'read' },
            });
        }
        catch {
            throw new common_1.NotFoundException(`Notification with ID ${id} not found`);
        }
    }
    async markAllAsRead(userId) {
        return this.prisma.notification.updateMany({
            where: { userId, status: 'unread' },
            data: { status: 'read' },
        });
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = NotificationsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        email_dispatcher_1.EmailDispatcher,
        sms_dispatcher_1.SmsDispatcher,
        push_dispatcher_1.PushDispatcher])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map