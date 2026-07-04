export declare class ActivityLogEntity {
    id: string;
    userId?: string;
    action: string;
    entityType?: string;
    entityId?: string;
    metadata?: any;
    createdAt: Date;
}
