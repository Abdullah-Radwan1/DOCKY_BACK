import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfilePayload>;
export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
};
export type ProfileMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    fullName: string | null;
    avatarUrl: string | null;
    role: $Enums.UserRole | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProfileMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    fullName: string | null;
    avatarUrl: string | null;
    role: $Enums.UserRole | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProfileCountAggregateOutputType = {
    id: number;
    email: number;
    fullName: number;
    avatarUrl: number;
    role: number;
    organizationId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProfileMinAggregateInputType = {
    id?: true;
    email?: true;
    fullName?: true;
    avatarUrl?: true;
    role?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProfileMaxAggregateInputType = {
    id?: true;
    email?: true;
    fullName?: true;
    avatarUrl?: true;
    role?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProfileCountAggregateInputType = {
    id?: true;
    email?: true;
    fullName?: true;
    avatarUrl?: true;
    role?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProfileCountAggregateInputType;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
};
export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfile[P]> : Prisma.GetScalarType<T[P], AggregateProfile[P]>;
};
export type ProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithAggregationInput | Prisma.ProfileOrderByWithAggregationInput[];
    by: Prisma.ProfileScalarFieldEnum[] | Prisma.ProfileScalarFieldEnum;
    having?: Prisma.ProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileCountAggregateInputType | true;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
};
export type ProfileGroupByOutputType = {
    id: string;
    email: string;
    fullName: string | null;
    avatarUrl: string | null;
    role: $Enums.UserRole;
    organizationId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
};
export type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfileGroupByOutputType[P]>;
}>>;
export type ProfileWhereInput = {
    AND?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    OR?: Prisma.ProfileWhereInput[];
    NOT?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    id?: Prisma.UuidFilter<"Profile"> | string;
    email?: Prisma.StringFilter<"Profile"> | string;
    fullName?: Prisma.StringNullableFilter<"Profile"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"Profile"> | string | null;
    role?: Prisma.EnumUserRoleFilter<"Profile"> | $Enums.UserRole;
    organizationId?: Prisma.UuidNullableFilter<"Profile"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationNullableScalarRelationFilter, Prisma.OrganizationWhereInput> | null;
    documents?: Prisma.DocumentListRelationFilter;
    analysisRequests?: Prisma.AnalysisRequestListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    activityLogs?: Prisma.ActivityLogListRelationFilter;
};
export type ProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    documents?: Prisma.DocumentOrderByRelationAggregateInput;
    analysisRequests?: Prisma.AnalysisRequestOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    activityLogs?: Prisma.ActivityLogOrderByRelationAggregateInput;
};
export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    OR?: Prisma.ProfileWhereInput[];
    NOT?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    fullName?: Prisma.StringNullableFilter<"Profile"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"Profile"> | string | null;
    role?: Prisma.EnumUserRoleFilter<"Profile"> | $Enums.UserRole;
    organizationId?: Prisma.UuidNullableFilter<"Profile"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationNullableScalarRelationFilter, Prisma.OrganizationWhereInput> | null;
    documents?: Prisma.DocumentListRelationFilter;
    analysisRequests?: Prisma.AnalysisRequestListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    activityLogs?: Prisma.ActivityLogListRelationFilter;
}, "id" | "email">;
export type ProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProfileCountOrderByAggregateInput;
    _max?: Prisma.ProfileMaxOrderByAggregateInput;
    _min?: Prisma.ProfileMinOrderByAggregateInput;
};
export type ProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfileScalarWhereWithAggregatesInput | Prisma.ProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfileScalarWhereWithAggregatesInput | Prisma.ProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Profile"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    fullName?: Prisma.StringNullableWithAggregatesFilter<"Profile"> | string | null;
    avatarUrl?: Prisma.StringNullableWithAggregatesFilter<"Profile"> | string | null;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"Profile"> | $Enums.UserRole;
    organizationId?: Prisma.UuidNullableWithAggregatesFilter<"Profile"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Profile"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Profile"> | Date | string;
};
export type ProfileCreateInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutProfilesInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutUploaderInput;
    analysisRequests?: Prisma.AnalysisRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
};
export type ProfileUncheckedCreateInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.UserRole;
    organizationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutUploaderInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
};
export type ProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutProfilesNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutUploaderNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
};
export type ProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutUploaderNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type ProfileCreateManyInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.UserRole;
    organizationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileListRelationFilter = {
    every?: Prisma.ProfileWhereInput;
    some?: Prisma.ProfileWhereInput;
    none?: Prisma.ProfileWhereInput;
};
export type ProfileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfileNullableScalarRelationFilter = {
    is?: Prisma.ProfileWhereInput | null;
    isNot?: Prisma.ProfileWhereInput | null;
};
export type ProfileScalarRelationFilter = {
    is?: Prisma.ProfileWhereInput;
    isNot?: Prisma.ProfileWhereInput;
};
export type ProfileCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutOrganizationInput, Prisma.ProfileUncheckedCreateWithoutOrganizationInput> | Prisma.ProfileCreateWithoutOrganizationInput[] | Prisma.ProfileUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutOrganizationInput | Prisma.ProfileCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ProfileCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ProfileWhereUniqueInput | Prisma.ProfileWhereUniqueInput[];
};
export type ProfileUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutOrganizationInput, Prisma.ProfileUncheckedCreateWithoutOrganizationInput> | Prisma.ProfileCreateWithoutOrganizationInput[] | Prisma.ProfileUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutOrganizationInput | Prisma.ProfileCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ProfileCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ProfileWhereUniqueInput | Prisma.ProfileWhereUniqueInput[];
};
export type ProfileUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutOrganizationInput, Prisma.ProfileUncheckedCreateWithoutOrganizationInput> | Prisma.ProfileCreateWithoutOrganizationInput[] | Prisma.ProfileUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutOrganizationInput | Prisma.ProfileCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ProfileUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ProfileUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ProfileCreateManyOrganizationInputEnvelope;
    set?: Prisma.ProfileWhereUniqueInput | Prisma.ProfileWhereUniqueInput[];
    disconnect?: Prisma.ProfileWhereUniqueInput | Prisma.ProfileWhereUniqueInput[];
    delete?: Prisma.ProfileWhereUniqueInput | Prisma.ProfileWhereUniqueInput[];
    connect?: Prisma.ProfileWhereUniqueInput | Prisma.ProfileWhereUniqueInput[];
    update?: Prisma.ProfileUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ProfileUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ProfileUpdateManyWithWhereWithoutOrganizationInput | Prisma.ProfileUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ProfileScalarWhereInput | Prisma.ProfileScalarWhereInput[];
};
export type ProfileUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutOrganizationInput, Prisma.ProfileUncheckedCreateWithoutOrganizationInput> | Prisma.ProfileCreateWithoutOrganizationInput[] | Prisma.ProfileUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutOrganizationInput | Prisma.ProfileCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ProfileUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ProfileUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ProfileCreateManyOrganizationInputEnvelope;
    set?: Prisma.ProfileWhereUniqueInput | Prisma.ProfileWhereUniqueInput[];
    disconnect?: Prisma.ProfileWhereUniqueInput | Prisma.ProfileWhereUniqueInput[];
    delete?: Prisma.ProfileWhereUniqueInput | Prisma.ProfileWhereUniqueInput[];
    connect?: Prisma.ProfileWhereUniqueInput | Prisma.ProfileWhereUniqueInput[];
    update?: Prisma.ProfileUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ProfileUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ProfileUpdateManyWithWhereWithoutOrganizationInput | Prisma.ProfileUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ProfileScalarWhereInput | Prisma.ProfileScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type ProfileCreateNestedOneWithoutDocumentsInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutDocumentsInput, Prisma.ProfileUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutDocumentsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneWithoutDocumentsNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutDocumentsInput, Prisma.ProfileUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutDocumentsInput;
    upsert?: Prisma.ProfileUpsertWithoutDocumentsInput;
    disconnect?: Prisma.ProfileWhereInput | boolean;
    delete?: Prisma.ProfileWhereInput | boolean;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutDocumentsInput, Prisma.ProfileUpdateWithoutDocumentsInput>, Prisma.ProfileUncheckedUpdateWithoutDocumentsInput>;
};
export type ProfileCreateNestedOneWithoutActivityLogsInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutActivityLogsInput, Prisma.ProfileUncheckedCreateWithoutActivityLogsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutActivityLogsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneWithoutActivityLogsNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutActivityLogsInput, Prisma.ProfileUncheckedCreateWithoutActivityLogsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutActivityLogsInput;
    upsert?: Prisma.ProfileUpsertWithoutActivityLogsInput;
    disconnect?: Prisma.ProfileWhereInput | boolean;
    delete?: Prisma.ProfileWhereInput | boolean;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutActivityLogsInput, Prisma.ProfileUpdateWithoutActivityLogsInput>, Prisma.ProfileUncheckedUpdateWithoutActivityLogsInput>;
};
export type ProfileCreateNestedOneWithoutAnalysisRequestsInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutAnalysisRequestsInput, Prisma.ProfileUncheckedCreateWithoutAnalysisRequestsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutAnalysisRequestsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutAnalysisRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutAnalysisRequestsInput, Prisma.ProfileUncheckedCreateWithoutAnalysisRequestsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutAnalysisRequestsInput;
    upsert?: Prisma.ProfileUpsertWithoutAnalysisRequestsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutAnalysisRequestsInput, Prisma.ProfileUpdateWithoutAnalysisRequestsInput>, Prisma.ProfileUncheckedUpdateWithoutAnalysisRequestsInput>;
};
export type ProfileCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutNotificationsInput, Prisma.ProfileUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutNotificationsInput, Prisma.ProfileUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.ProfileUpsertWithoutNotificationsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutNotificationsInput, Prisma.ProfileUpdateWithoutNotificationsInput>, Prisma.ProfileUncheckedUpdateWithoutNotificationsInput>;
};
export type ProfileCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DocumentCreateNestedManyWithoutUploaderInput;
    analysisRequests?: Prisma.AnalysisRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
};
export type ProfileUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutUploaderInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
};
export type ProfileCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutOrganizationInput, Prisma.ProfileUncheckedCreateWithoutOrganizationInput>;
};
export type ProfileCreateManyOrganizationInputEnvelope = {
    data: Prisma.ProfileCreateManyOrganizationInput | Prisma.ProfileCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type ProfileUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ProfileWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutOrganizationInput, Prisma.ProfileUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutOrganizationInput, Prisma.ProfileUncheckedCreateWithoutOrganizationInput>;
};
export type ProfileUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ProfileWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutOrganizationInput, Prisma.ProfileUncheckedUpdateWithoutOrganizationInput>;
};
export type ProfileUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.ProfileScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateManyMutationInput, Prisma.ProfileUncheckedUpdateManyWithoutOrganizationInput>;
};
export type ProfileScalarWhereInput = {
    AND?: Prisma.ProfileScalarWhereInput | Prisma.ProfileScalarWhereInput[];
    OR?: Prisma.ProfileScalarWhereInput[];
    NOT?: Prisma.ProfileScalarWhereInput | Prisma.ProfileScalarWhereInput[];
    id?: Prisma.UuidFilter<"Profile"> | string;
    email?: Prisma.StringFilter<"Profile"> | string;
    fullName?: Prisma.StringNullableFilter<"Profile"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"Profile"> | string | null;
    role?: Prisma.EnumUserRoleFilter<"Profile"> | $Enums.UserRole;
    organizationId?: Prisma.UuidNullableFilter<"Profile"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
};
export type ProfileCreateWithoutDocumentsInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutProfilesInput;
    analysisRequests?: Prisma.AnalysisRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
};
export type ProfileUncheckedCreateWithoutDocumentsInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.UserRole;
    organizationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    analysisRequests?: Prisma.AnalysisRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
};
export type ProfileCreateOrConnectWithoutDocumentsInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutDocumentsInput, Prisma.ProfileUncheckedCreateWithoutDocumentsInput>;
};
export type ProfileUpsertWithoutDocumentsInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutDocumentsInput, Prisma.ProfileUncheckedUpdateWithoutDocumentsInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutDocumentsInput, Prisma.ProfileUncheckedCreateWithoutDocumentsInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutDocumentsInput, Prisma.ProfileUncheckedUpdateWithoutDocumentsInput>;
};
export type ProfileUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutProfilesNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
};
export type ProfileUncheckedUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    analysisRequests?: Prisma.AnalysisRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type ProfileCreateWithoutActivityLogsInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutProfilesInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutUploaderInput;
    analysisRequests?: Prisma.AnalysisRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type ProfileUncheckedCreateWithoutActivityLogsInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.UserRole;
    organizationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutUploaderInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type ProfileCreateOrConnectWithoutActivityLogsInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutActivityLogsInput, Prisma.ProfileUncheckedCreateWithoutActivityLogsInput>;
};
export type ProfileUpsertWithoutActivityLogsInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutActivityLogsInput, Prisma.ProfileUncheckedUpdateWithoutActivityLogsInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutActivityLogsInput, Prisma.ProfileUncheckedCreateWithoutActivityLogsInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutActivityLogsInput, Prisma.ProfileUncheckedUpdateWithoutActivityLogsInput>;
};
export type ProfileUpdateWithoutActivityLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutProfilesNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutUploaderNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type ProfileUncheckedUpdateWithoutActivityLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutUploaderNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type ProfileCreateWithoutAnalysisRequestsInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutProfilesInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutUploaderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
};
export type ProfileUncheckedCreateWithoutAnalysisRequestsInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.UserRole;
    organizationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutUploaderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
};
export type ProfileCreateOrConnectWithoutAnalysisRequestsInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutAnalysisRequestsInput, Prisma.ProfileUncheckedCreateWithoutAnalysisRequestsInput>;
};
export type ProfileUpsertWithoutAnalysisRequestsInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutAnalysisRequestsInput, Prisma.ProfileUncheckedUpdateWithoutAnalysisRequestsInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutAnalysisRequestsInput, Prisma.ProfileUncheckedCreateWithoutAnalysisRequestsInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutAnalysisRequestsInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutAnalysisRequestsInput, Prisma.ProfileUncheckedUpdateWithoutAnalysisRequestsInput>;
};
export type ProfileUpdateWithoutAnalysisRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutProfilesNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutUploaderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
};
export type ProfileUncheckedUpdateWithoutAnalysisRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutUploaderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type ProfileCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutProfilesInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutUploaderInput;
    analysisRequests?: Prisma.AnalysisRequestCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
};
export type ProfileUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.UserRole;
    organizationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutUploaderInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
};
export type ProfileCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutNotificationsInput, Prisma.ProfileUncheckedCreateWithoutNotificationsInput>;
};
export type ProfileUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutNotificationsInput, Prisma.ProfileUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutNotificationsInput, Prisma.ProfileUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutNotificationsInput, Prisma.ProfileUncheckedUpdateWithoutNotificationsInput>;
};
export type ProfileUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutProfilesNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutUploaderNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
};
export type ProfileUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutUploaderNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type ProfileCreateManyOrganizationInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProfileUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DocumentUpdateManyWithoutUploaderNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
};
export type ProfileUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutUploaderNestedInput;
    analysisRequests?: Prisma.AnalysisRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type ProfileUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileCountOutputType = {
    documents: number;
    analysisRequests: number;
    notifications: number;
    activityLogs: number;
};
export type ProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    documents?: boolean | ProfileCountOutputTypeCountDocumentsArgs;
    analysisRequests?: boolean | ProfileCountOutputTypeCountAnalysisRequestsArgs;
    notifications?: boolean | ProfileCountOutputTypeCountNotificationsArgs;
    activityLogs?: boolean | ProfileCountOutputTypeCountActivityLogsArgs;
};
export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileCountOutputTypeSelect<ExtArgs> | null;
};
export type ProfileCountOutputTypeCountDocumentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
};
export type ProfileCountOutputTypeCountAnalysisRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalysisRequestWhereInput;
};
export type ProfileCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type ProfileCountOutputTypeCountActivityLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityLogWhereInput;
};
export type ProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    fullName?: boolean;
    avatarUrl?: boolean;
    role?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.Profile$organizationArgs<ExtArgs>;
    documents?: boolean | Prisma.Profile$documentsArgs<ExtArgs>;
    analysisRequests?: boolean | Prisma.Profile$analysisRequestsArgs<ExtArgs>;
    notifications?: boolean | Prisma.Profile$notificationsArgs<ExtArgs>;
    activityLogs?: boolean | Prisma.Profile$activityLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profile"]>;
