import { Injectable } from '@nestjs/common';
import type { AiChatMessage } from '../interfaces/ai-provider.interface';
import {
  AnalysisOptions,
  DEFAULT_ANALYSIS_OPTIONS,
} from '../interfaces/analysis-options.interface';

/**
 * Builds the chat message array sent to the AI provider.
 *
 * Responsibilities:
 *  - Compose the system prompt that frames the AI's role and dynamic output schema.
 *  - Compose the user prompt that presents the user's request (if any), options,
 *    and the document chunks.
 *
 * Design note — separation of concerns:
 *   The response has two independent halves:
 *     1. `answer`   — a direct response to whatever the user asked, honoring
 *                     any formatting constraint they specified.
 *     2. `summary` / `contract` / `compliance` — the complete structured
 *                     analysis for the analysis page.
 *
 * This service is dynamic and constructs the schema strings and instruction blocks
 * based on the passed `AnalysisOptions`.
 */
@Injectable()
export class PromptBuilderService {
  /**
   * Builds messages for a combined answer + contract-extraction +
   * compliance-evaluation request.
   *
   * @param userQuery Optional free-text request from the user.
   * @param chunks Document text chunks to analyze.
   * @param options Selection of analysis sections to execute.
   */
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

  // ── System prompt ─────────────────────────────────────────────────────────

  private buildSystemPrompt(options: AnalysisOptions): string {
    return [
      this.systemRole(),
      this.systemObjective(options),
      this.systemRules(options),
      this.systemSchema(options),
    ].join('\n\n');
  }

  private systemRole(): string {
    return `You are an expert legal compliance analyst specialising in contract review and regulatory compliance assessment.`;
  }

  private systemObjective(options: AnalysisOptions): string {
    const complianceGoal = options.compliance
      ? `evaluate general legal/compliance risk using standard contract-review criteria (missing clauses, unfavorable terms, ambiguous obligations, regulatory red flags, etc).`
      : `[Skipped: Compliance evaluation has been disabled for this run]`;

    return `YOUR TWO OBJECTIVES (they are independent — do not let one influence the other)
==============================================================================

OBJECTIVE 1 — Answer the user directly (populates the "answer" field only)
If the user has asked a specific question or request, that request is the
single most important thing you produce. Answer it directly and completely,
and treat any formatting constraint they gave (a word limit, "in one
sentence", "yes or no", "as a bullet list", a number of items, etc.) as a
hard requirement, not a suggestion. Do not pad the answer with unrelated
analysis, disclaimers, or a restatement of the whole contract. If no
question was asked, the "answer" field instead holds a brief 1–2 sentence
orientation to the document (what it is, between whom).

OBJECTIVE 2 — Produce the complete standalone analysis (populates "summary",
"contract", and "compliance")
Regardless of what the user asked, or whether they asked anything at all,
you always perform the requested contract extraction and compliance review
of the document based on the active options. This analysis must be identical
in depth and coverage whether or not a question was asked — it feeds a
dedicated analysis page and must never be trimmed, filtered, or reframed
around the user's question. Extract the requested fields (parties, dates,
obligations, payment terms, penalties, etc.), and ${complianceGoal}`;
  }

