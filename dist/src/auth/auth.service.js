"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcryptjs"));
let AuthService = class AuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async register(dto) {
        const existing = await this.prisma.profile.findUnique({
            where: { email: dto.email },
        });
        if (existing) {
            throw new common_1.ConflictException('An account with this email already exists.');
        }
        const hash = await bcrypt.hash(dto.password, 12);
        const profile = await this.prisma.profile.create({
            data: {
                email: dto.email,
                fullName: dto.fullName ?? null,
                passwordHash: hash,
            },
        });
        return this.buildResponse(profile);
    }
    async login(dto) {
        const profile = await this.prisma.profile.findUnique({
            where: { email: dto.email },
            include: { organization: true },
        });
        if (!profile || !profile.passwordHash) {
            throw new common_1.UnauthorizedException('Invalid email or password.');
        }
        const valid = await bcrypt.compare(dto.password, profile.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Invalid email or password.');
        }
        return this.buildResponse(profile);
    }
    async getMe(userId) {
        const profile = await this.prisma.profile.findUnique({
            where: { id: userId },
            include: { organization: true },
        });
        if (!profile) {
            throw new common_1.UnauthorizedException('User not found.');
        }
        return this.sanitize(profile);
    }
    buildResponse(profile) {
        const token = this.jwtService.sign({
            sub: profile.id,
            email: profile.email,
            role: profile.role,
        });
        return {
            token,
            user: this.sanitize(profile),
        };
    }
    sanitize(profile) {
        return {
            id: profile.id,
            email: profile.email,
            full_name: profile.fullName,
            role: profile.role,
            organization_id: profile.organizationId,
            organization_name: profile.organization?.name ?? null,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map