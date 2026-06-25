import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ComplianceQueryModel = runtime.Types.Result.DefaultSelection<Prisma.$ComplianceQueryPayload>;
export type AggregateComplianceQuery = {
    _count: ComplianceQueryCountAggregateOutputType | null;
    _avg: ComplianceQueryAvgAggregateOutputType | null;
    _sum: ComplianceQuerySumAggregateOutputType | null;
    _min: ComplianceQueryMinAggregateOutputType | null;
    _max: ComplianceQueryMaxAggregateOutputType | null;
};
export type ComplianceQueryAvgAggregateOutputType = {
    attemptCount: number | null;
};
export type ComplianceQuerySumAggregateOutputType = {
    attemptCount: number | null;
};
export type ComplianceQueryMinAggregateOutputType = {
    id: string | null;
    queryText: string | null;
    status: $Enums.ComplianceQueryStatus | null;
    documentId: string | null;
    userId: string | null;
    attemptCount: number | null;
    errorMessage: string | null;
    processingStartedAt: Date | null;
    processingFinishedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ComplianceQueryMaxAggregateOutputType = {
    id: string | null;
    queryText: string | null;
    status: $Enums.ComplianceQueryStatus | null;
    documentId: string | null;
    userId: string | null;
    attemptCount: number | null;
    errorMessage: string | null;
    processingStartedAt: Date | null;
    processingFinishedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ComplianceQueryCountAggregateOutputType = {
    id: number;
    queryText: number;
    status: number;
    documentId: number;
    userId: number;
    attemptCount: number;
    errorMessage: number;
    processingStartedAt: number;
    processingFinishedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ComplianceQueryAvgAggregateInputType = {
    attemptCount?: true;
};
export type ComplianceQuerySumAggregateInputType = {
    attemptCount?: true;
};
export type ComplianceQueryMinAggregateInputType = {
    id?: true;
    queryText?: true;
    status?: true;
    documentId?: true;
    userId?: true;
    attemptCount?: true;
    errorMessage?: true;
    processingStartedAt?: true;
    processingFinishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ComplianceQueryMaxAggregateInputType = {
    id?: true;
    queryText?: true;
    status?: true;
    documentId?: true;
    userId?: true;
    attemptCount?: true;
    errorMessage?: true;
    processingStartedAt?: true;
    processingFinishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ComplianceQueryCountAggregateInputType = {
    id?: true;
    queryText?: true;
    status?: true;
    documentId?: true;
    userId?: true;
    attemptCount?: true;
    errorMessage?: true;
    processingStartedAt?: true;
    processingFinishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ComplianceQueryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceQueryWhereInput;
    orderBy?: Prisma.ComplianceQueryOrderByWithRelationInput | Prisma.ComplianceQueryOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceQueryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ComplianceQueryCountAggregateInputType;
    _avg?: ComplianceQueryAvgAggregateInputType;
    _sum?: ComplianceQuerySumAggregateInputType;
    _min?: ComplianceQueryMinAggregateInputType;
    _max?: ComplianceQueryMaxAggregateInputType;
};
export type GetComplianceQueryAggregateType<T extends ComplianceQueryAggregateArgs> = {
    [P in keyof T & keyof AggregateComplianceQuery]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateComplianceQuery[P]> : Prisma.GetScalarType<T[P], AggregateComplianceQuery[P]>;
};
export type ComplianceQueryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceQueryWhereInput;
    orderBy?: Prisma.ComplianceQueryOrderByWithAggregationInput | Prisma.ComplianceQueryOrderByWithAggregationInput[];
    by: Prisma.ComplianceQueryScalarFieldEnum[] | Prisma.ComplianceQueryScalarFieldEnum;
    having?: Prisma.ComplianceQueryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ComplianceQueryCountAggregateInputType | true;
    _avg?: ComplianceQueryAvgAggregateInputType;
    _sum?: ComplianceQuerySumAggregateInputType;
    _min?: ComplianceQueryMinAggregateInputType;
    _max?: ComplianceQueryMaxAggregateInputType;
};
export type ComplianceQueryGroupByOutputType = {
    id: string;
    queryText: string;
    status: $Enums.ComplianceQueryStatus;
    documentId: string | null;
    userId: string;
    attemptCount: number;
    errorMessage: string | null;
    processingStartedAt: Date | null;
    processingFinishedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ComplianceQueryCountAggregateOutputType | null;
    _avg: ComplianceQueryAvgAggregateOutputType | null;
    _sum: ComplianceQuerySumAggregateOutputType | null;
    _min: ComplianceQueryMinAggregateOutputType | null;
    _max: ComplianceQueryMaxAggregateOutputType | null;
};
export type GetComplianceQueryGroupByPayload<T extends ComplianceQueryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ComplianceQueryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ComplianceQueryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ComplianceQueryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ComplianceQueryGroupByOutputType[P]>;
}>>;
export type ComplianceQueryWhereInput = {
    AND?: Prisma.ComplianceQueryWhereInput | Prisma.ComplianceQueryWhereInput[];
    OR?: Prisma.ComplianceQueryWhereInput[];
    NOT?: Prisma.ComplianceQueryWhereInput | Prisma.ComplianceQueryWhereInput[];
    id?: Prisma.UuidFilter<"ComplianceQuery"> | string;
    queryText?: Prisma.StringFilter<"ComplianceQuery"> | string;
    status?: Prisma.EnumComplianceQueryStatusFilter<"ComplianceQuery"> | $Enums.ComplianceQueryStatus;
    documentId?: Prisma.UuidNullableFilter<"ComplianceQuery"> | string | null;
    userId?: Prisma.UuidFilter<"ComplianceQuery"> | string;
    attemptCount?: Prisma.IntFilter<"ComplianceQuery"> | number;
    errorMessage?: Prisma.StringNullableFilter<"ComplianceQuery"> | string | null;
    processingStartedAt?: Prisma.DateTimeNullableFilter<"ComplianceQuery"> | Date | string | null;
    processingFinishedAt?: Prisma.DateTimeNullableFilter<"ComplianceQuery"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ComplianceQuery"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ComplianceQuery"> | Date | string;
    document?: Prisma.XOR<Prisma.DocumentNullableScalarRelationFilter, Prisma.DocumentWhereInput> | null;
    user?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    responses?: Prisma.AIResponseListRelationFilter;
};
export type ComplianceQueryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    queryText?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    processingStartedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    processingFinishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    document?: Prisma.DocumentOrderByWithRelationInput;
    user?: Prisma.ProfileOrderByWithRelationInput;
    responses?: Prisma.AIResponseOrderByRelationAggregateInput;
};
export type ComplianceQueryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ComplianceQueryWhereInput | Prisma.ComplianceQueryWhereInput[];
    OR?: Prisma.ComplianceQueryWhereInput[];
    NOT?: Prisma.ComplianceQueryWhereInput | Prisma.ComplianceQueryWhereInput[];
    queryText?: Prisma.StringFilter<"ComplianceQuery"> | string;
    status?: Prisma.EnumComplianceQueryStatusFilter<"ComplianceQuery"> | $Enums.ComplianceQueryStatus;
    documentId?: Prisma.UuidNullableFilter<"ComplianceQuery"> | string | null;
    userId?: Prisma.UuidFilter<"ComplianceQuery"> | string;
    attemptCount?: Prisma.IntFilter<"ComplianceQuery"> | number;
    errorMessage?: Prisma.StringNullableFilter<"ComplianceQuery"> | string | null;
    processingStartedAt?: Prisma.DateTimeNullableFilter<"ComplianceQuery"> | Date | string | null;
    processingFinishedAt?: Prisma.DateTimeNullableFilter<"ComplianceQuery"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ComplianceQuery"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ComplianceQuery"> | Date | string;
    document?: Prisma.XOR<Prisma.DocumentNullableScalarRelationFilter, Prisma.DocumentWhereInput> | null;
    user?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    responses?: Prisma.AIResponseListRelationFilter;
}, "id">;
export type ComplianceQueryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    queryText?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    processingStartedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    processingFinishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ComplianceQueryCountOrderByAggregateInput;
    _avg?: Prisma.ComplianceQueryAvgOrderByAggregateInput;
    _max?: Prisma.ComplianceQueryMaxOrderByAggregateInput;
    _min?: Prisma.ComplianceQueryMinOrderByAggregateInput;
    _sum?: Prisma.ComplianceQuerySumOrderByAggregateInput;
};
export type ComplianceQueryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ComplianceQueryScalarWhereWithAggregatesInput | Prisma.ComplianceQueryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ComplianceQueryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ComplianceQueryScalarWhereWithAggregatesInput | Prisma.ComplianceQueryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ComplianceQuery"> | string;
    queryText?: Prisma.StringWithAggregatesFilter<"ComplianceQuery"> | string;
    status?: Prisma.EnumComplianceQueryStatusWithAggregatesFilter<"ComplianceQuery"> | $Enums.ComplianceQueryStatus;
    documentId?: Prisma.UuidNullableWithAggregatesFilter<"ComplianceQuery"> | string | null;
    userId?: Prisma.UuidWithAggregatesFilter<"ComplianceQuery"> | string;
    attemptCount?: Prisma.IntWithAggregatesFilter<"ComplianceQuery"> | number;
    errorMessage?: Prisma.StringNullableWithAggregatesFilter<"ComplianceQuery"> | string | null;
    processingStartedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ComplianceQuery"> | Date | string | null;
    processingFinishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ComplianceQuery"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ComplianceQuery"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ComplianceQuery"> | Date | string;
};
export type ComplianceQueryCreateInput = {
    id?: string;
    queryText: string;
    status?: $Enums.ComplianceQueryStatus;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    document?: Prisma.DocumentCreateNestedOneWithoutComplianceQueriesInput;
    user: Prisma.ProfileCreateNestedOneWithoutComplianceQueriesInput;
    responses?: Prisma.AIResponseCreateNestedManyWithoutComplianceQueryInput;
};
export type ComplianceQueryUncheckedCreateInput = {
    id?: string;
    queryText: string;
    status?: $Enums.ComplianceQueryStatus;
    documentId?: string | null;
    userId: string;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    responses?: Prisma.AIResponseUncheckedCreateNestedManyWithoutComplianceQueryInput;
};
export type ComplianceQueryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.DocumentUpdateOneWithoutComplianceQueriesNestedInput;
    user?: Prisma.ProfileUpdateOneRequiredWithoutComplianceQueriesNestedInput;
    responses?: Prisma.AIResponseUpdateManyWithoutComplianceQueryNestedInput;
};
export type ComplianceQueryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responses?: Prisma.AIResponseUncheckedUpdateManyWithoutComplianceQueryNestedInput;
};
export type ComplianceQueryCreateManyInput = {
    id?: string;
    queryText: string;
    status?: $Enums.ComplianceQueryStatus;
    documentId?: string | null;
    userId: string;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ComplianceQueryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceQueryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceQueryListRelationFilter = {
    every?: Prisma.ComplianceQueryWhereInput;
    some?: Prisma.ComplianceQueryWhereInput;
    none?: Prisma.ComplianceQueryWhereInput;
};
export type ComplianceQueryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ComplianceQueryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    queryText?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    processingStartedAt?: Prisma.SortOrder;
    processingFinishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ComplianceQueryAvgOrderByAggregateInput = {
    attemptCount?: Prisma.SortOrder;
};
export type ComplianceQueryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    queryText?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    processingStartedAt?: Prisma.SortOrder;
    processingFinishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ComplianceQueryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    queryText?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    processingStartedAt?: Prisma.SortOrder;
    processingFinishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ComplianceQuerySumOrderByAggregateInput = {
    attemptCount?: Prisma.SortOrder;
};
export type ComplianceQueryScalarRelationFilter = {
    is?: Prisma.ComplianceQueryWhereInput;
    isNot?: Prisma.ComplianceQueryWhereInput;
};
export type ComplianceQueryCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutUserInput, Prisma.ComplianceQueryUncheckedCreateWithoutUserInput> | Prisma.ComplianceQueryCreateWithoutUserInput[] | Prisma.ComplianceQueryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ComplianceQueryCreateOrConnectWithoutUserInput | Prisma.ComplianceQueryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ComplianceQueryCreateManyUserInputEnvelope;
    connect?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
};
export type ComplianceQueryUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutUserInput, Prisma.ComplianceQueryUncheckedCreateWithoutUserInput> | Prisma.ComplianceQueryCreateWithoutUserInput[] | Prisma.ComplianceQueryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ComplianceQueryCreateOrConnectWithoutUserInput | Prisma.ComplianceQueryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ComplianceQueryCreateManyUserInputEnvelope;
    connect?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
};
export type ComplianceQueryUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutUserInput, Prisma.ComplianceQueryUncheckedCreateWithoutUserInput> | Prisma.ComplianceQueryCreateWithoutUserInput[] | Prisma.ComplianceQueryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ComplianceQueryCreateOrConnectWithoutUserInput | Prisma.ComplianceQueryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ComplianceQueryUpsertWithWhereUniqueWithoutUserInput | Prisma.ComplianceQueryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ComplianceQueryCreateManyUserInputEnvelope;
    set?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    disconnect?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    delete?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    connect?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    update?: Prisma.ComplianceQueryUpdateWithWhereUniqueWithoutUserInput | Prisma.ComplianceQueryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ComplianceQueryUpdateManyWithWhereWithoutUserInput | Prisma.ComplianceQueryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ComplianceQueryScalarWhereInput | Prisma.ComplianceQueryScalarWhereInput[];
};
export type ComplianceQueryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutUserInput, Prisma.ComplianceQueryUncheckedCreateWithoutUserInput> | Prisma.ComplianceQueryCreateWithoutUserInput[] | Prisma.ComplianceQueryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ComplianceQueryCreateOrConnectWithoutUserInput | Prisma.ComplianceQueryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ComplianceQueryUpsertWithWhereUniqueWithoutUserInput | Prisma.ComplianceQueryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ComplianceQueryCreateManyUserInputEnvelope;
    set?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    disconnect?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    delete?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    connect?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    update?: Prisma.ComplianceQueryUpdateWithWhereUniqueWithoutUserInput | Prisma.ComplianceQueryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ComplianceQueryUpdateManyWithWhereWithoutUserInput | Prisma.ComplianceQueryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ComplianceQueryScalarWhereInput | Prisma.ComplianceQueryScalarWhereInput[];
};
export type ComplianceQueryCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutDocumentInput, Prisma.ComplianceQueryUncheckedCreateWithoutDocumentInput> | Prisma.ComplianceQueryCreateWithoutDocumentInput[] | Prisma.ComplianceQueryUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.ComplianceQueryCreateOrConnectWithoutDocumentInput | Prisma.ComplianceQueryCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.ComplianceQueryCreateManyDocumentInputEnvelope;
    connect?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
};
export type ComplianceQueryUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutDocumentInput, Prisma.ComplianceQueryUncheckedCreateWithoutDocumentInput> | Prisma.ComplianceQueryCreateWithoutDocumentInput[] | Prisma.ComplianceQueryUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.ComplianceQueryCreateOrConnectWithoutDocumentInput | Prisma.ComplianceQueryCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.ComplianceQueryCreateManyDocumentInputEnvelope;
    connect?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
};
export type ComplianceQueryUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutDocumentInput, Prisma.ComplianceQueryUncheckedCreateWithoutDocumentInput> | Prisma.ComplianceQueryCreateWithoutDocumentInput[] | Prisma.ComplianceQueryUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.ComplianceQueryCreateOrConnectWithoutDocumentInput | Prisma.ComplianceQueryCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.ComplianceQueryUpsertWithWhereUniqueWithoutDocumentInput | Prisma.ComplianceQueryUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.ComplianceQueryCreateManyDocumentInputEnvelope;
    set?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    disconnect?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    delete?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    connect?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    update?: Prisma.ComplianceQueryUpdateWithWhereUniqueWithoutDocumentInput | Prisma.ComplianceQueryUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.ComplianceQueryUpdateManyWithWhereWithoutDocumentInput | Prisma.ComplianceQueryUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.ComplianceQueryScalarWhereInput | Prisma.ComplianceQueryScalarWhereInput[];
};
export type ComplianceQueryUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutDocumentInput, Prisma.ComplianceQueryUncheckedCreateWithoutDocumentInput> | Prisma.ComplianceQueryCreateWithoutDocumentInput[] | Prisma.ComplianceQueryUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.ComplianceQueryCreateOrConnectWithoutDocumentInput | Prisma.ComplianceQueryCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.ComplianceQueryUpsertWithWhereUniqueWithoutDocumentInput | Prisma.ComplianceQueryUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.ComplianceQueryCreateManyDocumentInputEnvelope;
    set?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    disconnect?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    delete?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    connect?: Prisma.ComplianceQueryWhereUniqueInput | Prisma.ComplianceQueryWhereUniqueInput[];
    update?: Prisma.ComplianceQueryUpdateWithWhereUniqueWithoutDocumentInput | Prisma.ComplianceQueryUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.ComplianceQueryUpdateManyWithWhereWithoutDocumentInput | Prisma.ComplianceQueryUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.ComplianceQueryScalarWhereInput | Prisma.ComplianceQueryScalarWhereInput[];
};
export type EnumComplianceQueryStatusFieldUpdateOperationsInput = {
    set?: $Enums.ComplianceQueryStatus;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ComplianceQueryCreateNestedOneWithoutResponsesInput = {
    create?: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutResponsesInput, Prisma.ComplianceQueryUncheckedCreateWithoutResponsesInput>;
    connectOrCreate?: Prisma.ComplianceQueryCreateOrConnectWithoutResponsesInput;
    connect?: Prisma.ComplianceQueryWhereUniqueInput;
};
export type ComplianceQueryUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutResponsesInput, Prisma.ComplianceQueryUncheckedCreateWithoutResponsesInput>;
    connectOrCreate?: Prisma.ComplianceQueryCreateOrConnectWithoutResponsesInput;
    upsert?: Prisma.ComplianceQueryUpsertWithoutResponsesInput;
    connect?: Prisma.ComplianceQueryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ComplianceQueryUpdateToOneWithWhereWithoutResponsesInput, Prisma.ComplianceQueryUpdateWithoutResponsesInput>, Prisma.ComplianceQueryUncheckedUpdateWithoutResponsesInput>;
};
export type ComplianceQueryCreateWithoutUserInput = {
    id?: string;
    queryText: string;
    status?: $Enums.ComplianceQueryStatus;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    document?: Prisma.DocumentCreateNestedOneWithoutComplianceQueriesInput;
    responses?: Prisma.AIResponseCreateNestedManyWithoutComplianceQueryInput;
};
export type ComplianceQueryUncheckedCreateWithoutUserInput = {
    id?: string;
    queryText: string;
    status?: $Enums.ComplianceQueryStatus;
    documentId?: string | null;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    responses?: Prisma.AIResponseUncheckedCreateNestedManyWithoutComplianceQueryInput;
};
export type ComplianceQueryCreateOrConnectWithoutUserInput = {
    where: Prisma.ComplianceQueryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutUserInput, Prisma.ComplianceQueryUncheckedCreateWithoutUserInput>;
};
export type ComplianceQueryCreateManyUserInputEnvelope = {
    data: Prisma.ComplianceQueryCreateManyUserInput | Prisma.ComplianceQueryCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ComplianceQueryUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ComplianceQueryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ComplianceQueryUpdateWithoutUserInput, Prisma.ComplianceQueryUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutUserInput, Prisma.ComplianceQueryUncheckedCreateWithoutUserInput>;
};
export type ComplianceQueryUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ComplianceQueryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ComplianceQueryUpdateWithoutUserInput, Prisma.ComplianceQueryUncheckedUpdateWithoutUserInput>;
};
export type ComplianceQueryUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ComplianceQueryScalarWhereInput;
    data: Prisma.XOR<Prisma.ComplianceQueryUpdateManyMutationInput, Prisma.ComplianceQueryUncheckedUpdateManyWithoutUserInput>;
};
export type ComplianceQueryScalarWhereInput = {
    AND?: Prisma.ComplianceQueryScalarWhereInput | Prisma.ComplianceQueryScalarWhereInput[];
    OR?: Prisma.ComplianceQueryScalarWhereInput[];
    NOT?: Prisma.ComplianceQueryScalarWhereInput | Prisma.ComplianceQueryScalarWhereInput[];
    id?: Prisma.UuidFilter<"ComplianceQuery"> | string;
    queryText?: Prisma.StringFilter<"ComplianceQuery"> | string;
    status?: Prisma.EnumComplianceQueryStatusFilter<"ComplianceQuery"> | $Enums.ComplianceQueryStatus;
    documentId?: Prisma.UuidNullableFilter<"ComplianceQuery"> | string | null;
    userId?: Prisma.UuidFilter<"ComplianceQuery"> | string;
    attemptCount?: Prisma.IntFilter<"ComplianceQuery"> | number;
    errorMessage?: Prisma.StringNullableFilter<"ComplianceQuery"> | string | null;
    processingStartedAt?: Prisma.DateTimeNullableFilter<"ComplianceQuery"> | Date | string | null;
    processingFinishedAt?: Prisma.DateTimeNullableFilter<"ComplianceQuery"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ComplianceQuery"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ComplianceQuery"> | Date | string;
};
export type ComplianceQueryCreateWithoutDocumentInput = {
    id?: string;
    queryText: string;
    status?: $Enums.ComplianceQueryStatus;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.ProfileCreateNestedOneWithoutComplianceQueriesInput;
    responses?: Prisma.AIResponseCreateNestedManyWithoutComplianceQueryInput;
};
export type ComplianceQueryUncheckedCreateWithoutDocumentInput = {
    id?: string;
    queryText: string;
    status?: $Enums.ComplianceQueryStatus;
    userId: string;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    responses?: Prisma.AIResponseUncheckedCreateNestedManyWithoutComplianceQueryInput;
};
export type ComplianceQueryCreateOrConnectWithoutDocumentInput = {
    where: Prisma.ComplianceQueryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutDocumentInput, Prisma.ComplianceQueryUncheckedCreateWithoutDocumentInput>;
};
export type ComplianceQueryCreateManyDocumentInputEnvelope = {
    data: Prisma.ComplianceQueryCreateManyDocumentInput | Prisma.ComplianceQueryCreateManyDocumentInput[];
    skipDuplicates?: boolean;
};
export type ComplianceQueryUpsertWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.ComplianceQueryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ComplianceQueryUpdateWithoutDocumentInput, Prisma.ComplianceQueryUncheckedUpdateWithoutDocumentInput>;
    create: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutDocumentInput, Prisma.ComplianceQueryUncheckedCreateWithoutDocumentInput>;
};
export type ComplianceQueryUpdateWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.ComplianceQueryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ComplianceQueryUpdateWithoutDocumentInput, Prisma.ComplianceQueryUncheckedUpdateWithoutDocumentInput>;
};
export type ComplianceQueryUpdateManyWithWhereWithoutDocumentInput = {
    where: Prisma.ComplianceQueryScalarWhereInput;
    data: Prisma.XOR<Prisma.ComplianceQueryUpdateManyMutationInput, Prisma.ComplianceQueryUncheckedUpdateManyWithoutDocumentInput>;
};
export type ComplianceQueryCreateWithoutResponsesInput = {
    id?: string;
    queryText: string;
    status?: $Enums.ComplianceQueryStatus;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    document?: Prisma.DocumentCreateNestedOneWithoutComplianceQueriesInput;
    user: Prisma.ProfileCreateNestedOneWithoutComplianceQueriesInput;
};
export type ComplianceQueryUncheckedCreateWithoutResponsesInput = {
    id?: string;
    queryText: string;
    status?: $Enums.ComplianceQueryStatus;
    documentId?: string | null;
    userId: string;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ComplianceQueryCreateOrConnectWithoutResponsesInput = {
    where: Prisma.ComplianceQueryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutResponsesInput, Prisma.ComplianceQueryUncheckedCreateWithoutResponsesInput>;
};
export type ComplianceQueryUpsertWithoutResponsesInput = {
    update: Prisma.XOR<Prisma.ComplianceQueryUpdateWithoutResponsesInput, Prisma.ComplianceQueryUncheckedUpdateWithoutResponsesInput>;
    create: Prisma.XOR<Prisma.ComplianceQueryCreateWithoutResponsesInput, Prisma.ComplianceQueryUncheckedCreateWithoutResponsesInput>;
    where?: Prisma.ComplianceQueryWhereInput;
};
export type ComplianceQueryUpdateToOneWithWhereWithoutResponsesInput = {
    where?: Prisma.ComplianceQueryWhereInput;
    data: Prisma.XOR<Prisma.ComplianceQueryUpdateWithoutResponsesInput, Prisma.ComplianceQueryUncheckedUpdateWithoutResponsesInput>;
};
export type ComplianceQueryUpdateWithoutResponsesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.DocumentUpdateOneWithoutComplianceQueriesNestedInput;
    user?: Prisma.ProfileUpdateOneRequiredWithoutComplianceQueriesNestedInput;
};
export type ComplianceQueryUncheckedUpdateWithoutResponsesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceQueryCreateManyUserInput = {
    id?: string;
    queryText: string;
    status?: $Enums.ComplianceQueryStatus;
    documentId?: string | null;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ComplianceQueryUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.DocumentUpdateOneWithoutComplianceQueriesNestedInput;
    responses?: Prisma.AIResponseUpdateManyWithoutComplianceQueryNestedInput;
};
export type ComplianceQueryUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responses?: Prisma.AIResponseUncheckedUpdateManyWithoutComplianceQueryNestedInput;
};
export type ComplianceQueryUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceQueryCreateManyDocumentInput = {
    id?: string;
    queryText: string;
    status?: $Enums.ComplianceQueryStatus;
    userId: string;
    attemptCount?: number;
    errorMessage?: string | null;
    processingStartedAt?: Date | string | null;
    processingFinishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ComplianceQueryUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.ProfileUpdateOneRequiredWithoutComplianceQueriesNestedInput;
    responses?: Prisma.AIResponseUpdateManyWithoutComplianceQueryNestedInput;
};
export type ComplianceQueryUncheckedUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responses?: Prisma.AIResponseUncheckedUpdateManyWithoutComplianceQueryNestedInput;
};
export type ComplianceQueryUncheckedUpdateManyWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    queryText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processingStartedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    processingFinishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceQueryCountOutputType = {
    responses: number;
};
export type ComplianceQueryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    responses?: boolean | ComplianceQueryCountOutputTypeCountResponsesArgs;
};
export type ComplianceQueryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceQueryCountOutputTypeSelect<ExtArgs> | null;
};
export type ComplianceQueryCountOutputTypeCountResponsesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AIResponseWhereInput;
};
export type ComplianceQuerySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    queryText?: boolean;
    status?: boolean;
    documentId?: boolean;
    userId?: boolean;
    attemptCount?: boolean;
    errorMessage?: boolean;
    processingStartedAt?: boolean;
    processingFinishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    document?: boolean | Prisma.ComplianceQuery$documentArgs<ExtArgs>;
    user?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    responses?: boolean | Prisma.ComplianceQuery$responsesArgs<ExtArgs>;
    _count?: boolean | Prisma.ComplianceQueryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["complianceQuery"]>;
