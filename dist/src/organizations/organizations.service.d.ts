import { PrismaService } from '../prisma/prisma.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
export declare class OrganizationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createOrganization(data: CreateOrganizationDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number;
    }>;
    getOrganizationById(id: string): Promise<{
        documents: {
            organizationId: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            uploadedBy: string | null;
            originalFileName: string;
            mimeType: string | null;
            checksum: string | null;
            fileSize: number | null;
            pageCount: number | null;
            language: string | null;
            expirationDate: Date | null;
            status: import("src/generated/prisma").DocumentStatus;
            totalChunks: number | null;
        }[];
        profiles: {
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            organizationId: string | null;
            id: string;
            passwordHash: string | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number;
    }>;
    getOrganizationBySlug(slug: string): Promise<{
        profiles: {
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            organizationId: string | null;
            id: string;
            passwordHash: string | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number;
    }>;
    getAllOrganizations(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number;
    }[]>;
    updateOrganization(id: string, data: UpdateOrganizationDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number;
    }>;
    deleteOrganization(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number;
    }>;
}
