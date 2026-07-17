"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const openrouter_service_1 = require("./services/openrouter.service");
const chunk_retrieval_service_1 = require("./services/chunk-retrieval.service");
const prompt_builder_service_1 = require("./services/prompt-builder.service");
const chat_prompt_builder_service_1 = require("./services/chat-prompt-builder.service");
const chat_service_1 = require("./services/chat.service");
const chat_controller_1 = require("./chat.controller");
const analysis_orchestrator_service_1 = require("./services/analysis-orchestrator.service");
const ai_provider_interface_1 = require("./interfaces/ai-provider.interface");
const prisma_service_1 = require("../prisma/prisma.service");
let AiModule = class AiModule {
};
exports.AiModule = AiModule;
exports.AiModule = AiModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: ai_provider_interface_1.AI_PROVIDER,
                useClass: openrouter_service_1.OpenRouterService,
            },
            openrouter_service_1.OpenRouterService,
            chunk_retrieval_service_1.ChunkRetrievalService,
            prompt_builder_service_1.PromptBuilderService,
            analysis_orchestrator_service_1.CombinedAnalysisStage,
            {
                provide: analysis_orchestrator_service_1.AnalysisOrchestratorService,
                useFactory: (prisma, chunkRetrieval, config, combinedStage) => new analysis_orchestrator_service_1.AnalysisOrchestratorService(prisma, chunkRetrieval, config, [combinedStage]),
                inject: [
                    prisma_service_1.PrismaService,
                    chunk_retrieval_service_1.ChunkRetrievalService,
                    config_1.ConfigService,
                    analysis_orchestrator_service_1.CombinedAnalysisStage,
                ],
            },
            chat_prompt_builder_service_1.ChatPromptBuilderService,
            chat_service_1.ChatService,
        ],
        controllers: [chat_controller_1.ChatController],
        exports: [analysis_orchestrator_service_1.AnalysisOrchestratorService, chat_prompt_builder_service_1.ChatPromptBuilderService, chat_service_1.ChatService],
    })
], AiModule);
//# sourceMappingURL=ai.module.js.map