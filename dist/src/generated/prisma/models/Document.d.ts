import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentPayload>;
export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null;
    _avg: DocumentAvgAggregateOutputType | null;
    _sum: DocumentSumAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
};
export type DocumentAvgAggregateOutputType = {
    fileSize: number | null;
    pageCount: number | null;
    totalChunks: number | null;
};
export type DocumentSumAggregateOutputType = {
    fileSize: number | null;
    pageCount: number | null;
    totalChunks: number | null;
};
export type DocumentMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    uploadedBy: string | null;
    originalFileName: string | null;
    mimeType: string | null;
    checksum: string | null;
    fileSize: number | null;
    pageCount: number | null;
    totalChunks: number | null;
    language: string | null;
    status: $Enums.DocumentStatus | null;
    expirationDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DocumentMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    uploadedBy: string | null;
    originalFileName: string | null;
    mimeType: string | null;
    checksum: string | null;
    fileSize: number | null;
    pageCount: number | null;
    totalChunks: number | null;
    language: string | null;
    status: $Enums.DocumentStatus | null;
    expirationDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DocumentCountAggregateOutputType = {
    id: number;
    organizationId: number;
    uploadedBy: number;
    originalFileName: number;
    mimeType: number;
    checksum: number;
    fileSize: number;
    pageCount: number;
    totalChunks: number;
    language: number;
    status: number;
    expirationDate: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DocumentAvgAggregateInputType = {
    fileSize?: true;
    pageCount?: true;
    totalChunks?: true;
};
export type DocumentSumAggregateInputType = {
    fileSize?: true;
    pageCount?: true;
    totalChunks?: true;
};
export type DocumentMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    uploadedBy?: true;
    originalFileName?: true;
    mimeType?: true;
    checksum?: true;
    fileSize?: true;
    pageCount?: true;
    totalChunks?: true;
    language?: true;
    status?: true;
    expirationDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DocumentMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    uploadedBy?: true;
    originalFileName?: true;
    mimeType?: true;
    checksum?: true;
    fileSize?: true;
    pageCount?: true;
    totalChunks?: true;
    language?: true;
    status?: true;
    expirationDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DocumentCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    uploadedBy?: true;
    originalFileName?: true;
    mimeType?: true;
    checksum?: true;
    fileSize?: true;
    pageCount?: true;
    totalChunks?: true;
    language?: true;
    status?: true;
    expirationDate?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DocumentCountAggregateInputType;
    _avg?: DocumentAvgAggregateInputType;
    _sum?: DocumentSumAggregateInputType;
    _min?: DocumentMinAggregateInputType;
    _max?: DocumentMaxAggregateInputType;
};
export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocument[P]> : Prisma.GetScalarType<T[P], AggregateDocument[P]>;
};
export type DocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithAggregationInput | Prisma.DocumentOrderByWithAggregationInput[];
    by: Prisma.DocumentScalarFieldEnum[] | Prisma.DocumentScalarFieldEnum;
    having?: Prisma.DocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentCountAggregateInputType | true;
    _avg?: DocumentAvgAggregateInputType;
    _sum?: DocumentSumAggregateInputType;
    _min?: DocumentMinAggregateInputType;
    _max?: DocumentMaxAggregateInputType;
};
export type DocumentGroupByOutputType = {
    id: string;
    organizationId: string | null;
    uploadedBy: string | null;
    originalFileName: string;
    mimeType: string | null;
    checksum: string | null;
    fileSize: number | null;
    pageCount: number | null;
    totalChunks: number | null;
    language: string | null;
    status: $Enums.DocumentStatus;
    expirationDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DocumentCountAggregateOutputType | null;
    _avg: DocumentAvgAggregateOutputType | null;
    _sum: DocumentSumAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
};
export type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentGroupByOutputType[P]>;
}>>;
export type DocumentWhereInput = {
    AND?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    OR?: Prisma.DocumentWhereInput[];
    NOT?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    id?: Prisma.UuidFilter<"Document"> | string;
    organizationId?: Prisma.UuidNullableFilter<"Document"> | string | null;
    uploadedBy?: Prisma.UuidNullableFilter<"Document"> | string | null;
    originalFileName?: Prisma.StringFilter<"Document"> | string;
    mimeType?: Prisma.StringNullableFilter<"Document"> | string | null;
    checksum?: Prisma.StringNullableFilter<"Document"> | string | null;
    fileSize?: Prisma.IntNullableFilter<"Document"> | number | null;
    pageCount?: Prisma.IntNullableFilter<"Document"> | number | null;
    totalChunks?: Prisma.IntNullableFilter<"Document"> | number | null;
    language?: Prisma.StringNullableFilter<"Document"> | string | null;
    status?: Prisma.EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus;
    expirationDate?: Prisma.DateTimeNullableFilter<"Document"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationNullableScalarRelationFilter, Prisma.OrganizationWhereInput> | null;
    uploader?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    chunks?: Prisma.DocumentChunkListRelationFilter;
    analysisRequests?: Prisma.AnalysisRequestListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
};
export type DocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalFileName?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrderInput | Prisma.SortOrder;
    checksum?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileSize?: Prisma.SortOrderInput | Prisma.SortOrder;
    pageCount?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalChunks?: Prisma.SortOrderInput | Prisma.SortOrder;
    language?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expirationDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    uploader?: Prisma.ProfileOrderByWithRelationInput;
    chunks?: Prisma.DocumentChunkOrderByRelationAggregateInput;
    analysisRequests?: Prisma.AnalysisRequestOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
};
export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    OR?: Prisma.DocumentWhereInput[];
    NOT?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    organizationId?: Prisma.UuidNullableFilter<"Document"> | string | null;
    uploadedBy?: Prisma.UuidNullableFilter<"Document"> | string | null;
    originalFileName?: Prisma.StringFilter<"Document"> | string;
    mimeType?: Prisma.StringNullableFilter<"Document"> | string | null;
    checksum?: Prisma.StringNullableFilter<"Document"> | string | null;
    fileSize?: Prisma.IntNullableFilter<"Document"> | number | null;
    pageCount?: Prisma.IntNullableFilter<"Document"> | number | null;
    totalChunks?: Prisma.IntNullableFilter<"Document"> | number | null;
    language?: Prisma.StringNullableFilter<"Document"> | string | null;
    status?: Prisma.EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus;
    expirationDate?: Prisma.DateTimeNullableFilter<"Document"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationNullableScalarRelationFilter, Prisma.OrganizationWhereInput> | null;
    uploader?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    chunks?: Prisma.DocumentChunkListRelationFilter;
    analysisRequests?: Prisma.AnalysisRequestListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
}, "id">;
export type DocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalFileName?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrderInput | Prisma.SortOrder;
    checksum?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileSize?: Prisma.SortOrderInput | Prisma.SortOrder;
    pageCount?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalChunks?: Prisma.SortOrderInput | Prisma.SortOrder;
    language?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expirationDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DocumentCountOrderByAggregateInput;
    _avg?: Prisma.DocumentAvgOrderByAggregateInput;
    _max?: Prisma.DocumentMaxOrderByAggregateInput;
    _min?: Prisma.DocumentMinOrderByAggregateInput;
    _sum?: Prisma.DocumentSumOrderByAggregateInput;
};
export type DocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentScalarWhereWithAggregatesInput | Prisma.DocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentScalarWhereWithAggregatesInput | Prisma.DocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Document"> | string;
    organizationId?: Prisma.UuidNullableWithAggregatesFilter<"Document"> | string | null;
    uploadedBy?: Prisma.UuidNullableWithAggregatesFilter<"Document"> | string | null;
    originalFileName?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    mimeType?: Prisma.StringNullableWithAggregatesFilter<"Document"> | string | null;
    checksum?: Prisma.StringNullableWithAggregatesFilter<"Document"> | string | null;
    fileSize?: Prisma.IntNullableWithAggregatesFilter<"Document"> | number | null;
    pageCount?: Prisma.IntNullableWithAggregatesFilter<"Document"> | number | null;
    totalChunks?: Prisma.IntNullableWithAggregatesFilter<"Document"> | number | null;
    language?: Prisma.StringNullableWithAggregatesFilter<"Document"> | string | null;
    status?: Prisma.EnumDocumentStatusWithAggregatesFilter<"Document"> | $Enums.DocumentStatus;
    expirationDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Document"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Document"> | Date | string;
};
export type DocumentCreateInput = {
    id?: string;
    originalFileName: string;
    mimeType?: string | null;
    checksum?: string | null;
    fileSize?: number | null;
    pageCount?: number | null;
    totalChunks?: number | null;
    language?: string | null;
    status?: $Enums.DocumentStatus;
    expirationDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutDocumentsInput;
    uploader?: Prisma.ProfileCreateNestedOneWithoutDocumentsInput;
    chunks?: Prisma.DocumentChunkCreateNestedManyWithoutDocumentInput;
    analysisRequests?: Prisma.AnalysisRequestCreateNestedManyWithoutDocumentInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutDocumentInput;
};
export type DocumentUncheckedCreateInput = {
    id?: string;
    organizationId?: string | null;
    uploadedBy?: string | null;
    originalFileName: string;
    mimeType?: string | null;
    checksum?: string | null;
    fileSize?: number | null;
    pageCount?: number | null;
    totalChunks?: number | null;
    language?: string | null;
    status?: $Enums.DocumentStatus;
    expirationDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chunks?: Prisma.DocumentChunkUncheckedCreateNestedManyWithoutDocumentInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedCreateNestedManyWithoutDocumentInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutDocumentInput;
};
export type DocumentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutDocumentsNestedInput;
    uploader?: Prisma.ProfileUpdateOneWithoutDocumentsNestedInput;
    chunks?: Prisma.DocumentChunkUpdateManyWithoutDocumentNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUpdateManyWithoutDocumentNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutDocumentNestedInput;
};
export type DocumentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chunks?: Prisma.DocumentChunkUncheckedUpdateManyWithoutDocumentNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedUpdateManyWithoutDocumentNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutDocumentNestedInput;
};
export type DocumentCreateManyInput = {
    id?: string;
    organizationId?: string | null;
    uploadedBy?: string | null;
    originalFileName: string;
    mimeType?: string | null;
    checksum?: string | null;
    fileSize?: number | null;
    pageCount?: number | null;
    totalChunks?: number | null;
    language?: string | null;
    status?: $Enums.DocumentStatus;
    expirationDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentListRelationFilter = {
    every?: Prisma.DocumentWhereInput;
    some?: Prisma.DocumentWhereInput;
    none?: Prisma.DocumentWhereInput;
};
export type DocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    uploadedBy?: Prisma.SortOrder;
    originalFileName?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    pageCount?: Prisma.SortOrder;
    totalChunks?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expirationDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DocumentAvgOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
    pageCount?: Prisma.SortOrder;
    totalChunks?: Prisma.SortOrder;
};
export type DocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    uploadedBy?: Prisma.SortOrder;
    originalFileName?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    pageCount?: Prisma.SortOrder;
    totalChunks?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expirationDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    uploadedBy?: Prisma.SortOrder;
    originalFileName?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    pageCount?: Prisma.SortOrder;
    totalChunks?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expirationDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DocumentSumOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
    pageCount?: Prisma.SortOrder;
    totalChunks?: Prisma.SortOrder;
};
export type DocumentScalarRelationFilter = {
    is?: Prisma.DocumentWhereInput;
    isNot?: Prisma.DocumentWhereInput;
};
export type DocumentNullableScalarRelationFilter = {
    is?: Prisma.DocumentWhereInput | null;
    isNot?: Prisma.DocumentWhereInput | null;
};
export type DocumentCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutOrganizationInput, Prisma.DocumentUncheckedCreateWithoutOrganizationInput> | Prisma.DocumentCreateWithoutOrganizationInput[] | Prisma.DocumentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutOrganizationInput | Prisma.DocumentCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.DocumentCreateManyOrganizationInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutOrganizationInput, Prisma.DocumentUncheckedCreateWithoutOrganizationInput> | Prisma.DocumentCreateWithoutOrganizationInput[] | Prisma.DocumentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutOrganizationInput | Prisma.DocumentCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.DocumentCreateManyOrganizationInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutOrganizationInput, Prisma.DocumentUncheckedCreateWithoutOrganizationInput> | Prisma.DocumentCreateWithoutOrganizationInput[] | Prisma.DocumentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutOrganizationInput | Prisma.DocumentCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.DocumentUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.DocumentCreateManyOrganizationInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.DocumentUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutOrganizationInput | Prisma.DocumentUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type DocumentUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutOrganizationInput, Prisma.DocumentUncheckedCreateWithoutOrganizationInput> | Prisma.DocumentCreateWithoutOrganizationInput[] | Prisma.DocumentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutOrganizationInput | Prisma.DocumentCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.DocumentUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.DocumentCreateManyOrganizationInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.DocumentUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutOrganizationInput | Prisma.DocumentUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type DocumentCreateNestedManyWithoutUploaderInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUploaderInput, Prisma.DocumentUncheckedCreateWithoutUploaderInput> | Prisma.DocumentCreateWithoutUploaderInput[] | Prisma.DocumentUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUploaderInput | Prisma.DocumentCreateOrConnectWithoutUploaderInput[];
    createMany?: Prisma.DocumentCreateManyUploaderInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUploaderInput, Prisma.DocumentUncheckedCreateWithoutUploaderInput> | Prisma.DocumentCreateWithoutUploaderInput[] | Prisma.DocumentUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUploaderInput | Prisma.DocumentCreateOrConnectWithoutUploaderInput[];
    createMany?: Prisma.DocumentCreateManyUploaderInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUpdateManyWithoutUploaderNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUploaderInput, Prisma.DocumentUncheckedCreateWithoutUploaderInput> | Prisma.DocumentCreateWithoutUploaderInput[] | Prisma.DocumentUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUploaderInput | Prisma.DocumentCreateOrConnectWithoutUploaderInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutUploaderInput | Prisma.DocumentUpsertWithWhereUniqueWithoutUploaderInput[];
    createMany?: Prisma.DocumentCreateManyUploaderInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutUploaderInput | Prisma.DocumentUpdateWithWhereUniqueWithoutUploaderInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutUploaderInput | Prisma.DocumentUpdateManyWithWhereWithoutUploaderInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type DocumentUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUploaderInput, Prisma.DocumentUncheckedCreateWithoutUploaderInput> | Prisma.DocumentCreateWithoutUploaderInput[] | Prisma.DocumentUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUploaderInput | Prisma.DocumentCreateOrConnectWithoutUploaderInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutUploaderInput | Prisma.DocumentUpsertWithWhereUniqueWithoutUploaderInput[];
    createMany?: Prisma.DocumentCreateManyUploaderInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutUploaderInput | Prisma.DocumentUpdateWithWhereUniqueWithoutUploaderInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutUploaderInput | Prisma.DocumentUpdateManyWithWhereWithoutUploaderInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocumentStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DocumentCreateNestedOneWithoutChunksInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutChunksInput, Prisma.DocumentUncheckedCreateWithoutChunksInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutChunksInput;
    connect?: Prisma.DocumentWhereUniqueInput;
};
export type DocumentUpdateOneRequiredWithoutChunksNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutChunksInput, Prisma.DocumentUncheckedCreateWithoutChunksInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutChunksInput;
    upsert?: Prisma.DocumentUpsertWithoutChunksInput;
    connect?: Prisma.DocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentUpdateToOneWithWhereWithoutChunksInput, Prisma.DocumentUpdateWithoutChunksInput>, Prisma.DocumentUncheckedUpdateWithoutChunksInput>;
};
export type DocumentCreateNestedOneWithoutAnalysisRequestsInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutAnalysisRequestsInput, Prisma.DocumentUncheckedCreateWithoutAnalysisRequestsInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutAnalysisRequestsInput;
    connect?: Prisma.DocumentWhereUniqueInput;
};
export type DocumentUpdateOneWithoutAnalysisRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutAnalysisRequestsInput, Prisma.DocumentUncheckedCreateWithoutAnalysisRequestsInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutAnalysisRequestsInput;
    upsert?: Prisma.DocumentUpsertWithoutAnalysisRequestsInput;
    disconnect?: Prisma.DocumentWhereInput | boolean;
    delete?: Prisma.DocumentWhereInput | boolean;
    connect?: Prisma.DocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentUpdateToOneWithWhereWithoutAnalysisRequestsInput, Prisma.DocumentUpdateWithoutAnalysisRequestsInput>, Prisma.DocumentUncheckedUpdateWithoutAnalysisRequestsInput>;
};
export type DocumentCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutNotificationsInput, Prisma.DocumentUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.DocumentWhereUniqueInput;
};
export type DocumentUpdateOneWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutNotificationsInput, Prisma.DocumentUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.DocumentUpsertWithoutNotificationsInput;
    disconnect?: Prisma.DocumentWhereInput | boolean;
    delete?: Prisma.DocumentWhereInput | boolean;
    connect?: Prisma.DocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentUpdateToOneWithWhereWithoutNotificationsInput, Prisma.DocumentUpdateWithoutNotificationsInput>, Prisma.DocumentUncheckedUpdateWithoutNotificationsInput>;
};
export type DocumentCreateWithoutOrganizationInput = {
    id?: string;
    originalFileName: string;
    mimeType?: string | null;
    checksum?: string | null;
    fileSize?: number | null;
    pageCount?: number | null;
    totalChunks?: number | null;
    language?: string | null;
    status?: $Enums.DocumentStatus;
    expirationDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    uploader?: Prisma.ProfileCreateNestedOneWithoutDocumentsInput;
    chunks?: Prisma.DocumentChunkCreateNestedManyWithoutDocumentInput;
    analysisRequests?: Prisma.AnalysisRequestCreateNestedManyWithoutDocumentInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutDocumentInput;
};
export type DocumentUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    uploadedBy?: string | null;
    originalFileName: string;
    mimeType?: string | null;
    checksum?: string | null;
    fileSize?: number | null;
    pageCount?: number | null;
    totalChunks?: number | null;
    language?: string | null;
    status?: $Enums.DocumentStatus;
    expirationDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chunks?: Prisma.DocumentChunkUncheckedCreateNestedManyWithoutDocumentInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedCreateNestedManyWithoutDocumentInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutDocumentInput;
};
export type DocumentCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutOrganizationInput, Prisma.DocumentUncheckedCreateWithoutOrganizationInput>;
};
export type DocumentCreateManyOrganizationInputEnvelope = {
    data: Prisma.DocumentCreateManyOrganizationInput | Prisma.DocumentCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type DocumentUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.DocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutOrganizationInput, Prisma.DocumentUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutOrganizationInput, Prisma.DocumentUncheckedCreateWithoutOrganizationInput>;
};
export type DocumentUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.DocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutOrganizationInput, Prisma.DocumentUncheckedUpdateWithoutOrganizationInput>;
};
export type DocumentUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.DocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyWithoutOrganizationInput>;
};
export type DocumentScalarWhereInput = {
    AND?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
    OR?: Prisma.DocumentScalarWhereInput[];
    NOT?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
    id?: Prisma.UuidFilter<"Document"> | string;
    organizationId?: Prisma.UuidNullableFilter<"Document"> | string | null;
    uploadedBy?: Prisma.UuidNullableFilter<"Document"> | string | null;
    originalFileName?: Prisma.StringFilter<"Document"> | string;
    mimeType?: Prisma.StringNullableFilter<"Document"> | string | null;
    checksum?: Prisma.StringNullableFilter<"Document"> | string | null;
    fileSize?: Prisma.IntNullableFilter<"Document"> | number | null;
    pageCount?: Prisma.IntNullableFilter<"Document"> | number | null;
    totalChunks?: Prisma.IntNullableFilter<"Document"> | number | null;
    language?: Prisma.StringNullableFilter<"Document"> | string | null;
    status?: Prisma.EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus;
    expirationDate?: Prisma.DateTimeNullableFilter<"Document"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
};
export type DocumentCreateWithoutUploaderInput = {
    id?: string;
    originalFileName: string;
    mimeType?: string | null;
    checksum?: string | null;
    fileSize?: number | null;
    pageCount?: number | null;
    totalChunks?: number | null;
    language?: string | null;
    status?: $Enums.DocumentStatus;
    expirationDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutDocumentsInput;
    chunks?: Prisma.DocumentChunkCreateNestedManyWithoutDocumentInput;
    analysisRequests?: Prisma.AnalysisRequestCreateNestedManyWithoutDocumentInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutDocumentInput;
};
export type DocumentUncheckedCreateWithoutUploaderInput = {
    id?: string;
    organizationId?: string | null;
    originalFileName: string;
    mimeType?: string | null;
    checksum?: string | null;
    fileSize?: number | null;
    pageCount?: number | null;
    totalChunks?: number | null;
    language?: string | null;
    status?: $Enums.DocumentStatus;
    expirationDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chunks?: Prisma.DocumentChunkUncheckedCreateNestedManyWithoutDocumentInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedCreateNestedManyWithoutDocumentInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutDocumentInput;
};
export type DocumentCreateOrConnectWithoutUploaderInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutUploaderInput, Prisma.DocumentUncheckedCreateWithoutUploaderInput>;
};
export type DocumentCreateManyUploaderInputEnvelope = {
    data: Prisma.DocumentCreateManyUploaderInput | Prisma.DocumentCreateManyUploaderInput[];
    skipDuplicates?: boolean;
};
export type DocumentUpsertWithWhereUniqueWithoutUploaderInput = {
    where: Prisma.DocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutUploaderInput, Prisma.DocumentUncheckedUpdateWithoutUploaderInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutUploaderInput, Prisma.DocumentUncheckedCreateWithoutUploaderInput>;
};
export type DocumentUpdateWithWhereUniqueWithoutUploaderInput = {
    where: Prisma.DocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutUploaderInput, Prisma.DocumentUncheckedUpdateWithoutUploaderInput>;
};
export type DocumentUpdateManyWithWhereWithoutUploaderInput = {
    where: Prisma.DocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyWithoutUploaderInput>;
};
export type DocumentCreateWithoutChunksInput = {
    id?: string;
    originalFileName: string;
    mimeType?: string | null;
    checksum?: string | null;
    fileSize?: number | null;
    pageCount?: number | null;
    totalChunks?: number | null;
    language?: string | null;
    status?: $Enums.DocumentStatus;
    expirationDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutDocumentsInput;
    uploader?: Prisma.ProfileCreateNestedOneWithoutDocumentsInput;
    analysisRequests?: Prisma.AnalysisRequestCreateNestedManyWithoutDocumentInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutDocumentInput;
};
export type DocumentUncheckedCreateWithoutChunksInput = {
    id?: string;
    organizationId?: string | null;
    uploadedBy?: string | null;
    originalFileName: string;
    mimeType?: string | null;
    checksum?: string | null;
    fileSize?: number | null;
    pageCount?: number | null;
    totalChunks?: number | null;
    language?: string | null;
    status?: $Enums.DocumentStatus;
    expirationDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    analysisRequests?: Prisma.AnalysisRequestUncheckedCreateNestedManyWithoutDocumentInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutDocumentInput;
};
export type DocumentCreateOrConnectWithoutChunksInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutChunksInput, Prisma.DocumentUncheckedCreateWithoutChunksInput>;
};
export type DocumentUpsertWithoutChunksInput = {
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutChunksInput, Prisma.DocumentUncheckedUpdateWithoutChunksInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutChunksInput, Prisma.DocumentUncheckedCreateWithoutChunksInput>;
    where?: Prisma.DocumentWhereInput;
};
export type DocumentUpdateToOneWithWhereWithoutChunksInput = {
    where?: Prisma.DocumentWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutChunksInput, Prisma.DocumentUncheckedUpdateWithoutChunksInput>;
};
export type DocumentUpdateWithoutChunksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutDocumentsNestedInput;
    uploader?: Prisma.ProfileUpdateOneWithoutDocumentsNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUpdateManyWithoutDocumentNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutDocumentNestedInput;
};
export type DocumentUncheckedUpdateWithoutChunksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    analysisRequests?: Prisma.AnalysisRequestUncheckedUpdateManyWithoutDocumentNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutDocumentNestedInput;
};
export type DocumentCreateWithoutAnalysisRequestsInput = {
    id?: string;
    originalFileName: string;
    mimeType?: string | null;
    checksum?: string | null;
    fileSize?: number | null;
    pageCount?: number | null;
    totalChunks?: number | null;
    language?: string | null;
    status?: $Enums.DocumentStatus;
    expirationDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutDocumentsInput;
    uploader?: Prisma.ProfileCreateNestedOneWithoutDocumentsInput;
    chunks?: Prisma.DocumentChunkCreateNestedManyWithoutDocumentInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutDocumentInput;
};
export type DocumentUncheckedCreateWithoutAnalysisRequestsInput = {
    id?: string;
    organizationId?: string | null;
    uploadedBy?: string | null;
    originalFileName: string;
    mimeType?: string | null;
    checksum?: string | null;
    fileSize?: number | null;
    pageCount?: number | null;
    totalChunks?: number | null;
    language?: string | null;
    status?: $Enums.DocumentStatus;
    expirationDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chunks?: Prisma.DocumentChunkUncheckedCreateNestedManyWithoutDocumentInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutDocumentInput;
};
export type DocumentCreateOrConnectWithoutAnalysisRequestsInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutAnalysisRequestsInput, Prisma.DocumentUncheckedCreateWithoutAnalysisRequestsInput>;
};
export type DocumentUpsertWithoutAnalysisRequestsInput = {
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutAnalysisRequestsInput, Prisma.DocumentUncheckedUpdateWithoutAnalysisRequestsInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutAnalysisRequestsInput, Prisma.DocumentUncheckedCreateWithoutAnalysisRequestsInput>;
    where?: Prisma.DocumentWhereInput;
};
export type DocumentUpdateToOneWithWhereWithoutAnalysisRequestsInput = {
    where?: Prisma.DocumentWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutAnalysisRequestsInput, Prisma.DocumentUncheckedUpdateWithoutAnalysisRequestsInput>;
};
export type DocumentUpdateWithoutAnalysisRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutDocumentsNestedInput;
    uploader?: Prisma.ProfileUpdateOneWithoutDocumentsNestedInput;
    chunks?: Prisma.DocumentChunkUpdateManyWithoutDocumentNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutDocumentNestedInput;
};
export type DocumentUncheckedUpdateWithoutAnalysisRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chunks?: Prisma.DocumentChunkUncheckedUpdateManyWithoutDocumentNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutDocumentNestedInput;
};
export type DocumentCreateWithoutNotificationsInput = {
    id?: string;
    originalFileName: string;
    mimeType?: string | null;
    checksum?: string | null;
    fileSize?: number | null;
    pageCount?: number | null;
    totalChunks?: number | null;
    language?: string | null;
    status?: $Enums.DocumentStatus;
    expirationDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutDocumentsInput;
    uploader?: Prisma.ProfileCreateNestedOneWithoutDocumentsInput;
    chunks?: Prisma.DocumentChunkCreateNestedManyWithoutDocumentInput;
    analysisRequests?: Prisma.AnalysisRequestCreateNestedManyWithoutDocumentInput;
};
export type DocumentUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    organizationId?: string | null;
    uploadedBy?: string | null;
    originalFileName: string;
    mimeType?: string | null;
    checksum?: string | null;
    fileSize?: number | null;
    pageCount?: number | null;
    totalChunks?: number | null;
    language?: string | null;
    status?: $Enums.DocumentStatus;
    expirationDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chunks?: Prisma.DocumentChunkUncheckedCreateNestedManyWithoutDocumentInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedCreateNestedManyWithoutDocumentInput;
};
export type DocumentCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutNotificationsInput, Prisma.DocumentUncheckedCreateWithoutNotificationsInput>;
};
export type DocumentUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutNotificationsInput, Prisma.DocumentUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutNotificationsInput, Prisma.DocumentUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.DocumentWhereInput;
};
export type DocumentUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.DocumentWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutNotificationsInput, Prisma.DocumentUncheckedUpdateWithoutNotificationsInput>;
};
export type DocumentUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutDocumentsNestedInput;
    uploader?: Prisma.ProfileUpdateOneWithoutDocumentsNestedInput;
    chunks?: Prisma.DocumentChunkUpdateManyWithoutDocumentNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUpdateManyWithoutDocumentNestedInput;
};
export type DocumentUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chunks?: Prisma.DocumentChunkUncheckedUpdateManyWithoutDocumentNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedUpdateManyWithoutDocumentNestedInput;
};
export type DocumentCreateManyOrganizationInput = {
    id?: string;
    uploadedBy?: string | null;
    originalFileName: string;
    mimeType?: string | null;
    checksum?: string | null;
    fileSize?: number | null;
    pageCount?: number | null;
    totalChunks?: number | null;
    language?: string | null;
    status?: $Enums.DocumentStatus;
    expirationDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uploader?: Prisma.ProfileUpdateOneWithoutDocumentsNestedInput;
    chunks?: Prisma.DocumentChunkUpdateManyWithoutDocumentNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUpdateManyWithoutDocumentNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutDocumentNestedInput;
};
export type DocumentUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chunks?: Prisma.DocumentChunkUncheckedUpdateManyWithoutDocumentNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedUpdateManyWithoutDocumentNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutDocumentNestedInput;
};
export type DocumentUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentCreateManyUploaderInput = {
    id?: string;
    organizationId?: string | null;
    originalFileName: string;
    mimeType?: string | null;
    checksum?: string | null;
    fileSize?: number | null;
    pageCount?: number | null;
    totalChunks?: number | null;
    language?: string | null;
    status?: $Enums.DocumentStatus;
    expirationDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentUpdateWithoutUploaderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutDocumentsNestedInput;
    chunks?: Prisma.DocumentChunkUpdateManyWithoutDocumentNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUpdateManyWithoutDocumentNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutDocumentNestedInput;
};
export type DocumentUncheckedUpdateWithoutUploaderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chunks?: Prisma.DocumentChunkUncheckedUpdateManyWithoutDocumentNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedUpdateManyWithoutDocumentNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutDocumentNestedInput;
};
export type DocumentUncheckedUpdateManyWithoutUploaderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalFileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pageCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    totalChunks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    language?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    expirationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentCountOutputType = {
    chunks: number;
    analysisRequests: number;
    notifications: number;
};
export type DocumentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chunks?: boolean | DocumentCountOutputTypeCountChunksArgs;
    analysisRequests?: boolean | DocumentCountOutputTypeCountAnalysisRequestsArgs;
    notifications?: boolean | DocumentCountOutputTypeCountNotificationsArgs;
};
export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentCountOutputTypeSelect<ExtArgs> | null;
};
export type DocumentCountOutputTypeCountChunksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentChunkWhereInput;
};
export type DocumentCountOutputTypeCountAnalysisRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalysisRequestWhereInput;
};
export type DocumentCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type DocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    uploadedBy?: boolean;
    originalFileName?: boolean;
    mimeType?: boolean;
    checksum?: boolean;
    fileSize?: boolean;
    pageCount?: boolean;
    totalChunks?: boolean;
    language?: boolean;
    status?: boolean;
    expirationDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.Document$organizationArgs<ExtArgs>;
    uploader?: boolean | Prisma.Document$uploaderArgs<ExtArgs>;
    chunks?: boolean | Prisma.Document$chunksArgs<ExtArgs>;
    analysisRequests?: boolean | Prisma.Document$analysisRequestsArgs<ExtArgs>;
    notifications?: boolean | Prisma.Document$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.DocumentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    uploadedBy?: boolean;
    originalFileName?: boolean;
    mimeType?: boolean;
    checksum?: boolean;
    fileSize?: boolean;
    pageCount?: boolean;
    totalChunks?: boolean;
    language?: boolean;
    status?: boolean;
    expirationDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.Document$organizationArgs<ExtArgs>;
    uploader?: boolean | Prisma.Document$uploaderArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    uploadedBy?: boolean;
    originalFileName?: boolean;
    mimeType?: boolean;
    checksum?: boolean;
    fileSize?: boolean;
    pageCount?: boolean;
    totalChunks?: boolean;
    language?: boolean;
    status?: boolean;
    expirationDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.Document$organizationArgs<ExtArgs>;
    uploader?: boolean | Prisma.Document$uploaderArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    uploadedBy?: boolean;
    originalFileName?: boolean;
    mimeType?: boolean;
    checksum?: boolean;
    fileSize?: boolean;
    pageCount?: boolean;
    totalChunks?: boolean;
    language?: boolean;
    status?: boolean;
    expirationDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "uploadedBy" | "originalFileName" | "mimeType" | "checksum" | "fileSize" | "pageCount" | "totalChunks" | "language" | "status" | "expirationDate" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>;
