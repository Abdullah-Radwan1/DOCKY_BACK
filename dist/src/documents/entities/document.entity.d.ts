import { DocumentStatus, RiskLevel } from "../../generated/prisma/index.js";
export declare class DocumentEntity {
    id: string;
    organizationId: string;
    uploadedBy: string;
    originalFileName: string;
    filename: string;
    mimeType?: string;
    storageKey?: string;
    fileUrl?: string;
    checksum?: string;
    fileSize?: number;
    pageCount?: number;
    language?: string;
    status: DocumentStatus;
    complianceScore?: number;
    riskLevel?: RiskLevel;
    expirationDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}
