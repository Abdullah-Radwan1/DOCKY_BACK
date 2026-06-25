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
exports.CreateDocumentAnalysisDto = void 0;
const prisma_1 = require("../../generated/prisma/index.js");
const class_validator_1 = require("class-validator");
class CreateDocumentAnalysisDto {
    documentId;
    executiveSummary;
    overallVerdict;
    confidenceScore;
    modelName;
    promptVersion;
    rulesetVersion;
    parties;
    obligations;
    paymentTerms;
    renewalTerms;
    penalties;
    governingLaw;
    missingClauses;
    unusualConditions;
    complianceRequirements;
    policyViolations;
    regulatoryIssues;
    missingSignatures;
    expirationDetected;
    importantDates;
    risks;
    recommendations;
}
exports.CreateDocumentAnalysisDto = CreateDocumentAnalysisDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDocumentAnalysisDto.prototype, "documentId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDocumentAnalysisDto.prototype, "executiveSummary", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(prisma_1.AnalysisVerdict),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDocumentAnalysisDto.prototype, "overallVerdict", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateDocumentAnalysisDto.prototype, "confidenceScore", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDocumentAnalysisDto.prototype, "modelName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDocumentAnalysisDto.prototype, "promptVersion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDocumentAnalysisDto.prototype, "rulesetVersion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateDocumentAnalysisDto.prototype, "parties", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateDocumentAnalysisDto.prototype, "obligations", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateDocumentAnalysisDto.prototype, "paymentTerms", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateDocumentAnalysisDto.prototype, "renewalTerms", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateDocumentAnalysisDto.prototype, "penalties", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDocumentAnalysisDto.prototype, "governingLaw", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateDocumentAnalysisDto.prototype, "missingClauses", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateDocumentAnalysisDto.prototype, "unusualConditions", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateDocumentAnalysisDto.prototype, "complianceRequirements", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateDocumentAnalysisDto.prototype, "policyViolations", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateDocumentAnalysisDto.prototype, "regulatoryIssues", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateDocumentAnalysisDto.prototype, "missingSignatures", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateDocumentAnalysisDto.prototype, "expirationDetected", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateDocumentAnalysisDto.prototype, "importantDates", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateDocumentAnalysisDto.prototype, "risks", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateDocumentAnalysisDto.prototype, "recommendations", void 0);
//# sourceMappingURL=create-document-analysis.dto.js.map