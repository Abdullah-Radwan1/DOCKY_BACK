import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
export declare class OrganizationsController {
    private readonly organizationsService;
    constructor(organizationsService: OrganizationsService);
    create(createDto: CreateOrganizationDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number;
    }>;
    getAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number;
    }[]>;
    get(id: string): Promise<{
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
    getBySlug(slug: string): Promise<{
        profiles: {
            email: string;
            fullName: string | null;
            avatarUrl: string | null;
            role: import("src/generated/prisma").UserRole;
            organizationId: string | null;
            id: string;
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
    update(id: string, updateDto: UpdateOrganizationDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        plan: import("src/generated/prisma").PlanType;
        documentsLimit: number;
    }>;
}
