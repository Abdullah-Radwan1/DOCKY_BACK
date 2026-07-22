"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatPromptBuilderService = void 0;
const common_1 = require("@nestjs/common");
let ChatPromptBuilderService = class ChatPromptBuilderService {
    buildChatPrompt(ctx) {
        const messages = [];
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
    buildSystemPrompt(ctx) {
        const sections = [
            this.sectionIdentity(),
            this.sectionDocumentContext(ctx.documentChunks),
        ];
        if (ctx.existingAnalysis) {
            sections.push(this.sectionAnalysisContext(ctx.existingAnalysis));
        }
        return sections.join('\n\n');
    }
    sectionIdentity() {
        return `You are DUCKY AI, a legal/compliance assistant. The document below was already analyzed — you're answering questions using the document text, the analysis results, and the conversation so far, not re-analyzing it.

RULES: Plain text only, no JSON/markdown. Answer exactly what's asked, nothing extra — match the requested format (list/summary/single clause). Cite evidence when available (quote or paraphrase + page number). If multiple clauses apply, cover each. If the answer isn't in the document/analysis, say so — never invent. Only re-run the full analysis if explicitly asked. A brief relevant follow-up question is fine occasionally, not every message.`;
    }
    sectionDocumentContext(chunks) {
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
    sectionAnalysisContext(analysis) {
        const parts = [
            `EXISTING ANALYSIS\n=================`,
            `Executive Summary:\n${analysis.summary}`,
            this.formatComplianceContext(analysis),
            this.formatContractContext(analysis),
        ];
        return parts.join('\n\n');
    }
    formatComplianceContext(analysis) {
        const c = analysis.compliance;
        if (!c) {
            return 'Compliance Analysis: (Not requested / not available)';
        }
        const lines = [
            `Compliance Verdict: ${c.overallVerdict} | Risk Level: ${c.riskLevel} | Confidence: ${Math.round(c.confidence * 100)}%`,
            `Requirements Checked: ${c.requirements.length} (passed: ${c.summary.passed}, failed: ${c.summary.failed}, partial: ${c.summary.partial}, unknown: ${c.summary.unknown})`,
        ];
        if (c.requirements.length > 0) {
            lines.push('\nRequirement Results:');
            for (const req of c.requirements) {
                const statusLabel = this.requirementStatusLabel(req.status);
                lines.push(`  ${statusLabel} ${req.requirement}`);
                if (req.evidence)
                    lines.push(`    Evidence: ${req.evidence}`);
                if (req.clauseReference)
                    lines.push(`    Clause: ${req.clauseReference}`);
                if (req.pageNumber != null)
                    lines.push(`    Page: ${req.pageNumber}`);
                if (req.recommendation)
                    lines.push(`    Recommendation: ${req.recommendation}`);
            }
        }
        if (c.findings.length > 0) {
            lines.push('\nFindings:');
            for (const f of c.findings) {
                lines.push(`  [${f.severity.toUpperCase()}] ${f.title}`);
                if (f.description)
                    lines.push(`    ${f.description}`);
                if (f.excerpt)
                    lines.push(`    Excerpt: "${f.excerpt}"`);
                if (f.clauseReference)
                    lines.push(`    Clause: ${f.clauseReference}`);
                if (f.pageNumber != null)
                    lines.push(`    Page: ${f.pageNumber}`);
                if (f.recommendation)
                    lines.push(`    Recommendation: ${f.recommendation}`);
            }
        }
        return lines.join('\n');
    }
    formatContractContext(analysis) {
        const ct = analysis.contract;
        if (!ct) {
            return 'Contract Details: (Not requested / not available)';
        }
        const lines = ['Contract Details:'];
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
                if (p.address)
                    parts.push(`address: ${p.address}`);
                if (p.signatory)
                    parts.push(`signatory: ${p.signatory}`);
                lines.push(parts.join(', '));
            }
        }
        if (ct.obligations && ct.obligations.length > 0) {
            lines.push(`  Obligations (${ct.obligations.length}):`);
            for (const o of ct.obligations) {
                let entry = `    • ${o.party}: ${o.obligation}`;
                if (o.deadline)
                    entry += ` (by ${o.deadline})`;
                if (o.clauseReference)
                    entry += ` [${o.clauseReference}]`;
                if (o.pageNumber != null)
                    entry += ` p.${o.pageNumber}`;
                lines.push(entry);
            }
        }
        if (ct.paymentTerms && ct.paymentTerms.length > 0) {
            lines.push(`  Payment Terms (${ct.paymentTerms.length}):`);
            for (const pt of ct.paymentTerms) {
                let entry = `    • ${pt.description}`;
                if (pt.amount)
                    entry += ` — ${pt.amount}`;
                if (pt.currency)
                    entry += ` ${pt.currency}`;
                if (pt.clauseReference)
                    entry += ` [${pt.clauseReference}]`;
                if (pt.pageNumber != null)
                    entry += ` p.${pt.pageNumber}`;
                lines.push(entry);
            }
        }
        if (ct.penalties && ct.penalties.length > 0) {
            lines.push(`  Penalties (${ct.penalties.length}):`);
            for (const pen of ct.penalties) {
                let entry = `    • [${pen.type}] ${pen.penalty}`;
                if (pen.clauseReference)
                    entry += ` [${pen.clauseReference}]`;
                if (pen.pageNumber != null)
                    entry += ` p.${pen.pageNumber}`;
                lines.push(entry);
            }
        }
        if (ct.renewalTerms && ct.renewalTerms.length > 0) {
            lines.push(`  Renewal Terms:`);
            for (const r of ct.renewalTerms) {
                let entry = `    • ${r.type}`;
                if (r.period)
                    entry += ` — ${r.period}`;
                if (r.noticePeriod)
                    entry += `, notice: ${r.noticePeriod}`;
                if (r.clauseReference)
                    entry += ` [${r.clauseReference}]`;
                lines.push(entry);
            }
        }
        if (ct.terminationTerms &&
            (ct.terminationTerms.terminationNotice ||
                ct.terminationTerms.terminationConditions.length > 0)) {
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
                if (d.pageNumber != null)
                    entry += ` (p.${d.pageNumber})`;
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
    mapHistoryTurn(turn) {
        return { role: turn.role, content: turn.content };
    }
    requirementStatusLabel(status) {
        const labels = {
            met: '[✓]',
            partial: '[~]',
            unmet: '[✗]',
            unknown: '[?]',
        };
        return labels[status] ?? '[?]';
    }
};
exports.ChatPromptBuilderService = ChatPromptBuilderService;
exports.ChatPromptBuilderService = ChatPromptBuilderService = __decorate([
    (0, common_1.Injectable)()
], ChatPromptBuilderService);
//# sourceMappingURL=chat-prompt-builder.service.js.map