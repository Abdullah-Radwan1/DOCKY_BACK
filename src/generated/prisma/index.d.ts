
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model DocumentAnalysis
 * 
 */
export type DocumentAnalysis = $Result.DefaultSelection<Prisma.$DocumentAnalysisPayload>
/**
 * Model Finding
 * 
 */
export type Finding = $Result.DefaultSelection<Prisma.$FindingPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model ComplianceQuery
 * 
 */
export type ComplianceQuery = $Result.DefaultSelection<Prisma.$ComplianceQueryPayload>
/**
 * Model AIResponse
 * 
 */
export type AIResponse = $Result.DefaultSelection<Prisma.$AIResponsePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  admin: 'admin',
  compliance_manager: 'compliance_manager',
  auditor: 'auditor',
  viewer: 'viewer'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const PlanType: {
  free: 'free',
  growth: 'growth',
  enterprise: 'enterprise'
};

export type PlanType = (typeof PlanType)[keyof typeof PlanType]


export const DocumentStatus: {
  pending: 'pending',
  analyzing: 'analyzing',
  analyzed: 'analyzed',
  failed: 'failed'
};

export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus]


export const RiskLevel: {
  low: 'low',
  medium: 'medium',
  high: 'high'
};

export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel]


export const ComplianceQueryStatus: {
  pending: 'pending',
  processing: 'processing',
  completed: 'completed',
  failed: 'failed'
};

export type ComplianceQueryStatus = (typeof ComplianceQueryStatus)[keyof typeof ComplianceQueryStatus]


export const NotificationStatus: {
  unread: 'unread',
  read: 'read',
  archived: 'archived'
};

export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus]


