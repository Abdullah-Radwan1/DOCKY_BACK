import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: {
    id: string; // Auth UUID
    email: string;
    fullName?: string;
    avatarUrl?: string;
    role?: string;
    organizationId?: string;
  }) {
    return this.prisma.profile.create({
      data: {
        id: data.id,
        email: data.email,
        fullName: data.fullName,
        avatarUrl: data.avatarUrl,
        role: data.role || 'viewer',
        organizationId: data.organizationId || null,
      },
    });
  }

  async getUserById(id: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { id },
      include: {
        organization: true,
      },
    });
    if (!profile) {
      throw new NotFoundException(`User profile with ID ${id} not found`);
    }
    return profile;
  }

  async updateUser(
    id: string,
    data: {
      fullName?: string;
      avatarUrl?: string;
      role?: string;
      organizationId?: string;
    },
  ) {
    try {
      return await this.prisma.profile.update({
        where: { id },
        data,
      });
    } catch {
      throw new NotFoundException(`User profile with ID ${id} not found to update`);
    }
  }

  async deleteUser(id: string) {
    try {
      return await this.prisma.profile.delete({
        where: { id },
      });
    } catch {
      throw new NotFoundException(`User profile with ID ${id} not found to delete`);
    }
  }
}
