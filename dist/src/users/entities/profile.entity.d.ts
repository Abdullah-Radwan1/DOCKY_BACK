import { UserRole } from "../../generated/prisma/index.js";
export declare class ProfileEntity {
    id: string;
    email: string;
    fullName?: string;
    avatarUrl?: string;
    role: UserRole;
    organizationId?: string;
    createdAt: Date;
    updatedAt: Date;
}
