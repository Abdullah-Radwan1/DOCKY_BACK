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
        };
    }>;
    login(dto: LoginDto, res: Response): Promise<{
        user: {
            id: string;
            email: string;
            full_name: string | null;
            role: string;
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
        };
    }>;
    logout(res: Response): {
        message: string;
    };
}
