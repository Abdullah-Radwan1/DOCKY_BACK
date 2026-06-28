import { PdfData } from '../interfaces/pdf-data.interface';
export declare class PdfExtractorService {
    private readonly logger;
    extract(buffer: Buffer, fileName: string): Promise<PdfData>;
}
