export type DocumentDashboardStatusLabel = 'Processing Failed' | 'Preparing Document' | 'Uploaded' | 'Queued for Analysis' | 'Analyzing' | 'Expired' | 'Critical Attention Required' | 'Needs Review' | 'Compliant' | 'Ready for Analysis';
export type DocumentDashboardStatusColor = 'destructive' | 'warning' | 'info' | 'success' | 'muted';
export declare class DocumentDashboardStatusDto {
    documentId: string;
    status: DocumentDashboardStatusLabel;
    color: DocumentDashboardStatusColor;
    requiresAction: boolean;
}
