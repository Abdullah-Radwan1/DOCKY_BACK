import { DocumentsService } from './documents.service';
declare class CreateDocumentDto {
    organizationId: string;
    uploadedBy: string;
    filename: string;
    fileSize?: number;
    expirationDate?: string;
}
declare class UpdateDocumentDto {
    filename?: string;
    fileSize?: number;
    status?: string;
    complianceScore?: number;
    riskLevel?: string;
    expirationDate?: string;
}
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    create(createDto: CreateDocumentDto): Promise<{
        id: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        organizationId: string;
        filename: string;
        fileSize: number | null;
        status: string;
        complianceScore: number | null;
        riskLevel: string | null;
        expirationDate: Date | null;
        uploadedBy: string;
    }>;
    get(id: string): Promise<{
        uploader: {
            id: string;
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            role: string;
            createdAt: Date | null;
            updatedAt: Date | null;
            organizationId: string | null;
        };
        analyses: {
            id: string;
            createdAt: Date | null;
            documentId: string;
            executiveSummary: string | null;
            parties: import("@prisma/client/runtime/client").JsonValue | null;
            obligations: import("@prisma/client/runtime/client").JsonValue | null;
            paymentTerms: import("@prisma/client/runtime/client").JsonValue | null;
            renewalTerms: import("@prisma/client/runtime/client").JsonValue | null;
            penalties: import("@prisma/client/runtime/client").JsonValue | null;
            governingLaw: string | null;
            missingClauses: import("@prisma/client/runtime/client").JsonValue | null;
            unusualConditions: import("@prisma/client/runtime/client").JsonValue | null;
            complianceRequirements: import("@prisma/client/runtime/client").JsonValue | null;
            policyViolations: import("@prisma/client/runtime/client").JsonValue | null;
            regulatoryIssues: import("@prisma/client/runtime/client").JsonValue | null;
            missingSignatures: import("@prisma/client/runtime/client").JsonValue | null;
            expirationDetected: boolean | null;
            risks: import("@prisma/client/runtime/client").JsonValue | null;
            recommendations: import("@prisma/client/runtime/client").JsonValue | null;
            importantDates: import("@prisma/client/runtime/client").JsonValue | null;
        }[];
    } & {
        id: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        organizationId: string;
        filename: string;
        fileSize: number | null;
        status: string;
        complianceScore: number | null;
        riskLevel: string | null;
        expirationDate: Date | null;
        uploadedBy: string;
    }>;
    getByOrg(organizationId: string): Promise<{
        id: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        organizationId: string;
        filename: string;
        fileSize: number | null;
        status: string;
        complianceScore: number | null;
        riskLevel: string | null;
        expirationDate: Date | null;
        uploadedBy: string;
    }[]>;
    update(id: string, updateDto: UpdateDocumentDto): Promise<{
        id: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        organizationId: string;
        filename: string;
        fileSize: number | null;
        status: string;
        complianceScore: number | null;
        riskLevel: string | null;
        expirationDate: Date | null;
        uploadedBy: string;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        organizationId: string;
        filename: string;
        fileSize: number | null;
        status: string;
        complianceScore: number | null;
        riskLevel: string | null;
        expirationDate: Date | null;
        uploadedBy: string;
    }>;
}
export {};
