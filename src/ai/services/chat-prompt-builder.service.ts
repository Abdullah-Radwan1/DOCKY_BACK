import { Injectable } from '@nestjs/common';
import type { AiChatMessage } from '../interfaces/ai-provider.interface';
import type {
  ChatPromptContext,
  ChatHistoryMessage,
} from '../interfaces/chat.interface';
import type { AiAnalysisResponse } from '../interfaces/ai-analysis-response.interface';

/**
 * Builds the chat-completion message array for conversational Q&A
 * about an already-analyzed document.
 *
 * ## What this service is NOT
 * - It does NOT trigger a new compliance analysis.
 * - It does NOT produce or validate any JSON schema.
 * - It has NO dependency on `PromptBuilderService`.
 *
 * ## What this service IS
 * A focused, stateless builder that combines:
 *   1. A fixed system prompt that defines DUCKY AI's role and behavior.
 *   2. A context block (document text + structured analysis) injected once,
 *      at the top of the conversation, so it is never repeated per-turn.
 *   3. Prior chat history, threaded in natural order.
 *   4. The current user message.
 *
 * This is a lighter-weight version: the identity/behavior prose is condensed
 * to reduce token load. The data-formatting helpers (contract/compliance
 * context) are left as-is — they're already compact, structured text rather
 * than verbose instructions, so shrinking them further would just drop
 * information the model needs to answer questions accurately.
 */
@Injectable()
export class ChatPromptBuilderService {
  buildChatPrompt(ctx: ChatPromptContext): AiChatMessage[] {
    const messages: AiChatMessage[] = [];

    messages.push({
      role: 'system',
      content: this.buildSystemPrompt(ctx),
    });

    for (const turn of ctx.history) {
      messages.push(this.mapHistoryTurn(turn));
    }

    messages.push({
      role: 'user',
      content: ctx.userMessage,
    });

    return messages;
  }

  // ── System prompt ─────────────────────────────────────────────────────────

  private buildSystemPrompt(ctx: ChatPromptContext): string {
    const sections: string[] = [
      this.sectionIdentity(),
      this.sectionDocumentContext(ctx.documentChunks),
    ];

    if (ctx.existingAnalysis) {
      sections.push(this.sectionAnalysisContext(ctx.existingAnalysis));
    }

    return sections.join('\n\n');
  }

  // ── System prompt sections ────────────────────────────────────────────────

  private sectionIdentity(): string {
    return `You are DUCKY AI, a legal/compliance assistant. The document below was already analyzed — you're answering questions using the document text, the analysis results, and the conversation so far, not re-analyzing it.

RULES: Plain text only, no JSON/markdown. Answer exactly what's asked, nothing extra — match the requested format (list/summary/single clause). Cite evidence when available (quote or paraphrase + page number). If multiple clauses apply, cover each. If the answer isn't in the document/analysis, say so — never invent. Only re-run the full analysis if explicitly asked. A brief relevant follow-up question is fine occasionally, not every message.`;
  }

  private sectionDocumentContext(
    chunks: ChatPromptContext['documentChunks'],
  ): string {
    if (chunks.length === 0) {
      return `ORIGINAL DOCUMENT\n=================\n(No document text available.)`;
    }

    const body = chunks
      .map((c) => {
        const label = c.pageNumber
          ? `Page ${c.pageNumber}`
          : `Chunk ${c.chunkIndex}`;
        return `--- ${label} ---\n${c.content}`;
      })
      .join('\n\n');

    return `ORIGINAL DOCUMENT\n=================\n${body}`;
  }

  private sectionAnalysisContext(analysis: AiAnalysisResponse): string {
    const parts: string[] = [
      `EXISTING ANALYSIS\n=================`,
      `Executive Summary:\n${analysis.summary}`,
      this.formatComplianceContext(analysis),
      this.formatContractContext(analysis),
    ];

    return parts.join('\n\n');
  }

  // ── Analysis formatting helpers (unchanged — already compact data, not prose) ──

  private formatComplianceContext(analysis: AiAnalysisResponse): string {
    const c = analysis.compliance;
    if (!c) {
      return 'Compliance Analysis: (Not requested / not available)';
    }
    const lines: string[] = [
      `Compliance Verdict: ${c.overallVerdict} | Risk Level: ${c.riskLevel} | Confidence: ${Math.round(c.confidence * 100)}%`,
      `Requirements Checked: ${c.requirements.length} (passed: ${c.summary.passed}, failed: ${c.summary.failed}, partial: ${c.summary.partial}, unknown: ${c.summary.unknown})`,
    ];

    if (c.requirements.length > 0) {
      lines.push('\nRequirement Results:');
      for (const req of c.requirements) {
        const statusLabel = this.requirementStatusLabel(req.status);
        lines.push(`  ${statusLabel} ${req.requirement}`);
        if (req.evidence) lines.push(`    Evidence: ${req.evidence}`);
        if (req.clauseReference)
          lines.push(`    Clause: ${req.clauseReference}`);
        if (req.pageNumber != null) lines.push(`    Page: ${req.pageNumber}`);
        if (req.recommendation)
          lines.push(`    Recommendation: ${req.recommendation}`);
      }
    }

    if (c.findings.length > 0) {
      lines.push('\nFindings:');
      for (const f of c.findings) {
        lines.push(`  [${f.severity.toUpperCase()}] ${f.title}`);
        if (f.description) lines.push(`    ${f.description}`);
        if (f.excerpt) lines.push(`    Excerpt: "${f.excerpt}"`);
        if (f.clauseReference) lines.push(`    Clause: ${f.clauseReference}`);
        if (f.pageNumber != null) lines.push(`    Page: ${f.pageNumber}`);
        if (f.recommendation)
          lines.push(`    Recommendation: ${f.recommendation}`);
      }
    }

    return lines.join('\n');
  }

