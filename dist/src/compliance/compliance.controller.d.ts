import { ComplianceService } from './compliance.service';
declare class CreateQueryDto {
    queryText: string;
    userId: string;
    documentId?: string;
}
declare class CreateAIResponseDto {
    queryId: string;
    responseText: string;
    confidenceScore?: number;
    metadata?: any;
}
export declare class ComplianceController {
    private readonly complianceService;
    constructor(complianceService: ComplianceService);
    createQuery(queryDto: CreateQueryDto): Promise<{
        id: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        status: string;
        documentId: string | null;
        queryText: string;
        userId: string;
    }>;
    getQuery(id: string): Promise<{
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
    getByDocument(documentId: string): Promise<({
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
    addResponse(responseDto: CreateAIResponseDto): Promise<{
        id: string;
        createdAt: Date | null;
        queryId: string;
        responseText: string;
        confidenceScore: number | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
}
export {};
