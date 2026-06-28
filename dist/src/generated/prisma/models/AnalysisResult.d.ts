import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnalysisResultModel = runtime.Types.Result.DefaultSelection<Prisma.$AnalysisResultPayload>;
export type AggregateAnalysisResult = {
    _count: AnalysisResultCountAggregateOutputType | null;
    _avg: AnalysisResultAvgAggregateOutputType | null;
    _sum: AnalysisResultSumAggregateOutputType | null;
    _min: AnalysisResultMinAggregateOutputType | null;
    _max: AnalysisResultMaxAggregateOutputType | null;
};
export type AnalysisResultAvgAggregateOutputType = {
    confidence: number | null;
};
export type AnalysisResultSumAggregateOutputType = {
    confidence: number | null;
};
export type AnalysisResultMinAggregateOutputType = {
    id: string | null;
    summary: string | null;
    overallVerdict: $Enums.AnalysisVerdict | null;
    confidence: number | null;
    riskLevel: $Enums.RiskLevel | null;
    createdAt: Date | null;
    responseId: string | null;
};
export type AnalysisResultMaxAggregateOutputType = {
    id: string | null;
    summary: string | null;
    overallVerdict: $Enums.AnalysisVerdict | null;
    confidence: number | null;
    riskLevel: $Enums.RiskLevel | null;
    createdAt: Date | null;
    responseId: string | null;
};
export type AnalysisResultCountAggregateOutputType = {
    id: number;
    summary: number;
    overallVerdict: number;
    confidence: number;
    riskLevel: number;
    createdAt: number;
    responseId: number;
    _all: number;
};
export type AnalysisResultAvgAggregateInputType = {
    confidence?: true;
};
export type AnalysisResultSumAggregateInputType = {
    confidence?: true;
};
export type AnalysisResultMinAggregateInputType = {
    id?: true;
    summary?: true;
    overallVerdict?: true;
    confidence?: true;
    riskLevel?: true;
    createdAt?: true;
    responseId?: true;
};
export type AnalysisResultMaxAggregateInputType = {
    id?: true;
    summary?: true;
    overallVerdict?: true;
    confidence?: true;
    riskLevel?: true;
    createdAt?: true;
    responseId?: true;
};
export type AnalysisResultCountAggregateInputType = {
    id?: true;
    summary?: true;
    overallVerdict?: true;
    confidence?: true;
    riskLevel?: true;
    createdAt?: true;
    responseId?: true;
    _all?: true;
};
export type AnalysisResultAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalysisResultWhereInput;
    orderBy?: Prisma.AnalysisResultOrderByWithRelationInput | Prisma.AnalysisResultOrderByWithRelationInput[];
    cursor?: Prisma.AnalysisResultWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnalysisResultCountAggregateInputType;
    _avg?: AnalysisResultAvgAggregateInputType;
    _sum?: AnalysisResultSumAggregateInputType;
    _min?: AnalysisResultMinAggregateInputType;
    _max?: AnalysisResultMaxAggregateInputType;
};
export type GetAnalysisResultAggregateType<T extends AnalysisResultAggregateArgs> = {
    [P in keyof T & keyof AggregateAnalysisResult]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnalysisResult[P]> : Prisma.GetScalarType<T[P], AggregateAnalysisResult[P]>;
};
export type AnalysisResultGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalysisResultWhereInput;
    orderBy?: Prisma.AnalysisResultOrderByWithAggregationInput | Prisma.AnalysisResultOrderByWithAggregationInput[];
    by: Prisma.AnalysisResultScalarFieldEnum[] | Prisma.AnalysisResultScalarFieldEnum;
    having?: Prisma.AnalysisResultScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnalysisResultCountAggregateInputType | true;
    _avg?: AnalysisResultAvgAggregateInputType;
    _sum?: AnalysisResultSumAggregateInputType;
    _min?: AnalysisResultMinAggregateInputType;
    _max?: AnalysisResultMaxAggregateInputType;
};
export type AnalysisResultGroupByOutputType = {
    id: string;
    summary: string | null;
    overallVerdict: $Enums.AnalysisVerdict | null;
    confidence: number | null;
    riskLevel: $Enums.RiskLevel | null;
    createdAt: Date;
    responseId: string;
    _count: AnalysisResultCountAggregateOutputType | null;
    _avg: AnalysisResultAvgAggregateOutputType | null;
    _sum: AnalysisResultSumAggregateOutputType | null;
    _min: AnalysisResultMinAggregateOutputType | null;
    _max: AnalysisResultMaxAggregateOutputType | null;
};
export type GetAnalysisResultGroupByPayload<T extends AnalysisResultGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnalysisResultGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnalysisResultGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnalysisResultGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnalysisResultGroupByOutputType[P]>;
}>>;
export type AnalysisResultWhereInput = {
    AND?: Prisma.AnalysisResultWhereInput | Prisma.AnalysisResultWhereInput[];
    OR?: Prisma.AnalysisResultWhereInput[];
    NOT?: Prisma.AnalysisResultWhereInput | Prisma.AnalysisResultWhereInput[];
    id?: Prisma.UuidFilter<"AnalysisResult"> | string;
    summary?: Prisma.StringNullableFilter<"AnalysisResult"> | string | null;
    overallVerdict?: Prisma.EnumAnalysisVerdictNullableFilter<"AnalysisResult"> | $Enums.AnalysisVerdict | null;
    confidence?: Prisma.FloatNullableFilter<"AnalysisResult"> | number | null;
    riskLevel?: Prisma.EnumRiskLevelNullableFilter<"AnalysisResult"> | $Enums.RiskLevel | null;
    createdAt?: Prisma.DateTimeFilter<"AnalysisResult"> | Date | string;
    responseId?: Prisma.UuidFilter<"AnalysisResult"> | string;
    Response?: Prisma.XOR<Prisma.AIResponseScalarRelationFilter, Prisma.AIResponseWhereInput>;
    findings?: Prisma.FindingListRelationFilter;
};
export type AnalysisResultOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    overallVerdict?: Prisma.SortOrderInput | Prisma.SortOrder;
    confidence?: Prisma.SortOrderInput | Prisma.SortOrder;
    riskLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    responseId?: Prisma.SortOrder;
    Response?: Prisma.AIResponseOrderByWithRelationInput;
    findings?: Prisma.FindingOrderByRelationAggregateInput;
};
export type AnalysisResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    responseId?: string;
    AND?: Prisma.AnalysisResultWhereInput | Prisma.AnalysisResultWhereInput[];
    OR?: Prisma.AnalysisResultWhereInput[];
    NOT?: Prisma.AnalysisResultWhereInput | Prisma.AnalysisResultWhereInput[];
    summary?: Prisma.StringNullableFilter<"AnalysisResult"> | string | null;
    overallVerdict?: Prisma.EnumAnalysisVerdictNullableFilter<"AnalysisResult"> | $Enums.AnalysisVerdict | null;
    confidence?: Prisma.FloatNullableFilter<"AnalysisResult"> | number | null;
    riskLevel?: Prisma.EnumRiskLevelNullableFilter<"AnalysisResult"> | $Enums.RiskLevel | null;
    createdAt?: Prisma.DateTimeFilter<"AnalysisResult"> | Date | string;
    Response?: Prisma.XOR<Prisma.AIResponseScalarRelationFilter, Prisma.AIResponseWhereInput>;
    findings?: Prisma.FindingListRelationFilter;
}, "id" | "responseId">;
export type AnalysisResultOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    overallVerdict?: Prisma.SortOrderInput | Prisma.SortOrder;
    confidence?: Prisma.SortOrderInput | Prisma.SortOrder;
    riskLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    responseId?: Prisma.SortOrder;
    _count?: Prisma.AnalysisResultCountOrderByAggregateInput;
    _avg?: Prisma.AnalysisResultAvgOrderByAggregateInput;
    _max?: Prisma.AnalysisResultMaxOrderByAggregateInput;
    _min?: Prisma.AnalysisResultMinOrderByAggregateInput;
    _sum?: Prisma.AnalysisResultSumOrderByAggregateInput;
};
export type AnalysisResultScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnalysisResultScalarWhereWithAggregatesInput | Prisma.AnalysisResultScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnalysisResultScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnalysisResultScalarWhereWithAggregatesInput | Prisma.AnalysisResultScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AnalysisResult"> | string;
    summary?: Prisma.StringNullableWithAggregatesFilter<"AnalysisResult"> | string | null;
    overallVerdict?: Prisma.EnumAnalysisVerdictNullableWithAggregatesFilter<"AnalysisResult"> | $Enums.AnalysisVerdict | null;
    confidence?: Prisma.FloatNullableWithAggregatesFilter<"AnalysisResult"> | number | null;
    riskLevel?: Prisma.EnumRiskLevelNullableWithAggregatesFilter<"AnalysisResult"> | $Enums.RiskLevel | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AnalysisResult"> | Date | string;
    responseId?: Prisma.UuidWithAggregatesFilter<"AnalysisResult"> | string;
};
export type AnalysisResultCreateInput = {
    id?: string;
    summary?: string | null;
    overallVerdict?: $Enums.AnalysisVerdict | null;
    confidence?: number | null;
    riskLevel?: $Enums.RiskLevel | null;
    createdAt?: Date | string;
    Response: Prisma.AIResponseCreateNestedOneWithoutAnalysisResultInput;
    findings?: Prisma.FindingCreateNestedManyWithoutAnalysisInput;
};
export type AnalysisResultUncheckedCreateInput = {
    id?: string;
    summary?: string | null;
    overallVerdict?: $Enums.AnalysisVerdict | null;
    confidence?: number | null;
    riskLevel?: $Enums.RiskLevel | null;
    createdAt?: Date | string;
    responseId: string;
    findings?: Prisma.FindingUncheckedCreateNestedManyWithoutAnalysisInput;
};
export type AnalysisResultUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    overallVerdict?: Prisma.NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riskLevel?: Prisma.NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Response?: Prisma.AIResponseUpdateOneRequiredWithoutAnalysisResultNestedInput;
    findings?: Prisma.FindingUpdateManyWithoutAnalysisNestedInput;
};
export type AnalysisResultUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    overallVerdict?: Prisma.NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riskLevel?: Prisma.NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responseId?: Prisma.StringFieldUpdateOperationsInput | string;
    findings?: Prisma.FindingUncheckedUpdateManyWithoutAnalysisNestedInput;
};
export type AnalysisResultCreateManyInput = {
    id?: string;
    summary?: string | null;
    overallVerdict?: $Enums.AnalysisVerdict | null;
    confidence?: number | null;
    riskLevel?: $Enums.RiskLevel | null;
    createdAt?: Date | string;
    responseId: string;
};
export type AnalysisResultUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    overallVerdict?: Prisma.NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riskLevel?: Prisma.NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalysisResultUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    overallVerdict?: Prisma.NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riskLevel?: Prisma.NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responseId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AnalysisResultCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    overallVerdict?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    responseId?: Prisma.SortOrder;
};
export type AnalysisResultAvgOrderByAggregateInput = {
    confidence?: Prisma.SortOrder;
};
export type AnalysisResultMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    overallVerdict?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    responseId?: Prisma.SortOrder;
};
export type AnalysisResultMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    overallVerdict?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    responseId?: Prisma.SortOrder;
};
export type AnalysisResultSumOrderByAggregateInput = {
    confidence?: Prisma.SortOrder;
};
export type AnalysisResultScalarRelationFilter = {
    is?: Prisma.AnalysisResultWhereInput;
    isNot?: Prisma.AnalysisResultWhereInput;
};
export type AnalysisResultNullableScalarRelationFilter = {
    is?: Prisma.AnalysisResultWhereInput | null;
    isNot?: Prisma.AnalysisResultWhereInput | null;
};
export type NullableEnumAnalysisVerdictFieldUpdateOperationsInput = {
    set?: $Enums.AnalysisVerdict | null;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableEnumRiskLevelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLevel | null;
};
export type AnalysisResultCreateNestedOneWithoutFindingsInput = {
    create?: Prisma.XOR<Prisma.AnalysisResultCreateWithoutFindingsInput, Prisma.AnalysisResultUncheckedCreateWithoutFindingsInput>;
    connectOrCreate?: Prisma.AnalysisResultCreateOrConnectWithoutFindingsInput;
    connect?: Prisma.AnalysisResultWhereUniqueInput;
};
export type AnalysisResultUpdateOneRequiredWithoutFindingsNestedInput = {
    create?: Prisma.XOR<Prisma.AnalysisResultCreateWithoutFindingsInput, Prisma.AnalysisResultUncheckedCreateWithoutFindingsInput>;
    connectOrCreate?: Prisma.AnalysisResultCreateOrConnectWithoutFindingsInput;
    upsert?: Prisma.AnalysisResultUpsertWithoutFindingsInput;
    connect?: Prisma.AnalysisResultWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnalysisResultUpdateToOneWithWhereWithoutFindingsInput, Prisma.AnalysisResultUpdateWithoutFindingsInput>, Prisma.AnalysisResultUncheckedUpdateWithoutFindingsInput>;
};
export type AnalysisResultCreateNestedOneWithoutResponseInput = {
    create?: Prisma.XOR<Prisma.AnalysisResultCreateWithoutResponseInput, Prisma.AnalysisResultUncheckedCreateWithoutResponseInput>;
    connectOrCreate?: Prisma.AnalysisResultCreateOrConnectWithoutResponseInput;
    connect?: Prisma.AnalysisResultWhereUniqueInput;
};
export type AnalysisResultUncheckedCreateNestedOneWithoutResponseInput = {
    create?: Prisma.XOR<Prisma.AnalysisResultCreateWithoutResponseInput, Prisma.AnalysisResultUncheckedCreateWithoutResponseInput>;
    connectOrCreate?: Prisma.AnalysisResultCreateOrConnectWithoutResponseInput;
    connect?: Prisma.AnalysisResultWhereUniqueInput;
};
export type AnalysisResultUpdateOneWithoutResponseNestedInput = {
    create?: Prisma.XOR<Prisma.AnalysisResultCreateWithoutResponseInput, Prisma.AnalysisResultUncheckedCreateWithoutResponseInput>;
    connectOrCreate?: Prisma.AnalysisResultCreateOrConnectWithoutResponseInput;
    upsert?: Prisma.AnalysisResultUpsertWithoutResponseInput;
    disconnect?: Prisma.AnalysisResultWhereInput | boolean;
    delete?: Prisma.AnalysisResultWhereInput | boolean;
    connect?: Prisma.AnalysisResultWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnalysisResultUpdateToOneWithWhereWithoutResponseInput, Prisma.AnalysisResultUpdateWithoutResponseInput>, Prisma.AnalysisResultUncheckedUpdateWithoutResponseInput>;
};
export type AnalysisResultUncheckedUpdateOneWithoutResponseNestedInput = {
    create?: Prisma.XOR<Prisma.AnalysisResultCreateWithoutResponseInput, Prisma.AnalysisResultUncheckedCreateWithoutResponseInput>;
    connectOrCreate?: Prisma.AnalysisResultCreateOrConnectWithoutResponseInput;
    upsert?: Prisma.AnalysisResultUpsertWithoutResponseInput;
    disconnect?: Prisma.AnalysisResultWhereInput | boolean;
    delete?: Prisma.AnalysisResultWhereInput | boolean;
    connect?: Prisma.AnalysisResultWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnalysisResultUpdateToOneWithWhereWithoutResponseInput, Prisma.AnalysisResultUpdateWithoutResponseInput>, Prisma.AnalysisResultUncheckedUpdateWithoutResponseInput>;
};
export type AnalysisResultCreateWithoutFindingsInput = {
    id?: string;
    summary?: string | null;
    overallVerdict?: $Enums.AnalysisVerdict | null;
    confidence?: number | null;
    riskLevel?: $Enums.RiskLevel | null;
    createdAt?: Date | string;
    Response: Prisma.AIResponseCreateNestedOneWithoutAnalysisResultInput;
};
export type AnalysisResultUncheckedCreateWithoutFindingsInput = {
    id?: string;
    summary?: string | null;
    overallVerdict?: $Enums.AnalysisVerdict | null;
    confidence?: number | null;
    riskLevel?: $Enums.RiskLevel | null;
    createdAt?: Date | string;
    responseId: string;
};
export type AnalysisResultCreateOrConnectWithoutFindingsInput = {
    where: Prisma.AnalysisResultWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalysisResultCreateWithoutFindingsInput, Prisma.AnalysisResultUncheckedCreateWithoutFindingsInput>;
};
export type AnalysisResultUpsertWithoutFindingsInput = {
    update: Prisma.XOR<Prisma.AnalysisResultUpdateWithoutFindingsInput, Prisma.AnalysisResultUncheckedUpdateWithoutFindingsInput>;
    create: Prisma.XOR<Prisma.AnalysisResultCreateWithoutFindingsInput, Prisma.AnalysisResultUncheckedCreateWithoutFindingsInput>;
    where?: Prisma.AnalysisResultWhereInput;
};
export type AnalysisResultUpdateToOneWithWhereWithoutFindingsInput = {
    where?: Prisma.AnalysisResultWhereInput;
    data: Prisma.XOR<Prisma.AnalysisResultUpdateWithoutFindingsInput, Prisma.AnalysisResultUncheckedUpdateWithoutFindingsInput>;
};
export type AnalysisResultUpdateWithoutFindingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    overallVerdict?: Prisma.NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riskLevel?: Prisma.NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Response?: Prisma.AIResponseUpdateOneRequiredWithoutAnalysisResultNestedInput;
};
export type AnalysisResultUncheckedUpdateWithoutFindingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    overallVerdict?: Prisma.NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riskLevel?: Prisma.NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responseId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AnalysisResultCreateWithoutResponseInput = {
    id?: string;
    summary?: string | null;
    overallVerdict?: $Enums.AnalysisVerdict | null;
    confidence?: number | null;
    riskLevel?: $Enums.RiskLevel | null;
    createdAt?: Date | string;
    findings?: Prisma.FindingCreateNestedManyWithoutAnalysisInput;
};
export type AnalysisResultUncheckedCreateWithoutResponseInput = {
    id?: string;
    summary?: string | null;
    overallVerdict?: $Enums.AnalysisVerdict | null;
    confidence?: number | null;
    riskLevel?: $Enums.RiskLevel | null;
    createdAt?: Date | string;
    findings?: Prisma.FindingUncheckedCreateNestedManyWithoutAnalysisInput;
};
export type AnalysisResultCreateOrConnectWithoutResponseInput = {
    where: Prisma.AnalysisResultWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalysisResultCreateWithoutResponseInput, Prisma.AnalysisResultUncheckedCreateWithoutResponseInput>;
};
export type AnalysisResultUpsertWithoutResponseInput = {
    update: Prisma.XOR<Prisma.AnalysisResultUpdateWithoutResponseInput, Prisma.AnalysisResultUncheckedUpdateWithoutResponseInput>;
    create: Prisma.XOR<Prisma.AnalysisResultCreateWithoutResponseInput, Prisma.AnalysisResultUncheckedCreateWithoutResponseInput>;
    where?: Prisma.AnalysisResultWhereInput;
};
export type AnalysisResultUpdateToOneWithWhereWithoutResponseInput = {
    where?: Prisma.AnalysisResultWhereInput;
    data: Prisma.XOR<Prisma.AnalysisResultUpdateWithoutResponseInput, Prisma.AnalysisResultUncheckedUpdateWithoutResponseInput>;
};
export type AnalysisResultUpdateWithoutResponseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    overallVerdict?: Prisma.NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riskLevel?: Prisma.NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    findings?: Prisma.FindingUpdateManyWithoutAnalysisNestedInput;
};
export type AnalysisResultUncheckedUpdateWithoutResponseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    overallVerdict?: Prisma.NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    riskLevel?: Prisma.NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    findings?: Prisma.FindingUncheckedUpdateManyWithoutAnalysisNestedInput;
};
export type AnalysisResultCountOutputType = {
    findings: number;
};
export type AnalysisResultCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    findings?: boolean | AnalysisResultCountOutputTypeCountFindingsArgs;
};
export type AnalysisResultCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisResultCountOutputTypeSelect<ExtArgs> | null;
};
export type AnalysisResultCountOutputTypeCountFindingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FindingWhereInput;
};
export type AnalysisResultSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    summary?: boolean;
    overallVerdict?: boolean;
    confidence?: boolean;
    riskLevel?: boolean;
    createdAt?: boolean;
    responseId?: boolean;
    Response?: boolean | Prisma.AIResponseDefaultArgs<ExtArgs>;
    findings?: boolean | Prisma.AnalysisResult$findingsArgs<ExtArgs>;
    _count?: boolean | Prisma.AnalysisResultCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["analysisResult"]>;
