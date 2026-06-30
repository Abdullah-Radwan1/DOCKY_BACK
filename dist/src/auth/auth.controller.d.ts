import type { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto, res: Response): Promise<{
        user: {
            id: string;
            email: string;
            full_name: string | null;
            role: string;
            organization_id: string | null;
            organization_name: string | null;
        };
    }>;
    login(dto: LoginDto, res: Response): Promise<{
        user: {
            id: string;
            email: string;
            full_name: string | null;
            role: string;
            organization_id: string | null;
            organization_name: string | null;
        };
    }>;
    me(req: Request & {
        user: {
            id: string;
        };
    }): Promise<{
        user: {
            id: string;
            email: string;
            full_name: string | null;
            role: string;
            organization_id: string | null;
            organization_name: string | null;
        };
    }>;
    logout(res: Response): {
        message: string;
    };
}
