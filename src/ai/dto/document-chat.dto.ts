import { IsString, IsNotEmpty, IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ChatMessageDto {
  @IsString()
  @IsNotEmpty()
  role: 'user' | 'assistant';

  @IsString()
  @IsNotEmpty()
  content: string;
}

export class DocumentChatDto {
  /** The user's current message. */
  @IsString()
  @IsNotEmpty()
  message: string;

  /** The document being discussed. */
  @IsString()
  @IsNotEmpty()
  documentId: string;

  /**
   * The analysis request ID (from a completed compliance analysis).
   * Used to load the structured analysis as context.
   * Optional — the AI will rely only on document text if not provided.
   */
  @IsString()
  @IsOptional()
  analysisRequestId?: string;

  /**
   * Prior conversation turns, oldest-first.
   * The client is responsible for maintaining and forwarding history.
   */
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChatMessageDto)
  @IsOptional()
  history?: ChatMessageDto[];
}
