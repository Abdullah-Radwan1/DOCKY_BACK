import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseUUIDPipe,
  UseGuards,
  Req,
  Ip,
} from '@nestjs/common';
import { ComplianceService } from './compliance.service';
import { CreateComplianceQueryDto } from './dto/create-compliance-query.dto';
import { CreateAnalysisRequestDto } from './dto/create-analysis-request.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OptionalJwtAuthGuard } from '../auth/guards/optional-jwt-auth.guard';
import { Request } from 'express';

@Controller('compliance')
export class ComplianceController {
  constructor(private readonly complianceService: ComplianceService) {}

  // ── AI Analysis Pipeline ───────────────────────────────────────────────────

  @UseGuards(OptionalJwtAuthGuard)
  @Post('analyze')
  async analyzeDocument(
    @Body() dto: CreateAnalysisRequestDto,
    @Req() req: Request & { user?: { id: string } },
    @Ip() ip: string,
  ) {
    return this.complianceService.submitAnalysis({
      ...dto,
      userId: req.user?.id,
      ip,
    });
  }

  @UseGuards(OptionalJwtAuthGuard)
  @Get('analysis/:id')
  async getAnalysis(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.complianceService.getAnalysisResult(id);
  }

  // ── Existing Query Endpoints ───────────────────────────────────────────────

  @UseGuards(JwtAuthGuard)
  @Post('query')
  async createQuery(@Body() queryDto: CreateComplianceQueryDto) {
    return this.complianceService.createQuery(queryDto);
  }

  @UseGuards(OptionalJwtAuthGuard)
  @Get('query/:id')
  async getQuery(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.complianceService.getQueryById(id);
  }

  @UseGuards(OptionalJwtAuthGuard)
  @Get('document/:documentId')
  async getByDocument(
    @Param('documentId', new ParseUUIDPipe()) documentId: string,
  ) {
    return this.complianceService.getQueriesByDocument(documentId);
  }
}
