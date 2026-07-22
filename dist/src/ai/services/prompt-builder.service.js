"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptBuilderService = void 0;
const common_1 = require("@nestjs/common");
const analysis_options_interface_1 = require("../interfaces/analysis-options.interface");
let PromptBuilderService = class PromptBuilderService {
    buildAnalysisPrompt(userQuery, chunks, options = analysis_options_interface_1.DEFAULT_ANALYSIS_OPTIONS) {
        return [
            { role: 'system', content: this.buildSystemPrompt(options) },
            {
                role: 'user',
                content: this.buildUserPrompt(userQuery, chunks, options),
            },
        ];
    }
    buildSystemPrompt(options) {
        return [
            `You are a legal/compliance analyst reviewing a contract.`,
            this.systemObjective(options),
            this.systemRules(options),
            `SCHEMA — return EXACTLY these 4 top-level keys, no markdown, no extra text:\n{\n  "answer": "<see above>",\n  "summary": "<2-5 sentence executive summary, independent of user request>",\n  "contract": ${this.buildContractSchema(options)},\n  "compliance": ${this.buildComplianceSchema(options)}\n}`,
        ].join('\n\n');
    }
    systemObjective(options) {
        const complianceGoal = options.compliance
            ? ` and evaluate compliance risk (missing clauses, unfavorable terms, ambiguous obligations, red flags).`
            : `.`;
        return `TWO OBJECTIVES (independent — don't let one affect the other):
1) "answer": if the user asked something, answer it directly, honoring any format constraint (word limit, one sentence, list, yes/no). No padding. If no question, put a 1-2 sentence document orientation here instead.
2) "summary"/"contract"/"compliance": always do the full requested extraction${complianceGoal} Never filtered or shaped by the user's question.`;
    }
    systemRules(options) {
        const rules = [
            `Return ONLY valid JSON, no markdown wrapping.`,
            `Always include every schema field, using null/empty as appropriate.`,
            `"answer" must satisfy the user's request and format constraint exactly; never pad it.`,
            `"summary"/"contract"/"compliance" are always the full general analysis, never narrowed by the user's request.`,
        ];
        if (options.compliance) {
            rules.push(`Back every compliance decision with evidence (quote/paraphrase). Never invent facts — use "unknown"/null with a reason if evidence is missing.`, `confidence: 0-1. Lower it when evidence is ambiguous/conflicting; note contradictions as findings.`, `findings must have ≥1 item (use an informational one if nothing else applies).`);
        }
        rules.push(`expirationDate: ISO 8601 (YYYY-MM-DD) or null. Look for "expires/expiration/term ends/valid through/end date".`, `Include clauseReference/pageNumber where available.`);
        if (options.compliance) {
            rules.push(`compliance.summary counts must match the actual requirement statuses.`);
        }
        const disabled = [];
        if (!options.contract.parties)
            disabled.push('parties');
        if (!options.contract.obligations)
            disabled.push('obligations');
        if (!options.contract.paymentTerms)
            disabled.push('paymentTerms');
        if (!options.contract.penalties)
            disabled.push('penalties');
        if (!options.contract.renewalTerms)
            disabled.push('renewalTerms', 'terminationTerms');
        if (!options.contract.importantDates)
            disabled.push('importantDates');
        if (!options.missingClauses)
            disabled.push('missingClauses');
        if (disabled.length > 0) {
            rules.push(`These contract keys were NOT requested — return null (not empty array/object): ${disabled.join(', ')}.`);
        }
        if (!options.compliance) {
            rules.push(`compliance was NOT requested — set "compliance" to null.`);
        }
        if (!options.recommendations && options.compliance) {
            rules.push(`recommendations were NOT requested — set all "recommendation" fields to null.`);
        }
        if (options.missingClauses &&
            Array.isArray(options.specificMissingClauses) &&
            options.specificMissingClauses.length > 0) {
            rules.push(`Targeted missing-clause scan — ONLY check for: ${options.specificMissingClauses.map((c) => `"${c}"`).join(', ')}. Report no others.`);
        }
        return `RULES:\n${rules.map((r, i) => `${i + 1}. ${r}`).join('\n')}`;
    }
    buildContractSchema(options) {
        const parties = options.contract.parties
            ? `[{"name":"","role":"<buyer|seller|supplier|customer|employee|employer|landlord|tenant|contractor|client|other>","type":"<corporation|llc|individual|government|nonprofit|unknown>","address":null,"signatory":null,"title":null}]`
            : `null`;
        const obligations = options.contract.obligations
            ? `[{"party":"","obligation":"","deadline":null,"frequency":"<one-time|monthly|annually|recurring|null>","clauseReference":null,"pageNumber":null}]`
            : `null`;
        const paymentTerms = options.contract.paymentTerms
            ? `[{"description":"","amount":null,"currency":null,"frequency":"<monthly|quarterly|yearly|one-time|recurring|null>","dueDate":null,"latePenalty":null,"clauseReference":null,"pageNumber":null}]`
            : `null`;
        const penalties = options.contract.penalties
            ? `[{"type":"<late payment|breach|termination|service level|indemnity|other>","penalty":"","trigger":"","clauseReference":null,"pageNumber":null}]`
            : `null`;
        const renewalTerms = options.contract.renewalTerms
            ? `[{"type":"<automatic|optional|evergreen|fixed-term renewal|other>","period":null,"noticePeriod":null,"clauseReference":null,"pageNumber":null}]`
            : `null`;
        const terminationTerms = options.contract.renewalTerms
            ? `{"terminationNotice":null,"terminationConditions":[""]}`
            : `null`;
        const importantDates = options.contract.importantDates
            ? `[{"label":"<Effective Date|Expiration|Renewal|Payment|Delivery|Notice|Termination>","date":"","pageNumber":null}]`
            : `null`;
        const missingClauses = options.missingClauses
            ? `[{"name":"","importance":"<low|medium|high>","reason":""}]`
            : `null`;
        return `{"expirationDate":null,"parties":${parties},"obligations":${obligations},"paymentTerms":${paymentTerms},"penalties":${penalties},"renewalTerms":${renewalTerms},"terminationTerms":${terminationTerms},"governingLaw":null,"importantDates":${importantDates},"missingClauses":${missingClauses}}`;
    }
    buildComplianceSchema(options) {
        if (!options.compliance)
            return `null`;
        const recSchema = options.recommendations ? `""` : `null`;
        const findingsRecSchema = options.recommendations ? `""` : `null`;
        return `{"overallVerdict":"<compliant|partial|non_compliant|unknown>","riskLevel":"<low|medium|high>","confidence":0,"summary":{"passed":0,"failed":0,"partial":0,"unknown":0},"requirements":[{"requirement":"","status":"<met|partial|unmet|unknown>","reason":"","evidence":null,"pageNumber":null,"clauseReference":null,"confidence":0,"recommendation":${recSchema}}],"findings":[{"title":"","description":"","severity":"<info|low|medium|high|critical>","category":"<legal|compliance|financial|security|operational>","affectedRequirement":null,"pageNumber":null,"clauseReference":null,"excerpt":null,"recommendation":${findingsRecSchema},"metadata":{}}]}`;
    }
    buildUserPrompt(userQuery, chunks, options) {
        return [
            this.userRequestSection(userQuery),
            this.userAnalysisSection(options),
            this.userDocumentContext(chunks),
            `Return the JSON object now, matching the schema exactly.`,
        ].join('\n\n');
    }
    userRequestSection(userQuery) {
        const trimmed = userQuery?.trim();
        if (!trimmed) {
            return `No user question was asked — "answer" should just be a 1-2 sentence orientation (document type, main parties).`;
        }
        return `USER REQUEST (drives "answer" only): "${trimmed}"\nAnswer directly, honor any format constraint, no padding. Does not affect summary/contract/compliance.`;
    }
    userAnalysisSection(options) {
        const bullets = [];
        if (options.contract.parties)
            bullets.push('parties');
        if (options.contract.obligations)
            bullets.push('obligations');
        if (options.contract.paymentTerms)
            bullets.push('paymentTerms');
        if (options.contract.penalties)
            bullets.push('penalties');
        if (options.contract.renewalTerms)
            bullets.push('renewal/termination terms');
        if (options.contract.importantDates)
            bullets.push('important dates');
        if (options.missingClauses)
            bullets.push('missing clauses');
        const lines = [
            `STANDALONE ANALYSIS (always run, regardless of user request):`,
            bullets.length > 0
                ? `Extract: ${bullets.join(', ')}. All other contract keys stay null.`
                : `All contract toggles disabled — set contract sub-fields to null (except expirationDate/governingLaw).`,
        ];
        if (options.missingClauses) {
            const specific = options.specificMissingClauses;
            lines.push(Array.isArray(specific) && specific.length > 0
                ? `Missing clauses: ONLY check for ${specific.join(', ')}; report which are absent/insufficient.`
                : `Missing clauses: identify standard clauses absent for this contract type (e.g. limitation of liability, dispute resolution, confidentiality, force majeure, governing law).`);
        }
        if (options.compliance) {
            lines.push(`Compliance: assess against standard contract-review criteria (weak/missing clauses, unfavorable terms, ambiguous obligations, conflicts, red flags). Give each requirement a status, evidence${options.recommendations ? ', and a recommendation if not fully met' : ' (recommendations null)'}. Aggregate into summary counts + overallVerdict/riskLevel.`, `Findings: ≥1 item, may include risks/conflicts/observations, link to affectedRequirement where relevant.${options.recommendations ? '' : ' recommendation fields null.'}`);
        }
        else {
            lines.push(`Compliance disabled — "compliance" field must be null.`);
        }
        lines.push(`Write a 2-5 sentence executive summary independent of the user request.`);
        return lines.join('\n');
    }
    userDocumentContext(chunks) {
        const documentContext = chunks
            .map((c) => `--- ${c.pageNumber ? `Page ${c.pageNumber}` : `Chunk ${c.chunkIndex}`} ---\n${c.content}`)
            .join('\n\n');
        return `DOCUMENT CONTENT\n================\n${documentContext}`;
    }
};
exports.PromptBuilderService = PromptBuilderService;
exports.PromptBuilderService = PromptBuilderService = __decorate([
    (0, common_1.Injectable)()
], PromptBuilderService);
//# sourceMappingURL=prompt-builder.service.js.map