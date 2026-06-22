import { UsersService } from './users.service';
declare class CreateProfileDto {
    id: string;
    email: string;
    fullName?: string;
    avatarUrl?: string;
    role?: string;
    organizationId?: string;
}
declare class UpdateProfileDto {
    fullName?: string;
    avatarUrl?: string;
    role?: string;
    organizationId?: string;
}
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createDto: CreateProfileDto): Promise<{
        id: string;
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        organizationId: string | null;
    }>;
    get(id: string): Promise<{
        organization: {
            id: string;
            createdAt: Date | null;
            updatedAt: Date | null;
            name: string;
            slug: string;
            plan: string;
            documentsLimit: number | null;
        } | null;
    } & {
        id: string;
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        organizationId: string | null;
    }>;
    update(id: string, updateDto: UpdateProfileDto): Promise<{
        id: string;
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        organizationId: string | null;
    }>;
    delete(id: string): Promise<{
        id: string;
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        organizationId: string | null;
    }>;
}
export {};
