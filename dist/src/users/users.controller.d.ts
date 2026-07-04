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
        id: string;
        passwordHash: string | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string | null;
    }>;
    get(id: string): Promise<{
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
    update(id: string, updateDto: UpdateProfileDto): Promise<{
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
    delete(id: string): Promise<{
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
