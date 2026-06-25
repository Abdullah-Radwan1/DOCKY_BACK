import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrganizationEntity } from './entities/organization.entity';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Injectable()
export class OrganizationsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Creates a new organization with a unique slug.
   */
  async createOrganization(data: CreateOrganizationDto) {
    // Check for slug uniqueness
    const existing = await this.prisma.organization.findUnique({
      where: { slug: data.slug },
    });
    if (existing) {
      throw new ConflictException(
        `Organization with slug "${data.slug}" already exists`,
      );
    }

    return this.prisma.organization.create({
      data: {
        name: data.name,
        slug: data.slug,
        plan: data.plan || 'free',
        documentsLimit: data.documentsLimit ?? 3,
      },
    });
  }

  /**
   * Fetches a single organization by ID, including its profiles and documents.
   */
  async getOrganizationById(id: string) {
    const organization = await this.prisma.organization.findUnique({
      where: { id },
      include: {
        profiles: true,
        documents: true,
      },
    });
    if (!organization) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }
    return organization;
  }

  /**
   * Fetches a single organization by its slug.
   */
  async getOrganizationBySlug(slug: string) {
    const organization = await this.prisma.organization.findUnique({
      where: { slug },
      include: {
        profiles: true,
      },
    });
    if (!organization) {
      throw new NotFoundException(
        `Organization with slug "${slug}" not found`,
      );
    }
    return organization;
  }

  /**
   * Fetches all organizations.
   */
  async getAllOrganizations() {
    return this.prisma.organization.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Updates an existing organization.
   */
  async updateOrganization(id: string, data: UpdateOrganizationDto) {
    try {
      return await this.prisma.organization.update({
        where: { id },
        data,
      });
    } catch {
      throw new NotFoundException(
        `Organization with ID ${id} not found to update`,
      );
    }
  }

  /**
   * Deletes an organization and cascades to related records.
   */
  async deleteOrganization(id: string) {
    try {
      return await this.prisma.organization.delete({
        where: { id },
      });
    } catch {
      throw new NotFoundException(
        `Organization with ID ${id} not found to delete`,
      );
    }
  }
}
