"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.NotificationScalarFieldEnum = exports.AIResponseScalarFieldEnum = exports.ComplianceQueryScalarFieldEnum = exports.ActivityLogScalarFieldEnum = exports.FindingScalarFieldEnum = exports.DocumentAnalysisScalarFieldEnum = exports.DocumentScalarFieldEnum = exports.ProfileScalarFieldEnum = exports.OrganizationScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Organization: 'Organization',
    Profile: 'Profile',
    Document: 'Document',
    DocumentAnalysis: 'DocumentAnalysis',
    Finding: 'Finding',
    ActivityLog: 'ActivityLog',
    ComplianceQuery: 'ComplianceQuery',
    AIResponse: 'AIResponse',
    Notification: 'Notification'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.OrganizationScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    plan: 'plan',
    documentsLimit: 'documentsLimit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProfileScalarFieldEnum = {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    avatarUrl: 'avatarUrl',
    role: 'role',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.DocumentScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    uploadedBy: 'uploadedBy',
    originalFileName: 'originalFileName',
    filename: 'filename',
    mimeType: 'mimeType',
    storageKey: 'storageKey',
    fileUrl: 'fileUrl',
    checksum: 'checksum',
    fileSize: 'fileSize',
    pageCount: 'pageCount',
    language: 'language',
    status: 'status',
    complianceScore: 'complianceScore',
    riskLevel: 'riskLevel',
    expirationDate: 'expirationDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.DocumentAnalysisScalarFieldEnum = {
    id: 'id',
    documentId: 'documentId',
    executiveSummary: 'executiveSummary',
    overallVerdict: 'overallVerdict',
    confidenceScore: 'confidenceScore',
    modelName: 'modelName',
    promptVersion: 'promptVersion',
    rulesetVersion: 'rulesetVersion',
    parties: 'parties',
    obligations: 'obligations',
    paymentTerms: 'paymentTerms',
    renewalTerms: 'renewalTerms',
    penalties: 'penalties',
    governingLaw: 'governingLaw',
    missingClauses: 'missingClauses',
    unusualConditions: 'unusualConditions',
    complianceRequirements: 'complianceRequirements',
    policyViolations: 'policyViolations',
    regulatoryIssues: 'regulatoryIssues',
    missingSignatures: 'missingSignatures',
    expirationDetected: 'expirationDetected',
    importantDates: 'importantDates',
    risks: 'risks',
    recommendations: 'recommendations',
    createdAt: 'createdAt'
};
exports.FindingScalarFieldEnum = {
    id: 'id',
    analysisId: 'analysisId',
    title: 'title',
    description: 'description',
    severity: 'severity',
    clauseReference: 'clauseReference',
    pageNumber: 'pageNumber',
    excerpt: 'excerpt',
    recommendation: 'recommendation',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
exports.ActivityLogScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    userId: 'userId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
exports.ComplianceQueryScalarFieldEnum = {
    id: 'id',
    queryText: 'queryText',
    status: 'status',
    documentId: 'documentId',
    userId: 'userId',
    attemptCount: 'attemptCount',
    errorMessage: 'errorMessage',
    processingStartedAt: 'processingStartedAt',
    processingFinishedAt: 'processingFinishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AIResponseScalarFieldEnum = {
    id: 'id',
    queryId: 'queryId',
    responseText: 'responseText',
    confidenceScore: 'confidenceScore',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    type: 'type',
    status: 'status',
    deliveryChannel: 'deliveryChannel',
    documentId: 'documentId',
    scheduledFor: 'scheduledFor',
    sentAt: 'sentAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map