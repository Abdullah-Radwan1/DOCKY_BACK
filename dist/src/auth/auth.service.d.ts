import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
import { MailerService } from './mailer.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly notificationsService;
    private readonly mailerService;
    constructor(prisma: PrismaService, jwtService: JwtService, notificationsService: NotificationsService, mailerService: MailerService);
    register(dto: RegisterDto): Promise<{
        token: string;
        user: {
            id: string;
            email: string;
            full_name: string | null;
            role: string;
            allow_email_notifications: boolean;
            allow_expiry_reminders: boolean;
            allow_risk_alerts: boolean;
            allow_analysis_alerts: boolean;
            plan: string | undefined;
            usage_quota: any;
        };
    }>;
    login(dto: LoginDto): Promise<{
        token: string;
        user: {
            id: string;
            email: string;
            full_name: string | null;
            role: string;
            allow_email_notifications: boolean;
            allow_expiry_reminders: boolean;
            allow_risk_alerts: boolean;
            allow_analysis_alerts: boolean;
            plan: string | undefined;
            usage_quota: any;
        };
    }>;
    getMe(userId: string): Promise<{
        id: string;
        email: string;
        full_name: string | null;
        role: string;
        allow_email_notifications: boolean;
        allow_expiry_reminders: boolean;
        allow_risk_alerts: boolean;
        allow_analysis_alerts: boolean;
        plan: string | undefined;
        usage_quota: any;
    }>;
    changePassword(userId: string, dto: ChangePasswordDto): Promise<{
        message: string;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(dto: ResetPasswordDto): Promise<{
        message: string;
    }>;
    private buildResponse;
    private sanitize;
}
