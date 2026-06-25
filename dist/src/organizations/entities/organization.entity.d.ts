import { PlanType } from "../../generated/prisma/index.js";
export declare class OrganizationEntity {
    id: string;
    name: string;
    slug: string;
    plan: PlanType;
    documentsLimit?: number;
    createdAt: Date;
    updatedAt: Date;
}
