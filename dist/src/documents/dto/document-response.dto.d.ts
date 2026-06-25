import { DocumentStatus, RiskLevel } from "../../generated/prisma/index.js";
export declare class DocumentResponseDto {
    id: string;
    organizationId: string;
    uploadedBy: string;
    originalFileName: string;
    filename: string;
    mimeType?: string;
    fileUrl?: string;
    fileSize?: number;
    pageCount?: number;
    language?: string;
    status: DocumentStatus;
    complianceScore?: number;
    riskLevel?: RiskLevel;
    expirationDate?: Date;
    createdAt: Date;
    updatedAt: Date;
    storageKey?: string;
    checksum?: string;
}
