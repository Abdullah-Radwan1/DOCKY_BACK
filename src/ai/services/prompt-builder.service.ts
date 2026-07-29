import { Injectable } from '@nestjs/common';
import type { AiChatMessage } from '../interfaces/ai-provider.interface';
import {
  AnalysisOptions,
  DEFAULT_ANALYSIS_OPTIONS,
} from '../interfaces/analysis-options.interface';

/**
 * Builds the chat message array sent to the AI provider.
 * Optimised for minimal token usage: single-pass rules, no repetition.
 */
@Injectable()
export class PromptBuilderService {
  buildAnalysisPrompt(
    userQuery: string,
    chunks: Array<{
      content: string;
      pageNumber: number | null;
      chunkIndex: number;
    }>,
    options: AnalysisOptions = DEFAULT_ANALYSIS_OPTIONS,
  ): AiChatMessage[] {
    return [
      { role: 'system', content: this.buildSystemPrompt(options) },
      { role: 'user', content: this.buildUserPrompt(userQuery, chunks, options) },
    ];
  }

  // ── System prompt ──────────────────────────────────────────────────────────

  private buildSystemPrompt(options: AnalysisOptions): string {
    const schema = `{"answer":"","summary":"","contract":${this.contractSchema(options)},"compliance":${this.complianceSchema(options)}}`;

    const rules: string[] = [
      `Return ONLY valid JSON matching the schema below. No markdown, no extra keys.`,
      `"answer": respond to the user request; if no request, give a 1-2 sentence document orientation. Never let this influence summary/contract/compliance.`,
      `"summary": 2-5 sentence executive summary, always independent of user request.`,
      `expirationDate: ISO 8601 (YYYY-MM-DD) or null.`,
      `Use null for fields not requested; use [] for requested sections with no data found.`,
    ];

    if (options.compliance) {
      rules.push(
        `compliance.findings must have ≥1 item. Back every decision with evidence; use null+reason when evidence is absent.`,
      );
    }

    const disabled: string[] = [];
    if (!options.contract.parties) disabled.push('parties');
    if (!options.contract.obligations) disabled.push('obligations');
    if (!options.contract.paymentTerms) disabled.push('paymentTerms');
    if (!options.contract.penalties) disabled.push('penalties');
    if (!options.contract.renewalTerms) disabled.push('renewalTerms', 'terminationTerms');
    if (!options.contract.importantDates) disabled.push('importantDates');
    if (!options.missingClauses) disabled.push('missingClauses');
    if (disabled.length > 0) rules.push(`Set these contract keys to null: ${disabled.join(', ')}.`);
    if (!options.compliance) rules.push(`Set "compliance" to null.`);
    if (!options.recommendations && options.compliance) rules.push(`All recommendation fields = null.`);
    if (options.missingClauses && Array.isArray(options.specificMissingClauses) && options.specificMissingClauses.length > 0) {
      rules.push(`Missing-clause scan: ONLY check for ${options.specificMissingClauses.map((c) => `"${c}"`).join(', ')}.`);
    }

    return [
      `You are a legal/compliance analyst. Extract and evaluate the contract provided.`,
      `RULES:\n${rules.map((r, i) => `${i + 1}. ${r}`).join('\n')}`,
      `SCHEMA:\n${schema}`,
    ].join('\n\n');
  }

  // ── Schema builders ────────────────────────────────────────────────────────

