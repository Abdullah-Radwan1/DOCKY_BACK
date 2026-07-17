export declare class ChatMessageDto {
    role: 'user' | 'assistant';
    content: string;
}
export declare class DocumentChatDto {
    message: string;
    documentId: string;
    analysisRequestId?: string;
    history?: ChatMessageDto[];
}
