import {
  Controller,
  Post,
  Patch,
  Get,
  Body,
  Res,
  Req,
  HttpCode,
  HttpStatus,
  UseGuards,
  Logger,
} from '@nestjs/common';
import type { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import type { CookieOptions } from 'express';

const COOKIE_NAME = 'jwt';

const COOKIE_OPTIONS: CookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  path: '/',
};

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(private readonly authService: AuthService) {}

  /** POST /auth/register */
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(
    @Body() dto: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { token, user } = await this.authService.register(dto);
    res.cookie(COOKIE_NAME, token, COOKIE_OPTIONS);
    return { user };
  }

  /** POST /auth/login */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { token, user } = await this.authService.login(dto);
    res.cookie(COOKIE_NAME, token, COOKIE_OPTIONS);
    return { user };
  }

  /** GET /auth/me — returns current user from JWT cookie */
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@Req() req: Request & { user: { id: string } }) {
    const user = await this.authService.getMe(req.user.id);
    return { user };
  }

  /** PATCH /auth/me/password — change password (requires current password) */
  @UseGuards(JwtAuthGuard)
  @Patch('me/password')
  @HttpCode(HttpStatus.OK)
  async changePassword(
    @Req() req: Request & { user: { id: string } },
    @Body() dto: ChangePasswordDto,
  ) {
    return this.authService.changePassword(req.user.id, dto);
  }

  /** POST /auth/forgot-password — send reset link (public) */
  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    this.logger.log(
      `/auth/forgot-password endpoint called for email=${dto.email}`,
    );
    return this.authService.forgotPassword(dto);
  }

  /** POST /auth/reset-password — consume token and set new password (public) */
  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto);
  }

  /** POST /auth/logout — clears the JWT cookie */
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie(COOKIE_NAME, COOKIE_OPTIONS);
    return { message: 'Logged out successfully.' };
  }
}
