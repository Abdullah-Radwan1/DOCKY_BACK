import { SchedulerService } from './scheduler.service';
export declare class SchedulerController {
    private readonly schedulerService;
    constructor(schedulerService: SchedulerService);
    triggerScan(): Promise<{
        success: boolean;
        message: string;
    }>;
}
