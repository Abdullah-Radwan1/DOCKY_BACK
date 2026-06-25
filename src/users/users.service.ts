import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProfileEntity } from './entities/profile.entity';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateProfileDto) {
    return this.prisma.profile.create({
      data: {
        email: data.email,
        fullName: data.fullName,
        avatarUrl: data.avatarUrl,
        role: data.role,
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

  async updateUser(id: string, data: UpdateProfileDto) {
    try {
      return await this.prisma.profile.update({
        where: { id },
        data,
      });
    } catch {
      throw new NotFoundException(
        `User profile with ID ${id} not found to update`,
      );
    }
  }

  async deleteUser(id: string) {
    try {
      return await this.prisma.profile.delete({
        where: { id },
      });
    } catch {
      throw new NotFoundException(
        `User profile with ID ${id} not found to delete`,
      );
    }
  }
}
