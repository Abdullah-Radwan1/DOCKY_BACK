import {
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsIn,
} from 'class-validator';

export class UpdateMeDto {
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(100)
  fullName?: string;

  @IsBoolean()
  @IsOptional()
  allowEmailNotifications?: boolean;

  @IsBoolean()
  @IsOptional()
  allowExpiryReminders?: boolean;

  @IsBoolean()
  @IsOptional()
  allowRiskAlerts?: boolean;

  @IsBoolean()
  @IsOptional()
  allowAnalysisAlerts?: boolean;

  @IsOptional()
  @IsNumber()
  usageQuota?: number;

  @IsOptional()
  @IsString()
  @IsIn(['Free', 'Professional', 'Elite'])
  plan?: string;
}
