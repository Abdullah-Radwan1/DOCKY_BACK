import {
  IsString,
  IsOptional,
  IsUUID,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateAIResponseDto {
  @IsUUID()
  @IsNotEmpty()
  queryId: string;

  @IsString()
  @IsNotEmpty()
  responseText: string;

  @IsNumber()
  @IsOptional()
  confidenceScore?: number;

  @IsOptional()
  metadata?: any;
}
