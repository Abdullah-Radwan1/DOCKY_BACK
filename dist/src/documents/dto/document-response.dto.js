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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
class DocumentResponseDto {
    id;
    organizationId;
    uploadedBy;
    originalFileName;
    filename;
    mimeType;
    fileUrl;
    fileSize;
    pageCount;
    language;
    status;
    complianceScore;
    riskLevel;
    expirationDate;
    createdAt;
    updatedAt;
    storageKey;
    checksum;
}
exports.DocumentResponseDto = DocumentResponseDto;
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], DocumentResponseDto.prototype, "storageKey", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], DocumentResponseDto.prototype, "checksum", void 0);
//# sourceMappingURL=document-response.dto.js.map