export class AIResponseResponseDto {
  id: string;
  queryId: string;
  responseText: string;
  confidenceScore?: number;
  metadata?: any;
  createdAt: Date;
}
