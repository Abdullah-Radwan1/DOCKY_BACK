import { UsersService } from './users.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createDto: CreateProfileDto): Promise<{
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        organizationId: string | null;
        id: string;
        passwordHash: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    get(id: string): Promise<{
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
        passwordHash: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateDto: UpdateProfileDto): Promise<{
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        organizationId: string | null;
        id: string;
        passwordHash: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<{
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        organizationId: string | null;
        id: string;
        passwordHash: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
