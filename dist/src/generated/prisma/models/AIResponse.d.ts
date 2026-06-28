import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AIResponseModel = runtime.Types.Result.DefaultSelection<Prisma.$AIResponsePayload>;
export type AggregateAIResponse = {
    _count: AIResponseCountAggregateOutputType | null;
    _avg: AIResponseAvgAggregateOutputType | null;
    _sum: AIResponseSumAggregateOutputType | null;
    _min: AIResponseMinAggregateOutputType | null;
    _max: AIResponseMaxAggregateOutputType | null;
};
export type AIResponseAvgAggregateOutputType = {
    confidenceScore: number | null;
};
export type AIResponseSumAggregateOutputType = {
    confidenceScore: number | null;
};
export type AIResponseMinAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    confidenceScore: number | null;
    createdAt: Date | null;
};
export type AIResponseMaxAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    confidenceScore: number | null;
    createdAt: Date | null;
};
export type AIResponseCountAggregateOutputType = {
    id: number;
    requestId: number;
    response: number;
    confidenceScore: number;
    metadata: number;
    createdAt: number;
    matchedChunks: number;
    _all: number;
};
export type AIResponseAvgAggregateInputType = {
    confidenceScore?: true;
};
export type AIResponseSumAggregateInputType = {
    confidenceScore?: true;
};
export type AIResponseMinAggregateInputType = {
    id?: true;
    requestId?: true;
    confidenceScore?: true;
    createdAt?: true;
};
export type AIResponseMaxAggregateInputType = {
    id?: true;
    requestId?: true;
    confidenceScore?: true;
    createdAt?: true;
};
export type AIResponseCountAggregateInputType = {
    id?: true;
    requestId?: true;
    response?: true;
    confidenceScore?: true;
    metadata?: true;
    createdAt?: true;
    matchedChunks?: true;
    _all?: true;
};
export type AIResponseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AIResponseWhereInput;
    orderBy?: Prisma.AIResponseOrderByWithRelationInput | Prisma.AIResponseOrderByWithRelationInput[];
    cursor?: Prisma.AIResponseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AIResponseCountAggregateInputType;
    _avg?: AIResponseAvgAggregateInputType;
    _sum?: AIResponseSumAggregateInputType;
    _min?: AIResponseMinAggregateInputType;
    _max?: AIResponseMaxAggregateInputType;
};
export type GetAIResponseAggregateType<T extends AIResponseAggregateArgs> = {
    [P in keyof T & keyof AggregateAIResponse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAIResponse[P]> : Prisma.GetScalarType<T[P], AggregateAIResponse[P]>;
};
export type AIResponseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AIResponseWhereInput;
    orderBy?: Prisma.AIResponseOrderByWithAggregationInput | Prisma.AIResponseOrderByWithAggregationInput[];
    by: Prisma.AIResponseScalarFieldEnum[] | Prisma.AIResponseScalarFieldEnum;
    having?: Prisma.AIResponseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AIResponseCountAggregateInputType | true;
    _avg?: AIResponseAvgAggregateInputType;
    _sum?: AIResponseSumAggregateInputType;
    _min?: AIResponseMinAggregateInputType;
    _max?: AIResponseMaxAggregateInputType;
};
export type AIResponseGroupByOutputType = {
    id: string;
    requestId: string;
    response: runtime.JsonValue;
    confidenceScore: number | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    matchedChunks: runtime.JsonValue | null;
    _count: AIResponseCountAggregateOutputType | null;
    _avg: AIResponseAvgAggregateOutputType | null;
    _sum: AIResponseSumAggregateOutputType | null;
    _min: AIResponseMinAggregateOutputType | null;
    _max: AIResponseMaxAggregateOutputType | null;
};
export type GetAIResponseGroupByPayload<T extends AIResponseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AIResponseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AIResponseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AIResponseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AIResponseGroupByOutputType[P]>;
}>>;
export type AIResponseWhereInput = {
    AND?: Prisma.AIResponseWhereInput | Prisma.AIResponseWhereInput[];
    OR?: Prisma.AIResponseWhereInput[];
    NOT?: Prisma.AIResponseWhereInput | Prisma.AIResponseWhereInput[];
    id?: Prisma.UuidFilter<"AIResponse"> | string;
    requestId?: Prisma.UuidFilter<"AIResponse"> | string;
    response?: Prisma.JsonFilter<"AIResponse">;
    confidenceScore?: Prisma.FloatNullableFilter<"AIResponse"> | number | null;
    metadata?: Prisma.JsonNullableFilter<"AIResponse">;
    createdAt?: Prisma.DateTimeFilter<"AIResponse"> | Date | string;
    matchedChunks?: Prisma.JsonNullableFilter<"AIResponse">;
    AnalysisRequest?: Prisma.XOR<Prisma.AnalysisRequestScalarRelationFilter, Prisma.AnalysisRequestWhereInput>;
    AnalysisResult?: Prisma.XOR<Prisma.AnalysisResultNullableScalarRelationFilter, Prisma.AnalysisResultWhereInput> | null;
};
export type AIResponseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    response?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    matchedChunks?: Prisma.SortOrderInput | Prisma.SortOrder;
    AnalysisRequest?: Prisma.AnalysisRequestOrderByWithRelationInput;
    AnalysisResult?: Prisma.AnalysisResultOrderByWithRelationInput;
};
export type AIResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    requestId?: string;
    AND?: Prisma.AIResponseWhereInput | Prisma.AIResponseWhereInput[];
    OR?: Prisma.AIResponseWhereInput[];
    NOT?: Prisma.AIResponseWhereInput | Prisma.AIResponseWhereInput[];
    response?: Prisma.JsonFilter<"AIResponse">;
    confidenceScore?: Prisma.FloatNullableFilter<"AIResponse"> | number | null;
    metadata?: Prisma.JsonNullableFilter<"AIResponse">;
    createdAt?: Prisma.DateTimeFilter<"AIResponse"> | Date | string;
    matchedChunks?: Prisma.JsonNullableFilter<"AIResponse">;
    AnalysisRequest?: Prisma.XOR<Prisma.AnalysisRequestScalarRelationFilter, Prisma.AnalysisRequestWhereInput>;
    AnalysisResult?: Prisma.XOR<Prisma.AnalysisResultNullableScalarRelationFilter, Prisma.AnalysisResultWhereInput> | null;
}, "id" | "requestId">;
export type AIResponseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    response?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    matchedChunks?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AIResponseCountOrderByAggregateInput;
    _avg?: Prisma.AIResponseAvgOrderByAggregateInput;
    _max?: Prisma.AIResponseMaxOrderByAggregateInput;
    _min?: Prisma.AIResponseMinOrderByAggregateInput;
    _sum?: Prisma.AIResponseSumOrderByAggregateInput;
};
export type AIResponseScalarWhereWithAggregatesInput = {
    AND?: Prisma.AIResponseScalarWhereWithAggregatesInput | Prisma.AIResponseScalarWhereWithAggregatesInput[];
    OR?: Prisma.AIResponseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AIResponseScalarWhereWithAggregatesInput | Prisma.AIResponseScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AIResponse"> | string;
    requestId?: Prisma.UuidWithAggregatesFilter<"AIResponse"> | string;
    response?: Prisma.JsonWithAggregatesFilter<"AIResponse">;
    confidenceScore?: Prisma.FloatNullableWithAggregatesFilter<"AIResponse"> | number | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"AIResponse">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AIResponse"> | Date | string;
    matchedChunks?: Prisma.JsonNullableWithAggregatesFilter<"AIResponse">;
};
export type AIResponseCreateInput = {
    id?: string;
    response: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    confidenceScore?: number | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    matchedChunks?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    AnalysisRequest: Prisma.AnalysisRequestCreateNestedOneWithoutResponseInput;
    AnalysisResult?: Prisma.AnalysisResultCreateNestedOneWithoutResponseInput;
};
export type AIResponseUncheckedCreateInput = {
    id?: string;
    requestId: string;
    response: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    confidenceScore?: number | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    matchedChunks?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    AnalysisResult?: Prisma.AnalysisResultUncheckedCreateNestedOneWithoutResponseInput;
};
export type AIResponseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    response?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchedChunks?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    AnalysisRequest?: Prisma.AnalysisRequestUpdateOneRequiredWithoutResponseNestedInput;
    AnalysisResult?: Prisma.AnalysisResultUpdateOneWithoutResponseNestedInput;
};
export type AIResponseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    response?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchedChunks?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    AnalysisResult?: Prisma.AnalysisResultUncheckedUpdateOneWithoutResponseNestedInput;
};
export type AIResponseCreateManyInput = {
    id?: string;
    requestId: string;
    response: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    confidenceScore?: number | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    matchedChunks?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AIResponseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    response?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchedChunks?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AIResponseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    response?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchedChunks?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AIResponseScalarRelationFilter = {
    is?: Prisma.AIResponseWhereInput;
    isNot?: Prisma.AIResponseWhereInput;
};
export type AIResponseNullableScalarRelationFilter = {
    is?: Prisma.AIResponseWhereInput | null;
    isNot?: Prisma.AIResponseWhereInput | null;
};
export type AIResponseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    response?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    matchedChunks?: Prisma.SortOrder;
};
export type AIResponseAvgOrderByAggregateInput = {
    confidenceScore?: Prisma.SortOrder;
};
export type AIResponseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AIResponseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AIResponseSumOrderByAggregateInput = {
    confidenceScore?: Prisma.SortOrder;
};
export type AIResponseCreateNestedOneWithoutAnalysisResultInput = {
    create?: Prisma.XOR<Prisma.AIResponseCreateWithoutAnalysisResultInput, Prisma.AIResponseUncheckedCreateWithoutAnalysisResultInput>;
    connectOrCreate?: Prisma.AIResponseCreateOrConnectWithoutAnalysisResultInput;
    connect?: Prisma.AIResponseWhereUniqueInput;
};
export type AIResponseUpdateOneRequiredWithoutAnalysisResultNestedInput = {
    create?: Prisma.XOR<Prisma.AIResponseCreateWithoutAnalysisResultInput, Prisma.AIResponseUncheckedCreateWithoutAnalysisResultInput>;
    connectOrCreate?: Prisma.AIResponseCreateOrConnectWithoutAnalysisResultInput;
    upsert?: Prisma.AIResponseUpsertWithoutAnalysisResultInput;
    connect?: Prisma.AIResponseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AIResponseUpdateToOneWithWhereWithoutAnalysisResultInput, Prisma.AIResponseUpdateWithoutAnalysisResultInput>, Prisma.AIResponseUncheckedUpdateWithoutAnalysisResultInput>;
};
export type AIResponseCreateNestedOneWithoutAnalysisRequestInput = {
    create?: Prisma.XOR<Prisma.AIResponseCreateWithoutAnalysisRequestInput, Prisma.AIResponseUncheckedCreateWithoutAnalysisRequestInput>;
    connectOrCreate?: Prisma.AIResponseCreateOrConnectWithoutAnalysisRequestInput;
    connect?: Prisma.AIResponseWhereUniqueInput;
};
export type AIResponseUncheckedCreateNestedOneWithoutAnalysisRequestInput = {
    create?: Prisma.XOR<Prisma.AIResponseCreateWithoutAnalysisRequestInput, Prisma.AIResponseUncheckedCreateWithoutAnalysisRequestInput>;
    connectOrCreate?: Prisma.AIResponseCreateOrConnectWithoutAnalysisRequestInput;
    connect?: Prisma.AIResponseWhereUniqueInput;
};
export type AIResponseUpdateOneWithoutAnalysisRequestNestedInput = {
    create?: Prisma.XOR<Prisma.AIResponseCreateWithoutAnalysisRequestInput, Prisma.AIResponseUncheckedCreateWithoutAnalysisRequestInput>;
    connectOrCreate?: Prisma.AIResponseCreateOrConnectWithoutAnalysisRequestInput;
    upsert?: Prisma.AIResponseUpsertWithoutAnalysisRequestInput;
    disconnect?: Prisma.AIResponseWhereInput | boolean;
    delete?: Prisma.AIResponseWhereInput | boolean;
    connect?: Prisma.AIResponseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AIResponseUpdateToOneWithWhereWithoutAnalysisRequestInput, Prisma.AIResponseUpdateWithoutAnalysisRequestInput>, Prisma.AIResponseUncheckedUpdateWithoutAnalysisRequestInput>;
};
export type AIResponseUncheckedUpdateOneWithoutAnalysisRequestNestedInput = {
    create?: Prisma.XOR<Prisma.AIResponseCreateWithoutAnalysisRequestInput, Prisma.AIResponseUncheckedCreateWithoutAnalysisRequestInput>;
    connectOrCreate?: Prisma.AIResponseCreateOrConnectWithoutAnalysisRequestInput;
    upsert?: Prisma.AIResponseUpsertWithoutAnalysisRequestInput;
    disconnect?: Prisma.AIResponseWhereInput | boolean;
    delete?: Prisma.AIResponseWhereInput | boolean;
    connect?: Prisma.AIResponseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AIResponseUpdateToOneWithWhereWithoutAnalysisRequestInput, Prisma.AIResponseUpdateWithoutAnalysisRequestInput>, Prisma.AIResponseUncheckedUpdateWithoutAnalysisRequestInput>;
};
export type AIResponseCreateWithoutAnalysisResultInput = {
    id?: string;
    response: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    confidenceScore?: number | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    matchedChunks?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    AnalysisRequest: Prisma.AnalysisRequestCreateNestedOneWithoutResponseInput;
};
export type AIResponseUncheckedCreateWithoutAnalysisResultInput = {
    id?: string;
    requestId: string;
    response: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    confidenceScore?: number | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    matchedChunks?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AIResponseCreateOrConnectWithoutAnalysisResultInput = {
    where: Prisma.AIResponseWhereUniqueInput;
    create: Prisma.XOR<Prisma.AIResponseCreateWithoutAnalysisResultInput, Prisma.AIResponseUncheckedCreateWithoutAnalysisResultInput>;
};
export type AIResponseUpsertWithoutAnalysisResultInput = {
    update: Prisma.XOR<Prisma.AIResponseUpdateWithoutAnalysisResultInput, Prisma.AIResponseUncheckedUpdateWithoutAnalysisResultInput>;
    create: Prisma.XOR<Prisma.AIResponseCreateWithoutAnalysisResultInput, Prisma.AIResponseUncheckedCreateWithoutAnalysisResultInput>;
    where?: Prisma.AIResponseWhereInput;
};
export type AIResponseUpdateToOneWithWhereWithoutAnalysisResultInput = {
    where?: Prisma.AIResponseWhereInput;
    data: Prisma.XOR<Prisma.AIResponseUpdateWithoutAnalysisResultInput, Prisma.AIResponseUncheckedUpdateWithoutAnalysisResultInput>;
};
export type AIResponseUpdateWithoutAnalysisResultInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    response?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchedChunks?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    AnalysisRequest?: Prisma.AnalysisRequestUpdateOneRequiredWithoutResponseNestedInput;
};
export type AIResponseUncheckedUpdateWithoutAnalysisResultInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    response?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchedChunks?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AIResponseCreateWithoutAnalysisRequestInput = {
    id?: string;
    response: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    confidenceScore?: number | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    matchedChunks?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    AnalysisResult?: Prisma.AnalysisResultCreateNestedOneWithoutResponseInput;
};
export type AIResponseUncheckedCreateWithoutAnalysisRequestInput = {
    id?: string;
    response: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    confidenceScore?: number | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    matchedChunks?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    AnalysisResult?: Prisma.AnalysisResultUncheckedCreateNestedOneWithoutResponseInput;
};
export type AIResponseCreateOrConnectWithoutAnalysisRequestInput = {
    where: Prisma.AIResponseWhereUniqueInput;
    create: Prisma.XOR<Prisma.AIResponseCreateWithoutAnalysisRequestInput, Prisma.AIResponseUncheckedCreateWithoutAnalysisRequestInput>;
};
export type AIResponseUpsertWithoutAnalysisRequestInput = {
    update: Prisma.XOR<Prisma.AIResponseUpdateWithoutAnalysisRequestInput, Prisma.AIResponseUncheckedUpdateWithoutAnalysisRequestInput>;
    create: Prisma.XOR<Prisma.AIResponseCreateWithoutAnalysisRequestInput, Prisma.AIResponseUncheckedCreateWithoutAnalysisRequestInput>;
    where?: Prisma.AIResponseWhereInput;
};
export type AIResponseUpdateToOneWithWhereWithoutAnalysisRequestInput = {
    where?: Prisma.AIResponseWhereInput;
    data: Prisma.XOR<Prisma.AIResponseUpdateWithoutAnalysisRequestInput, Prisma.AIResponseUncheckedUpdateWithoutAnalysisRequestInput>;
};
export type AIResponseUpdateWithoutAnalysisRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    response?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchedChunks?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    AnalysisResult?: Prisma.AnalysisResultUpdateOneWithoutResponseNestedInput;
};
export type AIResponseUncheckedUpdateWithoutAnalysisRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    response?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchedChunks?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    AnalysisResult?: Prisma.AnalysisResultUncheckedUpdateOneWithoutResponseNestedInput;
};
export type AIResponseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    response?: boolean;
    confidenceScore?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    matchedChunks?: boolean;
    AnalysisRequest?: boolean | Prisma.AnalysisRequestDefaultArgs<ExtArgs>;
    AnalysisResult?: boolean | Prisma.AIResponse$AnalysisResultArgs<ExtArgs>;
}, ExtArgs["result"]["aIResponse"]>;
export type AIResponseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    response?: boolean;
    confidenceScore?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    matchedChunks?: boolean;
    AnalysisRequest?: boolean | Prisma.AnalysisRequestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aIResponse"]>;
