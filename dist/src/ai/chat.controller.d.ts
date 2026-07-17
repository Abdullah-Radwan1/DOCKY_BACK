import { ChatService } from './services/chat.service';
import { DocumentChatDto } from './dto/document-chat.dto';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    chat(dto: DocumentChatDto): Promise<{
        reply: string;
    }>;
}
