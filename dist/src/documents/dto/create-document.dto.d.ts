import { DocumentStatus } from "../../generated/prisma/index.js";
export declare class CreateDocumentDto {
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
    expirationDate?: Date;
    status?: DocumentStatus;
}
