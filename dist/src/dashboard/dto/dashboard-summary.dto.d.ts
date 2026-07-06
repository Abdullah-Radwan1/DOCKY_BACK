export declare class KpisDto {
    totalDocuments: number;
    readyDocuments: number;
    processingDocuments: number;
    failedDocuments: number;
    totalAnalyses: number;
    completedAnalyses: number;
    pendingAnalyses: number;
    failedAnalyses: number;
    unreadNotifications: number;
    expiredDocuments: number;
    expiringSoonDocuments: number;
    complianceRate: number;
}
export declare class ComplianceDistributionDto {
    compliant: number;
    partial: number;
    non_compliant: number;
    unknown: number;
}
export declare class RiskDistributionDto {
    low: number;
    medium: number;
    high: number;
}
export declare class FindingsSeverityBreakdownDto {
    info: number;
    low: number;
    medium: number;
    high: number;
    critical: number;
}
export declare class DocumentStatusBreakdownDto {
    uploaded: number;
    extracting: number;
    chunking: number;
    ready: number;
    failed: number;
}
export declare class RecentAnalysisDto {
    id: string;
    documentId: string | null;
    documentName: string | null;
    requestStatus: 'pending' | 'processing' | 'completed' | 'failed';
    verdict: 'compliant' | 'partial' | 'non_compliant' | 'unknown' | null;
    riskLevel: 'low' | 'medium' | 'high' | null;
    confidenceScore: number | null;
    createdAt: string;
}
export declare class DocumentAttentionDto {
    id: string;
    fileName: string;
    dashboardStatus: string;
    riskLevel: 'low' | 'medium' | 'high' | null;
    criticalFindings: number;
    highFindings: number;
    expirationDate: string | null;
}
export declare class ExpirationDto {
    id: string;
    fileName: string;
    expirationDate: string;
    daysUntilExpiration: number;
}
export declare class ActivityDto {
    id: string;
    action: string;
    entityType: string | null;
    entityId: string | null;
    userEmail: string | null;
    userFullName: string | null;
    metadata: Record<string, unknown> | null;
    createdAt: string;
}
export declare class DashboardSummaryDto {
    generatedAt: string;
    kpis: KpisDto;
    complianceDistribution: ComplianceDistributionDto;
    riskDistribution: RiskDistributionDto;
    findingsSeverityBreakdown: FindingsSeverityBreakdownDto;
    documentStatusBreakdown: DocumentStatusBreakdownDto;
    recentAnalyses: RecentAnalysisDto[];
    documentsRequiringAttention: DocumentAttentionDto[];
    upcomingExpirations: ExpirationDto[];
    recentActivity: ActivityDto[];
}
