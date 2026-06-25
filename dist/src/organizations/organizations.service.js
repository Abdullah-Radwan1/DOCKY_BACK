"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OrganizationsService = class OrganizationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createOrganization(data) {
        const existing = await this.prisma.organization.findUnique({
            where: { slug: data.slug },
        });
        if (existing) {
            throw new common_1.ConflictException(`Organization with slug "${data.slug}" already exists`);
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
    async getOrganizationById(id) {
        const organization = await this.prisma.organization.findUnique({
            where: { id },
            include: {
                profiles: true,
                documents: true,
            },
        });
        if (!organization) {
            throw new common_1.NotFoundException(`Organization with ID ${id} not found`);
        }
        return organization;
    }
    async getOrganizationBySlug(slug) {
        const organization = await this.prisma.organization.findUnique({
            where: { slug },
            include: {
                profiles: true,
            },
        });
        if (!organization) {
            throw new common_1.NotFoundException(`Organization with slug "${slug}" not found`);
        }
        return organization;
    }
    async getAllOrganizations() {
        return this.prisma.organization.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async updateOrganization(id, data) {
        try {
            return await this.prisma.organization.update({
                where: { id },
                data,
            });
        }
        catch {
            throw new common_1.NotFoundException(`Organization with ID ${id} not found to update`);
        }
    }
    async deleteOrganization(id) {
        try {
            return await this.prisma.organization.delete({
                where: { id },
            });
        }
        catch {
            throw new common_1.NotFoundException(`Organization with ID ${id} not found to delete`);
        }
    }
};
exports.OrganizationsService = OrganizationsService;
exports.OrganizationsService = OrganizationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrganizationsService);
//# sourceMappingURL=organizations.service.js.map