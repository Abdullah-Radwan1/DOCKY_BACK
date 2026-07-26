export class ActivityLogResponseDto {
  id: string;
  userId?: string;
  action: string;
  entityType?: string;
  entityId?: string;
  metadata?: any;
  createdAt: Date;
}
