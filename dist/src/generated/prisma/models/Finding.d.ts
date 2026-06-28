import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FindingModel = runtime.Types.Result.DefaultSelection<Prisma.$FindingPayload>;
export type AggregateFinding = {
    _count: FindingCountAggregateOutputType | null;
    _avg: FindingAvgAggregateOutputType | null;
    _sum: FindingSumAggregateOutputType | null;
    _min: FindingMinAggregateOutputType | null;
    _max: FindingMaxAggregateOutputType | null;
};
export type FindingAvgAggregateOutputType = {
    pageNumber: number | null;
};
export type FindingSumAggregateOutputType = {
    pageNumber: number | null;
};
export type FindingMinAggregateOutputType = {
    id: string | null;
    analysisId: string | null;
    title: string | null;
    description: string | null;
    severity: $Enums.FindingSeverity | null;
    clauseReference: string | null;
    pageNumber: number | null;
    excerpt: string | null;
    recommendation: string | null;
    createdAt: Date | null;
};
export type FindingMaxAggregateOutputType = {
    id: string | null;
    analysisId: string | null;
    title: string | null;
    description: string | null;
    severity: $Enums.FindingSeverity | null;
    clauseReference: string | null;
    pageNumber: number | null;
    excerpt: string | null;
    recommendation: string | null;
    createdAt: Date | null;
};
export type FindingCountAggregateOutputType = {
    id: number;
    analysisId: number;
    title: number;
    description: number;
    severity: number;
    clauseReference: number;
    pageNumber: number;
    excerpt: number;
    recommendation: number;
    metadata: number;
    createdAt: number;
    _all: number;
};
export type FindingAvgAggregateInputType = {
    pageNumber?: true;
};
export type FindingSumAggregateInputType = {
    pageNumber?: true;
};
export type FindingMinAggregateInputType = {
    id?: true;
    analysisId?: true;
    title?: true;
    description?: true;
    severity?: true;
    clauseReference?: true;
    pageNumber?: true;
    excerpt?: true;
    recommendation?: true;
    createdAt?: true;
};
export type FindingMaxAggregateInputType = {
    id?: true;
    analysisId?: true;
    title?: true;
    description?: true;
    severity?: true;
    clauseReference?: true;
    pageNumber?: true;
    excerpt?: true;
    recommendation?: true;
    createdAt?: true;
};
export type FindingCountAggregateInputType = {
    id?: true;
    analysisId?: true;
    title?: true;
    description?: true;
    severity?: true;
    clauseReference?: true;
    pageNumber?: true;
    excerpt?: true;
    recommendation?: true;
    metadata?: true;
    createdAt?: true;
    _all?: true;
};
export type FindingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FindingWhereInput;
    orderBy?: Prisma.FindingOrderByWithRelationInput | Prisma.FindingOrderByWithRelationInput[];
    cursor?: Prisma.FindingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FindingCountAggregateInputType;
    _avg?: FindingAvgAggregateInputType;
    _sum?: FindingSumAggregateInputType;
    _min?: FindingMinAggregateInputType;
    _max?: FindingMaxAggregateInputType;
};
export type GetFindingAggregateType<T extends FindingAggregateArgs> = {
    [P in keyof T & keyof AggregateFinding]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFinding[P]> : Prisma.GetScalarType<T[P], AggregateFinding[P]>;
};
export type FindingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FindingWhereInput;
    orderBy?: Prisma.FindingOrderByWithAggregationInput | Prisma.FindingOrderByWithAggregationInput[];
    by: Prisma.FindingScalarFieldEnum[] | Prisma.FindingScalarFieldEnum;
    having?: Prisma.FindingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FindingCountAggregateInputType | true;
    _avg?: FindingAvgAggregateInputType;
    _sum?: FindingSumAggregateInputType;
    _min?: FindingMinAggregateInputType;
    _max?: FindingMaxAggregateInputType;
};
export type FindingGroupByOutputType = {
    id: string;
    analysisId: string;
    title: string;
    description: string | null;
    severity: $Enums.FindingSeverity;
    clauseReference: string | null;
    pageNumber: number | null;
    excerpt: string | null;
    recommendation: string | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    _count: FindingCountAggregateOutputType | null;
    _avg: FindingAvgAggregateOutputType | null;
    _sum: FindingSumAggregateOutputType | null;
    _min: FindingMinAggregateOutputType | null;
    _max: FindingMaxAggregateOutputType | null;
};
export type GetFindingGroupByPayload<T extends FindingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FindingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FindingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FindingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FindingGroupByOutputType[P]>;
}>>;
export type FindingWhereInput = {
    AND?: Prisma.FindingWhereInput | Prisma.FindingWhereInput[];
    OR?: Prisma.FindingWhereInput[];
    NOT?: Prisma.FindingWhereInput | Prisma.FindingWhereInput[];
    id?: Prisma.UuidFilter<"Finding"> | string;
    analysisId?: Prisma.UuidFilter<"Finding"> | string;
    title?: Prisma.StringFilter<"Finding"> | string;
    description?: Prisma.StringNullableFilter<"Finding"> | string | null;
    severity?: Prisma.EnumFindingSeverityFilter<"Finding"> | $Enums.FindingSeverity;
    clauseReference?: Prisma.StringNullableFilter<"Finding"> | string | null;
    pageNumber?: Prisma.IntNullableFilter<"Finding"> | number | null;
    excerpt?: Prisma.StringNullableFilter<"Finding"> | string | null;
    recommendation?: Prisma.StringNullableFilter<"Finding"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Finding">;
    createdAt?: Prisma.DateTimeFilter<"Finding"> | Date | string;
    analysis?: Prisma.XOR<Prisma.AnalysisResultScalarRelationFilter, Prisma.AnalysisResultWhereInput>;
};
export type FindingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    analysisId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    clauseReference?: Prisma.SortOrderInput | Prisma.SortOrder;
    pageNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    excerpt?: Prisma.SortOrderInput | Prisma.SortOrder;
    recommendation?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    analysis?: Prisma.AnalysisResultOrderByWithRelationInput;
};
export type FindingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FindingWhereInput | Prisma.FindingWhereInput[];
    OR?: Prisma.FindingWhereInput[];
    NOT?: Prisma.FindingWhereInput | Prisma.FindingWhereInput[];
    analysisId?: Prisma.UuidFilter<"Finding"> | string;
    title?: Prisma.StringFilter<"Finding"> | string;
    description?: Prisma.StringNullableFilter<"Finding"> | string | null;
    severity?: Prisma.EnumFindingSeverityFilter<"Finding"> | $Enums.FindingSeverity;
    clauseReference?: Prisma.StringNullableFilter<"Finding"> | string | null;
    pageNumber?: Prisma.IntNullableFilter<"Finding"> | number | null;
    excerpt?: Prisma.StringNullableFilter<"Finding"> | string | null;
    recommendation?: Prisma.StringNullableFilter<"Finding"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Finding">;
    createdAt?: Prisma.DateTimeFilter<"Finding"> | Date | string;
    analysis?: Prisma.XOR<Prisma.AnalysisResultScalarRelationFilter, Prisma.AnalysisResultWhereInput>;
}, "id">;
export type FindingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    analysisId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    clauseReference?: Prisma.SortOrderInput | Prisma.SortOrder;
    pageNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    excerpt?: Prisma.SortOrderInput | Prisma.SortOrder;
    recommendation?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FindingCountOrderByAggregateInput;
    _avg?: Prisma.FindingAvgOrderByAggregateInput;
    _max?: Prisma.FindingMaxOrderByAggregateInput;
    _min?: Prisma.FindingMinOrderByAggregateInput;
    _sum?: Prisma.FindingSumOrderByAggregateInput;
};
export type FindingScalarWhereWithAggregatesInput = {
    AND?: Prisma.FindingScalarWhereWithAggregatesInput | Prisma.FindingScalarWhereWithAggregatesInput[];
    OR?: Prisma.FindingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FindingScalarWhereWithAggregatesInput | Prisma.FindingScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Finding"> | string;
    analysisId?: Prisma.UuidWithAggregatesFilter<"Finding"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Finding"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Finding"> | string | null;
    severity?: Prisma.EnumFindingSeverityWithAggregatesFilter<"Finding"> | $Enums.FindingSeverity;
    clauseReference?: Prisma.StringNullableWithAggregatesFilter<"Finding"> | string | null;
    pageNumber?: Prisma.IntNullableWithAggregatesFilter<"Finding"> | number | null;
    excerpt?: Prisma.StringNullableWithAggregatesFilter<"Finding"> | string | null;
    recommendation?: Prisma.StringNullableWithAggregatesFilter<"Finding"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"Finding">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Finding"> | Date | string;
};
export type FindingCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    severity?: $Enums.FindingSeverity;
    clauseReference?: string | null;
    pageNumber?: number | null;
    excerpt?: string | null;
    recommendation?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    analysis: Prisma.AnalysisResultCreateNestedOneWithoutFindingsInput;
};
export type FindingUncheckedCreateInput = {
    id?: string;
    analysisId: string;
    title: string;
    description?: string | null;
    severity?: $Enums.FindingSeverity;
    clauseReference?: string | null;
    pageNumber?: number | null;
    excerpt?: string | null;
    recommendation?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type FindingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    severity?: Prisma.EnumFindingSeverityFieldUpdateOperationsInput | $Enums.FindingSeverity;
    clauseReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pageNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    analysis?: Prisma.AnalysisResultUpdateOneRequiredWithoutFindingsNestedInput;
};
export type FindingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    analysisId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    severity?: Prisma.EnumFindingSeverityFieldUpdateOperationsInput | $Enums.FindingSeverity;
    clauseReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pageNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FindingCreateManyInput = {
    id?: string;
    analysisId: string;
    title: string;
    description?: string | null;
    severity?: $Enums.FindingSeverity;
    clauseReference?: string | null;
    pageNumber?: number | null;
    excerpt?: string | null;
    recommendation?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type FindingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    severity?: Prisma.EnumFindingSeverityFieldUpdateOperationsInput | $Enums.FindingSeverity;
    clauseReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pageNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FindingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    analysisId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    severity?: Prisma.EnumFindingSeverityFieldUpdateOperationsInput | $Enums.FindingSeverity;
    clauseReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pageNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FindingListRelationFilter = {
    every?: Prisma.FindingWhereInput;
    some?: Prisma.FindingWhereInput;
    none?: Prisma.FindingWhereInput;
};
export type FindingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FindingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    analysisId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    clauseReference?: Prisma.SortOrder;
    pageNumber?: Prisma.SortOrder;
    excerpt?: Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FindingAvgOrderByAggregateInput = {
    pageNumber?: Prisma.SortOrder;
};
export type FindingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    analysisId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    clauseReference?: Prisma.SortOrder;
    pageNumber?: Prisma.SortOrder;
    excerpt?: Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FindingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    analysisId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    clauseReference?: Prisma.SortOrder;
    pageNumber?: Prisma.SortOrder;
    excerpt?: Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FindingSumOrderByAggregateInput = {
    pageNumber?: Prisma.SortOrder;
};
export type FindingCreateNestedManyWithoutAnalysisInput = {
    create?: Prisma.XOR<Prisma.FindingCreateWithoutAnalysisInput, Prisma.FindingUncheckedCreateWithoutAnalysisInput> | Prisma.FindingCreateWithoutAnalysisInput[] | Prisma.FindingUncheckedCreateWithoutAnalysisInput[];
    connectOrCreate?: Prisma.FindingCreateOrConnectWithoutAnalysisInput | Prisma.FindingCreateOrConnectWithoutAnalysisInput[];
    createMany?: Prisma.FindingCreateManyAnalysisInputEnvelope;
    connect?: Prisma.FindingWhereUniqueInput | Prisma.FindingWhereUniqueInput[];
};
export type FindingUncheckedCreateNestedManyWithoutAnalysisInput = {
    create?: Prisma.XOR<Prisma.FindingCreateWithoutAnalysisInput, Prisma.FindingUncheckedCreateWithoutAnalysisInput> | Prisma.FindingCreateWithoutAnalysisInput[] | Prisma.FindingUncheckedCreateWithoutAnalysisInput[];
    connectOrCreate?: Prisma.FindingCreateOrConnectWithoutAnalysisInput | Prisma.FindingCreateOrConnectWithoutAnalysisInput[];
    createMany?: Prisma.FindingCreateManyAnalysisInputEnvelope;
    connect?: Prisma.FindingWhereUniqueInput | Prisma.FindingWhereUniqueInput[];
};
export type FindingUpdateManyWithoutAnalysisNestedInput = {
    create?: Prisma.XOR<Prisma.FindingCreateWithoutAnalysisInput, Prisma.FindingUncheckedCreateWithoutAnalysisInput> | Prisma.FindingCreateWithoutAnalysisInput[] | Prisma.FindingUncheckedCreateWithoutAnalysisInput[];
    connectOrCreate?: Prisma.FindingCreateOrConnectWithoutAnalysisInput | Prisma.FindingCreateOrConnectWithoutAnalysisInput[];
    upsert?: Prisma.FindingUpsertWithWhereUniqueWithoutAnalysisInput | Prisma.FindingUpsertWithWhereUniqueWithoutAnalysisInput[];
    createMany?: Prisma.FindingCreateManyAnalysisInputEnvelope;
    set?: Prisma.FindingWhereUniqueInput | Prisma.FindingWhereUniqueInput[];
    disconnect?: Prisma.FindingWhereUniqueInput | Prisma.FindingWhereUniqueInput[];
    delete?: Prisma.FindingWhereUniqueInput | Prisma.FindingWhereUniqueInput[];
    connect?: Prisma.FindingWhereUniqueInput | Prisma.FindingWhereUniqueInput[];
    update?: Prisma.FindingUpdateWithWhereUniqueWithoutAnalysisInput | Prisma.FindingUpdateWithWhereUniqueWithoutAnalysisInput[];
    updateMany?: Prisma.FindingUpdateManyWithWhereWithoutAnalysisInput | Prisma.FindingUpdateManyWithWhereWithoutAnalysisInput[];
    deleteMany?: Prisma.FindingScalarWhereInput | Prisma.FindingScalarWhereInput[];
};
export type FindingUncheckedUpdateManyWithoutAnalysisNestedInput = {
    create?: Prisma.XOR<Prisma.FindingCreateWithoutAnalysisInput, Prisma.FindingUncheckedCreateWithoutAnalysisInput> | Prisma.FindingCreateWithoutAnalysisInput[] | Prisma.FindingUncheckedCreateWithoutAnalysisInput[];
    connectOrCreate?: Prisma.FindingCreateOrConnectWithoutAnalysisInput | Prisma.FindingCreateOrConnectWithoutAnalysisInput[];
    upsert?: Prisma.FindingUpsertWithWhereUniqueWithoutAnalysisInput | Prisma.FindingUpsertWithWhereUniqueWithoutAnalysisInput[];
    createMany?: Prisma.FindingCreateManyAnalysisInputEnvelope;
    set?: Prisma.FindingWhereUniqueInput | Prisma.FindingWhereUniqueInput[];
    disconnect?: Prisma.FindingWhereUniqueInput | Prisma.FindingWhereUniqueInput[];
    delete?: Prisma.FindingWhereUniqueInput | Prisma.FindingWhereUniqueInput[];
    connect?: Prisma.FindingWhereUniqueInput | Prisma.FindingWhereUniqueInput[];
    update?: Prisma.FindingUpdateWithWhereUniqueWithoutAnalysisInput | Prisma.FindingUpdateWithWhereUniqueWithoutAnalysisInput[];
    updateMany?: Prisma.FindingUpdateManyWithWhereWithoutAnalysisInput | Prisma.FindingUpdateManyWithWhereWithoutAnalysisInput[];
    deleteMany?: Prisma.FindingScalarWhereInput | Prisma.FindingScalarWhereInput[];
};
export type EnumFindingSeverityFieldUpdateOperationsInput = {
    set?: $Enums.FindingSeverity;
};
export type FindingCreateWithoutAnalysisInput = {
    id?: string;
    title: string;
    description?: string | null;
    severity?: $Enums.FindingSeverity;
    clauseReference?: string | null;
    pageNumber?: number | null;
    excerpt?: string | null;
    recommendation?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type FindingUncheckedCreateWithoutAnalysisInput = {
    id?: string;
    title: string;
    description?: string | null;
    severity?: $Enums.FindingSeverity;
    clauseReference?: string | null;
    pageNumber?: number | null;
    excerpt?: string | null;
    recommendation?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type FindingCreateOrConnectWithoutAnalysisInput = {
    where: Prisma.FindingWhereUniqueInput;
    create: Prisma.XOR<Prisma.FindingCreateWithoutAnalysisInput, Prisma.FindingUncheckedCreateWithoutAnalysisInput>;
};
export type FindingCreateManyAnalysisInputEnvelope = {
    data: Prisma.FindingCreateManyAnalysisInput | Prisma.FindingCreateManyAnalysisInput[];
    skipDuplicates?: boolean;
};
export type FindingUpsertWithWhereUniqueWithoutAnalysisInput = {
    where: Prisma.FindingWhereUniqueInput;
    update: Prisma.XOR<Prisma.FindingUpdateWithoutAnalysisInput, Prisma.FindingUncheckedUpdateWithoutAnalysisInput>;
    create: Prisma.XOR<Prisma.FindingCreateWithoutAnalysisInput, Prisma.FindingUncheckedCreateWithoutAnalysisInput>;
};
export type FindingUpdateWithWhereUniqueWithoutAnalysisInput = {
    where: Prisma.FindingWhereUniqueInput;
    data: Prisma.XOR<Prisma.FindingUpdateWithoutAnalysisInput, Prisma.FindingUncheckedUpdateWithoutAnalysisInput>;
};
export type FindingUpdateManyWithWhereWithoutAnalysisInput = {
    where: Prisma.FindingScalarWhereInput;
    data: Prisma.XOR<Prisma.FindingUpdateManyMutationInput, Prisma.FindingUncheckedUpdateManyWithoutAnalysisInput>;
};
export type FindingScalarWhereInput = {
    AND?: Prisma.FindingScalarWhereInput | Prisma.FindingScalarWhereInput[];
    OR?: Prisma.FindingScalarWhereInput[];
    NOT?: Prisma.FindingScalarWhereInput | Prisma.FindingScalarWhereInput[];
    id?: Prisma.UuidFilter<"Finding"> | string;
    analysisId?: Prisma.UuidFilter<"Finding"> | string;
    title?: Prisma.StringFilter<"Finding"> | string;
    description?: Prisma.StringNullableFilter<"Finding"> | string | null;
    severity?: Prisma.EnumFindingSeverityFilter<"Finding"> | $Enums.FindingSeverity;
    clauseReference?: Prisma.StringNullableFilter<"Finding"> | string | null;
    pageNumber?: Prisma.IntNullableFilter<"Finding"> | number | null;
    excerpt?: Prisma.StringNullableFilter<"Finding"> | string | null;
    recommendation?: Prisma.StringNullableFilter<"Finding"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Finding">;
    createdAt?: Prisma.DateTimeFilter<"Finding"> | Date | string;
};
export type FindingCreateManyAnalysisInput = {
    id?: string;
    title: string;
    description?: string | null;
    severity?: $Enums.FindingSeverity;
    clauseReference?: string | null;
    pageNumber?: number | null;
    excerpt?: string | null;
    recommendation?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type FindingUpdateWithoutAnalysisInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    severity?: Prisma.EnumFindingSeverityFieldUpdateOperationsInput | $Enums.FindingSeverity;
    clauseReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pageNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FindingUncheckedUpdateWithoutAnalysisInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    severity?: Prisma.EnumFindingSeverityFieldUpdateOperationsInput | $Enums.FindingSeverity;
    clauseReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pageNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FindingUncheckedUpdateManyWithoutAnalysisInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    severity?: Prisma.EnumFindingSeverityFieldUpdateOperationsInput | $Enums.FindingSeverity;
    clauseReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pageNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FindingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    analysisId?: boolean;
    title?: boolean;
    description?: boolean;
    severity?: boolean;
    clauseReference?: boolean;
    pageNumber?: boolean;
    excerpt?: boolean;
    recommendation?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    analysis?: boolean | Prisma.AnalysisResultDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["finding"]>;
export type FindingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    analysisId?: boolean;
    title?: boolean;
    description?: boolean;
    severity?: boolean;
    clauseReference?: boolean;
    pageNumber?: boolean;
    excerpt?: boolean;
    recommendation?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    analysis?: boolean | Prisma.AnalysisResultDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["finding"]>;
export type FindingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    analysisId?: boolean;
    title?: boolean;
    description?: boolean;
    severity?: boolean;
    clauseReference?: boolean;
    pageNumber?: boolean;
    excerpt?: boolean;
    recommendation?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    analysis?: boolean | Prisma.AnalysisResultDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["finding"]>;
export type FindingSelectScalar = {
    id?: boolean;
    analysisId?: boolean;
    title?: boolean;
    description?: boolean;
    severity?: boolean;
    clauseReference?: boolean;
    pageNumber?: boolean;
    excerpt?: boolean;
    recommendation?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
};
export type FindingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "analysisId" | "title" | "description" | "severity" | "clauseReference" | "pageNumber" | "excerpt" | "recommendation" | "metadata" | "createdAt", ExtArgs["result"]["finding"]>;
export type FindingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    analysis?: boolean | Prisma.AnalysisResultDefaultArgs<ExtArgs>;
};
export type FindingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    analysis?: boolean | Prisma.AnalysisResultDefaultArgs<ExtArgs>;
};
export type FindingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    analysis?: boolean | Prisma.AnalysisResultDefaultArgs<ExtArgs>;
};
export type $FindingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Finding";
    objects: {
        analysis: Prisma.$AnalysisResultPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        analysisId: string;
        title: string;
        description: string | null;
        severity: $Enums.FindingSeverity;
        clauseReference: string | null;
        pageNumber: number | null;
        excerpt: string | null;
        recommendation: string | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["finding"]>;
    composites: {};
};
export type FindingGetPayload<S extends boolean | null | undefined | FindingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FindingPayload, S>;
export type FindingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FindingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FindingCountAggregateInputType | true;
};
export interface FindingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Finding'];
        meta: {
            name: 'Finding';
        };
    };
    findUnique<T extends FindingFindUniqueArgs>(args: Prisma.SelectSubset<T, FindingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FindingClient<runtime.Types.Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FindingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FindingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FindingClient<runtime.Types.Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FindingFindFirstArgs>(args?: Prisma.SelectSubset<T, FindingFindFirstArgs<ExtArgs>>): Prisma.Prisma__FindingClient<runtime.Types.Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FindingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FindingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FindingClient<runtime.Types.Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FindingFindManyArgs>(args?: Prisma.SelectSubset<T, FindingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FindingCreateArgs>(args: Prisma.SelectSubset<T, FindingCreateArgs<ExtArgs>>): Prisma.Prisma__FindingClient<runtime.Types.Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FindingCreateManyArgs>(args?: Prisma.SelectSubset<T, FindingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FindingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FindingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FindingDeleteArgs>(args: Prisma.SelectSubset<T, FindingDeleteArgs<ExtArgs>>): Prisma.Prisma__FindingClient<runtime.Types.Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FindingUpdateArgs>(args: Prisma.SelectSubset<T, FindingUpdateArgs<ExtArgs>>): Prisma.Prisma__FindingClient<runtime.Types.Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FindingDeleteManyArgs>(args?: Prisma.SelectSubset<T, FindingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FindingUpdateManyArgs>(args: Prisma.SelectSubset<T, FindingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FindingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FindingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FindingUpsertArgs>(args: Prisma.SelectSubset<T, FindingUpsertArgs<ExtArgs>>): Prisma.Prisma__FindingClient<runtime.Types.Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FindingCountArgs>(args?: Prisma.Subset<T, FindingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FindingCountAggregateOutputType> : number>;
    aggregate<T extends FindingAggregateArgs>(args: Prisma.Subset<T, FindingAggregateArgs>): Prisma.PrismaPromise<GetFindingAggregateType<T>>;
    groupBy<T extends FindingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FindingGroupByArgs['orderBy'];
    } : {
        orderBy?: FindingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FindingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFindingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FindingFieldRefs;
}
export interface Prisma__FindingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    analysis<T extends Prisma.AnalysisResultDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnalysisResultDefaultArgs<ExtArgs>>): Prisma.Prisma__AnalysisResultClient<runtime.Types.Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FindingFieldRefs {
    readonly id: Prisma.FieldRef<"Finding", 'String'>;
    readonly analysisId: Prisma.FieldRef<"Finding", 'String'>;
    readonly title: Prisma.FieldRef<"Finding", 'String'>;
    readonly description: Prisma.FieldRef<"Finding", 'String'>;
    readonly severity: Prisma.FieldRef<"Finding", 'FindingSeverity'>;
    readonly clauseReference: Prisma.FieldRef<"Finding", 'String'>;
    readonly pageNumber: Prisma.FieldRef<"Finding", 'Int'>;
    readonly excerpt: Prisma.FieldRef<"Finding", 'String'>;
    readonly recommendation: Prisma.FieldRef<"Finding", 'String'>;
    readonly metadata: Prisma.FieldRef<"Finding", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Finding", 'DateTime'>;
}
export type FindingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FindingSelect<ExtArgs> | null;
    omit?: Prisma.FindingOmit<ExtArgs> | null;
    include?: Prisma.FindingInclude<ExtArgs> | null;
    where: Prisma.FindingWhereUniqueInput;
};
export type FindingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FindingSelect<ExtArgs> | null;
    omit?: Prisma.FindingOmit<ExtArgs> | null;
    include?: Prisma.FindingInclude<ExtArgs> | null;
    where: Prisma.FindingWhereUniqueInput;
};
export type FindingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FindingSelect<ExtArgs> | null;
    omit?: Prisma.FindingOmit<ExtArgs> | null;
    include?: Prisma.FindingInclude<ExtArgs> | null;
    where?: Prisma.FindingWhereInput;
    orderBy?: Prisma.FindingOrderByWithRelationInput | Prisma.FindingOrderByWithRelationInput[];
    cursor?: Prisma.FindingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FindingScalarFieldEnum | Prisma.FindingScalarFieldEnum[];
};
export type FindingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FindingSelect<ExtArgs> | null;
    omit?: Prisma.FindingOmit<ExtArgs> | null;
    include?: Prisma.FindingInclude<ExtArgs> | null;
    where?: Prisma.FindingWhereInput;
    orderBy?: Prisma.FindingOrderByWithRelationInput | Prisma.FindingOrderByWithRelationInput[];
    cursor?: Prisma.FindingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FindingScalarFieldEnum | Prisma.FindingScalarFieldEnum[];
};
export type FindingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FindingSelect<ExtArgs> | null;
    omit?: Prisma.FindingOmit<ExtArgs> | null;
    include?: Prisma.FindingInclude<ExtArgs> | null;
    where?: Prisma.FindingWhereInput;
    orderBy?: Prisma.FindingOrderByWithRelationInput | Prisma.FindingOrderByWithRelationInput[];
    cursor?: Prisma.FindingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FindingScalarFieldEnum | Prisma.FindingScalarFieldEnum[];
};
export type FindingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FindingSelect<ExtArgs> | null;
    omit?: Prisma.FindingOmit<ExtArgs> | null;
    include?: Prisma.FindingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FindingCreateInput, Prisma.FindingUncheckedCreateInput>;
};
export type FindingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FindingCreateManyInput | Prisma.FindingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FindingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FindingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FindingOmit<ExtArgs> | null;
    data: Prisma.FindingCreateManyInput | Prisma.FindingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FindingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FindingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FindingSelect<ExtArgs> | null;
    omit?: Prisma.FindingOmit<ExtArgs> | null;
    include?: Prisma.FindingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FindingUpdateInput, Prisma.FindingUncheckedUpdateInput>;
    where: Prisma.FindingWhereUniqueInput;
};
export type FindingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FindingUpdateManyMutationInput, Prisma.FindingUncheckedUpdateManyInput>;
    where?: Prisma.FindingWhereInput;
    limit?: number;
};
export type FindingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FindingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FindingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FindingUpdateManyMutationInput, Prisma.FindingUncheckedUpdateManyInput>;
    where?: Prisma.FindingWhereInput;
    limit?: number;
    include?: Prisma.FindingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FindingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FindingSelect<ExtArgs> | null;
    omit?: Prisma.FindingOmit<ExtArgs> | null;
    include?: Prisma.FindingInclude<ExtArgs> | null;
    where: Prisma.FindingWhereUniqueInput;
    create: Prisma.XOR<Prisma.FindingCreateInput, Prisma.FindingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FindingUpdateInput, Prisma.FindingUncheckedUpdateInput>;
};
export type FindingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FindingSelect<ExtArgs> | null;
    omit?: Prisma.FindingOmit<ExtArgs> | null;
    include?: Prisma.FindingInclude<ExtArgs> | null;
    where: Prisma.FindingWhereUniqueInput;
};
export type FindingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FindingWhereInput;
    limit?: number;
};
export type FindingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FindingSelect<ExtArgs> | null;
    omit?: Prisma.FindingOmit<ExtArgs> | null;
    include?: Prisma.FindingInclude<ExtArgs> | null;
};
