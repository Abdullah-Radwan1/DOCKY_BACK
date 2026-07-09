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
const create_compliance_query_dto_1 = require("./dto/create-compliance-query.dto");
const create_analysis_request_dto_1 = require("./dto/create-analysis-request.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const optional_jwt_auth_guard_1 = require("../auth/guards/optional-jwt-auth.guard");
let ComplianceController = class ComplianceController {
    complianceService;
    constructor(complianceService) {
        this.complianceService = complianceService;
    }
    async analyzeDocument(dto, req, ip) {
        return this.complianceService.submitAnalysis({
            ...dto,
            userId: req.user?.id,
            ip,
        });
    }
    async getAnalysis(id) {
        return this.complianceService.getAnalysisResult(id);
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
};
exports.ComplianceController = ComplianceController;
__decorate([
    (0, common_1.UseGuards)(optional_jwt_auth_guard_1.OptionalJwtAuthGuard),
    (0, common_1.Post)('analyze'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_analysis_request_dto_1.CreateAnalysisRequestDto, Object, String]),
    __metadata("design:returntype", Promise)
], ComplianceController.prototype, "analyzeDocument", null);
__decorate([
    (0, common_1.UseGuards)(optional_jwt_auth_guard_1.OptionalJwtAuthGuard),
    (0, common_1.Get)('analysis/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComplianceController.prototype, "getAnalysis", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('query'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_compliance_query_dto_1.CreateComplianceQueryDto]),
    __metadata("design:returntype", Promise)
], ComplianceController.prototype, "createQuery", null);
__decorate([
    (0, common_1.UseGuards)(optional_jwt_auth_guard_1.OptionalJwtAuthGuard),
    (0, common_1.Get)('query/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComplianceController.prototype, "getQuery", null);
__decorate([
    (0, common_1.UseGuards)(optional_jwt_auth_guard_1.OptionalJwtAuthGuard),
    (0, common_1.Get)('document/:documentId'),
    __param(0, (0, common_1.Param)('documentId', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComplianceController.prototype, "getByDocument", null);
exports.ComplianceController = ComplianceController = __decorate([
    (0, common_1.Controller)('compliance'),
    __metadata("design:paramtypes", [compliance_service_1.ComplianceService])
], ComplianceController);
//# sourceMappingURL=compliance.controller.js.map