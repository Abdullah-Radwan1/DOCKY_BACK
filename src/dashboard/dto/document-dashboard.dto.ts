/**
 * DTO returned by GET /dashboard/documents/:id/status
 *
 * Provides a single computed business-facing status for a document,
 * along with colour-hint metadata for the UI.
 */

export type DocumentDashboardStatusLabel =
  | 'Processing Failed'
  | 'Preparing Document'
  | 'Uploaded'
  | 'Queued for Analysis'
  | 'Analyzing'
  | 'Expired'
  | 'Critical Attention Required'
  | 'Needs Review'
  | 'Compliant'
  | 'Ready for Analysis';

/** Semantic colour token the UI can map to theme variables. */
export type DocumentDashboardStatusColor =
  | 'destructive'
  | 'warning'
  | 'info'
  | 'success'
  | 'muted';

export class DocumentDashboardStatusDto {
  documentId: string;
  status: DocumentDashboardStatusLabel;
  /** Semantic colour hint for UI theming. */
  color: DocumentDashboardStatusColor;
  /** True when user action is expected (e.g. re-upload, review findings). */
  requiresAction: boolean;
}
