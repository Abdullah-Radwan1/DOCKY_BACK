import { UsersService } from './users.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createDto: CreateProfileDto): Promise<{
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        organizationId: string | null;
    }>;
    get(id: string): Promise<{
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
    update(id: string, updateDto: UpdateProfileDto): Promise<{
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fullName: string | null;
        avatarUrl: string | null;
        role: import("src/generated/prisma").UserRole;
        organizationId: string | null;
    }>;
    delete(id: string): Promise<{
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
