export declare class CreateActivityLogDto {
    organizationId: string;
    userId?: string;
    action: string;
    entityType?: string;
    entityId?: string;
    metadata?: Record<string, any>;
}
