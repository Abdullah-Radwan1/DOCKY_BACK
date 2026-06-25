export declare class ActivityLogResponseDto {
    id: string;
    organizationId: string;
    userId?: string;
    action: string;
    entityType?: string;
    entityId?: string;
    metadata?: any;
    createdAt: Date;
}