  private contractSchema(options: AnalysisOptions): string {
    const p = options.contract.parties
      ? `[{"name":"","role":"<buyer|seller|supplier|customer|employee|employer|landlord|tenant|contractor|client|other>","type":"<corporation|llc|individual|government|nonprofit|unknown>","address":null,"signatory":null,"title":null}]`
      : `null`;
    const o = options.contract.obligations
      ? `[{"party":"","obligation":"","deadline":null,"frequency":"<one-time|monthly|annually|recurring|null>","clauseReference":null,"pageNumber":null}]`
      : `null`;
    const pt = options.contract.paymentTerms
      ? `[{"description":"","amount":null,"currency":null,"frequency":"<monthly|quarterly|yearly|one-time|recurring|null>","dueDate":null,"latePenalty":null,"clauseReference":null,"pageNumber":null}]`
      : `null`;
    const pen = options.contract.penalties
      ? `[{"type":"<late payment|breach|termination|service level|indemnity|other>","penalty":"","trigger":"","clauseReference":null,"pageNumber":null}]`
      : `null`;
    const rt = options.contract.renewalTerms
      ? `[{"type":"<automatic|optional|evergreen|fixed-term renewal|other>","period":null,"noticePeriod":null,"clauseReference":null,"pageNumber":null}]`
      : `null`;
    const tt = options.contract.renewalTerms
      ? `{"terminationNotice":null,"terminationConditions":[""]}`
      : `null`;
    const id = options.contract.importantDates
      ? `[{"label":"<Effective Date|Expiration|Renewal|Payment|Delivery|Notice|Termination>","date":"","pageNumber":null}]`
      : `null`;
    const mc = options.missingClauses
      ? `[{"name":"","importance":"<low|medium|high>","reason":""}]`
      : `null`;

    return `{"expirationDate":null,"parties":${p},"obligations":${o},"paymentTerms":${pt},"penalties":${pen},"renewalTerms":${rt},"terminationTerms":${tt},"importantDates":${id},"missingClauses":${mc}}`;
  }

  private complianceSchema(options: AnalysisOptions): string {
    if (!options.compliance) return `null`;
    const rec = options.recommendations ? `""` : `null`;
    return `{"overallVerdict":"<compliant|partial|non_compliant|unknown>","riskLevel":"<low|medium|high>","summary":{"passed":0,"failed":0,"partial":0,"unknown":0},"requirements":[{"requirement":"","status":"<met|partial|unmet|unknown>","reason":"","evidence":null,"pageNumber":null,"clauseReference":null,"recommendation":${rec}}],"findings":[{"title":"","description":"","severity":"<info|low|medium|high|critical>","category":"<legal|compliance|financial|security|operational>","affectedRequirement":null,"pageNumber":null,"clauseReference":null,"excerpt":null,"recommendation":${rec},"metadata":{}}]}`;
  }

  // ── User prompt ────────────────────────────────────────────────────────────

  private buildUserPrompt(
    userQuery: string,
    chunks: Array<{ content: string; pageNumber: number | null; chunkIndex: number }>,
    options: AnalysisOptions,
  ): string {
    const sections: string[] = [];

    // User request section
    const trimmed = userQuery?.trim();
    if (trimmed) {
      sections.push(`USER REQUEST (for "answer" only): "${trimmed}"\nAnswer directly and concisely. Does not affect the structured analysis.`);
    } else {
      sections.push(`No user question — "answer" should be a 1-2 sentence document orientation.`);
    }

    // Analysis instructions
    const extracts: string[] = [];
    if (options.contract.parties) extracts.push('parties');
    if (options.contract.obligations) extracts.push('obligations');
    if (options.contract.paymentTerms) extracts.push('paymentTerms');
    if (options.contract.penalties) extracts.push('penalties');
    if (options.contract.renewalTerms) extracts.push('renewal+termination terms');
    if (options.contract.importantDates) extracts.push('important dates');
    if (options.missingClauses) {
      const specific = options.specificMissingClauses;
      extracts.push(
        Array.isArray(specific) && specific.length > 0
          ? `missing clauses (only: ${specific.join(', ')})`
          : `missing clauses (standard: liability, dispute resolution, confidentiality, force majeure, governing law)`,
      );
    }

    sections.push(
      extracts.length > 0
        ? `EXTRACT: ${extracts.join('; ')}.`
        : `All contract extractions disabled — set sub-fields to null.`,
    );

    if (options.compliance) {
      const recNote = options.recommendations ? 'include recommendation if status ≠ met' : 'recommendation = null';
      sections.push(`COMPLIANCE: evaluate weak/missing clauses, unfavorable terms, ambiguous obligations, conflicts, red flags. Per requirement: status + evidence + ${recNote}. Aggregate into summary counts + overallVerdict + riskLevel. ≥1 finding required.`);
    } else {
      sections.push(`compliance = null.`);
    }

    sections.push(`SUMMARY: write 2-5 sentence executive summary.`);

    // Document content
    const documentContext = chunks
      .map((c) => `--- ${c.pageNumber ? `Page ${c.pageNumber}` : `Chunk ${c.chunkIndex}`} ---\n${c.content}`)
      .join('\n\n');
    sections.push(`DOCUMENT CONTENT\n================\n${documentContext}`);

    return sections.join('\n\n');
  }
}
