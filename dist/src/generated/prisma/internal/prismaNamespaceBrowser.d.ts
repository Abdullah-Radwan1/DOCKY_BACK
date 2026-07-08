import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Profile: "Profile";
    readonly Document: "Document";
    readonly DocumentChunk: "DocumentChunk";
    readonly AnalysisResult: "AnalysisResult";
    readonly Finding: "Finding";
    readonly ActivityLog: "ActivityLog";
    readonly AnalysisRequest: "AnalysisRequest";
    readonly AIResponse: "AIResponse";
    readonly PasswordResetToken: "PasswordResetToken";
    readonly Notification: "Notification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ProfileScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly fullName: "fullName";
    readonly avatarUrl: "avatarUrl";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly allowEmailNotifications: "allowEmailNotifications";
    readonly allowExpiryReminders: "allowExpiryReminders";
    readonly allowRiskAlerts: "allowRiskAlerts";
    readonly allowAnalysisAlerts: "allowAnalysisAlerts";
};
export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];
export declare const DocumentScalarFieldEnum: {
    readonly id: "id";
    readonly guestToken: "guestToken";
    readonly isGuest: "isGuest";
    readonly uploadedBy: "uploadedBy";
    readonly originalFileName: "originalFileName";
    readonly mimeType: "mimeType";
    readonly checksum: "checksum";
    readonly fileSize: "fileSize";
    readonly pageCount: "pageCount";
    readonly totalChunks: "totalChunks";
    readonly language: "language";
    readonly status: "status";
    readonly expirationDate: "expirationDate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum];
export declare const DocumentChunkScalarFieldEnum: {
    readonly id: "id";
    readonly documentId: "documentId";
    readonly chunkIndex: "chunkIndex";
    readonly content: "content";
    readonly pageNumber: "pageNumber";
    readonly tokenCount: "tokenCount";
    readonly createdAt: "createdAt";
};
export type DocumentChunkScalarFieldEnum = (typeof DocumentChunkScalarFieldEnum)[keyof typeof DocumentChunkScalarFieldEnum];
export declare const AnalysisResultScalarFieldEnum: {
    readonly id: "id";
    readonly summary: "summary";
    readonly overallVerdict: "overallVerdict";
    readonly confidence: "confidence";
    readonly riskLevel: "riskLevel";
    readonly createdAt: "createdAt";
    readonly responseId: "responseId";
};
export type AnalysisResultScalarFieldEnum = (typeof AnalysisResultScalarFieldEnum)[keyof typeof AnalysisResultScalarFieldEnum];
export declare const FindingScalarFieldEnum: {
    readonly id: "id";
    readonly analysisId: "analysisId";
    readonly title: "title";
    readonly description: "description";
    readonly severity: "severity";
    readonly status: "status";
    readonly clauseReference: "clauseReference";
    readonly pageNumber: "pageNumber";
    readonly excerpt: "excerpt";
    readonly recommendation: "recommendation";
    readonly metadata: "metadata";
    readonly resolvedAt: "resolvedAt";
    readonly createdAt: "createdAt";
};
export type FindingScalarFieldEnum = (typeof FindingScalarFieldEnum)[keyof typeof FindingScalarFieldEnum];
export declare const ActivityLogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly action: "action";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum];
export declare const AnalysisRequestScalarFieldEnum: {
    readonly id: "id";
    readonly queryText: "queryText";
    readonly status: "status";
    readonly documentId: "documentId";
    readonly userId: "userId";
    readonly guestId: "guestId";
    readonly attemptCount: "attemptCount";
    readonly errorMessage: "errorMessage";
    readonly processingStartedAt: "processingStartedAt";
    readonly processingFinishedAt: "processingFinishedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AnalysisRequestScalarFieldEnum = (typeof AnalysisRequestScalarFieldEnum)[keyof typeof AnalysisRequestScalarFieldEnum];
export declare const AIResponseScalarFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly response: "response";
    readonly confidenceScore: "confidenceScore";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly matchedChunks: "matchedChunks";
};
export type AIResponseScalarFieldEnum = (typeof AIResponseScalarFieldEnum)[keyof typeof AIResponseScalarFieldEnum];
export declare const PasswordResetTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly token: "token";
    readonly expiresAt: "expiresAt";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
};
export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly message: "message";
    readonly type: "type";
    readonly status: "status";
    readonly deliveryChannel: "deliveryChannel";
    readonly documentId: "documentId";
    readonly scheduledFor: "scheduledFor";
    readonly sentAt: "sentAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