export type DocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.Document$organizationArgs<ExtArgs>;
    uploader?: boolean | Prisma.Document$uploaderArgs<ExtArgs>;
    chunks?: boolean | Prisma.Document$chunksArgs<ExtArgs>;
    analysisRequests?: boolean | Prisma.Document$analysisRequestsArgs<ExtArgs>;
    notifications?: boolean | Prisma.Document$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.DocumentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.Document$organizationArgs<ExtArgs>;
    uploader?: boolean | Prisma.Document$uploaderArgs<ExtArgs>;
};
export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.Document$organizationArgs<ExtArgs>;
    uploader?: boolean | Prisma.Document$uploaderArgs<ExtArgs>;
};
export type $DocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Document";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs> | null;
        uploader: Prisma.$ProfilePayload<ExtArgs> | null;
        chunks: Prisma.$DocumentChunkPayload<ExtArgs>[];
        analysisRequests: Prisma.$AnalysisRequestPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string | null;
        uploadedBy: string | null;
        originalFileName: string;
        mimeType: string | null;
        checksum: string | null;
        fileSize: number | null;
        pageCount: number | null;
        totalChunks: number | null;
        language: string | null;
        status: $Enums.DocumentStatus;
        expirationDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["document"]>;
    composites: {};
};
export type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentPayload, S>;
export type DocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentCountAggregateInputType | true;
};
export interface DocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Document'];
        meta: {
            name: 'Document';
        };
    };
    findUnique<T extends DocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DocumentFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DocumentCreateArgs>(args: Prisma.SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DocumentDeleteArgs>(args: Prisma.SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DocumentUpdateArgs>(args: Prisma.SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DocumentUpsertArgs>(args: Prisma.SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DocumentCountArgs>(args?: Prisma.Subset<T, DocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentCountAggregateOutputType> : number>;
    aggregate<T extends DocumentAggregateArgs>(args: Prisma.Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>;
    groupBy<T extends DocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DocumentFieldRefs;
}
export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.Document$organizationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Document$organizationArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    uploader<T extends Prisma.Document$uploaderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Document$uploaderArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    chunks<T extends Prisma.Document$chunksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Document$chunksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    analysisRequests<T extends Prisma.Document$analysisRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Document$analysisRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalysisRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.Document$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Document$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DocumentFieldRefs {
    readonly id: Prisma.FieldRef<"Document", 'String'>;
    readonly organizationId: Prisma.FieldRef<"Document", 'String'>;
    readonly uploadedBy: Prisma.FieldRef<"Document", 'String'>;
    readonly originalFileName: Prisma.FieldRef<"Document", 'String'>;
    readonly mimeType: Prisma.FieldRef<"Document", 'String'>;
    readonly checksum: Prisma.FieldRef<"Document", 'String'>;
    readonly fileSize: Prisma.FieldRef<"Document", 'Int'>;
    readonly pageCount: Prisma.FieldRef<"Document", 'Int'>;
    readonly totalChunks: Prisma.FieldRef<"Document", 'Int'>;
    readonly language: Prisma.FieldRef<"Document", 'String'>;
    readonly status: Prisma.FieldRef<"Document", 'DocumentStatus'>;
    readonly expirationDate: Prisma.FieldRef<"Document", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Document", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Document", 'DateTime'>;
}
export type DocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type DocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type DocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type DocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentCreateInput, Prisma.DocumentUncheckedCreateInput>;
};
export type DocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DocumentCreateManyInput | Prisma.DocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    data: Prisma.DocumentCreateManyInput | Prisma.DocumentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentUpdateInput, Prisma.DocumentUncheckedUpdateInput>;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyInput>;
    where?: Prisma.DocumentWhereInput;
    limit?: number;
};
export type DocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyInput>;
    where?: Prisma.DocumentWhereInput;
    limit?: number;
    include?: Prisma.DocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateInput, Prisma.DocumentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DocumentUpdateInput, Prisma.DocumentUncheckedUpdateInput>;
};
export type DocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    limit?: number;
};
export type Document$organizationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
};
export type Document$uploaderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
};
export type Document$chunksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChunkSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChunkOmit<ExtArgs> | null;
    include?: Prisma.DocumentChunkInclude<ExtArgs> | null;
    where?: Prisma.DocumentChunkWhereInput;
    orderBy?: Prisma.DocumentChunkOrderByWithRelationInput | Prisma.DocumentChunkOrderByWithRelationInput[];
    cursor?: Prisma.DocumentChunkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentChunkScalarFieldEnum | Prisma.DocumentChunkScalarFieldEnum[];
};
export type Document$analysisRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Document$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type DocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
};
