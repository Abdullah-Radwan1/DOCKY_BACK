import { UserRole } from "../../generated/prisma";
export declare class ProfileResponseDto {
    id: string;
    email: string;
    fullName?: string;
    avatarUrl?: string;
    role: UserRole;
    organizationId?: string;
    createdAt: Date;
    updatedAt: Date;
}
