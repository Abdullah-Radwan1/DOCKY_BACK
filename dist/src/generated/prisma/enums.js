"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalysisVerdict = exports.FindingSeverity = exports.DeliveryChannel = exports.NotificationType = exports.NotificationStatus = exports.AnalysisRequestStatus = exports.RiskLevel = exports.DocumentStatus = exports.PlanType = exports.UserRole = void 0;
exports.UserRole = {
    admin: 'admin',
    compliance_manager: 'compliance_manager',
    auditor: 'auditor',
    viewer: 'viewer'
};
exports.PlanType = {
    free: 'free',
    growth: 'growth',
    enterprise: 'enterprise'
};
exports.DocumentStatus = {
    uploaded: 'uploaded',
    extracting: 'extracting',
    chunking: 'chunking',
    ready: 'ready',
    failed: 'failed'
};
exports.RiskLevel = {
    low: 'low',
    medium: 'medium',
    high: 'high'
};
exports.AnalysisRequestStatus = {
    pending: 'pending',
    processing: 'processing',
    completed: 'completed',
    failed: 'failed'
};
exports.NotificationStatus = {
    unread: 'unread',
    read: 'read',
    archived: 'archived'
};
exports.NotificationType = {
    expiration_warning: 'expiration_warning',
    compliance_alert: 'compliance_alert',
    system_alert: 'system_alert'
};
exports.DeliveryChannel = {
    in_app: 'in_app',
    email: 'email',
    push: 'push',
    sms: 'sms'
};
exports.FindingSeverity = {
    info: 'info',
    low: 'low',
    medium: 'medium',
    high: 'high',
    critical: 'critical'
};
exports.AnalysisVerdict = {
    compliant: 'compliant',
    non_compliant: 'non_compliant',
    partial: 'partial',
    unknown: 'unknown'
};
//# sourceMappingURL=enums.js.map