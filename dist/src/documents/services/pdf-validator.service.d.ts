export declare class PdfValidatorService {
    private readonly logger;
    validate(file: Express.Multer.File): Promise<void>;
    private detectFileType;
    private hasPdfMagicBytes;
}
