import { IsString, IsOptional, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateScheduledTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  cronExpression: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
