import { PrismaService } from '../prisma/prisma.service';
export declare class ComplianceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createQuery(data: {
        queryText: string;
        userId: string;
        documentId?: string;
    }): Promise<{
        id: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        status: string;
        documentId: string | null;
        queryText: string;
        userId: string;
    }>;
    getQueryById(id: string): Promise<{
        document: {
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
        } | null;
        user: {
            id: string;
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            role: string;
            createdAt: Date | null;
            updatedAt: Date | null;
            organizationId: string | null;
        };
        responses: {
            id: string;
            createdAt: Date | null;
            queryId: string;
            responseText: string;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
        }[];
    } & {
        id: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        status: string;
        documentId: string | null;
        queryText: string;
        userId: string;
    }>;
    getQueriesByDocument(documentId: string): Promise<({
        responses: {
            id: string;
            createdAt: Date | null;
            queryId: string;
            responseText: string;
            confidenceScore: number | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
        }[];
    } & {
        id: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        status: string;
        documentId: string | null;
        queryText: string;
        userId: string;
    })[]>;
    addAIResponse(data: {
        queryId: string;
        responseText: string;
        confidenceScore?: number;
        metadata?: any;
    }): Promise<{
        id: string;
        createdAt: Date | null;
        queryId: string;
        responseText: string;
        confidenceScore: number | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
}
