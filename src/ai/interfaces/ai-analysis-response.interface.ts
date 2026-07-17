/**
 * Structured JSON schema the AI model MUST return.
 *
 * The schema is divided into two clearly separated domains:
 *
 *  - `contract`    — extracted contractual facts (parties, dates, obligations, …)
 *  - `compliance`  — evaluation of the user's compliance requirements
 *
 * These interfaces are the single source of truth for:
 *   1. The JSON schema embedded in the system prompt.
 *   2. The TypeScript types used by the orchestrator to deserialise the response.
 *   3. The DTOs used to expose the analysis result to the frontend.
 */

// ── Contract domain ─────────────────────────────────────────────────────────

export interface AiContractParty {
  name: string;
  role:
    | 'buyer'
    | 'seller'
    | 'supplier'
    | 'customer'
    | 'employee'
    | 'employer'
    | 'landlord'
    | 'tenant'
    | 'contractor'
    | 'client'
    | 'other';
  type:
    | 'corporation'
    | 'llc'
    | 'individual'
    | 'government'
    | 'nonprofit'
    | 'unknown';
  address: string | null;
  signatory: string | null;
  title: string | null;
}

export interface AiContractObligation {
  party: string;
  obligation: string;
  deadline: string | null;
  frequency: 'one-time' | 'monthly' | 'annually' | 'recurring' | null;
  clauseReference: string | null;
  pageNumber: number | null;
}

export interface AiContractPaymentTerm {
  description: string;
  amount: string | null;
  currency: string | null;
  frequency: 'monthly' | 'quarterly' | 'yearly' | 'one-time' | 'recurring' | null;
  dueDate: string | null;
  latePenalty: string | null;
  clauseReference: string | null;
  pageNumber: number | null;
}

export interface AiContractPenalty {
  type:
    | 'late payment'
    | 'breach'
    | 'termination'
    | 'service level'
    | 'indemnity'
    | 'other';
  penalty: string;
  trigger: string;
  clauseReference: string | null;
  pageNumber: number | null;
}

export interface AiContractRenewalTerm {
  type:
    | 'automatic'
    | 'optional'
    | 'evergreen'
    | 'fixed-term renewal'
    | 'other';
  period: string | null;
  noticePeriod: string | null;
  clauseReference: string | null;
  pageNumber: number | null;
}

export interface AiContractTerminationTerms {
  terminationNotice: string | null;
  terminationConditions: string[];
}

export interface AiContractImportantDate {
  label:
    | 'Effective Date'
    | 'Expiration'
    | 'Renewal'
    | 'Payment'
    | 'Delivery'
    | 'Notice'
    | 'Termination';
  date: string;
  pageNumber: number | null;
}

export interface AiContractMissingClause {
  name: string;
  importance: 'low' | 'medium' | 'high';
  reason: string;
}

/**
 * All contractual facts extracted from the document.
 * This data SUPPORTS the compliance assessment; it is secondary to it.
 *
 * Sub-arrays are `null` (not `[]`) when the corresponding section was excluded
 * by `AnalysisOptions`.  The frontend uses null to distinguish "not requested"
 * from "requested but nothing found" (which stays as `[]`).
 */
export interface AiContractData {
  /** ISO 8601 date string (e.g. "2026-12-31") or null if not found. Always returned. */
  expirationDate: string | null;
  /** null = section was not requested via AnalysisOptions.contract.parties */
  parties: AiContractParty[] | null;
  /** null = section was not requested via AnalysisOptions.contract.obligations */
  obligations: AiContractObligation[] | null;
  /** null = section was not requested via AnalysisOptions.contract.paymentTerms */
  paymentTerms: AiContractPaymentTerm[] | null;
  /** null = section was not requested via AnalysisOptions.contract.penalties */
  penalties: AiContractPenalty[] | null;
  /** null = section was not requested via AnalysisOptions.contract.renewalTerms */
  renewalTerms: AiContractRenewalTerm[] | null;
  /** null = section was not requested (paired with renewalTerms toggle) */
  terminationTerms: AiContractTerminationTerms | null;
  /** Governing law / jurisdiction or null. Always returned. */
  governingLaw: string | null;
  /** null = section was not requested via AnalysisOptions.contract.importantDates */
  importantDates: AiContractImportantDate[] | null;
  /** null = section was not requested via AnalysisOptions.missingClauses */
  missingClauses: AiContractMissingClause[] | null;
}

// ── Compliance domain ────────────────────────────────────────────────────────

/**
 * Evaluation of a single compliance requirement stated by the user.
 */
export interface AiComplianceRequirement {
  /** The specific requirement being evaluated. */
  requirement: string;
  /** Whether the document satisfies the requirement. */
  status: 'met' | 'partial' | 'unmet' | 'unknown';
  /** Explanation of why this status was assigned. */
  reason: string;
  /** Exact text or paraphrase from the document supporting the decision. */
  evidence: string | null;
  pageNumber: number | null;
  clauseReference: string | null;
  /** Confidence in this specific evaluation (0–1). */
  confidence: number;
  /** Suggested remediation if status is not "met". */
  recommendation: string | null;
}

/**
 * A notable finding, risk, or observation discovered during the analysis.
 */
export interface AiFinding {
  title: string;
  description: string | null;
  severity: 'info' | 'low' | 'medium' | 'high' | 'critical';
  category: 'legal' | 'compliance' | 'financial' | 'security' | 'operational';
  /** Which requirement (if any) this finding relates to. JSON-only; not a DB column. */
  affectedRequirement: string | null;
  pageNumber: number | null;
  clauseReference: string | null;
  /** Verbatim quotation from the document, or null. */
  excerpt: string | null;
  recommendation: string | null;
  metadata: Record<string, unknown>;
}

/** Aggregated counts for the compliance summary. */
export interface AiComplianceSummary {
  passed: number;
  failed: number;
  partial: number;
  unknown: number;
}

/**
 * The full compliance evaluation.
 * This is the PRIMARY result of every analysis.
 */
export interface AiComplianceData {
  overallVerdict: 'compliant' | 'partial' | 'non_compliant' | 'unknown';
  riskLevel: 'low' | 'medium' | 'high';
  /** Overall confidence across all requirement evaluations (0–1). */
  confidence: number;
  summary: AiComplianceSummary;
  /** One entry per requirement stated by the user. */
  requirements: AiComplianceRequirement[];
  /** Broad findings and risks discovered during the analysis. Must contain ≥1 item. */
  findings: AiFinding[];
}

// ── Top-level response ───────────────────────────────────────────────────────

/**
 * The complete AI analysis response.
 *
 * `compliance` is the primary output; `contract` is the supporting extraction.
 *
 * Fields may be `null` when the corresponding `AnalysisOptions` flag was false.
 */
export interface AiAnalysisResponse {
  /**
   * Direct response to the user's question (or a brief document orientation
   * when no question was asked).  Populated independently of the structured
   * analysis — never biased by the analysis fields and vice-versa.
   */
  answer: string;
  /** 2–5 sentence executive summary of the full analysis. */
  summary: string;
  /** Extracted contractual facts. Always present; sub-arrays may be null. */
  contract: AiContractData;
  /**
   * Compliance evaluation against the user's requirements.
   * `null` when `AnalysisOptions.compliance` was false.
   */
  compliance: AiComplianceData | null;
}