  private formatContractContext(analysis: AiAnalysisResponse): string {
    const ct = analysis.contract;
    if (!ct) {
      return 'Contract Details: (Not requested / not available)';
    }
    const lines: string[] = ['Contract Details:'];

    if (ct.expirationDate) {
      lines.push(`  Expiration Date: ${ct.expirationDate}`);
    }
    if (ct.governingLaw) {
      lines.push(`  Governing Law: ${ct.governingLaw}`);
    }

    if (ct.parties && ct.parties.length > 0) {
      lines.push(`  Parties (${ct.parties.length}):`);
      for (const p of ct.parties) {
        const parts = [`    • ${p.name} (${p.role})`];
        if (p.address) parts.push(`address: ${p.address}`);
        if (p.signatory) parts.push(`signatory: ${p.signatory}`);
        lines.push(parts.join(', '));
      }
    }

    if (ct.obligations && ct.obligations.length > 0) {
      lines.push(`  Obligations (${ct.obligations.length}):`);
      for (const o of ct.obligations) {
        let entry = `    • ${o.party}: ${o.obligation}`;
        if (o.deadline) entry += ` (by ${o.deadline})`;
        if (o.clauseReference) entry += ` [${o.clauseReference}]`;
        if (o.pageNumber != null) entry += ` p.${o.pageNumber}`;
        lines.push(entry);
      }
    }

    if (ct.paymentTerms && ct.paymentTerms.length > 0) {
      lines.push(`  Payment Terms (${ct.paymentTerms.length}):`);
      for (const pt of ct.paymentTerms) {
        let entry = `    • ${pt.description}`;
        if (pt.amount) entry += ` — ${pt.amount}`;
        if (pt.currency) entry += ` ${pt.currency}`;
        if (pt.clauseReference) entry += ` [${pt.clauseReference}]`;
        if (pt.pageNumber != null) entry += ` p.${pt.pageNumber}`;
        lines.push(entry);
      }
    }

    if (ct.penalties && ct.penalties.length > 0) {
      lines.push(`  Penalties (${ct.penalties.length}):`);
      for (const pen of ct.penalties) {
        let entry = `    • [${pen.type}] ${pen.penalty}`;
        if (pen.clauseReference) entry += ` [${pen.clauseReference}]`;
        if (pen.pageNumber != null) entry += ` p.${pen.pageNumber}`;
        lines.push(entry);
      }
    }

    if (ct.renewalTerms && ct.renewalTerms.length > 0) {
      lines.push(`  Renewal Terms:`);
      for (const r of ct.renewalTerms) {
        let entry = `    • ${r.type}`;
        if (r.period) entry += ` — ${r.period}`;
        if (r.noticePeriod) entry += `, notice: ${r.noticePeriod}`;
        if (r.clauseReference) entry += ` [${r.clauseReference}]`;
        lines.push(entry);
      }
    }

    if (
      ct.terminationTerms &&
      (ct.terminationTerms.terminationNotice ||
        ct.terminationTerms.terminationConditions.length > 0)
    ) {
      lines.push(`  Termination Terms:`);
      if (ct.terminationTerms.terminationNotice) {
        lines.push(`    Notice: ${ct.terminationTerms.terminationNotice}`);
      }
      for (const cond of ct.terminationTerms.terminationConditions) {
        lines.push(`    Condition: ${cond}`);
      }
    }

    if (ct.importantDates && ct.importantDates.length > 0) {
      lines.push(`  Important Dates:`);
      for (const d of ct.importantDates) {
        let entry = `    • ${d.label}: ${d.date}`;
        if (d.pageNumber != null) entry += ` (p.${d.pageNumber})`;
        lines.push(entry);
      }
    }

    if (ct.missingClauses && ct.missingClauses.length > 0) {
      lines.push(`  Missing Clauses:`);
      for (const mc of ct.missingClauses) {
        lines.push(`    • [${mc.importance}] ${mc.name} — ${mc.reason}`);
      }
    }

    return lines.join('\n');
  }

  // ── Utilities ─────────────────────────────────────────────────────────────

  private mapHistoryTurn(turn: ChatHistoryMessage): AiChatMessage {
    return { role: turn.role, content: turn.content };
  }

  private requirementStatusLabel(
    status: 'met' | 'partial' | 'unmet' | 'unknown',
  ): string {
    const labels: Record<string, string> = {
      met: '[✓]',
      partial: '[~]',
      unmet: '[✗]',
      unknown: '[?]',
    };
    return labels[status] ?? '[?]';
  }
}
