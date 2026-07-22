import { PrismaService } from '../../prisma/prisma.service';
export declare class ChunkRetrievalService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    getChunksForDocument(documentId: string): Promise<{
        id: string;
        createdAt: Date;
        documentId: string;
        pageNumber: number | null;
        chunkIndex: number;
        content: string;
        tokenCount: number | null;
    }[]>;
    getRelevantChunks(documentId: string, _query: string, tokenBudget?: number): Promise<{
        id: string;
        createdAt: Date;
        documentId: string;
        pageNumber: number | null;
        chunkIndex: number;
        content: string;
        tokenCount: number | null;
    }[]>;
}
