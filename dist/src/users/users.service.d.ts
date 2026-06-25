import { PrismaService } from '../prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(data: CreateProfileDto): Promise<{
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        organizationId: string | null;
    }>;
    getUserById(id: string): Promise<{
        organization: {
            id: string;
            name: string;
            slug: string;
            plan: import("src/generated/prisma").PlanType;
            documentsLimit: number | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        organizationId: string | null;
    }>;
    updateUser(id: string, data: UpdateProfileDto): Promise<{
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        organizationId: string | null;
    }>;
    deleteUser(id: string): Promise<{
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        organizationId: string | null;
    }>;
}
