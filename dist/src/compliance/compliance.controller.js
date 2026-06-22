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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplianceController = void 0;
const common_1 = require("@nestjs/common");
const compliance_service_1 = require("./compliance.service");
const class_validator_1 = require("class-validator");
class CreateQueryDto {
    queryText;
    userId;
    documentId;
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateQueryDto.prototype, "queryText", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateQueryDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQueryDto.prototype, "documentId", void 0);
class CreateAIResponseDto {
    queryId;
    responseText;
    confidenceScore;
    metadata;
}
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAIResponseDto.prototype, "queryId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAIResponseDto.prototype, "responseText", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAIResponseDto.prototype, "confidenceScore", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateAIResponseDto.prototype, "metadata", void 0);
let ComplianceController = class ComplianceController {
    complianceService;
    constructor(complianceService) {
        this.complianceService = complianceService;
    }
    async createQuery(queryDto) {
        return this.complianceService.createQuery(queryDto);
    }
    async getQuery(id) {
        return this.complianceService.getQueryById(id);
    }
    async getByDocument(documentId) {
        return this.complianceService.getQueriesByDocument(documentId);
    }
    async addResponse(responseDto) {
        return this.complianceService.addAIResponse(responseDto);
    }
};
exports.ComplianceController = ComplianceController;
__decorate([
    (0, common_1.Post)('query'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateQueryDto]),
    __metadata("design:returntype", Promise)
], ComplianceController.prototype, "createQuery", null);
__decorate([
    (0, common_1.Get)('query/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComplianceController.prototype, "getQuery", null);
__decorate([
    (0, common_1.Get)('document/:documentId'),
    __param(0, (0, common_1.Param)('documentId', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComplianceController.prototype, "getByDocument", null);
__decorate([
    (0, common_1.Post)('response'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAIResponseDto]),
    __metadata("design:returntype", Promise)
], ComplianceController.prototype, "addResponse", null);
exports.ComplianceController = ComplianceController = __decorate([
    (0, common_1.Controller)('compliance'),
    __metadata("design:paramtypes", [compliance_service_1.ComplianceService])
], ComplianceController);
//# sourceMappingURL=compliance.controller.js.map