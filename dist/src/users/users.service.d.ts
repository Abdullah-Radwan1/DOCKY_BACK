import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(data: {
        id: string;
        email: string;
        fullName?: string;
        avatarUrl?: string;
        role?: string;
        organizationId?: string;
    }): Promise<{
        id: string;
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        organizationId: string | null;
    }>;
    getUserById(id: string): Promise<{
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
    updateUser(id: string, data: {
        fullName?: string;
        avatarUrl?: string;
        role?: string;
        organizationId?: string;
    }): Promise<{
        id: string;
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: string;
        createdAt: Date | null;
        updatedAt: Date | null;
        organizationId: string | null;
    }>;
    deleteUser(id: string): Promise<{
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
