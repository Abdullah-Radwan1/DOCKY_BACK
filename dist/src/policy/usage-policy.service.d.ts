import { PrismaService } from '../prisma/prisma.service';
export declare const LIMITS: {
    GUEST: {
        UPLOADS: number;
        ANALYSES: number;
    };
    FREE: {
        UPLOADS: number;
        ANALYSES: number;
    };
    PROFESSIONAL: {
        UPLOADS: number;
        ANALYSES: number;
    };
    ELITE: {
        UPLOADS: number;
        ANALYSES: number;
    };
};
export declare class UsagePolicyService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    enforceUploadLimit(userId?: string, guestIp?: string): Promise<void>;
    private enforceAuthenticatedUploadLimit;
    private enforceGuestUploadLimit;
    enforceAnalysisLimit(userId?: string, guestIp?: string): Promise<void>;
    private enforceAuthenticatedAnalysisLimit;
    private enforceGuestAnalysisLimit;
    incrementUpload(userId?: string, guestIp?: string): Promise<void>;
    incrementAnalysis(userId?: string, guestIp?: string): Promise<void>;
}
