import { PrismaService } from '../prisma/prisma.service';
import { DocumentDashboardStatusDto } from './dto/document-dashboard.dto';
export declare class DocumentStatusService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getDocumentStatus(documentId: string): Promise<DocumentDashboardStatusDto>;
    private computeLabel;
}
