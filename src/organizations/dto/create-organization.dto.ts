import { PlanType } from 'src/generated/prisma';
import {
  IsString,
  IsOptional,
  IsInt,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';

export class CreateOrganizationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsEnum(PlanType)
  @IsOptional()
  plan?: PlanType;

  @IsInt()
  @IsOptional()
  documentsLimit?: number;
}