export type ComplianceQuerySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    queryText?: boolean;
    status?: boolean;
    documentId?: boolean;
    userId?: boolean;
    attemptCount?: boolean;
    errorMessage?: boolean;
    processingStartedAt?: boolean;
    processingFinishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    document?: boolean | Prisma.ComplianceQuery$documentArgs<ExtArgs>;
    user?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["complianceQuery"]>;
export type ComplianceQuerySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    queryText?: boolean;
    status?: boolean;
    documentId?: boolean;
    userId?: boolean;
    attemptCount?: boolean;
    errorMessage?: boolean;
    processingStartedAt?: boolean;
    processingFinishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    document?: boolean | Prisma.ComplianceQuery$documentArgs<ExtArgs>;
    user?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["complianceQuery"]>;
export type ComplianceQuerySelectScalar = {
    id?: boolean;
    queryText?: boolean;
    status?: boolean;
    documentId?: boolean;
    userId?: boolean;
    attemptCount?: boolean;
    errorMessage?: boolean;
    processingStartedAt?: boolean;
    processingFinishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ComplianceQueryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "queryText" | "status" | "documentId" | "userId" | "attemptCount" | "errorMessage" | "processingStartedAt" | "processingFinishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["complianceQuery"]>;
export type ComplianceQueryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.ComplianceQuery$documentArgs<ExtArgs>;
    user?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    responses?: boolean | Prisma.ComplianceQuery$responsesArgs<ExtArgs>;
    _count?: boolean | Prisma.ComplianceQueryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ComplianceQueryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.ComplianceQuery$documentArgs<ExtArgs>;
    user?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type ComplianceQueryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.ComplianceQuery$documentArgs<ExtArgs>;
    user?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $ComplianceQueryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ComplianceQuery";
    objects: {
        document: Prisma.$DocumentPayload<ExtArgs> | null;
        user: Prisma.$ProfilePayload<ExtArgs>;
        responses: Prisma.$AIResponsePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        queryText: string;
        status: $Enums.ComplianceQueryStatus;
        documentId: string | null;
        userId: string;
        attemptCount: number;
        errorMessage: string | null;
        processingStartedAt: Date | null;
        processingFinishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["complianceQuery"]>;
    composites: {};
};
export type ComplianceQueryGetPayload<S extends boolean | null | undefined | ComplianceQueryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ComplianceQueryPayload, S>;
export type ComplianceQueryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ComplianceQueryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ComplianceQueryCountAggregateInputType | true;
};
export interface ComplianceQueryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ComplianceQuery'];
        meta: {
            name: 'ComplianceQuery';
        };
    };
    findUnique<T extends ComplianceQueryFindUniqueArgs>(args: Prisma.SelectSubset<T, ComplianceQueryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ComplianceQueryClient<runtime.Types.Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ComplianceQueryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ComplianceQueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComplianceQueryClient<runtime.Types.Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ComplianceQueryFindFirstArgs>(args?: Prisma.SelectSubset<T, ComplianceQueryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ComplianceQueryClient<runtime.Types.Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ComplianceQueryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ComplianceQueryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComplianceQueryClient<runtime.Types.Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ComplianceQueryFindManyArgs>(args?: Prisma.SelectSubset<T, ComplianceQueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ComplianceQueryCreateArgs>(args: Prisma.SelectSubset<T, ComplianceQueryCreateArgs<ExtArgs>>): Prisma.Prisma__ComplianceQueryClient<runtime.Types.Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ComplianceQueryCreateManyArgs>(args?: Prisma.SelectSubset<T, ComplianceQueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ComplianceQueryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ComplianceQueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ComplianceQueryDeleteArgs>(args: Prisma.SelectSubset<T, ComplianceQueryDeleteArgs<ExtArgs>>): Prisma.Prisma__ComplianceQueryClient<runtime.Types.Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ComplianceQueryUpdateArgs>(args: Prisma.SelectSubset<T, ComplianceQueryUpdateArgs<ExtArgs>>): Prisma.Prisma__ComplianceQueryClient<runtime.Types.Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ComplianceQueryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ComplianceQueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ComplianceQueryUpdateManyArgs>(args: Prisma.SelectSubset<T, ComplianceQueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ComplianceQueryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ComplianceQueryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ComplianceQueryUpsertArgs>(args: Prisma.SelectSubset<T, ComplianceQueryUpsertArgs<ExtArgs>>): Prisma.Prisma__ComplianceQueryClient<runtime.Types.Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ComplianceQueryCountArgs>(args?: Prisma.Subset<T, ComplianceQueryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ComplianceQueryCountAggregateOutputType> : number>;
    aggregate<T extends ComplianceQueryAggregateArgs>(args: Prisma.Subset<T, ComplianceQueryAggregateArgs>): Prisma.PrismaPromise<GetComplianceQueryAggregateType<T>>;
    groupBy<T extends ComplianceQueryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ComplianceQueryGroupByArgs['orderBy'];
    } : {
        orderBy?: ComplianceQueryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ComplianceQueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplianceQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ComplianceQueryFieldRefs;
}
export interface Prisma__ComplianceQueryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    document<T extends Prisma.ComplianceQuery$documentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComplianceQuery$documentArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    responses<T extends Prisma.ComplianceQuery$responsesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComplianceQuery$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ComplianceQueryFieldRefs {
    readonly id: Prisma.FieldRef<"ComplianceQuery", 'String'>;
    readonly queryText: Prisma.FieldRef<"ComplianceQuery", 'String'>;
    readonly status: Prisma.FieldRef<"ComplianceQuery", 'ComplianceQueryStatus'>;
    readonly documentId: Prisma.FieldRef<"ComplianceQuery", 'String'>;
    readonly userId: Prisma.FieldRef<"ComplianceQuery", 'String'>;
    readonly attemptCount: Prisma.FieldRef<"ComplianceQuery", 'Int'>;
    readonly errorMessage: Prisma.FieldRef<"ComplianceQuery", 'String'>;
    readonly processingStartedAt: Prisma.FieldRef<"ComplianceQuery", 'DateTime'>;
    readonly processingFinishedAt: Prisma.FieldRef<"ComplianceQuery", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ComplianceQuery", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ComplianceQuery", 'DateTime'>;
}
export type ComplianceQueryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceQuerySelect<ExtArgs> | null;
    omit?: Prisma.ComplianceQueryOmit<ExtArgs> | null;
    include?: Prisma.ComplianceQueryInclude<ExtArgs> | null;
    where: Prisma.ComplianceQueryWhereUniqueInput;
};
export type ComplianceQueryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceQuerySelect<ExtArgs> | null;
    omit?: Prisma.ComplianceQueryOmit<ExtArgs> | null;
    include?: Prisma.ComplianceQueryInclude<ExtArgs> | null;
    where: Prisma.ComplianceQueryWhereUniqueInput;
};
export type ComplianceQueryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceQuerySelect<ExtArgs> | null;
    omit?: Prisma.ComplianceQueryOmit<ExtArgs> | null;
    include?: Prisma.ComplianceQueryInclude<ExtArgs> | null;
    where?: Prisma.ComplianceQueryWhereInput;
    orderBy?: Prisma.ComplianceQueryOrderByWithRelationInput | Prisma.ComplianceQueryOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceQueryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceQueryScalarFieldEnum | Prisma.ComplianceQueryScalarFieldEnum[];
};
export type ComplianceQueryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceQuerySelect<ExtArgs> | null;
    omit?: Prisma.ComplianceQueryOmit<ExtArgs> | null;
    include?: Prisma.ComplianceQueryInclude<ExtArgs> | null;
    where?: Prisma.ComplianceQueryWhereInput;
    orderBy?: Prisma.ComplianceQueryOrderByWithRelationInput | Prisma.ComplianceQueryOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceQueryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceQueryScalarFieldEnum | Prisma.ComplianceQueryScalarFieldEnum[];
};
export type ComplianceQueryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceQuerySelect<ExtArgs> | null;
    omit?: Prisma.ComplianceQueryOmit<ExtArgs> | null;
    include?: Prisma.ComplianceQueryInclude<ExtArgs> | null;
    where?: Prisma.ComplianceQueryWhereInput;
    orderBy?: Prisma.ComplianceQueryOrderByWithRelationInput | Prisma.ComplianceQueryOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceQueryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceQueryScalarFieldEnum | Prisma.ComplianceQueryScalarFieldEnum[];
};
export type ComplianceQueryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceQuerySelect<ExtArgs> | null;
    omit?: Prisma.ComplianceQueryOmit<ExtArgs> | null;
    include?: Prisma.ComplianceQueryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplianceQueryCreateInput, Prisma.ComplianceQueryUncheckedCreateInput>;
};
export type ComplianceQueryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ComplianceQueryCreateManyInput | Prisma.ComplianceQueryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ComplianceQueryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceQuerySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComplianceQueryOmit<ExtArgs> | null;
    data: Prisma.ComplianceQueryCreateManyInput | Prisma.ComplianceQueryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ComplianceQueryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ComplianceQueryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceQuerySelect<ExtArgs> | null;
    omit?: Prisma.ComplianceQueryOmit<ExtArgs> | null;
    include?: Prisma.ComplianceQueryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplianceQueryUpdateInput, Prisma.ComplianceQueryUncheckedUpdateInput>;
    where: Prisma.ComplianceQueryWhereUniqueInput;
};
export type ComplianceQueryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ComplianceQueryUpdateManyMutationInput, Prisma.ComplianceQueryUncheckedUpdateManyInput>;
    where?: Prisma.ComplianceQueryWhereInput;
    limit?: number;
};
export type ComplianceQueryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceQuerySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComplianceQueryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplianceQueryUpdateManyMutationInput, Prisma.ComplianceQueryUncheckedUpdateManyInput>;
    where?: Prisma.ComplianceQueryWhereInput;
    limit?: number;
    include?: Prisma.ComplianceQueryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ComplianceQueryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceQuerySelect<ExtArgs> | null;
    omit?: Prisma.ComplianceQueryOmit<ExtArgs> | null;
    include?: Prisma.ComplianceQueryInclude<ExtArgs> | null;
    where: Prisma.ComplianceQueryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComplianceQueryCreateInput, Prisma.ComplianceQueryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ComplianceQueryUpdateInput, Prisma.ComplianceQueryUncheckedUpdateInput>;
};
export type ComplianceQueryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceQuerySelect<ExtArgs> | null;
    omit?: Prisma.ComplianceQueryOmit<ExtArgs> | null;
    include?: Prisma.ComplianceQueryInclude<ExtArgs> | null;
    where: Prisma.ComplianceQueryWhereUniqueInput;
};
export type ComplianceQueryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceQueryWhereInput;
    limit?: number;
};
export type ComplianceQuery$documentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
};
export type ComplianceQuery$responsesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIResponseSelect<ExtArgs> | null;
    omit?: Prisma.AIResponseOmit<ExtArgs> | null;
    include?: Prisma.AIResponseInclude<ExtArgs> | null;
    where?: Prisma.AIResponseWhereInput;
    orderBy?: Prisma.AIResponseOrderByWithRelationInput | Prisma.AIResponseOrderByWithRelationInput[];
    cursor?: Prisma.AIResponseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AIResponseScalarFieldEnum | Prisma.AIResponseScalarFieldEnum[];
};
export type ComplianceQueryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceQuerySelect<ExtArgs> | null;
    omit?: Prisma.ComplianceQueryOmit<ExtArgs> | null;
    include?: Prisma.ComplianceQueryInclude<ExtArgs> | null;
};
