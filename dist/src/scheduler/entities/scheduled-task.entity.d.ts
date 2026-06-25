export declare class ScheduledTaskEntity {
    id: string;
    name: string;
    description?: string;
    cronExpression: string;
    isActive: boolean;
    lastExecutedAt?: Date;
    nextExecutionAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
