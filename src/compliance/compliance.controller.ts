import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ComplianceService } from './compliance.service';
import { CreateComplianceQueryDto } from './dto/create-compliance-query.dto';
import { CreateAIResponseDto } from './dto/create-ai-response.dto';

@Controller('compliance')
export class ComplianceController {
  constructor(private readonly complianceService: ComplianceService) {}

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

  @Post('response')
  async addResponse(@Body() responseDto: CreateAIResponseDto) {
    return this.complianceService.addAIResponse(responseDto);
  }
}
