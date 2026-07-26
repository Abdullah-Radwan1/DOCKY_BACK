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
  /** Searchable text fields in the model */
  searchFields?: string[];
  /** Default sorting field if none is specified */
  defaultSortBy?: string;
  /** Extra fixed filters (e.g. { uploadedBy: userId }) */
  where?: any;
}

/**
 * Reusable utility to apply pagination, sorting, filtering, and searching to a Prisma query.
 */
export async function paginatePrisma<T>(
  model: {
    findMany: (args: any) => Promise<T[]>;
    count: (args: any) => Promise<number>;
  },
  query: PaginationQueryDto,
  options: PaginationOptions = {},
): Promise<PaginatedResult<T>> {
  const page = Math.max(1, query.page ?? 1);
  const limit = Math.max(1, query.limit ?? 10);
  const skip = (page - 1) * limit;

  // Build the Prisma "where" conditions
  const whereConditions: any[] = [];

  // Add the base where clause options if provided
  if (options.where) {
    whereConditions.push(options.where);
  }

  // 1. Searching (case-insensitive contains search across specified fields)
  if (query.search && options.searchFields && options.searchFields.length > 0) {
    const searchConditions = options.searchFields.map((field) => ({
      [field]: {
        contains: query.search,
        mode: 'insensitive',
      },
    }));
    whereConditions.push({ OR: searchConditions });
  }

  // 2. Extra Filters
  if (query.status && query.status !== 'all') {
    whereConditions.push({ status: query.status });
  }

  // Risk Level filter: since riskLevel is on the related AnalysisResult,
  // we filter by documents that have a matching latest analysis request with that riskLevel.
  if (query.riskLevel && query.riskLevel !== 'all') {
    whereConditions.push({
      analysisRequests: {
        some: {
          response: {
            AnalysisResult: {
              riskLevel: query.riskLevel,
            },
          },
        },
      },
    });
  }

  const finalWhere =
    whereConditions.length > 0
      ? whereConditions.length === 1
        ? whereConditions[0]
        : { AND: whereConditions }
      : undefined;

  // 3. Sorting
  let orderBy: any = undefined;
  const sortBy = query.sortBy || options.defaultSortBy || 'createdAt';
  const sortOrder = query.sortOrder || 'desc';

  // Support sorting by compliance_score or risk_level if needed, but since those are nested or mapped,
  // let's support standard model keys or nested keys if necessary.
  // For standard columns like originalFileName, createdAt, status:
  if (sortBy) {
    // Map frontend field names to backend schema keys
    let mappedSortBy = sortBy;
    if (sortBy === 'filename') {
      mappedSortBy = 'originalFileName';
    } else if (sortBy === 'created_at') {
      mappedSortBy = 'createdAt';
    }

    // Check if sorting by compliance_score (requires a join, or we can sort by status/createdAt)
    if (mappedSortBy === 'compliance_score') {
      // Direct sorting by nested objects in Prisma is supported if it's a 1:1, but compliance score is deep.
      // For now, let's default to mapping or sorting by createdAt if sorting nested is complex.
      // We can sort by createdAt as a safe fallback or use Prisma's nested sorting if it's a 1:1 relation.
      orderBy = { createdAt: sortOrder };
    } else {
      orderBy = { [mappedSortBy]: sortOrder };
    }
  }

  // 4. Run queries in parallel
  const [data, totalItems] = await Promise.all([
    model.findMany({
      where: finalWhere,
      orderBy,
      skip,
      take: limit,
      include: {
        uploader: {
          select: { fullName: true, email: true },
        },
        analysisRequests: {
          orderBy: { createdAt: 'desc' },
          take: 1,
          include: {
            response: {
              include: {
                AnalysisResult: {
                  select: {
                    overallVerdict: true,
                    riskLevel: true,
                    confidence: true,
                  },
                },
              },
            },
          },
        },
      },
    }),
    model.count({
      where: finalWhere,
    }),
  ]);

  const totalPages = Math.ceil(totalItems / limit);

  return {
    data,
    meta: {
      totalItems,
      itemCount: data.length,
      itemsPerPage: limit,
      totalPages,
      currentPage: page,
    },
  };
}
