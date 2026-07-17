import {
  Controller,
  Post,
  Body,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ChatService } from './services/chat.service';
import { DocumentChatDto } from './dto/document-chat.dto';
import { OptionalJwtAuthGuard } from '../auth/guards/optional-jwt-auth.guard';

/**
 * Exposes the conversational document-chat endpoint.
 *
 * POST /chat/document
 *   — Send a message about an already-processed document.
 *   — Returns a plain-text AI reply.
 *
 * Auth is optional — guests can chat about their own documents
 * (same access model as the compliance/analyze endpoint).
 */
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @UseGuards(OptionalJwtAuthGuard)
  @Post('document')
  @HttpCode(HttpStatus.OK)
  async chat(@Body() dto: DocumentChatDto): Promise<{ reply: string }> {
    return this.chatService.chat(dto);
  }
}
