export interface PdfData {
    text: string;
    pageCount: number;
}
export interface ChunkInput {
    chunkIndex: number;
    content: string;
    pageNumber: number;
    tokenCount: number;
}
