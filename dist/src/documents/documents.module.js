"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsModule = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const documents_service_1 = require("./documents.service");
const documents_controller_1 = require("./documents.controller");
const document_upload_service_1 = require("./services/document-upload.service");
const pdf_validator_service_1 = require("./services/pdf-validator.service");
const pdf_extractor_service_1 = require("./services/pdf-extractor.service");
const chunking_service_1 = require("./services/chunking.service");
let DocumentsModule = class DocumentsModule {
};
exports.DocumentsModule = DocumentsModule;
exports.DocumentsModule = DocumentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({ storage: (0, multer_1.memoryStorage)() }),
        ],
        controllers: [documents_controller_1.DocumentsController],
        providers: [
            documents_service_1.DocumentsService,
            document_upload_service_1.DocumentUploadService,
            pdf_validator_service_1.PdfValidatorService,
            pdf_extractor_service_1.PdfExtractorService,
            chunking_service_1.ChunkingService,
        ],
        exports: [documents_service_1.DocumentsService, document_upload_service_1.DocumentUploadService],
    })
], DocumentsModule);
//# sourceMappingURL=documents.module.js.map