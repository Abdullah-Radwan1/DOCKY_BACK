"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalysisResultResponseDto = exports.AiResponseDetailDto = exports.AnalysisResultDetailDto = exports.FindingResponseDto = void 0;
class FindingResponseDto {
    id;
    title;
    description;
    severity;
    status;
    affectedRequirement;
    category;
    clauseReference;
    pageNumber;
    excerpt;
    recommendation;
    metadata;
    createdAt;
}
exports.FindingResponseDto = FindingResponseDto;
class AnalysisResultDetailDto {
    id;
    summary;
    overallVerdict;
    confidence;
    riskLevel;
    findings;
    createdAt;
}
exports.AnalysisResultDetailDto = AnalysisResultDetailDto;
class AiResponseDetailDto {
    id;
    response;
    confidenceScore;
    metadata;
    matchedChunks;
    createdAt;
    AnalysisResult;
}
exports.AiResponseDetailDto = AiResponseDetailDto;
class AnalysisResultResponseDto {
    id;
    queryText;
    status;
    documentId;
    userId;
    attemptCount;
    errorMessage;
    processingStartedAt;
    processingFinishedAt;
    createdAt;
    updatedAt;
    response;
}
exports.AnalysisResultResponseDto = AnalysisResultResponseDto;
//# sourceMappingURL=analysis-result-response.dto.js.map