import { CreateComplianceQueryDto } from './create-compliance-query.dto';
import { ComplianceQueryStatus } from "../../generated/prisma/index.js";
declare const UpdateComplianceQueryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateComplianceQueryDto>>;
export declare class UpdateComplianceQueryDto extends UpdateComplianceQueryDto_base {
    status?: ComplianceQueryStatus;
    errorMessage?: string;
}
export {};
