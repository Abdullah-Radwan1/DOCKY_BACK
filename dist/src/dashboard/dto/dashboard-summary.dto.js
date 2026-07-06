"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardSummaryDto = exports.ActivityDto = exports.ExpirationDto = exports.DocumentAttentionDto = exports.RecentAnalysisDto = exports.DocumentStatusBreakdownDto = exports.FindingsSeverityBreakdownDto = exports.RiskDistributionDto = exports.ComplianceDistributionDto = exports.KpisDto = void 0;
class KpisDto {
    totalDocuments;
    readyDocuments;
    processingDocuments;
    failedDocuments;
    totalAnalyses;
    completedAnalyses;
    pendingAnalyses;
    failedAnalyses;
    unreadNotifications;
    expiredDocuments;
    expiringSoonDocuments;
    complianceRate;
}
exports.KpisDto = KpisDto;
class ComplianceDistributionDto {
    compliant;
    partial;
    non_compliant;
    unknown;
}
exports.ComplianceDistributionDto = ComplianceDistributionDto;
class RiskDistributionDto {
    low;
    medium;
    high;
}
exports.RiskDistributionDto = RiskDistributionDto;
class FindingsSeverityBreakdownDto {
    info;
    low;
    medium;
    high;
    critical;
}
exports.FindingsSeverityBreakdownDto = FindingsSeverityBreakdownDto;
class DocumentStatusBreakdownDto {
    uploaded;
    extracting;
    chunking;
    ready;
    failed;
}
exports.DocumentStatusBreakdownDto = DocumentStatusBreakdownDto;
class RecentAnalysisDto {
    id;
    documentId;
    documentName;
    requestStatus;
    verdict;
    riskLevel;
    confidenceScore;
    createdAt;
}
exports.RecentAnalysisDto = RecentAnalysisDto;
class DocumentAttentionDto {
    id;
    fileName;
    dashboardStatus;
    riskLevel;
    criticalFindings;
    highFindings;
    expirationDate;
}
exports.DocumentAttentionDto = DocumentAttentionDto;
class ExpirationDto {
    id;
    fileName;
    expirationDate;
    daysUntilExpiration;
}
exports.ExpirationDto = ExpirationDto;
class ActivityDto {
    id;
    action;
    entityType;
    entityId;
    userEmail;
    userFullName;
    metadata;
    createdAt;
}
exports.ActivityDto = ActivityDto;
class DashboardSummaryDto {
    generatedAt;
    kpis;
    complianceDistribution;
    riskDistribution;
    findingsSeverityBreakdown;
    documentStatusBreakdown;
    recentAnalyses;
    documentsRequiringAttention;
    upcomingExpirations;
    recentActivity;
}
exports.DashboardSummaryDto = DashboardSummaryDto;
//# sourceMappingURL=dashboard-summary.dto.js.map