  private systemRules(options: AnalysisOptions): string {
    const rules = [
      `1.  Return ONLY valid JSON. Never wrap the response in markdown. Never include any text outside the JSON.`,
      `2.  Always return every top-level field defined in the schema, even if its value is an empty array, empty string, or null.`,
      `3.  The "answer" field must satisfy the user's request exactly as asked, including any explicit formatting constraint (word/character limit, sentence count, list vs prose, yes/no, etc). Violating a stated constraint is a failure.`,
      `4.  The "answer" field must never be padded with content the user didn't ask for. If they asked for penalties only, answer with penalties only.`,
      `5.  The contents of "summary", "contract", and "compliance" must NEVER be filtered, narrowed, or biased by the user's request — they are always the full, general analysis, computed independently of "answer".`,
    ];

    let ruleNum = 6;
    if (options.compliance) {
      rules.push(
        `${ruleNum++}.  Every compliance decision MUST be backed by evidence from the document text. Quote or paraphrase the relevant clause.`,
        `${ruleNum++}.  Never invent facts anywhere in the response. If you cannot find evidence for something, use "unknown" / null and explain why where a reason field exists.`,
        `${ruleNum++}.  confidence values must be between 0 and 1 (inclusive). Lower confidence when evidence is ambiguous or conflicting.`,
        `${ruleNum++}.  If conflicting clauses are detected (e.g. two sections that contradict each other), report the conflict in a finding and reduce the confidence score for the affected requirement.`,
        `${ruleNum++}.  findings MUST contain at least one item. If no material risk exists, include an informational finding summarising the document.`,
      );
    }

    rules.push(
      `${ruleNum++}.  expirationDate must be an ISO 8601 date string (YYYY-MM-DD). Look for "expires", "expiration", "term ends", "valid through", "end date". Return null if not found.`,
      `${ruleNum++}.  Include clauseReference and pageNumber wherever available.`,
    );

    if (options.compliance) {
      rules.push(
        `${ruleNum++}.  The compliance.summary counts (passed / failed / partial / unknown) must match the actual status values in compliance.requirements.`,
      );
    }

    // Dynamic instructions for not requested sections
    const disabledContractSections: string[] = [];
    if (!options.contract.parties) disabledContractSections.push('parties');
    if (!options.contract.obligations) disabledContractSections.push('obligations');
    if (!options.contract.paymentTerms) disabledContractSections.push('paymentTerms');
    if (!options.contract.penalties) disabledContractSections.push('penalties');
    if (!options.contract.renewalTerms) {
      disabledContractSections.push('renewalTerms');
      disabledContractSections.push('terminationTerms');
    }
    if (!options.contract.importantDates) disabledContractSections.push('importantDates');
    if (!options.missingClauses) disabledContractSections.push('missingClauses');

    if (disabledContractSections.length > 0) {
      rules.push(
        `${ruleNum++}.  For the following contract keys that were NOT requested, you MUST return null (do NOT return empty arrays or objects): ${disabledContractSections.join(', ')}.`,
      );
    }

    if (!options.compliance) {
      rules.push(
        `${ruleNum++}.  Since compliance was NOT requested, the "compliance" field MUST be set to null.`,
      );
    }

    if (!options.recommendations && options.compliance) {
      rules.push(
        `${ruleNum++}.  Since recommendations were NOT requested, all "recommendation" sub-fields inside requirements and findings MUST be set to null.`,
      );
    }

    return `RULES (follow all of them without exception)
=============================================
${rules.join('\n')}`;
  }

  private systemSchema(options: AnalysisOptions): string {
    return `REQUIRED JSON SCHEMA
====================
Return an object with EXACTLY these four top-level keys:

{
  "answer": "<direct response to the user's request, respecting any formatting constraint they gave; or a brief 1-2 sentence document orientation if no request was made>",
  "summary": "<2–5 sentence executive summary of the full document analysis, independent of the user's request>",
  "contract": ${this.buildContractSchema(options)},
  "compliance": ${this.buildComplianceSchema(options)}
}`;
  }

  // ── Dynamic Schema Builders ────────────────────────────────────────────────

