export declare class CreateDocumentDto {
    organizationId?: string;
    uploadedBy?: string;
    originalFileName: string;
    mimeType?: string;
    checksum?: string;
    fileSize?: number;
    pageCount?: number;
    language?: string;
    expirationDate?: Date;
}
