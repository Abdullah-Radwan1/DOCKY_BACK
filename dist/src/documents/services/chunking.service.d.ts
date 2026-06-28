import { ChunkInput } from '../interfaces/pdf-data.interface';
export declare class ChunkingService {
    private readonly logger;
    chunk(text: string, fileName: string): ChunkInput[];
    private findBreakPoint;
}