export const NotificationType: {
  expiration_warning: 'expiration_warning',
  compliance_alert: 'compliance_alert',
  system_alert: 'system_alert'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const DeliveryChannel: {
  in_app: 'in_app',
  email: 'email',
  push: 'push',
  sms: 'sms'
};

export type DeliveryChannel = (typeof DeliveryChannel)[keyof typeof DeliveryChannel]


export const FindingSeverity: {
  info: 'info',
  low: 'low',
  medium: 'medium',
  high: 'high',
  critical: 'critical'
};

export type FindingSeverity = (typeof FindingSeverity)[keyof typeof FindingSeverity]


export const AnalysisVerdict: {
  compliant: 'compliant',
  non_compliant: 'non_compliant',
  partial: 'partial',
  unknown: 'unknown'
};

export type AnalysisVerdict = (typeof AnalysisVerdict)[keyof typeof AnalysisVerdict]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

export type DocumentStatus = $Enums.DocumentStatus

export const DocumentStatus: typeof $Enums.DocumentStatus

export type RiskLevel = $Enums.RiskLevel

export const RiskLevel: typeof $Enums.RiskLevel

export type ComplianceQueryStatus = $Enums.ComplianceQueryStatus

export const ComplianceQueryStatus: typeof $Enums.ComplianceQueryStatus

export type NotificationStatus = $Enums.NotificationStatus

export const NotificationStatus: typeof $Enums.NotificationStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type DeliveryChannel = $Enums.DeliveryChannel

export const DeliveryChannel: typeof $Enums.DeliveryChannel

export type FindingSeverity = $Enums.FindingSeverity

export const FindingSeverity: typeof $Enums.FindingSeverity

export type AnalysisVerdict = $Enums.AnalysisVerdict

export const AnalysisVerdict: typeof $Enums.AnalysisVerdict

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentAnalysis`: Exposes CRUD operations for the **DocumentAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentAnalyses
    * const documentAnalyses = await prisma.documentAnalysis.findMany()
    * ```
    */
  get documentAnalysis(): Prisma.DocumentAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.finding`: Exposes CRUD operations for the **Finding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Findings
    * const findings = await prisma.finding.findMany()
    * ```
    */
  get finding(): Prisma.FindingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.complianceQuery`: Exposes CRUD operations for the **ComplianceQuery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComplianceQueries
    * const complianceQueries = await prisma.complianceQuery.findMany()
    * ```
    */
  get complianceQuery(): Prisma.ComplianceQueryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIResponse`: Exposes CRUD operations for the **AIResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIResponses
    * const aIResponses = await prisma.aIResponse.findMany()
    * ```
    */
  get aIResponse(): Prisma.AIResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organization: 'Organization',
    Profile: 'Profile',
    Document: 'Document',
    DocumentAnalysis: 'DocumentAnalysis',
    Finding: 'Finding',
    ActivityLog: 'ActivityLog',
    ComplianceQuery: 'ComplianceQuery',
    AIResponse: 'AIResponse',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organization" | "profile" | "document" | "documentAnalysis" | "finding" | "activityLog" | "complianceQuery" | "aIResponse" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      DocumentAnalysis: {
        payload: Prisma.$DocumentAnalysisPayload<ExtArgs>
        fields: Prisma.DocumentAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentAnalysisPayload>
          }
          findFirst: {
            args: Prisma.DocumentAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentAnalysisPayload>
          }
          findMany: {
            args: Prisma.DocumentAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentAnalysisPayload>[]
          }
          create: {
            args: Prisma.DocumentAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentAnalysisPayload>
          }
          createMany: {
            args: Prisma.DocumentAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentAnalysisPayload>[]
          }
          delete: {
            args: Prisma.DocumentAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentAnalysisPayload>
          }
          update: {
            args: Prisma.DocumentAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.DocumentAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.DocumentAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentAnalysisPayload>
          }
          aggregate: {
            args: Prisma.DocumentAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentAnalysis>
          }
          groupBy: {
            args: Prisma.DocumentAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentAnalysisCountAggregateOutputType> | number
          }
        }
      }
      Finding: {
        payload: Prisma.$FindingPayload<ExtArgs>
        fields: Prisma.FindingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FindingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FindingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          findFirst: {
            args: Prisma.FindingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FindingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          findMany: {
            args: Prisma.FindingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>[]
          }
          create: {
            args: Prisma.FindingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          createMany: {
            args: Prisma.FindingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FindingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>[]
          }
          delete: {
            args: Prisma.FindingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          update: {
            args: Prisma.FindingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          deleteMany: {
            args: Prisma.FindingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FindingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FindingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>[]
          }
          upsert: {
            args: Prisma.FindingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FindingPayload>
          }
          aggregate: {
            args: Prisma.FindingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinding>
          }
          groupBy: {
            args: Prisma.FindingGroupByArgs<ExtArgs>
            result: $Utils.Optional<FindingGroupByOutputType>[]
          }
          count: {
            args: Prisma.FindingCountArgs<ExtArgs>
            result: $Utils.Optional<FindingCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      ComplianceQuery: {
        payload: Prisma.$ComplianceQueryPayload<ExtArgs>
        fields: Prisma.ComplianceQueryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComplianceQueryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceQueryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComplianceQueryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceQueryPayload>
          }
          findFirst: {
            args: Prisma.ComplianceQueryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceQueryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComplianceQueryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceQueryPayload>
          }
          findMany: {
            args: Prisma.ComplianceQueryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceQueryPayload>[]
          }
          create: {
            args: Prisma.ComplianceQueryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceQueryPayload>
          }
          createMany: {
            args: Prisma.ComplianceQueryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComplianceQueryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceQueryPayload>[]
          }
          delete: {
            args: Prisma.ComplianceQueryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceQueryPayload>
          }
          update: {
            args: Prisma.ComplianceQueryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceQueryPayload>
          }
          deleteMany: {
            args: Prisma.ComplianceQueryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComplianceQueryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComplianceQueryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceQueryPayload>[]
          }
          upsert: {
            args: Prisma.ComplianceQueryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceQueryPayload>
          }
          aggregate: {
            args: Prisma.ComplianceQueryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplianceQuery>
          }
          groupBy: {
            args: Prisma.ComplianceQueryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplianceQueryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComplianceQueryCountArgs<ExtArgs>
            result: $Utils.Optional<ComplianceQueryCountAggregateOutputType> | number
          }
        }
      }
      AIResponse: {
        payload: Prisma.$AIResponsePayload<ExtArgs>
        fields: Prisma.AIResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIResponsePayload>
          }
          findFirst: {
            args: Prisma.AIResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIResponsePayload>
          }
          findMany: {
            args: Prisma.AIResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIResponsePayload>[]
          }
          create: {
            args: Prisma.AIResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIResponsePayload>
          }
          createMany: {
            args: Prisma.AIResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIResponsePayload>[]
          }
          delete: {
            args: Prisma.AIResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIResponsePayload>
          }
          update: {
            args: Prisma.AIResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIResponsePayload>
          }
          deleteMany: {
            args: Prisma.AIResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIResponsePayload>[]
          }
          upsert: {
            args: Prisma.AIResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIResponsePayload>
          }
          aggregate: {
            args: Prisma.AIResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIResponse>
          }
          groupBy: {
            args: Prisma.AIResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIResponseCountArgs<ExtArgs>
            result: $Utils.Optional<AIResponseCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    organization?: OrganizationOmit
    profile?: ProfileOmit
    document?: DocumentOmit
    documentAnalysis?: DocumentAnalysisOmit
    finding?: FindingOmit
    activityLog?: ActivityLogOmit
    complianceQuery?: ComplianceQueryOmit
    aIResponse?: AIResponseOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    profiles: number
    documents: number
    activityLogs: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | OrganizationCountOutputTypeCountProfilesArgs
    documents?: boolean | OrganizationCountOutputTypeCountDocumentsArgs
    activityLogs?: boolean | OrganizationCountOutputTypeCountActivityLogsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    documents: number
    activityLogs: number
    complianceQueries: number
    notifications: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | ProfileCountOutputTypeCountDocumentsArgs
    activityLogs?: boolean | ProfileCountOutputTypeCountActivityLogsArgs
    complianceQueries?: boolean | ProfileCountOutputTypeCountComplianceQueriesArgs
    notifications?: boolean | ProfileCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountComplianceQueriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplianceQueryWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    analyses: number
    complianceQueries: number
    notifications: number
  }

  export type DocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyses?: boolean | DocumentCountOutputTypeCountAnalysesArgs
    complianceQueries?: boolean | DocumentCountOutputTypeCountComplianceQueriesArgs
    notifications?: boolean | DocumentCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentAnalysisWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountComplianceQueriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplianceQueryWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type DocumentAnalysisCountOutputType
   */

  export type DocumentAnalysisCountOutputType = {
    findings: number
  }

  export type DocumentAnalysisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    findings?: boolean | DocumentAnalysisCountOutputTypeCountFindingsArgs
  }

  // Custom InputTypes
  /**
   * DocumentAnalysisCountOutputType without action
   */
  export type DocumentAnalysisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentAnalysisCountOutputType
     */
    select?: DocumentAnalysisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentAnalysisCountOutputType without action
   */
  export type DocumentAnalysisCountOutputTypeCountFindingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FindingWhereInput
  }


  /**
   * Count Type ComplianceQueryCountOutputType
   */

  export type ComplianceQueryCountOutputType = {
    responses: number
  }

  export type ComplianceQueryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | ComplianceQueryCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * ComplianceQueryCountOutputType without action
   */
  export type ComplianceQueryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceQueryCountOutputType
     */
    select?: ComplianceQueryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComplianceQueryCountOutputType without action
   */
  export type ComplianceQueryCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    documentsLimit: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    documentsLimit: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    plan: $Enums.PlanType | null
    documentsLimit: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    plan: $Enums.PlanType | null
    documentsLimit: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    plan: number
    documentsLimit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    documentsLimit?: true
  }

  export type OrganizationSumAggregateInputType = {
    documentsLimit?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    documentsLimit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    documentsLimit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    documentsLimit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    slug: string
    plan: $Enums.PlanType
    documentsLimit: number | null
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    documentsLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profiles?: boolean | Organization$profilesArgs<ExtArgs>
    documents?: boolean | Organization$documentsArgs<ExtArgs>
    activityLogs?: boolean | Organization$activityLogsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    documentsLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    documentsLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    documentsLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "plan" | "documentsLimit" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | Organization$profilesArgs<ExtArgs>
    documents?: boolean | Organization$documentsArgs<ExtArgs>
    activityLogs?: boolean | Organization$activityLogsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      profiles: Prisma.$ProfilePayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      plan: $Enums.PlanType
      documentsLimit: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profiles<T extends Organization$profilesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Organization$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends Organization$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly slug: FieldRef<"Organization", 'String'>
    readonly plan: FieldRef<"Organization", 'PlanType'>
    readonly documentsLimit: FieldRef<"Organization", 'Int'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.profiles
   */
  export type Organization$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    cursor?: ProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Organization.documents
   */
  export type Organization$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Organization.activityLogs
   */
  export type Organization$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    email: string | null
    fullName: string | null
    avatarUrl: string | null
    role: $Enums.UserRole | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    email: string | null
    fullName: string | null
    avatarUrl: string | null
    role: $Enums.UserRole | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    email: number
    fullName: number
    avatarUrl: number
    role: number
    organizationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    avatarUrl?: true
    role?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    avatarUrl?: true
    role?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    avatarUrl?: true
    role?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    email: string
    fullName: string | null
    avatarUrl: string | null
    role: $Enums.UserRole
    organizationId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    avatarUrl?: boolean
    role?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | Profile$organizationArgs<ExtArgs>
    documents?: boolean | Profile$documentsArgs<ExtArgs>
    activityLogs?: boolean | Profile$activityLogsArgs<ExtArgs>
    complianceQueries?: boolean | Profile$complianceQueriesArgs<ExtArgs>
    notifications?: boolean | Profile$notificationsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    avatarUrl?: boolean
    role?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | Profile$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    avatarUrl?: boolean
    role?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | Profile$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    email?: boolean
    fullName?: boolean
    avatarUrl?: boolean
    role?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullName" | "avatarUrl" | "role" | "organizationId" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Profile$organizationArgs<ExtArgs>
    documents?: boolean | Profile$documentsArgs<ExtArgs>
    activityLogs?: boolean | Profile$activityLogsArgs<ExtArgs>
    complianceQueries?: boolean | Profile$complianceQueriesArgs<ExtArgs>
    notifications?: boolean | Profile$notificationsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Profile$organizationArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Profile$organizationArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      complianceQueries: Prisma.$ComplianceQueryPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      fullName: string | null
      avatarUrl: string | null
      role: $Enums.UserRole
      organizationId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends Profile$organizationArgs<ExtArgs> = {}>(args?: Subset<T, Profile$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    documents<T extends Profile$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends Profile$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    complianceQueries<T extends Profile$complianceQueriesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$complianceQueriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Profile$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly fullName: FieldRef<"Profile", 'String'>
    readonly avatarUrl: FieldRef<"Profile", 'String'>
    readonly role: FieldRef<"Profile", 'UserRole'>
    readonly organizationId: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.organization
   */
  export type Profile$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Profile.documents
   */
  export type Profile$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Profile.activityLogs
   */
  export type Profile$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * Profile.complianceQueries
   */
  export type Profile$complianceQueriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceQuery
     */
    select?: ComplianceQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceQuery
     */
    omit?: ComplianceQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceQueryInclude<ExtArgs> | null
    where?: ComplianceQueryWhereInput
    orderBy?: ComplianceQueryOrderByWithRelationInput | ComplianceQueryOrderByWithRelationInput[]
    cursor?: ComplianceQueryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplianceQueryScalarFieldEnum | ComplianceQueryScalarFieldEnum[]
  }

  /**
   * Profile.notifications
   */
  export type Profile$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    fileSize: number | null
    pageCount: number | null
    complianceScore: number | null
  }

  export type DocumentSumAggregateOutputType = {
    fileSize: number | null
    pageCount: number | null
    complianceScore: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    uploadedBy: string | null
    originalFileName: string | null
    filename: string | null
    mimeType: string | null
    storageKey: string | null
    fileUrl: string | null
    checksum: string | null
    fileSize: number | null
    pageCount: number | null
    language: string | null
    status: $Enums.DocumentStatus | null
    complianceScore: number | null
    riskLevel: $Enums.RiskLevel | null
    expirationDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    uploadedBy: string | null
    originalFileName: string | null
    filename: string | null
    mimeType: string | null
    storageKey: string | null
    fileUrl: string | null
    checksum: string | null
    fileSize: number | null
    pageCount: number | null
    language: string | null
    status: $Enums.DocumentStatus | null
    complianceScore: number | null
    riskLevel: $Enums.RiskLevel | null
    expirationDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    organizationId: number
    uploadedBy: number
    originalFileName: number
    filename: number
    mimeType: number
    storageKey: number
    fileUrl: number
    checksum: number
    fileSize: number
    pageCount: number
    language: number
    status: number
    complianceScore: number
    riskLevel: number
    expirationDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    fileSize?: true
    pageCount?: true
    complianceScore?: true
  }

  export type DocumentSumAggregateInputType = {
    fileSize?: true
    pageCount?: true
    complianceScore?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    organizationId?: true
    uploadedBy?: true
    originalFileName?: true
    filename?: true
    mimeType?: true
    storageKey?: true
    fileUrl?: true
    checksum?: true
    fileSize?: true
    pageCount?: true
    language?: true
    status?: true
    complianceScore?: true
    riskLevel?: true
    expirationDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    organizationId?: true
    uploadedBy?: true
    originalFileName?: true
    filename?: true
    mimeType?: true
    storageKey?: true
    fileUrl?: true
    checksum?: true
    fileSize?: true
    pageCount?: true
    language?: true
    status?: true
    complianceScore?: true
    riskLevel?: true
    expirationDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    organizationId?: true
    uploadedBy?: true
    originalFileName?: true
    filename?: true
    mimeType?: true
    storageKey?: true
    fileUrl?: true
    checksum?: true
    fileSize?: true
    pageCount?: true
    language?: true
    status?: true
    complianceScore?: true
    riskLevel?: true
    expirationDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    organizationId: string
    uploadedBy: string
    originalFileName: string
    filename: string
    mimeType: string | null
    storageKey: string | null
    fileUrl: string | null
    checksum: string | null
    fileSize: number | null
    pageCount: number | null
    language: string | null
    status: $Enums.DocumentStatus
    complianceScore: number | null
    riskLevel: $Enums.RiskLevel | null
    expirationDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    uploadedBy?: boolean
    originalFileName?: boolean
    filename?: boolean
    mimeType?: boolean
    storageKey?: boolean
    fileUrl?: boolean
    checksum?: boolean
    fileSize?: boolean
    pageCount?: boolean
    language?: boolean
    status?: boolean
    complianceScore?: boolean
    riskLevel?: boolean
    expirationDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    uploader?: boolean | ProfileDefaultArgs<ExtArgs>
    analyses?: boolean | Document$analysesArgs<ExtArgs>
    complianceQueries?: boolean | Document$complianceQueriesArgs<ExtArgs>
    notifications?: boolean | Document$notificationsArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    uploadedBy?: boolean
    originalFileName?: boolean
    filename?: boolean
    mimeType?: boolean
    storageKey?: boolean
    fileUrl?: boolean
    checksum?: boolean
    fileSize?: boolean
    pageCount?: boolean
    language?: boolean
    status?: boolean
    complianceScore?: boolean
    riskLevel?: boolean
    expirationDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    uploader?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    uploadedBy?: boolean
    originalFileName?: boolean
    filename?: boolean
    mimeType?: boolean
    storageKey?: boolean
    fileUrl?: boolean
    checksum?: boolean
    fileSize?: boolean
    pageCount?: boolean
    language?: boolean
    status?: boolean
    complianceScore?: boolean
    riskLevel?: boolean
    expirationDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    uploader?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    organizationId?: boolean
    uploadedBy?: boolean
    originalFileName?: boolean
    filename?: boolean
    mimeType?: boolean
    storageKey?: boolean
    fileUrl?: boolean
    checksum?: boolean
    fileSize?: boolean
    pageCount?: boolean
    language?: boolean
    status?: boolean
    complianceScore?: boolean
    riskLevel?: boolean
    expirationDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "uploadedBy" | "originalFileName" | "filename" | "mimeType" | "storageKey" | "fileUrl" | "checksum" | "fileSize" | "pageCount" | "language" | "status" | "complianceScore" | "riskLevel" | "expirationDate" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    uploader?: boolean | ProfileDefaultArgs<ExtArgs>
    analyses?: boolean | Document$analysesArgs<ExtArgs>
    complianceQueries?: boolean | Document$complianceQueriesArgs<ExtArgs>
    notifications?: boolean | Document$notificationsArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    uploader?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    uploader?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      uploader: Prisma.$ProfilePayload<ExtArgs>
      analyses: Prisma.$DocumentAnalysisPayload<ExtArgs>[]
      complianceQueries: Prisma.$ComplianceQueryPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      uploadedBy: string
      originalFileName: string
      filename: string
      mimeType: string | null
      storageKey: string | null
      fileUrl: string | null
      checksum: string | null
      fileSize: number | null
      pageCount: number | null
      language: string | null
      status: $Enums.DocumentStatus
      complianceScore: number | null
      riskLevel: $Enums.RiskLevel | null
      expirationDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    uploader<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    analyses<T extends Document$analysesArgs<ExtArgs> = {}>(args?: Subset<T, Document$analysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    complianceQueries<T extends Document$complianceQueriesArgs<ExtArgs> = {}>(args?: Subset<T, Document$complianceQueriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Document$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Document$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly organizationId: FieldRef<"Document", 'String'>
    readonly uploadedBy: FieldRef<"Document", 'String'>
    readonly originalFileName: FieldRef<"Document", 'String'>
    readonly filename: FieldRef<"Document", 'String'>
    readonly mimeType: FieldRef<"Document", 'String'>
    readonly storageKey: FieldRef<"Document", 'String'>
    readonly fileUrl: FieldRef<"Document", 'String'>
    readonly checksum: FieldRef<"Document", 'String'>
    readonly fileSize: FieldRef<"Document", 'Int'>
    readonly pageCount: FieldRef<"Document", 'Int'>
    readonly language: FieldRef<"Document", 'String'>
    readonly status: FieldRef<"Document", 'DocumentStatus'>
    readonly complianceScore: FieldRef<"Document", 'Int'>
    readonly riskLevel: FieldRef<"Document", 'RiskLevel'>
    readonly expirationDate: FieldRef<"Document", 'DateTime'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.analyses
   */
  export type Document$analysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentAnalysis
     */
    select?: DocumentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentAnalysis
     */
    omit?: DocumentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentAnalysisInclude<ExtArgs> | null
    where?: DocumentAnalysisWhereInput
    orderBy?: DocumentAnalysisOrderByWithRelationInput | DocumentAnalysisOrderByWithRelationInput[]
    cursor?: DocumentAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentAnalysisScalarFieldEnum | DocumentAnalysisScalarFieldEnum[]
  }

  /**
   * Document.complianceQueries
   */
  export type Document$complianceQueriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceQuery
     */
    select?: ComplianceQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceQuery
     */
    omit?: ComplianceQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceQueryInclude<ExtArgs> | null
    where?: ComplianceQueryWhereInput
    orderBy?: ComplianceQueryOrderByWithRelationInput | ComplianceQueryOrderByWithRelationInput[]
    cursor?: ComplianceQueryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplianceQueryScalarFieldEnum | ComplianceQueryScalarFieldEnum[]
  }

  /**
   * Document.notifications
   */
  export type Document$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model DocumentAnalysis
   */

  export type AggregateDocumentAnalysis = {
    _count: DocumentAnalysisCountAggregateOutputType | null
    _avg: DocumentAnalysisAvgAggregateOutputType | null
    _sum: DocumentAnalysisSumAggregateOutputType | null
    _min: DocumentAnalysisMinAggregateOutputType | null
    _max: DocumentAnalysisMaxAggregateOutputType | null
  }

  export type DocumentAnalysisAvgAggregateOutputType = {
    confidenceScore: number | null
  }

  export type DocumentAnalysisSumAggregateOutputType = {
    confidenceScore: number | null
  }

  export type DocumentAnalysisMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    executiveSummary: string | null
    overallVerdict: $Enums.AnalysisVerdict | null
    confidenceScore: number | null
    modelName: string | null
    promptVersion: string | null
    rulesetVersion: string | null
    governingLaw: string | null
    expirationDetected: boolean | null
    createdAt: Date | null
  }

  export type DocumentAnalysisMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    executiveSummary: string | null
    overallVerdict: $Enums.AnalysisVerdict | null
    confidenceScore: number | null
    modelName: string | null
    promptVersion: string | null
    rulesetVersion: string | null
    governingLaw: string | null
    expirationDetected: boolean | null
    createdAt: Date | null
  }

  export type DocumentAnalysisCountAggregateOutputType = {
    id: number
    documentId: number
    executiveSummary: number
    overallVerdict: number
    confidenceScore: number
    modelName: number
    promptVersion: number
    rulesetVersion: number
    parties: number
    obligations: number
    paymentTerms: number
    renewalTerms: number
    penalties: number
    governingLaw: number
    missingClauses: number
    unusualConditions: number
    complianceRequirements: number
    policyViolations: number
    regulatoryIssues: number
    missingSignatures: number
    expirationDetected: number
    importantDates: number
    risks: number
    recommendations: number
    createdAt: number
    _all: number
  }


  export type DocumentAnalysisAvgAggregateInputType = {
    confidenceScore?: true
  }

  export type DocumentAnalysisSumAggregateInputType = {
    confidenceScore?: true
  }

  export type DocumentAnalysisMinAggregateInputType = {
    id?: true
    documentId?: true
    executiveSummary?: true
    overallVerdict?: true
    confidenceScore?: true
    modelName?: true
    promptVersion?: true
    rulesetVersion?: true
    governingLaw?: true
    expirationDetected?: true
    createdAt?: true
  }

  export type DocumentAnalysisMaxAggregateInputType = {
    id?: true
    documentId?: true
    executiveSummary?: true
    overallVerdict?: true
    confidenceScore?: true
    modelName?: true
    promptVersion?: true
    rulesetVersion?: true
    governingLaw?: true
    expirationDetected?: true
    createdAt?: true
  }

  export type DocumentAnalysisCountAggregateInputType = {
    id?: true
    documentId?: true
    executiveSummary?: true
    overallVerdict?: true
    confidenceScore?: true
    modelName?: true
    promptVersion?: true
    rulesetVersion?: true
    parties?: true
    obligations?: true
    paymentTerms?: true
    renewalTerms?: true
    penalties?: true
    governingLaw?: true
    missingClauses?: true
    unusualConditions?: true
    complianceRequirements?: true
    policyViolations?: true
    regulatoryIssues?: true
    missingSignatures?: true
    expirationDetected?: true
    importantDates?: true
    risks?: true
    recommendations?: true
    createdAt?: true
    _all?: true
  }

  export type DocumentAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentAnalysis to aggregate.
     */
    where?: DocumentAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentAnalyses to fetch.
     */
    orderBy?: DocumentAnalysisOrderByWithRelationInput | DocumentAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentAnalyses
    **/
    _count?: true | DocumentAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentAnalysisMaxAggregateInputType
  }

  export type GetDocumentAnalysisAggregateType<T extends DocumentAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentAnalysis[P]>
      : GetScalarType<T[P], AggregateDocumentAnalysis[P]>
  }




  export type DocumentAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentAnalysisWhereInput
    orderBy?: DocumentAnalysisOrderByWithAggregationInput | DocumentAnalysisOrderByWithAggregationInput[]
    by: DocumentAnalysisScalarFieldEnum[] | DocumentAnalysisScalarFieldEnum
    having?: DocumentAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentAnalysisCountAggregateInputType | true
    _avg?: DocumentAnalysisAvgAggregateInputType
    _sum?: DocumentAnalysisSumAggregateInputType
    _min?: DocumentAnalysisMinAggregateInputType
    _max?: DocumentAnalysisMaxAggregateInputType
  }

  export type DocumentAnalysisGroupByOutputType = {
    id: string
    documentId: string
    executiveSummary: string | null
    overallVerdict: $Enums.AnalysisVerdict | null
    confidenceScore: number | null
    modelName: string | null
    promptVersion: string | null
    rulesetVersion: string | null
    parties: JsonValue | null
    obligations: JsonValue | null
    paymentTerms: JsonValue | null
    renewalTerms: JsonValue | null
    penalties: JsonValue | null
    governingLaw: string | null
    missingClauses: JsonValue | null
    unusualConditions: JsonValue | null
    complianceRequirements: JsonValue | null
    policyViolations: JsonValue | null
    regulatoryIssues: JsonValue | null
    missingSignatures: JsonValue | null
    expirationDetected: boolean
    importantDates: JsonValue | null
    risks: JsonValue | null
    recommendations: JsonValue | null
    createdAt: Date
    _count: DocumentAnalysisCountAggregateOutputType | null
    _avg: DocumentAnalysisAvgAggregateOutputType | null
    _sum: DocumentAnalysisSumAggregateOutputType | null
    _min: DocumentAnalysisMinAggregateOutputType | null
    _max: DocumentAnalysisMaxAggregateOutputType | null
  }

  type GetDocumentAnalysisGroupByPayload<T extends DocumentAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type DocumentAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    executiveSummary?: boolean
    overallVerdict?: boolean
    confidenceScore?: boolean
    modelName?: boolean
    promptVersion?: boolean
    rulesetVersion?: boolean
    parties?: boolean
    obligations?: boolean
    paymentTerms?: boolean
    renewalTerms?: boolean
    penalties?: boolean
    governingLaw?: boolean
    missingClauses?: boolean
    unusualConditions?: boolean
    complianceRequirements?: boolean
    policyViolations?: boolean
    regulatoryIssues?: boolean
    missingSignatures?: boolean
    expirationDetected?: boolean
    importantDates?: boolean
    risks?: boolean
    recommendations?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    findings?: boolean | DocumentAnalysis$findingsArgs<ExtArgs>
    _count?: boolean | DocumentAnalysisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentAnalysis"]>

  export type DocumentAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    executiveSummary?: boolean
    overallVerdict?: boolean
    confidenceScore?: boolean
    modelName?: boolean
    promptVersion?: boolean
    rulesetVersion?: boolean
    parties?: boolean
    obligations?: boolean
    paymentTerms?: boolean
    renewalTerms?: boolean
    penalties?: boolean
    governingLaw?: boolean
    missingClauses?: boolean
    unusualConditions?: boolean
    complianceRequirements?: boolean
    policyViolations?: boolean
    regulatoryIssues?: boolean
    missingSignatures?: boolean
    expirationDetected?: boolean
    importantDates?: boolean
    risks?: boolean
    recommendations?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentAnalysis"]>

  export type DocumentAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    executiveSummary?: boolean
    overallVerdict?: boolean
    confidenceScore?: boolean
    modelName?: boolean
    promptVersion?: boolean
    rulesetVersion?: boolean
    parties?: boolean
    obligations?: boolean
    paymentTerms?: boolean
    renewalTerms?: boolean
    penalties?: boolean
    governingLaw?: boolean
    missingClauses?: boolean
    unusualConditions?: boolean
    complianceRequirements?: boolean
    policyViolations?: boolean
    regulatoryIssues?: boolean
    missingSignatures?: boolean
    expirationDetected?: boolean
    importantDates?: boolean
    risks?: boolean
    recommendations?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentAnalysis"]>

  export type DocumentAnalysisSelectScalar = {
    id?: boolean
    documentId?: boolean
    executiveSummary?: boolean
    overallVerdict?: boolean
    confidenceScore?: boolean
    modelName?: boolean
    promptVersion?: boolean
    rulesetVersion?: boolean
    parties?: boolean
    obligations?: boolean
    paymentTerms?: boolean
    renewalTerms?: boolean
    penalties?: boolean
    governingLaw?: boolean
    missingClauses?: boolean
    unusualConditions?: boolean
    complianceRequirements?: boolean
    policyViolations?: boolean
    regulatoryIssues?: boolean
    missingSignatures?: boolean
    expirationDetected?: boolean
    importantDates?: boolean
    risks?: boolean
    recommendations?: boolean
    createdAt?: boolean
  }

  export type DocumentAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "executiveSummary" | "overallVerdict" | "confidenceScore" | "modelName" | "promptVersion" | "rulesetVersion" | "parties" | "obligations" | "paymentTerms" | "renewalTerms" | "penalties" | "governingLaw" | "missingClauses" | "unusualConditions" | "complianceRequirements" | "policyViolations" | "regulatoryIssues" | "missingSignatures" | "expirationDetected" | "importantDates" | "risks" | "recommendations" | "createdAt", ExtArgs["result"]["documentAnalysis"]>
  export type DocumentAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    findings?: boolean | DocumentAnalysis$findingsArgs<ExtArgs>
    _count?: boolean | DocumentAnalysisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type DocumentAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }

  export type $DocumentAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentAnalysis"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      findings: Prisma.$FindingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      executiveSummary: string | null
      overallVerdict: $Enums.AnalysisVerdict | null
      confidenceScore: number | null
      modelName: string | null
      promptVersion: string | null
      rulesetVersion: string | null
      parties: Prisma.JsonValue | null
      obligations: Prisma.JsonValue | null
      paymentTerms: Prisma.JsonValue | null
      renewalTerms: Prisma.JsonValue | null
      penalties: Prisma.JsonValue | null
      governingLaw: string | null
      missingClauses: Prisma.JsonValue | null
      unusualConditions: Prisma.JsonValue | null
      complianceRequirements: Prisma.JsonValue | null
      policyViolations: Prisma.JsonValue | null
      regulatoryIssues: Prisma.JsonValue | null
      missingSignatures: Prisma.JsonValue | null
      expirationDetected: boolean
      importantDates: Prisma.JsonValue | null
      risks: Prisma.JsonValue | null
      recommendations: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["documentAnalysis"]>
    composites: {}
  }

  type DocumentAnalysisGetPayload<S extends boolean | null | undefined | DocumentAnalysisDefaultArgs> = $Result.GetResult<Prisma.$DocumentAnalysisPayload, S>

  type DocumentAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentAnalysisCountAggregateInputType | true
    }

  export interface DocumentAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentAnalysis'], meta: { name: 'DocumentAnalysis' } }
    /**
     * Find zero or one DocumentAnalysis that matches the filter.
     * @param {DocumentAnalysisFindUniqueArgs} args - Arguments to find a DocumentAnalysis
     * @example
     * // Get one DocumentAnalysis
     * const documentAnalysis = await prisma.documentAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentAnalysisFindUniqueArgs>(args: SelectSubset<T, DocumentAnalysisFindUniqueArgs<ExtArgs>>): Prisma__DocumentAnalysisClient<$Result.GetResult<Prisma.$DocumentAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentAnalysisFindUniqueOrThrowArgs} args - Arguments to find a DocumentAnalysis
     * @example
     * // Get one DocumentAnalysis
     * const documentAnalysis = await prisma.documentAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentAnalysisClient<$Result.GetResult<Prisma.$DocumentAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAnalysisFindFirstArgs} args - Arguments to find a DocumentAnalysis
     * @example
     * // Get one DocumentAnalysis
     * const documentAnalysis = await prisma.documentAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentAnalysisFindFirstArgs>(args?: SelectSubset<T, DocumentAnalysisFindFirstArgs<ExtArgs>>): Prisma__DocumentAnalysisClient<$Result.GetResult<Prisma.$DocumentAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAnalysisFindFirstOrThrowArgs} args - Arguments to find a DocumentAnalysis
     * @example
     * // Get one DocumentAnalysis
     * const documentAnalysis = await prisma.documentAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentAnalysisClient<$Result.GetResult<Prisma.$DocumentAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentAnalyses
     * const documentAnalyses = await prisma.documentAnalysis.findMany()
     * 
     * // Get first 10 DocumentAnalyses
     * const documentAnalyses = await prisma.documentAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentAnalysisWithIdOnly = await prisma.documentAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentAnalysisFindManyArgs>(args?: SelectSubset<T, DocumentAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentAnalysis.
     * @param {DocumentAnalysisCreateArgs} args - Arguments to create a DocumentAnalysis.
     * @example
     * // Create one DocumentAnalysis
     * const DocumentAnalysis = await prisma.documentAnalysis.create({
     *   data: {
     *     // ... data to create a DocumentAnalysis
     *   }
     * })
     * 
     */
    create<T extends DocumentAnalysisCreateArgs>(args: SelectSubset<T, DocumentAnalysisCreateArgs<ExtArgs>>): Prisma__DocumentAnalysisClient<$Result.GetResult<Prisma.$DocumentAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentAnalyses.
     * @param {DocumentAnalysisCreateManyArgs} args - Arguments to create many DocumentAnalyses.
     * @example
     * // Create many DocumentAnalyses
     * const documentAnalysis = await prisma.documentAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentAnalysisCreateManyArgs>(args?: SelectSubset<T, DocumentAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentAnalyses and returns the data saved in the database.
     * @param {DocumentAnalysisCreateManyAndReturnArgs} args - Arguments to create many DocumentAnalyses.
     * @example
     * // Create many DocumentAnalyses
     * const documentAnalysis = await prisma.documentAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentAnalyses and only return the `id`
     * const documentAnalysisWithIdOnly = await prisma.documentAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentAnalysis.
     * @param {DocumentAnalysisDeleteArgs} args - Arguments to delete one DocumentAnalysis.
     * @example
     * // Delete one DocumentAnalysis
     * const DocumentAnalysis = await prisma.documentAnalysis.delete({
     *   where: {
     *     // ... filter to delete one DocumentAnalysis
     *   }
     * })
     * 
     */
    delete<T extends DocumentAnalysisDeleteArgs>(args: SelectSubset<T, DocumentAnalysisDeleteArgs<ExtArgs>>): Prisma__DocumentAnalysisClient<$Result.GetResult<Prisma.$DocumentAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentAnalysis.
     * @param {DocumentAnalysisUpdateArgs} args - Arguments to update one DocumentAnalysis.
     * @example
     * // Update one DocumentAnalysis
     * const documentAnalysis = await prisma.documentAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentAnalysisUpdateArgs>(args: SelectSubset<T, DocumentAnalysisUpdateArgs<ExtArgs>>): Prisma__DocumentAnalysisClient<$Result.GetResult<Prisma.$DocumentAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentAnalyses.
     * @param {DocumentAnalysisDeleteManyArgs} args - Arguments to filter DocumentAnalyses to delete.
     * @example
     * // Delete a few DocumentAnalyses
     * const { count } = await prisma.documentAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentAnalysisDeleteManyArgs>(args?: SelectSubset<T, DocumentAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentAnalyses
     * const documentAnalysis = await prisma.documentAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentAnalysisUpdateManyArgs>(args: SelectSubset<T, DocumentAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentAnalyses and returns the data updated in the database.
     * @param {DocumentAnalysisUpdateManyAndReturnArgs} args - Arguments to update many DocumentAnalyses.
     * @example
     * // Update many DocumentAnalyses
     * const documentAnalysis = await prisma.documentAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentAnalyses and only return the `id`
     * const documentAnalysisWithIdOnly = await prisma.documentAnalysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentAnalysis.
     * @param {DocumentAnalysisUpsertArgs} args - Arguments to update or create a DocumentAnalysis.
     * @example
     * // Update or create a DocumentAnalysis
     * const documentAnalysis = await prisma.documentAnalysis.upsert({
     *   create: {
     *     // ... data to create a DocumentAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends DocumentAnalysisUpsertArgs>(args: SelectSubset<T, DocumentAnalysisUpsertArgs<ExtArgs>>): Prisma__DocumentAnalysisClient<$Result.GetResult<Prisma.$DocumentAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAnalysisCountArgs} args - Arguments to filter DocumentAnalyses to count.
     * @example
     * // Count the number of DocumentAnalyses
     * const count = await prisma.documentAnalysis.count({
     *   where: {
     *     // ... the filter for the DocumentAnalyses we want to count
     *   }
     * })
    **/
    count<T extends DocumentAnalysisCountArgs>(
      args?: Subset<T, DocumentAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAnalysisAggregateArgs>(args: Subset<T, DocumentAnalysisAggregateArgs>): Prisma.PrismaPromise<GetDocumentAnalysisAggregateType<T>>

    /**
     * Group by DocumentAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAnalysisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: DocumentAnalysisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentAnalysis model
   */
  readonly fields: DocumentAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    findings<T extends DocumentAnalysis$findingsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentAnalysis$findingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentAnalysis model
   */
  interface DocumentAnalysisFieldRefs {
    readonly id: FieldRef<"DocumentAnalysis", 'String'>
    readonly documentId: FieldRef<"DocumentAnalysis", 'String'>
    readonly executiveSummary: FieldRef<"DocumentAnalysis", 'String'>
    readonly overallVerdict: FieldRef<"DocumentAnalysis", 'AnalysisVerdict'>
    readonly confidenceScore: FieldRef<"DocumentAnalysis", 'Float'>
    readonly modelName: FieldRef<"DocumentAnalysis", 'String'>
    readonly promptVersion: FieldRef<"DocumentAnalysis", 'String'>
    readonly rulesetVersion: FieldRef<"DocumentAnalysis", 'String'>
    readonly parties: FieldRef<"DocumentAnalysis", 'Json'>
    readonly obligations: FieldRef<"DocumentAnalysis", 'Json'>
    readonly paymentTerms: FieldRef<"DocumentAnalysis", 'Json'>
    readonly renewalTerms: FieldRef<"DocumentAnalysis", 'Json'>
    readonly penalties: FieldRef<"DocumentAnalysis", 'Json'>
    readonly governingLaw: FieldRef<"DocumentAnalysis", 'String'>
    readonly missingClauses: FieldRef<"DocumentAnalysis", 'Json'>
    readonly unusualConditions: FieldRef<"DocumentAnalysis", 'Json'>
    readonly complianceRequirements: FieldRef<"DocumentAnalysis", 'Json'>
    readonly policyViolations: FieldRef<"DocumentAnalysis", 'Json'>
    readonly regulatoryIssues: FieldRef<"DocumentAnalysis", 'Json'>
    readonly missingSignatures: FieldRef<"DocumentAnalysis", 'Json'>
    readonly expirationDetected: FieldRef<"DocumentAnalysis", 'Boolean'>
    readonly importantDates: FieldRef<"DocumentAnalysis", 'Json'>
    readonly risks: FieldRef<"DocumentAnalysis", 'Json'>
    readonly recommendations: FieldRef<"DocumentAnalysis", 'Json'>
    readonly createdAt: FieldRef<"DocumentAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentAnalysis findUnique
   */
  export type DocumentAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentAnalysis
     */
    select?: DocumentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentAnalysis
     */
    omit?: DocumentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which DocumentAnalysis to fetch.
     */
    where: DocumentAnalysisWhereUniqueInput
  }

  /**
   * DocumentAnalysis findUniqueOrThrow
   */
  export type DocumentAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentAnalysis
     */
    select?: DocumentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentAnalysis
     */
    omit?: DocumentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which DocumentAnalysis to fetch.
     */
    where: DocumentAnalysisWhereUniqueInput
  }

  /**
   * DocumentAnalysis findFirst
   */
  export type DocumentAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentAnalysis
     */
    select?: DocumentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentAnalysis
     */
    omit?: DocumentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which DocumentAnalysis to fetch.
     */
    where?: DocumentAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentAnalyses to fetch.
     */
    orderBy?: DocumentAnalysisOrderByWithRelationInput | DocumentAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentAnalyses.
     */
    cursor?: DocumentAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentAnalyses.
     */
    distinct?: DocumentAnalysisScalarFieldEnum | DocumentAnalysisScalarFieldEnum[]
  }

  /**
   * DocumentAnalysis findFirstOrThrow
   */
  export type DocumentAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentAnalysis
     */
    select?: DocumentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentAnalysis
     */
    omit?: DocumentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which DocumentAnalysis to fetch.
     */
    where?: DocumentAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentAnalyses to fetch.
     */
    orderBy?: DocumentAnalysisOrderByWithRelationInput | DocumentAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentAnalyses.
     */
    cursor?: DocumentAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentAnalyses.
     */
    distinct?: DocumentAnalysisScalarFieldEnum | DocumentAnalysisScalarFieldEnum[]
  }

  /**
   * DocumentAnalysis findMany
   */
  export type DocumentAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentAnalysis
     */
    select?: DocumentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentAnalysis
     */
    omit?: DocumentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which DocumentAnalyses to fetch.
     */
    where?: DocumentAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentAnalyses to fetch.
     */
    orderBy?: DocumentAnalysisOrderByWithRelationInput | DocumentAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentAnalyses.
     */
    cursor?: DocumentAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentAnalyses.
     */
    distinct?: DocumentAnalysisScalarFieldEnum | DocumentAnalysisScalarFieldEnum[]
  }

  /**
   * DocumentAnalysis create
   */
  export type DocumentAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentAnalysis
     */
    select?: DocumentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentAnalysis
     */
    omit?: DocumentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentAnalysis.
     */
    data: XOR<DocumentAnalysisCreateInput, DocumentAnalysisUncheckedCreateInput>
  }

  /**
   * DocumentAnalysis createMany
   */
  export type DocumentAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentAnalyses.
     */
    data: DocumentAnalysisCreateManyInput | DocumentAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentAnalysis createManyAndReturn
   */
  export type DocumentAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentAnalysis
     */
    select?: DocumentAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentAnalysis
     */
    omit?: DocumentAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentAnalyses.
     */
    data: DocumentAnalysisCreateManyInput | DocumentAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentAnalysis update
   */
  export type DocumentAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentAnalysis
     */
    select?: DocumentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentAnalysis
     */
    omit?: DocumentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentAnalysis.
     */
    data: XOR<DocumentAnalysisUpdateInput, DocumentAnalysisUncheckedUpdateInput>
    /**
     * Choose, which DocumentAnalysis to update.
     */
    where: DocumentAnalysisWhereUniqueInput
  }

  /**
   * DocumentAnalysis updateMany
   */
  export type DocumentAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentAnalyses.
     */
    data: XOR<DocumentAnalysisUpdateManyMutationInput, DocumentAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which DocumentAnalyses to update
     */
    where?: DocumentAnalysisWhereInput
    /**
     * Limit how many DocumentAnalyses to update.
     */
    limit?: number
  }

  /**
   * DocumentAnalysis updateManyAndReturn
   */
  export type DocumentAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentAnalysis
     */
    select?: DocumentAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentAnalysis
     */
    omit?: DocumentAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update DocumentAnalyses.
     */
    data: XOR<DocumentAnalysisUpdateManyMutationInput, DocumentAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which DocumentAnalyses to update
     */
    where?: DocumentAnalysisWhereInput
    /**
     * Limit how many DocumentAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentAnalysis upsert
   */
  export type DocumentAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentAnalysis
     */
    select?: DocumentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentAnalysis
     */
    omit?: DocumentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentAnalysis to update in case it exists.
     */
    where: DocumentAnalysisWhereUniqueInput
    /**
     * In case the DocumentAnalysis found by the `where` argument doesn't exist, create a new DocumentAnalysis with this data.
     */
    create: XOR<DocumentAnalysisCreateInput, DocumentAnalysisUncheckedCreateInput>
    /**
     * In case the DocumentAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentAnalysisUpdateInput, DocumentAnalysisUncheckedUpdateInput>
  }

  /**
   * DocumentAnalysis delete
   */
  export type DocumentAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentAnalysis
     */
    select?: DocumentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentAnalysis
     */
    omit?: DocumentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentAnalysisInclude<ExtArgs> | null
    /**
     * Filter which DocumentAnalysis to delete.
     */
    where: DocumentAnalysisWhereUniqueInput
  }

  /**
   * DocumentAnalysis deleteMany
   */
  export type DocumentAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentAnalyses to delete
     */
    where?: DocumentAnalysisWhereInput
    /**
     * Limit how many DocumentAnalyses to delete.
     */
    limit?: number
  }

  /**
   * DocumentAnalysis.findings
   */
  export type DocumentAnalysis$findingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    where?: FindingWhereInput
    orderBy?: FindingOrderByWithRelationInput | FindingOrderByWithRelationInput[]
    cursor?: FindingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FindingScalarFieldEnum | FindingScalarFieldEnum[]
  }

  /**
   * DocumentAnalysis without action
   */
  export type DocumentAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentAnalysis
     */
    select?: DocumentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentAnalysis
     */
    omit?: DocumentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model Finding
   */

  export type AggregateFinding = {
    _count: FindingCountAggregateOutputType | null
    _avg: FindingAvgAggregateOutputType | null
    _sum: FindingSumAggregateOutputType | null
    _min: FindingMinAggregateOutputType | null
    _max: FindingMaxAggregateOutputType | null
  }

  export type FindingAvgAggregateOutputType = {
    pageNumber: number | null
  }

  export type FindingSumAggregateOutputType = {
    pageNumber: number | null
  }

  export type FindingMinAggregateOutputType = {
    id: string | null
    analysisId: string | null
    title: string | null
    description: string | null
    severity: $Enums.FindingSeverity | null
    clauseReference: string | null
    pageNumber: number | null
    excerpt: string | null
    recommendation: string | null
    createdAt: Date | null
  }

  export type FindingMaxAggregateOutputType = {
    id: string | null
    analysisId: string | null
    title: string | null
    description: string | null
    severity: $Enums.FindingSeverity | null
    clauseReference: string | null
    pageNumber: number | null
    excerpt: string | null
    recommendation: string | null
    createdAt: Date | null
  }

  export type FindingCountAggregateOutputType = {
    id: number
    analysisId: number
    title: number
    description: number
    severity: number
    clauseReference: number
    pageNumber: number
    excerpt: number
    recommendation: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type FindingAvgAggregateInputType = {
    pageNumber?: true
  }

  export type FindingSumAggregateInputType = {
    pageNumber?: true
  }

  export type FindingMinAggregateInputType = {
    id?: true
    analysisId?: true
    title?: true
    description?: true
    severity?: true
    clauseReference?: true
    pageNumber?: true
    excerpt?: true
    recommendation?: true
    createdAt?: true
  }

  export type FindingMaxAggregateInputType = {
    id?: true
    analysisId?: true
    title?: true
    description?: true
    severity?: true
    clauseReference?: true
    pageNumber?: true
    excerpt?: true
    recommendation?: true
    createdAt?: true
  }

  export type FindingCountAggregateInputType = {
    id?: true
    analysisId?: true
    title?: true
    description?: true
    severity?: true
    clauseReference?: true
    pageNumber?: true
    excerpt?: true
    recommendation?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type FindingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finding to aggregate.
     */
    where?: FindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Findings to fetch.
     */
    orderBy?: FindingOrderByWithRelationInput | FindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Findings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Findings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Findings
    **/
    _count?: true | FindingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FindingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FindingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FindingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FindingMaxAggregateInputType
  }

  export type GetFindingAggregateType<T extends FindingAggregateArgs> = {
        [P in keyof T & keyof AggregateFinding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinding[P]>
      : GetScalarType<T[P], AggregateFinding[P]>
  }




  export type FindingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FindingWhereInput
    orderBy?: FindingOrderByWithAggregationInput | FindingOrderByWithAggregationInput[]
    by: FindingScalarFieldEnum[] | FindingScalarFieldEnum
    having?: FindingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FindingCountAggregateInputType | true
    _avg?: FindingAvgAggregateInputType
    _sum?: FindingSumAggregateInputType
    _min?: FindingMinAggregateInputType
    _max?: FindingMaxAggregateInputType
  }

  export type FindingGroupByOutputType = {
    id: string
    analysisId: string
    title: string
    description: string | null
    severity: $Enums.FindingSeverity
    clauseReference: string | null
    pageNumber: number | null
    excerpt: string | null
    recommendation: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: FindingCountAggregateOutputType | null
    _avg: FindingAvgAggregateOutputType | null
    _sum: FindingSumAggregateOutputType | null
    _min: FindingMinAggregateOutputType | null
    _max: FindingMaxAggregateOutputType | null
  }

  type GetFindingGroupByPayload<T extends FindingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FindingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FindingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FindingGroupByOutputType[P]>
            : GetScalarType<T[P], FindingGroupByOutputType[P]>
        }
      >
    >


  export type FindingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    analysisId?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    clauseReference?: boolean
    pageNumber?: boolean
    excerpt?: boolean
    recommendation?: boolean
    metadata?: boolean
    createdAt?: boolean
    analysis?: boolean | DocumentAnalysisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finding"]>

  export type FindingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    analysisId?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    clauseReference?: boolean
    pageNumber?: boolean
    excerpt?: boolean
    recommendation?: boolean
    metadata?: boolean
    createdAt?: boolean
    analysis?: boolean | DocumentAnalysisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finding"]>

  export type FindingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    analysisId?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    clauseReference?: boolean
    pageNumber?: boolean
    excerpt?: boolean
    recommendation?: boolean
    metadata?: boolean
    createdAt?: boolean
    analysis?: boolean | DocumentAnalysisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finding"]>

  export type FindingSelectScalar = {
    id?: boolean
    analysisId?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    clauseReference?: boolean
    pageNumber?: boolean
    excerpt?: boolean
    recommendation?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type FindingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "analysisId" | "title" | "description" | "severity" | "clauseReference" | "pageNumber" | "excerpt" | "recommendation" | "metadata" | "createdAt", ExtArgs["result"]["finding"]>
  export type FindingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analysis?: boolean | DocumentAnalysisDefaultArgs<ExtArgs>
  }
  export type FindingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analysis?: boolean | DocumentAnalysisDefaultArgs<ExtArgs>
  }
  export type FindingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analysis?: boolean | DocumentAnalysisDefaultArgs<ExtArgs>
  }

  export type $FindingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Finding"
    objects: {
      analysis: Prisma.$DocumentAnalysisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      analysisId: string
      title: string
      description: string | null
      severity: $Enums.FindingSeverity
      clauseReference: string | null
      pageNumber: number | null
      excerpt: string | null
      recommendation: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["finding"]>
    composites: {}
  }

  type FindingGetPayload<S extends boolean | null | undefined | FindingDefaultArgs> = $Result.GetResult<Prisma.$FindingPayload, S>

  type FindingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FindingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FindingCountAggregateInputType | true
    }

  export interface FindingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Finding'], meta: { name: 'Finding' } }
    /**
     * Find zero or one Finding that matches the filter.
     * @param {FindingFindUniqueArgs} args - Arguments to find a Finding
     * @example
     * // Get one Finding
     * const finding = await prisma.finding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FindingFindUniqueArgs>(args: SelectSubset<T, FindingFindUniqueArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Finding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FindingFindUniqueOrThrowArgs} args - Arguments to find a Finding
     * @example
     * // Get one Finding
     * const finding = await prisma.finding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FindingFindUniqueOrThrowArgs>(args: SelectSubset<T, FindingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingFindFirstArgs} args - Arguments to find a Finding
     * @example
     * // Get one Finding
     * const finding = await prisma.finding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FindingFindFirstArgs>(args?: SelectSubset<T, FindingFindFirstArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingFindFirstOrThrowArgs} args - Arguments to find a Finding
     * @example
     * // Get one Finding
     * const finding = await prisma.finding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FindingFindFirstOrThrowArgs>(args?: SelectSubset<T, FindingFindFirstOrThrowArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Findings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Findings
     * const findings = await prisma.finding.findMany()
     * 
     * // Get first 10 Findings
     * const findings = await prisma.finding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const findingWithIdOnly = await prisma.finding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FindingFindManyArgs>(args?: SelectSubset<T, FindingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Finding.
     * @param {FindingCreateArgs} args - Arguments to create a Finding.
     * @example
     * // Create one Finding
     * const Finding = await prisma.finding.create({
     *   data: {
     *     // ... data to create a Finding
     *   }
     * })
     * 
     */
    create<T extends FindingCreateArgs>(args: SelectSubset<T, FindingCreateArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Findings.
     * @param {FindingCreateManyArgs} args - Arguments to create many Findings.
     * @example
     * // Create many Findings
     * const finding = await prisma.finding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FindingCreateManyArgs>(args?: SelectSubset<T, FindingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Findings and returns the data saved in the database.
     * @param {FindingCreateManyAndReturnArgs} args - Arguments to create many Findings.
     * @example
     * // Create many Findings
     * const finding = await prisma.finding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Findings and only return the `id`
     * const findingWithIdOnly = await prisma.finding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FindingCreateManyAndReturnArgs>(args?: SelectSubset<T, FindingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Finding.
     * @param {FindingDeleteArgs} args - Arguments to delete one Finding.
     * @example
     * // Delete one Finding
     * const Finding = await prisma.finding.delete({
     *   where: {
     *     // ... filter to delete one Finding
     *   }
     * })
     * 
     */
    delete<T extends FindingDeleteArgs>(args: SelectSubset<T, FindingDeleteArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Finding.
     * @param {FindingUpdateArgs} args - Arguments to update one Finding.
     * @example
     * // Update one Finding
     * const finding = await prisma.finding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FindingUpdateArgs>(args: SelectSubset<T, FindingUpdateArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Findings.
     * @param {FindingDeleteManyArgs} args - Arguments to filter Findings to delete.
     * @example
     * // Delete a few Findings
     * const { count } = await prisma.finding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FindingDeleteManyArgs>(args?: SelectSubset<T, FindingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Findings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Findings
     * const finding = await prisma.finding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FindingUpdateManyArgs>(args: SelectSubset<T, FindingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Findings and returns the data updated in the database.
     * @param {FindingUpdateManyAndReturnArgs} args - Arguments to update many Findings.
     * @example
     * // Update many Findings
     * const finding = await prisma.finding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Findings and only return the `id`
     * const findingWithIdOnly = await prisma.finding.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FindingUpdateManyAndReturnArgs>(args: SelectSubset<T, FindingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Finding.
     * @param {FindingUpsertArgs} args - Arguments to update or create a Finding.
     * @example
     * // Update or create a Finding
     * const finding = await prisma.finding.upsert({
     *   create: {
     *     // ... data to create a Finding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finding we want to update
     *   }
     * })
     */
    upsert<T extends FindingUpsertArgs>(args: SelectSubset<T, FindingUpsertArgs<ExtArgs>>): Prisma__FindingClient<$Result.GetResult<Prisma.$FindingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Findings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingCountArgs} args - Arguments to filter Findings to count.
     * @example
     * // Count the number of Findings
     * const count = await prisma.finding.count({
     *   where: {
     *     // ... the filter for the Findings we want to count
     *   }
     * })
    **/
    count<T extends FindingCountArgs>(
      args?: Subset<T, FindingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FindingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Finding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FindingAggregateArgs>(args: Subset<T, FindingAggregateArgs>): Prisma.PrismaPromise<GetFindingAggregateType<T>>

    /**
     * Group by Finding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FindingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FindingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FindingGroupByArgs['orderBy'] }
        : { orderBy?: FindingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FindingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFindingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Finding model
   */
  readonly fields: FindingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Finding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FindingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analysis<T extends DocumentAnalysisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentAnalysisDefaultArgs<ExtArgs>>): Prisma__DocumentAnalysisClient<$Result.GetResult<Prisma.$DocumentAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Finding model
   */
  interface FindingFieldRefs {
    readonly id: FieldRef<"Finding", 'String'>
    readonly analysisId: FieldRef<"Finding", 'String'>
    readonly title: FieldRef<"Finding", 'String'>
    readonly description: FieldRef<"Finding", 'String'>
    readonly severity: FieldRef<"Finding", 'FindingSeverity'>
    readonly clauseReference: FieldRef<"Finding", 'String'>
    readonly pageNumber: FieldRef<"Finding", 'Int'>
    readonly excerpt: FieldRef<"Finding", 'String'>
    readonly recommendation: FieldRef<"Finding", 'String'>
    readonly metadata: FieldRef<"Finding", 'Json'>
    readonly createdAt: FieldRef<"Finding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Finding findUnique
   */
  export type FindingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter, which Finding to fetch.
     */
    where: FindingWhereUniqueInput
  }

  /**
   * Finding findUniqueOrThrow
   */
  export type FindingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter, which Finding to fetch.
     */
    where: FindingWhereUniqueInput
  }

  /**
   * Finding findFirst
   */
  export type FindingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter, which Finding to fetch.
     */
    where?: FindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Findings to fetch.
     */
    orderBy?: FindingOrderByWithRelationInput | FindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Findings.
     */
    cursor?: FindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Findings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Findings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Findings.
     */
    distinct?: FindingScalarFieldEnum | FindingScalarFieldEnum[]
  }

  /**
   * Finding findFirstOrThrow
   */
  export type FindingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter, which Finding to fetch.
     */
    where?: FindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Findings to fetch.
     */
    orderBy?: FindingOrderByWithRelationInput | FindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Findings.
     */
    cursor?: FindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Findings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Findings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Findings.
     */
    distinct?: FindingScalarFieldEnum | FindingScalarFieldEnum[]
  }

  /**
   * Finding findMany
   */
  export type FindingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter, which Findings to fetch.
     */
    where?: FindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Findings to fetch.
     */
    orderBy?: FindingOrderByWithRelationInput | FindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Findings.
     */
    cursor?: FindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Findings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Findings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Findings.
     */
    distinct?: FindingScalarFieldEnum | FindingScalarFieldEnum[]
  }

  /**
   * Finding create
   */
  export type FindingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * The data needed to create a Finding.
     */
    data: XOR<FindingCreateInput, FindingUncheckedCreateInput>
  }

  /**
   * Finding createMany
   */
  export type FindingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Findings.
     */
    data: FindingCreateManyInput | FindingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Finding createManyAndReturn
   */
  export type FindingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * The data used to create many Findings.
     */
    data: FindingCreateManyInput | FindingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Finding update
   */
  export type FindingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * The data needed to update a Finding.
     */
    data: XOR<FindingUpdateInput, FindingUncheckedUpdateInput>
    /**
     * Choose, which Finding to update.
     */
    where: FindingWhereUniqueInput
  }

  /**
   * Finding updateMany
   */
  export type FindingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Findings.
     */
    data: XOR<FindingUpdateManyMutationInput, FindingUncheckedUpdateManyInput>
    /**
     * Filter which Findings to update
     */
    where?: FindingWhereInput
    /**
     * Limit how many Findings to update.
     */
    limit?: number
  }

  /**
   * Finding updateManyAndReturn
   */
  export type FindingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * The data used to update Findings.
     */
    data: XOR<FindingUpdateManyMutationInput, FindingUncheckedUpdateManyInput>
    /**
     * Filter which Findings to update
     */
    where?: FindingWhereInput
    /**
     * Limit how many Findings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Finding upsert
   */
  export type FindingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * The filter to search for the Finding to update in case it exists.
     */
    where: FindingWhereUniqueInput
    /**
     * In case the Finding found by the `where` argument doesn't exist, create a new Finding with this data.
     */
    create: XOR<FindingCreateInput, FindingUncheckedCreateInput>
    /**
     * In case the Finding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FindingUpdateInput, FindingUncheckedUpdateInput>
  }

  /**
   * Finding delete
   */
  export type FindingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
    /**
     * Filter which Finding to delete.
     */
    where: FindingWhereUniqueInput
  }

  /**
   * Finding deleteMany
   */
  export type FindingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Findings to delete
     */
    where?: FindingWhereInput
    /**
     * Limit how many Findings to delete.
     */
    limit?: number
  }

  /**
   * Finding without action
   */
  export type FindingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finding
     */
    select?: FindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finding
     */
    omit?: FindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FindingInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    userId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    userId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    organizationId: number
    userId: number
    action: number
    entityType: number
    entityId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    organizationId: string
    userId: string | null
    action: string
    entityType: string | null
    entityId: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "userId" | "action" | "entityType" | "entityId" | "metadata" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      user: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      userId: string | null
      action: string
      entityType: string | null
      entityId: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends ActivityLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$userArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly organizationId: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly entityType: FieldRef<"ActivityLog", 'String'>
    readonly entityId: FieldRef<"ActivityLog", 'String'>
    readonly metadata: FieldRef<"ActivityLog", 'Json'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.user
   */
  export type ActivityLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model ComplianceQuery
   */

  export type AggregateComplianceQuery = {
    _count: ComplianceQueryCountAggregateOutputType | null
    _avg: ComplianceQueryAvgAggregateOutputType | null
    _sum: ComplianceQuerySumAggregateOutputType | null
    _min: ComplianceQueryMinAggregateOutputType | null
    _max: ComplianceQueryMaxAggregateOutputType | null
  }

  export type ComplianceQueryAvgAggregateOutputType = {
    attemptCount: number | null
  }

  export type ComplianceQuerySumAggregateOutputType = {
    attemptCount: number | null
  }

  export type ComplianceQueryMinAggregateOutputType = {
    id: string | null
    queryText: string | null
    status: $Enums.ComplianceQueryStatus | null
    documentId: string | null
    userId: string | null
    attemptCount: number | null
    errorMessage: string | null
    processingStartedAt: Date | null
    processingFinishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComplianceQueryMaxAggregateOutputType = {
    id: string | null
    queryText: string | null
    status: $Enums.ComplianceQueryStatus | null
    documentId: string | null
    userId: string | null
    attemptCount: number | null
    errorMessage: string | null
    processingStartedAt: Date | null
    processingFinishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComplianceQueryCountAggregateOutputType = {
    id: number
    queryText: number
    status: number
    documentId: number
    userId: number
    attemptCount: number
    errorMessage: number
    processingStartedAt: number
    processingFinishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ComplianceQueryAvgAggregateInputType = {
    attemptCount?: true
  }

  export type ComplianceQuerySumAggregateInputType = {
    attemptCount?: true
  }

  export type ComplianceQueryMinAggregateInputType = {
    id?: true
    queryText?: true
    status?: true
    documentId?: true
    userId?: true
    attemptCount?: true
    errorMessage?: true
    processingStartedAt?: true
    processingFinishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComplianceQueryMaxAggregateInputType = {
    id?: true
    queryText?: true
    status?: true
    documentId?: true
    userId?: true
    attemptCount?: true
    errorMessage?: true
    processingStartedAt?: true
    processingFinishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComplianceQueryCountAggregateInputType = {
    id?: true
    queryText?: true
    status?: true
    documentId?: true
    userId?: true
    attemptCount?: true
    errorMessage?: true
    processingStartedAt?: true
    processingFinishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ComplianceQueryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComplianceQuery to aggregate.
     */
    where?: ComplianceQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplianceQueries to fetch.
     */
    orderBy?: ComplianceQueryOrderByWithRelationInput | ComplianceQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComplianceQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplianceQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplianceQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComplianceQueries
    **/
    _count?: true | ComplianceQueryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComplianceQueryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComplianceQuerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComplianceQueryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComplianceQueryMaxAggregateInputType
  }

  export type GetComplianceQueryAggregateType<T extends ComplianceQueryAggregateArgs> = {
        [P in keyof T & keyof AggregateComplianceQuery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplianceQuery[P]>
      : GetScalarType<T[P], AggregateComplianceQuery[P]>
  }




  export type ComplianceQueryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplianceQueryWhereInput
    orderBy?: ComplianceQueryOrderByWithAggregationInput | ComplianceQueryOrderByWithAggregationInput[]
    by: ComplianceQueryScalarFieldEnum[] | ComplianceQueryScalarFieldEnum
    having?: ComplianceQueryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplianceQueryCountAggregateInputType | true
    _avg?: ComplianceQueryAvgAggregateInputType
    _sum?: ComplianceQuerySumAggregateInputType
    _min?: ComplianceQueryMinAggregateInputType
    _max?: ComplianceQueryMaxAggregateInputType
  }

  export type ComplianceQueryGroupByOutputType = {
    id: string
    queryText: string
    status: $Enums.ComplianceQueryStatus
    documentId: string | null
    userId: string
    attemptCount: number
    errorMessage: string | null
    processingStartedAt: Date | null
    processingFinishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ComplianceQueryCountAggregateOutputType | null
    _avg: ComplianceQueryAvgAggregateOutputType | null
    _sum: ComplianceQuerySumAggregateOutputType | null
    _min: ComplianceQueryMinAggregateOutputType | null
    _max: ComplianceQueryMaxAggregateOutputType | null
  }

  type GetComplianceQueryGroupByPayload<T extends ComplianceQueryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComplianceQueryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComplianceQueryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplianceQueryGroupByOutputType[P]>
            : GetScalarType<T[P], ComplianceQueryGroupByOutputType[P]>
        }
      >
    >


  export type ComplianceQuerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryText?: boolean
    status?: boolean
    documentId?: boolean
    userId?: boolean
    attemptCount?: boolean
    errorMessage?: boolean
    processingStartedAt?: boolean
    processingFinishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | ComplianceQuery$documentArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    responses?: boolean | ComplianceQuery$responsesArgs<ExtArgs>
    _count?: boolean | ComplianceQueryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complianceQuery"]>

  export type ComplianceQuerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryText?: boolean
    status?: boolean
    documentId?: boolean
    userId?: boolean
    attemptCount?: boolean
    errorMessage?: boolean
    processingStartedAt?: boolean
    processingFinishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | ComplianceQuery$documentArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complianceQuery"]>

  export type ComplianceQuerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryText?: boolean
    status?: boolean
    documentId?: boolean
    userId?: boolean
    attemptCount?: boolean
    errorMessage?: boolean
    processingStartedAt?: boolean
    processingFinishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | ComplianceQuery$documentArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complianceQuery"]>

  export type ComplianceQuerySelectScalar = {
    id?: boolean
    queryText?: boolean
    status?: boolean
    documentId?: boolean
    userId?: boolean
    attemptCount?: boolean
    errorMessage?: boolean
    processingStartedAt?: boolean
    processingFinishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ComplianceQueryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "queryText" | "status" | "documentId" | "userId" | "attemptCount" | "errorMessage" | "processingStartedAt" | "processingFinishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["complianceQuery"]>
  export type ComplianceQueryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | ComplianceQuery$documentArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    responses?: boolean | ComplianceQuery$responsesArgs<ExtArgs>
    _count?: boolean | ComplianceQueryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComplianceQueryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | ComplianceQuery$documentArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ComplianceQueryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | ComplianceQuery$documentArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $ComplianceQueryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComplianceQuery"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs> | null
      user: Prisma.$ProfilePayload<ExtArgs>
      responses: Prisma.$AIResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      queryText: string
      status: $Enums.ComplianceQueryStatus
      documentId: string | null
      userId: string
      attemptCount: number
      errorMessage: string | null
      processingStartedAt: Date | null
      processingFinishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["complianceQuery"]>
    composites: {}
  }

  type ComplianceQueryGetPayload<S extends boolean | null | undefined | ComplianceQueryDefaultArgs> = $Result.GetResult<Prisma.$ComplianceQueryPayload, S>

  type ComplianceQueryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComplianceQueryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComplianceQueryCountAggregateInputType | true
    }

  export interface ComplianceQueryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComplianceQuery'], meta: { name: 'ComplianceQuery' } }
    /**
     * Find zero or one ComplianceQuery that matches the filter.
     * @param {ComplianceQueryFindUniqueArgs} args - Arguments to find a ComplianceQuery
     * @example
     * // Get one ComplianceQuery
     * const complianceQuery = await prisma.complianceQuery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComplianceQueryFindUniqueArgs>(args: SelectSubset<T, ComplianceQueryFindUniqueArgs<ExtArgs>>): Prisma__ComplianceQueryClient<$Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComplianceQuery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComplianceQueryFindUniqueOrThrowArgs} args - Arguments to find a ComplianceQuery
     * @example
     * // Get one ComplianceQuery
     * const complianceQuery = await prisma.complianceQuery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComplianceQueryFindUniqueOrThrowArgs>(args: SelectSubset<T, ComplianceQueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComplianceQueryClient<$Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComplianceQuery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceQueryFindFirstArgs} args - Arguments to find a ComplianceQuery
     * @example
     * // Get one ComplianceQuery
     * const complianceQuery = await prisma.complianceQuery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComplianceQueryFindFirstArgs>(args?: SelectSubset<T, ComplianceQueryFindFirstArgs<ExtArgs>>): Prisma__ComplianceQueryClient<$Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComplianceQuery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceQueryFindFirstOrThrowArgs} args - Arguments to find a ComplianceQuery
     * @example
     * // Get one ComplianceQuery
     * const complianceQuery = await prisma.complianceQuery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComplianceQueryFindFirstOrThrowArgs>(args?: SelectSubset<T, ComplianceQueryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComplianceQueryClient<$Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComplianceQueries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceQueryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComplianceQueries
     * const complianceQueries = await prisma.complianceQuery.findMany()
     * 
     * // Get first 10 ComplianceQueries
     * const complianceQueries = await prisma.complianceQuery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const complianceQueryWithIdOnly = await prisma.complianceQuery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComplianceQueryFindManyArgs>(args?: SelectSubset<T, ComplianceQueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComplianceQuery.
     * @param {ComplianceQueryCreateArgs} args - Arguments to create a ComplianceQuery.
     * @example
     * // Create one ComplianceQuery
     * const ComplianceQuery = await prisma.complianceQuery.create({
     *   data: {
     *     // ... data to create a ComplianceQuery
     *   }
     * })
     * 
     */
    create<T extends ComplianceQueryCreateArgs>(args: SelectSubset<T, ComplianceQueryCreateArgs<ExtArgs>>): Prisma__ComplianceQueryClient<$Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComplianceQueries.
     * @param {ComplianceQueryCreateManyArgs} args - Arguments to create many ComplianceQueries.
     * @example
     * // Create many ComplianceQueries
     * const complianceQuery = await prisma.complianceQuery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComplianceQueryCreateManyArgs>(args?: SelectSubset<T, ComplianceQueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ComplianceQueries and returns the data saved in the database.
     * @param {ComplianceQueryCreateManyAndReturnArgs} args - Arguments to create many ComplianceQueries.
     * @example
     * // Create many ComplianceQueries
     * const complianceQuery = await prisma.complianceQuery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ComplianceQueries and only return the `id`
     * const complianceQueryWithIdOnly = await prisma.complianceQuery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComplianceQueryCreateManyAndReturnArgs>(args?: SelectSubset<T, ComplianceQueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ComplianceQuery.
     * @param {ComplianceQueryDeleteArgs} args - Arguments to delete one ComplianceQuery.
     * @example
     * // Delete one ComplianceQuery
     * const ComplianceQuery = await prisma.complianceQuery.delete({
     *   where: {
     *     // ... filter to delete one ComplianceQuery
     *   }
     * })
     * 
     */
    delete<T extends ComplianceQueryDeleteArgs>(args: SelectSubset<T, ComplianceQueryDeleteArgs<ExtArgs>>): Prisma__ComplianceQueryClient<$Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComplianceQuery.
     * @param {ComplianceQueryUpdateArgs} args - Arguments to update one ComplianceQuery.
     * @example
     * // Update one ComplianceQuery
     * const complianceQuery = await prisma.complianceQuery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComplianceQueryUpdateArgs>(args: SelectSubset<T, ComplianceQueryUpdateArgs<ExtArgs>>): Prisma__ComplianceQueryClient<$Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComplianceQueries.
     * @param {ComplianceQueryDeleteManyArgs} args - Arguments to filter ComplianceQueries to delete.
     * @example
     * // Delete a few ComplianceQueries
     * const { count } = await prisma.complianceQuery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComplianceQueryDeleteManyArgs>(args?: SelectSubset<T, ComplianceQueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComplianceQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceQueryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComplianceQueries
     * const complianceQuery = await prisma.complianceQuery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComplianceQueryUpdateManyArgs>(args: SelectSubset<T, ComplianceQueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComplianceQueries and returns the data updated in the database.
     * @param {ComplianceQueryUpdateManyAndReturnArgs} args - Arguments to update many ComplianceQueries.
     * @example
     * // Update many ComplianceQueries
     * const complianceQuery = await prisma.complianceQuery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ComplianceQueries and only return the `id`
     * const complianceQueryWithIdOnly = await prisma.complianceQuery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComplianceQueryUpdateManyAndReturnArgs>(args: SelectSubset<T, ComplianceQueryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ComplianceQuery.
     * @param {ComplianceQueryUpsertArgs} args - Arguments to update or create a ComplianceQuery.
     * @example
     * // Update or create a ComplianceQuery
     * const complianceQuery = await prisma.complianceQuery.upsert({
     *   create: {
     *     // ... data to create a ComplianceQuery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComplianceQuery we want to update
     *   }
     * })
     */
    upsert<T extends ComplianceQueryUpsertArgs>(args: SelectSubset<T, ComplianceQueryUpsertArgs<ExtArgs>>): Prisma__ComplianceQueryClient<$Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComplianceQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceQueryCountArgs} args - Arguments to filter ComplianceQueries to count.
     * @example
     * // Count the number of ComplianceQueries
     * const count = await prisma.complianceQuery.count({
     *   where: {
     *     // ... the filter for the ComplianceQueries we want to count
     *   }
     * })
    **/
    count<T extends ComplianceQueryCountArgs>(
      args?: Subset<T, ComplianceQueryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplianceQueryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComplianceQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceQueryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComplianceQueryAggregateArgs>(args: Subset<T, ComplianceQueryAggregateArgs>): Prisma.PrismaPromise<GetComplianceQueryAggregateType<T>>

    /**
     * Group by ComplianceQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceQueryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComplianceQueryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComplianceQueryGroupByArgs['orderBy'] }
        : { orderBy?: ComplianceQueryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComplianceQueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplianceQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComplianceQuery model
   */
  readonly fields: ComplianceQueryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComplianceQuery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComplianceQueryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends ComplianceQuery$documentArgs<ExtArgs> = {}>(args?: Subset<T, ComplianceQuery$documentArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends ComplianceQuery$responsesArgs<ExtArgs> = {}>(args?: Subset<T, ComplianceQuery$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ComplianceQuery model
   */
  interface ComplianceQueryFieldRefs {
    readonly id: FieldRef<"ComplianceQuery", 'String'>
    readonly queryText: FieldRef<"ComplianceQuery", 'String'>
    readonly status: FieldRef<"ComplianceQuery", 'ComplianceQueryStatus'>
    readonly documentId: FieldRef<"ComplianceQuery", 'String'>
    readonly userId: FieldRef<"ComplianceQuery", 'String'>
    readonly attemptCount: FieldRef<"ComplianceQuery", 'Int'>
    readonly errorMessage: FieldRef<"ComplianceQuery", 'String'>
    readonly processingStartedAt: FieldRef<"ComplianceQuery", 'DateTime'>
    readonly processingFinishedAt: FieldRef<"ComplianceQuery", 'DateTime'>
    readonly createdAt: FieldRef<"ComplianceQuery", 'DateTime'>
    readonly updatedAt: FieldRef<"ComplianceQuery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ComplianceQuery findUnique
   */
  export type ComplianceQueryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceQuery
     */
    select?: ComplianceQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceQuery
     */
    omit?: ComplianceQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceQueryInclude<ExtArgs> | null
    /**
     * Filter, which ComplianceQuery to fetch.
     */
    where: ComplianceQueryWhereUniqueInput
  }

  /**
   * ComplianceQuery findUniqueOrThrow
   */
  export type ComplianceQueryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceQuery
     */
    select?: ComplianceQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceQuery
     */
    omit?: ComplianceQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceQueryInclude<ExtArgs> | null
    /**
     * Filter, which ComplianceQuery to fetch.
     */
    where: ComplianceQueryWhereUniqueInput
  }

  /**
   * ComplianceQuery findFirst
   */
  export type ComplianceQueryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceQuery
     */
    select?: ComplianceQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceQuery
     */
    omit?: ComplianceQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceQueryInclude<ExtArgs> | null
    /**
     * Filter, which ComplianceQuery to fetch.
     */
    where?: ComplianceQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplianceQueries to fetch.
     */
    orderBy?: ComplianceQueryOrderByWithRelationInput | ComplianceQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComplianceQueries.
     */
    cursor?: ComplianceQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplianceQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplianceQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComplianceQueries.
     */
    distinct?: ComplianceQueryScalarFieldEnum | ComplianceQueryScalarFieldEnum[]
  }

  /**
   * ComplianceQuery findFirstOrThrow
   */
  export type ComplianceQueryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceQuery
     */
    select?: ComplianceQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceQuery
     */
    omit?: ComplianceQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceQueryInclude<ExtArgs> | null
    /**
     * Filter, which ComplianceQuery to fetch.
     */
    where?: ComplianceQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplianceQueries to fetch.
     */
    orderBy?: ComplianceQueryOrderByWithRelationInput | ComplianceQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComplianceQueries.
     */
    cursor?: ComplianceQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplianceQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplianceQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComplianceQueries.
     */
    distinct?: ComplianceQueryScalarFieldEnum | ComplianceQueryScalarFieldEnum[]
  }

  /**
   * ComplianceQuery findMany
   */
  export type ComplianceQueryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceQuery
     */
    select?: ComplianceQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceQuery
     */
    omit?: ComplianceQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceQueryInclude<ExtArgs> | null
    /**
     * Filter, which ComplianceQueries to fetch.
     */
    where?: ComplianceQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplianceQueries to fetch.
     */
    orderBy?: ComplianceQueryOrderByWithRelationInput | ComplianceQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComplianceQueries.
     */
    cursor?: ComplianceQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplianceQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplianceQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComplianceQueries.
     */
    distinct?: ComplianceQueryScalarFieldEnum | ComplianceQueryScalarFieldEnum[]
  }

  /**
   * ComplianceQuery create
   */
  export type ComplianceQueryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceQuery
     */
    select?: ComplianceQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceQuery
     */
    omit?: ComplianceQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceQueryInclude<ExtArgs> | null
    /**
     * The data needed to create a ComplianceQuery.
     */
    data: XOR<ComplianceQueryCreateInput, ComplianceQueryUncheckedCreateInput>
  }

  /**
   * ComplianceQuery createMany
   */
  export type ComplianceQueryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComplianceQueries.
     */
    data: ComplianceQueryCreateManyInput | ComplianceQueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComplianceQuery createManyAndReturn
   */
  export type ComplianceQueryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceQuery
     */
    select?: ComplianceQuerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceQuery
     */
    omit?: ComplianceQueryOmit<ExtArgs> | null
    /**
     * The data used to create many ComplianceQueries.
     */
    data: ComplianceQueryCreateManyInput | ComplianceQueryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceQueryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComplianceQuery update
   */
  export type ComplianceQueryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceQuery
     */
    select?: ComplianceQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceQuery
     */
    omit?: ComplianceQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceQueryInclude<ExtArgs> | null
    /**
     * The data needed to update a ComplianceQuery.
     */
    data: XOR<ComplianceQueryUpdateInput, ComplianceQueryUncheckedUpdateInput>
    /**
     * Choose, which ComplianceQuery to update.
     */
    where: ComplianceQueryWhereUniqueInput
  }

  /**
   * ComplianceQuery updateMany
   */
  export type ComplianceQueryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComplianceQueries.
     */
    data: XOR<ComplianceQueryUpdateManyMutationInput, ComplianceQueryUncheckedUpdateManyInput>
    /**
     * Filter which ComplianceQueries to update
     */
    where?: ComplianceQueryWhereInput
    /**
     * Limit how many ComplianceQueries to update.
     */
    limit?: number
  }

  /**
   * ComplianceQuery updateManyAndReturn
   */
  export type ComplianceQueryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceQuery
     */
    select?: ComplianceQuerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceQuery
     */
    omit?: ComplianceQueryOmit<ExtArgs> | null
    /**
     * The data used to update ComplianceQueries.
     */
    data: XOR<ComplianceQueryUpdateManyMutationInput, ComplianceQueryUncheckedUpdateManyInput>
    /**
     * Filter which ComplianceQueries to update
     */
    where?: ComplianceQueryWhereInput
    /**
     * Limit how many ComplianceQueries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceQueryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComplianceQuery upsert
   */
  export type ComplianceQueryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceQuery
     */
    select?: ComplianceQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceQuery
     */
    omit?: ComplianceQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceQueryInclude<ExtArgs> | null
    /**
     * The filter to search for the ComplianceQuery to update in case it exists.
     */
    where: ComplianceQueryWhereUniqueInput
    /**
     * In case the ComplianceQuery found by the `where` argument doesn't exist, create a new ComplianceQuery with this data.
     */
    create: XOR<ComplianceQueryCreateInput, ComplianceQueryUncheckedCreateInput>
    /**
     * In case the ComplianceQuery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComplianceQueryUpdateInput, ComplianceQueryUncheckedUpdateInput>
  }

  /**
   * ComplianceQuery delete
   */
  export type ComplianceQueryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceQuery
     */
    select?: ComplianceQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceQuery
     */
    omit?: ComplianceQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceQueryInclude<ExtArgs> | null
    /**
     * Filter which ComplianceQuery to delete.
     */
    where: ComplianceQueryWhereUniqueInput
  }

  /**
   * ComplianceQuery deleteMany
   */
  export type ComplianceQueryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComplianceQueries to delete
     */
    where?: ComplianceQueryWhereInput
    /**
     * Limit how many ComplianceQueries to delete.
     */
    limit?: number
  }

  /**
   * ComplianceQuery.document
   */
  export type ComplianceQuery$documentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
  }

  /**
   * ComplianceQuery.responses
   */
  export type ComplianceQuery$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIResponse
     */
    select?: AIResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIResponse
     */
    omit?: AIResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIResponseInclude<ExtArgs> | null
    where?: AIResponseWhereInput
    orderBy?: AIResponseOrderByWithRelationInput | AIResponseOrderByWithRelationInput[]
    cursor?: AIResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIResponseScalarFieldEnum | AIResponseScalarFieldEnum[]
  }

  /**
   * ComplianceQuery without action
   */
  export type ComplianceQueryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceQuery
     */
    select?: ComplianceQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceQuery
     */
    omit?: ComplianceQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceQueryInclude<ExtArgs> | null
  }


  /**
   * Model AIResponse
   */

  export type AggregateAIResponse = {
    _count: AIResponseCountAggregateOutputType | null
    _avg: AIResponseAvgAggregateOutputType | null
    _sum: AIResponseSumAggregateOutputType | null
    _min: AIResponseMinAggregateOutputType | null
    _max: AIResponseMaxAggregateOutputType | null
  }

  export type AIResponseAvgAggregateOutputType = {
    confidenceScore: number | null
  }

  export type AIResponseSumAggregateOutputType = {
    confidenceScore: number | null
  }

  export type AIResponseMinAggregateOutputType = {
    id: string | null
    queryId: string | null
    responseText: string | null
    confidenceScore: number | null
    createdAt: Date | null
  }

  export type AIResponseMaxAggregateOutputType = {
    id: string | null
    queryId: string | null
    responseText: string | null
    confidenceScore: number | null
    createdAt: Date | null
  }

  export type AIResponseCountAggregateOutputType = {
    id: number
    queryId: number
    responseText: number
    confidenceScore: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AIResponseAvgAggregateInputType = {
    confidenceScore?: true
  }

  export type AIResponseSumAggregateInputType = {
    confidenceScore?: true
  }

  export type AIResponseMinAggregateInputType = {
    id?: true
    queryId?: true
    responseText?: true
    confidenceScore?: true
    createdAt?: true
  }

  export type AIResponseMaxAggregateInputType = {
    id?: true
    queryId?: true
    responseText?: true
    confidenceScore?: true
    createdAt?: true
  }

  export type AIResponseCountAggregateInputType = {
    id?: true
    queryId?: true
    responseText?: true
    confidenceScore?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AIResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIResponse to aggregate.
     */
    where?: AIResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIResponses to fetch.
     */
    orderBy?: AIResponseOrderByWithRelationInput | AIResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIResponses
    **/
    _count?: true | AIResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIResponseMaxAggregateInputType
  }

  export type GetAIResponseAggregateType<T extends AIResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateAIResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIResponse[P]>
      : GetScalarType<T[P], AggregateAIResponse[P]>
  }




  export type AIResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIResponseWhereInput
    orderBy?: AIResponseOrderByWithAggregationInput | AIResponseOrderByWithAggregationInput[]
    by: AIResponseScalarFieldEnum[] | AIResponseScalarFieldEnum
    having?: AIResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIResponseCountAggregateInputType | true
    _avg?: AIResponseAvgAggregateInputType
    _sum?: AIResponseSumAggregateInputType
    _min?: AIResponseMinAggregateInputType
    _max?: AIResponseMaxAggregateInputType
  }

  export type AIResponseGroupByOutputType = {
    id: string
    queryId: string
    responseText: string
    confidenceScore: number | null
    metadata: JsonValue | null
    createdAt: Date
    _count: AIResponseCountAggregateOutputType | null
    _avg: AIResponseAvgAggregateOutputType | null
    _sum: AIResponseSumAggregateOutputType | null
    _min: AIResponseMinAggregateOutputType | null
    _max: AIResponseMaxAggregateOutputType | null
  }

  type GetAIResponseGroupByPayload<T extends AIResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIResponseGroupByOutputType[P]>
            : GetScalarType<T[P], AIResponseGroupByOutputType[P]>
        }
      >
    >


  export type AIResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryId?: boolean
    responseText?: boolean
    confidenceScore?: boolean
    metadata?: boolean
    createdAt?: boolean
    complianceQuery?: boolean | ComplianceQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIResponse"]>

  export type AIResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryId?: boolean
    responseText?: boolean
    confidenceScore?: boolean
    metadata?: boolean
    createdAt?: boolean
    complianceQuery?: boolean | ComplianceQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIResponse"]>

  export type AIResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryId?: boolean
    responseText?: boolean
    confidenceScore?: boolean
    metadata?: boolean
    createdAt?: boolean
    complianceQuery?: boolean | ComplianceQueryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIResponse"]>

  export type AIResponseSelectScalar = {
    id?: boolean
    queryId?: boolean
    responseText?: boolean
    confidenceScore?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AIResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "queryId" | "responseText" | "confidenceScore" | "metadata" | "createdAt", ExtArgs["result"]["aIResponse"]>
  export type AIResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complianceQuery?: boolean | ComplianceQueryDefaultArgs<ExtArgs>
  }
  export type AIResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complianceQuery?: boolean | ComplianceQueryDefaultArgs<ExtArgs>
  }
  export type AIResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complianceQuery?: boolean | ComplianceQueryDefaultArgs<ExtArgs>
  }

  export type $AIResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIResponse"
    objects: {
      complianceQuery: Prisma.$ComplianceQueryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      queryId: string
      responseText: string
      confidenceScore: number | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["aIResponse"]>
    composites: {}
  }

  type AIResponseGetPayload<S extends boolean | null | undefined | AIResponseDefaultArgs> = $Result.GetResult<Prisma.$AIResponsePayload, S>

  type AIResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIResponseCountAggregateInputType | true
    }

  export interface AIResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIResponse'], meta: { name: 'AIResponse' } }
    /**
     * Find zero or one AIResponse that matches the filter.
     * @param {AIResponseFindUniqueArgs} args - Arguments to find a AIResponse
     * @example
     * // Get one AIResponse
     * const aIResponse = await prisma.aIResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIResponseFindUniqueArgs>(args: SelectSubset<T, AIResponseFindUniqueArgs<ExtArgs>>): Prisma__AIResponseClient<$Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIResponseFindUniqueOrThrowArgs} args - Arguments to find a AIResponse
     * @example
     * // Get one AIResponse
     * const aIResponse = await prisma.aIResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, AIResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIResponseClient<$Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIResponseFindFirstArgs} args - Arguments to find a AIResponse
     * @example
     * // Get one AIResponse
     * const aIResponse = await prisma.aIResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIResponseFindFirstArgs>(args?: SelectSubset<T, AIResponseFindFirstArgs<ExtArgs>>): Prisma__AIResponseClient<$Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIResponseFindFirstOrThrowArgs} args - Arguments to find a AIResponse
     * @example
     * // Get one AIResponse
     * const aIResponse = await prisma.aIResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, AIResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIResponseClient<$Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIResponses
     * const aIResponses = await prisma.aIResponse.findMany()
     * 
     * // Get first 10 AIResponses
     * const aIResponses = await prisma.aIResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIResponseWithIdOnly = await prisma.aIResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIResponseFindManyArgs>(args?: SelectSubset<T, AIResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIResponse.
     * @param {AIResponseCreateArgs} args - Arguments to create a AIResponse.
     * @example
     * // Create one AIResponse
     * const AIResponse = await prisma.aIResponse.create({
     *   data: {
     *     // ... data to create a AIResponse
     *   }
     * })
     * 
     */
    create<T extends AIResponseCreateArgs>(args: SelectSubset<T, AIResponseCreateArgs<ExtArgs>>): Prisma__AIResponseClient<$Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIResponses.
     * @param {AIResponseCreateManyArgs} args - Arguments to create many AIResponses.
     * @example
     * // Create many AIResponses
     * const aIResponse = await prisma.aIResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIResponseCreateManyArgs>(args?: SelectSubset<T, AIResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIResponses and returns the data saved in the database.
     * @param {AIResponseCreateManyAndReturnArgs} args - Arguments to create many AIResponses.
     * @example
     * // Create many AIResponses
     * const aIResponse = await prisma.aIResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIResponses and only return the `id`
     * const aIResponseWithIdOnly = await prisma.aIResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, AIResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIResponse.
     * @param {AIResponseDeleteArgs} args - Arguments to delete one AIResponse.
     * @example
     * // Delete one AIResponse
     * const AIResponse = await prisma.aIResponse.delete({
     *   where: {
     *     // ... filter to delete one AIResponse
     *   }
     * })
     * 
     */
    delete<T extends AIResponseDeleteArgs>(args: SelectSubset<T, AIResponseDeleteArgs<ExtArgs>>): Prisma__AIResponseClient<$Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIResponse.
     * @param {AIResponseUpdateArgs} args - Arguments to update one AIResponse.
     * @example
     * // Update one AIResponse
     * const aIResponse = await prisma.aIResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIResponseUpdateArgs>(args: SelectSubset<T, AIResponseUpdateArgs<ExtArgs>>): Prisma__AIResponseClient<$Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIResponses.
     * @param {AIResponseDeleteManyArgs} args - Arguments to filter AIResponses to delete.
     * @example
     * // Delete a few AIResponses
     * const { count } = await prisma.aIResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIResponseDeleteManyArgs>(args?: SelectSubset<T, AIResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIResponses
     * const aIResponse = await prisma.aIResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIResponseUpdateManyArgs>(args: SelectSubset<T, AIResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIResponses and returns the data updated in the database.
     * @param {AIResponseUpdateManyAndReturnArgs} args - Arguments to update many AIResponses.
     * @example
     * // Update many AIResponses
     * const aIResponse = await prisma.aIResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIResponses and only return the `id`
     * const aIResponseWithIdOnly = await prisma.aIResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AIResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, AIResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIResponse.
     * @param {AIResponseUpsertArgs} args - Arguments to update or create a AIResponse.
     * @example
     * // Update or create a AIResponse
     * const aIResponse = await prisma.aIResponse.upsert({
     *   create: {
     *     // ... data to create a AIResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIResponse we want to update
     *   }
     * })
     */
    upsert<T extends AIResponseUpsertArgs>(args: SelectSubset<T, AIResponseUpsertArgs<ExtArgs>>): Prisma__AIResponseClient<$Result.GetResult<Prisma.$AIResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIResponseCountArgs} args - Arguments to filter AIResponses to count.
     * @example
     * // Count the number of AIResponses
     * const count = await prisma.aIResponse.count({
     *   where: {
     *     // ... the filter for the AIResponses we want to count
     *   }
     * })
    **/
    count<T extends AIResponseCountArgs>(
      args?: Subset<T, AIResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIResponseAggregateArgs>(args: Subset<T, AIResponseAggregateArgs>): Prisma.PrismaPromise<GetAIResponseAggregateType<T>>

    /**
     * Group by AIResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIResponseGroupByArgs['orderBy'] }
        : { orderBy?: AIResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIResponse model
   */
  readonly fields: AIResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    complianceQuery<T extends ComplianceQueryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComplianceQueryDefaultArgs<ExtArgs>>): Prisma__ComplianceQueryClient<$Result.GetResult<Prisma.$ComplianceQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIResponse model
   */
  interface AIResponseFieldRefs {
    readonly id: FieldRef<"AIResponse", 'String'>
    readonly queryId: FieldRef<"AIResponse", 'String'>
    readonly responseText: FieldRef<"AIResponse", 'String'>
    readonly confidenceScore: FieldRef<"AIResponse", 'Float'>
    readonly metadata: FieldRef<"AIResponse", 'Json'>
    readonly createdAt: FieldRef<"AIResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIResponse findUnique
   */
  export type AIResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIResponse
     */
    select?: AIResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIResponse
     */
    omit?: AIResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIResponseInclude<ExtArgs> | null
    /**
     * Filter, which AIResponse to fetch.
     */
    where: AIResponseWhereUniqueInput
  }

  /**
   * AIResponse findUniqueOrThrow
   */
  export type AIResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIResponse
     */
    select?: AIResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIResponse
     */
    omit?: AIResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIResponseInclude<ExtArgs> | null
    /**
     * Filter, which AIResponse to fetch.
     */
    where: AIResponseWhereUniqueInput
  }

  /**
   * AIResponse findFirst
   */
  export type AIResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIResponse
     */
    select?: AIResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIResponse
     */
    omit?: AIResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIResponseInclude<ExtArgs> | null
    /**
     * Filter, which AIResponse to fetch.
     */
    where?: AIResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIResponses to fetch.
     */
    orderBy?: AIResponseOrderByWithRelationInput | AIResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIResponses.
     */
    cursor?: AIResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIResponses.
     */
    distinct?: AIResponseScalarFieldEnum | AIResponseScalarFieldEnum[]
  }

  /**
   * AIResponse findFirstOrThrow
   */
  export type AIResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIResponse
     */
    select?: AIResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIResponse
     */
    omit?: AIResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIResponseInclude<ExtArgs> | null
    /**
     * Filter, which AIResponse to fetch.
     */
    where?: AIResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIResponses to fetch.
     */
    orderBy?: AIResponseOrderByWithRelationInput | AIResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIResponses.
     */
    cursor?: AIResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIResponses.
     */
    distinct?: AIResponseScalarFieldEnum | AIResponseScalarFieldEnum[]
  }

  /**
   * AIResponse findMany
   */
  export type AIResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIResponse
     */
    select?: AIResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIResponse
     */
    omit?: AIResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIResponseInclude<ExtArgs> | null
    /**
     * Filter, which AIResponses to fetch.
     */
    where?: AIResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIResponses to fetch.
     */
    orderBy?: AIResponseOrderByWithRelationInput | AIResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIResponses.
     */
    cursor?: AIResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIResponses.
     */
    distinct?: AIResponseScalarFieldEnum | AIResponseScalarFieldEnum[]
  }

  /**
   * AIResponse create
   */
  export type AIResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIResponse
     */
    select?: AIResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIResponse
     */
    omit?: AIResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a AIResponse.
     */
    data: XOR<AIResponseCreateInput, AIResponseUncheckedCreateInput>
  }

  /**
   * AIResponse createMany
   */
  export type AIResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIResponses.
     */
    data: AIResponseCreateManyInput | AIResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIResponse createManyAndReturn
   */
  export type AIResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIResponse
     */
    select?: AIResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIResponse
     */
    omit?: AIResponseOmit<ExtArgs> | null
    /**
     * The data used to create many AIResponses.
     */
    data: AIResponseCreateManyInput | AIResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIResponse update
   */
  export type AIResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIResponse
     */
    select?: AIResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIResponse
     */
    omit?: AIResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a AIResponse.
     */
    data: XOR<AIResponseUpdateInput, AIResponseUncheckedUpdateInput>
    /**
     * Choose, which AIResponse to update.
     */
    where: AIResponseWhereUniqueInput
  }

  /**
   * AIResponse updateMany
   */
  export type AIResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIResponses.
     */
    data: XOR<AIResponseUpdateManyMutationInput, AIResponseUncheckedUpdateManyInput>
    /**
     * Filter which AIResponses to update
     */
    where?: AIResponseWhereInput
    /**
     * Limit how many AIResponses to update.
     */
    limit?: number
  }

  /**
   * AIResponse updateManyAndReturn
   */
  export type AIResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIResponse
     */
    select?: AIResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIResponse
     */
    omit?: AIResponseOmit<ExtArgs> | null
    /**
     * The data used to update AIResponses.
     */
    data: XOR<AIResponseUpdateManyMutationInput, AIResponseUncheckedUpdateManyInput>
    /**
     * Filter which AIResponses to update
     */
    where?: AIResponseWhereInput
    /**
     * Limit how many AIResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIResponse upsert
   */
  export type AIResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIResponse
     */
    select?: AIResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIResponse
     */
    omit?: AIResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the AIResponse to update in case it exists.
     */
    where: AIResponseWhereUniqueInput
    /**
     * In case the AIResponse found by the `where` argument doesn't exist, create a new AIResponse with this data.
     */
    create: XOR<AIResponseCreateInput, AIResponseUncheckedCreateInput>
    /**
     * In case the AIResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIResponseUpdateInput, AIResponseUncheckedUpdateInput>
  }

  /**
   * AIResponse delete
   */
  export type AIResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIResponse
     */
    select?: AIResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIResponse
     */
    omit?: AIResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIResponseInclude<ExtArgs> | null
    /**
     * Filter which AIResponse to delete.
     */
    where: AIResponseWhereUniqueInput
  }

  /**
   * AIResponse deleteMany
   */
  export type AIResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIResponses to delete
     */
    where?: AIResponseWhereInput
    /**
     * Limit how many AIResponses to delete.
     */
    limit?: number
  }

  /**
   * AIResponse without action
   */
  export type AIResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIResponse
     */
    select?: AIResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIResponse
     */
    omit?: AIResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIResponseInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: $Enums.NotificationType | null
    status: $Enums.NotificationStatus | null
    deliveryChannel: $Enums.DeliveryChannel | null
    documentId: string | null
    scheduledFor: Date | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: $Enums.NotificationType | null
    status: $Enums.NotificationStatus | null
    deliveryChannel: $Enums.DeliveryChannel | null
    documentId: string | null
    scheduledFor: Date | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    type: number
    status: number
    deliveryChannel: number
    documentId: number
    scheduledFor: number
    sentAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    status?: true
    deliveryChannel?: true
    documentId?: true
    scheduledFor?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    status?: true
    deliveryChannel?: true
    documentId?: true
    scheduledFor?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    status?: true
    deliveryChannel?: true
    documentId?: true
    scheduledFor?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    title: string
    message: string
    type: $Enums.NotificationType
    status: $Enums.NotificationStatus
    deliveryChannel: $Enums.DeliveryChannel
    documentId: string | null
    scheduledFor: Date | null
    sentAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    deliveryChannel?: boolean
    documentId?: boolean
    scheduledFor?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    document?: boolean | Notification$documentArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    deliveryChannel?: boolean
    documentId?: boolean
    scheduledFor?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    document?: boolean | Notification$documentArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    deliveryChannel?: boolean
    documentId?: boolean
    scheduledFor?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    document?: boolean | Notification$documentArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    deliveryChannel?: boolean
    documentId?: boolean
    scheduledFor?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "type" | "status" | "deliveryChannel" | "documentId" | "scheduledFor" | "sentAt" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    document?: boolean | Notification$documentArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    document?: boolean | Notification$documentArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    document?: boolean | Notification$documentArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
      document: Prisma.$DocumentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      message: string
      type: $Enums.NotificationType
      status: $Enums.NotificationStatus
      deliveryChannel: $Enums.DeliveryChannel
      documentId: string | null
      scheduledFor: Date | null
      sentAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    document<T extends Notification$documentArgs<ExtArgs> = {}>(args?: Subset<T, Notification$documentArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly status: FieldRef<"Notification", 'NotificationStatus'>
    readonly deliveryChannel: FieldRef<"Notification", 'DeliveryChannel'>
    readonly documentId: FieldRef<"Notification", 'String'>
    readonly scheduledFor: FieldRef<"Notification", 'DateTime'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.document
   */
  export type Notification$documentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    plan: 'plan',
    documentsLimit: 'documentsLimit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    avatarUrl: 'avatarUrl',
    role: 'role',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    uploadedBy: 'uploadedBy',
    originalFileName: 'originalFileName',
    filename: 'filename',
    mimeType: 'mimeType',
    storageKey: 'storageKey',
    fileUrl: 'fileUrl',
    checksum: 'checksum',
    fileSize: 'fileSize',
    pageCount: 'pageCount',
    language: 'language',
    status: 'status',
    complianceScore: 'complianceScore',
    riskLevel: 'riskLevel',
    expirationDate: 'expirationDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const DocumentAnalysisScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    executiveSummary: 'executiveSummary',
    overallVerdict: 'overallVerdict',
    confidenceScore: 'confidenceScore',
    modelName: 'modelName',
    promptVersion: 'promptVersion',
    rulesetVersion: 'rulesetVersion',
    parties: 'parties',
    obligations: 'obligations',
    paymentTerms: 'paymentTerms',
    renewalTerms: 'renewalTerms',
    penalties: 'penalties',
    governingLaw: 'governingLaw',
    missingClauses: 'missingClauses',
    unusualConditions: 'unusualConditions',
    complianceRequirements: 'complianceRequirements',
    policyViolations: 'policyViolations',
    regulatoryIssues: 'regulatoryIssues',
    missingSignatures: 'missingSignatures',
    expirationDetected: 'expirationDetected',
    importantDates: 'importantDates',
    risks: 'risks',
    recommendations: 'recommendations',
    createdAt: 'createdAt'
  };

  export type DocumentAnalysisScalarFieldEnum = (typeof DocumentAnalysisScalarFieldEnum)[keyof typeof DocumentAnalysisScalarFieldEnum]


  export const FindingScalarFieldEnum: {
    id: 'id',
    analysisId: 'analysisId',
    title: 'title',
    description: 'description',
    severity: 'severity',
    clauseReference: 'clauseReference',
    pageNumber: 'pageNumber',
    excerpt: 'excerpt',
    recommendation: 'recommendation',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type FindingScalarFieldEnum = (typeof FindingScalarFieldEnum)[keyof typeof FindingScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    userId: 'userId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const ComplianceQueryScalarFieldEnum: {
    id: 'id',
    queryText: 'queryText',
    status: 'status',
    documentId: 'documentId',
    userId: 'userId',
    attemptCount: 'attemptCount',
    errorMessage: 'errorMessage',
    processingStartedAt: 'processingStartedAt',
    processingFinishedAt: 'processingFinishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ComplianceQueryScalarFieldEnum = (typeof ComplianceQueryScalarFieldEnum)[keyof typeof ComplianceQueryScalarFieldEnum]


  export const AIResponseScalarFieldEnum: {
    id: 'id',
    queryId: 'queryId',
    responseText: 'responseText',
    confidenceScore: 'confidenceScore',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AIResponseScalarFieldEnum = (typeof AIResponseScalarFieldEnum)[keyof typeof AIResponseScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    type: 'type',
    status: 'status',
    deliveryChannel: 'deliveryChannel',
    documentId: 'documentId',
    scheduledFor: 'scheduledFor',
    sentAt: 'sentAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>
    


  /**
   * Reference to a field of type 'PlanType[]'
   */
  export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DocumentStatus'
   */
  export type EnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus'>
    


  /**
   * Reference to a field of type 'DocumentStatus[]'
   */
  export type ListEnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus[]'>
    


  /**
   * Reference to a field of type 'RiskLevel'
   */
  export type EnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel'>
    


  /**
   * Reference to a field of type 'RiskLevel[]'
   */
  export type ListEnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel[]'>
    


  /**
   * Reference to a field of type 'AnalysisVerdict'
   */
  export type EnumAnalysisVerdictFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisVerdict'>
    


  /**
   * Reference to a field of type 'AnalysisVerdict[]'
   */
  export type ListEnumAnalysisVerdictFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisVerdict[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'FindingSeverity'
   */
  export type EnumFindingSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FindingSeverity'>
    


  /**
   * Reference to a field of type 'FindingSeverity[]'
   */
  export type ListEnumFindingSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FindingSeverity[]'>
    


  /**
   * Reference to a field of type 'ComplianceQueryStatus'
   */
  export type EnumComplianceQueryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComplianceQueryStatus'>
    


  /**
   * Reference to a field of type 'ComplianceQueryStatus[]'
   */
  export type ListEnumComplianceQueryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComplianceQueryStatus[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'NotificationStatus'
   */
  export type EnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus'>
    


  /**
   * Reference to a field of type 'NotificationStatus[]'
   */
  export type ListEnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus[]'>
    


  /**
   * Reference to a field of type 'DeliveryChannel'
   */
  export type EnumDeliveryChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryChannel'>
    


  /**
   * Reference to a field of type 'DeliveryChannel[]'
   */
  export type ListEnumDeliveryChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryChannel[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: UuidFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    slug?: StringFilter<"Organization"> | string
    plan?: EnumPlanTypeFilter<"Organization"> | $Enums.PlanType
    documentsLimit?: IntNullableFilter<"Organization"> | number | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    profiles?: ProfileListRelationFilter
    documents?: DocumentListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    documentsLimit?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profiles?: ProfileOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    plan?: EnumPlanTypeFilter<"Organization"> | $Enums.PlanType
    documentsLimit?: IntNullableFilter<"Organization"> | number | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    profiles?: ProfileListRelationFilter
    documents?: DocumentListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }, "id" | "slug">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    documentsLimit?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    slug?: StringWithAggregatesFilter<"Organization"> | string
    plan?: EnumPlanTypeWithAggregatesFilter<"Organization"> | $Enums.PlanType
    documentsLimit?: IntNullableWithAggregatesFilter<"Organization"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: UuidFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    fullName?: StringNullableFilter<"Profile"> | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    role?: EnumUserRoleFilter<"Profile"> | $Enums.UserRole
    organizationId?: UuidNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    documents?: DocumentListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    complianceQueries?: ComplianceQueryListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
    complianceQueries?: ComplianceQueryOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    fullName?: StringNullableFilter<"Profile"> | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    role?: EnumUserRoleFilter<"Profile"> | $Enums.UserRole
    organizationId?: UuidNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    documents?: DocumentListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    complianceQueries?: ComplianceQueryListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Profile"> | string
    email?: StringWithAggregatesFilter<"Profile"> | string
    fullName?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"Profile"> | $Enums.UserRole
    organizationId?: UuidNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: UuidFilter<"Document"> | string
    organizationId?: UuidFilter<"Document"> | string
    uploadedBy?: UuidFilter<"Document"> | string
    originalFileName?: StringFilter<"Document"> | string
    filename?: StringFilter<"Document"> | string
    mimeType?: StringNullableFilter<"Document"> | string | null
    storageKey?: StringNullableFilter<"Document"> | string | null
    fileUrl?: StringNullableFilter<"Document"> | string | null
    checksum?: StringNullableFilter<"Document"> | string | null
    fileSize?: IntNullableFilter<"Document"> | number | null
    pageCount?: IntNullableFilter<"Document"> | number | null
    language?: StringNullableFilter<"Document"> | string | null
    status?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    complianceScore?: IntNullableFilter<"Document"> | number | null
    riskLevel?: EnumRiskLevelNullableFilter<"Document"> | $Enums.RiskLevel | null
    expirationDate?: DateTimeNullableFilter<"Document"> | Date | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    uploader?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    analyses?: DocumentAnalysisListRelationFilter
    complianceQueries?: ComplianceQueryListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    uploadedBy?: SortOrder
    originalFileName?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    storageKey?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    pageCount?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    status?: SortOrder
    complianceScore?: SortOrderInput | SortOrder
    riskLevel?: SortOrderInput | SortOrder
    expirationDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    uploader?: ProfileOrderByWithRelationInput
    analyses?: DocumentAnalysisOrderByRelationAggregateInput
    complianceQueries?: ComplianceQueryOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    organizationId?: UuidFilter<"Document"> | string
    uploadedBy?: UuidFilter<"Document"> | string
    originalFileName?: StringFilter<"Document"> | string
    filename?: StringFilter<"Document"> | string
    mimeType?: StringNullableFilter<"Document"> | string | null
    storageKey?: StringNullableFilter<"Document"> | string | null
    fileUrl?: StringNullableFilter<"Document"> | string | null
    checksum?: StringNullableFilter<"Document"> | string | null
    fileSize?: IntNullableFilter<"Document"> | number | null
    pageCount?: IntNullableFilter<"Document"> | number | null
    language?: StringNullableFilter<"Document"> | string | null
    status?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    complianceScore?: IntNullableFilter<"Document"> | number | null
    riskLevel?: EnumRiskLevelNullableFilter<"Document"> | $Enums.RiskLevel | null
    expirationDate?: DateTimeNullableFilter<"Document"> | Date | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    uploader?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    analyses?: DocumentAnalysisListRelationFilter
    complianceQueries?: ComplianceQueryListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    uploadedBy?: SortOrder
    originalFileName?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    storageKey?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    pageCount?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    status?: SortOrder
    complianceScore?: SortOrderInput | SortOrder
    riskLevel?: SortOrderInput | SortOrder
    expirationDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Document"> | string
    organizationId?: UuidWithAggregatesFilter<"Document"> | string
    uploadedBy?: UuidWithAggregatesFilter<"Document"> | string
    originalFileName?: StringWithAggregatesFilter<"Document"> | string
    filename?: StringWithAggregatesFilter<"Document"> | string
    mimeType?: StringNullableWithAggregatesFilter<"Document"> | string | null
    storageKey?: StringNullableWithAggregatesFilter<"Document"> | string | null
    fileUrl?: StringNullableWithAggregatesFilter<"Document"> | string | null
    checksum?: StringNullableWithAggregatesFilter<"Document"> | string | null
    fileSize?: IntNullableWithAggregatesFilter<"Document"> | number | null
    pageCount?: IntNullableWithAggregatesFilter<"Document"> | number | null
    language?: StringNullableWithAggregatesFilter<"Document"> | string | null
    status?: EnumDocumentStatusWithAggregatesFilter<"Document"> | $Enums.DocumentStatus
    complianceScore?: IntNullableWithAggregatesFilter<"Document"> | number | null
    riskLevel?: EnumRiskLevelNullableWithAggregatesFilter<"Document"> | $Enums.RiskLevel | null
    expirationDate?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type DocumentAnalysisWhereInput = {
    AND?: DocumentAnalysisWhereInput | DocumentAnalysisWhereInput[]
    OR?: DocumentAnalysisWhereInput[]
    NOT?: DocumentAnalysisWhereInput | DocumentAnalysisWhereInput[]
    id?: UuidFilter<"DocumentAnalysis"> | string
    documentId?: UuidFilter<"DocumentAnalysis"> | string
    executiveSummary?: StringNullableFilter<"DocumentAnalysis"> | string | null
    overallVerdict?: EnumAnalysisVerdictNullableFilter<"DocumentAnalysis"> | $Enums.AnalysisVerdict | null
    confidenceScore?: FloatNullableFilter<"DocumentAnalysis"> | number | null
    modelName?: StringNullableFilter<"DocumentAnalysis"> | string | null
    promptVersion?: StringNullableFilter<"DocumentAnalysis"> | string | null
    rulesetVersion?: StringNullableFilter<"DocumentAnalysis"> | string | null
    parties?: JsonNullableFilter<"DocumentAnalysis">
    obligations?: JsonNullableFilter<"DocumentAnalysis">
    paymentTerms?: JsonNullableFilter<"DocumentAnalysis">
    renewalTerms?: JsonNullableFilter<"DocumentAnalysis">
    penalties?: JsonNullableFilter<"DocumentAnalysis">
    governingLaw?: StringNullableFilter<"DocumentAnalysis"> | string | null
    missingClauses?: JsonNullableFilter<"DocumentAnalysis">
    unusualConditions?: JsonNullableFilter<"DocumentAnalysis">
    complianceRequirements?: JsonNullableFilter<"DocumentAnalysis">
    policyViolations?: JsonNullableFilter<"DocumentAnalysis">
    regulatoryIssues?: JsonNullableFilter<"DocumentAnalysis">
    missingSignatures?: JsonNullableFilter<"DocumentAnalysis">
    expirationDetected?: BoolFilter<"DocumentAnalysis"> | boolean
    importantDates?: JsonNullableFilter<"DocumentAnalysis">
    risks?: JsonNullableFilter<"DocumentAnalysis">
    recommendations?: JsonNullableFilter<"DocumentAnalysis">
    createdAt?: DateTimeFilter<"DocumentAnalysis"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    findings?: FindingListRelationFilter
  }

  export type DocumentAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    executiveSummary?: SortOrderInput | SortOrder
    overallVerdict?: SortOrderInput | SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    modelName?: SortOrderInput | SortOrder
    promptVersion?: SortOrderInput | SortOrder
    rulesetVersion?: SortOrderInput | SortOrder
    parties?: SortOrderInput | SortOrder
    obligations?: SortOrderInput | SortOrder
    paymentTerms?: SortOrderInput | SortOrder
    renewalTerms?: SortOrderInput | SortOrder
    penalties?: SortOrderInput | SortOrder
    governingLaw?: SortOrderInput | SortOrder
    missingClauses?: SortOrderInput | SortOrder
    unusualConditions?: SortOrderInput | SortOrder
    complianceRequirements?: SortOrderInput | SortOrder
    policyViolations?: SortOrderInput | SortOrder
    regulatoryIssues?: SortOrderInput | SortOrder
    missingSignatures?: SortOrderInput | SortOrder
    expirationDetected?: SortOrder
    importantDates?: SortOrderInput | SortOrder
    risks?: SortOrderInput | SortOrder
    recommendations?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    document?: DocumentOrderByWithRelationInput
    findings?: FindingOrderByRelationAggregateInput
  }

  export type DocumentAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentAnalysisWhereInput | DocumentAnalysisWhereInput[]
    OR?: DocumentAnalysisWhereInput[]
    NOT?: DocumentAnalysisWhereInput | DocumentAnalysisWhereInput[]
    documentId?: UuidFilter<"DocumentAnalysis"> | string
    executiveSummary?: StringNullableFilter<"DocumentAnalysis"> | string | null
    overallVerdict?: EnumAnalysisVerdictNullableFilter<"DocumentAnalysis"> | $Enums.AnalysisVerdict | null
    confidenceScore?: FloatNullableFilter<"DocumentAnalysis"> | number | null
    modelName?: StringNullableFilter<"DocumentAnalysis"> | string | null
    promptVersion?: StringNullableFilter<"DocumentAnalysis"> | string | null
    rulesetVersion?: StringNullableFilter<"DocumentAnalysis"> | string | null
    parties?: JsonNullableFilter<"DocumentAnalysis">
    obligations?: JsonNullableFilter<"DocumentAnalysis">
    paymentTerms?: JsonNullableFilter<"DocumentAnalysis">
    renewalTerms?: JsonNullableFilter<"DocumentAnalysis">
    penalties?: JsonNullableFilter<"DocumentAnalysis">
    governingLaw?: StringNullableFilter<"DocumentAnalysis"> | string | null
    missingClauses?: JsonNullableFilter<"DocumentAnalysis">
    unusualConditions?: JsonNullableFilter<"DocumentAnalysis">
    complianceRequirements?: JsonNullableFilter<"DocumentAnalysis">
    policyViolations?: JsonNullableFilter<"DocumentAnalysis">
    regulatoryIssues?: JsonNullableFilter<"DocumentAnalysis">
    missingSignatures?: JsonNullableFilter<"DocumentAnalysis">
    expirationDetected?: BoolFilter<"DocumentAnalysis"> | boolean
    importantDates?: JsonNullableFilter<"DocumentAnalysis">
    risks?: JsonNullableFilter<"DocumentAnalysis">
    recommendations?: JsonNullableFilter<"DocumentAnalysis">
    createdAt?: DateTimeFilter<"DocumentAnalysis"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    findings?: FindingListRelationFilter
  }, "id">

  export type DocumentAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    executiveSummary?: SortOrderInput | SortOrder
    overallVerdict?: SortOrderInput | SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    modelName?: SortOrderInput | SortOrder
    promptVersion?: SortOrderInput | SortOrder
    rulesetVersion?: SortOrderInput | SortOrder
    parties?: SortOrderInput | SortOrder
    obligations?: SortOrderInput | SortOrder
    paymentTerms?: SortOrderInput | SortOrder
    renewalTerms?: SortOrderInput | SortOrder
    penalties?: SortOrderInput | SortOrder
    governingLaw?: SortOrderInput | SortOrder
    missingClauses?: SortOrderInput | SortOrder
    unusualConditions?: SortOrderInput | SortOrder
    complianceRequirements?: SortOrderInput | SortOrder
    policyViolations?: SortOrderInput | SortOrder
    regulatoryIssues?: SortOrderInput | SortOrder
    missingSignatures?: SortOrderInput | SortOrder
    expirationDetected?: SortOrder
    importantDates?: SortOrderInput | SortOrder
    risks?: SortOrderInput | SortOrder
    recommendations?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DocumentAnalysisCountOrderByAggregateInput
    _avg?: DocumentAnalysisAvgOrderByAggregateInput
    _max?: DocumentAnalysisMaxOrderByAggregateInput
    _min?: DocumentAnalysisMinOrderByAggregateInput
    _sum?: DocumentAnalysisSumOrderByAggregateInput
  }

  export type DocumentAnalysisScalarWhereWithAggregatesInput = {
    AND?: DocumentAnalysisScalarWhereWithAggregatesInput | DocumentAnalysisScalarWhereWithAggregatesInput[]
    OR?: DocumentAnalysisScalarWhereWithAggregatesInput[]
    NOT?: DocumentAnalysisScalarWhereWithAggregatesInput | DocumentAnalysisScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DocumentAnalysis"> | string
    documentId?: UuidWithAggregatesFilter<"DocumentAnalysis"> | string
    executiveSummary?: StringNullableWithAggregatesFilter<"DocumentAnalysis"> | string | null
    overallVerdict?: EnumAnalysisVerdictNullableWithAggregatesFilter<"DocumentAnalysis"> | $Enums.AnalysisVerdict | null
    confidenceScore?: FloatNullableWithAggregatesFilter<"DocumentAnalysis"> | number | null
    modelName?: StringNullableWithAggregatesFilter<"DocumentAnalysis"> | string | null
    promptVersion?: StringNullableWithAggregatesFilter<"DocumentAnalysis"> | string | null
    rulesetVersion?: StringNullableWithAggregatesFilter<"DocumentAnalysis"> | string | null
    parties?: JsonNullableWithAggregatesFilter<"DocumentAnalysis">
    obligations?: JsonNullableWithAggregatesFilter<"DocumentAnalysis">
    paymentTerms?: JsonNullableWithAggregatesFilter<"DocumentAnalysis">
    renewalTerms?: JsonNullableWithAggregatesFilter<"DocumentAnalysis">
    penalties?: JsonNullableWithAggregatesFilter<"DocumentAnalysis">
    governingLaw?: StringNullableWithAggregatesFilter<"DocumentAnalysis"> | string | null
    missingClauses?: JsonNullableWithAggregatesFilter<"DocumentAnalysis">
    unusualConditions?: JsonNullableWithAggregatesFilter<"DocumentAnalysis">
    complianceRequirements?: JsonNullableWithAggregatesFilter<"DocumentAnalysis">
    policyViolations?: JsonNullableWithAggregatesFilter<"DocumentAnalysis">
    regulatoryIssues?: JsonNullableWithAggregatesFilter<"DocumentAnalysis">
    missingSignatures?: JsonNullableWithAggregatesFilter<"DocumentAnalysis">
    expirationDetected?: BoolWithAggregatesFilter<"DocumentAnalysis"> | boolean
    importantDates?: JsonNullableWithAggregatesFilter<"DocumentAnalysis">
    risks?: JsonNullableWithAggregatesFilter<"DocumentAnalysis">
    recommendations?: JsonNullableWithAggregatesFilter<"DocumentAnalysis">
    createdAt?: DateTimeWithAggregatesFilter<"DocumentAnalysis"> | Date | string
  }

  export type FindingWhereInput = {
    AND?: FindingWhereInput | FindingWhereInput[]
    OR?: FindingWhereInput[]
    NOT?: FindingWhereInput | FindingWhereInput[]
    id?: UuidFilter<"Finding"> | string
    analysisId?: UuidFilter<"Finding"> | string
    title?: StringFilter<"Finding"> | string
    description?: StringNullableFilter<"Finding"> | string | null
    severity?: EnumFindingSeverityFilter<"Finding"> | $Enums.FindingSeverity
    clauseReference?: StringNullableFilter<"Finding"> | string | null
    pageNumber?: IntNullableFilter<"Finding"> | number | null
    excerpt?: StringNullableFilter<"Finding"> | string | null
    recommendation?: StringNullableFilter<"Finding"> | string | null
    metadata?: JsonNullableFilter<"Finding">
    createdAt?: DateTimeFilter<"Finding"> | Date | string
    analysis?: XOR<DocumentAnalysisScalarRelationFilter, DocumentAnalysisWhereInput>
  }

  export type FindingOrderByWithRelationInput = {
    id?: SortOrder
    analysisId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    severity?: SortOrder
    clauseReference?: SortOrderInput | SortOrder
    pageNumber?: SortOrderInput | SortOrder
    excerpt?: SortOrderInput | SortOrder
    recommendation?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    analysis?: DocumentAnalysisOrderByWithRelationInput
  }

  export type FindingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FindingWhereInput | FindingWhereInput[]
    OR?: FindingWhereInput[]
    NOT?: FindingWhereInput | FindingWhereInput[]
    analysisId?: UuidFilter<"Finding"> | string
    title?: StringFilter<"Finding"> | string
    description?: StringNullableFilter<"Finding"> | string | null
    severity?: EnumFindingSeverityFilter<"Finding"> | $Enums.FindingSeverity
    clauseReference?: StringNullableFilter<"Finding"> | string | null
    pageNumber?: IntNullableFilter<"Finding"> | number | null
    excerpt?: StringNullableFilter<"Finding"> | string | null
    recommendation?: StringNullableFilter<"Finding"> | string | null
    metadata?: JsonNullableFilter<"Finding">
    createdAt?: DateTimeFilter<"Finding"> | Date | string
    analysis?: XOR<DocumentAnalysisScalarRelationFilter, DocumentAnalysisWhereInput>
  }, "id">

  export type FindingOrderByWithAggregationInput = {
    id?: SortOrder
    analysisId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    severity?: SortOrder
    clauseReference?: SortOrderInput | SortOrder
    pageNumber?: SortOrderInput | SortOrder
    excerpt?: SortOrderInput | SortOrder
    recommendation?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FindingCountOrderByAggregateInput
    _avg?: FindingAvgOrderByAggregateInput
    _max?: FindingMaxOrderByAggregateInput
    _min?: FindingMinOrderByAggregateInput
    _sum?: FindingSumOrderByAggregateInput
  }

  export type FindingScalarWhereWithAggregatesInput = {
    AND?: FindingScalarWhereWithAggregatesInput | FindingScalarWhereWithAggregatesInput[]
    OR?: FindingScalarWhereWithAggregatesInput[]
    NOT?: FindingScalarWhereWithAggregatesInput | FindingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Finding"> | string
    analysisId?: UuidWithAggregatesFilter<"Finding"> | string
    title?: StringWithAggregatesFilter<"Finding"> | string
    description?: StringNullableWithAggregatesFilter<"Finding"> | string | null
    severity?: EnumFindingSeverityWithAggregatesFilter<"Finding"> | $Enums.FindingSeverity
    clauseReference?: StringNullableWithAggregatesFilter<"Finding"> | string | null
    pageNumber?: IntNullableWithAggregatesFilter<"Finding"> | number | null
    excerpt?: StringNullableWithAggregatesFilter<"Finding"> | string | null
    recommendation?: StringNullableWithAggregatesFilter<"Finding"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Finding">
    createdAt?: DateTimeWithAggregatesFilter<"Finding"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: UuidFilter<"ActivityLog"> | string
    organizationId?: UuidFilter<"ActivityLog"> | string
    userId?: UuidNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    entityType?: StringNullableFilter<"ActivityLog"> | string | null
    entityId?: UuidNullableFilter<"ActivityLog"> | string | null
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    user?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    user?: ProfileOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    organizationId?: UuidFilter<"ActivityLog"> | string
    userId?: UuidNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    entityType?: StringNullableFilter<"ActivityLog"> | string | null
    entityId?: UuidNullableFilter<"ActivityLog"> | string | null
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    user?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ActivityLog"> | string
    organizationId?: UuidWithAggregatesFilter<"ActivityLog"> | string
    userId?: UuidNullableWithAggregatesFilter<"ActivityLog"> | string | null
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    entityType?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    entityId?: UuidNullableWithAggregatesFilter<"ActivityLog"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"ActivityLog">
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type ComplianceQueryWhereInput = {
    AND?: ComplianceQueryWhereInput | ComplianceQueryWhereInput[]
    OR?: ComplianceQueryWhereInput[]
    NOT?: ComplianceQueryWhereInput | ComplianceQueryWhereInput[]
    id?: UuidFilter<"ComplianceQuery"> | string
    queryText?: StringFilter<"ComplianceQuery"> | string
    status?: EnumComplianceQueryStatusFilter<"ComplianceQuery"> | $Enums.ComplianceQueryStatus
    documentId?: UuidNullableFilter<"ComplianceQuery"> | string | null
    userId?: UuidFilter<"ComplianceQuery"> | string
    attemptCount?: IntFilter<"ComplianceQuery"> | number
    errorMessage?: StringNullableFilter<"ComplianceQuery"> | string | null
    processingStartedAt?: DateTimeNullableFilter<"ComplianceQuery"> | Date | string | null
    processingFinishedAt?: DateTimeNullableFilter<"ComplianceQuery"> | Date | string | null
    createdAt?: DateTimeFilter<"ComplianceQuery"> | Date | string
    updatedAt?: DateTimeFilter<"ComplianceQuery"> | Date | string
    document?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    responses?: AIResponseListRelationFilter
  }

  export type ComplianceQueryOrderByWithRelationInput = {
    id?: SortOrder
    queryText?: SortOrder
    status?: SortOrder
    documentId?: SortOrderInput | SortOrder
    userId?: SortOrder
    attemptCount?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    processingStartedAt?: SortOrderInput | SortOrder
    processingFinishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    document?: DocumentOrderByWithRelationInput
    user?: ProfileOrderByWithRelationInput
    responses?: AIResponseOrderByRelationAggregateInput
  }

  export type ComplianceQueryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ComplianceQueryWhereInput | ComplianceQueryWhereInput[]
    OR?: ComplianceQueryWhereInput[]
    NOT?: ComplianceQueryWhereInput | ComplianceQueryWhereInput[]
    queryText?: StringFilter<"ComplianceQuery"> | string
    status?: EnumComplianceQueryStatusFilter<"ComplianceQuery"> | $Enums.ComplianceQueryStatus
    documentId?: UuidNullableFilter<"ComplianceQuery"> | string | null
    userId?: UuidFilter<"ComplianceQuery"> | string
    attemptCount?: IntFilter<"ComplianceQuery"> | number
    errorMessage?: StringNullableFilter<"ComplianceQuery"> | string | null
    processingStartedAt?: DateTimeNullableFilter<"ComplianceQuery"> | Date | string | null
    processingFinishedAt?: DateTimeNullableFilter<"ComplianceQuery"> | Date | string | null
    createdAt?: DateTimeFilter<"ComplianceQuery"> | Date | string
    updatedAt?: DateTimeFilter<"ComplianceQuery"> | Date | string
    document?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    responses?: AIResponseListRelationFilter
  }, "id">

  export type ComplianceQueryOrderByWithAggregationInput = {
    id?: SortOrder
    queryText?: SortOrder
    status?: SortOrder
    documentId?: SortOrderInput | SortOrder
    userId?: SortOrder
    attemptCount?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    processingStartedAt?: SortOrderInput | SortOrder
    processingFinishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ComplianceQueryCountOrderByAggregateInput
    _avg?: ComplianceQueryAvgOrderByAggregateInput
    _max?: ComplianceQueryMaxOrderByAggregateInput
    _min?: ComplianceQueryMinOrderByAggregateInput
    _sum?: ComplianceQuerySumOrderByAggregateInput
  }

  export type ComplianceQueryScalarWhereWithAggregatesInput = {
    AND?: ComplianceQueryScalarWhereWithAggregatesInput | ComplianceQueryScalarWhereWithAggregatesInput[]
    OR?: ComplianceQueryScalarWhereWithAggregatesInput[]
    NOT?: ComplianceQueryScalarWhereWithAggregatesInput | ComplianceQueryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ComplianceQuery"> | string
    queryText?: StringWithAggregatesFilter<"ComplianceQuery"> | string
    status?: EnumComplianceQueryStatusWithAggregatesFilter<"ComplianceQuery"> | $Enums.ComplianceQueryStatus
    documentId?: UuidNullableWithAggregatesFilter<"ComplianceQuery"> | string | null
    userId?: UuidWithAggregatesFilter<"ComplianceQuery"> | string
    attemptCount?: IntWithAggregatesFilter<"ComplianceQuery"> | number
    errorMessage?: StringNullableWithAggregatesFilter<"ComplianceQuery"> | string | null
    processingStartedAt?: DateTimeNullableWithAggregatesFilter<"ComplianceQuery"> | Date | string | null
    processingFinishedAt?: DateTimeNullableWithAggregatesFilter<"ComplianceQuery"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ComplianceQuery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ComplianceQuery"> | Date | string
  }

  export type AIResponseWhereInput = {
    AND?: AIResponseWhereInput | AIResponseWhereInput[]
    OR?: AIResponseWhereInput[]
    NOT?: AIResponseWhereInput | AIResponseWhereInput[]
    id?: UuidFilter<"AIResponse"> | string
    queryId?: UuidFilter<"AIResponse"> | string
    responseText?: StringFilter<"AIResponse"> | string
    confidenceScore?: FloatNullableFilter<"AIResponse"> | number | null
    metadata?: JsonNullableFilter<"AIResponse">
    createdAt?: DateTimeFilter<"AIResponse"> | Date | string
    complianceQuery?: XOR<ComplianceQueryScalarRelationFilter, ComplianceQueryWhereInput>
  }

  export type AIResponseOrderByWithRelationInput = {
    id?: SortOrder
    queryId?: SortOrder
    responseText?: SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    complianceQuery?: ComplianceQueryOrderByWithRelationInput
  }

  export type AIResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIResponseWhereInput | AIResponseWhereInput[]
    OR?: AIResponseWhereInput[]
    NOT?: AIResponseWhereInput | AIResponseWhereInput[]
    queryId?: UuidFilter<"AIResponse"> | string
    responseText?: StringFilter<"AIResponse"> | string
    confidenceScore?: FloatNullableFilter<"AIResponse"> | number | null
    metadata?: JsonNullableFilter<"AIResponse">
    createdAt?: DateTimeFilter<"AIResponse"> | Date | string
    complianceQuery?: XOR<ComplianceQueryScalarRelationFilter, ComplianceQueryWhereInput>
  }, "id">

  export type AIResponseOrderByWithAggregationInput = {
    id?: SortOrder
    queryId?: SortOrder
    responseText?: SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AIResponseCountOrderByAggregateInput
    _avg?: AIResponseAvgOrderByAggregateInput
    _max?: AIResponseMaxOrderByAggregateInput
    _min?: AIResponseMinOrderByAggregateInput
    _sum?: AIResponseSumOrderByAggregateInput
  }

  export type AIResponseScalarWhereWithAggregatesInput = {
    AND?: AIResponseScalarWhereWithAggregatesInput | AIResponseScalarWhereWithAggregatesInput[]
    OR?: AIResponseScalarWhereWithAggregatesInput[]
    NOT?: AIResponseScalarWhereWithAggregatesInput | AIResponseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AIResponse"> | string
    queryId?: UuidWithAggregatesFilter<"AIResponse"> | string
    responseText?: StringWithAggregatesFilter<"AIResponse"> | string
    confidenceScore?: FloatNullableWithAggregatesFilter<"AIResponse"> | number | null
    metadata?: JsonNullableWithAggregatesFilter<"AIResponse">
    createdAt?: DateTimeWithAggregatesFilter<"AIResponse"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: UuidFilter<"Notification"> | string
    userId?: UuidFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    deliveryChannel?: EnumDeliveryChannelFilter<"Notification"> | $Enums.DeliveryChannel
    documentId?: UuidNullableFilter<"Notification"> | string | null
    scheduledFor?: DateTimeNullableFilter<"Notification"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    document?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    deliveryChannel?: SortOrder
    documentId?: SortOrderInput | SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: ProfileOrderByWithRelationInput
    document?: DocumentOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: UuidFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    deliveryChannel?: EnumDeliveryChannelFilter<"Notification"> | $Enums.DeliveryChannel
    documentId?: UuidNullableFilter<"Notification"> | string | null
    scheduledFor?: DateTimeNullableFilter<"Notification"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    document?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    deliveryChannel?: SortOrder
    documentId?: SortOrderInput | SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Notification"> | string
    userId?: UuidWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusWithAggregatesFilter<"Notification"> | $Enums.NotificationStatus
    deliveryChannel?: EnumDeliveryChannelWithAggregatesFilter<"Notification"> | $Enums.DeliveryChannel
    documentId?: UuidNullableWithAggregatesFilter<"Notification"> | string | null
    scheduledFor?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.PlanType
    documentsLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: ProfileCreateNestedManyWithoutOrganizationInput
    documents?: DocumentCreateNestedManyWithoutOrganizationInput
    activityLogs?: ActivityLogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.PlanType
    documentsLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: ProfileUncheckedCreateNestedManyWithoutOrganizationInput
    documents?: DocumentUncheckedCreateNestedManyWithoutOrganizationInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    documentsLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfileUpdateManyWithoutOrganizationNestedInput
    documents?: DocumentUpdateManyWithoutOrganizationNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    documentsLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfileUncheckedUpdateManyWithoutOrganizationNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutOrganizationNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.PlanType
    documentsLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    documentsLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    documentsLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    email: string
    fullName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutProfilesInput
    documents?: DocumentCreateNestedManyWithoutUploaderInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    complianceQueries?: ComplianceQueryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    email: string
    fullName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutUploaderInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    complianceQueries?: ComplianceQueryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutProfilesNestedInput
    documents?: DocumentUpdateManyWithoutUploaderNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    complianceQueries?: ComplianceQueryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutUploaderNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    complianceQueries?: ComplianceQueryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    email: string
    fullName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    originalFileName: string
    filename: string
    mimeType?: string | null
    storageKey?: string | null
    fileUrl?: string | null
    checksum?: string | null
    fileSize?: number | null
    pageCount?: number | null
    language?: string | null
    status?: $Enums.DocumentStatus
    complianceScore?: number | null
    riskLevel?: $Enums.RiskLevel | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutDocumentsInput
    uploader: ProfileCreateNestedOneWithoutDocumentsInput
    analyses?: DocumentAnalysisCreateNestedManyWithoutDocumentInput
    complianceQueries?: ComplianceQueryCreateNestedManyWithoutDocumentInput
    notifications?: NotificationCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    organizationId: string
    uploadedBy: string
    originalFileName: string
    filename: string
    mimeType?: string | null
    storageKey?: string | null
    fileUrl?: string | null
    checksum?: string | null
    fileSize?: number | null
    pageCount?: number | null
    language?: string | null
    status?: $Enums.DocumentStatus
    complianceScore?: number | null
    riskLevel?: $Enums.RiskLevel | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: DocumentAnalysisUncheckedCreateNestedManyWithoutDocumentInput
    complianceQueries?: ComplianceQueryUncheckedCreateNestedManyWithoutDocumentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutDocumentsNestedInput
    uploader?: ProfileUpdateOneRequiredWithoutDocumentsNestedInput
    analyses?: DocumentAnalysisUpdateManyWithoutDocumentNestedInput
    complianceQueries?: ComplianceQueryUpdateManyWithoutDocumentNestedInput
    notifications?: NotificationUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    uploadedBy?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: DocumentAnalysisUncheckedUpdateManyWithoutDocumentNestedInput
    complianceQueries?: ComplianceQueryUncheckedUpdateManyWithoutDocumentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateManyInput = {
    id?: string
    organizationId: string
    uploadedBy: string
    originalFileName: string
    filename: string
    mimeType?: string | null
    storageKey?: string | null
    fileUrl?: string | null
    checksum?: string | null
    fileSize?: number | null
    pageCount?: number | null
    language?: string | null
    status?: $Enums.DocumentStatus
    complianceScore?: number | null
    riskLevel?: $Enums.RiskLevel | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    uploadedBy?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentAnalysisCreateInput = {
    id?: string
    executiveSummary?: string | null
    overallVerdict?: $Enums.AnalysisVerdict | null
    confidenceScore?: number | null
    modelName?: string | null
    promptVersion?: string | null
    rulesetVersion?: string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutAnalysesInput
    findings?: FindingCreateNestedManyWithoutAnalysisInput
  }

  export type DocumentAnalysisUncheckedCreateInput = {
    id?: string
    documentId: string
    executiveSummary?: string | null
    overallVerdict?: $Enums.AnalysisVerdict | null
    confidenceScore?: number | null
    modelName?: string | null
    promptVersion?: string | null
    rulesetVersion?: string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    findings?: FindingUncheckedCreateNestedManyWithoutAnalysisInput
  }

  export type DocumentAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null
    overallVerdict?: NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    promptVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: NullableStringFieldUpdateOperationsInput | string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: BoolFieldUpdateOperationsInput | boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutAnalysesNestedInput
    findings?: FindingUpdateManyWithoutAnalysisNestedInput
  }

  export type DocumentAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null
    overallVerdict?: NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    promptVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: NullableStringFieldUpdateOperationsInput | string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: BoolFieldUpdateOperationsInput | boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    findings?: FindingUncheckedUpdateManyWithoutAnalysisNestedInput
  }

  export type DocumentAnalysisCreateManyInput = {
    id?: string
    documentId: string
    executiveSummary?: string | null
    overallVerdict?: $Enums.AnalysisVerdict | null
    confidenceScore?: number | null
    modelName?: string | null
    promptVersion?: string | null
    rulesetVersion?: string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DocumentAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null
    overallVerdict?: NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    promptVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: NullableStringFieldUpdateOperationsInput | string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: BoolFieldUpdateOperationsInput | boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null
    overallVerdict?: NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    promptVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: NullableStringFieldUpdateOperationsInput | string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: BoolFieldUpdateOperationsInput | boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingCreateInput = {
    id?: string
    title: string
    description?: string | null
    severity?: $Enums.FindingSeverity
    clauseReference?: string | null
    pageNumber?: number | null
    excerpt?: string | null
    recommendation?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    analysis: DocumentAnalysisCreateNestedOneWithoutFindingsInput
  }

  export type FindingUncheckedCreateInput = {
    id?: string
    analysisId: string
    title: string
    description?: string | null
    severity?: $Enums.FindingSeverity
    clauseReference?: string | null
    pageNumber?: number | null
    excerpt?: string | null
    recommendation?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FindingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: EnumFindingSeverityFieldUpdateOperationsInput | $Enums.FindingSeverity
    clauseReference?: NullableStringFieldUpdateOperationsInput | string | null
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analysis?: DocumentAnalysisUpdateOneRequiredWithoutFindingsNestedInput
  }

  export type FindingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: EnumFindingSeverityFieldUpdateOperationsInput | $Enums.FindingSeverity
    clauseReference?: NullableStringFieldUpdateOperationsInput | string | null
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingCreateManyInput = {
    id?: string
    analysisId: string
    title: string
    description?: string | null
    severity?: $Enums.FindingSeverity
    clauseReference?: string | null
    pageNumber?: number | null
    excerpt?: string | null
    recommendation?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FindingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: EnumFindingSeverityFieldUpdateOperationsInput | $Enums.FindingSeverity
    clauseReference?: NullableStringFieldUpdateOperationsInput | string | null
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: EnumFindingSeverityFieldUpdateOperationsInput | $Enums.FindingSeverity
    clauseReference?: NullableStringFieldUpdateOperationsInput | string | null
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    action: string
    entityType?: string | null
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutActivityLogsInput
    user?: ProfileCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    organizationId: string
    userId?: string | null
    action: string
    entityType?: string | null
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutActivityLogsNestedInput
    user?: ProfileUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    organizationId: string
    userId?: string | null
    action: string
    entityType?: string | null
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplianceQueryCreateInput = {
    id?: string
    queryText: string
    status?: $Enums.ComplianceQueryStatus
    attemptCount?: number
    errorMessage?: string | null
    processingStartedAt?: Date | string | null
    processingFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    document?: DocumentCreateNestedOneWithoutComplianceQueriesInput
    user: ProfileCreateNestedOneWithoutComplianceQueriesInput
    responses?: AIResponseCreateNestedManyWithoutComplianceQueryInput
  }

  export type ComplianceQueryUncheckedCreateInput = {
    id?: string
    queryText: string
    status?: $Enums.ComplianceQueryStatus
    documentId?: string | null
    userId: string
    attemptCount?: number
    errorMessage?: string | null
    processingStartedAt?: Date | string | null
    processingFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: AIResponseUncheckedCreateNestedManyWithoutComplianceQueryInput
  }

  export type ComplianceQueryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryText?: StringFieldUpdateOperationsInput | string
    status?: EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus
    attemptCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneWithoutComplianceQueriesNestedInput
    user?: ProfileUpdateOneRequiredWithoutComplianceQueriesNestedInput
    responses?: AIResponseUpdateManyWithoutComplianceQueryNestedInput
  }

  export type ComplianceQueryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryText?: StringFieldUpdateOperationsInput | string
    status?: EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    attemptCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: AIResponseUncheckedUpdateManyWithoutComplianceQueryNestedInput
  }

  export type ComplianceQueryCreateManyInput = {
    id?: string
    queryText: string
    status?: $Enums.ComplianceQueryStatus
    documentId?: string | null
    userId: string
    attemptCount?: number
    errorMessage?: string | null
    processingStartedAt?: Date | string | null
    processingFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComplianceQueryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryText?: StringFieldUpdateOperationsInput | string
    status?: EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus
    attemptCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplianceQueryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryText?: StringFieldUpdateOperationsInput | string
    status?: EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    attemptCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIResponseCreateInput = {
    id?: string
    responseText: string
    confidenceScore?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    complianceQuery: ComplianceQueryCreateNestedOneWithoutResponsesInput
  }

  export type AIResponseUncheckedCreateInput = {
    id?: string
    queryId: string
    responseText: string
    confidenceScore?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AIResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseText?: StringFieldUpdateOperationsInput | string
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    complianceQuery?: ComplianceQueryUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type AIResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryId?: StringFieldUpdateOperationsInput | string
    responseText?: StringFieldUpdateOperationsInput | string
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIResponseCreateManyInput = {
    id?: string
    queryId: string
    responseText: string
    confidenceScore?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AIResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseText?: StringFieldUpdateOperationsInput | string
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryId?: StringFieldUpdateOperationsInput | string
    responseText?: StringFieldUpdateOperationsInput | string
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    deliveryChannel?: $Enums.DeliveryChannel
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutNotificationsInput
    document?: DocumentCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    message: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    deliveryChannel?: $Enums.DeliveryChannel
    documentId?: string | null
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutNotificationsNestedInput
    document?: DocumentUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    title: string
    message: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    deliveryChannel?: $Enums.DeliveryChannel
    documentId?: string | null
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProfileListRelationFilter = {
    every?: ProfileWhereInput
    some?: ProfileWhereInput
    none?: ProfileWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    documentsLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    documentsLimit?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    documentsLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    documentsLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    documentsLimit?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type ComplianceQueryListRelationFilter = {
    every?: ComplianceQueryWhereInput
    some?: ComplianceQueryWhereInput
    none?: ComplianceQueryWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type ComplianceQueryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type EnumRiskLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRiskLevelNullableFilter<$PrismaModel> | $Enums.RiskLevel | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type DocumentAnalysisListRelationFilter = {
    every?: DocumentAnalysisWhereInput
    some?: DocumentAnalysisWhereInput
    none?: DocumentAnalysisWhereInput
  }

  export type DocumentAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    uploadedBy?: SortOrder
    originalFileName?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    storageKey?: SortOrder
    fileUrl?: SortOrder
    checksum?: SortOrder
    fileSize?: SortOrder
    pageCount?: SortOrder
    language?: SortOrder
    status?: SortOrder
    complianceScore?: SortOrder
    riskLevel?: SortOrder
    expirationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    pageCount?: SortOrder
    complianceScore?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    uploadedBy?: SortOrder
    originalFileName?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    storageKey?: SortOrder
    fileUrl?: SortOrder
    checksum?: SortOrder
    fileSize?: SortOrder
    pageCount?: SortOrder
    language?: SortOrder
    status?: SortOrder
    complianceScore?: SortOrder
    riskLevel?: SortOrder
    expirationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    uploadedBy?: SortOrder
    originalFileName?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    storageKey?: SortOrder
    fileUrl?: SortOrder
    checksum?: SortOrder
    fileSize?: SortOrder
    pageCount?: SortOrder
    language?: SortOrder
    status?: SortOrder
    complianceScore?: SortOrder
    riskLevel?: SortOrder
    expirationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    fileSize?: SortOrder
    pageCount?: SortOrder
    complianceScore?: SortOrder
  }

  export type EnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type EnumRiskLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRiskLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAnalysisVerdictNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisVerdict | EnumAnalysisVerdictFieldRefInput<$PrismaModel> | null
    in?: $Enums.AnalysisVerdict[] | ListEnumAnalysisVerdictFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AnalysisVerdict[] | ListEnumAnalysisVerdictFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAnalysisVerdictNullableFilter<$PrismaModel> | $Enums.AnalysisVerdict | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DocumentScalarRelationFilter = {
    is?: DocumentWhereInput
    isNot?: DocumentWhereInput
  }

  export type FindingListRelationFilter = {
    every?: FindingWhereInput
    some?: FindingWhereInput
    none?: FindingWhereInput
  }

  export type FindingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    executiveSummary?: SortOrder
    overallVerdict?: SortOrder
    confidenceScore?: SortOrder
    modelName?: SortOrder
    promptVersion?: SortOrder
    rulesetVersion?: SortOrder
    parties?: SortOrder
    obligations?: SortOrder
    paymentTerms?: SortOrder
    renewalTerms?: SortOrder
    penalties?: SortOrder
    governingLaw?: SortOrder
    missingClauses?: SortOrder
    unusualConditions?: SortOrder
    complianceRequirements?: SortOrder
    policyViolations?: SortOrder
    regulatoryIssues?: SortOrder
    missingSignatures?: SortOrder
    expirationDetected?: SortOrder
    importantDates?: SortOrder
    risks?: SortOrder
    recommendations?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentAnalysisAvgOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type DocumentAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    executiveSummary?: SortOrder
    overallVerdict?: SortOrder
    confidenceScore?: SortOrder
    modelName?: SortOrder
    promptVersion?: SortOrder
    rulesetVersion?: SortOrder
    governingLaw?: SortOrder
    expirationDetected?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    executiveSummary?: SortOrder
    overallVerdict?: SortOrder
    confidenceScore?: SortOrder
    modelName?: SortOrder
    promptVersion?: SortOrder
    rulesetVersion?: SortOrder
    governingLaw?: SortOrder
    expirationDetected?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentAnalysisSumOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type EnumAnalysisVerdictNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisVerdict | EnumAnalysisVerdictFieldRefInput<$PrismaModel> | null
    in?: $Enums.AnalysisVerdict[] | ListEnumAnalysisVerdictFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AnalysisVerdict[] | ListEnumAnalysisVerdictFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAnalysisVerdictNullableWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisVerdict | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAnalysisVerdictNullableFilter<$PrismaModel>
    _max?: NestedEnumAnalysisVerdictNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumFindingSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.FindingSeverity | EnumFindingSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.FindingSeverity[] | ListEnumFindingSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.FindingSeverity[] | ListEnumFindingSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumFindingSeverityFilter<$PrismaModel> | $Enums.FindingSeverity
  }

  export type DocumentAnalysisScalarRelationFilter = {
    is?: DocumentAnalysisWhereInput
    isNot?: DocumentAnalysisWhereInput
  }

  export type FindingCountOrderByAggregateInput = {
    id?: SortOrder
    analysisId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    clauseReference?: SortOrder
    pageNumber?: SortOrder
    excerpt?: SortOrder
    recommendation?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type FindingAvgOrderByAggregateInput = {
    pageNumber?: SortOrder
  }

  export type FindingMaxOrderByAggregateInput = {
    id?: SortOrder
    analysisId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    clauseReference?: SortOrder
    pageNumber?: SortOrder
    excerpt?: SortOrder
    recommendation?: SortOrder
    createdAt?: SortOrder
  }

  export type FindingMinOrderByAggregateInput = {
    id?: SortOrder
    analysisId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    clauseReference?: SortOrder
    pageNumber?: SortOrder
    excerpt?: SortOrder
    recommendation?: SortOrder
    createdAt?: SortOrder
  }

  export type FindingSumOrderByAggregateInput = {
    pageNumber?: SortOrder
  }

  export type EnumFindingSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FindingSeverity | EnumFindingSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.FindingSeverity[] | ListEnumFindingSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.FindingSeverity[] | ListEnumFindingSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumFindingSeverityWithAggregatesFilter<$PrismaModel> | $Enums.FindingSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFindingSeverityFilter<$PrismaModel>
    _max?: NestedEnumFindingSeverityFilter<$PrismaModel>
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumComplianceQueryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplianceQueryStatus | EnumComplianceQueryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ComplianceQueryStatus[] | ListEnumComplianceQueryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComplianceQueryStatus[] | ListEnumComplianceQueryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumComplianceQueryStatusFilter<$PrismaModel> | $Enums.ComplianceQueryStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DocumentNullableScalarRelationFilter = {
    is?: DocumentWhereInput | null
    isNot?: DocumentWhereInput | null
  }

  export type AIResponseListRelationFilter = {
    every?: AIResponseWhereInput
    some?: AIResponseWhereInput
    none?: AIResponseWhereInput
  }

  export type AIResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComplianceQueryCountOrderByAggregateInput = {
    id?: SortOrder
    queryText?: SortOrder
    status?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    attemptCount?: SortOrder
    errorMessage?: SortOrder
    processingStartedAt?: SortOrder
    processingFinishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplianceQueryAvgOrderByAggregateInput = {
    attemptCount?: SortOrder
  }

  export type ComplianceQueryMaxOrderByAggregateInput = {
    id?: SortOrder
    queryText?: SortOrder
    status?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    attemptCount?: SortOrder
    errorMessage?: SortOrder
    processingStartedAt?: SortOrder
    processingFinishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplianceQueryMinOrderByAggregateInput = {
    id?: SortOrder
    queryText?: SortOrder
    status?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    attemptCount?: SortOrder
    errorMessage?: SortOrder
    processingStartedAt?: SortOrder
    processingFinishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplianceQuerySumOrderByAggregateInput = {
    attemptCount?: SortOrder
  }

  export type EnumComplianceQueryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplianceQueryStatus | EnumComplianceQueryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ComplianceQueryStatus[] | ListEnumComplianceQueryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComplianceQueryStatus[] | ListEnumComplianceQueryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumComplianceQueryStatusWithAggregatesFilter<$PrismaModel> | $Enums.ComplianceQueryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumComplianceQueryStatusFilter<$PrismaModel>
    _max?: NestedEnumComplianceQueryStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ComplianceQueryScalarRelationFilter = {
    is?: ComplianceQueryWhereInput
    isNot?: ComplianceQueryWhereInput
  }

  export type AIResponseCountOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    responseText?: SortOrder
    confidenceScore?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AIResponseAvgOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type AIResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    responseText?: SortOrder
    confidenceScore?: SortOrder
    createdAt?: SortOrder
  }

  export type AIResponseMinOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    responseText?: SortOrder
    confidenceScore?: SortOrder
    createdAt?: SortOrder
  }

  export type AIResponseSumOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type EnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type EnumDeliveryChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryChannel | EnumDeliveryChannelFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryChannelFilter<$PrismaModel> | $Enums.DeliveryChannel
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    deliveryChannel?: SortOrder
    documentId?: SortOrder
    scheduledFor?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    deliveryChannel?: SortOrder
    documentId?: SortOrder
    scheduledFor?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    deliveryChannel?: SortOrder
    documentId?: SortOrder
    scheduledFor?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type EnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type EnumDeliveryChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryChannel | EnumDeliveryChannelFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryChannelWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryChannelFilter<$PrismaModel>
    _max?: NestedEnumDeliveryChannelFilter<$PrismaModel>
  }

  export type ProfileCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ProfileCreateWithoutOrganizationInput, ProfileUncheckedCreateWithoutOrganizationInput> | ProfileCreateWithoutOrganizationInput[] | ProfileUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutOrganizationInput | ProfileCreateOrConnectWithoutOrganizationInput[]
    createMany?: ProfileCreateManyOrganizationInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<DocumentCreateWithoutOrganizationInput, DocumentUncheckedCreateWithoutOrganizationInput> | DocumentCreateWithoutOrganizationInput[] | DocumentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutOrganizationInput | DocumentCreateOrConnectWithoutOrganizationInput[]
    createMany?: DocumentCreateManyOrganizationInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ActivityLogCreateWithoutOrganizationInput, ActivityLogUncheckedCreateWithoutOrganizationInput> | ActivityLogCreateWithoutOrganizationInput[] | ActivityLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutOrganizationInput | ActivityLogCreateOrConnectWithoutOrganizationInput[]
    createMany?: ActivityLogCreateManyOrganizationInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ProfileCreateWithoutOrganizationInput, ProfileUncheckedCreateWithoutOrganizationInput> | ProfileCreateWithoutOrganizationInput[] | ProfileUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutOrganizationInput | ProfileCreateOrConnectWithoutOrganizationInput[]
    createMany?: ProfileCreateManyOrganizationInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<DocumentCreateWithoutOrganizationInput, DocumentUncheckedCreateWithoutOrganizationInput> | DocumentCreateWithoutOrganizationInput[] | DocumentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutOrganizationInput | DocumentCreateOrConnectWithoutOrganizationInput[]
    createMany?: DocumentCreateManyOrganizationInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ActivityLogCreateWithoutOrganizationInput, ActivityLogUncheckedCreateWithoutOrganizationInput> | ActivityLogCreateWithoutOrganizationInput[] | ActivityLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutOrganizationInput | ActivityLogCreateOrConnectWithoutOrganizationInput[]
    createMany?: ActivityLogCreateManyOrganizationInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfileUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ProfileCreateWithoutOrganizationInput, ProfileUncheckedCreateWithoutOrganizationInput> | ProfileCreateWithoutOrganizationInput[] | ProfileUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutOrganizationInput | ProfileCreateOrConnectWithoutOrganizationInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutOrganizationInput | ProfileUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ProfileCreateManyOrganizationInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutOrganizationInput | ProfileUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutOrganizationInput | ProfileUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<DocumentCreateWithoutOrganizationInput, DocumentUncheckedCreateWithoutOrganizationInput> | DocumentCreateWithoutOrganizationInput[] | DocumentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutOrganizationInput | DocumentCreateOrConnectWithoutOrganizationInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutOrganizationInput | DocumentUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: DocumentCreateManyOrganizationInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutOrganizationInput | DocumentUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutOrganizationInput | DocumentUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ActivityLogCreateWithoutOrganizationInput, ActivityLogUncheckedCreateWithoutOrganizationInput> | ActivityLogCreateWithoutOrganizationInput[] | ActivityLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutOrganizationInput | ActivityLogCreateOrConnectWithoutOrganizationInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutOrganizationInput | ActivityLogUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ActivityLogCreateManyOrganizationInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutOrganizationInput | ActivityLogUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutOrganizationInput | ActivityLogUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ProfileCreateWithoutOrganizationInput, ProfileUncheckedCreateWithoutOrganizationInput> | ProfileCreateWithoutOrganizationInput[] | ProfileUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutOrganizationInput | ProfileCreateOrConnectWithoutOrganizationInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutOrganizationInput | ProfileUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ProfileCreateManyOrganizationInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutOrganizationInput | ProfileUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutOrganizationInput | ProfileUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<DocumentCreateWithoutOrganizationInput, DocumentUncheckedCreateWithoutOrganizationInput> | DocumentCreateWithoutOrganizationInput[] | DocumentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutOrganizationInput | DocumentCreateOrConnectWithoutOrganizationInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutOrganizationInput | DocumentUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: DocumentCreateManyOrganizationInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutOrganizationInput | DocumentUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutOrganizationInput | DocumentUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ActivityLogCreateWithoutOrganizationInput, ActivityLogUncheckedCreateWithoutOrganizationInput> | ActivityLogCreateWithoutOrganizationInput[] | ActivityLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutOrganizationInput | ActivityLogCreateOrConnectWithoutOrganizationInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutOrganizationInput | ActivityLogUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ActivityLogCreateManyOrganizationInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutOrganizationInput | ActivityLogUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutOrganizationInput | ActivityLogUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutProfilesInput = {
    create?: XOR<OrganizationCreateWithoutProfilesInput, OrganizationUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutProfilesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutUploaderInput = {
    create?: XOR<DocumentCreateWithoutUploaderInput, DocumentUncheckedCreateWithoutUploaderInput> | DocumentCreateWithoutUploaderInput[] | DocumentUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUploaderInput | DocumentCreateOrConnectWithoutUploaderInput[]
    createMany?: DocumentCreateManyUploaderInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type ComplianceQueryCreateNestedManyWithoutUserInput = {
    create?: XOR<ComplianceQueryCreateWithoutUserInput, ComplianceQueryUncheckedCreateWithoutUserInput> | ComplianceQueryCreateWithoutUserInput[] | ComplianceQueryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplianceQueryCreateOrConnectWithoutUserInput | ComplianceQueryCreateOrConnectWithoutUserInput[]
    createMany?: ComplianceQueryCreateManyUserInputEnvelope
    connect?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: XOR<DocumentCreateWithoutUploaderInput, DocumentUncheckedCreateWithoutUploaderInput> | DocumentCreateWithoutUploaderInput[] | DocumentUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUploaderInput | DocumentCreateOrConnectWithoutUploaderInput[]
    createMany?: DocumentCreateManyUploaderInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type ComplianceQueryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ComplianceQueryCreateWithoutUserInput, ComplianceQueryUncheckedCreateWithoutUserInput> | ComplianceQueryCreateWithoutUserInput[] | ComplianceQueryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplianceQueryCreateOrConnectWithoutUserInput | ComplianceQueryCreateOrConnectWithoutUserInput[]
    createMany?: ComplianceQueryCreateManyUserInputEnvelope
    connect?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type OrganizationUpdateOneWithoutProfilesNestedInput = {
    create?: XOR<OrganizationCreateWithoutProfilesInput, OrganizationUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutProfilesInput
    upsert?: OrganizationUpsertWithoutProfilesInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutProfilesInput, OrganizationUpdateWithoutProfilesInput>, OrganizationUncheckedUpdateWithoutProfilesInput>
  }

  export type DocumentUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<DocumentCreateWithoutUploaderInput, DocumentUncheckedCreateWithoutUploaderInput> | DocumentCreateWithoutUploaderInput[] | DocumentUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUploaderInput | DocumentCreateOrConnectWithoutUploaderInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUploaderInput | DocumentUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: DocumentCreateManyUploaderInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUploaderInput | DocumentUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUploaderInput | DocumentUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type ComplianceQueryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComplianceQueryCreateWithoutUserInput, ComplianceQueryUncheckedCreateWithoutUserInput> | ComplianceQueryCreateWithoutUserInput[] | ComplianceQueryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplianceQueryCreateOrConnectWithoutUserInput | ComplianceQueryCreateOrConnectWithoutUserInput[]
    upsert?: ComplianceQueryUpsertWithWhereUniqueWithoutUserInput | ComplianceQueryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComplianceQueryCreateManyUserInputEnvelope
    set?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    disconnect?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    delete?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    connect?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    update?: ComplianceQueryUpdateWithWhereUniqueWithoutUserInput | ComplianceQueryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComplianceQueryUpdateManyWithWhereWithoutUserInput | ComplianceQueryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComplianceQueryScalarWhereInput | ComplianceQueryScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<DocumentCreateWithoutUploaderInput, DocumentUncheckedCreateWithoutUploaderInput> | DocumentCreateWithoutUploaderInput[] | DocumentUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUploaderInput | DocumentCreateOrConnectWithoutUploaderInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUploaderInput | DocumentUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: DocumentCreateManyUploaderInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUploaderInput | DocumentUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUploaderInput | DocumentUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type ComplianceQueryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComplianceQueryCreateWithoutUserInput, ComplianceQueryUncheckedCreateWithoutUserInput> | ComplianceQueryCreateWithoutUserInput[] | ComplianceQueryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplianceQueryCreateOrConnectWithoutUserInput | ComplianceQueryCreateOrConnectWithoutUserInput[]
    upsert?: ComplianceQueryUpsertWithWhereUniqueWithoutUserInput | ComplianceQueryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComplianceQueryCreateManyUserInputEnvelope
    set?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    disconnect?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    delete?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    connect?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    update?: ComplianceQueryUpdateWithWhereUniqueWithoutUserInput | ComplianceQueryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComplianceQueryUpdateManyWithWhereWithoutUserInput | ComplianceQueryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComplianceQueryScalarWhereInput | ComplianceQueryScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<OrganizationCreateWithoutDocumentsInput, OrganizationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDocumentsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ProfileCreateWithoutDocumentsInput, ProfileUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutDocumentsInput
    connect?: ProfileWhereUniqueInput
  }

  export type DocumentAnalysisCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentAnalysisCreateWithoutDocumentInput, DocumentAnalysisUncheckedCreateWithoutDocumentInput> | DocumentAnalysisCreateWithoutDocumentInput[] | DocumentAnalysisUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentAnalysisCreateOrConnectWithoutDocumentInput | DocumentAnalysisCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentAnalysisCreateManyDocumentInputEnvelope
    connect?: DocumentAnalysisWhereUniqueInput | DocumentAnalysisWhereUniqueInput[]
  }

  export type ComplianceQueryCreateNestedManyWithoutDocumentInput = {
    create?: XOR<ComplianceQueryCreateWithoutDocumentInput, ComplianceQueryUncheckedCreateWithoutDocumentInput> | ComplianceQueryCreateWithoutDocumentInput[] | ComplianceQueryUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ComplianceQueryCreateOrConnectWithoutDocumentInput | ComplianceQueryCreateOrConnectWithoutDocumentInput[]
    createMany?: ComplianceQueryCreateManyDocumentInputEnvelope
    connect?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutDocumentInput = {
    create?: XOR<NotificationCreateWithoutDocumentInput, NotificationUncheckedCreateWithoutDocumentInput> | NotificationCreateWithoutDocumentInput[] | NotificationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDocumentInput | NotificationCreateOrConnectWithoutDocumentInput[]
    createMany?: NotificationCreateManyDocumentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type DocumentAnalysisUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentAnalysisCreateWithoutDocumentInput, DocumentAnalysisUncheckedCreateWithoutDocumentInput> | DocumentAnalysisCreateWithoutDocumentInput[] | DocumentAnalysisUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentAnalysisCreateOrConnectWithoutDocumentInput | DocumentAnalysisCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentAnalysisCreateManyDocumentInputEnvelope
    connect?: DocumentAnalysisWhereUniqueInput | DocumentAnalysisWhereUniqueInput[]
  }

  export type ComplianceQueryUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<ComplianceQueryCreateWithoutDocumentInput, ComplianceQueryUncheckedCreateWithoutDocumentInput> | ComplianceQueryCreateWithoutDocumentInput[] | ComplianceQueryUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ComplianceQueryCreateOrConnectWithoutDocumentInput | ComplianceQueryCreateOrConnectWithoutDocumentInput[]
    createMany?: ComplianceQueryCreateManyDocumentInputEnvelope
    connect?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<NotificationCreateWithoutDocumentInput, NotificationUncheckedCreateWithoutDocumentInput> | NotificationCreateWithoutDocumentInput[] | NotificationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDocumentInput | NotificationCreateOrConnectWithoutDocumentInput[]
    createMany?: NotificationCreateManyDocumentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EnumDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocumentStatus
  }

  export type NullableEnumRiskLevelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLevel | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrganizationUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<OrganizationCreateWithoutDocumentsInput, OrganizationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDocumentsInput
    upsert?: OrganizationUpsertWithoutDocumentsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutDocumentsInput, OrganizationUpdateWithoutDocumentsInput>, OrganizationUncheckedUpdateWithoutDocumentsInput>
  }

  export type ProfileUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ProfileCreateWithoutDocumentsInput, ProfileUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutDocumentsInput
    upsert?: ProfileUpsertWithoutDocumentsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutDocumentsInput, ProfileUpdateWithoutDocumentsInput>, ProfileUncheckedUpdateWithoutDocumentsInput>
  }

  export type DocumentAnalysisUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentAnalysisCreateWithoutDocumentInput, DocumentAnalysisUncheckedCreateWithoutDocumentInput> | DocumentAnalysisCreateWithoutDocumentInput[] | DocumentAnalysisUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentAnalysisCreateOrConnectWithoutDocumentInput | DocumentAnalysisCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentAnalysisUpsertWithWhereUniqueWithoutDocumentInput | DocumentAnalysisUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentAnalysisCreateManyDocumentInputEnvelope
    set?: DocumentAnalysisWhereUniqueInput | DocumentAnalysisWhereUniqueInput[]
    disconnect?: DocumentAnalysisWhereUniqueInput | DocumentAnalysisWhereUniqueInput[]
    delete?: DocumentAnalysisWhereUniqueInput | DocumentAnalysisWhereUniqueInput[]
    connect?: DocumentAnalysisWhereUniqueInput | DocumentAnalysisWhereUniqueInput[]
    update?: DocumentAnalysisUpdateWithWhereUniqueWithoutDocumentInput | DocumentAnalysisUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentAnalysisUpdateManyWithWhereWithoutDocumentInput | DocumentAnalysisUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentAnalysisScalarWhereInput | DocumentAnalysisScalarWhereInput[]
  }

  export type ComplianceQueryUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<ComplianceQueryCreateWithoutDocumentInput, ComplianceQueryUncheckedCreateWithoutDocumentInput> | ComplianceQueryCreateWithoutDocumentInput[] | ComplianceQueryUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ComplianceQueryCreateOrConnectWithoutDocumentInput | ComplianceQueryCreateOrConnectWithoutDocumentInput[]
    upsert?: ComplianceQueryUpsertWithWhereUniqueWithoutDocumentInput | ComplianceQueryUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: ComplianceQueryCreateManyDocumentInputEnvelope
    set?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    disconnect?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    delete?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    connect?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    update?: ComplianceQueryUpdateWithWhereUniqueWithoutDocumentInput | ComplianceQueryUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: ComplianceQueryUpdateManyWithWhereWithoutDocumentInput | ComplianceQueryUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: ComplianceQueryScalarWhereInput | ComplianceQueryScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<NotificationCreateWithoutDocumentInput, NotificationUncheckedCreateWithoutDocumentInput> | NotificationCreateWithoutDocumentInput[] | NotificationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDocumentInput | NotificationCreateOrConnectWithoutDocumentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutDocumentInput | NotificationUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: NotificationCreateManyDocumentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutDocumentInput | NotificationUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutDocumentInput | NotificationUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type DocumentAnalysisUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentAnalysisCreateWithoutDocumentInput, DocumentAnalysisUncheckedCreateWithoutDocumentInput> | DocumentAnalysisCreateWithoutDocumentInput[] | DocumentAnalysisUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentAnalysisCreateOrConnectWithoutDocumentInput | DocumentAnalysisCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentAnalysisUpsertWithWhereUniqueWithoutDocumentInput | DocumentAnalysisUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentAnalysisCreateManyDocumentInputEnvelope
    set?: DocumentAnalysisWhereUniqueInput | DocumentAnalysisWhereUniqueInput[]
    disconnect?: DocumentAnalysisWhereUniqueInput | DocumentAnalysisWhereUniqueInput[]
    delete?: DocumentAnalysisWhereUniqueInput | DocumentAnalysisWhereUniqueInput[]
    connect?: DocumentAnalysisWhereUniqueInput | DocumentAnalysisWhereUniqueInput[]
    update?: DocumentAnalysisUpdateWithWhereUniqueWithoutDocumentInput | DocumentAnalysisUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentAnalysisUpdateManyWithWhereWithoutDocumentInput | DocumentAnalysisUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentAnalysisScalarWhereInput | DocumentAnalysisScalarWhereInput[]
  }

  export type ComplianceQueryUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<ComplianceQueryCreateWithoutDocumentInput, ComplianceQueryUncheckedCreateWithoutDocumentInput> | ComplianceQueryCreateWithoutDocumentInput[] | ComplianceQueryUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ComplianceQueryCreateOrConnectWithoutDocumentInput | ComplianceQueryCreateOrConnectWithoutDocumentInput[]
    upsert?: ComplianceQueryUpsertWithWhereUniqueWithoutDocumentInput | ComplianceQueryUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: ComplianceQueryCreateManyDocumentInputEnvelope
    set?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    disconnect?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    delete?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    connect?: ComplianceQueryWhereUniqueInput | ComplianceQueryWhereUniqueInput[]
    update?: ComplianceQueryUpdateWithWhereUniqueWithoutDocumentInput | ComplianceQueryUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: ComplianceQueryUpdateManyWithWhereWithoutDocumentInput | ComplianceQueryUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: ComplianceQueryScalarWhereInput | ComplianceQueryScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<NotificationCreateWithoutDocumentInput, NotificationUncheckedCreateWithoutDocumentInput> | NotificationCreateWithoutDocumentInput[] | NotificationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDocumentInput | NotificationCreateOrConnectWithoutDocumentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutDocumentInput | NotificationUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: NotificationCreateManyDocumentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutDocumentInput | NotificationUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutDocumentInput | NotificationUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type DocumentCreateNestedOneWithoutAnalysesInput = {
    create?: XOR<DocumentCreateWithoutAnalysesInput, DocumentUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutAnalysesInput
    connect?: DocumentWhereUniqueInput
  }

  export type FindingCreateNestedManyWithoutAnalysisInput = {
    create?: XOR<FindingCreateWithoutAnalysisInput, FindingUncheckedCreateWithoutAnalysisInput> | FindingCreateWithoutAnalysisInput[] | FindingUncheckedCreateWithoutAnalysisInput[]
    connectOrCreate?: FindingCreateOrConnectWithoutAnalysisInput | FindingCreateOrConnectWithoutAnalysisInput[]
    createMany?: FindingCreateManyAnalysisInputEnvelope
    connect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
  }

  export type FindingUncheckedCreateNestedManyWithoutAnalysisInput = {
    create?: XOR<FindingCreateWithoutAnalysisInput, FindingUncheckedCreateWithoutAnalysisInput> | FindingCreateWithoutAnalysisInput[] | FindingUncheckedCreateWithoutAnalysisInput[]
    connectOrCreate?: FindingCreateOrConnectWithoutAnalysisInput | FindingCreateOrConnectWithoutAnalysisInput[]
    createMany?: FindingCreateManyAnalysisInputEnvelope
    connect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
  }

  export type NullableEnumAnalysisVerdictFieldUpdateOperationsInput = {
    set?: $Enums.AnalysisVerdict | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DocumentUpdateOneRequiredWithoutAnalysesNestedInput = {
    create?: XOR<DocumentCreateWithoutAnalysesInput, DocumentUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutAnalysesInput
    upsert?: DocumentUpsertWithoutAnalysesInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutAnalysesInput, DocumentUpdateWithoutAnalysesInput>, DocumentUncheckedUpdateWithoutAnalysesInput>
  }

  export type FindingUpdateManyWithoutAnalysisNestedInput = {
    create?: XOR<FindingCreateWithoutAnalysisInput, FindingUncheckedCreateWithoutAnalysisInput> | FindingCreateWithoutAnalysisInput[] | FindingUncheckedCreateWithoutAnalysisInput[]
    connectOrCreate?: FindingCreateOrConnectWithoutAnalysisInput | FindingCreateOrConnectWithoutAnalysisInput[]
    upsert?: FindingUpsertWithWhereUniqueWithoutAnalysisInput | FindingUpsertWithWhereUniqueWithoutAnalysisInput[]
    createMany?: FindingCreateManyAnalysisInputEnvelope
    set?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    disconnect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    delete?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    connect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    update?: FindingUpdateWithWhereUniqueWithoutAnalysisInput | FindingUpdateWithWhereUniqueWithoutAnalysisInput[]
    updateMany?: FindingUpdateManyWithWhereWithoutAnalysisInput | FindingUpdateManyWithWhereWithoutAnalysisInput[]
    deleteMany?: FindingScalarWhereInput | FindingScalarWhereInput[]
  }

  export type FindingUncheckedUpdateManyWithoutAnalysisNestedInput = {
    create?: XOR<FindingCreateWithoutAnalysisInput, FindingUncheckedCreateWithoutAnalysisInput> | FindingCreateWithoutAnalysisInput[] | FindingUncheckedCreateWithoutAnalysisInput[]
    connectOrCreate?: FindingCreateOrConnectWithoutAnalysisInput | FindingCreateOrConnectWithoutAnalysisInput[]
    upsert?: FindingUpsertWithWhereUniqueWithoutAnalysisInput | FindingUpsertWithWhereUniqueWithoutAnalysisInput[]
    createMany?: FindingCreateManyAnalysisInputEnvelope
    set?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    disconnect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    delete?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    connect?: FindingWhereUniqueInput | FindingWhereUniqueInput[]
    update?: FindingUpdateWithWhereUniqueWithoutAnalysisInput | FindingUpdateWithWhereUniqueWithoutAnalysisInput[]
    updateMany?: FindingUpdateManyWithWhereWithoutAnalysisInput | FindingUpdateManyWithWhereWithoutAnalysisInput[]
    deleteMany?: FindingScalarWhereInput | FindingScalarWhereInput[]
  }

  export type DocumentAnalysisCreateNestedOneWithoutFindingsInput = {
    create?: XOR<DocumentAnalysisCreateWithoutFindingsInput, DocumentAnalysisUncheckedCreateWithoutFindingsInput>
    connectOrCreate?: DocumentAnalysisCreateOrConnectWithoutFindingsInput
    connect?: DocumentAnalysisWhereUniqueInput
  }

  export type EnumFindingSeverityFieldUpdateOperationsInput = {
    set?: $Enums.FindingSeverity
  }

  export type DocumentAnalysisUpdateOneRequiredWithoutFindingsNestedInput = {
    create?: XOR<DocumentAnalysisCreateWithoutFindingsInput, DocumentAnalysisUncheckedCreateWithoutFindingsInput>
    connectOrCreate?: DocumentAnalysisCreateOrConnectWithoutFindingsInput
    upsert?: DocumentAnalysisUpsertWithoutFindingsInput
    connect?: DocumentAnalysisWhereUniqueInput
    update?: XOR<XOR<DocumentAnalysisUpdateToOneWithWhereWithoutFindingsInput, DocumentAnalysisUpdateWithoutFindingsInput>, DocumentAnalysisUncheckedUpdateWithoutFindingsInput>
  }

  export type OrganizationCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<OrganizationCreateWithoutActivityLogsInput, OrganizationUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutActivityLogsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<ProfileCreateWithoutActivityLogsInput, ProfileUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutActivityLogsInput
    connect?: ProfileWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: XOR<OrganizationCreateWithoutActivityLogsInput, OrganizationUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutActivityLogsInput
    upsert?: OrganizationUpsertWithoutActivityLogsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutActivityLogsInput, OrganizationUpdateWithoutActivityLogsInput>, OrganizationUncheckedUpdateWithoutActivityLogsInput>
  }

  export type ProfileUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<ProfileCreateWithoutActivityLogsInput, ProfileUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutActivityLogsInput
    upsert?: ProfileUpsertWithoutActivityLogsInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutActivityLogsInput, ProfileUpdateWithoutActivityLogsInput>, ProfileUncheckedUpdateWithoutActivityLogsInput>
  }

  export type DocumentCreateNestedOneWithoutComplianceQueriesInput = {
    create?: XOR<DocumentCreateWithoutComplianceQueriesInput, DocumentUncheckedCreateWithoutComplianceQueriesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutComplianceQueriesInput
    connect?: DocumentWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutComplianceQueriesInput = {
    create?: XOR<ProfileCreateWithoutComplianceQueriesInput, ProfileUncheckedCreateWithoutComplianceQueriesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutComplianceQueriesInput
    connect?: ProfileWhereUniqueInput
  }

  export type AIResponseCreateNestedManyWithoutComplianceQueryInput = {
    create?: XOR<AIResponseCreateWithoutComplianceQueryInput, AIResponseUncheckedCreateWithoutComplianceQueryInput> | AIResponseCreateWithoutComplianceQueryInput[] | AIResponseUncheckedCreateWithoutComplianceQueryInput[]
    connectOrCreate?: AIResponseCreateOrConnectWithoutComplianceQueryInput | AIResponseCreateOrConnectWithoutComplianceQueryInput[]
    createMany?: AIResponseCreateManyComplianceQueryInputEnvelope
    connect?: AIResponseWhereUniqueInput | AIResponseWhereUniqueInput[]
  }

  export type AIResponseUncheckedCreateNestedManyWithoutComplianceQueryInput = {
    create?: XOR<AIResponseCreateWithoutComplianceQueryInput, AIResponseUncheckedCreateWithoutComplianceQueryInput> | AIResponseCreateWithoutComplianceQueryInput[] | AIResponseUncheckedCreateWithoutComplianceQueryInput[]
    connectOrCreate?: AIResponseCreateOrConnectWithoutComplianceQueryInput | AIResponseCreateOrConnectWithoutComplianceQueryInput[]
    createMany?: AIResponseCreateManyComplianceQueryInputEnvelope
    connect?: AIResponseWhereUniqueInput | AIResponseWhereUniqueInput[]
  }

  export type EnumComplianceQueryStatusFieldUpdateOperationsInput = {
    set?: $Enums.ComplianceQueryStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DocumentUpdateOneWithoutComplianceQueriesNestedInput = {
    create?: XOR<DocumentCreateWithoutComplianceQueriesInput, DocumentUncheckedCreateWithoutComplianceQueriesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutComplianceQueriesInput
    upsert?: DocumentUpsertWithoutComplianceQueriesInput
    disconnect?: DocumentWhereInput | boolean
    delete?: DocumentWhereInput | boolean
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutComplianceQueriesInput, DocumentUpdateWithoutComplianceQueriesInput>, DocumentUncheckedUpdateWithoutComplianceQueriesInput>
  }

  export type ProfileUpdateOneRequiredWithoutComplianceQueriesNestedInput = {
    create?: XOR<ProfileCreateWithoutComplianceQueriesInput, ProfileUncheckedCreateWithoutComplianceQueriesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutComplianceQueriesInput
    upsert?: ProfileUpsertWithoutComplianceQueriesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutComplianceQueriesInput, ProfileUpdateWithoutComplianceQueriesInput>, ProfileUncheckedUpdateWithoutComplianceQueriesInput>
  }

  export type AIResponseUpdateManyWithoutComplianceQueryNestedInput = {
    create?: XOR<AIResponseCreateWithoutComplianceQueryInput, AIResponseUncheckedCreateWithoutComplianceQueryInput> | AIResponseCreateWithoutComplianceQueryInput[] | AIResponseUncheckedCreateWithoutComplianceQueryInput[]
    connectOrCreate?: AIResponseCreateOrConnectWithoutComplianceQueryInput | AIResponseCreateOrConnectWithoutComplianceQueryInput[]
    upsert?: AIResponseUpsertWithWhereUniqueWithoutComplianceQueryInput | AIResponseUpsertWithWhereUniqueWithoutComplianceQueryInput[]
    createMany?: AIResponseCreateManyComplianceQueryInputEnvelope
    set?: AIResponseWhereUniqueInput | AIResponseWhereUniqueInput[]
    disconnect?: AIResponseWhereUniqueInput | AIResponseWhereUniqueInput[]
    delete?: AIResponseWhereUniqueInput | AIResponseWhereUniqueInput[]
    connect?: AIResponseWhereUniqueInput | AIResponseWhereUniqueInput[]
    update?: AIResponseUpdateWithWhereUniqueWithoutComplianceQueryInput | AIResponseUpdateWithWhereUniqueWithoutComplianceQueryInput[]
    updateMany?: AIResponseUpdateManyWithWhereWithoutComplianceQueryInput | AIResponseUpdateManyWithWhereWithoutComplianceQueryInput[]
    deleteMany?: AIResponseScalarWhereInput | AIResponseScalarWhereInput[]
  }

  export type AIResponseUncheckedUpdateManyWithoutComplianceQueryNestedInput = {
    create?: XOR<AIResponseCreateWithoutComplianceQueryInput, AIResponseUncheckedCreateWithoutComplianceQueryInput> | AIResponseCreateWithoutComplianceQueryInput[] | AIResponseUncheckedCreateWithoutComplianceQueryInput[]
    connectOrCreate?: AIResponseCreateOrConnectWithoutComplianceQueryInput | AIResponseCreateOrConnectWithoutComplianceQueryInput[]
    upsert?: AIResponseUpsertWithWhereUniqueWithoutComplianceQueryInput | AIResponseUpsertWithWhereUniqueWithoutComplianceQueryInput[]
    createMany?: AIResponseCreateManyComplianceQueryInputEnvelope
    set?: AIResponseWhereUniqueInput | AIResponseWhereUniqueInput[]
    disconnect?: AIResponseWhereUniqueInput | AIResponseWhereUniqueInput[]
    delete?: AIResponseWhereUniqueInput | AIResponseWhereUniqueInput[]
    connect?: AIResponseWhereUniqueInput | AIResponseWhereUniqueInput[]
    update?: AIResponseUpdateWithWhereUniqueWithoutComplianceQueryInput | AIResponseUpdateWithWhereUniqueWithoutComplianceQueryInput[]
    updateMany?: AIResponseUpdateManyWithWhereWithoutComplianceQueryInput | AIResponseUpdateManyWithWhereWithoutComplianceQueryInput[]
    deleteMany?: AIResponseScalarWhereInput | AIResponseScalarWhereInput[]
  }

  export type ComplianceQueryCreateNestedOneWithoutResponsesInput = {
    create?: XOR<ComplianceQueryCreateWithoutResponsesInput, ComplianceQueryUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: ComplianceQueryCreateOrConnectWithoutResponsesInput
    connect?: ComplianceQueryWhereUniqueInput
  }

  export type ComplianceQueryUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<ComplianceQueryCreateWithoutResponsesInput, ComplianceQueryUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: ComplianceQueryCreateOrConnectWithoutResponsesInput
    upsert?: ComplianceQueryUpsertWithoutResponsesInput
    connect?: ComplianceQueryWhereUniqueInput
    update?: XOR<XOR<ComplianceQueryUpdateToOneWithWhereWithoutResponsesInput, ComplianceQueryUpdateWithoutResponsesInput>, ComplianceQueryUncheckedUpdateWithoutResponsesInput>
  }

  export type ProfileCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ProfileCreateWithoutNotificationsInput, ProfileUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutNotificationsInput
    connect?: ProfileWhereUniqueInput
  }

  export type DocumentCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<DocumentCreateWithoutNotificationsInput, DocumentUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutNotificationsInput
    connect?: DocumentWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type EnumNotificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.NotificationStatus
  }

  export type EnumDeliveryChannelFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryChannel
  }

  export type ProfileUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<ProfileCreateWithoutNotificationsInput, ProfileUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutNotificationsInput
    upsert?: ProfileUpsertWithoutNotificationsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutNotificationsInput, ProfileUpdateWithoutNotificationsInput>, ProfileUncheckedUpdateWithoutNotificationsInput>
  }

  export type DocumentUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<DocumentCreateWithoutNotificationsInput, DocumentUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutNotificationsInput
    upsert?: DocumentUpsertWithoutNotificationsInput
    disconnect?: DocumentWhereInput | boolean
    delete?: DocumentWhereInput | boolean
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutNotificationsInput, DocumentUpdateWithoutNotificationsInput>, DocumentUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type NestedEnumRiskLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRiskLevelNullableFilter<$PrismaModel> | $Enums.RiskLevel | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type NestedEnumRiskLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRiskLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAnalysisVerdictNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisVerdict | EnumAnalysisVerdictFieldRefInput<$PrismaModel> | null
    in?: $Enums.AnalysisVerdict[] | ListEnumAnalysisVerdictFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AnalysisVerdict[] | ListEnumAnalysisVerdictFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAnalysisVerdictNullableFilter<$PrismaModel> | $Enums.AnalysisVerdict | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAnalysisVerdictNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisVerdict | EnumAnalysisVerdictFieldRefInput<$PrismaModel> | null
    in?: $Enums.AnalysisVerdict[] | ListEnumAnalysisVerdictFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AnalysisVerdict[] | ListEnumAnalysisVerdictFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAnalysisVerdictNullableWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisVerdict | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAnalysisVerdictNullableFilter<$PrismaModel>
    _max?: NestedEnumAnalysisVerdictNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumFindingSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.FindingSeverity | EnumFindingSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.FindingSeverity[] | ListEnumFindingSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.FindingSeverity[] | ListEnumFindingSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumFindingSeverityFilter<$PrismaModel> | $Enums.FindingSeverity
  }

  export type NestedEnumFindingSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FindingSeverity | EnumFindingSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.FindingSeverity[] | ListEnumFindingSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.FindingSeverity[] | ListEnumFindingSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumFindingSeverityWithAggregatesFilter<$PrismaModel> | $Enums.FindingSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFindingSeverityFilter<$PrismaModel>
    _max?: NestedEnumFindingSeverityFilter<$PrismaModel>
  }

  export type NestedEnumComplianceQueryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplianceQueryStatus | EnumComplianceQueryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ComplianceQueryStatus[] | ListEnumComplianceQueryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComplianceQueryStatus[] | ListEnumComplianceQueryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumComplianceQueryStatusFilter<$PrismaModel> | $Enums.ComplianceQueryStatus
  }

  export type NestedEnumComplianceQueryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplianceQueryStatus | EnumComplianceQueryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ComplianceQueryStatus[] | ListEnumComplianceQueryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComplianceQueryStatus[] | ListEnumComplianceQueryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumComplianceQueryStatusWithAggregatesFilter<$PrismaModel> | $Enums.ComplianceQueryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumComplianceQueryStatusFilter<$PrismaModel>
    _max?: NestedEnumComplianceQueryStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type NestedEnumDeliveryChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryChannel | EnumDeliveryChannelFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryChannelFilter<$PrismaModel> | $Enums.DeliveryChannel
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type NestedEnumDeliveryChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryChannel | EnumDeliveryChannelFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryChannelWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryChannelFilter<$PrismaModel>
    _max?: NestedEnumDeliveryChannelFilter<$PrismaModel>
  }

  export type ProfileCreateWithoutOrganizationInput = {
    id?: string
    email: string
    fullName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutUploaderInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    complianceQueries?: ComplianceQueryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutOrganizationInput = {
    id?: string
    email: string
    fullName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutUploaderInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    complianceQueries?: ComplianceQueryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutOrganizationInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutOrganizationInput, ProfileUncheckedCreateWithoutOrganizationInput>
  }

  export type ProfileCreateManyOrganizationInputEnvelope = {
    data: ProfileCreateManyOrganizationInput | ProfileCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutOrganizationInput = {
    id?: string
    originalFileName: string
    filename: string
    mimeType?: string | null
    storageKey?: string | null
    fileUrl?: string | null
    checksum?: string | null
    fileSize?: number | null
    pageCount?: number | null
    language?: string | null
    status?: $Enums.DocumentStatus
    complianceScore?: number | null
    riskLevel?: $Enums.RiskLevel | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploader: ProfileCreateNestedOneWithoutDocumentsInput
    analyses?: DocumentAnalysisCreateNestedManyWithoutDocumentInput
    complianceQueries?: ComplianceQueryCreateNestedManyWithoutDocumentInput
    notifications?: NotificationCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutOrganizationInput = {
    id?: string
    uploadedBy: string
    originalFileName: string
    filename: string
    mimeType?: string | null
    storageKey?: string | null
    fileUrl?: string | null
    checksum?: string | null
    fileSize?: number | null
    pageCount?: number | null
    language?: string | null
    status?: $Enums.DocumentStatus
    complianceScore?: number | null
    riskLevel?: $Enums.RiskLevel | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: DocumentAnalysisUncheckedCreateNestedManyWithoutDocumentInput
    complianceQueries?: ComplianceQueryUncheckedCreateNestedManyWithoutDocumentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutOrganizationInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutOrganizationInput, DocumentUncheckedCreateWithoutOrganizationInput>
  }

  export type DocumentCreateManyOrganizationInputEnvelope = {
    data: DocumentCreateManyOrganizationInput | DocumentCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutOrganizationInput = {
    id?: string
    action: string
    entityType?: string | null
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user?: ProfileCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateWithoutOrganizationInput = {
    id?: string
    userId?: string | null
    action: string
    entityType?: string | null
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutOrganizationInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutOrganizationInput, ActivityLogUncheckedCreateWithoutOrganizationInput>
  }

  export type ActivityLogCreateManyOrganizationInputEnvelope = {
    data: ActivityLogCreateManyOrganizationInput | ActivityLogCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutOrganizationInput, ProfileUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ProfileCreateWithoutOrganizationInput, ProfileUncheckedCreateWithoutOrganizationInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutOrganizationInput, ProfileUncheckedUpdateWithoutOrganizationInput>
  }

  export type ProfileUpdateManyWithWhereWithoutOrganizationInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ProfileScalarWhereInput = {
    AND?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    OR?: ProfileScalarWhereInput[]
    NOT?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    id?: UuidFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    fullName?: StringNullableFilter<"Profile"> | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    role?: EnumUserRoleFilter<"Profile"> | $Enums.UserRole
    organizationId?: UuidNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutOrganizationInput, DocumentUncheckedUpdateWithoutOrganizationInput>
    create: XOR<DocumentCreateWithoutOrganizationInput, DocumentUncheckedCreateWithoutOrganizationInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutOrganizationInput, DocumentUncheckedUpdateWithoutOrganizationInput>
  }

  export type DocumentUpdateManyWithWhereWithoutOrganizationInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: UuidFilter<"Document"> | string
    organizationId?: UuidFilter<"Document"> | string
    uploadedBy?: UuidFilter<"Document"> | string
    originalFileName?: StringFilter<"Document"> | string
    filename?: StringFilter<"Document"> | string
    mimeType?: StringNullableFilter<"Document"> | string | null
    storageKey?: StringNullableFilter<"Document"> | string | null
    fileUrl?: StringNullableFilter<"Document"> | string | null
    checksum?: StringNullableFilter<"Document"> | string | null
    fileSize?: IntNullableFilter<"Document"> | number | null
    pageCount?: IntNullableFilter<"Document"> | number | null
    language?: StringNullableFilter<"Document"> | string | null
    status?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    complianceScore?: IntNullableFilter<"Document"> | number | null
    riskLevel?: EnumRiskLevelNullableFilter<"Document"> | $Enums.RiskLevel | null
    expirationDate?: DateTimeNullableFilter<"Document"> | Date | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutOrganizationInput, ActivityLogUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ActivityLogCreateWithoutOrganizationInput, ActivityLogUncheckedCreateWithoutOrganizationInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutOrganizationInput, ActivityLogUncheckedUpdateWithoutOrganizationInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutOrganizationInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: UuidFilter<"ActivityLog"> | string
    organizationId?: UuidFilter<"ActivityLog"> | string
    userId?: UuidNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    entityType?: StringNullableFilter<"ActivityLog"> | string | null
    entityId?: UuidNullableFilter<"ActivityLog"> | string | null
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type OrganizationCreateWithoutProfilesInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.PlanType
    documentsLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutOrganizationInput
    activityLogs?: ActivityLogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutProfilesInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.PlanType
    documentsLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutOrganizationInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutProfilesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutProfilesInput, OrganizationUncheckedCreateWithoutProfilesInput>
  }

  export type DocumentCreateWithoutUploaderInput = {
    id?: string
    originalFileName: string
    filename: string
    mimeType?: string | null
    storageKey?: string | null
    fileUrl?: string | null
    checksum?: string | null
    fileSize?: number | null
    pageCount?: number | null
    language?: string | null
    status?: $Enums.DocumentStatus
    complianceScore?: number | null
    riskLevel?: $Enums.RiskLevel | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutDocumentsInput
    analyses?: DocumentAnalysisCreateNestedManyWithoutDocumentInput
    complianceQueries?: ComplianceQueryCreateNestedManyWithoutDocumentInput
    notifications?: NotificationCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutUploaderInput = {
    id?: string
    organizationId: string
    originalFileName: string
    filename: string
    mimeType?: string | null
    storageKey?: string | null
    fileUrl?: string | null
    checksum?: string | null
    fileSize?: number | null
    pageCount?: number | null
    language?: string | null
    status?: $Enums.DocumentStatus
    complianceScore?: number | null
    riskLevel?: $Enums.RiskLevel | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: DocumentAnalysisUncheckedCreateNestedManyWithoutDocumentInput
    complianceQueries?: ComplianceQueryUncheckedCreateNestedManyWithoutDocumentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutUploaderInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutUploaderInput, DocumentUncheckedCreateWithoutUploaderInput>
  }

  export type DocumentCreateManyUploaderInputEnvelope = {
    data: DocumentCreateManyUploaderInput | DocumentCreateManyUploaderInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: string
    action: string
    entityType?: string | null
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    organizationId: string
    action: string
    entityType?: string | null
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ComplianceQueryCreateWithoutUserInput = {
    id?: string
    queryText: string
    status?: $Enums.ComplianceQueryStatus
    attemptCount?: number
    errorMessage?: string | null
    processingStartedAt?: Date | string | null
    processingFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    document?: DocumentCreateNestedOneWithoutComplianceQueriesInput
    responses?: AIResponseCreateNestedManyWithoutComplianceQueryInput
  }

  export type ComplianceQueryUncheckedCreateWithoutUserInput = {
    id?: string
    queryText: string
    status?: $Enums.ComplianceQueryStatus
    documentId?: string | null
    attemptCount?: number
    errorMessage?: string | null
    processingStartedAt?: Date | string | null
    processingFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: AIResponseUncheckedCreateNestedManyWithoutComplianceQueryInput
  }

  export type ComplianceQueryCreateOrConnectWithoutUserInput = {
    where: ComplianceQueryWhereUniqueInput
    create: XOR<ComplianceQueryCreateWithoutUserInput, ComplianceQueryUncheckedCreateWithoutUserInput>
  }

  export type ComplianceQueryCreateManyUserInputEnvelope = {
    data: ComplianceQueryCreateManyUserInput | ComplianceQueryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    deliveryChannel?: $Enums.DeliveryChannel
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    document?: DocumentCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    deliveryChannel?: $Enums.DeliveryChannel
    documentId?: string | null
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutProfilesInput = {
    update: XOR<OrganizationUpdateWithoutProfilesInput, OrganizationUncheckedUpdateWithoutProfilesInput>
    create: XOR<OrganizationCreateWithoutProfilesInput, OrganizationUncheckedCreateWithoutProfilesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutProfilesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutProfilesInput, OrganizationUncheckedUpdateWithoutProfilesInput>
  }

  export type OrganizationUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    documentsLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutOrganizationNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    documentsLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutOrganizationNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutUploaderInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutUploaderInput, DocumentUncheckedUpdateWithoutUploaderInput>
    create: XOR<DocumentCreateWithoutUploaderInput, DocumentUncheckedCreateWithoutUploaderInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutUploaderInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutUploaderInput, DocumentUncheckedUpdateWithoutUploaderInput>
  }

  export type DocumentUpdateManyWithWhereWithoutUploaderInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutUploaderInput>
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ComplianceQueryUpsertWithWhereUniqueWithoutUserInput = {
    where: ComplianceQueryWhereUniqueInput
    update: XOR<ComplianceQueryUpdateWithoutUserInput, ComplianceQueryUncheckedUpdateWithoutUserInput>
    create: XOR<ComplianceQueryCreateWithoutUserInput, ComplianceQueryUncheckedCreateWithoutUserInput>
  }

  export type ComplianceQueryUpdateWithWhereUniqueWithoutUserInput = {
    where: ComplianceQueryWhereUniqueInput
    data: XOR<ComplianceQueryUpdateWithoutUserInput, ComplianceQueryUncheckedUpdateWithoutUserInput>
  }

  export type ComplianceQueryUpdateManyWithWhereWithoutUserInput = {
    where: ComplianceQueryScalarWhereInput
    data: XOR<ComplianceQueryUpdateManyMutationInput, ComplianceQueryUncheckedUpdateManyWithoutUserInput>
  }

  export type ComplianceQueryScalarWhereInput = {
    AND?: ComplianceQueryScalarWhereInput | ComplianceQueryScalarWhereInput[]
    OR?: ComplianceQueryScalarWhereInput[]
    NOT?: ComplianceQueryScalarWhereInput | ComplianceQueryScalarWhereInput[]
    id?: UuidFilter<"ComplianceQuery"> | string
    queryText?: StringFilter<"ComplianceQuery"> | string
    status?: EnumComplianceQueryStatusFilter<"ComplianceQuery"> | $Enums.ComplianceQueryStatus
    documentId?: UuidNullableFilter<"ComplianceQuery"> | string | null
    userId?: UuidFilter<"ComplianceQuery"> | string
    attemptCount?: IntFilter<"ComplianceQuery"> | number
    errorMessage?: StringNullableFilter<"ComplianceQuery"> | string | null
    processingStartedAt?: DateTimeNullableFilter<"ComplianceQuery"> | Date | string | null
    processingFinishedAt?: DateTimeNullableFilter<"ComplianceQuery"> | Date | string | null
    createdAt?: DateTimeFilter<"ComplianceQuery"> | Date | string
    updatedAt?: DateTimeFilter<"ComplianceQuery"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: UuidFilter<"Notification"> | string
    userId?: UuidFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    deliveryChannel?: EnumDeliveryChannelFilter<"Notification"> | $Enums.DeliveryChannel
    documentId?: UuidNullableFilter<"Notification"> | string | null
    scheduledFor?: DateTimeNullableFilter<"Notification"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type OrganizationCreateWithoutDocumentsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.PlanType
    documentsLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: ProfileCreateNestedManyWithoutOrganizationInput
    activityLogs?: ActivityLogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutDocumentsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.PlanType
    documentsLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: ProfileUncheckedCreateNestedManyWithoutOrganizationInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutDocumentsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutDocumentsInput, OrganizationUncheckedCreateWithoutDocumentsInput>
  }

  export type ProfileCreateWithoutDocumentsInput = {
    id?: string
    email: string
    fullName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutProfilesInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    complianceQueries?: ComplianceQueryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutDocumentsInput = {
    id?: string
    email: string
    fullName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    complianceQueries?: ComplianceQueryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutDocumentsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutDocumentsInput, ProfileUncheckedCreateWithoutDocumentsInput>
  }

  export type DocumentAnalysisCreateWithoutDocumentInput = {
    id?: string
    executiveSummary?: string | null
    overallVerdict?: $Enums.AnalysisVerdict | null
    confidenceScore?: number | null
    modelName?: string | null
    promptVersion?: string | null
    rulesetVersion?: string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    findings?: FindingCreateNestedManyWithoutAnalysisInput
  }

  export type DocumentAnalysisUncheckedCreateWithoutDocumentInput = {
    id?: string
    executiveSummary?: string | null
    overallVerdict?: $Enums.AnalysisVerdict | null
    confidenceScore?: number | null
    modelName?: string | null
    promptVersion?: string | null
    rulesetVersion?: string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    findings?: FindingUncheckedCreateNestedManyWithoutAnalysisInput
  }

  export type DocumentAnalysisCreateOrConnectWithoutDocumentInput = {
    where: DocumentAnalysisWhereUniqueInput
    create: XOR<DocumentAnalysisCreateWithoutDocumentInput, DocumentAnalysisUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentAnalysisCreateManyDocumentInputEnvelope = {
    data: DocumentAnalysisCreateManyDocumentInput | DocumentAnalysisCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type ComplianceQueryCreateWithoutDocumentInput = {
    id?: string
    queryText: string
    status?: $Enums.ComplianceQueryStatus
    attemptCount?: number
    errorMessage?: string | null
    processingStartedAt?: Date | string | null
    processingFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutComplianceQueriesInput
    responses?: AIResponseCreateNestedManyWithoutComplianceQueryInput
  }

  export type ComplianceQueryUncheckedCreateWithoutDocumentInput = {
    id?: string
    queryText: string
    status?: $Enums.ComplianceQueryStatus
    userId: string
    attemptCount?: number
    errorMessage?: string | null
    processingStartedAt?: Date | string | null
    processingFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: AIResponseUncheckedCreateNestedManyWithoutComplianceQueryInput
  }

  export type ComplianceQueryCreateOrConnectWithoutDocumentInput = {
    where: ComplianceQueryWhereUniqueInput
    create: XOR<ComplianceQueryCreateWithoutDocumentInput, ComplianceQueryUncheckedCreateWithoutDocumentInput>
  }

  export type ComplianceQueryCreateManyDocumentInputEnvelope = {
    data: ComplianceQueryCreateManyDocumentInput | ComplianceQueryCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutDocumentInput = {
    id?: string
    title: string
    message: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    deliveryChannel?: $Enums.DeliveryChannel
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutDocumentInput = {
    id?: string
    userId: string
    title: string
    message: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    deliveryChannel?: $Enums.DeliveryChannel
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutDocumentInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutDocumentInput, NotificationUncheckedCreateWithoutDocumentInput>
  }

  export type NotificationCreateManyDocumentInputEnvelope = {
    data: NotificationCreateManyDocumentInput | NotificationCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutDocumentsInput = {
    update: XOR<OrganizationUpdateWithoutDocumentsInput, OrganizationUncheckedUpdateWithoutDocumentsInput>
    create: XOR<OrganizationCreateWithoutDocumentsInput, OrganizationUncheckedCreateWithoutDocumentsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutDocumentsInput, OrganizationUncheckedUpdateWithoutDocumentsInput>
  }

  export type OrganizationUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    documentsLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfileUpdateManyWithoutOrganizationNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    documentsLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfileUncheckedUpdateManyWithoutOrganizationNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ProfileUpsertWithoutDocumentsInput = {
    update: XOR<ProfileUpdateWithoutDocumentsInput, ProfileUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ProfileCreateWithoutDocumentsInput, ProfileUncheckedCreateWithoutDocumentsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutDocumentsInput, ProfileUncheckedUpdateWithoutDocumentsInput>
  }

  export type ProfileUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutProfilesNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    complianceQueries?: ComplianceQueryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    complianceQueries?: ComplianceQueryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DocumentAnalysisUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DocumentAnalysisWhereUniqueInput
    update: XOR<DocumentAnalysisUpdateWithoutDocumentInput, DocumentAnalysisUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentAnalysisCreateWithoutDocumentInput, DocumentAnalysisUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentAnalysisUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DocumentAnalysisWhereUniqueInput
    data: XOR<DocumentAnalysisUpdateWithoutDocumentInput, DocumentAnalysisUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentAnalysisUpdateManyWithWhereWithoutDocumentInput = {
    where: DocumentAnalysisScalarWhereInput
    data: XOR<DocumentAnalysisUpdateManyMutationInput, DocumentAnalysisUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentAnalysisScalarWhereInput = {
    AND?: DocumentAnalysisScalarWhereInput | DocumentAnalysisScalarWhereInput[]
    OR?: DocumentAnalysisScalarWhereInput[]
    NOT?: DocumentAnalysisScalarWhereInput | DocumentAnalysisScalarWhereInput[]
    id?: UuidFilter<"DocumentAnalysis"> | string
    documentId?: UuidFilter<"DocumentAnalysis"> | string
    executiveSummary?: StringNullableFilter<"DocumentAnalysis"> | string | null
    overallVerdict?: EnumAnalysisVerdictNullableFilter<"DocumentAnalysis"> | $Enums.AnalysisVerdict | null
    confidenceScore?: FloatNullableFilter<"DocumentAnalysis"> | number | null
    modelName?: StringNullableFilter<"DocumentAnalysis"> | string | null
    promptVersion?: StringNullableFilter<"DocumentAnalysis"> | string | null
    rulesetVersion?: StringNullableFilter<"DocumentAnalysis"> | string | null
    parties?: JsonNullableFilter<"DocumentAnalysis">
    obligations?: JsonNullableFilter<"DocumentAnalysis">
    paymentTerms?: JsonNullableFilter<"DocumentAnalysis">
    renewalTerms?: JsonNullableFilter<"DocumentAnalysis">
    penalties?: JsonNullableFilter<"DocumentAnalysis">
    governingLaw?: StringNullableFilter<"DocumentAnalysis"> | string | null
    missingClauses?: JsonNullableFilter<"DocumentAnalysis">
    unusualConditions?: JsonNullableFilter<"DocumentAnalysis">
    complianceRequirements?: JsonNullableFilter<"DocumentAnalysis">
    policyViolations?: JsonNullableFilter<"DocumentAnalysis">
    regulatoryIssues?: JsonNullableFilter<"DocumentAnalysis">
    missingSignatures?: JsonNullableFilter<"DocumentAnalysis">
    expirationDetected?: BoolFilter<"DocumentAnalysis"> | boolean
    importantDates?: JsonNullableFilter<"DocumentAnalysis">
    risks?: JsonNullableFilter<"DocumentAnalysis">
    recommendations?: JsonNullableFilter<"DocumentAnalysis">
    createdAt?: DateTimeFilter<"DocumentAnalysis"> | Date | string
  }

  export type ComplianceQueryUpsertWithWhereUniqueWithoutDocumentInput = {
    where: ComplianceQueryWhereUniqueInput
    update: XOR<ComplianceQueryUpdateWithoutDocumentInput, ComplianceQueryUncheckedUpdateWithoutDocumentInput>
    create: XOR<ComplianceQueryCreateWithoutDocumentInput, ComplianceQueryUncheckedCreateWithoutDocumentInput>
  }

  export type ComplianceQueryUpdateWithWhereUniqueWithoutDocumentInput = {
    where: ComplianceQueryWhereUniqueInput
    data: XOR<ComplianceQueryUpdateWithoutDocumentInput, ComplianceQueryUncheckedUpdateWithoutDocumentInput>
  }

  export type ComplianceQueryUpdateManyWithWhereWithoutDocumentInput = {
    where: ComplianceQueryScalarWhereInput
    data: XOR<ComplianceQueryUpdateManyMutationInput, ComplianceQueryUncheckedUpdateManyWithoutDocumentInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutDocumentInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutDocumentInput, NotificationUncheckedUpdateWithoutDocumentInput>
    create: XOR<NotificationCreateWithoutDocumentInput, NotificationUncheckedCreateWithoutDocumentInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutDocumentInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutDocumentInput, NotificationUncheckedUpdateWithoutDocumentInput>
  }

  export type NotificationUpdateManyWithWhereWithoutDocumentInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentCreateWithoutAnalysesInput = {
    id?: string
    originalFileName: string
    filename: string
    mimeType?: string | null
    storageKey?: string | null
    fileUrl?: string | null
    checksum?: string | null
    fileSize?: number | null
    pageCount?: number | null
    language?: string | null
    status?: $Enums.DocumentStatus
    complianceScore?: number | null
    riskLevel?: $Enums.RiskLevel | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutDocumentsInput
    uploader: ProfileCreateNestedOneWithoutDocumentsInput
    complianceQueries?: ComplianceQueryCreateNestedManyWithoutDocumentInput
    notifications?: NotificationCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutAnalysesInput = {
    id?: string
    organizationId: string
    uploadedBy: string
    originalFileName: string
    filename: string
    mimeType?: string | null
    storageKey?: string | null
    fileUrl?: string | null
    checksum?: string | null
    fileSize?: number | null
    pageCount?: number | null
    language?: string | null
    status?: $Enums.DocumentStatus
    complianceScore?: number | null
    riskLevel?: $Enums.RiskLevel | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    complianceQueries?: ComplianceQueryUncheckedCreateNestedManyWithoutDocumentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutAnalysesInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutAnalysesInput, DocumentUncheckedCreateWithoutAnalysesInput>
  }

  export type FindingCreateWithoutAnalysisInput = {
    id?: string
    title: string
    description?: string | null
    severity?: $Enums.FindingSeverity
    clauseReference?: string | null
    pageNumber?: number | null
    excerpt?: string | null
    recommendation?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FindingUncheckedCreateWithoutAnalysisInput = {
    id?: string
    title: string
    description?: string | null
    severity?: $Enums.FindingSeverity
    clauseReference?: string | null
    pageNumber?: number | null
    excerpt?: string | null
    recommendation?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FindingCreateOrConnectWithoutAnalysisInput = {
    where: FindingWhereUniqueInput
    create: XOR<FindingCreateWithoutAnalysisInput, FindingUncheckedCreateWithoutAnalysisInput>
  }

  export type FindingCreateManyAnalysisInputEnvelope = {
    data: FindingCreateManyAnalysisInput | FindingCreateManyAnalysisInput[]
    skipDuplicates?: boolean
  }

  export type DocumentUpsertWithoutAnalysesInput = {
    update: XOR<DocumentUpdateWithoutAnalysesInput, DocumentUncheckedUpdateWithoutAnalysesInput>
    create: XOR<DocumentCreateWithoutAnalysesInput, DocumentUncheckedCreateWithoutAnalysesInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutAnalysesInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutAnalysesInput, DocumentUncheckedUpdateWithoutAnalysesInput>
  }

  export type DocumentUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutDocumentsNestedInput
    uploader?: ProfileUpdateOneRequiredWithoutDocumentsNestedInput
    complianceQueries?: ComplianceQueryUpdateManyWithoutDocumentNestedInput
    notifications?: NotificationUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    uploadedBy?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    complianceQueries?: ComplianceQueryUncheckedUpdateManyWithoutDocumentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type FindingUpsertWithWhereUniqueWithoutAnalysisInput = {
    where: FindingWhereUniqueInput
    update: XOR<FindingUpdateWithoutAnalysisInput, FindingUncheckedUpdateWithoutAnalysisInput>
    create: XOR<FindingCreateWithoutAnalysisInput, FindingUncheckedCreateWithoutAnalysisInput>
  }

  export type FindingUpdateWithWhereUniqueWithoutAnalysisInput = {
    where: FindingWhereUniqueInput
    data: XOR<FindingUpdateWithoutAnalysisInput, FindingUncheckedUpdateWithoutAnalysisInput>
  }

  export type FindingUpdateManyWithWhereWithoutAnalysisInput = {
    where: FindingScalarWhereInput
    data: XOR<FindingUpdateManyMutationInput, FindingUncheckedUpdateManyWithoutAnalysisInput>
  }

  export type FindingScalarWhereInput = {
    AND?: FindingScalarWhereInput | FindingScalarWhereInput[]
    OR?: FindingScalarWhereInput[]
    NOT?: FindingScalarWhereInput | FindingScalarWhereInput[]
    id?: UuidFilter<"Finding"> | string
    analysisId?: UuidFilter<"Finding"> | string
    title?: StringFilter<"Finding"> | string
    description?: StringNullableFilter<"Finding"> | string | null
    severity?: EnumFindingSeverityFilter<"Finding"> | $Enums.FindingSeverity
    clauseReference?: StringNullableFilter<"Finding"> | string | null
    pageNumber?: IntNullableFilter<"Finding"> | number | null
    excerpt?: StringNullableFilter<"Finding"> | string | null
    recommendation?: StringNullableFilter<"Finding"> | string | null
    metadata?: JsonNullableFilter<"Finding">
    createdAt?: DateTimeFilter<"Finding"> | Date | string
  }

  export type DocumentAnalysisCreateWithoutFindingsInput = {
    id?: string
    executiveSummary?: string | null
    overallVerdict?: $Enums.AnalysisVerdict | null
    confidenceScore?: number | null
    modelName?: string | null
    promptVersion?: string | null
    rulesetVersion?: string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutAnalysesInput
  }

  export type DocumentAnalysisUncheckedCreateWithoutFindingsInput = {
    id?: string
    documentId: string
    executiveSummary?: string | null
    overallVerdict?: $Enums.AnalysisVerdict | null
    confidenceScore?: number | null
    modelName?: string | null
    promptVersion?: string | null
    rulesetVersion?: string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DocumentAnalysisCreateOrConnectWithoutFindingsInput = {
    where: DocumentAnalysisWhereUniqueInput
    create: XOR<DocumentAnalysisCreateWithoutFindingsInput, DocumentAnalysisUncheckedCreateWithoutFindingsInput>
  }

  export type DocumentAnalysisUpsertWithoutFindingsInput = {
    update: XOR<DocumentAnalysisUpdateWithoutFindingsInput, DocumentAnalysisUncheckedUpdateWithoutFindingsInput>
    create: XOR<DocumentAnalysisCreateWithoutFindingsInput, DocumentAnalysisUncheckedCreateWithoutFindingsInput>
    where?: DocumentAnalysisWhereInput
  }

  export type DocumentAnalysisUpdateToOneWithWhereWithoutFindingsInput = {
    where?: DocumentAnalysisWhereInput
    data: XOR<DocumentAnalysisUpdateWithoutFindingsInput, DocumentAnalysisUncheckedUpdateWithoutFindingsInput>
  }

  export type DocumentAnalysisUpdateWithoutFindingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null
    overallVerdict?: NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    promptVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: NullableStringFieldUpdateOperationsInput | string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: BoolFieldUpdateOperationsInput | boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutAnalysesNestedInput
  }

  export type DocumentAnalysisUncheckedUpdateWithoutFindingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null
    overallVerdict?: NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    promptVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: NullableStringFieldUpdateOperationsInput | string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: BoolFieldUpdateOperationsInput | boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.PlanType
    documentsLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: ProfileCreateNestedManyWithoutOrganizationInput
    documents?: DocumentCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.PlanType
    documentsLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: ProfileUncheckedCreateNestedManyWithoutOrganizationInput
    documents?: DocumentUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutActivityLogsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutActivityLogsInput, OrganizationUncheckedCreateWithoutActivityLogsInput>
  }

  export type ProfileCreateWithoutActivityLogsInput = {
    id?: string
    email: string
    fullName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutProfilesInput
    documents?: DocumentCreateNestedManyWithoutUploaderInput
    complianceQueries?: ComplianceQueryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    email: string
    fullName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutUploaderInput
    complianceQueries?: ComplianceQueryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutActivityLogsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutActivityLogsInput, ProfileUncheckedCreateWithoutActivityLogsInput>
  }

  export type OrganizationUpsertWithoutActivityLogsInput = {
    update: XOR<OrganizationUpdateWithoutActivityLogsInput, OrganizationUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<OrganizationCreateWithoutActivityLogsInput, OrganizationUncheckedCreateWithoutActivityLogsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutActivityLogsInput, OrganizationUncheckedUpdateWithoutActivityLogsInput>
  }

  export type OrganizationUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    documentsLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfileUpdateManyWithoutOrganizationNestedInput
    documents?: DocumentUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    documentsLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfileUncheckedUpdateManyWithoutOrganizationNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ProfileUpsertWithoutActivityLogsInput = {
    update: XOR<ProfileUpdateWithoutActivityLogsInput, ProfileUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<ProfileCreateWithoutActivityLogsInput, ProfileUncheckedCreateWithoutActivityLogsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutActivityLogsInput, ProfileUncheckedUpdateWithoutActivityLogsInput>
  }

  export type ProfileUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutProfilesNestedInput
    documents?: DocumentUpdateManyWithoutUploaderNestedInput
    complianceQueries?: ComplianceQueryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutUploaderNestedInput
    complianceQueries?: ComplianceQueryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DocumentCreateWithoutComplianceQueriesInput = {
    id?: string
    originalFileName: string
    filename: string
    mimeType?: string | null
    storageKey?: string | null
    fileUrl?: string | null
    checksum?: string | null
    fileSize?: number | null
    pageCount?: number | null
    language?: string | null
    status?: $Enums.DocumentStatus
    complianceScore?: number | null
    riskLevel?: $Enums.RiskLevel | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutDocumentsInput
    uploader: ProfileCreateNestedOneWithoutDocumentsInput
    analyses?: DocumentAnalysisCreateNestedManyWithoutDocumentInput
    notifications?: NotificationCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutComplianceQueriesInput = {
    id?: string
    organizationId: string
    uploadedBy: string
    originalFileName: string
    filename: string
    mimeType?: string | null
    storageKey?: string | null
    fileUrl?: string | null
    checksum?: string | null
    fileSize?: number | null
    pageCount?: number | null
    language?: string | null
    status?: $Enums.DocumentStatus
    complianceScore?: number | null
    riskLevel?: $Enums.RiskLevel | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: DocumentAnalysisUncheckedCreateNestedManyWithoutDocumentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutComplianceQueriesInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutComplianceQueriesInput, DocumentUncheckedCreateWithoutComplianceQueriesInput>
  }

  export type ProfileCreateWithoutComplianceQueriesInput = {
    id?: string
    email: string
    fullName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutProfilesInput
    documents?: DocumentCreateNestedManyWithoutUploaderInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutComplianceQueriesInput = {
    id?: string
    email: string
    fullName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutUploaderInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutComplianceQueriesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutComplianceQueriesInput, ProfileUncheckedCreateWithoutComplianceQueriesInput>
  }

  export type AIResponseCreateWithoutComplianceQueryInput = {
    id?: string
    responseText: string
    confidenceScore?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AIResponseUncheckedCreateWithoutComplianceQueryInput = {
    id?: string
    responseText: string
    confidenceScore?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AIResponseCreateOrConnectWithoutComplianceQueryInput = {
    where: AIResponseWhereUniqueInput
    create: XOR<AIResponseCreateWithoutComplianceQueryInput, AIResponseUncheckedCreateWithoutComplianceQueryInput>
  }

  export type AIResponseCreateManyComplianceQueryInputEnvelope = {
    data: AIResponseCreateManyComplianceQueryInput | AIResponseCreateManyComplianceQueryInput[]
    skipDuplicates?: boolean
  }

  export type DocumentUpsertWithoutComplianceQueriesInput = {
    update: XOR<DocumentUpdateWithoutComplianceQueriesInput, DocumentUncheckedUpdateWithoutComplianceQueriesInput>
    create: XOR<DocumentCreateWithoutComplianceQueriesInput, DocumentUncheckedCreateWithoutComplianceQueriesInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutComplianceQueriesInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutComplianceQueriesInput, DocumentUncheckedUpdateWithoutComplianceQueriesInput>
  }

  export type DocumentUpdateWithoutComplianceQueriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutDocumentsNestedInput
    uploader?: ProfileUpdateOneRequiredWithoutDocumentsNestedInput
    analyses?: DocumentAnalysisUpdateManyWithoutDocumentNestedInput
    notifications?: NotificationUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutComplianceQueriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    uploadedBy?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: DocumentAnalysisUncheckedUpdateManyWithoutDocumentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type ProfileUpsertWithoutComplianceQueriesInput = {
    update: XOR<ProfileUpdateWithoutComplianceQueriesInput, ProfileUncheckedUpdateWithoutComplianceQueriesInput>
    create: XOR<ProfileCreateWithoutComplianceQueriesInput, ProfileUncheckedCreateWithoutComplianceQueriesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutComplianceQueriesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutComplianceQueriesInput, ProfileUncheckedUpdateWithoutComplianceQueriesInput>
  }

  export type ProfileUpdateWithoutComplianceQueriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutProfilesNestedInput
    documents?: DocumentUpdateManyWithoutUploaderNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutComplianceQueriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutUploaderNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AIResponseUpsertWithWhereUniqueWithoutComplianceQueryInput = {
    where: AIResponseWhereUniqueInput
    update: XOR<AIResponseUpdateWithoutComplianceQueryInput, AIResponseUncheckedUpdateWithoutComplianceQueryInput>
    create: XOR<AIResponseCreateWithoutComplianceQueryInput, AIResponseUncheckedCreateWithoutComplianceQueryInput>
  }

  export type AIResponseUpdateWithWhereUniqueWithoutComplianceQueryInput = {
    where: AIResponseWhereUniqueInput
    data: XOR<AIResponseUpdateWithoutComplianceQueryInput, AIResponseUncheckedUpdateWithoutComplianceQueryInput>
  }

  export type AIResponseUpdateManyWithWhereWithoutComplianceQueryInput = {
    where: AIResponseScalarWhereInput
    data: XOR<AIResponseUpdateManyMutationInput, AIResponseUncheckedUpdateManyWithoutComplianceQueryInput>
  }

  export type AIResponseScalarWhereInput = {
    AND?: AIResponseScalarWhereInput | AIResponseScalarWhereInput[]
    OR?: AIResponseScalarWhereInput[]
    NOT?: AIResponseScalarWhereInput | AIResponseScalarWhereInput[]
    id?: UuidFilter<"AIResponse"> | string
    queryId?: UuidFilter<"AIResponse"> | string
    responseText?: StringFilter<"AIResponse"> | string
    confidenceScore?: FloatNullableFilter<"AIResponse"> | number | null
    metadata?: JsonNullableFilter<"AIResponse">
    createdAt?: DateTimeFilter<"AIResponse"> | Date | string
  }

  export type ComplianceQueryCreateWithoutResponsesInput = {
    id?: string
    queryText: string
    status?: $Enums.ComplianceQueryStatus
    attemptCount?: number
    errorMessage?: string | null
    processingStartedAt?: Date | string | null
    processingFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    document?: DocumentCreateNestedOneWithoutComplianceQueriesInput
    user: ProfileCreateNestedOneWithoutComplianceQueriesInput
  }

  export type ComplianceQueryUncheckedCreateWithoutResponsesInput = {
    id?: string
    queryText: string
    status?: $Enums.ComplianceQueryStatus
    documentId?: string | null
    userId: string
    attemptCount?: number
    errorMessage?: string | null
    processingStartedAt?: Date | string | null
    processingFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComplianceQueryCreateOrConnectWithoutResponsesInput = {
    where: ComplianceQueryWhereUniqueInput
    create: XOR<ComplianceQueryCreateWithoutResponsesInput, ComplianceQueryUncheckedCreateWithoutResponsesInput>
  }

  export type ComplianceQueryUpsertWithoutResponsesInput = {
    update: XOR<ComplianceQueryUpdateWithoutResponsesInput, ComplianceQueryUncheckedUpdateWithoutResponsesInput>
    create: XOR<ComplianceQueryCreateWithoutResponsesInput, ComplianceQueryUncheckedCreateWithoutResponsesInput>
    where?: ComplianceQueryWhereInput
  }

  export type ComplianceQueryUpdateToOneWithWhereWithoutResponsesInput = {
    where?: ComplianceQueryWhereInput
    data: XOR<ComplianceQueryUpdateWithoutResponsesInput, ComplianceQueryUncheckedUpdateWithoutResponsesInput>
  }

  export type ComplianceQueryUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryText?: StringFieldUpdateOperationsInput | string
    status?: EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus
    attemptCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneWithoutComplianceQueriesNestedInput
    user?: ProfileUpdateOneRequiredWithoutComplianceQueriesNestedInput
  }

  export type ComplianceQueryUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryText?: StringFieldUpdateOperationsInput | string
    status?: EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    attemptCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateWithoutNotificationsInput = {
    id?: string
    email: string
    fullName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutProfilesInput
    documents?: DocumentCreateNestedManyWithoutUploaderInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    complianceQueries?: ComplianceQueryCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    fullName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutUploaderInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    complianceQueries?: ComplianceQueryUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutNotificationsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutNotificationsInput, ProfileUncheckedCreateWithoutNotificationsInput>
  }

  export type DocumentCreateWithoutNotificationsInput = {
    id?: string
    originalFileName: string
    filename: string
    mimeType?: string | null
    storageKey?: string | null
    fileUrl?: string | null
    checksum?: string | null
    fileSize?: number | null
    pageCount?: number | null
    language?: string | null
    status?: $Enums.DocumentStatus
    complianceScore?: number | null
    riskLevel?: $Enums.RiskLevel | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutDocumentsInput
    uploader: ProfileCreateNestedOneWithoutDocumentsInput
    analyses?: DocumentAnalysisCreateNestedManyWithoutDocumentInput
    complianceQueries?: ComplianceQueryCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutNotificationsInput = {
    id?: string
    organizationId: string
    uploadedBy: string
    originalFileName: string
    filename: string
    mimeType?: string | null
    storageKey?: string | null
    fileUrl?: string | null
    checksum?: string | null
    fileSize?: number | null
    pageCount?: number | null
    language?: string | null
    status?: $Enums.DocumentStatus
    complianceScore?: number | null
    riskLevel?: $Enums.RiskLevel | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: DocumentAnalysisUncheckedCreateNestedManyWithoutDocumentInput
    complianceQueries?: ComplianceQueryUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutNotificationsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutNotificationsInput, DocumentUncheckedCreateWithoutNotificationsInput>
  }

  export type ProfileUpsertWithoutNotificationsInput = {
    update: XOR<ProfileUpdateWithoutNotificationsInput, ProfileUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ProfileCreateWithoutNotificationsInput, ProfileUncheckedCreateWithoutNotificationsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutNotificationsInput, ProfileUncheckedUpdateWithoutNotificationsInput>
  }

  export type ProfileUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutProfilesNestedInput
    documents?: DocumentUpdateManyWithoutUploaderNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    complianceQueries?: ComplianceQueryUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutUploaderNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    complianceQueries?: ComplianceQueryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DocumentUpsertWithoutNotificationsInput = {
    update: XOR<DocumentUpdateWithoutNotificationsInput, DocumentUncheckedUpdateWithoutNotificationsInput>
    create: XOR<DocumentCreateWithoutNotificationsInput, DocumentUncheckedCreateWithoutNotificationsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutNotificationsInput, DocumentUncheckedUpdateWithoutNotificationsInput>
  }

  export type DocumentUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutDocumentsNestedInput
    uploader?: ProfileUpdateOneRequiredWithoutDocumentsNestedInput
    analyses?: DocumentAnalysisUpdateManyWithoutDocumentNestedInput
    complianceQueries?: ComplianceQueryUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    uploadedBy?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: DocumentAnalysisUncheckedUpdateManyWithoutDocumentNestedInput
    complianceQueries?: ComplianceQueryUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type ProfileCreateManyOrganizationInput = {
    id?: string
    email: string
    fullName?: string | null
    avatarUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyOrganizationInput = {
    id?: string
    uploadedBy: string
    originalFileName: string
    filename: string
    mimeType?: string | null
    storageKey?: string | null
    fileUrl?: string | null
    checksum?: string | null
    fileSize?: number | null
    pageCount?: number | null
    language?: string | null
    status?: $Enums.DocumentStatus
    complianceScore?: number | null
    riskLevel?: $Enums.RiskLevel | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogCreateManyOrganizationInput = {
    id?: string
    userId?: string | null
    action: string
    entityType?: string | null
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProfileUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutUploaderNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    complianceQueries?: ComplianceQueryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutUploaderNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    complianceQueries?: ComplianceQueryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: ProfileUpdateOneRequiredWithoutDocumentsNestedInput
    analyses?: DocumentAnalysisUpdateManyWithoutDocumentNestedInput
    complianceQueries?: ComplianceQueryUpdateManyWithoutDocumentNestedInput
    notifications?: NotificationUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploadedBy?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: DocumentAnalysisUncheckedUpdateManyWithoutDocumentNestedInput
    complianceQueries?: ComplianceQueryUncheckedUpdateManyWithoutDocumentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploadedBy?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyUploaderInput = {
    id?: string
    organizationId: string
    originalFileName: string
    filename: string
    mimeType?: string | null
    storageKey?: string | null
    fileUrl?: string | null
    checksum?: string | null
    fileSize?: number | null
    pageCount?: number | null
    language?: string | null
    status?: $Enums.DocumentStatus
    complianceScore?: number | null
    riskLevel?: $Enums.RiskLevel | null
    expirationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogCreateManyUserInput = {
    id?: string
    organizationId: string
    action: string
    entityType?: string | null
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ComplianceQueryCreateManyUserInput = {
    id?: string
    queryText: string
    status?: $Enums.ComplianceQueryStatus
    documentId?: string | null
    attemptCount?: number
    errorMessage?: string | null
    processingStartedAt?: Date | string | null
    processingFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    message: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    deliveryChannel?: $Enums.DeliveryChannel
    documentId?: string | null
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutDocumentsNestedInput
    analyses?: DocumentAnalysisUpdateManyWithoutDocumentNestedInput
    complianceQueries?: ComplianceQueryUpdateManyWithoutDocumentNestedInput
    notifications?: NotificationUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: DocumentAnalysisUncheckedUpdateManyWithoutDocumentNestedInput
    complianceQueries?: ComplianceQueryUncheckedUpdateManyWithoutDocumentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateManyWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    complianceScore?: NullableIntFieldUpdateOperationsInput | number | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplianceQueryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryText?: StringFieldUpdateOperationsInput | string
    status?: EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus
    attemptCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneWithoutComplianceQueriesNestedInput
    responses?: AIResponseUpdateManyWithoutComplianceQueryNestedInput
  }

  export type ComplianceQueryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryText?: StringFieldUpdateOperationsInput | string
    status?: EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    attemptCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: AIResponseUncheckedUpdateManyWithoutComplianceQueryNestedInput
  }

  export type ComplianceQueryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryText?: StringFieldUpdateOperationsInput | string
    status?: EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    attemptCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentAnalysisCreateManyDocumentInput = {
    id?: string
    executiveSummary?: string | null
    overallVerdict?: $Enums.AnalysisVerdict | null
    confidenceScore?: number | null
    modelName?: string | null
    promptVersion?: string | null
    rulesetVersion?: string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ComplianceQueryCreateManyDocumentInput = {
    id?: string
    queryText: string
    status?: $Enums.ComplianceQueryStatus
    userId: string
    attemptCount?: number
    errorMessage?: string | null
    processingStartedAt?: Date | string | null
    processingFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyDocumentInput = {
    id?: string
    userId: string
    title: string
    message: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    deliveryChannel?: $Enums.DeliveryChannel
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentAnalysisUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null
    overallVerdict?: NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    promptVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: NullableStringFieldUpdateOperationsInput | string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: BoolFieldUpdateOperationsInput | boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    findings?: FindingUpdateManyWithoutAnalysisNestedInput
  }

  export type DocumentAnalysisUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null
    overallVerdict?: NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    promptVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: NullableStringFieldUpdateOperationsInput | string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: BoolFieldUpdateOperationsInput | boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    findings?: FindingUncheckedUpdateManyWithoutAnalysisNestedInput
  }

  export type DocumentAnalysisUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null
    overallVerdict?: NullableEnumAnalysisVerdictFieldUpdateOperationsInput | $Enums.AnalysisVerdict | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    promptVersion?: NullableStringFieldUpdateOperationsInput | string | null
    rulesetVersion?: NullableStringFieldUpdateOperationsInput | string | null
    parties?: NullableJsonNullValueInput | InputJsonValue
    obligations?: NullableJsonNullValueInput | InputJsonValue
    paymentTerms?: NullableJsonNullValueInput | InputJsonValue
    renewalTerms?: NullableJsonNullValueInput | InputJsonValue
    penalties?: NullableJsonNullValueInput | InputJsonValue
    governingLaw?: NullableStringFieldUpdateOperationsInput | string | null
    missingClauses?: NullableJsonNullValueInput | InputJsonValue
    unusualConditions?: NullableJsonNullValueInput | InputJsonValue
    complianceRequirements?: NullableJsonNullValueInput | InputJsonValue
    policyViolations?: NullableJsonNullValueInput | InputJsonValue
    regulatoryIssues?: NullableJsonNullValueInput | InputJsonValue
    missingSignatures?: NullableJsonNullValueInput | InputJsonValue
    expirationDetected?: BoolFieldUpdateOperationsInput | boolean
    importantDates?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplianceQueryUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryText?: StringFieldUpdateOperationsInput | string
    status?: EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus
    attemptCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutComplianceQueriesNestedInput
    responses?: AIResponseUpdateManyWithoutComplianceQueryNestedInput
  }

  export type ComplianceQueryUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryText?: StringFieldUpdateOperationsInput | string
    status?: EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus
    userId?: StringFieldUpdateOperationsInput | string
    attemptCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: AIResponseUncheckedUpdateManyWithoutComplianceQueryNestedInput
  }

  export type ComplianceQueryUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryText?: StringFieldUpdateOperationsInput | string
    status?: EnumComplianceQueryStatusFieldUpdateOperationsInput | $Enums.ComplianceQueryStatus
    userId?: StringFieldUpdateOperationsInput | string
    attemptCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingCreateManyAnalysisInput = {
    id?: string
    title: string
    description?: string | null
    severity?: $Enums.FindingSeverity
    clauseReference?: string | null
    pageNumber?: number | null
    excerpt?: string | null
    recommendation?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FindingUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: EnumFindingSeverityFieldUpdateOperationsInput | $Enums.FindingSeverity
    clauseReference?: NullableStringFieldUpdateOperationsInput | string | null
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingUncheckedUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: EnumFindingSeverityFieldUpdateOperationsInput | $Enums.FindingSeverity
    clauseReference?: NullableStringFieldUpdateOperationsInput | string | null
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FindingUncheckedUpdateManyWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: EnumFindingSeverityFieldUpdateOperationsInput | $Enums.FindingSeverity
    clauseReference?: NullableStringFieldUpdateOperationsInput | string | null
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIResponseCreateManyComplianceQueryInput = {
    id?: string
    responseText: string
    confidenceScore?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AIResponseUpdateWithoutComplianceQueryInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseText?: StringFieldUpdateOperationsInput | string
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIResponseUncheckedUpdateWithoutComplianceQueryInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseText?: StringFieldUpdateOperationsInput | string
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIResponseUncheckedUpdateManyWithoutComplianceQueryInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseText?: StringFieldUpdateOperationsInput | string
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}