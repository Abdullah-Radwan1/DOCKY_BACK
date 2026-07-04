export declare class CreateActivityLogDto {
    userId?: string;
    action: string;
    entityType?: string;
    entityId?: string;
    metadata?: Record<string, any>;
}