  private buildContractSchema(options: AnalysisOptions): string {
    const parties = options.contract.parties
      ? `[
    {
      "name": "<legal entity name>",
      "role": "<buyer | seller | supplier | customer | employee | employer | landlord | tenant | contractor | client | other>",
      "type": "<corporation | llc | individual | government | nonprofit | unknown>",
      "address": "<address or null>",
      "signatory": "<signing person or null>",
      "title": "<job title or null>"
    }
  ]`
      : `null`;

    const obligations = options.contract.obligations
      ? `[
    {
      "party": "<party name>",
      "obligation": "<required action>",
      "deadline": "<date or null>",
      "frequency": "<one-time | monthly | annually | recurring | null>",
      "clauseReference": "<section or null>",
      "pageNumber": <number or null>
    }
  ]`
      : `null`;

    const paymentTerms = options.contract.paymentTerms
      ? `[
    {
      "description": "<payment obligation description>",
      "amount": "<amount or null>",
      "currency": "<currency or null>",
      "frequency": "<monthly | quarterly | yearly | one-time | recurring | null>",
      "dueDate": "<date or null>",
      "latePenalty": "<description or null>",
      "clauseReference": "<section or null>",
      "pageNumber": <number or null>
    }
  ]`
      : `null`;

    const penalties = options.contract.penalties
      ? `[
    {
      "type": "<late payment | breach | termination | service level | indemnity | other>",
      "penalty": "<penalty description>",
      "trigger": "<what causes this penalty>",
      "clauseReference": "<section or null>",
      "pageNumber": <number or null>
    }
  ]`
      : `null`;

    const renewalTerms = options.contract.renewalTerms
      ? `[
    {
      "type": "<automatic | optional | evergreen | fixed-term renewal | other>",
      "period": "<renewal period or null>",
      "noticePeriod": "<notice period or null>",
      "clauseReference": "<section or null>",
      "pageNumber": <number or null>
    }
  ]`
      : `null`;

    const terminationTerms = options.contract.renewalTerms
      ? `{
    "terminationNotice": "<text or null>",
    "terminationConditions": ["<condition>"]
  }`
      : `null`;

    const importantDates = options.contract.importantDates
      ? `[
    {
      "label": "<Effective Date | Expiration | Renewal | Payment | Delivery | Notice | Termination>",
      "date": "<ISO date or original text>",
      "pageNumber": <number or null>
    }
  ]`
      : `null`;

    const missingClauses = options.missingClauses
      ? `[
    {
      "name": "<missing clause name>",
      "importance": "<low | medium | high>",
      "reason": "<why this clause matters>"
    }
  ]`
      : `null`;

    return `{
  "expirationDate": "<ISO date e.g. '2027-01-31', or null>",
  "parties": ${parties},
  "obligations": ${obligations},
  "paymentTerms": ${paymentTerms},
  "penalties": ${penalties},
  "renewalTerms": ${renewalTerms},
  "terminationTerms": ${terminationTerms},
  "governingLaw": "<state/country or null>",
  "importantDates": ${importantDates},
  "missingClauses": ${missingClauses}
}`;
  }

  private buildComplianceSchema(options: AnalysisOptions): string {
    if (!options.compliance) {
      return `null`;
    }

    const recSchema = options.recommendations
      ? `"<remediation action if not met, or null>"`
      : `null`;

    const findingsRecSchema = options.recommendations
      ? `"<recommended action or null>"`
      : `null`;

    return `{
  "overallVerdict": "<compliant | partial | non_compliant | unknown>",
  "riskLevel": "<low | medium | high>",
  "confidence": <number 0-1>,
  "summary": {
    "passed": <number>,
    "failed": <number>,
    "partial": <number>,
    "unknown": <number>
  },
  "requirements": [
    {
      "requirement": "<the specific requirement being evaluated>",
      "status": "<met | partial | unmet | unknown>",
      "reason": "<explanation of the verdict>",
      "evidence": "<verbatim or paraphrased document text supporting this decision, or null>",
      "pageNumber": <number or null>,
      "clauseReference": "<section or null>",
      "confidence": <number 0-1>,
      "recommendation": ${recSchema}
    }
  ],
  "findings": [
    {
      "title": "<short descriptive title>",
      "description": "<detailed explanation>",
      "severity": "<info | low | medium | high | critical>",
      "category": "<legal | compliance | financial | security | operational>",
      "affectedRequirement": "<requirement string or null>",
      "pageNumber": <number or null>,
      "clauseReference": "<section or null>",
      "excerpt": "<exact quotation from document, or null>",
      "recommendation": ${findingsRecSchema},
      "metadata": {}
    }
  ]
}`;
  }

  // ── User prompt ───────────────────────────────────────────────────────────

  private buildUserPrompt(
    userQuery: string,
    chunks: Array<{
      content: string;
      pageNumber: number | null;
      chunkIndex: number;
    }>,
    options: AnalysisOptions,
  ): string {
    return [
      this.userRequestSection(userQuery),
      this.userAnalysisSection(options),
      this.userDocumentContext(chunks),
      this.userClosingInstruction(userQuery, options),
    ].join('\n\n');
  }

