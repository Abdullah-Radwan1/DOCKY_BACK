import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        token: string;
        user: {
            id: string;
            email: string;
            full_name: string | null;
            role: string;
            organization_id: string | null;
            organization_name: string | null;
        };
    }>;
    login(dto: LoginDto): Promise<{
        token: string;
        user: {
            id: string;
            email: string;
            full_name: string | null;
            role: string;
            organization_id: string | null;
            organization_name: string | null;
        };
    }>;
    getMe(userId: string): Promise<{
        id: string;
        email: string;
        full_name: string | null;
        role: string;
        organization_id: string | null;
        organization_name: string | null;
    }>;
    private buildResponse;
    private sanitize;
}
