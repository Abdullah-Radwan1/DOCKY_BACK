import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnalysisRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$AnalysisRequestPayload>;
export type AggregateAnalysisRequest = {
    _count: AnalysisRequestCountAggregateOutputType | null;
    _avg: AnalysisRequestAvgAggregateOutputType | null;
    _sum: AnalysisRequestSumAggregateOutputType | null;
    _min: AnalysisRequestMinAggregateOutputType | null;
    _max: AnalysisRequestMaxAggregateOutputType | null;
};
export type AnalysisRequestAvgAggregateOutputType = {
    attemptCount: number | null;
};
export type AnalysisRequestSumAggregateOutputType = {
    attemptCount: number | null;
};
export type AnalysisRequestMinAggregateOutputType = {
    id: string | null;
    queryText: string | null;
    status: $Enums.AnalysisRequestStatus | null;
    documentId: string | null;
    userId: string | null;
    guestId: string | null;
    attemptCount: number | null;
    errorMessage: string | null;
    processingStartedAt: Date | null;
    processingFinishedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AnalysisRequestMaxAggregateOutputType = {
    id: string | null;
    queryText: string | null;
    status: $Enums.AnalysisRequestStatus | null;
    documentId: string | null;
    userId: string | null;
    guestId: string | null;
    attemptCount: number | null;
    errorMessage: string | null;
    processingStartedAt: Date | null;
    processingFinishedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AnalysisRequestCountAggregateOutputType = {
    id: number;
    queryText: number;
    status: number;
    documentId: number;
    userId: number;
    guestId: number;
    attemptCount: number;
    errorMessage: number;
    processingStartedAt: number;
    processingFinishedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AnalysisRequestAvgAggregateInputType = {
    attemptCount?: true;
};
export type AnalysisRequestSumAggregateInputType = {
    attemptCount?: true;
};
export type AnalysisRequestMinAggregateInputType = {
    id?: true;
    queryText?: true;
    status?: true;
    documentId?: true;
    userId?: true;
    guestId?: true;
    attemptCount?: true;
    errorMessage?: true;
    processingStartedAt?: true;
    processingFinishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AnalysisRequestMaxAggregateInputType = {
    id?: true;
    queryText?: true;
    status?: true;
    documentId?: true;
    userId?: true;
    guestId?: true;
    attemptCount?: true;
    errorMessage?: true;
    processingStartedAt?: true;
    processingFinishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AnalysisRequestCountAggregateInputType = {
    id?: true;
    queryText?: true;
    status?: true;
    documentId?: true;
    userId?: true;
    guestId?: true;
    attemptCount?: true;
    errorMessage?: true;
    processingStartedAt?: true;
    processingFinishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AnalysisRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalysisRequestWhereInput;
    orderBy?: Prisma.AnalysisRequestOrderByWithRelationInput | Prisma.AnalysisRequestOrderByWithRelationInput[];
    cursor?: Prisma.AnalysisRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnalysisRequestCountAggregateInputType;
    _avg?: AnalysisRequestAvgAggregateInputType;
    _sum?: AnalysisRequestSumAggregateInputType;
    _min?: AnalysisRequestMinAggregateInputType;
    _max?: AnalysisRequestMaxAggregateInputType;
};
export type GetAnalysisRequestAggregateType<T extends AnalysisRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateAnalysisRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnalysisRequest[P]> : Prisma.GetScalarType<T[P], AggregateAnalysisRequest[P]>;
};
export type AnalysisRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalysisRequestWhereInput;
    orderBy?: Prisma.AnalysisRequestOrderByWithAggregationInput | Prisma.AnalysisRequestOrderByWithAggregationInput[];
    by: Prisma.AnalysisRequestScalarFieldEnum[] | Prisma.AnalysisRequestScalarFieldEnum;
    having?: Prisma.AnalysisRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnalysisRequestCountAggregateInputType | true;
    _avg?: AnalysisRequestAvgAggregateInputType;
    _sum?: AnalysisRequestSumAggregateInputType;
    _min?: AnalysisRequestMinAggregateInputType;
    _max?: AnalysisRequestMaxAggregateInputType;
};
export type AnalysisRequestGroupByOutputType = {
    id: string;
    queryText: string;
    status: $Enums.AnalysisRequestStatus;
    documentId: string | null;
    userId: string | null;
    guestId: string | null;
    attemptCount: number;
    errorMessage: string | null;
    processingStartedAt: Date | null;
    processingFinishedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AnalysisRequestCountAggregateOutputType | null;
    _avg: AnalysisRequestAvgAggregateOutputType | null;
    _sum: AnalysisRequestSumAggregateOutputType | null;
    _min: AnalysisRequestMinAggregateOutputType | null;
    _max: AnalysisRequestMaxAggregateOutputType | null;
};
export type GetAnalysisRequestGroupByPayload<T extends AnalysisRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnalysisRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnalysisRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnalysisRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnalysisRequestGroupByOutputType[P]>;
}>>;
export type AnalysisRequestWhereInput = {
    AND?: Prisma.AnalysisRequestWhereInput | Prisma.AnalysisRequestWhereInput[];
    OR?: Prisma.AnalysisRequestWhereInput[];
    NOT?: Prisma.AnalysisRequestWhereInput | Prisma.AnalysisRequestWhereInput[];
    id?: Prisma.UuidFilter<"AnalysisRequest"> | string;
    queryText?: Prisma.StringFilter<"AnalysisRequest"> | string;
    status?: Prisma.EnumAnalysisRequestStatusFilter<"AnalysisRequest"> | $Enums.AnalysisRequestStatus;
    documentId?: Prisma.UuidNullableFilter<"AnalysisRequest"> | string | null;
    userId?: Prisma.UuidNullableFilter<"AnalysisRequest"> | string | null;
    guestId?: Prisma.StringNullableFilter<"AnalysisRequest"> | string | null;
    attemptCount?: Prisma.IntFilter<"AnalysisRequest"> | number;
    errorMessage?: Prisma.StringNullableFilter<"AnalysisRequest"> | string | null;
    processingStartedAt?: Prisma.DateTimeNullableFilter<"AnalysisRequest"> | Date | string | null;
    processingFinishedAt?: Prisma.DateTimeNullableFilter<"AnalysisRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AnalysisRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AnalysisRequest"> | Date | string;
    document?: Prisma.XOR<Prisma.DocumentNullableScalarRelationFilter, Prisma.DocumentWhereInput> | null;
    user?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    response?: Prisma.XOR<Prisma.AIResponseNullableScalarRelationFilter, Prisma.AIResponseWhereInput> | null;
};
export type AnalysisRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    queryText?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    guestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    processingStartedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    processingFinishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    document?: Prisma.DocumentOrderByWithRelationInput;
    user?: Prisma.ProfileOrderByWithRelationInput;
    response?: Prisma.AIResponseOrderByWithRelationInput;
};
export type AnalysisRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AnalysisRequestWhereInput | Prisma.AnalysisRequestWhereInput[];
    OR?: Prisma.AnalysisRequestWhereInput[];
    NOT?: Prisma.AnalysisRequestWhereInput | Prisma.AnalysisRequestWhereInput[];
    queryText?: Prisma.StringFilter<"AnalysisRequest"> | string;
    status?: Prisma.EnumAnalysisRequestStatusFilter<"AnalysisRequest"> | $Enums.AnalysisRequestStatus;
    documentId?: Prisma.UuidNullableFilter<"AnalysisRequest"> | string | null;
    userId?: Prisma.UuidNullableFilter<"AnalysisRequest"> | string | null;
    guestId?: Prisma.StringNullableFilter<"AnalysisRequest"> | string | null;
    attemptCount?: Prisma.IntFilter<"AnalysisRequest"> | number;
    errorMessage?: Prisma.StringNullableFilter<"AnalysisRequest"> | string | null;
    processingStartedAt?: Prisma.DateTimeNullableFilter<"AnalysisRequest"> | Date | string | null;
    processingFinishedAt?: Prisma.DateTimeNullableFilter<"AnalysisRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AnalysisRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AnalysisRequest"> | Date | string;
    document?: Prisma.XOR<Prisma.DocumentNullableScalarRelationFilter, Prisma.DocumentWhereInput> | null;
    user?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    response?: Prisma.XOR<Prisma.AIResponseNullableScalarRelationFilter, Prisma.AIResponseWhereInput> | null;
}, "id">;
export type AnalysisRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    queryText?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    guestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    processingStartedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    processingFinishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AnalysisRequestCountOrderByAggregateInput;
    _avg?: Prisma.AnalysisRequestAvgOrderByAggregateInput;
    _max?: Prisma.AnalysisRequestMaxOrderByAggregateInput;
    _min?: Prisma.AnalysisRequestMinOrderByAggregateInput;
    _sum?: Prisma.AnalysisRequestSumOrderByAggregateInput;
};
export type AnalysisRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnalysisRequestScalarWhereWithAggregatesInput | Prisma.AnalysisRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnalysisRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnalysisRequestScalarWhereWithAggregatesInput | Prisma.AnalysisRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AnalysisRequest"> | string;
    queryText?: Prisma.StringWithAggregatesFilter<"AnalysisRequest"> | string;
    status?: Prisma.EnumAnalysisRequestStatusWithAggregatesFilter<"AnalysisRequest"> | $Enums.AnalysisRequestStatus;
    documentId?: Prisma.UuidNullableWithAggregatesFilter<"AnalysisRequest"> | string | null;
    userId?: Prisma.UuidNullableWithAggregatesFilter<"AnalysisRequest"> | string | null;
    guestId?: Prisma.StringNullableWithAggregatesFilter<"AnalysisRequest"> | string | null;
    attemptCount?: Prisma.IntWithAggregatesFilter<"AnalysisRequest"> | number;
    errorMessage?: Prisma.StringNullableWithAggregatesFilter<"AnalysisRequest"> | string | null;
    processingStartedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AnalysisRequest"> | Date | string | null;
    processingFinishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AnalysisRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AnalysisRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AnalysisRequest"> | Date | string;
};
export type AnalysisRequestCreateInput = {
    id?: string;
    queryText: string;
    status?: $Enums.AnalysisRequestStatus;
    guestId?: string | null;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    document?: Prisma.DocumentCreateNestedOneWithoutAnalysisRequestsInput;
    user?: Prisma.ProfileCreateNestedOneWithoutAnalysisRequestsInput;
    response?: Prisma.AIResponseCreateNestedOneWithoutAnalysisRequestInput;
};
export type AnalysisRequestUncheckedCreateInput = {
    id?: string;
    queryText: string;
    status?: $Enums.AnalysisRequestStatus;
    documentId?: string | null;
    userId?: string | null;
    guestId?: string | null;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    response?: Prisma.AIResponseUncheckedCreateNestedOneWithoutAnalysisRequestInput;
};
export type AnalysisRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisRequestStatusFieldUpdateOperationsInput | $Enums.AnalysisRequestStatus;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.DocumentUpdateOneWithoutAnalysisRequestsNestedInput;
    user?: Prisma.ProfileUpdateOneWithoutAnalysisRequestsNestedInput;
    response?: Prisma.AIResponseUpdateOneWithoutAnalysisRequestNestedInput;
};
export type AnalysisRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisRequestStatusFieldUpdateOperationsInput | $Enums.AnalysisRequestStatus;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    response?: Prisma.AIResponseUncheckedUpdateOneWithoutAnalysisRequestNestedInput;
};
export type AnalysisRequestCreateManyInput = {
    id?: string;
    queryText: string;
    status?: $Enums.AnalysisRequestStatus;
    documentId?: string | null;
    userId?: string | null;
    guestId?: string | null;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AnalysisRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisRequestStatusFieldUpdateOperationsInput | $Enums.AnalysisRequestStatus;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalysisRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisRequestStatusFieldUpdateOperationsInput | $Enums.AnalysisRequestStatus;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalysisRequestListRelationFilter = {
    every?: Prisma.AnalysisRequestWhereInput;
    some?: Prisma.AnalysisRequestWhereInput;
    none?: Prisma.AnalysisRequestWhereInput;
};
export type AnalysisRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AnalysisRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    queryText?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    processingStartedAt?: Prisma.SortOrder;
    processingFinishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AnalysisRequestAvgOrderByAggregateInput = {
    attemptCount?: Prisma.SortOrder;
};
export type AnalysisRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    queryText?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    processingStartedAt?: Prisma.SortOrder;
    processingFinishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AnalysisRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    queryText?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    processingStartedAt?: Prisma.SortOrder;
    processingFinishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AnalysisRequestSumOrderByAggregateInput = {
    attemptCount?: Prisma.SortOrder;
};
export type AnalysisRequestScalarRelationFilter = {
    is?: Prisma.AnalysisRequestWhereInput;
    isNot?: Prisma.AnalysisRequestWhereInput;
};
export type AnalysisRequestCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutUserInput, Prisma.AnalysisRequestUncheckedCreateWithoutUserInput> | Prisma.AnalysisRequestCreateWithoutUserInput[] | Prisma.AnalysisRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AnalysisRequestCreateOrConnectWithoutUserInput | Prisma.AnalysisRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AnalysisRequestCreateManyUserInputEnvelope;
    connect?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
};
export type AnalysisRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutUserInput, Prisma.AnalysisRequestUncheckedCreateWithoutUserInput> | Prisma.AnalysisRequestCreateWithoutUserInput[] | Prisma.AnalysisRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AnalysisRequestCreateOrConnectWithoutUserInput | Prisma.AnalysisRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AnalysisRequestCreateManyUserInputEnvelope;
    connect?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
};
export type AnalysisRequestUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutUserInput, Prisma.AnalysisRequestUncheckedCreateWithoutUserInput> | Prisma.AnalysisRequestCreateWithoutUserInput[] | Prisma.AnalysisRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AnalysisRequestCreateOrConnectWithoutUserInput | Prisma.AnalysisRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AnalysisRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.AnalysisRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AnalysisRequestCreateManyUserInputEnvelope;
    set?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    disconnect?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    delete?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    connect?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    update?: Prisma.AnalysisRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.AnalysisRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AnalysisRequestUpdateManyWithWhereWithoutUserInput | Prisma.AnalysisRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AnalysisRequestScalarWhereInput | Prisma.AnalysisRequestScalarWhereInput[];
};
export type AnalysisRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutUserInput, Prisma.AnalysisRequestUncheckedCreateWithoutUserInput> | Prisma.AnalysisRequestCreateWithoutUserInput[] | Prisma.AnalysisRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AnalysisRequestCreateOrConnectWithoutUserInput | Prisma.AnalysisRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AnalysisRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.AnalysisRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AnalysisRequestCreateManyUserInputEnvelope;
    set?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    disconnect?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    delete?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    connect?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    update?: Prisma.AnalysisRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.AnalysisRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AnalysisRequestUpdateManyWithWhereWithoutUserInput | Prisma.AnalysisRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AnalysisRequestScalarWhereInput | Prisma.AnalysisRequestScalarWhereInput[];
};
export type AnalysisRequestCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutDocumentInput, Prisma.AnalysisRequestUncheckedCreateWithoutDocumentInput> | Prisma.AnalysisRequestCreateWithoutDocumentInput[] | Prisma.AnalysisRequestUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.AnalysisRequestCreateOrConnectWithoutDocumentInput | Prisma.AnalysisRequestCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.AnalysisRequestCreateManyDocumentInputEnvelope;
    connect?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
};
export type AnalysisRequestUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutDocumentInput, Prisma.AnalysisRequestUncheckedCreateWithoutDocumentInput> | Prisma.AnalysisRequestCreateWithoutDocumentInput[] | Prisma.AnalysisRequestUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.AnalysisRequestCreateOrConnectWithoutDocumentInput | Prisma.AnalysisRequestCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.AnalysisRequestCreateManyDocumentInputEnvelope;
    connect?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
};
export type AnalysisRequestUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutDocumentInput, Prisma.AnalysisRequestUncheckedCreateWithoutDocumentInput> | Prisma.AnalysisRequestCreateWithoutDocumentInput[] | Prisma.AnalysisRequestUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.AnalysisRequestCreateOrConnectWithoutDocumentInput | Prisma.AnalysisRequestCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.AnalysisRequestUpsertWithWhereUniqueWithoutDocumentInput | Prisma.AnalysisRequestUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.AnalysisRequestCreateManyDocumentInputEnvelope;
    set?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    disconnect?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    delete?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    connect?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    update?: Prisma.AnalysisRequestUpdateWithWhereUniqueWithoutDocumentInput | Prisma.AnalysisRequestUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.AnalysisRequestUpdateManyWithWhereWithoutDocumentInput | Prisma.AnalysisRequestUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.AnalysisRequestScalarWhereInput | Prisma.AnalysisRequestScalarWhereInput[];
};
export type AnalysisRequestUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutDocumentInput, Prisma.AnalysisRequestUncheckedCreateWithoutDocumentInput> | Prisma.AnalysisRequestCreateWithoutDocumentInput[] | Prisma.AnalysisRequestUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.AnalysisRequestCreateOrConnectWithoutDocumentInput | Prisma.AnalysisRequestCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.AnalysisRequestUpsertWithWhereUniqueWithoutDocumentInput | Prisma.AnalysisRequestUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.AnalysisRequestCreateManyDocumentInputEnvelope;
    set?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    disconnect?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    delete?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    connect?: Prisma.AnalysisRequestWhereUniqueInput | Prisma.AnalysisRequestWhereUniqueInput[];
    update?: Prisma.AnalysisRequestUpdateWithWhereUniqueWithoutDocumentInput | Prisma.AnalysisRequestUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.AnalysisRequestUpdateManyWithWhereWithoutDocumentInput | Prisma.AnalysisRequestUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.AnalysisRequestScalarWhereInput | Prisma.AnalysisRequestScalarWhereInput[];
};
export type EnumAnalysisRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnalysisRequestStatus;
};
export type AnalysisRequestCreateNestedOneWithoutResponseInput = {
    create?: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutResponseInput, Prisma.AnalysisRequestUncheckedCreateWithoutResponseInput>;
    connectOrCreate?: Prisma.AnalysisRequestCreateOrConnectWithoutResponseInput;
    connect?: Prisma.AnalysisRequestWhereUniqueInput;
};
export type AnalysisRequestUpdateOneRequiredWithoutResponseNestedInput = {
    create?: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutResponseInput, Prisma.AnalysisRequestUncheckedCreateWithoutResponseInput>;
    connectOrCreate?: Prisma.AnalysisRequestCreateOrConnectWithoutResponseInput;
    upsert?: Prisma.AnalysisRequestUpsertWithoutResponseInput;
    connect?: Prisma.AnalysisRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnalysisRequestUpdateToOneWithWhereWithoutResponseInput, Prisma.AnalysisRequestUpdateWithoutResponseInput>, Prisma.AnalysisRequestUncheckedUpdateWithoutResponseInput>;
};
export type AnalysisRequestCreateWithoutUserInput = {
    id?: string;
    queryText: string;
    status?: $Enums.AnalysisRequestStatus;
    guestId?: string | null;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    document?: Prisma.DocumentCreateNestedOneWithoutAnalysisRequestsInput;
    response?: Prisma.AIResponseCreateNestedOneWithoutAnalysisRequestInput;
};
export type AnalysisRequestUncheckedCreateWithoutUserInput = {
    id?: string;
    queryText: string;
    status?: $Enums.AnalysisRequestStatus;
    documentId?: string | null;
    guestId?: string | null;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    response?: Prisma.AIResponseUncheckedCreateNestedOneWithoutAnalysisRequestInput;
};
export type AnalysisRequestCreateOrConnectWithoutUserInput = {
    where: Prisma.AnalysisRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutUserInput, Prisma.AnalysisRequestUncheckedCreateWithoutUserInput>;
};
export type AnalysisRequestCreateManyUserInputEnvelope = {
    data: Prisma.AnalysisRequestCreateManyUserInput | Prisma.AnalysisRequestCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type AnalysisRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.AnalysisRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnalysisRequestUpdateWithoutUserInput, Prisma.AnalysisRequestUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutUserInput, Prisma.AnalysisRequestUncheckedCreateWithoutUserInput>;
};
export type AnalysisRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.AnalysisRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnalysisRequestUpdateWithoutUserInput, Prisma.AnalysisRequestUncheckedUpdateWithoutUserInput>;
};
export type AnalysisRequestUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.AnalysisRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.AnalysisRequestUpdateManyMutationInput, Prisma.AnalysisRequestUncheckedUpdateManyWithoutUserInput>;
};
export type AnalysisRequestScalarWhereInput = {
    AND?: Prisma.AnalysisRequestScalarWhereInput | Prisma.AnalysisRequestScalarWhereInput[];
    OR?: Prisma.AnalysisRequestScalarWhereInput[];
    NOT?: Prisma.AnalysisRequestScalarWhereInput | Prisma.AnalysisRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"AnalysisRequest"> | string;
    queryText?: Prisma.StringFilter<"AnalysisRequest"> | string;
    status?: Prisma.EnumAnalysisRequestStatusFilter<"AnalysisRequest"> | $Enums.AnalysisRequestStatus;
    documentId?: Prisma.UuidNullableFilter<"AnalysisRequest"> | string | null;
    userId?: Prisma.UuidNullableFilter<"AnalysisRequest"> | string | null;
    guestId?: Prisma.StringNullableFilter<"AnalysisRequest"> | string | null;
    attemptCount?: Prisma.IntFilter<"AnalysisRequest"> | number;
    errorMessage?: Prisma.StringNullableFilter<"AnalysisRequest"> | string | null;
    processingStartedAt?: Prisma.DateTimeNullableFilter<"AnalysisRequest"> | Date | string | null;
    processingFinishedAt?: Prisma.DateTimeNullableFilter<"AnalysisRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AnalysisRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AnalysisRequest"> | Date | string;
};
export type AnalysisRequestCreateWithoutDocumentInput = {
    id?: string;
    queryText: string;
    status?: $Enums.AnalysisRequestStatus;
    guestId?: string | null;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: Prisma.ProfileCreateNestedOneWithoutAnalysisRequestsInput;
    response?: Prisma.AIResponseCreateNestedOneWithoutAnalysisRequestInput;
};
export type AnalysisRequestUncheckedCreateWithoutDocumentInput = {
    id?: string;
    queryText: string;
    status?: $Enums.AnalysisRequestStatus;
    userId?: string | null;
    guestId?: string | null;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    response?: Prisma.AIResponseUncheckedCreateNestedOneWithoutAnalysisRequestInput;
};
export type AnalysisRequestCreateOrConnectWithoutDocumentInput = {
    where: Prisma.AnalysisRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutDocumentInput, Prisma.AnalysisRequestUncheckedCreateWithoutDocumentInput>;
};
export type AnalysisRequestCreateManyDocumentInputEnvelope = {
    data: Prisma.AnalysisRequestCreateManyDocumentInput | Prisma.AnalysisRequestCreateManyDocumentInput[];
    skipDuplicates?: boolean;
};
export type AnalysisRequestUpsertWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.AnalysisRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnalysisRequestUpdateWithoutDocumentInput, Prisma.AnalysisRequestUncheckedUpdateWithoutDocumentInput>;
    create: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutDocumentInput, Prisma.AnalysisRequestUncheckedCreateWithoutDocumentInput>;
};
export type AnalysisRequestUpdateWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.AnalysisRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnalysisRequestUpdateWithoutDocumentInput, Prisma.AnalysisRequestUncheckedUpdateWithoutDocumentInput>;
};
export type AnalysisRequestUpdateManyWithWhereWithoutDocumentInput = {
    where: Prisma.AnalysisRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.AnalysisRequestUpdateManyMutationInput, Prisma.AnalysisRequestUncheckedUpdateManyWithoutDocumentInput>;
};
export type AnalysisRequestCreateWithoutResponseInput = {
    id?: string;
    queryText: string;
    status?: $Enums.AnalysisRequestStatus;
    guestId?: string | null;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    document?: Prisma.DocumentCreateNestedOneWithoutAnalysisRequestsInput;
    user?: Prisma.ProfileCreateNestedOneWithoutAnalysisRequestsInput;
};
export type AnalysisRequestUncheckedCreateWithoutResponseInput = {
    id?: string;
    queryText: string;
    status?: $Enums.AnalysisRequestStatus;
    documentId?: string | null;
    userId?: string | null;
    guestId?: string | null;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AnalysisRequestCreateOrConnectWithoutResponseInput = {
    where: Prisma.AnalysisRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutResponseInput, Prisma.AnalysisRequestUncheckedCreateWithoutResponseInput>;
};
export type AnalysisRequestUpsertWithoutResponseInput = {
    update: Prisma.XOR<Prisma.AnalysisRequestUpdateWithoutResponseInput, Prisma.AnalysisRequestUncheckedUpdateWithoutResponseInput>;
    create: Prisma.XOR<Prisma.AnalysisRequestCreateWithoutResponseInput, Prisma.AnalysisRequestUncheckedCreateWithoutResponseInput>;
    where?: Prisma.AnalysisRequestWhereInput;
};
export type AnalysisRequestUpdateToOneWithWhereWithoutResponseInput = {
    where?: Prisma.AnalysisRequestWhereInput;
    data: Prisma.XOR<Prisma.AnalysisRequestUpdateWithoutResponseInput, Prisma.AnalysisRequestUncheckedUpdateWithoutResponseInput>;
};
export type AnalysisRequestUpdateWithoutResponseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisRequestStatusFieldUpdateOperationsInput | $Enums.AnalysisRequestStatus;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.DocumentUpdateOneWithoutAnalysisRequestsNestedInput;
    user?: Prisma.ProfileUpdateOneWithoutAnalysisRequestsNestedInput;
};
export type AnalysisRequestUncheckedUpdateWithoutResponseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisRequestStatusFieldUpdateOperationsInput | $Enums.AnalysisRequestStatus;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalysisRequestCreateManyUserInput = {
    id?: string;
    queryText: string;
    status?: $Enums.AnalysisRequestStatus;
    documentId?: string | null;
    guestId?: string | null;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AnalysisRequestUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisRequestStatusFieldUpdateOperationsInput | $Enums.AnalysisRequestStatus;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.DocumentUpdateOneWithoutAnalysisRequestsNestedInput;
    response?: Prisma.AIResponseUpdateOneWithoutAnalysisRequestNestedInput;
};
export type AnalysisRequestUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisRequestStatusFieldUpdateOperationsInput | $Enums.AnalysisRequestStatus;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    response?: Prisma.AIResponseUncheckedUpdateOneWithoutAnalysisRequestNestedInput;
};
export type AnalysisRequestUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisRequestStatusFieldUpdateOperationsInput | $Enums.AnalysisRequestStatus;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalysisRequestCreateManyDocumentInput = {
    id?: string;
    queryText: string;
    status?: $Enums.AnalysisRequestStatus;
    userId?: string | null;
    guestId?: string | null;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AnalysisRequestUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisRequestStatusFieldUpdateOperationsInput | $Enums.AnalysisRequestStatus;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.ProfileUpdateOneWithoutAnalysisRequestsNestedInput;
    response?: Prisma.AIResponseUpdateOneWithoutAnalysisRequestNestedInput;
};
export type AnalysisRequestUncheckedUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisRequestStatusFieldUpdateOperationsInput | $Enums.AnalysisRequestStatus;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    response?: Prisma.AIResponseUncheckedUpdateOneWithoutAnalysisRequestNestedInput;
};
export type AnalysisRequestUncheckedUpdateManyWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnalysisRequestStatusFieldUpdateOperationsInput | $Enums.AnalysisRequestStatus;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalysisRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    queryText?: boolean;
    status?: boolean;
    documentId?: boolean;
    userId?: boolean;
    guestId?: boolean;
    attemptCount?: boolean;
    errorMessage?: boolean;
    processingStartedAt?: boolean;
    processingFinishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    document?: boolean | Prisma.AnalysisRequest$documentArgs<ExtArgs>;
    user?: boolean | Prisma.AnalysisRequest$userArgs<ExtArgs>;
    response?: boolean | Prisma.AnalysisRequest$responseArgs<ExtArgs>;
}, ExtArgs["result"]["analysisRequest"]>;
export type AnalysisRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    queryText?: boolean;
    status?: boolean;
    documentId?: boolean;
    userId?: boolean;
    guestId?: boolean;
    attemptCount?: boolean;
    errorMessage?: boolean;
    processingStartedAt?: boolean;
    processingFinishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    document?: boolean | Prisma.AnalysisRequest$documentArgs<ExtArgs>;
    user?: boolean | Prisma.AnalysisRequest$userArgs<ExtArgs>;
}, ExtArgs["result"]["analysisRequest"]>;
export type AnalysisRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    queryText?: boolean;
    status?: boolean;
    documentId?: boolean;
    userId?: boolean;
    guestId?: boolean;
    attemptCount?: boolean;
    errorMessage?: boolean;
    processingStartedAt?: boolean;
    processingFinishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    document?: boolean | Prisma.AnalysisRequest$documentArgs<ExtArgs>;
    user?: boolean | Prisma.AnalysisRequest$userArgs<ExtArgs>;
}, ExtArgs["result"]["analysisRequest"]>;
export type AnalysisRequestSelectScalar = {
    id?: boolean;
    queryText?: boolean;
    status?: boolean;
    documentId?: boolean;
    userId?: boolean;
    guestId?: boolean;
    attemptCount?: boolean;
    errorMessage?: boolean;
    processingStartedAt?: boolean;
    processingFinishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AnalysisRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "queryText" | "status" | "documentId" | "userId" | "guestId" | "attemptCount" | "errorMessage" | "processingStartedAt" | "processingFinishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["analysisRequest"]>;
export type AnalysisRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.AnalysisRequest$documentArgs<ExtArgs>;
    user?: boolean | Prisma.AnalysisRequest$userArgs<ExtArgs>;
    response?: boolean | Prisma.AnalysisRequest$responseArgs<ExtArgs>;
};
export type AnalysisRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.AnalysisRequest$documentArgs<ExtArgs>;
    user?: boolean | Prisma.AnalysisRequest$userArgs<ExtArgs>;
};
export type AnalysisRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.AnalysisRequest$documentArgs<ExtArgs>;
    user?: boolean | Prisma.AnalysisRequest$userArgs<ExtArgs>;
};
export type $AnalysisRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AnalysisRequest";
    objects: {
        document: Prisma.$DocumentPayload<ExtArgs> | null;
        user: Prisma.$ProfilePayload<ExtArgs> | null;
        response: Prisma.$AIResponsePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        queryText: string;
        status: $Enums.AnalysisRequestStatus;
        documentId: string | null;
        userId: string | null;
        guestId: string | null;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["analysisRequest"]>;
    composites: {};
};
export type AnalysisRequestGetPayload<S extends boolean | null | undefined | AnalysisRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnalysisRequestPayload, S>;
export type AnalysisRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnalysisRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnalysisRequestCountAggregateInputType | true;
};
export interface AnalysisRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AnalysisRequest'];
        meta: {
            name: 'AnalysisRequest';
        };
    };
    findUnique<T extends AnalysisRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, AnalysisRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnalysisRequestClient<runtime.Types.Result.GetResult<Prisma.$AnalysisRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnalysisRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnalysisRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnalysisRequestClient<runtime.Types.Result.GetResult<Prisma.$AnalysisRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnalysisRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, AnalysisRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnalysisRequestClient<runtime.Types.Result.GetResult<Prisma.$AnalysisRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnalysisRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnalysisRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnalysisRequestClient<runtime.Types.Result.GetResult<Prisma.$AnalysisRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnalysisRequestFindManyArgs>(args?: Prisma.SelectSubset<T, AnalysisRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalysisRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnalysisRequestCreateArgs>(args: Prisma.SelectSubset<T, AnalysisRequestCreateArgs<ExtArgs>>): Prisma.Prisma__AnalysisRequestClient<runtime.Types.Result.GetResult<Prisma.$AnalysisRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnalysisRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, AnalysisRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnalysisRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnalysisRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalysisRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnalysisRequestDeleteArgs>(args: Prisma.SelectSubset<T, AnalysisRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__AnalysisRequestClient<runtime.Types.Result.GetResult<Prisma.$AnalysisRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnalysisRequestUpdateArgs>(args: Prisma.SelectSubset<T, AnalysisRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__AnalysisRequestClient<runtime.Types.Result.GetResult<Prisma.$AnalysisRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnalysisRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnalysisRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnalysisRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, AnalysisRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnalysisRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnalysisRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalysisRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnalysisRequestUpsertArgs>(args: Prisma.SelectSubset<T, AnalysisRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__AnalysisRequestClient<runtime.Types.Result.GetResult<Prisma.$AnalysisRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnalysisRequestCountArgs>(args?: Prisma.Subset<T, AnalysisRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnalysisRequestCountAggregateOutputType> : number>;
    aggregate<T extends AnalysisRequestAggregateArgs>(args: Prisma.Subset<T, AnalysisRequestAggregateArgs>): Prisma.PrismaPromise<GetAnalysisRequestAggregateType<T>>;
    groupBy<T extends AnalysisRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnalysisRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: AnalysisRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnalysisRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnalysisRequestFieldRefs;
}
export interface Prisma__AnalysisRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    document<T extends Prisma.AnalysisRequest$documentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnalysisRequest$documentArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.AnalysisRequest$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnalysisRequest$userArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    response<T extends Prisma.AnalysisRequest$responseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnalysisRequest$responseArgs<ExtArgs>>): Prisma.Prisma__AIResponseClient<runtime.Types.Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnalysisRequestFieldRefs {
    readonly id: Prisma.FieldRef<"AnalysisRequest", 'String'>;
    readonly queryText: Prisma.FieldRef<"AnalysisRequest", 'String'>;
    readonly status: Prisma.FieldRef<"AnalysisRequest", 'AnalysisRequestStatus'>;
    readonly documentId: Prisma.FieldRef<"AnalysisRequest", 'String'>;
    readonly userId: Prisma.FieldRef<"AnalysisRequest", 'String'>;
    readonly guestId: Prisma.FieldRef<"AnalysisRequest", 'String'>;
    readonly attemptCount: Prisma.FieldRef<"AnalysisRequest", 'Int'>;
    readonly errorMessage: Prisma.FieldRef<"AnalysisRequest", 'String'>;
    readonly processingStartedAt: Prisma.FieldRef<"AnalysisRequest", 'DateTime'>;
    readonly processingFinishedAt: Prisma.FieldRef<"AnalysisRequest", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"AnalysisRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AnalysisRequest", 'DateTime'>;
}
export type AnalysisRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisRequestSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisRequestOmit<ExtArgs> | null;
    include?: Prisma.AnalysisRequestInclude<ExtArgs> | null;
    where: Prisma.AnalysisRequestWhereUniqueInput;
};
export type AnalysisRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisRequestSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisRequestOmit<ExtArgs> | null;
    include?: Prisma.AnalysisRequestInclude<ExtArgs> | null;
    where: Prisma.AnalysisRequestWhereUniqueInput;
};
export type AnalysisRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisRequestSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisRequestOmit<ExtArgs> | null;
    include?: Prisma.AnalysisRequestInclude<ExtArgs> | null;
    where?: Prisma.AnalysisRequestWhereInput;
    orderBy?: Prisma.AnalysisRequestOrderByWithRelationInput | Prisma.AnalysisRequestOrderByWithRelationInput[];
    cursor?: Prisma.AnalysisRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalysisRequestScalarFieldEnum | Prisma.AnalysisRequestScalarFieldEnum[];
};
export type AnalysisRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisRequestSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisRequestOmit<ExtArgs> | null;
    include?: Prisma.AnalysisRequestInclude<ExtArgs> | null;
    where?: Prisma.AnalysisRequestWhereInput;
    orderBy?: Prisma.AnalysisRequestOrderByWithRelationInput | Prisma.AnalysisRequestOrderByWithRelationInput[];
    cursor?: Prisma.AnalysisRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalysisRequestScalarFieldEnum | Prisma.AnalysisRequestScalarFieldEnum[];
};
export type AnalysisRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisRequestSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisRequestOmit<ExtArgs> | null;
    include?: Prisma.AnalysisRequestInclude<ExtArgs> | null;
    where?: Prisma.AnalysisRequestWhereInput;
    orderBy?: Prisma.AnalysisRequestOrderByWithRelationInput | Prisma.AnalysisRequestOrderByWithRelationInput[];
    cursor?: Prisma.AnalysisRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalysisRequestScalarFieldEnum | Prisma.AnalysisRequestScalarFieldEnum[];
};
export type AnalysisRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisRequestSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisRequestOmit<ExtArgs> | null;
    include?: Prisma.AnalysisRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalysisRequestCreateInput, Prisma.AnalysisRequestUncheckedCreateInput>;
};
export type AnalysisRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnalysisRequestCreateManyInput | Prisma.AnalysisRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnalysisRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnalysisRequestOmit<ExtArgs> | null;
    data: Prisma.AnalysisRequestCreateManyInput | Prisma.AnalysisRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnalysisRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnalysisRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisRequestSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisRequestOmit<ExtArgs> | null;
    include?: Prisma.AnalysisRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalysisRequestUpdateInput, Prisma.AnalysisRequestUncheckedUpdateInput>;
    where: Prisma.AnalysisRequestWhereUniqueInput;
};
export type AnalysisRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnalysisRequestUpdateManyMutationInput, Prisma.AnalysisRequestUncheckedUpdateManyInput>;
    where?: Prisma.AnalysisRequestWhereInput;
    limit?: number;
};
export type AnalysisRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnalysisRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalysisRequestUpdateManyMutationInput, Prisma.AnalysisRequestUncheckedUpdateManyInput>;
    where?: Prisma.AnalysisRequestWhereInput;
    limit?: number;
    include?: Prisma.AnalysisRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnalysisRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisRequestSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisRequestOmit<ExtArgs> | null;
    include?: Prisma.AnalysisRequestInclude<ExtArgs> | null;
    where: Prisma.AnalysisRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalysisRequestCreateInput, Prisma.AnalysisRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnalysisRequestUpdateInput, Prisma.AnalysisRequestUncheckedUpdateInput>;
};
export type AnalysisRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisRequestSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisRequestOmit<ExtArgs> | null;
    include?: Prisma.AnalysisRequestInclude<ExtArgs> | null;
    where: Prisma.AnalysisRequestWhereUniqueInput;
};
export type AnalysisRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalysisRequestWhereInput;
    limit?: number;
};
export type AnalysisRequest$documentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
};
export type AnalysisRequest$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
};
export type AnalysisRequest$responseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIResponseSelect<ExtArgs> | null;
    omit?: Prisma.AIResponseOmit<ExtArgs> | null;
    include?: Prisma.AIResponseInclude<ExtArgs> | null;
    where?: Prisma.AIResponseWhereInput;
};
export type AnalysisRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisRequestSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisRequestOmit<ExtArgs> | null;
    include?: Prisma.AnalysisRequestInclude<ExtArgs> | null;
};