  private userRequestSection(userQuery: string): string {
    const trimmed = userQuery?.trim();

    if (!trimmed) {
      return `USER REQUEST
============
No specific question was asked. For the "answer" field, provide only a brief
1–2 sentence orientation to the document (what kind of document it is, and
the main parties involved). Do not put analysis here — that belongs in
"summary", "contract", and "compliance".`;
    }

    return `USER REQUEST — this drives the "answer" field ONLY
====================================================
"${trimmed}"

Answer this directly and completely in the "answer" field. If the request
includes a formatting constraint (a word/character limit, "one sentence",
"yes or no", a bullet list, a specific number of items, etc), treat it as a
hard requirement. Do not answer with a generic compliance report — answer
exactly what was asked, nothing more. This request has no bearing on
"summary", "contract", or "compliance" — those are built independently, per
the instructions below.`;
  }

  private userAnalysisSection(options: AnalysisOptions): string {
    const steps: string[] = [];

    // Step 1 - contract
    const contractBullets: string[] = [];
    if (options.contract.parties) contractBullets.push('parties');
    if (options.contract.obligations) contractBullets.push('obligations');
    if (options.contract.paymentTerms) contractBullets.push('paymentTerms');
    if (options.contract.penalties) contractBullets.push('penalties');
    if (options.contract.renewalTerms) contractBullets.push('renewal terms and termination conditions');
    if (options.contract.importantDates) contractBullets.push('important dates');
    if (options.missingClauses) contractBullets.push('missing clauses');

    if (contractBullets.length > 0) {
      steps.push(`Step 1 — Extract the requested contract structure.
  • Identify: ${contractBullets.join(', ')}.
  • Keep all other contract structure keys as null.`);
    } else {
      steps.push(`Step 1 — Skip contract structure extraction (all contract toggles disabled). Set contract sub-fields to null (except expirationDate/governingLaw if present).`);
    }

    // Step 2, 3 - compliance
    if (options.compliance) {
      const recInstruction = options.recommendations
        ? 'and give a recommendation where not fully met'
        : 'do NOT provide recommendations (set them to null)';

      steps.push(`Step 2 — Evaluate general legal/compliance risk.
  • Assess the document against standard contract-review criteria: missing or weak clauses, unfavorable or one-sided terms, ambiguous obligations, conflicting clauses, and regulatory red flags relevant to the contract type.
  • For each identified requirement/criterion, assign a status (met / partial / unmet / unknown), cite evidence, ${recInstruction}.
  • Aggregate results into compliance.summary counts, and determine overallVerdict and riskLevel from the requirement evaluations.`);

      const findingsRecInstruction = options.recommendations
        ? 'Include recommendations where applicable.'
        : 'Set the recommendation field to null for all findings.';

      steps.push(`Step 3 — Report findings.
  • Include at least one finding. Findings may cover risks, conflicts, missing clauses, or plain observations — not only compliance failures.
  • Link each finding to an affectedRequirement where applicable.
  • ${findingsRecInstruction}`);
    } else {
      steps.push(`Step 2 & 3 — Skip compliance analysis. The "compliance" field must be null.`);
    }

    steps.push(`Step 4 — Write the executive summary.
  • 2–5 sentences summarizing the document as a whole, independent of whatever was asked in the user request.`);

    return `STANDALONE ANALYSIS — compute fields based on the requested options
========================================================================
This section runs regardless of the user request above.

${steps.join('\n\n')}

All of this must be grounded in the document chunks provided below.`;
  }

  private userDocumentContext(
    chunks: Array<{
      content: string;
      pageNumber: number | null;
      chunkIndex: number;
    }>,
  ): string {
    const documentContext = chunks
      .map((c) => {
        const label = c.pageNumber
          ? `Page ${c.pageNumber}`
          : `Chunk ${c.chunkIndex}`;
        return `--- ${label} ---\n${c.content}`;
      })
      .join('\n\n');

    return `DOCUMENT CONTENT\n================\n${documentContext}`;
  }

  private userClosingInstruction(userQuery: string, options: AnalysisOptions): string {
    const trimmed = userQuery?.trim();
    const answerReminder = trimmed
      ? `Remember: "answer" responds to the user request above and to nothing else; other fields are the standalone analysis and must not be shaped by that request.`
      : `Remember: "answer" is just a brief orientation since no question was asked; other fields are the standalone analysis.`;

    return `Now analyze the document and return the JSON object exactly matching the required schema.\n${answerReminder}`;
  }
}
