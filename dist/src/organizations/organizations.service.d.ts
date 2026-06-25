import { PrismaService } from '../prisma/prisma.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
export declare class OrganizationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createOrganization(data: CreateOrganizationDto): Promise<{
        id: string;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getOrganizationById(id: string): Promise<{
        documents: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            uploadedBy: string;
            originalFileName: string;
            filename: string;
            mimeType: string | null;
            storageKey: string | null;
            fileUrl: string | null;
            checksum: string | null;
            fileSize: number | null;
            pageCount: number | null;
            language: string | null;
            status: import("src/generated/prisma").DocumentStatus;
            complianceScore: number | null;
            riskLevel: import("src/generated/prisma").RiskLevel | null;
            expirationDate: Date | null;
        }[];
        profiles: {
            email: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            organizationId: string | null;
        }[];
    } & {
        id: string;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getOrganizationBySlug(slug: string): Promise<{
        profiles: {
            email: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            organizationId: string | null;
        }[];
    } & {
        id: string;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllOrganizations(): Promise<{
        id: string;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    updateOrganization(id: string, data: UpdateOrganizationDto): Promise<{
        id: string;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteOrganization(id: string): Promise<{
        id: string;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
