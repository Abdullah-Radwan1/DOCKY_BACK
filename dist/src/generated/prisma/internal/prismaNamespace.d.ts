import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly UsageQuota: "UsageQuota";
    readonly Profile: "Profile";
    readonly Document: "Document";
    readonly DocumentChunk: "DocumentChunk";
    readonly AnalysisResult: "AnalysisResult";
    readonly Finding: "Finding";
    readonly ActivityLog: "ActivityLog";
    readonly AnalysisRequest: "AnalysisRequest";
    readonly AIResponse: "AIResponse";
    readonly PasswordResetToken: "PasswordResetToken";
    readonly Notification: "Notification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "usageQuota" | "profile" | "document" | "documentChunk" | "analysisResult" | "finding" | "activityLog" | "analysisRequest" | "aIResponse" | "passwordResetToken" | "notification";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        UsageQuota: {
            payload: Prisma.$UsageQuotaPayload<ExtArgs>;
            fields: Prisma.UsageQuotaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UsageQuotaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageQuotaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UsageQuotaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageQuotaPayload>;
                };
                findFirst: {
                    args: Prisma.UsageQuotaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageQuotaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UsageQuotaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageQuotaPayload>;
                };
                findMany: {
                    args: Prisma.UsageQuotaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageQuotaPayload>[];
                };
                create: {
                    args: Prisma.UsageQuotaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageQuotaPayload>;
                };
                createMany: {
                    args: Prisma.UsageQuotaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UsageQuotaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageQuotaPayload>[];
                };
                delete: {
                    args: Prisma.UsageQuotaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageQuotaPayload>;
                };
                update: {
                    args: Prisma.UsageQuotaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageQuotaPayload>;
                };
                deleteMany: {
                    args: Prisma.UsageQuotaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UsageQuotaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UsageQuotaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageQuotaPayload>[];
                };
                upsert: {
                    args: Prisma.UsageQuotaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageQuotaPayload>;
                };
                aggregate: {
                    args: Prisma.UsageQuotaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsageQuota>;
                };
                groupBy: {
                    args: Prisma.UsageQuotaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsageQuotaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UsageQuotaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsageQuotaCountAggregateOutputType> | number;
                };
            };
        };
        Profile: {
            payload: Prisma.$ProfilePayload<ExtArgs>;
            fields: Prisma.ProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                findFirst: {
                    args: Prisma.ProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                findMany: {
                    args: Prisma.ProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                create: {
                    args: Prisma.ProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                createMany: {
                    args: Prisma.ProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                delete: {
                    args: Prisma.ProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                update: {
                    args: Prisma.ProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.ProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                upsert: {
                    args: Prisma.ProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                aggregate: {
                    args: Prisma.ProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProfile>;
                };
                groupBy: {
                    args: Prisma.ProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfileCountAggregateOutputType> | number;
                };
            };
        };
        Document: {
            payload: Prisma.$DocumentPayload<ExtArgs>;
            fields: Prisma.DocumentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DocumentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                findFirst: {
                    args: Prisma.DocumentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                findMany: {
                    args: Prisma.DocumentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>[];
                };
                create: {
                    args: Prisma.DocumentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                createMany: {
                    args: Prisma.DocumentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>[];
                };
                delete: {
                    args: Prisma.DocumentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                update: {
                    args: Prisma.DocumentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                deleteMany: {
                    args: Prisma.DocumentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DocumentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>[];
                };
                upsert: {
                    args: Prisma.DocumentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                aggregate: {
                    args: Prisma.DocumentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDocument>;
                };
                groupBy: {
                    args: Prisma.DocumentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DocumentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentCountAggregateOutputType> | number;
                };
            };
        };
        DocumentChunk: {
            payload: Prisma.$DocumentChunkPayload<ExtArgs>;
            fields: Prisma.DocumentChunkFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DocumentChunkFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChunkPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DocumentChunkFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChunkPayload>;
                };
                findFirst: {
                    args: Prisma.DocumentChunkFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChunkPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DocumentChunkFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChunkPayload>;
                };
                findMany: {
                    args: Prisma.DocumentChunkFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChunkPayload>[];
                };
                create: {
                    args: Prisma.DocumentChunkCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChunkPayload>;
                };
                createMany: {
                    args: Prisma.DocumentChunkCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DocumentChunkCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChunkPayload>[];
                };
                delete: {
                    args: Prisma.DocumentChunkDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChunkPayload>;
                };
                update: {
                    args: Prisma.DocumentChunkUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChunkPayload>;
                };
                deleteMany: {
                    args: Prisma.DocumentChunkDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DocumentChunkUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DocumentChunkUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChunkPayload>[];
                };
                upsert: {
                    args: Prisma.DocumentChunkUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChunkPayload>;
                };
                aggregate: {
                    args: Prisma.DocumentChunkAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDocumentChunk>;
                };
                groupBy: {
                    args: Prisma.DocumentChunkGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentChunkGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DocumentChunkCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentChunkCountAggregateOutputType> | number;
                };
            };
        };
        AnalysisResult: {
            payload: Prisma.$AnalysisResultPayload<ExtArgs>;
            fields: Prisma.AnalysisResultFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnalysisResultFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisResultPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnalysisResultFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisResultPayload>;
                };
                findFirst: {
                    args: Prisma.AnalysisResultFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisResultPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnalysisResultFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisResultPayload>;
                };
                findMany: {
                    args: Prisma.AnalysisResultFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisResultPayload>[];
                };
                create: {
                    args: Prisma.AnalysisResultCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisResultPayload>;
                };
                createMany: {
                    args: Prisma.AnalysisResultCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnalysisResultCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisResultPayload>[];
                };
                delete: {
                    args: Prisma.AnalysisResultDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisResultPayload>;
                };
                update: {
                    args: Prisma.AnalysisResultUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisResultPayload>;
                };
                deleteMany: {
                    args: Prisma.AnalysisResultDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnalysisResultUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnalysisResultUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisResultPayload>[];
                };
                upsert: {
                    args: Prisma.AnalysisResultUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisResultPayload>;
                };
                aggregate: {
                    args: Prisma.AnalysisResultAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnalysisResult>;
                };
                groupBy: {
                    args: Prisma.AnalysisResultGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnalysisResultGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnalysisResultCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnalysisResultCountAggregateOutputType> | number;
                };
            };
        };
        Finding: {
            payload: Prisma.$FindingPayload<ExtArgs>;
            fields: Prisma.FindingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FindingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FindingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FindingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FindingPayload>;
                };
                findFirst: {
                    args: Prisma.FindingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FindingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FindingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FindingPayload>;
                };
                findMany: {
                    args: Prisma.FindingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FindingPayload>[];
                };
                create: {
                    args: Prisma.FindingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FindingPayload>;
                };
                createMany: {
                    args: Prisma.FindingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FindingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FindingPayload>[];
                };
                delete: {
                    args: Prisma.FindingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FindingPayload>;
                };
                update: {
                    args: Prisma.FindingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FindingPayload>;
                };
                deleteMany: {
                    args: Prisma.FindingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FindingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FindingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FindingPayload>[];
                };
                upsert: {
                    args: Prisma.FindingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FindingPayload>;
                };
                aggregate: {
                    args: Prisma.FindingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFinding>;
                };
                groupBy: {
                    args: Prisma.FindingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FindingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FindingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FindingCountAggregateOutputType> | number;
                };
            };
        };
        ActivityLog: {
            payload: Prisma.$ActivityLogPayload<ExtArgs>;
            fields: Prisma.ActivityLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogPayload>;
                };
                findFirst: {
                    args: Prisma.ActivityLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogPayload>;
                };
                findMany: {
                    args: Prisma.ActivityLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogPayload>[];
                };
                create: {
                    args: Prisma.ActivityLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogPayload>;
                };
                createMany: {
                    args: Prisma.ActivityLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogPayload>[];
                };
                delete: {
                    args: Prisma.ActivityLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogPayload>;
                };
                update: {
                    args: Prisma.ActivityLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogPayload>;
                };
                deleteMany: {
                    args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogPayload>[];
                };
                upsert: {
                    args: Prisma.ActivityLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogPayload>;
                };
                aggregate: {
                    args: Prisma.ActivityLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateActivityLog>;
                };
                groupBy: {
                    args: Prisma.ActivityLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ActivityLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ActivityLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ActivityLogCountAggregateOutputType> | number;
                };
            };
        };
        AnalysisRequest: {
            payload: Prisma.$AnalysisRequestPayload<ExtArgs>;
            fields: Prisma.AnalysisRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnalysisRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnalysisRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisRequestPayload>;
                };
                findFirst: {
                    args: Prisma.AnalysisRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnalysisRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisRequestPayload>;
                };
                findMany: {
                    args: Prisma.AnalysisRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisRequestPayload>[];
                };
                create: {
                    args: Prisma.AnalysisRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisRequestPayload>;
                };
                createMany: {
                    args: Prisma.AnalysisRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnalysisRequestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisRequestPayload>[];
                };
                delete: {
                    args: Prisma.AnalysisRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisRequestPayload>;
                };
                update: {
                    args: Prisma.AnalysisRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.AnalysisRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnalysisRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnalysisRequestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisRequestPayload>[];
                };
                upsert: {
                    args: Prisma.AnalysisRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalysisRequestPayload>;
                };
                aggregate: {
                    args: Prisma.AnalysisRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnalysisRequest>;
                };
                groupBy: {
                    args: Prisma.AnalysisRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnalysisRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnalysisRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnalysisRequestCountAggregateOutputType> | number;
                };
            };
        };
        AIResponse: {
            payload: Prisma.$AIResponsePayload<ExtArgs>;
            fields: Prisma.AIResponseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AIResponseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIResponsePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AIResponseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIResponsePayload>;
                };
                findFirst: {
                    args: Prisma.AIResponseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIResponsePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AIResponseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIResponsePayload>;
                };
                findMany: {
                    args: Prisma.AIResponseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIResponsePayload>[];
                };
                create: {
                    args: Prisma.AIResponseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIResponsePayload>;
                };
                createMany: {
                    args: Prisma.AIResponseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AIResponseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIResponsePayload>[];
                };
                delete: {
                    args: Prisma.AIResponseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIResponsePayload>;
                };
                update: {
                    args: Prisma.AIResponseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIResponsePayload>;
                };
                deleteMany: {
                    args: Prisma.AIResponseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AIResponseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AIResponseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIResponsePayload>[];
                };
                upsert: {
                    args: Prisma.AIResponseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIResponsePayload>;
                };
                aggregate: {
                    args: Prisma.AIResponseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAIResponse>;
                };
                groupBy: {
                    args: Prisma.AIResponseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AIResponseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AIResponseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AIResponseCountAggregateOutputType> | number;
                };
            };
        };
        PasswordResetToken: {
            payload: Prisma.$PasswordResetTokenPayload<ExtArgs>;
            fields: Prisma.PasswordResetTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findFirst: {
                    args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findMany: {
                    args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                create: {
                    args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                createMany: {
                    args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                delete: {
                    args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                update: {
                    args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                upsert: {
                    args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                aggregate: {
                    args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePasswordResetToken>;
                };
                groupBy: {
                    args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PasswordResetTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UsageQuotaScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly guestId: "guestId";
    readonly uploadsUsed: "uploadsUsed";
    readonly analysesUsed: "analysesUsed";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UsageQuotaScalarFieldEnum = (typeof UsageQuotaScalarFieldEnum)[keyof typeof UsageQuotaScalarFieldEnum];
export declare const ProfileScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly fullName: "fullName";
    readonly avatarUrl: "avatarUrl";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly plan: "plan";
    readonly allowEmailNotifications: "allowEmailNotifications";
    readonly allowExpiryReminders: "allowExpiryReminders";
    readonly allowRiskAlerts: "allowRiskAlerts";
    readonly allowAnalysisAlerts: "allowAnalysisAlerts";
};
export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];
export declare const DocumentScalarFieldEnum: {
    readonly id: "id";
    readonly guestToken: "guestToken";
    readonly isGuest: "isGuest";
    readonly uploadedBy: "uploadedBy";
    readonly originalFileName: "originalFileName";
    readonly mimeType: "mimeType";
    readonly checksum: "checksum";
    readonly fileSize: "fileSize";
    readonly pageCount: "pageCount";
    readonly totalChunks: "totalChunks";
    readonly language: "language";
    readonly status: "status";
    readonly expirationDate: "expirationDate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum];
export declare const DocumentChunkScalarFieldEnum: {
    readonly id: "id";
    readonly documentId: "documentId";
    readonly chunkIndex: "chunkIndex";
    readonly content: "content";
    readonly pageNumber: "pageNumber";
    readonly tokenCount: "tokenCount";
    readonly createdAt: "createdAt";
};
export type DocumentChunkScalarFieldEnum = (typeof DocumentChunkScalarFieldEnum)[keyof typeof DocumentChunkScalarFieldEnum];
export declare const AnalysisResultScalarFieldEnum: {
    readonly id: "id";
    readonly summary: "summary";
    readonly overallVerdict: "overallVerdict";
    readonly confidence: "confidence";
    readonly riskLevel: "riskLevel";
    readonly createdAt: "createdAt";
    readonly responseId: "responseId";
};
export type AnalysisResultScalarFieldEnum = (typeof AnalysisResultScalarFieldEnum)[keyof typeof AnalysisResultScalarFieldEnum];
export declare const FindingScalarFieldEnum: {
    readonly id: "id";
    readonly analysisId: "analysisId";
    readonly title: "title";
    readonly description: "description";
    readonly severity: "severity";
    readonly status: "status";
    readonly clauseReference: "clauseReference";
    readonly pageNumber: "pageNumber";
    readonly excerpt: "excerpt";
    readonly recommendation: "recommendation";
    readonly metadata: "metadata";
    readonly resolvedAt: "resolvedAt";
    readonly createdAt: "createdAt";
};
export type FindingScalarFieldEnum = (typeof FindingScalarFieldEnum)[keyof typeof FindingScalarFieldEnum];
export declare const ActivityLogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly action: "action";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum];
export declare const AnalysisRequestScalarFieldEnum: {
    readonly id: "id";
    readonly queryText: "queryText";
    readonly status: "status";
    readonly documentId: "documentId";
    readonly userId: "userId";
    readonly guestId: "guestId";
    readonly attemptCount: "attemptCount";
    readonly errorMessage: "errorMessage";
    readonly processingStartedAt: "processingStartedAt";
    readonly processingFinishedAt: "processingFinishedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AnalysisRequestScalarFieldEnum = (typeof AnalysisRequestScalarFieldEnum)[keyof typeof AnalysisRequestScalarFieldEnum];
export declare const AIResponseScalarFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly response: "response";
    readonly confidenceScore: "confidenceScore";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly matchedChunks: "matchedChunks";
};
export type AIResponseScalarFieldEnum = (typeof AIResponseScalarFieldEnum)[keyof typeof AIResponseScalarFieldEnum];
export declare const PasswordResetTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly token: "token";
    readonly expiresAt: "expiresAt";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
};
export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly message: "message";
    readonly type: "type";
    readonly status: "status";
    readonly deliveryChannel: "deliveryChannel";
    readonly documentId: "documentId";
    readonly scheduledFor: "scheduledFor";
    readonly sentAt: "sentAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>;
export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus'>;
export type ListEnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus[]'>;
export type EnumAnalysisVerdictFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisVerdict'>;
export type ListEnumAnalysisVerdictFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisVerdict[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type EnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel'>;
export type ListEnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel[]'>;
export type EnumFindingSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FindingSeverity'>;
export type ListEnumFindingSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FindingSeverity[]'>;
export type EnumFindingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FindingStatus'>;
export type ListEnumFindingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FindingStatus[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type EnumAnalysisRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisRequestStatus'>;
export type ListEnumAnalysisRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisRequestStatus[]'>;
export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>;
export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>;
export type EnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus'>;
export type ListEnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus[]'>;
export type EnumDeliveryChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryChannel'>;
export type ListEnumDeliveryChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryChannel[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    usageQuota?: Prisma.UsageQuotaOmit;
    profile?: Prisma.ProfileOmit;
    document?: Prisma.DocumentOmit;
    documentChunk?: Prisma.DocumentChunkOmit;
    analysisResult?: Prisma.AnalysisResultOmit;
    finding?: Prisma.FindingOmit;
    activityLog?: Prisma.ActivityLogOmit;
    analysisRequest?: Prisma.AnalysisRequestOmit;
    aIResponse?: Prisma.AIResponseOmit;
    passwordResetToken?: Prisma.PasswordResetTokenOmit;
    notification?: Prisma.NotificationOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
