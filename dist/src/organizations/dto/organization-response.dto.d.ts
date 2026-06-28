import { PlanType } from "../../generated/prisma";
export declare class OrganizationResponseDto {
    id: string;
    name: string;
    slug: string;
    plan: PlanType;
    documentsLimit?: number;
    createdAt: Date;
    updatedAt: Date;
}
