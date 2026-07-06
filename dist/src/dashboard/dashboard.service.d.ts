import { PrismaService } from '../prisma/prisma.service';
import { DocumentStatusService } from './document-status.service';
import { DashboardSummaryDto } from './dto/dashboard-summary.dto';
export declare class DashboardService {
    private readonly prisma;
    private readonly documentStatusService;
    constructor(prisma: PrismaService, documentStatusService: DocumentStatusService);
    getSummary(userId: string): Promise<DashboardSummaryDto>;
    private buildKpis;
    private buildComplianceDistribution;
    private buildRiskDistribution;
    private buildSeverityBreakdown;
    private buildDocStatusBreakdown;
}
