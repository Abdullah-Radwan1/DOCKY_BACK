import { UserRole } from 'src/generated/prisma';
import {
  IsString,
  IsOptional,
  IsUUID,
  IsEmail,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';

export class CreateProfileDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  fullName?: string;

  @IsString()
  @IsOptional()
  avatarUrl?: string;

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;

  @IsUUID()
  @IsOptional()
  organizationId?: string;
}
