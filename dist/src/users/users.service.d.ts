import { PrismaService } from '../prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(data: CreateProfileDto): Promise<{
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        organizationId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getUserById(id: string): Promise<{
        organization: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            plan: import("src/generated/prisma").PlanType;
            documentsLimit: number;
        } | null;
    } & {
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        organizationId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateUser(id: string, data: UpdateProfileDto): Promise<{
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        organizationId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser(id: string): Promise<{
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        organizationId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