export type AnalysisResultSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    summary?: boolean;
    overallVerdict?: boolean;
    confidence?: boolean;
    riskLevel?: boolean;
    createdAt?: boolean;
    responseId?: boolean;
    Response?: boolean | Prisma.AIResponseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["analysisResult"]>;
export type AnalysisResultSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    summary?: boolean;
    overallVerdict?: boolean;
    confidence?: boolean;
    riskLevel?: boolean;
    createdAt?: boolean;
    responseId?: boolean;
    Response?: boolean | Prisma.AIResponseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["analysisResult"]>;
export type AnalysisResultSelectScalar = {
    id?: boolean;
    summary?: boolean;
    overallVerdict?: boolean;
    confidence?: boolean;
    riskLevel?: boolean;
    createdAt?: boolean;
    responseId?: boolean;
};
export type AnalysisResultOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "summary" | "overallVerdict" | "confidence" | "riskLevel" | "createdAt" | "responseId", ExtArgs["result"]["analysisResult"]>;
export type AnalysisResultInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Response?: boolean | Prisma.AIResponseDefaultArgs<ExtArgs>;
    findings?: boolean | Prisma.AnalysisResult$findingsArgs<ExtArgs>;
    _count?: boolean | Prisma.AnalysisResultCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AnalysisResultIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Response?: boolean | Prisma.AIResponseDefaultArgs<ExtArgs>;
};
export type AnalysisResultIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Response?: boolean | Prisma.AIResponseDefaultArgs<ExtArgs>;
};
export type $AnalysisResultPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AnalysisResult";
    objects: {
        Response: Prisma.$AIResponsePayload<ExtArgs>;
        findings: Prisma.$FindingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        summary: string | null;
        overallVerdict: $Enums.AnalysisVerdict | null;
        confidence: number | null;
        riskLevel: $Enums.RiskLevel | null;
        createdAt: Date;
        responseId: string;
    }, ExtArgs["result"]["analysisResult"]>;
    composites: {};
};
export type AnalysisResultGetPayload<S extends boolean | null | undefined | AnalysisResultDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnalysisResultPayload, S>;
export type AnalysisResultCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnalysisResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnalysisResultCountAggregateInputType | true;
};
export interface AnalysisResultDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AnalysisResult'];
        meta: {
            name: 'AnalysisResult';
        };
    };
    findUnique<T extends AnalysisResultFindUniqueArgs>(args: Prisma.SelectSubset<T, AnalysisResultFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnalysisResultClient<runtime.Types.Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnalysisResultFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnalysisResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnalysisResultClient<runtime.Types.Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnalysisResultFindFirstArgs>(args?: Prisma.SelectSubset<T, AnalysisResultFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnalysisResultClient<runtime.Types.Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnalysisResultFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnalysisResultFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnalysisResultClient<runtime.Types.Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnalysisResultFindManyArgs>(args?: Prisma.SelectSubset<T, AnalysisResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnalysisResultCreateArgs>(args: Prisma.SelectSubset<T, AnalysisResultCreateArgs<ExtArgs>>): Prisma.Prisma__AnalysisResultClient<runtime.Types.Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnalysisResultCreateManyArgs>(args?: Prisma.SelectSubset<T, AnalysisResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnalysisResultCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnalysisResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnalysisResultDeleteArgs>(args: Prisma.SelectSubset<T, AnalysisResultDeleteArgs<ExtArgs>>): Prisma.Prisma__AnalysisResultClient<runtime.Types.Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnalysisResultUpdateArgs>(args: Prisma.SelectSubset<T, AnalysisResultUpdateArgs<ExtArgs>>): Prisma.Prisma__AnalysisResultClient<runtime.Types.Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnalysisResultDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnalysisResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnalysisResultUpdateManyArgs>(args: Prisma.SelectSubset<T, AnalysisResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnalysisResultUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnalysisResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnalysisResultUpsertArgs>(args: Prisma.SelectSubset<T, AnalysisResultUpsertArgs<ExtArgs>>): Prisma.Prisma__AnalysisResultClient<runtime.Types.Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnalysisResultCountArgs>(args?: Prisma.Subset<T, AnalysisResultCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnalysisResultCountAggregateOutputType> : number>;
    aggregate<T extends AnalysisResultAggregateArgs>(args: Prisma.Subset<T, AnalysisResultAggregateArgs>): Prisma.PrismaPromise<GetAnalysisResultAggregateType<T>>;
    groupBy<T extends AnalysisResultGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnalysisResultGroupByArgs['orderBy'];
    } : {
        orderBy?: AnalysisResultGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnalysisResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnalysisResultFieldRefs;
}
export interface Prisma__AnalysisResultClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Response<T extends Prisma.AIResponseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AIResponseDefaultArgs<ExtArgs>>): Prisma.Prisma__AIResponseClient<runtime.Types.Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    findings<T extends Prisma.AnalysisResult$findingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnalysisResult$findingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnalysisResultFieldRefs {
    readonly id: Prisma.FieldRef<"AnalysisResult", 'String'>;
    readonly summary: Prisma.FieldRef<"AnalysisResult", 'String'>;
    readonly overallVerdict: Prisma.FieldRef<"AnalysisResult", 'AnalysisVerdict'>;
    readonly confidence: Prisma.FieldRef<"AnalysisResult", 'Float'>;
    readonly riskLevel: Prisma.FieldRef<"AnalysisResult", 'RiskLevel'>;
    readonly createdAt: Prisma.FieldRef<"AnalysisResult", 'DateTime'>;
    readonly responseId: Prisma.FieldRef<"AnalysisResult", 'String'>;
}
export type AnalysisResultFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisResultSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisResultOmit<ExtArgs> | null;
    include?: Prisma.AnalysisResultInclude<ExtArgs> | null;
    where: Prisma.AnalysisResultWhereUniqueInput;
};
export type AnalysisResultFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisResultSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisResultOmit<ExtArgs> | null;
    include?: Prisma.AnalysisResultInclude<ExtArgs> | null;
    where: Prisma.AnalysisResultWhereUniqueInput;
};
export type AnalysisResultFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisResultSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisResultOmit<ExtArgs> | null;
    include?: Prisma.AnalysisResultInclude<ExtArgs> | null;
    where?: Prisma.AnalysisResultWhereInput;
    orderBy?: Prisma.AnalysisResultOrderByWithRelationInput | Prisma.AnalysisResultOrderByWithRelationInput[];
    cursor?: Prisma.AnalysisResultWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalysisResultScalarFieldEnum | Prisma.AnalysisResultScalarFieldEnum[];
};
export type AnalysisResultFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisResultSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisResultOmit<ExtArgs> | null;
    include?: Prisma.AnalysisResultInclude<ExtArgs> | null;
    where?: Prisma.AnalysisResultWhereInput;
    orderBy?: Prisma.AnalysisResultOrderByWithRelationInput | Prisma.AnalysisResultOrderByWithRelationInput[];
    cursor?: Prisma.AnalysisResultWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalysisResultScalarFieldEnum | Prisma.AnalysisResultScalarFieldEnum[];
};
export type AnalysisResultFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisResultSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisResultOmit<ExtArgs> | null;
    include?: Prisma.AnalysisResultInclude<ExtArgs> | null;
    where?: Prisma.AnalysisResultWhereInput;
    orderBy?: Prisma.AnalysisResultOrderByWithRelationInput | Prisma.AnalysisResultOrderByWithRelationInput[];
    cursor?: Prisma.AnalysisResultWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalysisResultScalarFieldEnum | Prisma.AnalysisResultScalarFieldEnum[];
};
export type AnalysisResultCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisResultSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisResultOmit<ExtArgs> | null;
    include?: Prisma.AnalysisResultInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalysisResultCreateInput, Prisma.AnalysisResultUncheckedCreateInput>;
};
export type AnalysisResultCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnalysisResultCreateManyInput | Prisma.AnalysisResultCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnalysisResultCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisResultSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnalysisResultOmit<ExtArgs> | null;
    data: Prisma.AnalysisResultCreateManyInput | Prisma.AnalysisResultCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnalysisResultIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnalysisResultUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisResultSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisResultOmit<ExtArgs> | null;
    include?: Prisma.AnalysisResultInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalysisResultUpdateInput, Prisma.AnalysisResultUncheckedUpdateInput>;
    where: Prisma.AnalysisResultWhereUniqueInput;
};
export type AnalysisResultUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnalysisResultUpdateManyMutationInput, Prisma.AnalysisResultUncheckedUpdateManyInput>;
    where?: Prisma.AnalysisResultWhereInput;
    limit?: number;
};
export type AnalysisResultUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisResultSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnalysisResultOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalysisResultUpdateManyMutationInput, Prisma.AnalysisResultUncheckedUpdateManyInput>;
    where?: Prisma.AnalysisResultWhereInput;
    limit?: number;
    include?: Prisma.AnalysisResultIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnalysisResultUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisResultSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisResultOmit<ExtArgs> | null;
    include?: Prisma.AnalysisResultInclude<ExtArgs> | null;
    where: Prisma.AnalysisResultWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalysisResultCreateInput, Prisma.AnalysisResultUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnalysisResultUpdateInput, Prisma.AnalysisResultUncheckedUpdateInput>;
};
export type AnalysisResultDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisResultSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisResultOmit<ExtArgs> | null;
    include?: Prisma.AnalysisResultInclude<ExtArgs> | null;
    where: Prisma.AnalysisResultWhereUniqueInput;
};
export type AnalysisResultDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalysisResultWhereInput;
    limit?: number;
};
export type AnalysisResult$findingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnalysisResultDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisResultSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisResultOmit<ExtArgs> | null;
    include?: Prisma.AnalysisResultInclude<ExtArgs> | null;
};
