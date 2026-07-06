import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { ComplianceService } from './compliance.service';
import { CreateComplianceQueryDto } from './dto/create-compliance-query.dto';
import { CreateAnalysisRequestDto } from './dto/create-analysis-request.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Public } from '../auth/decorators/public.decorator';

@UseGuards(JwtAuthGuard)
@Controller('compliance')
export class ComplianceController {
  constructor(private readonly complianceService: ComplianceService) {}

  // ── AI Analysis Pipeline ───────────────────────────────────────────────────

  /**
   * POST /compliance/analyze
   *
   * Submits a document for AI compliance analysis.
   * Creates an AnalysisRequest, runs the full AI pipeline, and returns
   * the complete result tree (AnalysisRequest → AIResponse → AnalysisResult → Findings).
   */
  @Public()
  @Post('analyze')
  async analyzeDocument(@Body() dto: CreateAnalysisRequestDto) {
    return this.complianceService.submitAnalysis(dto);
  }

  /**
   * GET /compliance/analysis/:id
   *
   * Fetches the full analysis result for a given AnalysisRequest,
   * including the AIResponse, AnalysisResult, and all Findings.
   */
  @Public()
  @Get('analysis/:id')
  async getAnalysis(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.complianceService.getAnalysisResult(id);
  }

  // ── Existing Query Endpoints ───────────────────────────────────────────────

  @Post('query')
  async createQuery(@Body() queryDto: CreateComplianceQueryDto) {
    return this.complianceService.createQuery(queryDto);
  }

  @Get('query/:id')
  async getQuery(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.complianceService.getQueryById(id);
  }

  @Get('document/:documentId')
  async getByDocument(
    @Param('documentId', new ParseUUIDPipe()) documentId: string,
  ) {
    return this.complianceService.getQueriesByDocument(documentId);
  }
}
