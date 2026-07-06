import { DashboardService } from './dashboard.service';
import { DocumentStatusService } from './document-status.service';
export declare class DashboardController {
    private readonly dashboardService;
    private readonly documentStatusService;
    constructor(dashboardService: DashboardService, documentStatusService: DocumentStatusService);
    getSummary(req: {
        user: {
            id: string;
        };
    }): Promise<import("./dto/dashboard-summary.dto").DashboardSummaryDto>;
    getDocumentStatus(id: string): Promise<import("./dto/document-dashboard.dto").DocumentDashboardStatusDto>;
}