export type ProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    fullName?: boolean;
    avatarUrl?: boolean;
    role?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.Profile$organizationArgs<ExtArgs>;
}, ExtArgs["result"]["profile"]>;
export type ProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    fullName?: boolean;
    avatarUrl?: boolean;
    role?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.Profile$organizationArgs<ExtArgs>;
}, ExtArgs["result"]["profile"]>;
export type ProfileSelectScalar = {
    id?: boolean;
    email?: boolean;
    fullName?: boolean;
    avatarUrl?: boolean;
    role?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "fullName" | "avatarUrl" | "role" | "organizationId" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>;
export type ProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.Profile$organizationArgs<ExtArgs>;
    documents?: boolean | Prisma.Profile$documentsArgs<ExtArgs>;
    analysisRequests?: boolean | Prisma.Profile$analysisRequestsArgs<ExtArgs>;
    notifications?: boolean | Prisma.Profile$notificationsArgs<ExtArgs>;
    activityLogs?: boolean | Prisma.Profile$activityLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.Profile$organizationArgs<ExtArgs>;
};
export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.Profile$organizationArgs<ExtArgs>;
};
export type $ProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Profile";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs> | null;
        documents: Prisma.$DocumentPayload<ExtArgs>[];
        analysisRequests: Prisma.$AnalysisRequestPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        fullName: string | null;
        avatarUrl: string | null;
        role: $Enums.UserRole;
        organizationId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["profile"]>;
    composites: {};
};
export type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfilePayload, S>;
export type ProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfileCountAggregateInputType | true;
};
export interface ProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Profile'];
        meta: {
            name: 'Profile';
        };
    };
    findUnique<T extends ProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProfileFindManyArgs>(args?: Prisma.SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProfileCreateArgs>(args: Prisma.SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProfileDeleteArgs>(args: Prisma.SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProfileUpdateArgs>(args: Prisma.SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProfileUpsertArgs>(args: Prisma.SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProfileCountArgs>(args?: Prisma.Subset<T, ProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfileCountAggregateOutputType> : number>;
    aggregate<T extends ProfileAggregateArgs>(args: Prisma.Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>;
    groupBy<T extends ProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProfileFieldRefs;
}
export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.Profile$organizationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$organizationArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    documents<T extends Prisma.Profile$documentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    analysisRequests<T extends Prisma.Profile$analysisRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$analysisRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalysisRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.Profile$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    activityLogs<T extends Prisma.Profile$activityLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProfileFieldRefs {
    readonly id: Prisma.FieldRef<"Profile", 'String'>;
    readonly email: Prisma.FieldRef<"Profile", 'String'>;
    readonly fullName: Prisma.FieldRef<"Profile", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"Profile", 'String'>;
    readonly role: Prisma.FieldRef<"Profile", 'UserRole'>;
    readonly organizationId: Prisma.FieldRef<"Profile", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Profile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Profile", 'DateTime'>;
}
export type ProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
export type ProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
export type ProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
export type ProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileCreateInput, Prisma.ProfileUncheckedCreateInput>;
};
export type ProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProfileCreateManyInput | Prisma.ProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    data: Prisma.ProfileCreateManyInput | Prisma.ProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileUpdateInput, Prisma.ProfileUncheckedUpdateInput>;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProfileUpdateManyMutationInput, Prisma.ProfileUncheckedUpdateManyInput>;
    where?: Prisma.ProfileWhereInput;
    limit?: number;
};
export type ProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileUpdateManyMutationInput, Prisma.ProfileUncheckedUpdateManyInput>;
    where?: Prisma.ProfileWhereInput;
    limit?: number;
    include?: Prisma.ProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateInput, Prisma.ProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProfileUpdateInput, Prisma.ProfileUncheckedUpdateInput>;
};
export type ProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileWhereInput;
    limit?: number;
};
export type Profile$organizationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
};
export type Profile$documentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Profile$analysisRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Profile$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Profile$activityLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogSelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogInclude<ExtArgs> | null;
    where?: Prisma.ActivityLogWhereInput;
    orderBy?: Prisma.ActivityLogOrderByWithRelationInput | Prisma.ActivityLogOrderByWithRelationInput[];
    cursor?: Prisma.ActivityLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityLogScalarFieldEnum | Prisma.ActivityLogScalarFieldEnum[];
};
export type ProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
};
