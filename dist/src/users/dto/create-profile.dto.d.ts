import { UserRole } from "../../generated/prisma/index.js";
export declare class CreateProfileDto {
    email: string;
    fullName?: string;
    avatarUrl?: string;
    role?: UserRole;
    organizationId?: string;
}
