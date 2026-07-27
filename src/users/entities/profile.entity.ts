import { UserRole } from '../../generated/prisma/client.js';

export class ProfileEntity {
  id: string;
  email: string;
  fullName?: string;
  avatarUrl?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}
