import { PlanType } from "../../generated/prisma/index.js";
export declare class CreateOrganizationDto {
    name: string;
    slug: string;
    plan?: PlanType;
    documentsLimit?: number;
}
