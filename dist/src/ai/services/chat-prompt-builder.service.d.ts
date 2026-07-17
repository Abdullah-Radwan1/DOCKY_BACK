import type { AiChatMessage } from '../interfaces/ai-provider.interface';
import type { ChatPromptContext } from '../interfaces/chat.interface';
export declare class ChatPromptBuilderService {
    buildChatPrompt(ctx: ChatPromptContext): AiChatMessage[];
    private buildSystemPrompt;
    private sectionIdentity;
    private sectionBehavior;
    private sectionDocumentContext;
    private sectionAnalysisContext;
    private formatComplianceContext;
    private formatContractContext;
    private mapHistoryTurn;
    private requirementStatusLabel;
}
