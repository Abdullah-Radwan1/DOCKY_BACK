import { Injectable } from '@nestjs/common';
import type { AiChatMessage } from '../interfaces/ai-provider.interface';

/**
 * Constructs the system + user prompts for compliance analysis.
 *
 * The system prompt instructs the model to return structured JSON that maps
 * directly to our Prisma schema (AnalysisResult + Finding).
 */
@Injectable()
export class PromptBuilderService {
  /**
   * Builds the full message array for a compliance analysis request.
   *
   * @param queryText  The user's compliance question / analysis instruction.
   * @param chunks     Document chunks with content and page numbers.
   */
  buildAnalysisPrompt(
    queryText: string,
    chunks: Array<{ content: string; pageNumber: number | null; chunkIndex: number }>,
  ): AiChatMessage[] {
    return [
      { role: 'system', content: this.systemPrompt() },
      { role: 'user', content: this.userPrompt(queryText, chunks) },
    ];
  }

  // ── Private ─────────────────────────────────────────────────────────────────

  private systemPrompt(): string {
    return `You are a senior compliance analyst AI. Your job is to analyze documents for regulatory compliance, contractual risks, and policy violations.

You MUST respond with valid JSON matching exactly the following schema — no markdown, no commentary, no wrapping:

{
  "summary": "<string — 2-4 sentence executive summary of compliance posture>",
  "overallVerdict": "<one of: compliant, non_compliant, partial, unknown>",
  "confidence": <number 0.0 to 1.0 — your confidence in the verdict>,
  "riskLevel": "<one of: low, medium, high>",
  "findings": [
    {
      "title": "<string — short title of the finding>",
      "description": "<string or null — detailed explanation>",
      "severity": "<one of: info, low, medium, high, critical>",
      "clauseReference": "<string or null — the specific clause, section, or article reference>",
      "pageNumber": <number or null — page where this issue appears>,
      "excerpt": "<string or null — exact quoted text from the document>",
      "recommendation": "<string or null — what should be done to remediate>",
      "metadata": <object or null — any extra structured data>
    }
  ]
}

Rules:
- Return ONLY the JSON object. No markdown code fences.
- The "findings" array must contain at least one item, even if it's an informational "no issues found" entry.
- "overallVerdict" must be exactly one of: compliant, non_compliant, partial, unknown.
- "severity" must be exactly one of: info, low, medium, high, critical.
- "riskLevel" must be exactly one of: low, medium, high.
- "confidence" must be a float between 0.0 and 1.0.
- Page numbers should reference the original document page numbers provided in the context.
- Quote exact text in "excerpt" when referencing specific document passages.
- Be thorough but precise. Prioritize actionable findings.`;
  }

  private userPrompt(
    queryText: string,
    chunks: Array<{ content: string; pageNumber: number | null; chunkIndex: number }>,
  ): string {
    const documentContext = chunks
      .map((c) => {
        const pageLabel = c.pageNumber ? `Page ${c.pageNumber}` : `Chunk ${c.chunkIndex}`;
        return `--- ${pageLabel} ---\n${c.content}`;
      })
      .join('\n\n');

    return `COMPLIANCE ANALYSIS REQUEST
========================

QUERY:
${queryText}

DOCUMENT CONTENT:
${documentContext}

Analyze the document content above in the context of the query. Return your analysis as the specified JSON structure.`;
  }
}
