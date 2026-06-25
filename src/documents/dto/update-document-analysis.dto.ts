import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentAnalysisDto } from './create-document-analysis.dto';

export class UpdateDocumentAnalysisDto extends PartialType(
  CreateDocumentAnalysisDto,
) {}
