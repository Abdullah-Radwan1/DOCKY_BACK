import {
  Injectable,
  Logger,
  Inject,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import {
  AI_PROVIDER,
  type AiProvider,
  type AiChatMessage,
  type AiCompletionResult,
} from '../interfaces/ai-provider.interface';
import type {
  AiAnalysisResponse,
  AiFinding,
} from '../interfaces/ai-analysis-response.interface';
import type { Prisma } from '../../generated/prisma/client.js';
import { AiProviderError, AiResponseParseError } from '../errors/ai.errors';
import { ChunkRetrievalService } from './chunk-retrieval.service';
import { PromptBuilderService } from './prompt-builder.service';
import {
  AnalysisRequestStatus,
  AnalysisVerdict,
  FindingSeverity,
  RiskLevel,
} from '../../generated/prisma/client.js';
import {
  AnalysisOptions,
  DEFAULT_ANALYSIS_OPTIONS,
} from '../interfaces/analysis-options.interface';

// ── Stage abstraction ────────────────────────────────────────────────────────

/**
 * Context object passed into every analysis stage.
 *
 * Stages receive the full request context and can attach their output to the
 * `result` field, which is then merged into the final `AiAnalysisResponse`.
 *
 * This design allows future pipelines to run multiple AI calls sequentially
 * (e.g. a dedicated contract-extraction stage followed by a compliance-
 * evaluation stage) without touching the core orchestration logic.
 */
export interface AnalysisStageContext {
  requestId: string;
  documentId: string;
  queryText: string;
  chunks: Awaited<ReturnType<ChunkRetrievalService['getRelevantChunks']>>;
  /** Accumulated result — stages may read from prior stages' output. */
  result: Partial<AiAnalysisResponse>;
  options: AnalysisOptions;
}

/**
 * A single, self-contained unit of AI work.
 *
 * Implement this interface to add a new stage (e.g. `ContractExtractionStage`,
 * `ComplianceEvaluationStage`).  The orchestrator calls each stage in order
 * and merges the returned partial response into the accumulated result.
 */
export interface AnalysisStage {
  readonly name: string;
  run(ctx: AnalysisStageContext): Promise<Partial<AiAnalysisResponse>>;
}

// ── Built-in combined stage ───────────────────────────────────────────────────

/**
 * The default single-stage implementation that performs both contract
 * extraction and compliance evaluation in one AI call.
 *
 * When the system is ready for multi-stage analysis, this stage can be
 * split into two (or more) separate stages — each injected independently.
 */
@Injectable()
export class CombinedAnalysisStage implements AnalysisStage {
  readonly name = 'CombinedAnalysis';

  private readonly model: string;
  private readonly maxTokens: number;

  constructor(
    @Inject(AI_PROVIDER) private readonly aiProvider: AiProvider,
    private readonly promptBuilder: PromptBuilderService,
    private readonly config: ConfigService,
  ) {
    this.model = this.config.get<string>(
      'OPENROUTER_MODEL',
      'qwen/qwen3-235b-a22b',
    );
    this.maxTokens = this.config.get<number>('OPENROUTER_MAX_TOKENS', 4096);
  }

  async run(ctx: AnalysisStageContext): Promise<Partial<AiAnalysisResponse>> {
    const stageStart = Date.now();
    // ── Fast path: compliance disabled → single call ─────────────────────────
    if (!ctx.options.compliance) {
      const messages = this.promptBuilder.buildAnalysisPrompt(
        ctx.queryText,
        ctx.chunks,
        ctx.options,
      );
      console.log(`[STAGE COMBINED] [FAST PATH] [AWAIT START] callAi (single call)`);
      const aiResult = await this.callAi(messages);
      console.log(`[STAGE COMBINED] [FAST PATH] [AWAIT END] callAi finished in ${Date.now() - stageStart}ms`);
      return this.parseAiResponse(aiResult.content, ctx.options);
    }

    // ── Parallel path: contract extraction + compliance evaluation ────────────
    //
    // Splitting the work into two focused calls and running them concurrently
    // cuts wall time from (T_contract + T_compliance) to max(T_contract, T_compliance).
    // Each call also has a smaller output schema, so token generation is faster.
    console.log(`[STAGE COMBINED] [PARALLEL PATH] [AWAIT START] callAi contract + compliance starting in parallel`);
    const parallelStart = Date.now();
    const [contractRaw, complianceRaw] = await Promise.all([
      this.callAi(
        this.promptBuilder.buildContractExtractionPrompt(
          ctx.queryText,
          ctx.chunks,
          ctx.options,
        ),
      ),
      this.callAi(
        this.promptBuilder.buildComplianceEvaluationPrompt(
          ctx.chunks,
          ctx.options,
        ),
      ),
    ]);
    console.log(`[STAGE COMBINED] [PARALLEL PATH] [AWAIT END] both callAi parallel calls resolved in ${Date.now() - parallelStart}ms`);

    const contractPart = this.parseContractResponse(contractRaw.content);
    const compliancePart = this.parseComplianceResponse(complianceRaw.content, ctx.options);

    return {
      ...contractPart,
      compliance: compliancePart.compliance ?? null,
    };
  }

  private async callAi(messages: AiChatMessage[]): Promise<AiCompletionResult> {
    return this.aiProvider.complete({
      model: this.model,
      messages,
      maxTokens: this.maxTokens,
      temperature: 0.1,
      responseFormat: { type: 'json_object' },
    });
  }

  /**
   * Parses and validates the raw AI content into our typed schema.
   * Strips markdown fences if the model wraps the JSON despite instructions.
   * Used by the single-call (no-compliance) fast path.
   */
  private parseAiResponse(raw: string, options: AnalysisOptions): AiAnalysisResponse {
    const cleaned = this.stripMarkdownFences(raw);

    let parsed: AiAnalysisResponse;
    try {
      parsed = JSON.parse(cleaned) as AiAnalysisResponse;
    } catch {
      throw new AiResponseParseError('Invalid JSON from AI model', raw);
    }

    this.validateResponse(parsed, raw, options);
    return parsed;
  }

  /**
   * Parses the contract-extraction leg of the parallel pipeline.
   * Expects { answer, summary, contract } — no compliance fields.
   */
  private parseContractResponse(raw: string): Omit<AiAnalysisResponse, 'compliance'> {
    const cleaned = this.stripMarkdownFences(raw);
    let parsed: any;
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      throw new AiResponseParseError(
        'Invalid JSON from AI model (contract extraction)',
        raw,
      );
    }
    if (!parsed.summary || typeof parsed.summary !== 'string') {
      throw new AiResponseParseError(
        'Missing or invalid "summary" in contract extraction response',
        raw,
      );
    }
    if (!parsed.contract) {
      throw new AiResponseParseError(
        'Missing "contract" domain in contract extraction response',
        raw,
      );
    }
    return parsed as Omit<AiAnalysisResponse, 'compliance'>;
  }

  /**
   * Parses the compliance-evaluation leg of the parallel pipeline.
   * Expects { compliance: { overallVerdict, riskLevel, findings, requirements, summary } }.
   */
  private parseComplianceResponse(
    raw: string,
    options: AnalysisOptions,
  ): { compliance: AiAnalysisResponse['compliance'] } {
    const cleaned = this.stripMarkdownFences(raw);
    let parsed: any;
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      throw new AiResponseParseError(
        'Invalid JSON from AI model (compliance evaluation)',
        raw,
      );
    }

    if (options.compliance) {
      const { compliance } = parsed;
      if (!compliance) {
        throw new AiResponseParseError(
          'Missing "compliance" domain in compliance evaluation response',
          raw,
        );
      }
      if (!compliance.overallVerdict) {
        throw new AiResponseParseError('Missing "compliance.overallVerdict"', raw);
      }
      if (!compliance.riskLevel) {
        throw new AiResponseParseError('Missing "compliance.riskLevel"', raw);
      }
      if (!Array.isArray(compliance.findings)) {
        throw new AiResponseParseError('"compliance.findings" must be an array', raw);
      }
      if (!Array.isArray(compliance.requirements)) {
        throw new AiResponseParseError(
          '"compliance.requirements" must be an array',
          raw,
        );
      }
    }

    return { compliance: parsed.compliance ?? null };
  }

  private stripMarkdownFences(raw: string): string {
    const trimmed = raw.trim();
    if (!trimmed.startsWith('```')) return trimmed;
    return trimmed
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```\s*$/, '');
  }

  private validateResponse(parsed: AiAnalysisResponse, raw: string, options: AnalysisOptions): void {
    if (!parsed.summary || typeof parsed.summary !== 'string') {
      throw new AiResponseParseError('Missing or invalid "summary"', raw);
    }

    if (!parsed.contract) {
      throw new AiResponseParseError('Missing "contract" domain', raw);
    }

    if (options.compliance) {
      if (!parsed.compliance) {
        throw new AiResponseParseError('Missing "compliance" domain when requested', raw);
      }

      const { compliance } = parsed;

      if (!compliance.overallVerdict) {
        throw new AiResponseParseError(
          'Missing "compliance.overallVerdict"',
          raw,
        );
      }

      if (!compliance.riskLevel) {
        throw new AiResponseParseError('Missing "compliance.riskLevel"', raw);
      }

      if (!Array.isArray(compliance.findings)) {
        throw new AiResponseParseError(
          '"compliance.findings" must be an array',
          raw,
        );
      }

      if (!Array.isArray(compliance.requirements)) {
        throw new AiResponseParseError(
          '"compliance.requirements" must be an array',
          raw,
        );
      }
    }
  }
}

// ── Orchestrator ──────────────────────────────────────────────────────────────

/**
 * Orchestrates the full compliance-analysis pipeline:
 *
 *   validate document → retrieve chunks → run analysis stages →
 *   merge stage results → persist (AIResponse + AnalysisResult + Findings)
 *
 * ## Extensibility
 *
 * The pipeline is composed of `AnalysisStage` implementations provided at
 * construction time via `stages`. To introduce multi-stage analysis:
 *
 * ```ts
 * new AnalysisOrchestratorService(
 *   prisma, chunkRetrieval, config,
 *   [contractStage, complianceStage],   // two stages, two AI calls
 * )
 * ```
 *
 * Each stage returns a `Partial<AiAnalysisResponse>` which is deep-merged
 * into the accumulated result.  The orchestrator never needs to change.
 *
 * For the current single-stage implementation, `CombinedAnalysisStage` is
 * injected automatically via NestJS DI.
 */
@Injectable()
export class AnalysisOrchestratorService {
  private readonly logger = new Logger(AnalysisOrchestratorService.name);
  private readonly maxRetries: number;

  constructor(
    private readonly prisma: PrismaService,
    private readonly chunkRetrieval: ChunkRetrievalService,
    private readonly config: ConfigService,
    /**
     * Ordered list of analysis stages to execute.
     * Inject `[CombinedAnalysisStage]` for the current single-call pipeline.
     * Add more stages here when splitting into multi-stage workflows.
     */
    private readonly stages: AnalysisStage[],
  ) {
    this.maxRetries = this.config.get<number>('ANALYSIS_MAX_RETRIES', 3);
  }

  /**
   * Run the full analysis pipeline for a given AnalysisRequest.
   *
   * @param requestId UUID of an existing AnalysisRequest (status: pending).
   */
  async analyzeDocument(
    requestId: string,
    options: AnalysisOptions = DEFAULT_ANALYSIS_OPTIONS,
  ): Promise<void> {
    const pipelineStart = Date.now();
    this.logger.log(`[PIPELINE START] analyzeDocument for requestId: ${requestId}`);

    // ── 1. Load request + document ─────────────────────────────────────────
    this.logger.log(`[AWAIT START] prisma.analysisRequest.findUnique`);
    const reqFetchStart = Date.now();
    const request = await this.prisma.analysisRequest.findUnique({
      where: { id: requestId },
      include: { document: true },
    });
    this.logger.log(`[AWAIT END] prisma.analysisRequest.findUnique took ${Date.now() - reqFetchStart}ms`);

    if (!request) {
      this.logger.error(`[PIPELINE ERROR] AnalysisRequest ${requestId} not found`);
      throw new NotFoundException(`AnalysisRequest ${requestId} not found`);
    }

    if (!request.document) {
      this.logger.error(`[PIPELINE ERROR] AnalysisRequest ${requestId} has no associated document`);
      throw new BadRequestException(
        `AnalysisRequest ${requestId} has no associated document`,
      );
    }

    // ── 2. Validate document readiness ─────────────────────────────────────
    if (request.document.status !== 'ready') {
      this.logger.warn(`[PIPELINE ERROR] Document status not ready (status: ${request.document.status})`);
      this.logger.log(`[AWAIT START] markFailed`);
      await this.markFailed(
        requestId,
        `Document ${request.document.id} is not ready (status: ${request.document.status})`,
      );
      this.logger.log(`[AWAIT END] markFailed completed`);
      throw new BadRequestException(
        `Document is not ready for analysis (status: ${request.document.status}). ` +
          'Upload and process the document first.',
      );
    }

    // ── 3. Guard retries ───────────────────────────────────────────────────
    if (request.attemptCount >= this.maxRetries) {
      this.logger.warn(`[PIPELINE ERROR] Max retries (${this.maxRetries}) exceeded (current attemptCount: ${request.attemptCount})`);
      this.logger.log(`[AWAIT START] markFailed`);
      await this.markFailed(
        requestId,
        `Max retries (${this.maxRetries}) exceeded`,
      );
      this.logger.log(`[AWAIT END] markFailed completed`);
      throw new BadRequestException(
        `Analysis request ${requestId} has exceeded the maximum retry count (${this.maxRetries}).`,
      );
    }

    // ── 4. Mark processing ─────────────────────────────────────────────────
    this.logger.log(`[AWAIT START] prisma.analysisRequest.update status to processing`);
    const updateProcStart = Date.now();
    await this.prisma.analysisRequest.update({
      where: { id: requestId },
      data: {
        status: AnalysisRequestStatus.processing,
        processingStartedAt: new Date(),
        attemptCount: { increment: 1 },
        errorMessage: null,
      },
    });
    this.logger.log(`[AWAIT END] prisma.analysisRequest.update took ${Date.now() - updateProcStart}ms`);

    try {
      // ── 5. Retrieve chunks ─────────────────────────────────────────────
      this.logger.log(`[AWAIT START] chunkRetrieval.getRelevantChunks`);
      const chunkFetchStart = Date.now();
      const chunks = await this.chunkRetrieval.getRelevantChunks(
        request.document.id,
        request.queryText,
      );
      this.logger.log(`[AWAIT END] chunkRetrieval.getRelevantChunks took ${Date.now() - chunkFetchStart}ms (chunks returned: ${chunks.length})`);

      if (chunks.length === 0) {
        throw new BadRequestException(
          `Document ${request.document.id} has no chunks. ` +
            'The document may not have been processed correctly.',
        );
      }

      // ── 6. Run analysis stages ─────────────────────────────────────────
      this.logger.log(
        `[FLOW] Running ${this.stages.length} analysis stage(s) for request ${requestId} ` +
          `(model stages: ${this.stages.map((s) => s.name).join(' → ')}, chunks=${chunks.length})`,
      );

      this.logger.log(`[AWAIT START] runStages`);
      const stagesStart = Date.now();
      const parsed = await this.runStages({
        requestId,
        documentId: request.document.id,
        queryText: request.queryText,
        chunks,
        result: {},
        options,
      });
      this.logger.log(`[AWAIT END] runStages took ${Date.now() - stagesStart}ms`);

      // ── 7. Persist everything in a single transaction ──────────────────
      this.logger.log(`[AWAIT START] persist (sequential db writes)`);
      const persistStart = Date.now();
      await this.persist(requestId, request.document.id, parsed, chunks, options);
      this.logger.log(`[AWAIT END] persist took ${Date.now() - persistStart}ms`);

      this.logger.log(
        `[PIPELINE SUCCESS] Analysis ${requestId} completed in ${Date.now() - pipelineStart}ms: ` +
          `verdict=${parsed.compliance?.overallVerdict ?? 'skipped'}, ` +
          `risk=${parsed.compliance?.riskLevel ?? 'skipped'}, ` +
          `findings=${parsed.compliance?.findings?.length ?? 0}, ` +
          `requirements=${parsed.compliance?.requirements?.length ?? 0}`,
      );
    } catch (err) {
      const message = (err as Error).message ?? 'Unknown error';
      this.logger.error(
        `[PIPELINE FAILURE] Analysis ${requestId} failed: ${message}`,
        (err as Error).stack,
      );
      this.logger.log(`[AWAIT START] markFailed after error`);
      const failStart = Date.now();
      await this.markFailed(requestId, message);
      this.logger.log(`[AWAIT END] markFailed took ${Date.now() - failStart}ms`);
      throw err;
    }
  }

  // ── Stage runner ───────────────────────────────────────────────────────────

  /**
   * Executes every registered stage in order, merging each stage's partial
   * result into the accumulated context.
   *
   * A stage may read `ctx.result` to access output from earlier stages.
   */
  private async runStages(
    ctx: AnalysisStageContext,
  ): Promise<AiAnalysisResponse> {
    for (const stage of this.stages) {
      this.logger.log(`[STAGE START] Executing stage: ${stage.name}`);
      const stageStart = Date.now();
      const partial = await stage.run(ctx);
      this.logger.log(`[STAGE END] Stage: ${stage.name} finished in ${Date.now() - stageStart}ms`);
      ctx.result = this.mergePartial(ctx.result, partial);
    }

    // After all stages, the accumulated result must satisfy AiAnalysisResponse.
    // The CombinedAnalysisStage always returns a full response, so this cast
    // is safe. Multi-stage pipelines must ensure all fields are covered.
    return ctx.result as AiAnalysisResponse;
  }

  /**
   * Shallow-merges a partial result onto the accumulator.
   * Top-level keys from `incoming` overwrite keys in `acc`.
   */
  private mergePartial(
    acc: Partial<AiAnalysisResponse>,
    incoming: Partial<AiAnalysisResponse>,
  ): Partial<AiAnalysisResponse> {
    return { ...acc, ...incoming };
  }

  // ── Persistence ────────────────────────────────────────────────────────────

  private async persist(
    requestId: string,
    documentId: string,
    parsed: AiAnalysisResponse,
    chunks: Awaited<ReturnType<ChunkRetrievalService['getRelevantChunks']>>,
    options: AnalysisOptions,
  ): Promise<void> {
    // NOTE: We use sequential awaits instead of prisma.$transaction(async tx=>{...})
    // because Neon's transaction-mode pooler (used in production) does NOT support
    // interactive transactions (Prisma P2028). Each step is idempotent-ish and the
    // outer try/catch in analyzeDocument() calls markFailed() on any error.

    // 1. Store the raw AI response (both domains preserved as JSON)
    const aiResponse = await this.prisma.aIResponse.create({
      data: {
        requestId,
        response: parsed as unknown as Prisma.InputJsonValue,
        metadata: {
          stages: this.stages.map((s) => s.name),
          chunksUsed: chunks.length,
          options,
        } as any,
        matchedChunks: chunks.map((c) => ({
          chunkId: c.id,
          chunkIndex: c.chunkIndex,
          pageNumber: c.pageNumber,
        })),
      },
    });

    // 2. Create the normalised AnalysisResult row
    const analysisResult = await this.prisma.analysisResult.create({
      data: {
        responseId: aiResponse.id,
        summary: parsed.summary,
        overallVerdict: parsed.compliance
          ? this.mapVerdict(parsed.compliance.overallVerdict)
          : AnalysisVerdict.unknown,
        riskLevel: parsed.compliance
          ? this.mapRiskLevel(parsed.compliance.riskLevel)
          : RiskLevel.medium,
      },
    });

    // 3. Persist finding rows
    if (parsed.compliance && Array.isArray(parsed.compliance.findings) && parsed.compliance.findings.length > 0) {
      await this.prisma.finding.createMany({
        data: parsed.compliance.findings.map((f: AiFinding) => ({
          analysisId: analysisResult.id,
          title: f.title,
          description: f.description ?? null,
          severity: this.mapSeverity(f.severity),
          clauseReference: f.clauseReference ?? null,
          pageNumber: f.pageNumber ?? null,
          excerpt: f.excerpt ?? null,
          recommendation: f.recommendation ?? null,
          // affectedRequirement and category are not DB columns (per spec);
          // they are stored in the parent AIResponse.response JSON blob.
          metadata: {
            ...(f.metadata ?? {}),
            category: f.category ?? null,
            affectedRequirement: f.affectedRequirement ?? null,
          } as Prisma.InputJsonValue,
        })),
      });
    }

    // 4. Mark request as completed
    await this.prisma.analysisRequest.update({
      where: { id: requestId },
      data: {
        status: AnalysisRequestStatus.completed,
        processingFinishedAt: new Date(),
        errorMessage: null,
      },
    });

    // 5. Propagate expiration date to the Document record
    await this.updateExpirationDate(
      documentId,
      parsed.contract.expirationDate,
    );
  }

  private async updateExpirationDate(
    documentId: string,
    expirationDate: string | null,
  ): Promise<void> {
    if (!expirationDate) return;

    const parsedDate = new Date(expirationDate);
    if (isNaN(parsedDate.getTime())) {
      this.logger.warn(
        `AI returned an invalid expirationDate: "${expirationDate}" — skipping update`,
      );
      return;
    }

    await this.prisma.document.update({
      where: { id: documentId },
      data: { expirationDate: parsedDate },
    });
    this.logger.log(
      `Document ${documentId} expiration date set to ${expirationDate}`,
    );
  }

  // ── Status helpers ─────────────────────────────────────────────────────────

  private async markFailed(
    requestId: string,
    errorMessage: string,
  ): Promise<void> {
    await this.prisma.analysisRequest
      .update({
        where: { id: requestId },
        data: {
          status: AnalysisRequestStatus.failed,
          processingFinishedAt: new Date(),
          errorMessage: errorMessage.slice(0, 2000),
        },
      })
      .catch((err) =>
        this.logger.error(
          `Failed to mark request ${requestId} as failed`,
          err,
        ),
      );
  }

  // ── Enum mappers ───────────────────────────────────────────────────────────

  private mapVerdict(v: string): AnalysisVerdict {
    const map: Record<string, AnalysisVerdict> = {
      compliant: AnalysisVerdict.compliant,
      non_compliant: AnalysisVerdict.non_compliant,
      partial: AnalysisVerdict.partial,
      unknown: AnalysisVerdict.unknown,
    };
    return map[v] ?? AnalysisVerdict.unknown;
  }

  private mapRiskLevel(r: string): RiskLevel {
    const map: Record<string, RiskLevel> = {
      low: RiskLevel.low,
      medium: RiskLevel.medium,
      high: RiskLevel.high,
    };
    return map[r] ?? RiskLevel.medium;
  }

  private mapSeverity(s: string): FindingSeverity {
    const map: Record<string, FindingSeverity> = {
      info: FindingSeverity.info,
      low: FindingSeverity.low,
      medium: FindingSeverity.medium,
      high: FindingSeverity.high,
      critical: FindingSeverity.critical,
    };
    return map[s] ?? FindingSeverity.info;
  }
}
