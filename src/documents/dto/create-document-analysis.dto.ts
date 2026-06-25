import { AnalysisVerdict } from 'src/generated/prisma';
import {
  IsString,
  IsOptional,
  IsUUID,
  IsNumber,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';

export class CreateDocumentAnalysisDto {
  @IsUUID()
  @IsNotEmpty()
  documentId: string;

  @IsString()
  @IsOptional()
  executiveSummary?: string;

  @IsEnum(AnalysisVerdict)
  @IsOptional()
  overallVerdict?: AnalysisVerdict;

  @IsNumber()
  @IsOptional()
  confidenceScore?: number;

  @IsString()
  @IsOptional()
  modelName?: string;

  @IsString()
  @IsOptional()
  promptVersion?: string;

  @IsString()
  @IsOptional()
  rulesetVersion?: string;

  @IsOptional()
  parties?: any;

  @IsOptional()
  obligations?: any;

  @IsOptional()
  paymentTerms?: any;

  @IsOptional()
  renewalTerms?: any;

  @IsOptional()
  penalties?: any;

  @IsString()
  @IsOptional()
  governingLaw?: string;

  @IsOptional()
  missingClauses?: any;

  @IsOptional()
  unusualConditions?: any;

  @IsOptional()
  complianceRequirements?: any;

  @IsOptional()
  policyViolations?: any;

  @IsOptional()
  regulatoryIssues?: any;

  @IsOptional()
  missingSignatures?: any;

  @IsBoolean()
  @IsOptional()
  expirationDetected?: boolean;

  @IsOptional()
  importantDates?: any;

  @IsOptional()
  risks?: any;

  @IsOptional()
  recommendations?: any;
}
