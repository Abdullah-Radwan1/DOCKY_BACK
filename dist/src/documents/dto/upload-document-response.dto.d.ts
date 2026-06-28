import { DocumentStatus } from "../../generated/prisma";
export declare class UploadDocumentResponseDto {
    id: string;
    originalFileName: string;
    mimeType?: string;
    checksum?: string;
    fileSize?: number;
    pageCount?: number;
    totalChunks?: number;
    status: DocumentStatus;
    createdAt: Date;
    updatedAt: Date;
}
