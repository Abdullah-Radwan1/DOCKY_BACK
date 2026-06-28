import { UserRole } from "../../generated/prisma";
export declare class CreateProfileDto {
    email: string;
    fullName?: string;
    avatarUrl?: string;
    role?: UserRole;
    organizationId?: string;
}
