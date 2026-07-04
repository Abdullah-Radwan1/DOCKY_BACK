import { UserRole } from 'src/generated/prisma';

export class ProfileResponseDto {
  id: string;
  email: string;
  fullName?: string;
  avatarUrl?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}
