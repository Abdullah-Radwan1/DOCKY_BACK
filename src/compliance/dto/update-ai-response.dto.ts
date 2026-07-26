import { PartialType } from '@nestjs/mapped-types';
import { CreateAIResponseDto } from './create-ai-response.dto';

export class UpdateAIResponseDto extends PartialType(CreateAIResponseDto) {}
