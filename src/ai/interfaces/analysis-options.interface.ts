/**
 * Options that control which sections the AI should produce in a single analysis run.
 *
 * When a flag is `false`, the corresponding field is omitted from the JSON schema
 * sent to the model and will be returned as `null` in the response.  This lets
 * the frontend distinguish "not requested" (null) from "requested but nothing
 * found" (empty array / empty object).
 */

// ── Contract sub-section options ─────────────────────────────────────────────

export interface ContractSectionOptions {
  /** Extract contractual parties (names, roles, entity types, signatories). */
  parties: boolean;
  /** Extract obligations for each party (deadlines, frequency, clause refs). */
  obligations: boolean;
  /** Extract payment terms (amounts, frequencies, due dates, late penalties). */
  paymentTerms: boolean;
  /** Extract penalty clauses (breach, late payment, termination, SLA, etc.). */
  penalties: boolean;
  /**
   * Extract renewal terms AND termination conditions.
   * These two are semantically paired and share a single toggle.
   */
  renewalTerms: boolean;
  /** Extract important dates (effective date, expiration, notice deadlines, etc.). */
  importantDates: boolean;
}

// ── Top-level options ─────────────────────────────────────────────────────────

export interface AnalysisOptions {
  /** Which contract sub-sections to extract. */
  contract: ContractSectionOptions;
  /** Whether to identify missing or absent clauses. */
  missingClauses: boolean;
  /**
   * Whether to include remediation recommendations inside
   * `compliance.requirements[].recommendation` and
   * `compliance.findings[].recommendation`.
   * When false, those sub-fields are omitted from the schema and must be null.
   */
  recommendations: boolean;
  /** Whether to run the full compliance evaluation (requirements + findings + verdict). */
  compliance: boolean;
}

// ── Default (all sections enabled) ───────────────────────────────────────────

/**
 * All sections enabled — used when the caller omits the `options` parameter.
 * This preserves backwards compatibility with existing API consumers.
 */
export const DEFAULT_ANALYSIS_OPTIONS: AnalysisOptions = {
  contract: {
    parties: true,
    obligations: true,
    paymentTerms: true,
    penalties: true,
    renewalTerms: true,
    importantDates: true,
  },
  missingClauses: true,
  recommendations: true,
  compliance: true,
};