export type AIResponseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    response?: boolean;
    confidenceScore?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    matchedChunks?: boolean;
    AnalysisRequest?: boolean | Prisma.AnalysisRequestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aIResponse"]>;
export type AIResponseSelectScalar = {
    id?: boolean;
    requestId?: boolean;
    response?: boolean;
    confidenceScore?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    matchedChunks?: boolean;
};
export type AIResponseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requestId" | "response" | "confidenceScore" | "metadata" | "createdAt" | "matchedChunks", ExtArgs["result"]["aIResponse"]>;
export type AIResponseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    AnalysisRequest?: boolean | Prisma.AnalysisRequestDefaultArgs<ExtArgs>;
    AnalysisResult?: boolean | Prisma.AIResponse$AnalysisResultArgs<ExtArgs>;
};
export type AIResponseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    AnalysisRequest?: boolean | Prisma.AnalysisRequestDefaultArgs<ExtArgs>;
};
export type AIResponseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    AnalysisRequest?: boolean | Prisma.AnalysisRequestDefaultArgs<ExtArgs>;
};
export type $AIResponsePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AIResponse";
    objects: {
        AnalysisRequest: Prisma.$AnalysisRequestPayload<ExtArgs>;
        AnalysisResult: Prisma.$AnalysisResultPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        requestId: string;
        response: runtime.JsonValue;
        confidenceScore: number | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
        matchedChunks: runtime.JsonValue | null;
    }, ExtArgs["result"]["aIResponse"]>;
    composites: {};
};
export type AIResponseGetPayload<S extends boolean | null | undefined | AIResponseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AIResponsePayload, S>;
export type AIResponseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AIResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AIResponseCountAggregateInputType | true;
};
export interface AIResponseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AIResponse'];
        meta: {
            name: 'AIResponse';
        };
    };
    findUnique<T extends AIResponseFindUniqueArgs>(args: Prisma.SelectSubset<T, AIResponseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AIResponseClient<runtime.Types.Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AIResponseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AIResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AIResponseClient<runtime.Types.Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AIResponseFindFirstArgs>(args?: Prisma.SelectSubset<T, AIResponseFindFirstArgs<ExtArgs>>): Prisma.Prisma__AIResponseClient<runtime.Types.Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AIResponseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AIResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AIResponseClient<runtime.Types.Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AIResponseFindManyArgs>(args?: Prisma.SelectSubset<T, AIResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AIResponseCreateArgs>(args: Prisma.SelectSubset<T, AIResponseCreateArgs<ExtArgs>>): Prisma.Prisma__AIResponseClient<runtime.Types.Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AIResponseCreateManyArgs>(args?: Prisma.SelectSubset<T, AIResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AIResponseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AIResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AIResponseDeleteArgs>(args: Prisma.SelectSubset<T, AIResponseDeleteArgs<ExtArgs>>): Prisma.Prisma__AIResponseClient<runtime.Types.Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AIResponseUpdateArgs>(args: Prisma.SelectSubset<T, AIResponseUpdateArgs<ExtArgs>>): Prisma.Prisma__AIResponseClient<runtime.Types.Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AIResponseDeleteManyArgs>(args?: Prisma.SelectSubset<T, AIResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AIResponseUpdateManyArgs>(args: Prisma.SelectSubset<T, AIResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AIResponseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AIResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AIResponseUpsertArgs>(args: Prisma.SelectSubset<T, AIResponseUpsertArgs<ExtArgs>>): Prisma.Prisma__AIResponseClient<runtime.Types.Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AIResponseCountArgs>(args?: Prisma.Subset<T, AIResponseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AIResponseCountAggregateOutputType> : number>;
    aggregate<T extends AIResponseAggregateArgs>(args: Prisma.Subset<T, AIResponseAggregateArgs>): Prisma.PrismaPromise<GetAIResponseAggregateType<T>>;
    groupBy<T extends AIResponseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AIResponseGroupByArgs['orderBy'];
    } : {
        orderBy?: AIResponseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AIResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AIResponseFieldRefs;
}
export interface Prisma__AIResponseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    AnalysisRequest<T extends Prisma.AnalysisRequestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnalysisRequestDefaultArgs<ExtArgs>>): Prisma.Prisma__AnalysisRequestClient<runtime.Types.Result.GetResult<Prisma.$AnalysisRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    AnalysisResult<T extends Prisma.AIResponse$AnalysisResultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AIResponse$AnalysisResultArgs<ExtArgs>>): Prisma.Prisma__AnalysisResultClient<runtime.Types.Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AIResponseFieldRefs {
    readonly id: Prisma.FieldRef<"AIResponse", 'String'>;
    readonly requestId: Prisma.FieldRef<"AIResponse", 'String'>;
    readonly response: Prisma.FieldRef<"AIResponse", 'Json'>;
    readonly confidenceScore: Prisma.FieldRef<"AIResponse", 'Float'>;
    readonly metadata: Prisma.FieldRef<"AIResponse", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"AIResponse", 'DateTime'>;
    readonly matchedChunks: Prisma.FieldRef<"AIResponse", 'Json'>;
}
export type AIResponseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIResponseSelect<ExtArgs> | null;
    omit?: Prisma.AIResponseOmit<ExtArgs> | null;
    include?: Prisma.AIResponseInclude<ExtArgs> | null;
    where: Prisma.AIResponseWhereUniqueInput;
};
export type AIResponseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIResponseSelect<ExtArgs> | null;
    omit?: Prisma.AIResponseOmit<ExtArgs> | null;
    include?: Prisma.AIResponseInclude<ExtArgs> | null;
    where: Prisma.AIResponseWhereUniqueInput;
};
export type AIResponseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AIResponseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AIResponseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AIResponseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIResponseSelect<ExtArgs> | null;
    omit?: Prisma.AIResponseOmit<ExtArgs> | null;
    include?: Prisma.AIResponseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AIResponseCreateInput, Prisma.AIResponseUncheckedCreateInput>;
};
export type AIResponseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AIResponseCreateManyInput | Prisma.AIResponseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AIResponseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIResponseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AIResponseOmit<ExtArgs> | null;
    data: Prisma.AIResponseCreateManyInput | Prisma.AIResponseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AIResponseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AIResponseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIResponseSelect<ExtArgs> | null;
    omit?: Prisma.AIResponseOmit<ExtArgs> | null;
    include?: Prisma.AIResponseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AIResponseUpdateInput, Prisma.AIResponseUncheckedUpdateInput>;
    where: Prisma.AIResponseWhereUniqueInput;
};
export type AIResponseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AIResponseUpdateManyMutationInput, Prisma.AIResponseUncheckedUpdateManyInput>;
    where?: Prisma.AIResponseWhereInput;
    limit?: number;
};
export type AIResponseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIResponseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AIResponseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AIResponseUpdateManyMutationInput, Prisma.AIResponseUncheckedUpdateManyInput>;
    where?: Prisma.AIResponseWhereInput;
    limit?: number;
    include?: Prisma.AIResponseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AIResponseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIResponseSelect<ExtArgs> | null;
    omit?: Prisma.AIResponseOmit<ExtArgs> | null;
    include?: Prisma.AIResponseInclude<ExtArgs> | null;
    where: Prisma.AIResponseWhereUniqueInput;
    create: Prisma.XOR<Prisma.AIResponseCreateInput, Prisma.AIResponseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AIResponseUpdateInput, Prisma.AIResponseUncheckedUpdateInput>;
};
export type AIResponseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIResponseSelect<ExtArgs> | null;
    omit?: Prisma.AIResponseOmit<ExtArgs> | null;
    include?: Prisma.AIResponseInclude<ExtArgs> | null;
    where: Prisma.AIResponseWhereUniqueInput;
};
export type AIResponseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AIResponseWhereInput;
    limit?: number;
};
export type AIResponse$AnalysisResultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalysisResultSelect<ExtArgs> | null;
    omit?: Prisma.AnalysisResultOmit<ExtArgs> | null;
    include?: Prisma.AnalysisResultInclude<ExtArgs> | null;
    where?: Prisma.AnalysisResultWhereInput;
};
export type AIResponseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIResponseSelect<ExtArgs> | null;
    omit?: Prisma.AIResponseOmit<ExtArgs> | null;
    include?: Prisma.AIResponseInclude<ExtArgs> | null;
};
