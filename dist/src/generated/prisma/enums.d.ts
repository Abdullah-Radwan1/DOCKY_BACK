export declare const UserRole: {
    readonly admin: "admin";
    readonly compliance_manager: "compliance_manager";
    readonly auditor: "auditor";
    readonly viewer: "viewer";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const PlanType: {
    readonly free: "free";
    readonly growth: "growth";
    readonly enterprise: "enterprise";
};
export type PlanType = (typeof PlanType)[keyof typeof PlanType];
export declare const DocumentStatus: {
    readonly uploaded: "uploaded";
    readonly extracting: "extracting";
    readonly chunking: "chunking";
    readonly ready: "ready";
    readonly failed: "failed";
};
export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus];
export declare const RiskLevel: {
    readonly low: "low";
    readonly medium: "medium";
    readonly high: "high";
};
export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel];
export declare const AnalysisRequestStatus: {
    readonly pending: "pending";
    readonly processing: "processing";
    readonly completed: "completed";
    readonly failed: "failed";
};
export type AnalysisRequestStatus = (typeof AnalysisRequestStatus)[keyof typeof AnalysisRequestStatus];
export declare const NotificationStatus: {
    readonly unread: "unread";
    readonly read: "read";
    readonly archived: "archived";
};
export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus];
export declare const NotificationType: {
    readonly expiration_warning: "expiration_warning";
    readonly compliance_alert: "compliance_alert";
    readonly system_alert: "system_alert";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
export declare const DeliveryChannel: {
    readonly in_app: "in_app";
    readonly email: "email";
    readonly push: "push";
    readonly sms: "sms";
};
export type DeliveryChannel = (typeof DeliveryChannel)[keyof typeof DeliveryChannel];
export declare const FindingSeverity: {
    readonly info: "info";
    readonly low: "low";
    readonly medium: "medium";
    readonly high: "high";
    readonly critical: "critical";
};
export type FindingSeverity = (typeof FindingSeverity)[keyof typeof FindingSeverity];
export declare const FindingStatus: {
    readonly open: "open";
    readonly resolved: "resolved";
};
export type FindingStatus = (typeof FindingStatus)[keyof typeof FindingStatus];
export declare const AnalysisVerdict: {
    readonly compliant: "compliant";
    readonly non_compliant: "non_compliant";
    readonly partial: "partial";
    readonly unknown: "unknown";
};
export type AnalysisVerdict = (typeof AnalysisVerdict)[keyof typeof AnalysisVerdict];
