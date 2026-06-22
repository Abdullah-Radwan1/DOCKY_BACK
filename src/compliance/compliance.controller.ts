import { Controller, Get, Post, Param, Body, ParseUUIDPipe } from '@nestjs/common';
import { ComplianceService } from './compliance.service';
import { IsUUID, IsString, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';

class CreateQueryDto {
  @IsString()
  @IsNotEmpty()
  queryText!: string;

  @IsUUID()
  @IsNotEmpty()
  userId!: string;

  @IsUUID()
  @IsOptional()
  documentId?: string;
}

class CreateAIResponseDto {
  @IsUUID()
  @IsNotEmpty()
  queryId!: string;

  @IsString()
  @IsNotEmpty()
  responseText!: string;

  @IsNumber()
  @IsOptional()
  confidenceScore?: number;

  @IsOptional()
  metadata?: any;
}

@Controller('compliance')
export class ComplianceController {
  constructor(private readonly complianceService: ComplianceService) {}

  @Post('query')
  async createQuery(@Body() queryDto: CreateQueryDto) {
    return this.complianceService.createQuery(queryDto);
  }

  @Get('query/:id')
  async getQuery(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.complianceService.getQueryById(id);
  }

  @Get('document/:documentId')
  async getByDocument(@Param('documentId', new ParseUUIDPipe()) documentId: string) {
    return this.complianceService.getQueriesByDocument(documentId);
  }

  @Post('response')
  async addResponse(@Body() responseDto: CreateAIResponseDto) {
    return this.complianceService.addAIResponse(responseDto);
  }
}
