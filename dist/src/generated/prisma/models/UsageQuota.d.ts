import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UsageQuotaModel = runtime.Types.Result.DefaultSelection<Prisma.$UsageQuotaPayload>;
export type AggregateUsageQuota = {
    _count: UsageQuotaCountAggregateOutputType | null;
    _avg: UsageQuotaAvgAggregateOutputType | null;
    _sum: UsageQuotaSumAggregateOutputType | null;
    _min: UsageQuotaMinAggregateOutputType | null;
    _max: UsageQuotaMaxAggregateOutputType | null;
};
export type UsageQuotaAvgAggregateOutputType = {
    uploadsUsed: number | null;
    analysesUsed: number | null;
};
export type UsageQuotaSumAggregateOutputType = {
    uploadsUsed: number | null;
    analysesUsed: number | null;
};
export type UsageQuotaMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    guestId: string | null;
    uploadsUsed: number | null;
    analysesUsed: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UsageQuotaMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    guestId: string | null;
    uploadsUsed: number | null;
    analysesUsed: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UsageQuotaCountAggregateOutputType = {
    id: number;
    userId: number;
    guestId: number;
    uploadsUsed: number;
    analysesUsed: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UsageQuotaAvgAggregateInputType = {
    uploadsUsed?: true;
    analysesUsed?: true;
};
export type UsageQuotaSumAggregateInputType = {
    uploadsUsed?: true;
    analysesUsed?: true;
};
export type UsageQuotaMinAggregateInputType = {
    id?: true;
    userId?: true;
    guestId?: true;
    uploadsUsed?: true;
    analysesUsed?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UsageQuotaMaxAggregateInputType = {
    id?: true;
    userId?: true;
    guestId?: true;
    uploadsUsed?: true;
    analysesUsed?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UsageQuotaCountAggregateInputType = {
    id?: true;
    userId?: true;
    guestId?: true;
    uploadsUsed?: true;
    analysesUsed?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UsageQuotaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsageQuotaWhereInput;
    orderBy?: Prisma.UsageQuotaOrderByWithRelationInput | Prisma.UsageQuotaOrderByWithRelationInput[];
    cursor?: Prisma.UsageQuotaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsageQuotaCountAggregateInputType;
    _avg?: UsageQuotaAvgAggregateInputType;
    _sum?: UsageQuotaSumAggregateInputType;
    _min?: UsageQuotaMinAggregateInputType;
    _max?: UsageQuotaMaxAggregateInputType;
};
export type GetUsageQuotaAggregateType<T extends UsageQuotaAggregateArgs> = {
    [P in keyof T & keyof AggregateUsageQuota]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsageQuota[P]> : Prisma.GetScalarType<T[P], AggregateUsageQuota[P]>;
};
export type UsageQuotaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsageQuotaWhereInput;
    orderBy?: Prisma.UsageQuotaOrderByWithAggregationInput | Prisma.UsageQuotaOrderByWithAggregationInput[];
    by: Prisma.UsageQuotaScalarFieldEnum[] | Prisma.UsageQuotaScalarFieldEnum;
    having?: Prisma.UsageQuotaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsageQuotaCountAggregateInputType | true;
    _avg?: UsageQuotaAvgAggregateInputType;
    _sum?: UsageQuotaSumAggregateInputType;
    _min?: UsageQuotaMinAggregateInputType;
    _max?: UsageQuotaMaxAggregateInputType;
};
export type UsageQuotaGroupByOutputType = {
    id: string;
    userId: string | null;
    guestId: string | null;
    uploadsUsed: number;
    analysesUsed: number;
    createdAt: Date;
    updatedAt: Date;
    _count: UsageQuotaCountAggregateOutputType | null;
    _avg: UsageQuotaAvgAggregateOutputType | null;
    _sum: UsageQuotaSumAggregateOutputType | null;
    _min: UsageQuotaMinAggregateOutputType | null;
    _max: UsageQuotaMaxAggregateOutputType | null;
};
export type GetUsageQuotaGroupByPayload<T extends UsageQuotaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsageQuotaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsageQuotaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsageQuotaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsageQuotaGroupByOutputType[P]>;
}>>;
export type UsageQuotaWhereInput = {
    AND?: Prisma.UsageQuotaWhereInput | Prisma.UsageQuotaWhereInput[];
    OR?: Prisma.UsageQuotaWhereInput[];
    NOT?: Prisma.UsageQuotaWhereInput | Prisma.UsageQuotaWhereInput[];
    id?: Prisma.UuidFilter<"UsageQuota"> | string;
    userId?: Prisma.UuidNullableFilter<"UsageQuota"> | string | null;
    guestId?: Prisma.StringNullableFilter<"UsageQuota"> | string | null;
    uploadsUsed?: Prisma.IntFilter<"UsageQuota"> | number;
    analysesUsed?: Prisma.IntFilter<"UsageQuota"> | number;
    createdAt?: Prisma.DateTimeFilter<"UsageQuota"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UsageQuota"> | Date | string;
    user?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
};
export type UsageQuotaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    guestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadsUsed?: Prisma.SortOrder;
    analysesUsed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.ProfileOrderByWithRelationInput;
};
export type UsageQuotaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    guestId?: string;
    AND?: Prisma.UsageQuotaWhereInput | Prisma.UsageQuotaWhereInput[];
    OR?: Prisma.UsageQuotaWhereInput[];
    NOT?: Prisma.UsageQuotaWhereInput | Prisma.UsageQuotaWhereInput[];
    uploadsUsed?: Prisma.IntFilter<"UsageQuota"> | number;
    analysesUsed?: Prisma.IntFilter<"UsageQuota"> | number;
    createdAt?: Prisma.DateTimeFilter<"UsageQuota"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UsageQuota"> | Date | string;
    user?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
}, "id" | "userId" | "guestId">;
export type UsageQuotaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    guestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadsUsed?: Prisma.SortOrder;
    analysesUsed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UsageQuotaCountOrderByAggregateInput;
    _avg?: Prisma.UsageQuotaAvgOrderByAggregateInput;
    _max?: Prisma.UsageQuotaMaxOrderByAggregateInput;
    _min?: Prisma.UsageQuotaMinOrderByAggregateInput;
    _sum?: Prisma.UsageQuotaSumOrderByAggregateInput;
};
export type UsageQuotaScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsageQuotaScalarWhereWithAggregatesInput | Prisma.UsageQuotaScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsageQuotaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsageQuotaScalarWhereWithAggregatesInput | Prisma.UsageQuotaScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"UsageQuota"> | string;
    userId?: Prisma.UuidNullableWithAggregatesFilter<"UsageQuota"> | string | null;
    guestId?: Prisma.StringNullableWithAggregatesFilter<"UsageQuota"> | string | null;
    uploadsUsed?: Prisma.IntWithAggregatesFilter<"UsageQuota"> | number;
    analysesUsed?: Prisma.IntWithAggregatesFilter<"UsageQuota"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UsageQuota"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UsageQuota"> | Date | string;
};
export type UsageQuotaCreateInput = {
    id?: string;
    guestId?: string | null;
    uploadsUsed?: number;
    analysesUsed?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: Prisma.ProfileCreateNestedOneWithoutUsageQuotaInput;
};
export type UsageQuotaUncheckedCreateInput = {
    id?: string;
    userId?: string | null;
    guestId?: string | null;
    uploadsUsed?: number;
    analysesUsed?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UsageQuotaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadsUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysesUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.ProfileUpdateOneWithoutUsageQuotaNestedInput;
};
export type UsageQuotaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadsUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysesUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsageQuotaCreateManyInput = {
    id?: string;
    userId?: string | null;
    guestId?: string | null;
    uploadsUsed?: number;
    analysesUsed?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UsageQuotaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadsUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysesUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsageQuotaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadsUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysesUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsageQuotaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    uploadsUsed?: Prisma.SortOrder;
    analysesUsed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsageQuotaAvgOrderByAggregateInput = {
    uploadsUsed?: Prisma.SortOrder;
    analysesUsed?: Prisma.SortOrder;
};
export type UsageQuotaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    uploadsUsed?: Prisma.SortOrder;
    analysesUsed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsageQuotaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    uploadsUsed?: Prisma.SortOrder;
    analysesUsed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsageQuotaSumOrderByAggregateInput = {
    uploadsUsed?: Prisma.SortOrder;
    analysesUsed?: Prisma.SortOrder;
};
export type UsageQuotaNullableScalarRelationFilter = {
    is?: Prisma.UsageQuotaWhereInput | null;
    isNot?: Prisma.UsageQuotaWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UsageQuotaCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UsageQuotaCreateWithoutUserInput, Prisma.UsageQuotaUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UsageQuotaCreateOrConnectWithoutUserInput;
    connect?: Prisma.UsageQuotaWhereUniqueInput;
};
export type UsageQuotaUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UsageQuotaCreateWithoutUserInput, Prisma.UsageQuotaUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UsageQuotaCreateOrConnectWithoutUserInput;
    connect?: Prisma.UsageQuotaWhereUniqueInput;
};
export type UsageQuotaUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UsageQuotaCreateWithoutUserInput, Prisma.UsageQuotaUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UsageQuotaCreateOrConnectWithoutUserInput;
    upsert?: Prisma.UsageQuotaUpsertWithoutUserInput;
    disconnect?: Prisma.UsageQuotaWhereInput | boolean;
    delete?: Prisma.UsageQuotaWhereInput | boolean;
    connect?: Prisma.UsageQuotaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsageQuotaUpdateToOneWithWhereWithoutUserInput, Prisma.UsageQuotaUpdateWithoutUserInput>, Prisma.UsageQuotaUncheckedUpdateWithoutUserInput>;
};
export type UsageQuotaUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UsageQuotaCreateWithoutUserInput, Prisma.UsageQuotaUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UsageQuotaCreateOrConnectWithoutUserInput;
    upsert?: Prisma.UsageQuotaUpsertWithoutUserInput;
    disconnect?: Prisma.UsageQuotaWhereInput | boolean;
    delete?: Prisma.UsageQuotaWhereInput | boolean;
    connect?: Prisma.UsageQuotaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsageQuotaUpdateToOneWithWhereWithoutUserInput, Prisma.UsageQuotaUpdateWithoutUserInput>, Prisma.UsageQuotaUncheckedUpdateWithoutUserInput>;
};
export type UsageQuotaCreateWithoutUserInput = {
    id?: string;
    guestId?: string | null;
    uploadsUsed?: number;
    analysesUsed?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UsageQuotaUncheckedCreateWithoutUserInput = {
    id?: string;
    guestId?: string | null;
    uploadsUsed?: number;
    analysesUsed?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UsageQuotaCreateOrConnectWithoutUserInput = {
    where: Prisma.UsageQuotaWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsageQuotaCreateWithoutUserInput, Prisma.UsageQuotaUncheckedCreateWithoutUserInput>;
};
export type UsageQuotaUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.UsageQuotaUpdateWithoutUserInput, Prisma.UsageQuotaUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UsageQuotaCreateWithoutUserInput, Prisma.UsageQuotaUncheckedCreateWithoutUserInput>;
    where?: Prisma.UsageQuotaWhereInput;
};
export type UsageQuotaUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.UsageQuotaWhereInput;
    data: Prisma.XOR<Prisma.UsageQuotaUpdateWithoutUserInput, Prisma.UsageQuotaUncheckedUpdateWithoutUserInput>;
};
export type UsageQuotaUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadsUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysesUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsageQuotaUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadsUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    analysesUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsageQuotaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    guestId?: boolean;
    uploadsUsed?: boolean;
    analysesUsed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UsageQuota$userArgs<ExtArgs>;
}, ExtArgs["result"]["usageQuota"]>;
export type UsageQuotaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    guestId?: boolean;
    uploadsUsed?: boolean;
    analysesUsed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UsageQuota$userArgs<ExtArgs>;
}, ExtArgs["result"]["usageQuota"]>;
export type UsageQuotaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    guestId?: boolean;
    uploadsUsed?: boolean;
    analysesUsed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UsageQuota$userArgs<ExtArgs>;
}, ExtArgs["result"]["usageQuota"]>;
export type UsageQuotaSelectScalar = {
    id?: boolean;
    userId?: boolean;
    guestId?: boolean;
    uploadsUsed?: boolean;
    analysesUsed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UsageQuotaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "guestId" | "uploadsUsed" | "analysesUsed" | "createdAt" | "updatedAt", ExtArgs["result"]["usageQuota"]>;
export type UsageQuotaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UsageQuota$userArgs<ExtArgs>;
};
export type UsageQuotaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UsageQuota$userArgs<ExtArgs>;
};
export type UsageQuotaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UsageQuota$userArgs<ExtArgs>;
};
export type $UsageQuotaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UsageQuota";
    objects: {
        user: Prisma.$ProfilePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string | null;
        guestId: string | null;
        uploadsUsed: number;
        analysesUsed: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["usageQuota"]>;
    composites: {};
};
export type UsageQuotaGetPayload<S extends boolean | null | undefined | UsageQuotaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsageQuotaPayload, S>;
export type UsageQuotaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsageQuotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsageQuotaCountAggregateInputType | true;
};
export interface UsageQuotaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UsageQuota'];
        meta: {
            name: 'UsageQuota';
        };
    };
    findUnique<T extends UsageQuotaFindUniqueArgs>(args: Prisma.SelectSubset<T, UsageQuotaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsageQuotaClient<runtime.Types.Result.GetResult<Prisma.$UsageQuotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsageQuotaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsageQuotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsageQuotaClient<runtime.Types.Result.GetResult<Prisma.$UsageQuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsageQuotaFindFirstArgs>(args?: Prisma.SelectSubset<T, UsageQuotaFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsageQuotaClient<runtime.Types.Result.GetResult<Prisma.$UsageQuotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsageQuotaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsageQuotaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsageQuotaClient<runtime.Types.Result.GetResult<Prisma.$UsageQuotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsageQuotaFindManyArgs>(args?: Prisma.SelectSubset<T, UsageQuotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsageQuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsageQuotaCreateArgs>(args: Prisma.SelectSubset<T, UsageQuotaCreateArgs<ExtArgs>>): Prisma.Prisma__UsageQuotaClient<runtime.Types.Result.GetResult<Prisma.$UsageQuotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsageQuotaCreateManyArgs>(args?: Prisma.SelectSubset<T, UsageQuotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UsageQuotaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsageQuotaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsageQuotaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UsageQuotaDeleteArgs>(args: Prisma.SelectSubset<T, UsageQuotaDeleteArgs<ExtArgs>>): Prisma.Prisma__UsageQuotaClient<runtime.Types.Result.GetResult<Prisma.$UsageQuotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsageQuotaUpdateArgs>(args: Prisma.SelectSubset<T, UsageQuotaUpdateArgs<ExtArgs>>): Prisma.Prisma__UsageQuotaClient<runtime.Types.Result.GetResult<Prisma.$UsageQuotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsageQuotaDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsageQuotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsageQuotaUpdateManyArgs>(args: Prisma.SelectSubset<T, UsageQuotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UsageQuotaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsageQuotaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsageQuotaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UsageQuotaUpsertArgs>(args: Prisma.SelectSubset<T, UsageQuotaUpsertArgs<ExtArgs>>): Prisma.Prisma__UsageQuotaClient<runtime.Types.Result.GetResult<Prisma.$UsageQuotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsageQuotaCountArgs>(args?: Prisma.Subset<T, UsageQuotaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsageQuotaCountAggregateOutputType> : number>;
    aggregate<T extends UsageQuotaAggregateArgs>(args: Prisma.Subset<T, UsageQuotaAggregateArgs>): Prisma.PrismaPromise<GetUsageQuotaAggregateType<T>>;
    groupBy<T extends UsageQuotaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsageQuotaGroupByArgs['orderBy'];
    } : {
        orderBy?: UsageQuotaGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsageQuotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageQuotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsageQuotaFieldRefs;
}
export interface Prisma__UsageQuotaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UsageQuota$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsageQuota$userArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsageQuotaFieldRefs {
    readonly id: Prisma.FieldRef<"UsageQuota", 'String'>;
    readonly userId: Prisma.FieldRef<"UsageQuota", 'String'>;
    readonly guestId: Prisma.FieldRef<"UsageQuota", 'String'>;
    readonly uploadsUsed: Prisma.FieldRef<"UsageQuota", 'Int'>;
    readonly analysesUsed: Prisma.FieldRef<"UsageQuota", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"UsageQuota", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"UsageQuota", 'DateTime'>;
}
export type UsageQuotaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageQuotaSelect<ExtArgs> | null;
    omit?: Prisma.UsageQuotaOmit<ExtArgs> | null;
    include?: Prisma.UsageQuotaInclude<ExtArgs> | null;
    where: Prisma.UsageQuotaWhereUniqueInput;
};
export type UsageQuotaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageQuotaSelect<ExtArgs> | null;
    omit?: Prisma.UsageQuotaOmit<ExtArgs> | null;
    include?: Prisma.UsageQuotaInclude<ExtArgs> | null;
    where: Prisma.UsageQuotaWhereUniqueInput;
};
export type UsageQuotaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageQuotaSelect<ExtArgs> | null;
    omit?: Prisma.UsageQuotaOmit<ExtArgs> | null;
    include?: Prisma.UsageQuotaInclude<ExtArgs> | null;
    where?: Prisma.UsageQuotaWhereInput;
    orderBy?: Prisma.UsageQuotaOrderByWithRelationInput | Prisma.UsageQuotaOrderByWithRelationInput[];
    cursor?: Prisma.UsageQuotaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsageQuotaScalarFieldEnum | Prisma.UsageQuotaScalarFieldEnum[];
};
export type UsageQuotaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageQuotaSelect<ExtArgs> | null;
    omit?: Prisma.UsageQuotaOmit<ExtArgs> | null;
    include?: Prisma.UsageQuotaInclude<ExtArgs> | null;
    where?: Prisma.UsageQuotaWhereInput;
    orderBy?: Prisma.UsageQuotaOrderByWithRelationInput | Prisma.UsageQuotaOrderByWithRelationInput[];
    cursor?: Prisma.UsageQuotaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsageQuotaScalarFieldEnum | Prisma.UsageQuotaScalarFieldEnum[];
};
export type UsageQuotaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageQuotaSelect<ExtArgs> | null;
    omit?: Prisma.UsageQuotaOmit<ExtArgs> | null;
    include?: Prisma.UsageQuotaInclude<ExtArgs> | null;
    where?: Prisma.UsageQuotaWhereInput;
    orderBy?: Prisma.UsageQuotaOrderByWithRelationInput | Prisma.UsageQuotaOrderByWithRelationInput[];
    cursor?: Prisma.UsageQuotaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsageQuotaScalarFieldEnum | Prisma.UsageQuotaScalarFieldEnum[];
};
export type UsageQuotaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageQuotaSelect<ExtArgs> | null;
    omit?: Prisma.UsageQuotaOmit<ExtArgs> | null;
    include?: Prisma.UsageQuotaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsageQuotaCreateInput, Prisma.UsageQuotaUncheckedCreateInput>;
};
export type UsageQuotaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsageQuotaCreateManyInput | Prisma.UsageQuotaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsageQuotaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageQuotaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsageQuotaOmit<ExtArgs> | null;
    data: Prisma.UsageQuotaCreateManyInput | Prisma.UsageQuotaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UsageQuotaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UsageQuotaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageQuotaSelect<ExtArgs> | null;
    omit?: Prisma.UsageQuotaOmit<ExtArgs> | null;
    include?: Prisma.UsageQuotaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsageQuotaUpdateInput, Prisma.UsageQuotaUncheckedUpdateInput>;
    where: Prisma.UsageQuotaWhereUniqueInput;
};
export type UsageQuotaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsageQuotaUpdateManyMutationInput, Prisma.UsageQuotaUncheckedUpdateManyInput>;
    where?: Prisma.UsageQuotaWhereInput;
    limit?: number;
};
export type UsageQuotaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageQuotaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsageQuotaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsageQuotaUpdateManyMutationInput, Prisma.UsageQuotaUncheckedUpdateManyInput>;
    where?: Prisma.UsageQuotaWhereInput;
    limit?: number;
    include?: Prisma.UsageQuotaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UsageQuotaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageQuotaSelect<ExtArgs> | null;
    omit?: Prisma.UsageQuotaOmit<ExtArgs> | null;
    include?: Prisma.UsageQuotaInclude<ExtArgs> | null;
    where: Prisma.UsageQuotaWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsageQuotaCreateInput, Prisma.UsageQuotaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsageQuotaUpdateInput, Prisma.UsageQuotaUncheckedUpdateInput>;
};
export type UsageQuotaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageQuotaSelect<ExtArgs> | null;
    omit?: Prisma.UsageQuotaOmit<ExtArgs> | null;
    include?: Prisma.UsageQuotaInclude<ExtArgs> | null;
    where: Prisma.UsageQuotaWhereUniqueInput;
};
export type UsageQuotaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsageQuotaWhereInput;
    limit?: number;
};
export type UsageQuota$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
};
export type UsageQuotaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageQuotaSelect<ExtArgs> | null;
    omit?: Prisma.UsageQuotaOmit<ExtArgs> | null;
    include?: Prisma.UsageQuotaInclude<ExtArgs> | null;
};
