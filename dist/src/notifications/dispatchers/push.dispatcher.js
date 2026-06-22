"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PushDispatcher_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushDispatcher = void 0;
const common_1 = require("@nestjs/common");
let PushDispatcher = PushDispatcher_1 = class PushDispatcher {
    logger = new common_1.Logger(PushDispatcher_1.name);
    channel = 'push';
    async send(userId, title, message, documentId) {
        this.logger.log(`Sending PUSH notification to User [${userId}] | Title: ${title} | Body: ${message} (Document ID: ${documentId || 'None'})`);
        return true;
    }
};
exports.PushDispatcher = PushDispatcher;
exports.PushDispatcher = PushDispatcher = PushDispatcher_1 = __decorate([
    (0, common_1.Injectable)()
], PushDispatcher);
//# sourceMappingURL=push.dispatcher.js.map