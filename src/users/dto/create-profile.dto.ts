import { UserRole } from '../../generated/prisma/client.js';
import {
  IsString,
  IsOptional,
  IsEmail,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';

export class CreateProfileDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsOptional()
  fullName?: string;

  @IsString()
  @IsOptional()
  avatarUrl?: string;

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;
}
