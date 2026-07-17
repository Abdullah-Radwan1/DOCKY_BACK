import type { AiChatMessage } from '../interfaces/ai-provider.interface';
import { AnalysisOptions } from '../interfaces/analysis-options.interface';
export declare class PromptBuilderService {
    buildAnalysisPrompt(userQuery: string, chunks: Array<{
        content: string;
        pageNumber: number | null;
        chunkIndex: number;
    }>, options?: AnalysisOptions): AiChatMessage[];
    private buildSystemPrompt;
    private systemRole;
    private systemObjective;
    private systemRules;
    private systemSchema;
    private buildContractSchema;
    private buildComplianceSchema;
    private buildUserPrompt;
    private userRequestSection;
    private userAnalysisSection;
    private userDocumentContext;
    private userClosingInstruction;
}
