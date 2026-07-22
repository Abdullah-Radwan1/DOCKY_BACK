import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaddleSubscriptionModel = runtime.Types.Result.DefaultSelection<Prisma.$PaddleSubscriptionPayload>;
export type AggregatePaddleSubscription = {
    _count: PaddleSubscriptionCountAggregateOutputType | null;
    _min: PaddleSubscriptionMinAggregateOutputType | null;
    _max: PaddleSubscriptionMaxAggregateOutputType | null;
};
export type PaddleSubscriptionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    paddleCustomerId: string | null;
    paddleSubscriptionId: string | null;
    plan: $Enums.PlanType | null;
    billingCycle: $Enums.BillingCycle | null;
    status: string | null;
    currentPeriodEnd: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaddleSubscriptionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    paddleCustomerId: string | null;
    paddleSubscriptionId: string | null;
    plan: $Enums.PlanType | null;
    billingCycle: $Enums.BillingCycle | null;
    status: string | null;
    currentPeriodEnd: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaddleSubscriptionCountAggregateOutputType = {
    id: number;
    userId: number;
    paddleCustomerId: number;
    paddleSubscriptionId: number;
    plan: number;
    billingCycle: number;
    status: number;
    currentPeriodEnd: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PaddleSubscriptionMinAggregateInputType = {
    id?: true;
    userId?: true;
    paddleCustomerId?: true;
    paddleSubscriptionId?: true;
    plan?: true;
    billingCycle?: true;
    status?: true;
    currentPeriodEnd?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaddleSubscriptionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    paddleCustomerId?: true;
    paddleSubscriptionId?: true;
    plan?: true;
    billingCycle?: true;
    status?: true;
    currentPeriodEnd?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaddleSubscriptionCountAggregateInputType = {
    id?: true;
    userId?: true;
    paddleCustomerId?: true;
    paddleSubscriptionId?: true;
    plan?: true;
    billingCycle?: true;
    status?: true;
    currentPeriodEnd?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PaddleSubscriptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaddleSubscriptionWhereInput;
    orderBy?: Prisma.PaddleSubscriptionOrderByWithRelationInput | Prisma.PaddleSubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.PaddleSubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaddleSubscriptionCountAggregateInputType;
    _min?: PaddleSubscriptionMinAggregateInputType;
    _max?: PaddleSubscriptionMaxAggregateInputType;
};
export type GetPaddleSubscriptionAggregateType<T extends PaddleSubscriptionAggregateArgs> = {
    [P in keyof T & keyof AggregatePaddleSubscription]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaddleSubscription[P]> : Prisma.GetScalarType<T[P], AggregatePaddleSubscription[P]>;
};
export type PaddleSubscriptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaddleSubscriptionWhereInput;
    orderBy?: Prisma.PaddleSubscriptionOrderByWithAggregationInput | Prisma.PaddleSubscriptionOrderByWithAggregationInput[];
    by: Prisma.PaddleSubscriptionScalarFieldEnum[] | Prisma.PaddleSubscriptionScalarFieldEnum;
    having?: Prisma.PaddleSubscriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaddleSubscriptionCountAggregateInputType | true;
    _min?: PaddleSubscriptionMinAggregateInputType;
    _max?: PaddleSubscriptionMaxAggregateInputType;
};
export type PaddleSubscriptionGroupByOutputType = {
    id: string;
    userId: string;
    paddleCustomerId: string;
    paddleSubscriptionId: string;
    plan: $Enums.PlanType;
    billingCycle: $Enums.BillingCycle;
    status: string;
    currentPeriodEnd: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PaddleSubscriptionCountAggregateOutputType | null;
    _min: PaddleSubscriptionMinAggregateOutputType | null;
    _max: PaddleSubscriptionMaxAggregateOutputType | null;
};
export type GetPaddleSubscriptionGroupByPayload<T extends PaddleSubscriptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaddleSubscriptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaddleSubscriptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaddleSubscriptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaddleSubscriptionGroupByOutputType[P]>;
}>>;
export type PaddleSubscriptionWhereInput = {
    AND?: Prisma.PaddleSubscriptionWhereInput | Prisma.PaddleSubscriptionWhereInput[];
    OR?: Prisma.PaddleSubscriptionWhereInput[];
    NOT?: Prisma.PaddleSubscriptionWhereInput | Prisma.PaddleSubscriptionWhereInput[];
    id?: Prisma.UuidFilter<"PaddleSubscription"> | string;
    userId?: Prisma.UuidFilter<"PaddleSubscription"> | string;
    paddleCustomerId?: Prisma.StringFilter<"PaddleSubscription"> | string;
    paddleSubscriptionId?: Prisma.StringFilter<"PaddleSubscription"> | string;
    plan?: Prisma.EnumPlanTypeFilter<"PaddleSubscription"> | $Enums.PlanType;
    billingCycle?: Prisma.EnumBillingCycleFilter<"PaddleSubscription"> | $Enums.BillingCycle;
    status?: Prisma.StringFilter<"PaddleSubscription"> | string;
    currentPeriodEnd?: Prisma.DateTimeNullableFilter<"PaddleSubscription"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaddleSubscription"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaddleSubscription"> | Date | string;
    user?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
};
export type PaddleSubscriptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    paddleCustomerId?: Prisma.SortOrder;
    paddleSubscriptionId?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    billingCycle?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentPeriodEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.ProfileOrderByWithRelationInput;
};
export type PaddleSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    paddleSubscriptionId?: string;
    AND?: Prisma.PaddleSubscriptionWhereInput | Prisma.PaddleSubscriptionWhereInput[];
    OR?: Prisma.PaddleSubscriptionWhereInput[];
    NOT?: Prisma.PaddleSubscriptionWhereInput | Prisma.PaddleSubscriptionWhereInput[];
    paddleCustomerId?: Prisma.StringFilter<"PaddleSubscription"> | string;
    plan?: Prisma.EnumPlanTypeFilter<"PaddleSubscription"> | $Enums.PlanType;
    billingCycle?: Prisma.EnumBillingCycleFilter<"PaddleSubscription"> | $Enums.BillingCycle;
    status?: Prisma.StringFilter<"PaddleSubscription"> | string;
    currentPeriodEnd?: Prisma.DateTimeNullableFilter<"PaddleSubscription"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaddleSubscription"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaddleSubscription"> | Date | string;
    user?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
}, "id" | "userId" | "paddleSubscriptionId">;
export type PaddleSubscriptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    paddleCustomerId?: Prisma.SortOrder;
    paddleSubscriptionId?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    billingCycle?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentPeriodEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PaddleSubscriptionCountOrderByAggregateInput;
    _max?: Prisma.PaddleSubscriptionMaxOrderByAggregateInput;
    _min?: Prisma.PaddleSubscriptionMinOrderByAggregateInput;
};
export type PaddleSubscriptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaddleSubscriptionScalarWhereWithAggregatesInput | Prisma.PaddleSubscriptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaddleSubscriptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaddleSubscriptionScalarWhereWithAggregatesInput | Prisma.PaddleSubscriptionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PaddleSubscription"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"PaddleSubscription"> | string;
    paddleCustomerId?: Prisma.StringWithAggregatesFilter<"PaddleSubscription"> | string;
    paddleSubscriptionId?: Prisma.StringWithAggregatesFilter<"PaddleSubscription"> | string;
    plan?: Prisma.EnumPlanTypeWithAggregatesFilter<"PaddleSubscription"> | $Enums.PlanType;
    billingCycle?: Prisma.EnumBillingCycleWithAggregatesFilter<"PaddleSubscription"> | $Enums.BillingCycle;
    status?: Prisma.StringWithAggregatesFilter<"PaddleSubscription"> | string;
    currentPeriodEnd?: Prisma.DateTimeNullableWithAggregatesFilter<"PaddleSubscription"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PaddleSubscription"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PaddleSubscription"> | Date | string;
};
export type PaddleSubscriptionCreateInput = {
    id?: string;
    paddleCustomerId: string;
    paddleSubscriptionId: string;
    plan: $Enums.PlanType;
    billingCycle: $Enums.BillingCycle;
    status: string;
    currentPeriodEnd?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.ProfileCreateNestedOneWithoutPaddleSubscriptionInput;
};
export type PaddleSubscriptionUncheckedCreateInput = {
    id?: string;
    userId: string;
    paddleCustomerId: string;
    paddleSubscriptionId: string;
    plan: $Enums.PlanType;
    billingCycle: $Enums.BillingCycle;
    status: string;
    currentPeriodEnd?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaddleSubscriptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paddleCustomerId?: Prisma.StringFieldUpdateOperationsInput | string;
    paddleSubscriptionId?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType;
    billingCycle?: Prisma.EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPeriodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.ProfileUpdateOneRequiredWithoutPaddleSubscriptionNestedInput;
};
export type PaddleSubscriptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    paddleCustomerId?: Prisma.StringFieldUpdateOperationsInput | string;
    paddleSubscriptionId?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType;
    billingCycle?: Prisma.EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPeriodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaddleSubscriptionCreateManyInput = {
    id?: string;
    userId: string;
    paddleCustomerId: string;
    paddleSubscriptionId: string;
    plan: $Enums.PlanType;
    billingCycle: $Enums.BillingCycle;
    status: string;
    currentPeriodEnd?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaddleSubscriptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paddleCustomerId?: Prisma.StringFieldUpdateOperationsInput | string;
    paddleSubscriptionId?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType;
    billingCycle?: Prisma.EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPeriodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaddleSubscriptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    paddleCustomerId?: Prisma.StringFieldUpdateOperationsInput | string;
    paddleSubscriptionId?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType;
    billingCycle?: Prisma.EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPeriodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaddleSubscriptionNullableScalarRelationFilter = {
    is?: Prisma.PaddleSubscriptionWhereInput | null;
    isNot?: Prisma.PaddleSubscriptionWhereInput | null;
};
export type PaddleSubscriptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    paddleCustomerId?: Prisma.SortOrder;
    paddleSubscriptionId?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    billingCycle?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentPeriodEnd?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaddleSubscriptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    paddleCustomerId?: Prisma.SortOrder;
    paddleSubscriptionId?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    billingCycle?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentPeriodEnd?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaddleSubscriptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    paddleCustomerId?: Prisma.SortOrder;
    paddleSubscriptionId?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    billingCycle?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentPeriodEnd?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaddleSubscriptionCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PaddleSubscriptionCreateWithoutUserInput, Prisma.PaddleSubscriptionUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.PaddleSubscriptionCreateOrConnectWithoutUserInput;
    connect?: Prisma.PaddleSubscriptionWhereUniqueInput;
};
export type PaddleSubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PaddleSubscriptionCreateWithoutUserInput, Prisma.PaddleSubscriptionUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.PaddleSubscriptionCreateOrConnectWithoutUserInput;
    connect?: Prisma.PaddleSubscriptionWhereUniqueInput;
};
export type PaddleSubscriptionUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PaddleSubscriptionCreateWithoutUserInput, Prisma.PaddleSubscriptionUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.PaddleSubscriptionCreateOrConnectWithoutUserInput;
    upsert?: Prisma.PaddleSubscriptionUpsertWithoutUserInput;
    disconnect?: Prisma.PaddleSubscriptionWhereInput | boolean;
    delete?: Prisma.PaddleSubscriptionWhereInput | boolean;
    connect?: Prisma.PaddleSubscriptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaddleSubscriptionUpdateToOneWithWhereWithoutUserInput, Prisma.PaddleSubscriptionUpdateWithoutUserInput>, Prisma.PaddleSubscriptionUncheckedUpdateWithoutUserInput>;
};
export type PaddleSubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PaddleSubscriptionCreateWithoutUserInput, Prisma.PaddleSubscriptionUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.PaddleSubscriptionCreateOrConnectWithoutUserInput;
    upsert?: Prisma.PaddleSubscriptionUpsertWithoutUserInput;
    disconnect?: Prisma.PaddleSubscriptionWhereInput | boolean;
    delete?: Prisma.PaddleSubscriptionWhereInput | boolean;
    connect?: Prisma.PaddleSubscriptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaddleSubscriptionUpdateToOneWithWhereWithoutUserInput, Prisma.PaddleSubscriptionUpdateWithoutUserInput>, Prisma.PaddleSubscriptionUncheckedUpdateWithoutUserInput>;
};
export type EnumBillingCycleFieldUpdateOperationsInput = {
    set?: $Enums.BillingCycle;
};
export type PaddleSubscriptionCreateWithoutUserInput = {
    id?: string;
    paddleCustomerId: string;
    paddleSubscriptionId: string;
    plan: $Enums.PlanType;
    billingCycle: $Enums.BillingCycle;
    status: string;
    currentPeriodEnd?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaddleSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string;
    paddleCustomerId: string;
    paddleSubscriptionId: string;
    plan: $Enums.PlanType;
    billingCycle: $Enums.BillingCycle;
    status: string;
    currentPeriodEnd?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaddleSubscriptionCreateOrConnectWithoutUserInput = {
    where: Prisma.PaddleSubscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaddleSubscriptionCreateWithoutUserInput, Prisma.PaddleSubscriptionUncheckedCreateWithoutUserInput>;
};
export type PaddleSubscriptionUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.PaddleSubscriptionUpdateWithoutUserInput, Prisma.PaddleSubscriptionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PaddleSubscriptionCreateWithoutUserInput, Prisma.PaddleSubscriptionUncheckedCreateWithoutUserInput>;
    where?: Prisma.PaddleSubscriptionWhereInput;
};
export type PaddleSubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.PaddleSubscriptionWhereInput;
    data: Prisma.XOR<Prisma.PaddleSubscriptionUpdateWithoutUserInput, Prisma.PaddleSubscriptionUncheckedUpdateWithoutUserInput>;
};
export type PaddleSubscriptionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paddleCustomerId?: Prisma.StringFieldUpdateOperationsInput | string;
    paddleSubscriptionId?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType;
    billingCycle?: Prisma.EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPeriodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaddleSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paddleCustomerId?: Prisma.StringFieldUpdateOperationsInput | string;
    paddleSubscriptionId?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType;
    billingCycle?: Prisma.EnumBillingCycleFieldUpdateOperationsInput | $Enums.BillingCycle;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPeriodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaddleSubscriptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    paddleCustomerId?: boolean;
    paddleSubscriptionId?: boolean;
    plan?: boolean;
    billingCycle?: boolean;
    status?: boolean;
    currentPeriodEnd?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paddleSubscription"]>;
