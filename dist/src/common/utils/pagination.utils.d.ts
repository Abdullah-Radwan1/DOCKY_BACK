import { PaginationQueryDto } from '../dto/pagination-query.dto';
export interface PaginatedResult<T> {
    data: T[];
    meta: {
        totalItems: number;
        itemCount: number;
        itemsPerPage: number;
        totalPages: number;
        currentPage: number;
    };
}
export interface PaginationOptions {
    searchFields?: string[];
    defaultSortBy?: string;
    where?: any;
}
export declare function paginatePrisma<T>(model: {
    findMany: (args: any) => Promise<T[]>;
    count: (args: any) => Promise<number>;
}, query: PaginationQueryDto, options?: PaginationOptions): Promise<PaginatedResult<T>>;
