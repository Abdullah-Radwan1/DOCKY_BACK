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
exports.DocumentsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const pagination_query_dto_1 = require("../common/dto/pagination-query.dto");
const documents_service_1 = require("./documents.service");
const document_upload_service_1 = require("./services/document-upload.service");
const create_document_dto_1 = require("./dto/create-document.dto");
const update_document_dto_1 = require("./dto/update-document.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const public_decorator_1 = require("../auth/decorators/public.decorator");
const MAX_FILE_SIZE = 20 * 1024 * 1024;
let DocumentsController = class DocumentsController {
    documentsService;
    documentUploadService;
    constructor(documentsService, documentUploadService) {
        this.documentsService = documentsService;
        this.documentUploadService = documentUploadService;
    }
    static uploadInterceptor = (0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.memoryStorage)(),
        limits: { fileSize: MAX_FILE_SIZE },
        fileFilter: (_req, file, cb) => {
            if (file.mimetype !== 'application/pdf') {
                cb(new common_1.BadRequestException(`Only PDF files are accepted. Received: ${file.mimetype}`), false);
                return;
            }
            cb(null, true);
        },
    });
    async uploadForUser(file, req) {
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded. Include a PDF under the "file" field.');
        }
        return this.documentUploadService.uploadForUser(file, req.user.id);
    }
    async uploadForGuest(file, ip) {
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded. Include a PDF under the "file" field.');
        }
        return this.documentUploadService.uploadForGuest(file, ip);
    }
    async create(createDto, req) {
        return this.documentsService.createDocumentForUser({
            ...createDto,
            expirationDate: createDto.expirationDate
                ? new Date(createDto.expirationDate)
                : undefined,
        }, req.user.id);
    }
    async getAll(req, query) {
        return this.documentsService.getDocuments(req.user.id, query);
    }
    async get(id, req) {
        return this.documentsService.getDocumentByIdForUser(id, req.user.id);
    }
    async getStatus(id) {
        const status = await this.documentsService.getDocumentStatusOnly(id);
        return { status };
    }
    async update(id, updateDto, req) {
        return this.documentsService.updateDocumentForUser(id, req.user.id, {
            ...updateDto,
            expirationDate: updateDto.expirationDate
                ? new Date(updateDto.expirationDate)
                : undefined,
        });
    }
    async delete(id, req) {
        return this.documentsService.deleteDocumentForUser(id, req.user.id);
    }
};
exports.DocumentsController = DocumentsController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('upload'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UseInterceptors)(DocumentsController.uploadInterceptor),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "uploadForUser", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('guest-upload'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UseInterceptors)(DocumentsController.uploadInterceptor),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "uploadForGuest", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_document_dto_1.CreateDocumentDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, pagination_query_dto_1.PaginationQueryDto]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "getAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "get", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id/status'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "getStatus", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_document_dto_1.UpdateDocumentDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "delete", null);
exports.DocumentsController = DocumentsController = __decorate([
    (0, common_1.Controller)('documents'),
    __metadata("design:paramtypes", [documents_service_1.DocumentsService,
        document_upload_service_1.DocumentUploadService])
], DocumentsController);
//# sourceMappingURL=documents.controller.js.map