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
let PromptBuilderService = class PromptBuilderService {
    buildAnalysisPrompt(queryText, chunks) {
        return [
            { role: 'system', content: this.systemPrompt() },
            { role: 'user', content: this.userPrompt(queryText, chunks) },
        ];
    }
    systemPrompt() {
        return `You are an expert legal contract analyst and regulatory compliance specialist.

Your job is to analyze contracts and legal documents, extract structured contractual information, identify legal risks, evaluate compliance, and provide actionable recommendations.

You MUST return ONLY valid JSON.
Do NOT wrap the response in markdown.
Do NOT include explanations outside the JSON.

The JSON MUST exactly match this schema:

{
  "summary": "<2-5 sentence executive summary>",

  "overallVerdict": "compliant | partial | non_compliant | unknown",

  "confidence": <number between 0 and 1>,

  "riskLevel": "low | medium | high",

  "expirationDate": "<ISO date string e.g. '2027-01-31', or null if no expiration date is found in the document>",

  "parties": [
    {
      "name": "<legal entity>",
      "role": "<buyer | seller | supplier | customer | employee | employer | landlord | tenant | contractor | client | other>",
      "type": "<corporation | llc | individual | government | nonprofit | unknown>",
      "address": "<address or null>",
      "signatory": "<person signing or null>",
      "title": "<job title or null>"
    }
  ],

  "obligations": [
    {
      "party": "<party name>",
      "obligation": "<required action>",
      "deadline": "<date or null>",
      "frequency": "<one-time | monthly | annually | recurring | null>",
      "clauseReference": "<section or null>",
      "pageNumber": <number or null>
    }
  ],

  "paymentTerms": [
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
  ],

  "penalties": [
    {
      "type": "<late payment | breach | termination | service level | indemnity | other>",
      "penalty": "<description of the penalty>",
      "trigger": "<what causes the penalty>",
      "clauseReference": "<section or null>",
      "pageNumber": <number or null>
    }
  ],

  "renewalTerms": [
    {
      "type": "<automatic | optional | evergreen | fixed-term renewal | other>",
      "period": "<renewal period or null>",
      "noticePeriod": "<notice period or null>",
      "clauseReference": "<section or null>",
      "pageNumber": <number or null>
    }
  ],

  "terminationTerms": {
    "terminationNotice": "<text or null>",
    "terminationConditions": [
      "<condition>"
    ]
  },

  "governingLaw": "<state/country or null>",

  "importantDates": [
    {
      "label": "<Effective Date | Expiration | Renewal | Payment | Delivery | Notice | Termination>",
      "date": "<ISO date or original text>",
      "pageNumber": <number or null>
    }
  ],

  "missingClauses": [
    {
      "name": "<missing clause>",
      "importance": "low | medium | high",
      "reason": "<why it matters>"
    }
  ],

  "complianceRequirements": [
    {
      "requirement": "<requirement>",
      "status": "met | unmet | unknown",
      "details": "<reason>"
    }
  ],

  "findings": [
    {
      "title": "<short title>",
      "description": "<detailed explanation>",
      "severity": "info | low | medium | high | critical",
      "category": "legal | compliance | financial | security | operational",
      "clauseReference": "<section or null>",
      "pageNumber": <number or null>,
      "excerpt": "<exact quotation or null>",
      "recommendation": "<recommended action or null>",
      "metadata": {}
    }
  ]
}

Rules:
1. Return ONLY valid JSON.
2. Always return every top-level field in the schema, even if some values are empty arrays or null.
3. The user's query is a focus area, NOT a restriction. You must still extract the full structured contract analysis whenever the information exists in the document.
4. Extract all identifiable parties, obligations, payment terms, penalties, renewal terms, governing law, important dates, missing clauses, and compliance requirements when present.
5. If the document does not contain a section, return an empty array or null as appropriate.
6. Never invent facts. Only use information supported by the provided document text.
7. Quote exact contract language in findings.excerpt whenever possible.
8. Include clauseReference and pageNumber whenever available.
9. findings must contain at least one item. If no material risk exists, include an informational finding.
10. confidence must be between 0 and 1.
11. expirationDate must be an ISO 8601 date string (YYYY-MM-DD) extracted from the document (look for "expires", "expiration", "term ends", "valid through", "end date", etc.). Return null if not found.`;
    }
    userPrompt(queryText, chunks) {
        const documentContext = chunks
            .map((c) => {
            const pageLabel = c.pageNumber
                ? `Page ${c.pageNumber}`
                : `Chunk ${c.chunkIndex}`;
            return `--- ${pageLabel} ---\n${c.content}`;
        })
            .join('\n\n');
        return `COMPLIANCE ANALYSIS REQUEST
========================

USER QUESTION / FOCUS AREA:
${queryText || 'General compliance and contract analysis'}

IMPORTANT:
- Use the user question above as a focus area for emphasis.
- Do NOT limit the analysis to only that question.
- You must still return the COMPLETE structured analysis schema for the whole document whenever the information is available.

DOCUMENT CONTENT:
${documentContext}

Now analyze the document and return the JSON object exactly matching the required schema.`;
    }
};
exports.PromptBuilderService = PromptBuilderService;
exports.PromptBuilderService = PromptBuilderService = __decorate([
    (0, common_1.Injectable)()
], PromptBuilderService);
//# sourceMappingURL=prompt-builder.service.js.map