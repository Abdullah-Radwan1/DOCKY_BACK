import { DocumentStatus, RiskLevel } from "../../generated/prisma/index.js";
import { CreateDocumentDto } from './create-document.dto';
declare const UpdateDocumentDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDocumentDto>>;
export declare class UpdateDocumentDto extends UpdateDocumentDto_base {
    status?: DocumentStatus;
    complianceScore?: number;
    riskLevel?: RiskLevel;
    expirationDate?: Date;
}
export {};
