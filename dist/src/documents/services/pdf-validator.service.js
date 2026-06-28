"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PdfValidatorService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfValidatorService = void 0;
const common_1 = require("@nestjs/common");
const MAX_FILE_SIZE_BYTES = 20 * 1024 * 1024;
const PDF_MAGIC = Buffer.from([0x25, 0x50, 0x44, 0x46]);
let PdfValidatorService = PdfValidatorService_1 = class PdfValidatorService {
    logger = new common_1.Logger(PdfValidatorService_1.name);
    async validate(file) {
        if (!file) {
            throw new common_1.UnsupportedMediaTypeException('No file was uploaded.');
        }
        if (file.mimetype !== 'application/pdf') {
            this.logger.warn(`Rejected upload: invalid MIME type "${file.mimetype}" from file "${file.originalname}"`);
            throw new common_1.UnsupportedMediaTypeException(`Only PDF files are accepted. Received MIME type: ${file.mimetype}`);
        }
        if (file.size > MAX_FILE_SIZE_BYTES) {
            this.logger.warn(`Rejected upload: file size ${file.size} bytes exceeds the 20 MB limit (file: "${file.originalname}")`);
            const { PayloadTooLargeException } = await import('@nestjs/common');
            throw new PayloadTooLargeException(`File size ${(file.size / (1024 * 1024)).toFixed(2)} MB exceeds the maximum allowed size of 20 MB.`);
        }
        const detectedType = await this.detectFileType(file.buffer);
        const isPdf = detectedType?.mime === 'application/pdf' ||
            this.hasPdfMagicBytes(file.buffer);
        if (!isPdf) {
            this.logger.warn(`Rejected upload: file signature does not match PDF (detected: "${detectedType?.mime ?? 'unknown'}") for file "${file.originalname}"`);
            throw new common_1.UnsupportedMediaTypeException('The uploaded file does not appear to be a valid PDF (file signature mismatch).');
        }
        this.logger.log(`File "${file.originalname}" passed PDF validation (${(file.size / 1024).toFixed(1)} KB).`);
    }
    async detectFileType(buffer) {
        try {
            const { fileTypeFromBuffer } = await import('file-type');
            return await fileTypeFromBuffer(buffer);
        }
        catch (err) {
            this.logger.error('file-type detection failed, falling back to magic bytes', err);
            return undefined;
        }
    }
    hasPdfMagicBytes(buffer) {
        if (buffer.length < 4)
            return false;
        return buffer.subarray(0, 4).equals(PDF_MAGIC);
    }
};
exports.PdfValidatorService = PdfValidatorService;
exports.PdfValidatorService = PdfValidatorService = PdfValidatorService_1 = __decorate([
    (0, common_1.Injectable)()
], PdfValidatorService);
//# sourceMappingURL=pdf-validator.service.js.map