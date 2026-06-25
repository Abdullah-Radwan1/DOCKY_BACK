import { PlanType } from 'src/generated/prisma';

export class OrganizationResponseDto {
  id: string;
  name: string;
  slug: string;
  plan: PlanType;
  documentsLimit?: number;
  createdAt: Date;
  updatedAt: Date;
}
