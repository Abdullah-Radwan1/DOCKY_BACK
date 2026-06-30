import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Register a new user. Hashes password, stores profile in DB, returns JWT.
   */
  async register(dto: RegisterDto) {
    const existing = await this.prisma.profile.findUnique({
      where: { email: dto.email },
    });
    if (existing) {
      throw new ConflictException('An account with this email already exists.');
    }

    const hash = await bcrypt.hash(dto.password, 12);

    const profile = await this.prisma.profile.create({
      data: {
        email: dto.email,
        fullName: dto.fullName ?? null,
        passwordHash: hash,
        // Default role: viewer. organizationId: null (no org yet)
      },
    });

    return this.buildResponse(profile);
  }

  /**
   * Validate credentials and return the JWT payload.
   */
  async login(dto: LoginDto) {
    const profile = await this.prisma.profile.findUnique({
      where: { email: dto.email },
      include: { organization: true },
    });

    if (!profile || !profile.passwordHash) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    const valid = await bcrypt.compare(dto.password, profile.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    return this.buildResponse(profile);
  }

  /**
   * Fetch the current user's full profile by ID (from JWT payload).
   */
  async getMe(userId: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { id: userId },
      include: { organization: true },
    });

    if (!profile) {
      throw new UnauthorizedException('User not found.');
    }

    return this.sanitize(profile);
  }

  // ─── Helpers ────────────────────────────────────────────────────────────────

  private buildResponse(profile: {
    id: string;
    email: string;
    fullName: string | null;
    role: string;
    organizationId: string | null;
    organization?: { name: string } | null;
  }) {
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

  private sanitize(profile: {
    id: string;
    email: string;
    fullName: string | null;
    role: string;
    organizationId: string | null;
    organization?: { name: string } | null;
  }) {
    return {
      id: profile.id,
      email: profile.email,
      full_name: profile.fullName,
      role: profile.role,
      organization_id: profile.organizationId,
      organization_name: profile.organization?.name ?? null,
    };
  }
}
