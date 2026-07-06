import type { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto, res: Response): Promise<{
        user: {
            id: string;
            email: string;
            full_name: string | null;
            role: string;
            allow_email_notifications: boolean;
            allow_expiry_reminders: boolean;
            allow_risk_alerts: boolean;
            allow_analysis_alerts: boolean;
        };
    }>;
    login(dto: LoginDto, res: Response): Promise<{
        user: {
            id: string;
            email: string;
            full_name: string | null;
            role: string;
            allow_email_notifications: boolean;
            allow_expiry_reminders: boolean;
            allow_risk_alerts: boolean;
            allow_analysis_alerts: boolean;
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
            allow_email_notifications: boolean;
            allow_expiry_reminders: boolean;
            allow_risk_alerts: boolean;
            allow_analysis_alerts: boolean;
        };
    }>;
    changePassword(req: Request & {
        user: {
            id: string;
        };
    }, dto: ChangePasswordDto): Promise<{
        message: string;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(dto: ResetPasswordDto): Promise<{
        message: string;
    }>;
    logout(res: Response): {
        message: string;
    };
}
