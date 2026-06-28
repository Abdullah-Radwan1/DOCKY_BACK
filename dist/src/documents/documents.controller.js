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
const documents_service_1 = require("./documents.service");
const document_upload_service_1 = require("./services/document-upload.service");
const create_document_dto_1 = require("./dto/create-document.dto");
const update_document_dto_1 = require("./dto/update-document.dto");
const upload_document_dto_1 = require("./dto/upload-document.dto");
const MAX_FILE_SIZE = 20 * 1024 * 1024;
let DocumentsController = class DocumentsController {
    documentsService;
    documentUploadService;
    constructor(documentsService, documentUploadService) {
        this.documentsService = documentsService;
        this.documentUploadService = documentUploadService;
    }
    async upload(file, body) {
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded. Include a PDF under the "file" field.');
        }
        return this.documentUploadService.upload(file, body.organizationId, body.uploadedBy);
    }
    async create(createDto) {
        return this.documentsService.createDocument({
            ...createDto,
            expirationDate: createDto.expirationDate
                ? new Date(createDto.expirationDate)
                : undefined,
        });
    }
    async get(id) {
        return this.documentsService.getDocumentById(id);
    }
    async getByOrg(organizationId) {
        return this.documentsService.getDocumentsByOrganization(organizationId);
    }
    async update(id, updateDto) {
        return this.documentsService.updateDocument(id, {
            ...updateDto,
            expirationDate: updateDto.expirationDate
                ? new Date(updateDto.expirationDate)
                : undefined,
        });
    }
    async delete(id) {
        return this.documentsService.deleteDocument(id);
    }
};
exports.DocumentsController = DocumentsController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.memoryStorage)(),
        limits: { fileSize: MAX_FILE_SIZE },
        fileFilter: (_req, file, cb) => {
            if (file.mimetype !== 'application/pdf') {
                cb(new common_1.BadRequestException(`Only PDF files are accepted. Received: ${file.mimetype}`), false);
            }
            else {
                cb(null, true);
            }
        },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, upload_document_dto_1.UploadDocumentDto]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "upload", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_document_dto_1.CreateDocumentDto]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('organization/:organizationId'),
    __param(0, (0, common_1.Param)('organizationId', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "getByOrg", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_document_dto_1.UpdateDocumentDto]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "delete", null);
exports.DocumentsController = DocumentsController = __decorate([
    (0, common_1.Controller)('documents'),
    __metadata("design:paramtypes", [documents_service_1.DocumentsService,
        document_upload_service_1.DocumentUploadService])
], DocumentsController);
//# sourceMappingURL=documents.controller.js.map