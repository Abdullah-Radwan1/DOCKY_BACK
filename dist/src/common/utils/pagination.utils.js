"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginatePrisma = paginatePrisma;
async function paginatePrisma(model, query, options = {}) {
    const page = Math.max(1, query.page ?? 1);
    const limit = Math.max(1, query.limit ?? 10);
    const skip = (page - 1) * limit;
    const whereConditions = [];
    if (options.where) {
        whereConditions.push(options.where);
    }
    if (query.search && options.searchFields && options.searchFields.length > 0) {
        const searchConditions = options.searchFields.map((field) => ({
            [field]: {
                contains: query.search,
                mode: 'insensitive',
            },
        }));
        whereConditions.push({ OR: searchConditions });
    }
    if (query.status && query.status !== 'all') {
        whereConditions.push({ status: query.status });
    }
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
    const finalWhere = whereConditions.length > 0
        ? whereConditions.length === 1
            ? whereConditions[0]
            : { AND: whereConditions }
        : undefined;
    let orderBy = undefined;
    const sortBy = query.sortBy || options.defaultSortBy || 'createdAt';
    const sortOrder = query.sortOrder || 'desc';
    if (sortBy) {
        let mappedSortBy = sortBy;
        if (sortBy === 'filename') {
            mappedSortBy = 'originalFileName';
        }
        else if (sortBy === 'created_at') {
            mappedSortBy = 'createdAt';
        }
        if (mappedSortBy === 'compliance_score') {
            orderBy = { createdAt: sortOrder };
        }
        else {
            orderBy = { [mappedSortBy]: sortOrder };
        }
    }
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
//# sourceMappingURL=pagination.utils.js.map