import { PlanType } from 'src/generated/prisma';

export class OrganizationEntity {
  id: string;
  name: string;
  slug: string;
  plan: PlanType;
  documentsLimit?: number;
  createdAt: Date;
  updatedAt: Date;
}
