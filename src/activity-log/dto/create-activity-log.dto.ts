import {
  IsString,
  IsOptional,
  IsUUID,
  IsNotEmpty,
  IsObject,
} from 'class-validator';

export class CreateActivityLogDto {
  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsString()
  @IsNotEmpty()
  action: string;

  @IsString()
  @IsOptional()
  entityType?: string;

  @IsUUID()
  @IsOptional()
  entityId?: string;

  @IsObject()
  @IsOptional()
  metadata?: Record<string, any>;
}