export type PaddleSubscriptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    paddleCustomerId?: boolean;
    paddleSubscriptionId?: boolean;
    plan?: boolean;
    billingCycle?: boolean;
    status?: boolean;
    currentPeriodEnd?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paddleSubscription"]>;
export type PaddleSubscriptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    paddleCustomerId?: boolean;
    paddleSubscriptionId?: boolean;
    plan?: boolean;
    billingCycle?: boolean;
    status?: boolean;
    currentPeriodEnd?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paddleSubscription"]>;
export type PaddleSubscriptionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    paddleCustomerId?: boolean;
    paddleSubscriptionId?: boolean;
    plan?: boolean;
    billingCycle?: boolean;
    status?: boolean;
    currentPeriodEnd?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PaddleSubscriptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "paddleCustomerId" | "paddleSubscriptionId" | "plan" | "billingCycle" | "status" | "currentPeriodEnd" | "createdAt" | "updatedAt", ExtArgs["result"]["paddleSubscription"]>;
export type PaddleSubscriptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type PaddleSubscriptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type PaddleSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $PaddleSubscriptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaddleSubscription";
    objects: {
        user: Prisma.$ProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        paddleCustomerId: string;
        paddleSubscriptionId: string;
        plan: $Enums.PlanType;
        billingCycle: $Enums.BillingCycle;
        status: string;
        currentPeriodEnd: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["paddleSubscription"]>;
    composites: {};
};
export type PaddleSubscriptionGetPayload<S extends boolean | null | undefined | PaddleSubscriptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaddleSubscriptionPayload, S>;
export type PaddleSubscriptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaddleSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaddleSubscriptionCountAggregateInputType | true;
};
export interface PaddleSubscriptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaddleSubscription'];
        meta: {
            name: 'PaddleSubscription';
        };
    };
    findUnique<T extends PaddleSubscriptionFindUniqueArgs>(args: Prisma.SelectSubset<T, PaddleSubscriptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaddleSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$PaddleSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaddleSubscriptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaddleSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaddleSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$PaddleSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaddleSubscriptionFindFirstArgs>(args?: Prisma.SelectSubset<T, PaddleSubscriptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaddleSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$PaddleSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaddleSubscriptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaddleSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaddleSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$PaddleSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaddleSubscriptionFindManyArgs>(args?: Prisma.SelectSubset<T, PaddleSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaddleSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaddleSubscriptionCreateArgs>(args: Prisma.SelectSubset<T, PaddleSubscriptionCreateArgs<ExtArgs>>): Prisma.Prisma__PaddleSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$PaddleSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaddleSubscriptionCreateManyArgs>(args?: Prisma.SelectSubset<T, PaddleSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaddleSubscriptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaddleSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaddleSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaddleSubscriptionDeleteArgs>(args: Prisma.SelectSubset<T, PaddleSubscriptionDeleteArgs<ExtArgs>>): Prisma.Prisma__PaddleSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$PaddleSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaddleSubscriptionUpdateArgs>(args: Prisma.SelectSubset<T, PaddleSubscriptionUpdateArgs<ExtArgs>>): Prisma.Prisma__PaddleSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$PaddleSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaddleSubscriptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaddleSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaddleSubscriptionUpdateManyArgs>(args: Prisma.SelectSubset<T, PaddleSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaddleSubscriptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaddleSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaddleSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaddleSubscriptionUpsertArgs>(args: Prisma.SelectSubset<T, PaddleSubscriptionUpsertArgs<ExtArgs>>): Prisma.Prisma__PaddleSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$PaddleSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaddleSubscriptionCountArgs>(args?: Prisma.Subset<T, PaddleSubscriptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaddleSubscriptionCountAggregateOutputType> : number>;
    aggregate<T extends PaddleSubscriptionAggregateArgs>(args: Prisma.Subset<T, PaddleSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetPaddleSubscriptionAggregateType<T>>;
    groupBy<T extends PaddleSubscriptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaddleSubscriptionGroupByArgs['orderBy'];
    } : {
        orderBy?: PaddleSubscriptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaddleSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaddleSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaddleSubscriptionFieldRefs;
}
export interface Prisma__PaddleSubscriptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaddleSubscriptionFieldRefs {
    readonly id: Prisma.FieldRef<"PaddleSubscription", 'String'>;
    readonly userId: Prisma.FieldRef<"PaddleSubscription", 'String'>;
    readonly paddleCustomerId: Prisma.FieldRef<"PaddleSubscription", 'String'>;
    readonly paddleSubscriptionId: Prisma.FieldRef<"PaddleSubscription", 'String'>;
    readonly plan: Prisma.FieldRef<"PaddleSubscription", 'PlanType'>;
    readonly billingCycle: Prisma.FieldRef<"PaddleSubscription", 'BillingCycle'>;
    readonly status: Prisma.FieldRef<"PaddleSubscription", 'String'>;
    readonly currentPeriodEnd: Prisma.FieldRef<"PaddleSubscription", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"PaddleSubscription", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PaddleSubscription", 'DateTime'>;
}
export type PaddleSubscriptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaddleSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.PaddleSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.PaddleSubscriptionInclude<ExtArgs> | null;
    where: Prisma.PaddleSubscriptionWhereUniqueInput;
};
export type PaddleSubscriptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaddleSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.PaddleSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.PaddleSubscriptionInclude<ExtArgs> | null;
    where: Prisma.PaddleSubscriptionWhereUniqueInput;
};
export type PaddleSubscriptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaddleSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.PaddleSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.PaddleSubscriptionInclude<ExtArgs> | null;
    where?: Prisma.PaddleSubscriptionWhereInput;
    orderBy?: Prisma.PaddleSubscriptionOrderByWithRelationInput | Prisma.PaddleSubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.PaddleSubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaddleSubscriptionScalarFieldEnum | Prisma.PaddleSubscriptionScalarFieldEnum[];
};
export type PaddleSubscriptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaddleSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.PaddleSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.PaddleSubscriptionInclude<ExtArgs> | null;
    where?: Prisma.PaddleSubscriptionWhereInput;
    orderBy?: Prisma.PaddleSubscriptionOrderByWithRelationInput | Prisma.PaddleSubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.PaddleSubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaddleSubscriptionScalarFieldEnum | Prisma.PaddleSubscriptionScalarFieldEnum[];
};
export type PaddleSubscriptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaddleSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.PaddleSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.PaddleSubscriptionInclude<ExtArgs> | null;
    where?: Prisma.PaddleSubscriptionWhereInput;
    orderBy?: Prisma.PaddleSubscriptionOrderByWithRelationInput | Prisma.PaddleSubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.PaddleSubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaddleSubscriptionScalarFieldEnum | Prisma.PaddleSubscriptionScalarFieldEnum[];
};
export type PaddleSubscriptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaddleSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.PaddleSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.PaddleSubscriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaddleSubscriptionCreateInput, Prisma.PaddleSubscriptionUncheckedCreateInput>;
};
export type PaddleSubscriptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaddleSubscriptionCreateManyInput | Prisma.PaddleSubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaddleSubscriptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaddleSubscriptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaddleSubscriptionOmit<ExtArgs> | null;
    data: Prisma.PaddleSubscriptionCreateManyInput | Prisma.PaddleSubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaddleSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaddleSubscriptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaddleSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.PaddleSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.PaddleSubscriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaddleSubscriptionUpdateInput, Prisma.PaddleSubscriptionUncheckedUpdateInput>;
    where: Prisma.PaddleSubscriptionWhereUniqueInput;
};
export type PaddleSubscriptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaddleSubscriptionUpdateManyMutationInput, Prisma.PaddleSubscriptionUncheckedUpdateManyInput>;
    where?: Prisma.PaddleSubscriptionWhereInput;
    limit?: number;
};
export type PaddleSubscriptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaddleSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaddleSubscriptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaddleSubscriptionUpdateManyMutationInput, Prisma.PaddleSubscriptionUncheckedUpdateManyInput>;
    where?: Prisma.PaddleSubscriptionWhereInput;
    limit?: number;
    include?: Prisma.PaddleSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaddleSubscriptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaddleSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.PaddleSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.PaddleSubscriptionInclude<ExtArgs> | null;
    where: Prisma.PaddleSubscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaddleSubscriptionCreateInput, Prisma.PaddleSubscriptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaddleSubscriptionUpdateInput, Prisma.PaddleSubscriptionUncheckedUpdateInput>;
};
export type PaddleSubscriptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaddleSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.PaddleSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.PaddleSubscriptionInclude<ExtArgs> | null;
    where: Prisma.PaddleSubscriptionWhereUniqueInput;
};
export type PaddleSubscriptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaddleSubscriptionWhereInput;
    limit?: number;
};
export type PaddleSubscriptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaddleSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.PaddleSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.PaddleSubscriptionInclude<ExtArgs> | null;
};
