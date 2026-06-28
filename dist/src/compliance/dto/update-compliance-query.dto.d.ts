import { CreateComplianceQueryDto } from './create-compliance-query.dto';
import { AnalysisRequestStatus } from "../../generated/prisma";
declare const UpdateComplianceQueryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateComplianceQueryDto>>;
export declare class UpdateComplianceQueryDto extends UpdateComplianceQueryDto_base {
    status?: AnalysisRequestStatus;
    errorMessage?: string;
}
export {};
