import { UserRole } from 'src/generated/prisma';

export class ProfileEntity {
  id: string;
  email: string;
  fullName?: string;
  avatarUrl?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}
