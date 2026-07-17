import {
  IsString,
  IsNotEmpty,
  IsUUID,
  IsOptional,
  IsObject,
} from 'class-validator';
import type { AnalysisOptions } from '../../ai/interfaces/analysis-options.interface';

export class CreateAnalysisRequestDto {
  @IsUUID()
  @IsNotEmpty()
  documentId: string;

  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsString()
  @IsOptional()
  guestId?: string;

  @IsString()
  @IsNotEmpty()
  queryText: string;

  /**
   * Which analysis sections to include.
   *
   * Omitting this field is equivalent to requesting all sections —
   * backwards-compatible with existing callers.  The orchestrator will
   * apply `DEFAULT_ANALYSIS_OPTIONS` when this is absent.
   */
  @IsObject()
  @IsOptional()
  options?: AnalysisOptions;
}
