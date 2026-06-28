import { DocumentStatus } from "../../generated/prisma";
export declare class DocumentEntity {
    id: string;
    organizationId: string;
    uploadedBy: string;
    originalFileName: string;
    mimeType?: string;
    checksum?: string;
    fileSize?: number;
    pageCount?: number;
    totalChunks?: number;
    language?: string;
    status: DocumentStatus;
    expirationDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}
