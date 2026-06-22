import { PrismaService } from '../prisma/prisma.service';
export declare class DocumentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createDocument(data: {
        organizationId: string;
        uploadedBy: string;
        filename: string;
        fileSize?: number;
        expirationDate?: Date;
    }): Promise<{
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
    getDocumentById(id: string): Promise<{
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
    getDocumentsByOrganization(organizationId: string): Promise<{
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
    updateDocument(id: string, data: {
        filename?: string;
        fileSize?: number;
        status?: string;
        complianceScore?: number;
        riskLevel?: string;
        expirationDate?: Date | null;
    }): Promise<{
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
    deleteDocument(id: string): Promise<{
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
