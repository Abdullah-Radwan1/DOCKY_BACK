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
        id: string;
        passwordHash: string | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string | null;
    }>;
    getUserById(id: string): Promise<{
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        id: string;
        passwordHash: string | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string | null;
    }>;
    updateUser(id: string, data: UpdateProfileDto): Promise<{
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        id: string;
        passwordHash: string | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string | null;
    }>;
    deleteUser(id: string): Promise<{
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        id: string;
        passwordHash: string | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string | null;
    }>;
}
