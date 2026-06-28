import { PlanType } from "../../generated/prisma";
export declare class CreateOrganizationDto {
    name: string;
    slug: string;
    plan?: PlanType;
    documentsLimit?: number;
}
