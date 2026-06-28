"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PdfExtractorService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfExtractorService = void 0;
const common_1 = require("@nestjs/common");
const pdfParse = require('pdf-parse');
let PdfExtractorService = PdfExtractorService_1 = class PdfExtractorService {
    logger = new common_1.Logger(PdfExtractorService_1.name);
    async extract(buffer, fileName) {
        this.logger.log(`Extracting text from "${fileName}"…`);
        try {
            const result = await pdfParse(buffer);
            const pageCount = result.numpages ?? 0;
            const text = result.text ?? '';
            this.logger.log(`Extraction complete for "${fileName}": ${pageCount} page(s), ${text.length} characters.`);
            return { text, pageCount };
        }
        catch (err) {
            this.logger.error(`pdf-parse failed for "${fileName}"`, err);
            throw new common_1.InternalServerErrorException('Failed to extract text from the PDF file.');
        }
    }
};
exports.PdfExtractorService = PdfExtractorService;
exports.PdfExtractorService = PdfExtractorService = PdfExtractorService_1 = __decorate([
    (0, common_1.Injectable)()
], PdfExtractorService);
//# sourceMappingURL=pdf-extractor.service.js.map