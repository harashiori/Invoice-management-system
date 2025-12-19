
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model InvoiceItem
 * 
 */
export type InvoiceItem = $Result.DefaultSelection<Prisma.$InvoiceItemPayload>
/**
 * Model TaxBreakdown
 * 
 */
export type TaxBreakdown = $Result.DefaultSelection<Prisma.$TaxBreakdownPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model MonthlyReport
 * 
 */
export type MonthlyReport = $Result.DefaultSelection<Prisma.$MonthlyReportPayload>
/**
 * Model ReportSchedule
 * 
 */
export type ReportSchedule = $Result.DefaultSelection<Prisma.$ReportSchedulePayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoiceItem`: Exposes CRUD operations for the **InvoiceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceItems
    * const invoiceItems = await prisma.invoiceItem.findMany()
    * ```
    */
  get invoiceItem(): Prisma.InvoiceItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taxBreakdown`: Exposes CRUD operations for the **TaxBreakdown** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaxBreakdowns
    * const taxBreakdowns = await prisma.taxBreakdown.findMany()
    * ```
    */
  get taxBreakdown(): Prisma.TaxBreakdownDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthlyReport`: Exposes CRUD operations for the **MonthlyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyReports
    * const monthlyReports = await prisma.monthlyReport.findMany()
    * ```
    */
  get monthlyReport(): Prisma.MonthlyReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reportSchedule`: Exposes CRUD operations for the **ReportSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReportSchedules
    * const reportSchedules = await prisma.reportSchedule.findMany()
    * ```
    */
  get reportSchedule(): Prisma.ReportScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
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
    User: 'User',
    Supplier: 'Supplier',
    Project: 'Project',
    Invoice: 'Invoice',
    InvoiceItem: 'InvoiceItem',
    TaxBreakdown: 'TaxBreakdown',
    Payment: 'Payment',
    Notification: 'Notification',
    MonthlyReport: 'MonthlyReport',
    ReportSchedule: 'ReportSchedule',
    Settings: 'Settings'
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
      modelProps: "user" | "supplier" | "project" | "invoice" | "invoiceItem" | "taxBreakdown" | "payment" | "notification" | "monthlyReport" | "reportSchedule" | "settings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      InvoiceItem: {
        payload: Prisma.$InvoiceItemPayload<ExtArgs>
        fields: Prisma.InvoiceItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          findFirst: {
            args: Prisma.InvoiceItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          findMany: {
            args: Prisma.InvoiceItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          create: {
            args: Prisma.InvoiceItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          createMany: {
            args: Prisma.InvoiceItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          delete: {
            args: Prisma.InvoiceItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          update: {
            args: Prisma.InvoiceItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          deleteMany: {
            args: Prisma.InvoiceItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          upsert: {
            args: Prisma.InvoiceItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          aggregate: {
            args: Prisma.InvoiceItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceItem>
          }
          groupBy: {
            args: Prisma.InvoiceItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceItemCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemCountAggregateOutputType> | number
          }
        }
      }
      TaxBreakdown: {
        payload: Prisma.$TaxBreakdownPayload<ExtArgs>
        fields: Prisma.TaxBreakdownFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaxBreakdownFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxBreakdownPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaxBreakdownFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxBreakdownPayload>
          }
          findFirst: {
            args: Prisma.TaxBreakdownFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxBreakdownPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaxBreakdownFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxBreakdownPayload>
          }
          findMany: {
            args: Prisma.TaxBreakdownFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxBreakdownPayload>[]
          }
          create: {
            args: Prisma.TaxBreakdownCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxBreakdownPayload>
          }
          createMany: {
            args: Prisma.TaxBreakdownCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaxBreakdownCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxBreakdownPayload>[]
          }
          delete: {
            args: Prisma.TaxBreakdownDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxBreakdownPayload>
          }
          update: {
            args: Prisma.TaxBreakdownUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxBreakdownPayload>
          }
          deleteMany: {
            args: Prisma.TaxBreakdownDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaxBreakdownUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaxBreakdownUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxBreakdownPayload>[]
          }
          upsert: {
            args: Prisma.TaxBreakdownUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxBreakdownPayload>
          }
          aggregate: {
            args: Prisma.TaxBreakdownAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaxBreakdown>
          }
          groupBy: {
            args: Prisma.TaxBreakdownGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxBreakdownGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaxBreakdownCountArgs<ExtArgs>
            result: $Utils.Optional<TaxBreakdownCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
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
      MonthlyReport: {
        payload: Prisma.$MonthlyReportPayload<ExtArgs>
        fields: Prisma.MonthlyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          findFirst: {
            args: Prisma.MonthlyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          findMany: {
            args: Prisma.MonthlyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>[]
          }
          create: {
            args: Prisma.MonthlyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          createMany: {
            args: Prisma.MonthlyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthlyReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>[]
          }
          delete: {
            args: Prisma.MonthlyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          update: {
            args: Prisma.MonthlyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          deleteMany: {
            args: Prisma.MonthlyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonthlyReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>[]
          }
          upsert: {
            args: Prisma.MonthlyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          aggregate: {
            args: Prisma.MonthlyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyReport>
          }
          groupBy: {
            args: Prisma.MonthlyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyReportCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyReportCountAggregateOutputType> | number
          }
        }
      }
      ReportSchedule: {
        payload: Prisma.$ReportSchedulePayload<ExtArgs>
        fields: Prisma.ReportScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportSchedulePayload>
          }
          findFirst: {
            args: Prisma.ReportScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportSchedulePayload>
          }
          findMany: {
            args: Prisma.ReportScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportSchedulePayload>[]
          }
          create: {
            args: Prisma.ReportScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportSchedulePayload>
          }
          createMany: {
            args: Prisma.ReportScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportSchedulePayload>[]
          }
          delete: {
            args: Prisma.ReportScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportSchedulePayload>
          }
          update: {
            args: Prisma.ReportScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportSchedulePayload>
          }
          deleteMany: {
            args: Prisma.ReportScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportSchedulePayload>[]
          }
          upsert: {
            args: Prisma.ReportScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportSchedulePayload>
          }
          aggregate: {
            args: Prisma.ReportScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReportSchedule>
          }
          groupBy: {
            args: Prisma.ReportScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ReportScheduleCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    supplier?: SupplierOmit
    project?: ProjectOmit
    invoice?: InvoiceOmit
    invoiceItem?: InvoiceItemOmit
    taxBreakdown?: TaxBreakdownOmit
    payment?: PaymentOmit
    notification?: NotificationOmit
    monthlyReport?: MonthlyReportOmit
    reportSchedule?: ReportScheduleOmit
    settings?: SettingsOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    projects: number
    invoices: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | SupplierCountOutputTypeCountProjectsArgs
    invoices?: boolean | SupplierCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    invoices: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | ProjectCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    items: number
    taxBreakdowns: number
    payments: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | InvoiceCountOutputTypeCountItemsArgs
    taxBreakdowns?: boolean | InvoiceCountOutputTypeCountTaxBreakdownsArgs
    payments?: boolean | InvoiceCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountTaxBreakdownsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxBreakdownWhereInput
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string | null
    role: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string | null
      role: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    registrationNumber: string | null
    address: string | null
    phone: string | null
    email: string | null
    contact: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    registrationNumber: string | null
    address: string | null
    phone: string | null
    email: string | null
    contact: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    code: number
    registrationNumber: number
    address: number
    phone: number
    email: number
    contact: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    registrationNumber?: true
    address?: true
    phone?: true
    email?: true
    contact?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    registrationNumber?: true
    address?: true
    phone?: true
    email?: true
    contact?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    registrationNumber?: true
    address?: true
    phone?: true
    email?: true
    contact?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    name: string
    code: string
    registrationNumber: string
    address: string
    phone: string
    email: string
    contact: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    registrationNumber?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    contact?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | Supplier$projectsArgs<ExtArgs>
    invoices?: boolean | Supplier$invoicesArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    registrationNumber?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    contact?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    registrationNumber?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    contact?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    registrationNumber?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    contact?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "registrationNumber" | "address" | "phone" | "email" | "contact" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Supplier$projectsArgs<ExtArgs>
    invoices?: boolean | Supplier$invoicesArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      registrationNumber: string
      address: string
      phone: string
      email: string
      contact: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Supplier$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends Supplier$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly code: FieldRef<"Supplier", 'String'>
    readonly registrationNumber: FieldRef<"Supplier", 'String'>
    readonly address: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly contact: FieldRef<"Supplier", 'String'>
    readonly status: FieldRef<"Supplier", 'String'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
    readonly updatedAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.projects
   */
  export type Supplier$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Supplier.invoices
   */
  export type Supplier$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    budget: number | null
    actualAmount: number | null
  }

  export type ProjectSumAggregateOutputType = {
    budget: number | null
    actualAmount: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    clientId: string | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
    budget: number | null
    actualAmount: number | null
    manager: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    clientId: string | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
    budget: number | null
    actualAmount: number | null
    manager: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    clientId: number
    status: number
    startDate: number
    endDate: number
    budget: number
    actualAmount: number
    manager: number
    members: number
    tags: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    budget?: true
    actualAmount?: true
  }

  export type ProjectSumAggregateInputType = {
    budget?: true
    actualAmount?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    clientId?: true
    status?: true
    startDate?: true
    endDate?: true
    budget?: true
    actualAmount?: true
    manager?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    clientId?: true
    status?: true
    startDate?: true
    endDate?: true
    budget?: true
    actualAmount?: true
    manager?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    clientId?: true
    status?: true
    startDate?: true
    endDate?: true
    budget?: true
    actualAmount?: true
    manager?: true
    members?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    code: string
    name: string
    description: string | null
    clientId: string
    status: string
    startDate: Date
    endDate: Date | null
    budget: number | null
    actualAmount: number
    manager: string | null
    members: string[]
    tags: string[]
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    clientId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    budget?: boolean
    actualAmount?: boolean
    manager?: boolean
    members?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | SupplierDefaultArgs<ExtArgs>
    invoices?: boolean | Project$invoicesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    clientId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    budget?: boolean
    actualAmount?: boolean
    manager?: boolean
    members?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    clientId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    budget?: boolean
    actualAmount?: boolean
    manager?: boolean
    members?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    clientId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    budget?: boolean
    actualAmount?: boolean
    manager?: boolean
    members?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "description" | "clientId" | "status" | "startDate" | "endDate" | "budget" | "actualAmount" | "manager" | "members" | "tags" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | SupplierDefaultArgs<ExtArgs>
    invoices?: boolean | Project$invoicesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      client: Prisma.$SupplierPayload<ExtArgs>
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      description: string | null
      clientId: string
      status: string
      startDate: Date
      endDate: Date | null
      budget: number | null
      actualAmount: number
      manager: string | null
      members: string[]
      tags: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoices<T extends Project$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Project$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly code: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly clientId: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'String'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
    readonly budget: FieldRef<"Project", 'Float'>
    readonly actualAmount: FieldRef<"Project", 'Float'>
    readonly manager: FieldRef<"Project", 'String'>
    readonly members: FieldRef<"Project", 'String[]'>
    readonly tags: FieldRef<"Project", 'String[]'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.invoices
   */
  export type Project$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    subtotal: number | null
    taxAmount: number | null
    amount: number | null
    taxExcludedAmount: number | null
    taxExemptAmount: number | null
    nonTaxableAmount: number | null
    ocrConfidenceScore: number | null
    documentVersion: number | null
    fileSize: number | null
    ocrConfidence: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    subtotal: number | null
    taxAmount: number | null
    amount: number | null
    taxExcludedAmount: number | null
    taxExemptAmount: number | null
    nonTaxableAmount: number | null
    ocrConfidenceScore: number | null
    documentVersion: number | null
    fileSize: number | null
    ocrConfidence: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    invoiceNumber: string | null
    issueDate: Date | null
    dueDate: Date | null
    transactionDate: Date | null
    transactionPeriodStart: Date | null
    transactionPeriodEnd: Date | null
    currency: string | null
    subject: string | null
    purchaseOrderNumber: string | null
    projectName: string | null
    projectId: string | null
    projectCode: string | null
    supplier: string | null
    supplierId: string | null
    supplierRegistrationNumber: string | null
    supplierAddress: string | null
    supplierPhone: string | null
    supplierEmail: string | null
    supplierContactPerson: string | null
    billingTo: string | null
    billingToDepartment: string | null
    billingToContactPerson: string | null
    subtotal: number | null
    taxAmount: number | null
    amount: number | null
    taxExcludedAmount: number | null
    taxExemptAmount: number | null
    nonTaxableAmount: number | null
    paymentDueDate: Date | null
    paymentTerms: string | null
    bankName: string | null
    bankBranchName: string | null
    bankAccountType: string | null
    bankAccountNumber: string | null
    bankAccountHolder: string | null
    transferFeePayer: string | null
    normalizedSupplierName: string | null
    matchingProjectName: string | null
    matchingContactPerson: string | null
    receiptMethod: string | null
    receiptDateTime: Date | null
    registeredBy: string | null
    receivedFromEmail: string | null
    fileHash: string | null
    storagePath: string | null
    ocrConfidenceScore: number | null
    documentVersion: number | null
    filePath: string | null
    fileName: string | null
    fileSize: number | null
    project: string | null
    status: string | null
    ocrConfidence: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    invoiceNumber: string | null
    issueDate: Date | null
    dueDate: Date | null
    transactionDate: Date | null
    transactionPeriodStart: Date | null
    transactionPeriodEnd: Date | null
    currency: string | null
    subject: string | null
    purchaseOrderNumber: string | null
    projectName: string | null
    projectId: string | null
    projectCode: string | null
    supplier: string | null
    supplierId: string | null
    supplierRegistrationNumber: string | null
    supplierAddress: string | null
    supplierPhone: string | null
    supplierEmail: string | null
    supplierContactPerson: string | null
    billingTo: string | null
    billingToDepartment: string | null
    billingToContactPerson: string | null
    subtotal: number | null
    taxAmount: number | null
    amount: number | null
    taxExcludedAmount: number | null
    taxExemptAmount: number | null
    nonTaxableAmount: number | null
    paymentDueDate: Date | null
    paymentTerms: string | null
    bankName: string | null
    bankBranchName: string | null
    bankAccountType: string | null
    bankAccountNumber: string | null
    bankAccountHolder: string | null
    transferFeePayer: string | null
    normalizedSupplierName: string | null
    matchingProjectName: string | null
    matchingContactPerson: string | null
    receiptMethod: string | null
    receiptDateTime: Date | null
    registeredBy: string | null
    receivedFromEmail: string | null
    fileHash: string | null
    storagePath: string | null
    ocrConfidenceScore: number | null
    documentVersion: number | null
    filePath: string | null
    fileName: string | null
    fileSize: number | null
    project: string | null
    status: string | null
    ocrConfidence: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    invoiceNumber: number
    issueDate: number
    dueDate: number
    transactionDate: number
    transactionPeriodStart: number
    transactionPeriodEnd: number
    currency: number
    subject: number
    purchaseOrderNumber: number
    projectName: number
    projectId: number
    projectCode: number
    supplier: number
    supplierId: number
    supplierRegistrationNumber: number
    supplierAddress: number
    supplierPhone: number
    supplierEmail: number
    supplierContactPerson: number
    billingTo: number
    billingToDepartment: number
    billingToContactPerson: number
    subtotal: number
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount: number
    nonTaxableAmount: number
    paymentDueDate: number
    paymentTerms: number
    bankName: number
    bankBranchName: number
    bankAccountType: number
    bankAccountNumber: number
    bankAccountHolder: number
    transferFeePayer: number
    normalizedSupplierName: number
    matchingProjectName: number
    matchingContactPerson: number
    receiptMethod: number
    receiptDateTime: number
    registeredBy: number
    receivedFromEmail: number
    fileHash: number
    storagePath: number
    ocrConfidenceScore: number
    documentVersion: number
    filePath: number
    fileName: number
    fileSize: number
    project: number
    status: number
    ocrConfidence: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    subtotal?: true
    taxAmount?: true
    amount?: true
    taxExcludedAmount?: true
    taxExemptAmount?: true
    nonTaxableAmount?: true
    ocrConfidenceScore?: true
    documentVersion?: true
    fileSize?: true
    ocrConfidence?: true
  }

  export type InvoiceSumAggregateInputType = {
    subtotal?: true
    taxAmount?: true
    amount?: true
    taxExcludedAmount?: true
    taxExemptAmount?: true
    nonTaxableAmount?: true
    ocrConfidenceScore?: true
    documentVersion?: true
    fileSize?: true
    ocrConfidence?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    invoiceNumber?: true
    issueDate?: true
    dueDate?: true
    transactionDate?: true
    transactionPeriodStart?: true
    transactionPeriodEnd?: true
    currency?: true
    subject?: true
    purchaseOrderNumber?: true
    projectName?: true
    projectId?: true
    projectCode?: true
    supplier?: true
    supplierId?: true
    supplierRegistrationNumber?: true
    supplierAddress?: true
    supplierPhone?: true
    supplierEmail?: true
    supplierContactPerson?: true
    billingTo?: true
    billingToDepartment?: true
    billingToContactPerson?: true
    subtotal?: true
    taxAmount?: true
    amount?: true
    taxExcludedAmount?: true
    taxExemptAmount?: true
    nonTaxableAmount?: true
    paymentDueDate?: true
    paymentTerms?: true
    bankName?: true
    bankBranchName?: true
    bankAccountType?: true
    bankAccountNumber?: true
    bankAccountHolder?: true
    transferFeePayer?: true
    normalizedSupplierName?: true
    matchingProjectName?: true
    matchingContactPerson?: true
    receiptMethod?: true
    receiptDateTime?: true
    registeredBy?: true
    receivedFromEmail?: true
    fileHash?: true
    storagePath?: true
    ocrConfidenceScore?: true
    documentVersion?: true
    filePath?: true
    fileName?: true
    fileSize?: true
    project?: true
    status?: true
    ocrConfidence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    invoiceNumber?: true
    issueDate?: true
    dueDate?: true
    transactionDate?: true
    transactionPeriodStart?: true
    transactionPeriodEnd?: true
    currency?: true
    subject?: true
    purchaseOrderNumber?: true
    projectName?: true
    projectId?: true
    projectCode?: true
    supplier?: true
    supplierId?: true
    supplierRegistrationNumber?: true
    supplierAddress?: true
    supplierPhone?: true
    supplierEmail?: true
    supplierContactPerson?: true
    billingTo?: true
    billingToDepartment?: true
    billingToContactPerson?: true
    subtotal?: true
    taxAmount?: true
    amount?: true
    taxExcludedAmount?: true
    taxExemptAmount?: true
    nonTaxableAmount?: true
    paymentDueDate?: true
    paymentTerms?: true
    bankName?: true
    bankBranchName?: true
    bankAccountType?: true
    bankAccountNumber?: true
    bankAccountHolder?: true
    transferFeePayer?: true
    normalizedSupplierName?: true
    matchingProjectName?: true
    matchingContactPerson?: true
    receiptMethod?: true
    receiptDateTime?: true
    registeredBy?: true
    receivedFromEmail?: true
    fileHash?: true
    storagePath?: true
    ocrConfidenceScore?: true
    documentVersion?: true
    filePath?: true
    fileName?: true
    fileSize?: true
    project?: true
    status?: true
    ocrConfidence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    invoiceNumber?: true
    issueDate?: true
    dueDate?: true
    transactionDate?: true
    transactionPeriodStart?: true
    transactionPeriodEnd?: true
    currency?: true
    subject?: true
    purchaseOrderNumber?: true
    projectName?: true
    projectId?: true
    projectCode?: true
    supplier?: true
    supplierId?: true
    supplierRegistrationNumber?: true
    supplierAddress?: true
    supplierPhone?: true
    supplierEmail?: true
    supplierContactPerson?: true
    billingTo?: true
    billingToDepartment?: true
    billingToContactPerson?: true
    subtotal?: true
    taxAmount?: true
    amount?: true
    taxExcludedAmount?: true
    taxExemptAmount?: true
    nonTaxableAmount?: true
    paymentDueDate?: true
    paymentTerms?: true
    bankName?: true
    bankBranchName?: true
    bankAccountType?: true
    bankAccountNumber?: true
    bankAccountHolder?: true
    transferFeePayer?: true
    normalizedSupplierName?: true
    matchingProjectName?: true
    matchingContactPerson?: true
    receiptMethod?: true
    receiptDateTime?: true
    registeredBy?: true
    receivedFromEmail?: true
    fileHash?: true
    storagePath?: true
    ocrConfidenceScore?: true
    documentVersion?: true
    filePath?: true
    fileName?: true
    fileSize?: true
    project?: true
    status?: true
    ocrConfidence?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    invoiceNumber: string | null
    issueDate: Date
    dueDate: Date
    transactionDate: Date | null
    transactionPeriodStart: Date | null
    transactionPeriodEnd: Date | null
    currency: string | null
    subject: string | null
    purchaseOrderNumber: string | null
    projectName: string | null
    projectId: string | null
    projectCode: string | null
    supplier: string
    supplierId: string
    supplierRegistrationNumber: string | null
    supplierAddress: string | null
    supplierPhone: string | null
    supplierEmail: string | null
    supplierContactPerson: string | null
    billingTo: string | null
    billingToDepartment: string | null
    billingToContactPerson: string | null
    subtotal: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount: number | null
    nonTaxableAmount: number | null
    paymentDueDate: Date | null
    paymentTerms: string | null
    bankName: string | null
    bankBranchName: string | null
    bankAccountType: string | null
    bankAccountNumber: string | null
    bankAccountHolder: string | null
    transferFeePayer: string | null
    normalizedSupplierName: string | null
    matchingProjectName: string | null
    matchingContactPerson: string | null
    receiptMethod: string | null
    receiptDateTime: Date | null
    registeredBy: string | null
    receivedFromEmail: string | null
    fileHash: string | null
    storagePath: string | null
    ocrConfidenceScore: number | null
    documentVersion: number | null
    filePath: string | null
    fileName: string | null
    fileSize: number | null
    project: string
    status: string
    ocrConfidence: number | null
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    issueDate?: boolean
    dueDate?: boolean
    transactionDate?: boolean
    transactionPeriodStart?: boolean
    transactionPeriodEnd?: boolean
    currency?: boolean
    subject?: boolean
    purchaseOrderNumber?: boolean
    projectName?: boolean
    projectId?: boolean
    projectCode?: boolean
    supplier?: boolean
    supplierId?: boolean
    supplierRegistrationNumber?: boolean
    supplierAddress?: boolean
    supplierPhone?: boolean
    supplierEmail?: boolean
    supplierContactPerson?: boolean
    billingTo?: boolean
    billingToDepartment?: boolean
    billingToContactPerson?: boolean
    subtotal?: boolean
    taxAmount?: boolean
    amount?: boolean
    taxExcludedAmount?: boolean
    taxExemptAmount?: boolean
    nonTaxableAmount?: boolean
    paymentDueDate?: boolean
    paymentTerms?: boolean
    bankName?: boolean
    bankBranchName?: boolean
    bankAccountType?: boolean
    bankAccountNumber?: boolean
    bankAccountHolder?: boolean
    transferFeePayer?: boolean
    normalizedSupplierName?: boolean
    matchingProjectName?: boolean
    matchingContactPerson?: boolean
    receiptMethod?: boolean
    receiptDateTime?: boolean
    registeredBy?: boolean
    receivedFromEmail?: boolean
    fileHash?: boolean
    storagePath?: boolean
    ocrConfidenceScore?: boolean
    documentVersion?: boolean
    filePath?: boolean
    fileName?: boolean
    fileSize?: boolean
    project?: boolean
    status?: boolean
    ocrConfidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplierRef?: boolean | Invoice$supplierRefArgs<ExtArgs>
    projectRef?: boolean | Invoice$projectRefArgs<ExtArgs>
    items?: boolean | Invoice$itemsArgs<ExtArgs>
    taxBreakdowns?: boolean | Invoice$taxBreakdownsArgs<ExtArgs>
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    issueDate?: boolean
    dueDate?: boolean
    transactionDate?: boolean
    transactionPeriodStart?: boolean
    transactionPeriodEnd?: boolean
    currency?: boolean
    subject?: boolean
    purchaseOrderNumber?: boolean
    projectName?: boolean
    projectId?: boolean
    projectCode?: boolean
    supplier?: boolean
    supplierId?: boolean
    supplierRegistrationNumber?: boolean
    supplierAddress?: boolean
    supplierPhone?: boolean
    supplierEmail?: boolean
    supplierContactPerson?: boolean
    billingTo?: boolean
    billingToDepartment?: boolean
    billingToContactPerson?: boolean
    subtotal?: boolean
    taxAmount?: boolean
    amount?: boolean
    taxExcludedAmount?: boolean
    taxExemptAmount?: boolean
    nonTaxableAmount?: boolean
    paymentDueDate?: boolean
    paymentTerms?: boolean
    bankName?: boolean
    bankBranchName?: boolean
    bankAccountType?: boolean
    bankAccountNumber?: boolean
    bankAccountHolder?: boolean
    transferFeePayer?: boolean
    normalizedSupplierName?: boolean
    matchingProjectName?: boolean
    matchingContactPerson?: boolean
    receiptMethod?: boolean
    receiptDateTime?: boolean
    registeredBy?: boolean
    receivedFromEmail?: boolean
    fileHash?: boolean
    storagePath?: boolean
    ocrConfidenceScore?: boolean
    documentVersion?: boolean
    filePath?: boolean
    fileName?: boolean
    fileSize?: boolean
    project?: boolean
    status?: boolean
    ocrConfidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplierRef?: boolean | Invoice$supplierRefArgs<ExtArgs>
    projectRef?: boolean | Invoice$projectRefArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    issueDate?: boolean
    dueDate?: boolean
    transactionDate?: boolean
    transactionPeriodStart?: boolean
    transactionPeriodEnd?: boolean
    currency?: boolean
    subject?: boolean
    purchaseOrderNumber?: boolean
    projectName?: boolean
    projectId?: boolean
    projectCode?: boolean
    supplier?: boolean
    supplierId?: boolean
    supplierRegistrationNumber?: boolean
    supplierAddress?: boolean
    supplierPhone?: boolean
    supplierEmail?: boolean
    supplierContactPerson?: boolean
    billingTo?: boolean
    billingToDepartment?: boolean
    billingToContactPerson?: boolean
    subtotal?: boolean
    taxAmount?: boolean
    amount?: boolean
    taxExcludedAmount?: boolean
    taxExemptAmount?: boolean
    nonTaxableAmount?: boolean
    paymentDueDate?: boolean
    paymentTerms?: boolean
    bankName?: boolean
    bankBranchName?: boolean
    bankAccountType?: boolean
    bankAccountNumber?: boolean
    bankAccountHolder?: boolean
    transferFeePayer?: boolean
    normalizedSupplierName?: boolean
    matchingProjectName?: boolean
    matchingContactPerson?: boolean
    receiptMethod?: boolean
    receiptDateTime?: boolean
    registeredBy?: boolean
    receivedFromEmail?: boolean
    fileHash?: boolean
    storagePath?: boolean
    ocrConfidenceScore?: boolean
    documentVersion?: boolean
    filePath?: boolean
    fileName?: boolean
    fileSize?: boolean
    project?: boolean
    status?: boolean
    ocrConfidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplierRef?: boolean | Invoice$supplierRefArgs<ExtArgs>
    projectRef?: boolean | Invoice$projectRefArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    invoiceNumber?: boolean
    issueDate?: boolean
    dueDate?: boolean
    transactionDate?: boolean
    transactionPeriodStart?: boolean
    transactionPeriodEnd?: boolean
    currency?: boolean
    subject?: boolean
    purchaseOrderNumber?: boolean
    projectName?: boolean
    projectId?: boolean
    projectCode?: boolean
    supplier?: boolean
    supplierId?: boolean
    supplierRegistrationNumber?: boolean
    supplierAddress?: boolean
    supplierPhone?: boolean
    supplierEmail?: boolean
    supplierContactPerson?: boolean
    billingTo?: boolean
    billingToDepartment?: boolean
    billingToContactPerson?: boolean
    subtotal?: boolean
    taxAmount?: boolean
    amount?: boolean
    taxExcludedAmount?: boolean
    taxExemptAmount?: boolean
    nonTaxableAmount?: boolean
    paymentDueDate?: boolean
    paymentTerms?: boolean
    bankName?: boolean
    bankBranchName?: boolean
    bankAccountType?: boolean
    bankAccountNumber?: boolean
    bankAccountHolder?: boolean
    transferFeePayer?: boolean
    normalizedSupplierName?: boolean
    matchingProjectName?: boolean
    matchingContactPerson?: boolean
    receiptMethod?: boolean
    receiptDateTime?: boolean
    registeredBy?: boolean
    receivedFromEmail?: boolean
    fileHash?: boolean
    storagePath?: boolean
    ocrConfidenceScore?: boolean
    documentVersion?: boolean
    filePath?: boolean
    fileName?: boolean
    fileSize?: boolean
    project?: boolean
    status?: boolean
    ocrConfidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceNumber" | "issueDate" | "dueDate" | "transactionDate" | "transactionPeriodStart" | "transactionPeriodEnd" | "currency" | "subject" | "purchaseOrderNumber" | "projectName" | "projectId" | "projectCode" | "supplier" | "supplierId" | "supplierRegistrationNumber" | "supplierAddress" | "supplierPhone" | "supplierEmail" | "supplierContactPerson" | "billingTo" | "billingToDepartment" | "billingToContactPerson" | "subtotal" | "taxAmount" | "amount" | "taxExcludedAmount" | "taxExemptAmount" | "nonTaxableAmount" | "paymentDueDate" | "paymentTerms" | "bankName" | "bankBranchName" | "bankAccountType" | "bankAccountNumber" | "bankAccountHolder" | "transferFeePayer" | "normalizedSupplierName" | "matchingProjectName" | "matchingContactPerson" | "receiptMethod" | "receiptDateTime" | "registeredBy" | "receivedFromEmail" | "fileHash" | "storagePath" | "ocrConfidenceScore" | "documentVersion" | "filePath" | "fileName" | "fileSize" | "project" | "status" | "ocrConfidence" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplierRef?: boolean | Invoice$supplierRefArgs<ExtArgs>
    projectRef?: boolean | Invoice$projectRefArgs<ExtArgs>
    items?: boolean | Invoice$itemsArgs<ExtArgs>
    taxBreakdowns?: boolean | Invoice$taxBreakdownsArgs<ExtArgs>
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplierRef?: boolean | Invoice$supplierRefArgs<ExtArgs>
    projectRef?: boolean | Invoice$projectRefArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplierRef?: boolean | Invoice$supplierRefArgs<ExtArgs>
    projectRef?: boolean | Invoice$projectRefArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      supplierRef: Prisma.$SupplierPayload<ExtArgs> | null
      projectRef: Prisma.$ProjectPayload<ExtArgs> | null
      items: Prisma.$InvoiceItemPayload<ExtArgs>[]
      taxBreakdowns: Prisma.$TaxBreakdownPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceNumber: string | null
      issueDate: Date
      dueDate: Date
      transactionDate: Date | null
      transactionPeriodStart: Date | null
      transactionPeriodEnd: Date | null
      currency: string | null
      subject: string | null
      purchaseOrderNumber: string | null
      projectName: string | null
      projectId: string | null
      projectCode: string | null
      supplier: string
      supplierId: string
      supplierRegistrationNumber: string | null
      supplierAddress: string | null
      supplierPhone: string | null
      supplierEmail: string | null
      supplierContactPerson: string | null
      billingTo: string | null
      billingToDepartment: string | null
      billingToContactPerson: string | null
      subtotal: number | null
      taxAmount: number
      amount: number
      taxExcludedAmount: number
      taxExemptAmount: number | null
      nonTaxableAmount: number | null
      paymentDueDate: Date | null
      paymentTerms: string | null
      bankName: string | null
      bankBranchName: string | null
      bankAccountType: string | null
      bankAccountNumber: string | null
      bankAccountHolder: string | null
      transferFeePayer: string | null
      normalizedSupplierName: string | null
      matchingProjectName: string | null
      matchingContactPerson: string | null
      receiptMethod: string | null
      receiptDateTime: Date | null
      registeredBy: string | null
      receivedFromEmail: string | null
      fileHash: string | null
      storagePath: string | null
      ocrConfidenceScore: number | null
      documentVersion: number | null
      filePath: string | null
      fileName: string | null
      fileSize: number | null
      project: string
      status: string
      ocrConfidence: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplierRef<T extends Invoice$supplierRefArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$supplierRefArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    projectRef<T extends Invoice$projectRefArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$projectRefArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Invoice$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taxBreakdowns<T extends Invoice$taxBreakdownsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$taxBreakdownsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxBreakdownPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Invoice$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly invoiceNumber: FieldRef<"Invoice", 'String'>
    readonly issueDate: FieldRef<"Invoice", 'DateTime'>
    readonly dueDate: FieldRef<"Invoice", 'DateTime'>
    readonly transactionDate: FieldRef<"Invoice", 'DateTime'>
    readonly transactionPeriodStart: FieldRef<"Invoice", 'DateTime'>
    readonly transactionPeriodEnd: FieldRef<"Invoice", 'DateTime'>
    readonly currency: FieldRef<"Invoice", 'String'>
    readonly subject: FieldRef<"Invoice", 'String'>
    readonly purchaseOrderNumber: FieldRef<"Invoice", 'String'>
    readonly projectName: FieldRef<"Invoice", 'String'>
    readonly projectId: FieldRef<"Invoice", 'String'>
    readonly projectCode: FieldRef<"Invoice", 'String'>
    readonly supplier: FieldRef<"Invoice", 'String'>
    readonly supplierId: FieldRef<"Invoice", 'String'>
    readonly supplierRegistrationNumber: FieldRef<"Invoice", 'String'>
    readonly supplierAddress: FieldRef<"Invoice", 'String'>
    readonly supplierPhone: FieldRef<"Invoice", 'String'>
    readonly supplierEmail: FieldRef<"Invoice", 'String'>
    readonly supplierContactPerson: FieldRef<"Invoice", 'String'>
    readonly billingTo: FieldRef<"Invoice", 'String'>
    readonly billingToDepartment: FieldRef<"Invoice", 'String'>
    readonly billingToContactPerson: FieldRef<"Invoice", 'String'>
    readonly subtotal: FieldRef<"Invoice", 'Float'>
    readonly taxAmount: FieldRef<"Invoice", 'Float'>
    readonly amount: FieldRef<"Invoice", 'Float'>
    readonly taxExcludedAmount: FieldRef<"Invoice", 'Float'>
    readonly taxExemptAmount: FieldRef<"Invoice", 'Float'>
    readonly nonTaxableAmount: FieldRef<"Invoice", 'Float'>
    readonly paymentDueDate: FieldRef<"Invoice", 'DateTime'>
    readonly paymentTerms: FieldRef<"Invoice", 'String'>
    readonly bankName: FieldRef<"Invoice", 'String'>
    readonly bankBranchName: FieldRef<"Invoice", 'String'>
    readonly bankAccountType: FieldRef<"Invoice", 'String'>
    readonly bankAccountNumber: FieldRef<"Invoice", 'String'>
    readonly bankAccountHolder: FieldRef<"Invoice", 'String'>
    readonly transferFeePayer: FieldRef<"Invoice", 'String'>
    readonly normalizedSupplierName: FieldRef<"Invoice", 'String'>
    readonly matchingProjectName: FieldRef<"Invoice", 'String'>
    readonly matchingContactPerson: FieldRef<"Invoice", 'String'>
    readonly receiptMethod: FieldRef<"Invoice", 'String'>
    readonly receiptDateTime: FieldRef<"Invoice", 'DateTime'>
    readonly registeredBy: FieldRef<"Invoice", 'String'>
    readonly receivedFromEmail: FieldRef<"Invoice", 'String'>
    readonly fileHash: FieldRef<"Invoice", 'String'>
    readonly storagePath: FieldRef<"Invoice", 'String'>
    readonly ocrConfidenceScore: FieldRef<"Invoice", 'Float'>
    readonly documentVersion: FieldRef<"Invoice", 'Int'>
    readonly filePath: FieldRef<"Invoice", 'String'>
    readonly fileName: FieldRef<"Invoice", 'String'>
    readonly fileSize: FieldRef<"Invoice", 'Int'>
    readonly project: FieldRef<"Invoice", 'String'>
    readonly status: FieldRef<"Invoice", 'String'>
    readonly ocrConfidence: FieldRef<"Invoice", 'Float'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.supplierRef
   */
  export type Invoice$supplierRefArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    where?: SupplierWhereInput
  }

  /**
   * Invoice.projectRef
   */
  export type Invoice$projectRefArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Invoice.items
   */
  export type Invoice$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    cursor?: InvoiceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * Invoice.taxBreakdowns
   */
  export type Invoice$taxBreakdownsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxBreakdown
     */
    select?: TaxBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxBreakdown
     */
    omit?: TaxBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxBreakdownInclude<ExtArgs> | null
    where?: TaxBreakdownWhereInput
    orderBy?: TaxBreakdownOrderByWithRelationInput | TaxBreakdownOrderByWithRelationInput[]
    cursor?: TaxBreakdownWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaxBreakdownScalarFieldEnum | TaxBreakdownScalarFieldEnum[]
  }

  /**
   * Invoice.payments
   */
  export type Invoice$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model InvoiceItem
   */

  export type AggregateInvoiceItem = {
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  export type InvoiceItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    amount: number | null
    taxRate: number | null
    taxAmount: number | null
  }

  export type InvoiceItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    amount: number | null
    taxRate: number | null
    taxAmount: number | null
  }

  export type InvoiceItemMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    name: string | null
    description: string | null
    quantity: number | null
    unit: string | null
    unitPrice: number | null
    amount: number | null
    taxRate: number | null
    taxAmount: number | null
    remarks: string | null
  }

  export type InvoiceItemMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    name: string | null
    description: string | null
    quantity: number | null
    unit: string | null
    unitPrice: number | null
    amount: number | null
    taxRate: number | null
    taxAmount: number | null
    remarks: string | null
  }

  export type InvoiceItemCountAggregateOutputType = {
    id: number
    invoiceId: number
    name: number
    description: number
    quantity: number
    unit: number
    unitPrice: number
    amount: number
    taxRate: number
    taxAmount: number
    remarks: number
    _all: number
  }


  export type InvoiceItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    amount?: true
    taxRate?: true
    taxAmount?: true
  }

  export type InvoiceItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    amount?: true
    taxRate?: true
    taxAmount?: true
  }

  export type InvoiceItemMinAggregateInputType = {
    id?: true
    invoiceId?: true
    name?: true
    description?: true
    quantity?: true
    unit?: true
    unitPrice?: true
    amount?: true
    taxRate?: true
    taxAmount?: true
    remarks?: true
  }

  export type InvoiceItemMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    name?: true
    description?: true
    quantity?: true
    unit?: true
    unitPrice?: true
    amount?: true
    taxRate?: true
    taxAmount?: true
    remarks?: true
  }

  export type InvoiceItemCountAggregateInputType = {
    id?: true
    invoiceId?: true
    name?: true
    description?: true
    quantity?: true
    unit?: true
    unitPrice?: true
    amount?: true
    taxRate?: true
    taxAmount?: true
    remarks?: true
    _all?: true
  }

  export type InvoiceItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItem to aggregate.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceItems
    **/
    _count?: true | InvoiceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceItemMaxAggregateInputType
  }

  export type GetInvoiceItemAggregateType<T extends InvoiceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceItem[P]>
      : GetScalarType<T[P], AggregateInvoiceItem[P]>
  }




  export type InvoiceItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithAggregationInput | InvoiceItemOrderByWithAggregationInput[]
    by: InvoiceItemScalarFieldEnum[] | InvoiceItemScalarFieldEnum
    having?: InvoiceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceItemCountAggregateInputType | true
    _avg?: InvoiceItemAvgAggregateInputType
    _sum?: InvoiceItemSumAggregateInputType
    _min?: InvoiceItemMinAggregateInputType
    _max?: InvoiceItemMaxAggregateInputType
  }

  export type InvoiceItemGroupByOutputType = {
    id: string
    invoiceId: string
    name: string
    description: string | null
    quantity: number
    unit: string | null
    unitPrice: number
    amount: number
    taxRate: number | null
    taxAmount: number | null
    remarks: string | null
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  type GetInvoiceItemGroupByPayload<T extends InvoiceItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    unit?: boolean
    unitPrice?: boolean
    amount?: boolean
    taxRate?: boolean
    taxAmount?: boolean
    remarks?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    unit?: boolean
    unitPrice?: boolean
    amount?: boolean
    taxRate?: boolean
    taxAmount?: boolean
    remarks?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    unit?: boolean
    unitPrice?: boolean
    amount?: boolean
    taxRate?: boolean
    taxAmount?: boolean
    remarks?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    unit?: boolean
    unitPrice?: boolean
    amount?: boolean
    taxRate?: boolean
    taxAmount?: boolean
    remarks?: boolean
  }

  export type InvoiceItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "name" | "description" | "quantity" | "unit" | "unitPrice" | "amount" | "taxRate" | "taxAmount" | "remarks", ExtArgs["result"]["invoiceItem"]>
  export type InvoiceItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $InvoiceItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceItem"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      name: string
      description: string | null
      quantity: number
      unit: string | null
      unitPrice: number
      amount: number
      taxRate: number | null
      taxAmount: number | null
      remarks: string | null
    }, ExtArgs["result"]["invoiceItem"]>
    composites: {}
  }

  type InvoiceItemGetPayload<S extends boolean | null | undefined | InvoiceItemDefaultArgs> = $Result.GetResult<Prisma.$InvoiceItemPayload, S>

  type InvoiceItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceItemCountAggregateInputType | true
    }

  export interface InvoiceItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceItem'], meta: { name: 'InvoiceItem' } }
    /**
     * Find zero or one InvoiceItem that matches the filter.
     * @param {InvoiceItemFindUniqueArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceItemFindUniqueArgs>(args: SelectSubset<T, InvoiceItemFindUniqueArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvoiceItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceItemFindUniqueOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceItemFindFirstArgs>(args?: SelectSubset<T, InvoiceItemFindFirstArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany()
     * 
     * // Get first 10 InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceItemFindManyArgs>(args?: SelectSubset<T, InvoiceItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvoiceItem.
     * @param {InvoiceItemCreateArgs} args - Arguments to create a InvoiceItem.
     * @example
     * // Create one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.create({
     *   data: {
     *     // ... data to create a InvoiceItem
     *   }
     * })
     * 
     */
    create<T extends InvoiceItemCreateArgs>(args: SelectSubset<T, InvoiceItemCreateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvoiceItems.
     * @param {InvoiceItemCreateManyArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceItemCreateManyArgs>(args?: SelectSubset<T, InvoiceItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceItems and returns the data saved in the database.
     * @param {InvoiceItemCreateManyAndReturnArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceItems and only return the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvoiceItem.
     * @param {InvoiceItemDeleteArgs} args - Arguments to delete one InvoiceItem.
     * @example
     * // Delete one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.delete({
     *   where: {
     *     // ... filter to delete one InvoiceItem
     *   }
     * })
     * 
     */
    delete<T extends InvoiceItemDeleteArgs>(args: SelectSubset<T, InvoiceItemDeleteArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvoiceItem.
     * @param {InvoiceItemUpdateArgs} args - Arguments to update one InvoiceItem.
     * @example
     * // Update one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceItemUpdateArgs>(args: SelectSubset<T, InvoiceItemUpdateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvoiceItems.
     * @param {InvoiceItemDeleteManyArgs} args - Arguments to filter InvoiceItems to delete.
     * @example
     * // Delete a few InvoiceItems
     * const { count } = await prisma.invoiceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceItemDeleteManyArgs>(args?: SelectSubset<T, InvoiceItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceItemUpdateManyArgs>(args: SelectSubset<T, InvoiceItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems and returns the data updated in the database.
     * @param {InvoiceItemUpdateManyAndReturnArgs} args - Arguments to update many InvoiceItems.
     * @example
     * // Update many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvoiceItems and only return the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvoiceItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvoiceItem.
     * @param {InvoiceItemUpsertArgs} args - Arguments to update or create a InvoiceItem.
     * @example
     * // Update or create a InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.upsert({
     *   create: {
     *     // ... data to create a InvoiceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceItem we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceItemUpsertArgs>(args: SelectSubset<T, InvoiceItemUpsertArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemCountArgs} args - Arguments to filter InvoiceItems to count.
     * @example
     * // Count the number of InvoiceItems
     * const count = await prisma.invoiceItem.count({
     *   where: {
     *     // ... the filter for the InvoiceItems we want to count
     *   }
     * })
    **/
    count<T extends InvoiceItemCountArgs>(
      args?: Subset<T, InvoiceItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceItemAggregateArgs>(args: Subset<T, InvoiceItemAggregateArgs>): Prisma.PrismaPromise<GetInvoiceItemAggregateType<T>>

    /**
     * Group by InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemGroupByArgs} args - Group by arguments.
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
      T extends InvoiceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceItemGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceItem model
   */
  readonly fields: InvoiceItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InvoiceItem model
   */
  interface InvoiceItemFieldRefs {
    readonly id: FieldRef<"InvoiceItem", 'String'>
    readonly invoiceId: FieldRef<"InvoiceItem", 'String'>
    readonly name: FieldRef<"InvoiceItem", 'String'>
    readonly description: FieldRef<"InvoiceItem", 'String'>
    readonly quantity: FieldRef<"InvoiceItem", 'Float'>
    readonly unit: FieldRef<"InvoiceItem", 'String'>
    readonly unitPrice: FieldRef<"InvoiceItem", 'Float'>
    readonly amount: FieldRef<"InvoiceItem", 'Float'>
    readonly taxRate: FieldRef<"InvoiceItem", 'Float'>
    readonly taxAmount: FieldRef<"InvoiceItem", 'Float'>
    readonly remarks: FieldRef<"InvoiceItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceItem findUnique
   */
  export type InvoiceItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem findUniqueOrThrow
   */
  export type InvoiceItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem findFirst
   */
  export type InvoiceItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem findFirstOrThrow
   */
  export type InvoiceItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem findMany
   */
  export type InvoiceItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem create
   */
  export type InvoiceItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InvoiceItem.
     */
    data: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
  }

  /**
   * InvoiceItem createMany
   */
  export type InvoiceItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvoiceItem createManyAndReturn
   */
  export type InvoiceItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItem update
   */
  export type InvoiceItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InvoiceItem.
     */
    data: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
    /**
     * Choose, which InvoiceItem to update.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem updateMany
   */
  export type InvoiceItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemWhereInput
    /**
     * Limit how many InvoiceItems to update.
     */
    limit?: number
  }

  /**
   * InvoiceItem updateManyAndReturn
   */
  export type InvoiceItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemWhereInput
    /**
     * Limit how many InvoiceItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItem upsert
   */
  export type InvoiceItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InvoiceItem to update in case it exists.
     */
    where: InvoiceItemWhereUniqueInput
    /**
     * In case the InvoiceItem found by the `where` argument doesn't exist, create a new InvoiceItem with this data.
     */
    create: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
    /**
     * In case the InvoiceItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
  }

  /**
   * InvoiceItem delete
   */
  export type InvoiceItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter which InvoiceItem to delete.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem deleteMany
   */
  export type InvoiceItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItems to delete
     */
    where?: InvoiceItemWhereInput
    /**
     * Limit how many InvoiceItems to delete.
     */
    limit?: number
  }

  /**
   * InvoiceItem without action
   */
  export type InvoiceItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
  }


  /**
   * Model TaxBreakdown
   */

  export type AggregateTaxBreakdown = {
    _count: TaxBreakdownCountAggregateOutputType | null
    _avg: TaxBreakdownAvgAggregateOutputType | null
    _sum: TaxBreakdownSumAggregateOutputType | null
    _min: TaxBreakdownMinAggregateOutputType | null
    _max: TaxBreakdownMaxAggregateOutputType | null
  }

  export type TaxBreakdownAvgAggregateOutputType = {
    taxRate: number | null
    taxableAmount: number | null
    taxAmount: number | null
  }

  export type TaxBreakdownSumAggregateOutputType = {
    taxRate: number | null
    taxableAmount: number | null
    taxAmount: number | null
  }

  export type TaxBreakdownMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    taxRate: number | null
    taxableAmount: number | null
    taxAmount: number | null
  }

  export type TaxBreakdownMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    taxRate: number | null
    taxableAmount: number | null
    taxAmount: number | null
  }

  export type TaxBreakdownCountAggregateOutputType = {
    id: number
    invoiceId: number
    taxRate: number
    taxableAmount: number
    taxAmount: number
    _all: number
  }


  export type TaxBreakdownAvgAggregateInputType = {
    taxRate?: true
    taxableAmount?: true
    taxAmount?: true
  }

  export type TaxBreakdownSumAggregateInputType = {
    taxRate?: true
    taxableAmount?: true
    taxAmount?: true
  }

  export type TaxBreakdownMinAggregateInputType = {
    id?: true
    invoiceId?: true
    taxRate?: true
    taxableAmount?: true
    taxAmount?: true
  }

  export type TaxBreakdownMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    taxRate?: true
    taxableAmount?: true
    taxAmount?: true
  }

  export type TaxBreakdownCountAggregateInputType = {
    id?: true
    invoiceId?: true
    taxRate?: true
    taxableAmount?: true
    taxAmount?: true
    _all?: true
  }

  export type TaxBreakdownAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxBreakdown to aggregate.
     */
    where?: TaxBreakdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxBreakdowns to fetch.
     */
    orderBy?: TaxBreakdownOrderByWithRelationInput | TaxBreakdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxBreakdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxBreakdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxBreakdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaxBreakdowns
    **/
    _count?: true | TaxBreakdownCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxBreakdownAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxBreakdownSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxBreakdownMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxBreakdownMaxAggregateInputType
  }

  export type GetTaxBreakdownAggregateType<T extends TaxBreakdownAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxBreakdown]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxBreakdown[P]>
      : GetScalarType<T[P], AggregateTaxBreakdown[P]>
  }




  export type TaxBreakdownGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxBreakdownWhereInput
    orderBy?: TaxBreakdownOrderByWithAggregationInput | TaxBreakdownOrderByWithAggregationInput[]
    by: TaxBreakdownScalarFieldEnum[] | TaxBreakdownScalarFieldEnum
    having?: TaxBreakdownScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxBreakdownCountAggregateInputType | true
    _avg?: TaxBreakdownAvgAggregateInputType
    _sum?: TaxBreakdownSumAggregateInputType
    _min?: TaxBreakdownMinAggregateInputType
    _max?: TaxBreakdownMaxAggregateInputType
  }

  export type TaxBreakdownGroupByOutputType = {
    id: string
    invoiceId: string
    taxRate: number
    taxableAmount: number
    taxAmount: number
    _count: TaxBreakdownCountAggregateOutputType | null
    _avg: TaxBreakdownAvgAggregateOutputType | null
    _sum: TaxBreakdownSumAggregateOutputType | null
    _min: TaxBreakdownMinAggregateOutputType | null
    _max: TaxBreakdownMaxAggregateOutputType | null
  }

  type GetTaxBreakdownGroupByPayload<T extends TaxBreakdownGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxBreakdownGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxBreakdownGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxBreakdownGroupByOutputType[P]>
            : GetScalarType<T[P], TaxBreakdownGroupByOutputType[P]>
        }
      >
    >


  export type TaxBreakdownSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    taxRate?: boolean
    taxableAmount?: boolean
    taxAmount?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxBreakdown"]>

  export type TaxBreakdownSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    taxRate?: boolean
    taxableAmount?: boolean
    taxAmount?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxBreakdown"]>

  export type TaxBreakdownSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    taxRate?: boolean
    taxableAmount?: boolean
    taxAmount?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxBreakdown"]>

  export type TaxBreakdownSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    taxRate?: boolean
    taxableAmount?: boolean
    taxAmount?: boolean
  }

  export type TaxBreakdownOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "taxRate" | "taxableAmount" | "taxAmount", ExtArgs["result"]["taxBreakdown"]>
  export type TaxBreakdownInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type TaxBreakdownIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type TaxBreakdownIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $TaxBreakdownPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaxBreakdown"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      taxRate: number
      taxableAmount: number
      taxAmount: number
    }, ExtArgs["result"]["taxBreakdown"]>
    composites: {}
  }

  type TaxBreakdownGetPayload<S extends boolean | null | undefined | TaxBreakdownDefaultArgs> = $Result.GetResult<Prisma.$TaxBreakdownPayload, S>

  type TaxBreakdownCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaxBreakdownFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaxBreakdownCountAggregateInputType | true
    }

  export interface TaxBreakdownDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaxBreakdown'], meta: { name: 'TaxBreakdown' } }
    /**
     * Find zero or one TaxBreakdown that matches the filter.
     * @param {TaxBreakdownFindUniqueArgs} args - Arguments to find a TaxBreakdown
     * @example
     * // Get one TaxBreakdown
     * const taxBreakdown = await prisma.taxBreakdown.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxBreakdownFindUniqueArgs>(args: SelectSubset<T, TaxBreakdownFindUniqueArgs<ExtArgs>>): Prisma__TaxBreakdownClient<$Result.GetResult<Prisma.$TaxBreakdownPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaxBreakdown that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxBreakdownFindUniqueOrThrowArgs} args - Arguments to find a TaxBreakdown
     * @example
     * // Get one TaxBreakdown
     * const taxBreakdown = await prisma.taxBreakdown.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxBreakdownFindUniqueOrThrowArgs>(args: SelectSubset<T, TaxBreakdownFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaxBreakdownClient<$Result.GetResult<Prisma.$TaxBreakdownPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxBreakdown that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxBreakdownFindFirstArgs} args - Arguments to find a TaxBreakdown
     * @example
     * // Get one TaxBreakdown
     * const taxBreakdown = await prisma.taxBreakdown.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxBreakdownFindFirstArgs>(args?: SelectSubset<T, TaxBreakdownFindFirstArgs<ExtArgs>>): Prisma__TaxBreakdownClient<$Result.GetResult<Prisma.$TaxBreakdownPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxBreakdown that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxBreakdownFindFirstOrThrowArgs} args - Arguments to find a TaxBreakdown
     * @example
     * // Get one TaxBreakdown
     * const taxBreakdown = await prisma.taxBreakdown.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxBreakdownFindFirstOrThrowArgs>(args?: SelectSubset<T, TaxBreakdownFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaxBreakdownClient<$Result.GetResult<Prisma.$TaxBreakdownPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaxBreakdowns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxBreakdownFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaxBreakdowns
     * const taxBreakdowns = await prisma.taxBreakdown.findMany()
     * 
     * // Get first 10 TaxBreakdowns
     * const taxBreakdowns = await prisma.taxBreakdown.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxBreakdownWithIdOnly = await prisma.taxBreakdown.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaxBreakdownFindManyArgs>(args?: SelectSubset<T, TaxBreakdownFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxBreakdownPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaxBreakdown.
     * @param {TaxBreakdownCreateArgs} args - Arguments to create a TaxBreakdown.
     * @example
     * // Create one TaxBreakdown
     * const TaxBreakdown = await prisma.taxBreakdown.create({
     *   data: {
     *     // ... data to create a TaxBreakdown
     *   }
     * })
     * 
     */
    create<T extends TaxBreakdownCreateArgs>(args: SelectSubset<T, TaxBreakdownCreateArgs<ExtArgs>>): Prisma__TaxBreakdownClient<$Result.GetResult<Prisma.$TaxBreakdownPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaxBreakdowns.
     * @param {TaxBreakdownCreateManyArgs} args - Arguments to create many TaxBreakdowns.
     * @example
     * // Create many TaxBreakdowns
     * const taxBreakdown = await prisma.taxBreakdown.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaxBreakdownCreateManyArgs>(args?: SelectSubset<T, TaxBreakdownCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaxBreakdowns and returns the data saved in the database.
     * @param {TaxBreakdownCreateManyAndReturnArgs} args - Arguments to create many TaxBreakdowns.
     * @example
     * // Create many TaxBreakdowns
     * const taxBreakdown = await prisma.taxBreakdown.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaxBreakdowns and only return the `id`
     * const taxBreakdownWithIdOnly = await prisma.taxBreakdown.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaxBreakdownCreateManyAndReturnArgs>(args?: SelectSubset<T, TaxBreakdownCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxBreakdownPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaxBreakdown.
     * @param {TaxBreakdownDeleteArgs} args - Arguments to delete one TaxBreakdown.
     * @example
     * // Delete one TaxBreakdown
     * const TaxBreakdown = await prisma.taxBreakdown.delete({
     *   where: {
     *     // ... filter to delete one TaxBreakdown
     *   }
     * })
     * 
     */
    delete<T extends TaxBreakdownDeleteArgs>(args: SelectSubset<T, TaxBreakdownDeleteArgs<ExtArgs>>): Prisma__TaxBreakdownClient<$Result.GetResult<Prisma.$TaxBreakdownPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaxBreakdown.
     * @param {TaxBreakdownUpdateArgs} args - Arguments to update one TaxBreakdown.
     * @example
     * // Update one TaxBreakdown
     * const taxBreakdown = await prisma.taxBreakdown.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaxBreakdownUpdateArgs>(args: SelectSubset<T, TaxBreakdownUpdateArgs<ExtArgs>>): Prisma__TaxBreakdownClient<$Result.GetResult<Prisma.$TaxBreakdownPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaxBreakdowns.
     * @param {TaxBreakdownDeleteManyArgs} args - Arguments to filter TaxBreakdowns to delete.
     * @example
     * // Delete a few TaxBreakdowns
     * const { count } = await prisma.taxBreakdown.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaxBreakdownDeleteManyArgs>(args?: SelectSubset<T, TaxBreakdownDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxBreakdowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxBreakdownUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaxBreakdowns
     * const taxBreakdown = await prisma.taxBreakdown.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaxBreakdownUpdateManyArgs>(args: SelectSubset<T, TaxBreakdownUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxBreakdowns and returns the data updated in the database.
     * @param {TaxBreakdownUpdateManyAndReturnArgs} args - Arguments to update many TaxBreakdowns.
     * @example
     * // Update many TaxBreakdowns
     * const taxBreakdown = await prisma.taxBreakdown.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaxBreakdowns and only return the `id`
     * const taxBreakdownWithIdOnly = await prisma.taxBreakdown.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaxBreakdownUpdateManyAndReturnArgs>(args: SelectSubset<T, TaxBreakdownUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxBreakdownPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaxBreakdown.
     * @param {TaxBreakdownUpsertArgs} args - Arguments to update or create a TaxBreakdown.
     * @example
     * // Update or create a TaxBreakdown
     * const taxBreakdown = await prisma.taxBreakdown.upsert({
     *   create: {
     *     // ... data to create a TaxBreakdown
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaxBreakdown we want to update
     *   }
     * })
     */
    upsert<T extends TaxBreakdownUpsertArgs>(args: SelectSubset<T, TaxBreakdownUpsertArgs<ExtArgs>>): Prisma__TaxBreakdownClient<$Result.GetResult<Prisma.$TaxBreakdownPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaxBreakdowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxBreakdownCountArgs} args - Arguments to filter TaxBreakdowns to count.
     * @example
     * // Count the number of TaxBreakdowns
     * const count = await prisma.taxBreakdown.count({
     *   where: {
     *     // ... the filter for the TaxBreakdowns we want to count
     *   }
     * })
    **/
    count<T extends TaxBreakdownCountArgs>(
      args?: Subset<T, TaxBreakdownCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxBreakdownCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaxBreakdown.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxBreakdownAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaxBreakdownAggregateArgs>(args: Subset<T, TaxBreakdownAggregateArgs>): Prisma.PrismaPromise<GetTaxBreakdownAggregateType<T>>

    /**
     * Group by TaxBreakdown.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxBreakdownGroupByArgs} args - Group by arguments.
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
      T extends TaxBreakdownGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxBreakdownGroupByArgs['orderBy'] }
        : { orderBy?: TaxBreakdownGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaxBreakdownGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxBreakdownGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaxBreakdown model
   */
  readonly fields: TaxBreakdownFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaxBreakdown.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaxBreakdownClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaxBreakdown model
   */
  interface TaxBreakdownFieldRefs {
    readonly id: FieldRef<"TaxBreakdown", 'String'>
    readonly invoiceId: FieldRef<"TaxBreakdown", 'String'>
    readonly taxRate: FieldRef<"TaxBreakdown", 'Float'>
    readonly taxableAmount: FieldRef<"TaxBreakdown", 'Float'>
    readonly taxAmount: FieldRef<"TaxBreakdown", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * TaxBreakdown findUnique
   */
  export type TaxBreakdownFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxBreakdown
     */
    select?: TaxBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxBreakdown
     */
    omit?: TaxBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxBreakdownInclude<ExtArgs> | null
    /**
     * Filter, which TaxBreakdown to fetch.
     */
    where: TaxBreakdownWhereUniqueInput
  }

  /**
   * TaxBreakdown findUniqueOrThrow
   */
  export type TaxBreakdownFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxBreakdown
     */
    select?: TaxBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxBreakdown
     */
    omit?: TaxBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxBreakdownInclude<ExtArgs> | null
    /**
     * Filter, which TaxBreakdown to fetch.
     */
    where: TaxBreakdownWhereUniqueInput
  }

  /**
   * TaxBreakdown findFirst
   */
  export type TaxBreakdownFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxBreakdown
     */
    select?: TaxBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxBreakdown
     */
    omit?: TaxBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxBreakdownInclude<ExtArgs> | null
    /**
     * Filter, which TaxBreakdown to fetch.
     */
    where?: TaxBreakdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxBreakdowns to fetch.
     */
    orderBy?: TaxBreakdownOrderByWithRelationInput | TaxBreakdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxBreakdowns.
     */
    cursor?: TaxBreakdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxBreakdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxBreakdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxBreakdowns.
     */
    distinct?: TaxBreakdownScalarFieldEnum | TaxBreakdownScalarFieldEnum[]
  }

  /**
   * TaxBreakdown findFirstOrThrow
   */
  export type TaxBreakdownFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxBreakdown
     */
    select?: TaxBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxBreakdown
     */
    omit?: TaxBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxBreakdownInclude<ExtArgs> | null
    /**
     * Filter, which TaxBreakdown to fetch.
     */
    where?: TaxBreakdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxBreakdowns to fetch.
     */
    orderBy?: TaxBreakdownOrderByWithRelationInput | TaxBreakdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxBreakdowns.
     */
    cursor?: TaxBreakdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxBreakdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxBreakdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxBreakdowns.
     */
    distinct?: TaxBreakdownScalarFieldEnum | TaxBreakdownScalarFieldEnum[]
  }

  /**
   * TaxBreakdown findMany
   */
  export type TaxBreakdownFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxBreakdown
     */
    select?: TaxBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxBreakdown
     */
    omit?: TaxBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxBreakdownInclude<ExtArgs> | null
    /**
     * Filter, which TaxBreakdowns to fetch.
     */
    where?: TaxBreakdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxBreakdowns to fetch.
     */
    orderBy?: TaxBreakdownOrderByWithRelationInput | TaxBreakdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaxBreakdowns.
     */
    cursor?: TaxBreakdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxBreakdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxBreakdowns.
     */
    skip?: number
    distinct?: TaxBreakdownScalarFieldEnum | TaxBreakdownScalarFieldEnum[]
  }

  /**
   * TaxBreakdown create
   */
  export type TaxBreakdownCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxBreakdown
     */
    select?: TaxBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxBreakdown
     */
    omit?: TaxBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxBreakdownInclude<ExtArgs> | null
    /**
     * The data needed to create a TaxBreakdown.
     */
    data: XOR<TaxBreakdownCreateInput, TaxBreakdownUncheckedCreateInput>
  }

  /**
   * TaxBreakdown createMany
   */
  export type TaxBreakdownCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaxBreakdowns.
     */
    data: TaxBreakdownCreateManyInput | TaxBreakdownCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaxBreakdown createManyAndReturn
   */
  export type TaxBreakdownCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxBreakdown
     */
    select?: TaxBreakdownSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxBreakdown
     */
    omit?: TaxBreakdownOmit<ExtArgs> | null
    /**
     * The data used to create many TaxBreakdowns.
     */
    data: TaxBreakdownCreateManyInput | TaxBreakdownCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxBreakdownIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaxBreakdown update
   */
  export type TaxBreakdownUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxBreakdown
     */
    select?: TaxBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxBreakdown
     */
    omit?: TaxBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxBreakdownInclude<ExtArgs> | null
    /**
     * The data needed to update a TaxBreakdown.
     */
    data: XOR<TaxBreakdownUpdateInput, TaxBreakdownUncheckedUpdateInput>
    /**
     * Choose, which TaxBreakdown to update.
     */
    where: TaxBreakdownWhereUniqueInput
  }

  /**
   * TaxBreakdown updateMany
   */
  export type TaxBreakdownUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaxBreakdowns.
     */
    data: XOR<TaxBreakdownUpdateManyMutationInput, TaxBreakdownUncheckedUpdateManyInput>
    /**
     * Filter which TaxBreakdowns to update
     */
    where?: TaxBreakdownWhereInput
    /**
     * Limit how many TaxBreakdowns to update.
     */
    limit?: number
  }

  /**
   * TaxBreakdown updateManyAndReturn
   */
  export type TaxBreakdownUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxBreakdown
     */
    select?: TaxBreakdownSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxBreakdown
     */
    omit?: TaxBreakdownOmit<ExtArgs> | null
    /**
     * The data used to update TaxBreakdowns.
     */
    data: XOR<TaxBreakdownUpdateManyMutationInput, TaxBreakdownUncheckedUpdateManyInput>
    /**
     * Filter which TaxBreakdowns to update
     */
    where?: TaxBreakdownWhereInput
    /**
     * Limit how many TaxBreakdowns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxBreakdownIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaxBreakdown upsert
   */
  export type TaxBreakdownUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxBreakdown
     */
    select?: TaxBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxBreakdown
     */
    omit?: TaxBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxBreakdownInclude<ExtArgs> | null
    /**
     * The filter to search for the TaxBreakdown to update in case it exists.
     */
    where: TaxBreakdownWhereUniqueInput
    /**
     * In case the TaxBreakdown found by the `where` argument doesn't exist, create a new TaxBreakdown with this data.
     */
    create: XOR<TaxBreakdownCreateInput, TaxBreakdownUncheckedCreateInput>
    /**
     * In case the TaxBreakdown was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxBreakdownUpdateInput, TaxBreakdownUncheckedUpdateInput>
  }

  /**
   * TaxBreakdown delete
   */
  export type TaxBreakdownDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxBreakdown
     */
    select?: TaxBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxBreakdown
     */
    omit?: TaxBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxBreakdownInclude<ExtArgs> | null
    /**
     * Filter which TaxBreakdown to delete.
     */
    where: TaxBreakdownWhereUniqueInput
  }

  /**
   * TaxBreakdown deleteMany
   */
  export type TaxBreakdownDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxBreakdowns to delete
     */
    where?: TaxBreakdownWhereInput
    /**
     * Limit how many TaxBreakdowns to delete.
     */
    limit?: number
  }

  /**
   * TaxBreakdown without action
   */
  export type TaxBreakdownDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxBreakdown
     */
    select?: TaxBreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxBreakdown
     */
    omit?: TaxBreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaxBreakdownInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
    actualAmount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
    actualAmount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    supplier: string | null
    project: string | null
    amount: number | null
    dueDate: Date | null
    status: string | null
    paidAt: Date | null
    paymentMethod: string | null
    bankTransactionId: string | null
    reconciliationStatus: string | null
    reconciliationNote: string | null
    reconciliationDate: Date | null
    actualAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    supplier: string | null
    project: string | null
    amount: number | null
    dueDate: Date | null
    status: string | null
    paidAt: Date | null
    paymentMethod: string | null
    bankTransactionId: string | null
    reconciliationStatus: string | null
    reconciliationNote: string | null
    reconciliationDate: Date | null
    actualAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    invoiceId: number
    supplier: number
    project: number
    amount: number
    dueDate: number
    status: number
    paidAt: number
    paymentMethod: number
    bankTransactionId: number
    reconciliationStatus: number
    reconciliationNote: number
    reconciliationDate: number
    actualAmount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
    actualAmount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
    actualAmount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    invoiceId?: true
    supplier?: true
    project?: true
    amount?: true
    dueDate?: true
    status?: true
    paidAt?: true
    paymentMethod?: true
    bankTransactionId?: true
    reconciliationStatus?: true
    reconciliationNote?: true
    reconciliationDate?: true
    actualAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    supplier?: true
    project?: true
    amount?: true
    dueDate?: true
    status?: true
    paidAt?: true
    paymentMethod?: true
    bankTransactionId?: true
    reconciliationStatus?: true
    reconciliationNote?: true
    reconciliationDate?: true
    actualAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    invoiceId?: true
    supplier?: true
    project?: true
    amount?: true
    dueDate?: true
    status?: true
    paidAt?: true
    paymentMethod?: true
    bankTransactionId?: true
    reconciliationStatus?: true
    reconciliationNote?: true
    reconciliationDate?: true
    actualAmount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    invoiceId: string
    supplier: string
    project: string
    amount: number
    dueDate: Date
    status: string
    paidAt: Date | null
    paymentMethod: string | null
    bankTransactionId: string | null
    reconciliationStatus: string | null
    reconciliationNote: string | null
    reconciliationDate: Date | null
    actualAmount: number | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    supplier?: boolean
    project?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    paidAt?: boolean
    paymentMethod?: boolean
    bankTransactionId?: boolean
    reconciliationStatus?: boolean
    reconciliationNote?: boolean
    reconciliationDate?: boolean
    actualAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    supplier?: boolean
    project?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    paidAt?: boolean
    paymentMethod?: boolean
    bankTransactionId?: boolean
    reconciliationStatus?: boolean
    reconciliationNote?: boolean
    reconciliationDate?: boolean
    actualAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    supplier?: boolean
    project?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    paidAt?: boolean
    paymentMethod?: boolean
    bankTransactionId?: boolean
    reconciliationStatus?: boolean
    reconciliationNote?: boolean
    reconciliationDate?: boolean
    actualAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    supplier?: boolean
    project?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    paidAt?: boolean
    paymentMethod?: boolean
    bankTransactionId?: boolean
    reconciliationStatus?: boolean
    reconciliationNote?: boolean
    reconciliationDate?: boolean
    actualAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "supplier" | "project" | "amount" | "dueDate" | "status" | "paidAt" | "paymentMethod" | "bankTransactionId" | "reconciliationStatus" | "reconciliationNote" | "reconciliationDate" | "actualAmount" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      supplier: string
      project: string
      amount: number
      dueDate: Date
      status: string
      paidAt: Date | null
      paymentMethod: string | null
      bankTransactionId: string | null
      reconciliationStatus: string | null
      reconciliationNote: string | null
      reconciliationDate: Date | null
      actualAmount: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly invoiceId: FieldRef<"Payment", 'String'>
    readonly supplier: FieldRef<"Payment", 'String'>
    readonly project: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly dueDate: FieldRef<"Payment", 'DateTime'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly paymentMethod: FieldRef<"Payment", 'String'>
    readonly bankTransactionId: FieldRef<"Payment", 'String'>
    readonly reconciliationStatus: FieldRef<"Payment", 'String'>
    readonly reconciliationNote: FieldRef<"Payment", 'String'>
    readonly reconciliationDate: FieldRef<"Payment", 'DateTime'>
    readonly actualAmount: FieldRef<"Payment", 'Float'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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
    type: string | null
    title: string | null
    message: string | null
    relatedId: string | null
    relatedType: string | null
    priority: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    message: string | null
    relatedId: string | null
    relatedType: string | null
    priority: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    message: number
    relatedId: number
    relatedType: number
    priority: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    relatedId?: true
    relatedType?: true
    priority?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    relatedId?: true
    relatedType?: true
    priority?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    relatedId?: true
    relatedType?: true
    priority?: true
    read?: true
    createdAt?: true
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
    type: string
    title: string
    message: string
    relatedId: string | null
    relatedType: string | null
    priority: string
    read: boolean
    createdAt: Date
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
    type?: boolean
    title?: boolean
    message?: boolean
    relatedId?: boolean
    relatedType?: boolean
    priority?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    relatedId?: boolean
    relatedType?: boolean
    priority?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    relatedId?: boolean
    relatedType?: boolean
    priority?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    relatedId?: boolean
    relatedType?: boolean
    priority?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "title" | "message" | "relatedId" | "relatedType" | "priority" | "read" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      title: string
      message: string
      relatedId: string | null
      relatedType: string | null
      priority: string
      read: boolean
      createdAt: Date
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly type: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly relatedId: FieldRef<"Notification", 'String'>
    readonly relatedType: FieldRef<"Notification", 'String'>
    readonly priority: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
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
   * Model MonthlyReport
   */

  export type AggregateMonthlyReport = {
    _count: MonthlyReportCountAggregateOutputType | null
    _avg: MonthlyReportAvgAggregateOutputType | null
    _sum: MonthlyReportSumAggregateOutputType | null
    _min: MonthlyReportMinAggregateOutputType | null
    _max: MonthlyReportMaxAggregateOutputType | null
  }

  export type MonthlyReportAvgAggregateOutputType = {
    totalInvoices: number | null
    totalAmount: number | null
  }

  export type MonthlyReportSumAggregateOutputType = {
    totalInvoices: number | null
    totalAmount: number | null
  }

  export type MonthlyReportMinAggregateOutputType = {
    id: string | null
    period: string | null
    totalInvoices: number | null
    totalAmount: number | null
    generatedAt: Date | null
    filePath: string | null
  }

  export type MonthlyReportMaxAggregateOutputType = {
    id: string | null
    period: string | null
    totalInvoices: number | null
    totalAmount: number | null
    generatedAt: Date | null
    filePath: string | null
  }

  export type MonthlyReportCountAggregateOutputType = {
    id: number
    period: number
    totalInvoices: number
    totalAmount: number
    statusBreakdown: number
    supplierBreakdown: number
    generatedAt: number
    filePath: number
    _all: number
  }


  export type MonthlyReportAvgAggregateInputType = {
    totalInvoices?: true
    totalAmount?: true
  }

  export type MonthlyReportSumAggregateInputType = {
    totalInvoices?: true
    totalAmount?: true
  }

  export type MonthlyReportMinAggregateInputType = {
    id?: true
    period?: true
    totalInvoices?: true
    totalAmount?: true
    generatedAt?: true
    filePath?: true
  }

  export type MonthlyReportMaxAggregateInputType = {
    id?: true
    period?: true
    totalInvoices?: true
    totalAmount?: true
    generatedAt?: true
    filePath?: true
  }

  export type MonthlyReportCountAggregateInputType = {
    id?: true
    period?: true
    totalInvoices?: true
    totalAmount?: true
    statusBreakdown?: true
    supplierBreakdown?: true
    generatedAt?: true
    filePath?: true
    _all?: true
  }

  export type MonthlyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyReport to aggregate.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyReports
    **/
    _count?: true | MonthlyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyReportMaxAggregateInputType
  }

  export type GetMonthlyReportAggregateType<T extends MonthlyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyReport[P]>
      : GetScalarType<T[P], AggregateMonthlyReport[P]>
  }




  export type MonthlyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyReportWhereInput
    orderBy?: MonthlyReportOrderByWithAggregationInput | MonthlyReportOrderByWithAggregationInput[]
    by: MonthlyReportScalarFieldEnum[] | MonthlyReportScalarFieldEnum
    having?: MonthlyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyReportCountAggregateInputType | true
    _avg?: MonthlyReportAvgAggregateInputType
    _sum?: MonthlyReportSumAggregateInputType
    _min?: MonthlyReportMinAggregateInputType
    _max?: MonthlyReportMaxAggregateInputType
  }

  export type MonthlyReportGroupByOutputType = {
    id: string
    period: string
    totalInvoices: number
    totalAmount: number
    statusBreakdown: JsonValue
    supplierBreakdown: JsonValue
    generatedAt: Date
    filePath: string | null
    _count: MonthlyReportCountAggregateOutputType | null
    _avg: MonthlyReportAvgAggregateOutputType | null
    _sum: MonthlyReportSumAggregateOutputType | null
    _min: MonthlyReportMinAggregateOutputType | null
    _max: MonthlyReportMaxAggregateOutputType | null
  }

  type GetMonthlyReportGroupByPayload<T extends MonthlyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyReportGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyReportGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    period?: boolean
    totalInvoices?: boolean
    totalAmount?: boolean
    statusBreakdown?: boolean
    supplierBreakdown?: boolean
    generatedAt?: boolean
    filePath?: boolean
  }, ExtArgs["result"]["monthlyReport"]>

  export type MonthlyReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    period?: boolean
    totalInvoices?: boolean
    totalAmount?: boolean
    statusBreakdown?: boolean
    supplierBreakdown?: boolean
    generatedAt?: boolean
    filePath?: boolean
  }, ExtArgs["result"]["monthlyReport"]>

  export type MonthlyReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    period?: boolean
    totalInvoices?: boolean
    totalAmount?: boolean
    statusBreakdown?: boolean
    supplierBreakdown?: boolean
    generatedAt?: boolean
    filePath?: boolean
  }, ExtArgs["result"]["monthlyReport"]>

  export type MonthlyReportSelectScalar = {
    id?: boolean
    period?: boolean
    totalInvoices?: boolean
    totalAmount?: boolean
    statusBreakdown?: boolean
    supplierBreakdown?: boolean
    generatedAt?: boolean
    filePath?: boolean
  }

  export type MonthlyReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "period" | "totalInvoices" | "totalAmount" | "statusBreakdown" | "supplierBreakdown" | "generatedAt" | "filePath", ExtArgs["result"]["monthlyReport"]>

  export type $MonthlyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      period: string
      totalInvoices: number
      totalAmount: number
      statusBreakdown: Prisma.JsonValue
      supplierBreakdown: Prisma.JsonValue
      generatedAt: Date
      filePath: string | null
    }, ExtArgs["result"]["monthlyReport"]>
    composites: {}
  }

  type MonthlyReportGetPayload<S extends boolean | null | undefined | MonthlyReportDefaultArgs> = $Result.GetResult<Prisma.$MonthlyReportPayload, S>

  type MonthlyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthlyReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthlyReportCountAggregateInputType | true
    }

  export interface MonthlyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyReport'], meta: { name: 'MonthlyReport' } }
    /**
     * Find zero or one MonthlyReport that matches the filter.
     * @param {MonthlyReportFindUniqueArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyReportFindUniqueArgs>(args: SelectSubset<T, MonthlyReportFindUniqueArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthlyReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlyReportFindUniqueOrThrowArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportFindFirstArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyReportFindFirstArgs>(args?: SelectSubset<T, MonthlyReportFindFirstArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportFindFirstOrThrowArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthlyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyReports
     * const monthlyReports = await prisma.monthlyReport.findMany()
     * 
     * // Get first 10 MonthlyReports
     * const monthlyReports = await prisma.monthlyReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyReportWithIdOnly = await prisma.monthlyReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlyReportFindManyArgs>(args?: SelectSubset<T, MonthlyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthlyReport.
     * @param {MonthlyReportCreateArgs} args - Arguments to create a MonthlyReport.
     * @example
     * // Create one MonthlyReport
     * const MonthlyReport = await prisma.monthlyReport.create({
     *   data: {
     *     // ... data to create a MonthlyReport
     *   }
     * })
     * 
     */
    create<T extends MonthlyReportCreateArgs>(args: SelectSubset<T, MonthlyReportCreateArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthlyReports.
     * @param {MonthlyReportCreateManyArgs} args - Arguments to create many MonthlyReports.
     * @example
     * // Create many MonthlyReports
     * const monthlyReport = await prisma.monthlyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyReportCreateManyArgs>(args?: SelectSubset<T, MonthlyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonthlyReports and returns the data saved in the database.
     * @param {MonthlyReportCreateManyAndReturnArgs} args - Arguments to create many MonthlyReports.
     * @example
     * // Create many MonthlyReports
     * const monthlyReport = await prisma.monthlyReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonthlyReports and only return the `id`
     * const monthlyReportWithIdOnly = await prisma.monthlyReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthlyReportCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthlyReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonthlyReport.
     * @param {MonthlyReportDeleteArgs} args - Arguments to delete one MonthlyReport.
     * @example
     * // Delete one MonthlyReport
     * const MonthlyReport = await prisma.monthlyReport.delete({
     *   where: {
     *     // ... filter to delete one MonthlyReport
     *   }
     * })
     * 
     */
    delete<T extends MonthlyReportDeleteArgs>(args: SelectSubset<T, MonthlyReportDeleteArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthlyReport.
     * @param {MonthlyReportUpdateArgs} args - Arguments to update one MonthlyReport.
     * @example
     * // Update one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyReportUpdateArgs>(args: SelectSubset<T, MonthlyReportUpdateArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthlyReports.
     * @param {MonthlyReportDeleteManyArgs} args - Arguments to filter MonthlyReports to delete.
     * @example
     * // Delete a few MonthlyReports
     * const { count } = await prisma.monthlyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyReportDeleteManyArgs>(args?: SelectSubset<T, MonthlyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyReports
     * const monthlyReport = await prisma.monthlyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyReportUpdateManyArgs>(args: SelectSubset<T, MonthlyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyReports and returns the data updated in the database.
     * @param {MonthlyReportUpdateManyAndReturnArgs} args - Arguments to update many MonthlyReports.
     * @example
     * // Update many MonthlyReports
     * const monthlyReport = await prisma.monthlyReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonthlyReports and only return the `id`
     * const monthlyReportWithIdOnly = await prisma.monthlyReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends MonthlyReportUpdateManyAndReturnArgs>(args: SelectSubset<T, MonthlyReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonthlyReport.
     * @param {MonthlyReportUpsertArgs} args - Arguments to update or create a MonthlyReport.
     * @example
     * // Update or create a MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.upsert({
     *   create: {
     *     // ... data to create a MonthlyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyReport we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyReportUpsertArgs>(args: SelectSubset<T, MonthlyReportUpsertArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthlyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportCountArgs} args - Arguments to filter MonthlyReports to count.
     * @example
     * // Count the number of MonthlyReports
     * const count = await prisma.monthlyReport.count({
     *   where: {
     *     // ... the filter for the MonthlyReports we want to count
     *   }
     * })
    **/
    count<T extends MonthlyReportCountArgs>(
      args?: Subset<T, MonthlyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonthlyReportAggregateArgs>(args: Subset<T, MonthlyReportAggregateArgs>): Prisma.PrismaPromise<GetMonthlyReportAggregateType<T>>

    /**
     * Group by MonthlyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportGroupByArgs} args - Group by arguments.
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
      T extends MonthlyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyReportGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonthlyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyReport model
   */
  readonly fields: MonthlyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the MonthlyReport model
   */
  interface MonthlyReportFieldRefs {
    readonly id: FieldRef<"MonthlyReport", 'String'>
    readonly period: FieldRef<"MonthlyReport", 'String'>
    readonly totalInvoices: FieldRef<"MonthlyReport", 'Int'>
    readonly totalAmount: FieldRef<"MonthlyReport", 'Float'>
    readonly statusBreakdown: FieldRef<"MonthlyReport", 'Json'>
    readonly supplierBreakdown: FieldRef<"MonthlyReport", 'Json'>
    readonly generatedAt: FieldRef<"MonthlyReport", 'DateTime'>
    readonly filePath: FieldRef<"MonthlyReport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyReport findUnique
   */
  export type MonthlyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport findUniqueOrThrow
   */
  export type MonthlyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport findFirst
   */
  export type MonthlyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyReports.
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyReports.
     */
    distinct?: MonthlyReportScalarFieldEnum | MonthlyReportScalarFieldEnum[]
  }

  /**
   * MonthlyReport findFirstOrThrow
   */
  export type MonthlyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyReports.
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyReports.
     */
    distinct?: MonthlyReportScalarFieldEnum | MonthlyReportScalarFieldEnum[]
  }

  /**
   * MonthlyReport findMany
   */
  export type MonthlyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Filter, which MonthlyReports to fetch.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyReports.
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    distinct?: MonthlyReportScalarFieldEnum | MonthlyReportScalarFieldEnum[]
  }

  /**
   * MonthlyReport create
   */
  export type MonthlyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * The data needed to create a MonthlyReport.
     */
    data: XOR<MonthlyReportCreateInput, MonthlyReportUncheckedCreateInput>
  }

  /**
   * MonthlyReport createMany
   */
  export type MonthlyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyReports.
     */
    data: MonthlyReportCreateManyInput | MonthlyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyReport createManyAndReturn
   */
  export type MonthlyReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * The data used to create many MonthlyReports.
     */
    data: MonthlyReportCreateManyInput | MonthlyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyReport update
   */
  export type MonthlyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * The data needed to update a MonthlyReport.
     */
    data: XOR<MonthlyReportUpdateInput, MonthlyReportUncheckedUpdateInput>
    /**
     * Choose, which MonthlyReport to update.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport updateMany
   */
  export type MonthlyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyReports.
     */
    data: XOR<MonthlyReportUpdateManyMutationInput, MonthlyReportUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyReports to update
     */
    where?: MonthlyReportWhereInput
    /**
     * Limit how many MonthlyReports to update.
     */
    limit?: number
  }

  /**
   * MonthlyReport updateManyAndReturn
   */
  export type MonthlyReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * The data used to update MonthlyReports.
     */
    data: XOR<MonthlyReportUpdateManyMutationInput, MonthlyReportUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyReports to update
     */
    where?: MonthlyReportWhereInput
    /**
     * Limit how many MonthlyReports to update.
     */
    limit?: number
  }

  /**
   * MonthlyReport upsert
   */
  export type MonthlyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * The filter to search for the MonthlyReport to update in case it exists.
     */
    where: MonthlyReportWhereUniqueInput
    /**
     * In case the MonthlyReport found by the `where` argument doesn't exist, create a new MonthlyReport with this data.
     */
    create: XOR<MonthlyReportCreateInput, MonthlyReportUncheckedCreateInput>
    /**
     * In case the MonthlyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyReportUpdateInput, MonthlyReportUncheckedUpdateInput>
  }

  /**
   * MonthlyReport delete
   */
  export type MonthlyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Filter which MonthlyReport to delete.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport deleteMany
   */
  export type MonthlyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyReports to delete
     */
    where?: MonthlyReportWhereInput
    /**
     * Limit how many MonthlyReports to delete.
     */
    limit?: number
  }

  /**
   * MonthlyReport without action
   */
  export type MonthlyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
  }


  /**
   * Model ReportSchedule
   */

  export type AggregateReportSchedule = {
    _count: ReportScheduleCountAggregateOutputType | null
    _avg: ReportScheduleAvgAggregateOutputType | null
    _sum: ReportScheduleSumAggregateOutputType | null
    _min: ReportScheduleMinAggregateOutputType | null
    _max: ReportScheduleMaxAggregateOutputType | null
  }

  export type ReportScheduleAvgAggregateOutputType = {
    dayOfMonth: number | null
  }

  export type ReportScheduleSumAggregateOutputType = {
    dayOfMonth: number | null
  }

  export type ReportScheduleMinAggregateOutputType = {
    id: string | null
    name: string | null
    frequency: string | null
    dayOfMonth: number | null
    enabled: boolean | null
    lastSentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportScheduleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    frequency: string | null
    dayOfMonth: number | null
    enabled: boolean | null
    lastSentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportScheduleCountAggregateOutputType = {
    id: number
    name: number
    frequency: number
    dayOfMonth: number
    recipients: number
    enabled: number
    lastSentAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportScheduleAvgAggregateInputType = {
    dayOfMonth?: true
  }

  export type ReportScheduleSumAggregateInputType = {
    dayOfMonth?: true
  }

  export type ReportScheduleMinAggregateInputType = {
    id?: true
    name?: true
    frequency?: true
    dayOfMonth?: true
    enabled?: true
    lastSentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportScheduleMaxAggregateInputType = {
    id?: true
    name?: true
    frequency?: true
    dayOfMonth?: true
    enabled?: true
    lastSentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportScheduleCountAggregateInputType = {
    id?: true
    name?: true
    frequency?: true
    dayOfMonth?: true
    recipients?: true
    enabled?: true
    lastSentAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportSchedule to aggregate.
     */
    where?: ReportScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportSchedules to fetch.
     */
    orderBy?: ReportScheduleOrderByWithRelationInput | ReportScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReportSchedules
    **/
    _count?: true | ReportScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportScheduleMaxAggregateInputType
  }

  export type GetReportScheduleAggregateType<T extends ReportScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateReportSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportSchedule[P]>
      : GetScalarType<T[P], AggregateReportSchedule[P]>
  }




  export type ReportScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportScheduleWhereInput
    orderBy?: ReportScheduleOrderByWithAggregationInput | ReportScheduleOrderByWithAggregationInput[]
    by: ReportScheduleScalarFieldEnum[] | ReportScheduleScalarFieldEnum
    having?: ReportScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportScheduleCountAggregateInputType | true
    _avg?: ReportScheduleAvgAggregateInputType
    _sum?: ReportScheduleSumAggregateInputType
    _min?: ReportScheduleMinAggregateInputType
    _max?: ReportScheduleMaxAggregateInputType
  }

  export type ReportScheduleGroupByOutputType = {
    id: string
    name: string
    frequency: string
    dayOfMonth: number | null
    recipients: string[]
    enabled: boolean
    lastSentAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ReportScheduleCountAggregateOutputType | null
    _avg: ReportScheduleAvgAggregateOutputType | null
    _sum: ReportScheduleSumAggregateOutputType | null
    _min: ReportScheduleMinAggregateOutputType | null
    _max: ReportScheduleMaxAggregateOutputType | null
  }

  type GetReportScheduleGroupByPayload<T extends ReportScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ReportScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ReportScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    frequency?: boolean
    dayOfMonth?: boolean
    recipients?: boolean
    enabled?: boolean
    lastSentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reportSchedule"]>

  export type ReportScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    frequency?: boolean
    dayOfMonth?: boolean
    recipients?: boolean
    enabled?: boolean
    lastSentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reportSchedule"]>

  export type ReportScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    frequency?: boolean
    dayOfMonth?: boolean
    recipients?: boolean
    enabled?: boolean
    lastSentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reportSchedule"]>

  export type ReportScheduleSelectScalar = {
    id?: boolean
    name?: boolean
    frequency?: boolean
    dayOfMonth?: boolean
    recipients?: boolean
    enabled?: boolean
    lastSentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "frequency" | "dayOfMonth" | "recipients" | "enabled" | "lastSentAt" | "createdAt" | "updatedAt", ExtArgs["result"]["reportSchedule"]>

  export type $ReportSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReportSchedule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      frequency: string
      dayOfMonth: number | null
      recipients: string[]
      enabled: boolean
      lastSentAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reportSchedule"]>
    composites: {}
  }

  type ReportScheduleGetPayload<S extends boolean | null | undefined | ReportScheduleDefaultArgs> = $Result.GetResult<Prisma.$ReportSchedulePayload, S>

  type ReportScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportScheduleCountAggregateInputType | true
    }

  export interface ReportScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReportSchedule'], meta: { name: 'ReportSchedule' } }
    /**
     * Find zero or one ReportSchedule that matches the filter.
     * @param {ReportScheduleFindUniqueArgs} args - Arguments to find a ReportSchedule
     * @example
     * // Get one ReportSchedule
     * const reportSchedule = await prisma.reportSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportScheduleFindUniqueArgs>(args: SelectSubset<T, ReportScheduleFindUniqueArgs<ExtArgs>>): Prisma__ReportScheduleClient<$Result.GetResult<Prisma.$ReportSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReportSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportScheduleFindUniqueOrThrowArgs} args - Arguments to find a ReportSchedule
     * @example
     * // Get one ReportSchedule
     * const reportSchedule = await prisma.reportSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportScheduleClient<$Result.GetResult<Prisma.$ReportSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportScheduleFindFirstArgs} args - Arguments to find a ReportSchedule
     * @example
     * // Get one ReportSchedule
     * const reportSchedule = await prisma.reportSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportScheduleFindFirstArgs>(args?: SelectSubset<T, ReportScheduleFindFirstArgs<ExtArgs>>): Prisma__ReportScheduleClient<$Result.GetResult<Prisma.$ReportSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportScheduleFindFirstOrThrowArgs} args - Arguments to find a ReportSchedule
     * @example
     * // Get one ReportSchedule
     * const reportSchedule = await prisma.reportSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportScheduleClient<$Result.GetResult<Prisma.$ReportSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReportSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReportSchedules
     * const reportSchedules = await prisma.reportSchedule.findMany()
     * 
     * // Get first 10 ReportSchedules
     * const reportSchedules = await prisma.reportSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportScheduleWithIdOnly = await prisma.reportSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportScheduleFindManyArgs>(args?: SelectSubset<T, ReportScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReportSchedule.
     * @param {ReportScheduleCreateArgs} args - Arguments to create a ReportSchedule.
     * @example
     * // Create one ReportSchedule
     * const ReportSchedule = await prisma.reportSchedule.create({
     *   data: {
     *     // ... data to create a ReportSchedule
     *   }
     * })
     * 
     */
    create<T extends ReportScheduleCreateArgs>(args: SelectSubset<T, ReportScheduleCreateArgs<ExtArgs>>): Prisma__ReportScheduleClient<$Result.GetResult<Prisma.$ReportSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReportSchedules.
     * @param {ReportScheduleCreateManyArgs} args - Arguments to create many ReportSchedules.
     * @example
     * // Create many ReportSchedules
     * const reportSchedule = await prisma.reportSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportScheduleCreateManyArgs>(args?: SelectSubset<T, ReportScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReportSchedules and returns the data saved in the database.
     * @param {ReportScheduleCreateManyAndReturnArgs} args - Arguments to create many ReportSchedules.
     * @example
     * // Create many ReportSchedules
     * const reportSchedule = await prisma.reportSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReportSchedules and only return the `id`
     * const reportScheduleWithIdOnly = await prisma.reportSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReportSchedule.
     * @param {ReportScheduleDeleteArgs} args - Arguments to delete one ReportSchedule.
     * @example
     * // Delete one ReportSchedule
     * const ReportSchedule = await prisma.reportSchedule.delete({
     *   where: {
     *     // ... filter to delete one ReportSchedule
     *   }
     * })
     * 
     */
    delete<T extends ReportScheduleDeleteArgs>(args: SelectSubset<T, ReportScheduleDeleteArgs<ExtArgs>>): Prisma__ReportScheduleClient<$Result.GetResult<Prisma.$ReportSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReportSchedule.
     * @param {ReportScheduleUpdateArgs} args - Arguments to update one ReportSchedule.
     * @example
     * // Update one ReportSchedule
     * const reportSchedule = await prisma.reportSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportScheduleUpdateArgs>(args: SelectSubset<T, ReportScheduleUpdateArgs<ExtArgs>>): Prisma__ReportScheduleClient<$Result.GetResult<Prisma.$ReportSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReportSchedules.
     * @param {ReportScheduleDeleteManyArgs} args - Arguments to filter ReportSchedules to delete.
     * @example
     * // Delete a few ReportSchedules
     * const { count } = await prisma.reportSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportScheduleDeleteManyArgs>(args?: SelectSubset<T, ReportScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReportSchedules
     * const reportSchedule = await prisma.reportSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportScheduleUpdateManyArgs>(args: SelectSubset<T, ReportScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportSchedules and returns the data updated in the database.
     * @param {ReportScheduleUpdateManyAndReturnArgs} args - Arguments to update many ReportSchedules.
     * @example
     * // Update many ReportSchedules
     * const reportSchedule = await prisma.reportSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReportSchedules and only return the `id`
     * const reportScheduleWithIdOnly = await prisma.reportSchedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReportSchedule.
     * @param {ReportScheduleUpsertArgs} args - Arguments to update or create a ReportSchedule.
     * @example
     * // Update or create a ReportSchedule
     * const reportSchedule = await prisma.reportSchedule.upsert({
     *   create: {
     *     // ... data to create a ReportSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReportSchedule we want to update
     *   }
     * })
     */
    upsert<T extends ReportScheduleUpsertArgs>(args: SelectSubset<T, ReportScheduleUpsertArgs<ExtArgs>>): Prisma__ReportScheduleClient<$Result.GetResult<Prisma.$ReportSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReportSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportScheduleCountArgs} args - Arguments to filter ReportSchedules to count.
     * @example
     * // Count the number of ReportSchedules
     * const count = await prisma.reportSchedule.count({
     *   where: {
     *     // ... the filter for the ReportSchedules we want to count
     *   }
     * })
    **/
    count<T extends ReportScheduleCountArgs>(
      args?: Subset<T, ReportScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReportSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportScheduleAggregateArgs>(args: Subset<T, ReportScheduleAggregateArgs>): Prisma.PrismaPromise<GetReportScheduleAggregateType<T>>

    /**
     * Group by ReportSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportScheduleGroupByArgs} args - Group by arguments.
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
      T extends ReportScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ReportScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReportSchedule model
   */
  readonly fields: ReportScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReportSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ReportSchedule model
   */
  interface ReportScheduleFieldRefs {
    readonly id: FieldRef<"ReportSchedule", 'String'>
    readonly name: FieldRef<"ReportSchedule", 'String'>
    readonly frequency: FieldRef<"ReportSchedule", 'String'>
    readonly dayOfMonth: FieldRef<"ReportSchedule", 'Int'>
    readonly recipients: FieldRef<"ReportSchedule", 'String[]'>
    readonly enabled: FieldRef<"ReportSchedule", 'Boolean'>
    readonly lastSentAt: FieldRef<"ReportSchedule", 'DateTime'>
    readonly createdAt: FieldRef<"ReportSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"ReportSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReportSchedule findUnique
   */
  export type ReportScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportSchedule
     */
    select?: ReportScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportSchedule
     */
    omit?: ReportScheduleOmit<ExtArgs> | null
    /**
     * Filter, which ReportSchedule to fetch.
     */
    where: ReportScheduleWhereUniqueInput
  }

  /**
   * ReportSchedule findUniqueOrThrow
   */
  export type ReportScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportSchedule
     */
    select?: ReportScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportSchedule
     */
    omit?: ReportScheduleOmit<ExtArgs> | null
    /**
     * Filter, which ReportSchedule to fetch.
     */
    where: ReportScheduleWhereUniqueInput
  }

  /**
   * ReportSchedule findFirst
   */
  export type ReportScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportSchedule
     */
    select?: ReportScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportSchedule
     */
    omit?: ReportScheduleOmit<ExtArgs> | null
    /**
     * Filter, which ReportSchedule to fetch.
     */
    where?: ReportScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportSchedules to fetch.
     */
    orderBy?: ReportScheduleOrderByWithRelationInput | ReportScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportSchedules.
     */
    cursor?: ReportScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportSchedules.
     */
    distinct?: ReportScheduleScalarFieldEnum | ReportScheduleScalarFieldEnum[]
  }

  /**
   * ReportSchedule findFirstOrThrow
   */
  export type ReportScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportSchedule
     */
    select?: ReportScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportSchedule
     */
    omit?: ReportScheduleOmit<ExtArgs> | null
    /**
     * Filter, which ReportSchedule to fetch.
     */
    where?: ReportScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportSchedules to fetch.
     */
    orderBy?: ReportScheduleOrderByWithRelationInput | ReportScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportSchedules.
     */
    cursor?: ReportScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportSchedules.
     */
    distinct?: ReportScheduleScalarFieldEnum | ReportScheduleScalarFieldEnum[]
  }

  /**
   * ReportSchedule findMany
   */
  export type ReportScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportSchedule
     */
    select?: ReportScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportSchedule
     */
    omit?: ReportScheduleOmit<ExtArgs> | null
    /**
     * Filter, which ReportSchedules to fetch.
     */
    where?: ReportScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportSchedules to fetch.
     */
    orderBy?: ReportScheduleOrderByWithRelationInput | ReportScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReportSchedules.
     */
    cursor?: ReportScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportSchedules.
     */
    skip?: number
    distinct?: ReportScheduleScalarFieldEnum | ReportScheduleScalarFieldEnum[]
  }

  /**
   * ReportSchedule create
   */
  export type ReportScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportSchedule
     */
    select?: ReportScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportSchedule
     */
    omit?: ReportScheduleOmit<ExtArgs> | null
    /**
     * The data needed to create a ReportSchedule.
     */
    data: XOR<ReportScheduleCreateInput, ReportScheduleUncheckedCreateInput>
  }

  /**
   * ReportSchedule createMany
   */
  export type ReportScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReportSchedules.
     */
    data: ReportScheduleCreateManyInput | ReportScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportSchedule createManyAndReturn
   */
  export type ReportScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportSchedule
     */
    select?: ReportScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportSchedule
     */
    omit?: ReportScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many ReportSchedules.
     */
    data: ReportScheduleCreateManyInput | ReportScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportSchedule update
   */
  export type ReportScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportSchedule
     */
    select?: ReportScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportSchedule
     */
    omit?: ReportScheduleOmit<ExtArgs> | null
    /**
     * The data needed to update a ReportSchedule.
     */
    data: XOR<ReportScheduleUpdateInput, ReportScheduleUncheckedUpdateInput>
    /**
     * Choose, which ReportSchedule to update.
     */
    where: ReportScheduleWhereUniqueInput
  }

  /**
   * ReportSchedule updateMany
   */
  export type ReportScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReportSchedules.
     */
    data: XOR<ReportScheduleUpdateManyMutationInput, ReportScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ReportSchedules to update
     */
    where?: ReportScheduleWhereInput
    /**
     * Limit how many ReportSchedules to update.
     */
    limit?: number
  }

  /**
   * ReportSchedule updateManyAndReturn
   */
  export type ReportScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportSchedule
     */
    select?: ReportScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportSchedule
     */
    omit?: ReportScheduleOmit<ExtArgs> | null
    /**
     * The data used to update ReportSchedules.
     */
    data: XOR<ReportScheduleUpdateManyMutationInput, ReportScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ReportSchedules to update
     */
    where?: ReportScheduleWhereInput
    /**
     * Limit how many ReportSchedules to update.
     */
    limit?: number
  }

  /**
   * ReportSchedule upsert
   */
  export type ReportScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportSchedule
     */
    select?: ReportScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportSchedule
     */
    omit?: ReportScheduleOmit<ExtArgs> | null
    /**
     * The filter to search for the ReportSchedule to update in case it exists.
     */
    where: ReportScheduleWhereUniqueInput
    /**
     * In case the ReportSchedule found by the `where` argument doesn't exist, create a new ReportSchedule with this data.
     */
    create: XOR<ReportScheduleCreateInput, ReportScheduleUncheckedCreateInput>
    /**
     * In case the ReportSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportScheduleUpdateInput, ReportScheduleUncheckedUpdateInput>
  }

  /**
   * ReportSchedule delete
   */
  export type ReportScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportSchedule
     */
    select?: ReportScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportSchedule
     */
    omit?: ReportScheduleOmit<ExtArgs> | null
    /**
     * Filter which ReportSchedule to delete.
     */
    where: ReportScheduleWhereUniqueInput
  }

  /**
   * ReportSchedule deleteMany
   */
  export type ReportScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportSchedules to delete
     */
    where?: ReportScheduleWhereInput
    /**
     * Limit how many ReportSchedules to delete.
     */
    limit?: number
  }

  /**
   * ReportSchedule without action
   */
  export type ReportScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportSchedule
     */
    select?: ReportScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportSchedule
     */
    omit?: ReportScheduleOmit<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    fiscalYearStart: number | null
    confidenceThreshold: number | null
    approvalThreshold: number | null
    invoiceDigits: number | null
    paymentDueDays: number | null
    sessionTimeout: number | null
    minPasswordLength: number | null
    passwordExpiry: number | null
  }

  export type SettingsSumAggregateOutputType = {
    fiscalYearStart: number | null
    confidenceThreshold: number | null
    approvalThreshold: number | null
    invoiceDigits: number | null
    paymentDueDays: number | null
    sessionTimeout: number | null
    minPasswordLength: number | null
    passwordExpiry: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    companyName: string | null
    companyRegistration: string | null
    companyAddress: string | null
    companyPhone: string | null
    companyEmail: string | null
    fiscalYearStart: number | null
    autoOcr: boolean | null
    confidenceThreshold: number | null
    approvalRequired: boolean | null
    approvalThreshold: number | null
    invoicePrefix: string | null
    invoiceFormat: string | null
    invoiceDigits: number | null
    paymentDueNotification: boolean | null
    paymentDueDays: number | null
    newInvoiceNotification: boolean | null
    approvalNotification: boolean | null
    ocrCompleteNotification: boolean | null
    emailNotifications: boolean | null
    notificationEmail: string | null
    twoFactor: boolean | null
    sessionTimeout: number | null
    ipRestriction: boolean | null
    minPasswordLength: number | null
    requireUppercase: boolean | null
    requireNumbers: boolean | null
    requireSymbols: boolean | null
    passwordExpiry: number | null
    auditLog: boolean | null
    timestamp: boolean | null
    immutable: boolean | null
    searchRequirements: boolean | null
    retentionPeriod: string | null
    autoArchive: boolean | null
    autoBackup: boolean | null
    backupFrequency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    companyName: string | null
    companyRegistration: string | null
    companyAddress: string | null
    companyPhone: string | null
    companyEmail: string | null
    fiscalYearStart: number | null
    autoOcr: boolean | null
    confidenceThreshold: number | null
    approvalRequired: boolean | null
    approvalThreshold: number | null
    invoicePrefix: string | null
    invoiceFormat: string | null
    invoiceDigits: number | null
    paymentDueNotification: boolean | null
    paymentDueDays: number | null
    newInvoiceNotification: boolean | null
    approvalNotification: boolean | null
    ocrCompleteNotification: boolean | null
    emailNotifications: boolean | null
    notificationEmail: string | null
    twoFactor: boolean | null
    sessionTimeout: number | null
    ipRestriction: boolean | null
    minPasswordLength: number | null
    requireUppercase: boolean | null
    requireNumbers: boolean | null
    requireSymbols: boolean | null
    passwordExpiry: number | null
    auditLog: boolean | null
    timestamp: boolean | null
    immutable: boolean | null
    searchRequirements: boolean | null
    retentionPeriod: string | null
    autoArchive: boolean | null
    autoBackup: boolean | null
    backupFrequency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    companyName: number
    companyRegistration: number
    companyAddress: number
    companyPhone: number
    companyEmail: number
    fiscalYearStart: number
    autoOcr: number
    confidenceThreshold: number
    approvalRequired: number
    approvalThreshold: number
    invoicePrefix: number
    invoiceFormat: number
    invoiceDigits: number
    paymentDueNotification: number
    paymentDueDays: number
    newInvoiceNotification: number
    approvalNotification: number
    ocrCompleteNotification: number
    emailNotifications: number
    notificationEmail: number
    twoFactor: number
    sessionTimeout: number
    ipRestriction: number
    minPasswordLength: number
    requireUppercase: number
    requireNumbers: number
    requireSymbols: number
    passwordExpiry: number
    auditLog: number
    timestamp: number
    immutable: number
    searchRequirements: number
    retentionPeriod: number
    autoArchive: number
    autoBackup: number
    backupFrequency: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    fiscalYearStart?: true
    confidenceThreshold?: true
    approvalThreshold?: true
    invoiceDigits?: true
    paymentDueDays?: true
    sessionTimeout?: true
    minPasswordLength?: true
    passwordExpiry?: true
  }

  export type SettingsSumAggregateInputType = {
    fiscalYearStart?: true
    confidenceThreshold?: true
    approvalThreshold?: true
    invoiceDigits?: true
    paymentDueDays?: true
    sessionTimeout?: true
    minPasswordLength?: true
    passwordExpiry?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    companyName?: true
    companyRegistration?: true
    companyAddress?: true
    companyPhone?: true
    companyEmail?: true
    fiscalYearStart?: true
    autoOcr?: true
    confidenceThreshold?: true
    approvalRequired?: true
    approvalThreshold?: true
    invoicePrefix?: true
    invoiceFormat?: true
    invoiceDigits?: true
    paymentDueNotification?: true
    paymentDueDays?: true
    newInvoiceNotification?: true
    approvalNotification?: true
    ocrCompleteNotification?: true
    emailNotifications?: true
    notificationEmail?: true
    twoFactor?: true
    sessionTimeout?: true
    ipRestriction?: true
    minPasswordLength?: true
    requireUppercase?: true
    requireNumbers?: true
    requireSymbols?: true
    passwordExpiry?: true
    auditLog?: true
    timestamp?: true
    immutable?: true
    searchRequirements?: true
    retentionPeriod?: true
    autoArchive?: true
    autoBackup?: true
    backupFrequency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    companyName?: true
    companyRegistration?: true
    companyAddress?: true
    companyPhone?: true
    companyEmail?: true
    fiscalYearStart?: true
    autoOcr?: true
    confidenceThreshold?: true
    approvalRequired?: true
    approvalThreshold?: true
    invoicePrefix?: true
    invoiceFormat?: true
    invoiceDigits?: true
    paymentDueNotification?: true
    paymentDueDays?: true
    newInvoiceNotification?: true
    approvalNotification?: true
    ocrCompleteNotification?: true
    emailNotifications?: true
    notificationEmail?: true
    twoFactor?: true
    sessionTimeout?: true
    ipRestriction?: true
    minPasswordLength?: true
    requireUppercase?: true
    requireNumbers?: true
    requireSymbols?: true
    passwordExpiry?: true
    auditLog?: true
    timestamp?: true
    immutable?: true
    searchRequirements?: true
    retentionPeriod?: true
    autoArchive?: true
    autoBackup?: true
    backupFrequency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    companyName?: true
    companyRegistration?: true
    companyAddress?: true
    companyPhone?: true
    companyEmail?: true
    fiscalYearStart?: true
    autoOcr?: true
    confidenceThreshold?: true
    approvalRequired?: true
    approvalThreshold?: true
    invoicePrefix?: true
    invoiceFormat?: true
    invoiceDigits?: true
    paymentDueNotification?: true
    paymentDueDays?: true
    newInvoiceNotification?: true
    approvalNotification?: true
    ocrCompleteNotification?: true
    emailNotifications?: true
    notificationEmail?: true
    twoFactor?: true
    sessionTimeout?: true
    ipRestriction?: true
    minPasswordLength?: true
    requireUppercase?: true
    requireNumbers?: true
    requireSymbols?: true
    passwordExpiry?: true
    auditLog?: true
    timestamp?: true
    immutable?: true
    searchRequirements?: true
    retentionPeriod?: true
    autoArchive?: true
    autoBackup?: true
    backupFrequency?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    companyName: string
    companyRegistration: string
    companyAddress: string
    companyPhone: string
    companyEmail: string
    fiscalYearStart: number
    autoOcr: boolean
    confidenceThreshold: number
    approvalRequired: boolean
    approvalThreshold: number
    invoicePrefix: string
    invoiceFormat: string
    invoiceDigits: number
    paymentDueNotification: boolean
    paymentDueDays: number
    newInvoiceNotification: boolean
    approvalNotification: boolean
    ocrCompleteNotification: boolean
    emailNotifications: boolean
    notificationEmail: string | null
    twoFactor: boolean
    sessionTimeout: number
    ipRestriction: boolean
    minPasswordLength: number
    requireUppercase: boolean
    requireNumbers: boolean
    requireSymbols: boolean
    passwordExpiry: number
    auditLog: boolean
    timestamp: boolean
    immutable: boolean
    searchRequirements: boolean
    retentionPeriod: string
    autoArchive: boolean
    autoBackup: boolean
    backupFrequency: string
    createdAt: Date
    updatedAt: Date
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyRegistration?: boolean
    companyAddress?: boolean
    companyPhone?: boolean
    companyEmail?: boolean
    fiscalYearStart?: boolean
    autoOcr?: boolean
    confidenceThreshold?: boolean
    approvalRequired?: boolean
    approvalThreshold?: boolean
    invoicePrefix?: boolean
    invoiceFormat?: boolean
    invoiceDigits?: boolean
    paymentDueNotification?: boolean
    paymentDueDays?: boolean
    newInvoiceNotification?: boolean
    approvalNotification?: boolean
    ocrCompleteNotification?: boolean
    emailNotifications?: boolean
    notificationEmail?: boolean
    twoFactor?: boolean
    sessionTimeout?: boolean
    ipRestriction?: boolean
    minPasswordLength?: boolean
    requireUppercase?: boolean
    requireNumbers?: boolean
    requireSymbols?: boolean
    passwordExpiry?: boolean
    auditLog?: boolean
    timestamp?: boolean
    immutable?: boolean
    searchRequirements?: boolean
    retentionPeriod?: boolean
    autoArchive?: boolean
    autoBackup?: boolean
    backupFrequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyRegistration?: boolean
    companyAddress?: boolean
    companyPhone?: boolean
    companyEmail?: boolean
    fiscalYearStart?: boolean
    autoOcr?: boolean
    confidenceThreshold?: boolean
    approvalRequired?: boolean
    approvalThreshold?: boolean
    invoicePrefix?: boolean
    invoiceFormat?: boolean
    invoiceDigits?: boolean
    paymentDueNotification?: boolean
    paymentDueDays?: boolean
    newInvoiceNotification?: boolean
    approvalNotification?: boolean
    ocrCompleteNotification?: boolean
    emailNotifications?: boolean
    notificationEmail?: boolean
    twoFactor?: boolean
    sessionTimeout?: boolean
    ipRestriction?: boolean
    minPasswordLength?: boolean
    requireUppercase?: boolean
    requireNumbers?: boolean
    requireSymbols?: boolean
    passwordExpiry?: boolean
    auditLog?: boolean
    timestamp?: boolean
    immutable?: boolean
    searchRequirements?: boolean
    retentionPeriod?: boolean
    autoArchive?: boolean
    autoBackup?: boolean
    backupFrequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyRegistration?: boolean
    companyAddress?: boolean
    companyPhone?: boolean
    companyEmail?: boolean
    fiscalYearStart?: boolean
    autoOcr?: boolean
    confidenceThreshold?: boolean
    approvalRequired?: boolean
    approvalThreshold?: boolean
    invoicePrefix?: boolean
    invoiceFormat?: boolean
    invoiceDigits?: boolean
    paymentDueNotification?: boolean
    paymentDueDays?: boolean
    newInvoiceNotification?: boolean
    approvalNotification?: boolean
    ocrCompleteNotification?: boolean
    emailNotifications?: boolean
    notificationEmail?: boolean
    twoFactor?: boolean
    sessionTimeout?: boolean
    ipRestriction?: boolean
    minPasswordLength?: boolean
    requireUppercase?: boolean
    requireNumbers?: boolean
    requireSymbols?: boolean
    passwordExpiry?: boolean
    auditLog?: boolean
    timestamp?: boolean
    immutable?: boolean
    searchRequirements?: boolean
    retentionPeriod?: boolean
    autoArchive?: boolean
    autoBackup?: boolean
    backupFrequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    companyName?: boolean
    companyRegistration?: boolean
    companyAddress?: boolean
    companyPhone?: boolean
    companyEmail?: boolean
    fiscalYearStart?: boolean
    autoOcr?: boolean
    confidenceThreshold?: boolean
    approvalRequired?: boolean
    approvalThreshold?: boolean
    invoicePrefix?: boolean
    invoiceFormat?: boolean
    invoiceDigits?: boolean
    paymentDueNotification?: boolean
    paymentDueDays?: boolean
    newInvoiceNotification?: boolean
    approvalNotification?: boolean
    ocrCompleteNotification?: boolean
    emailNotifications?: boolean
    notificationEmail?: boolean
    twoFactor?: boolean
    sessionTimeout?: boolean
    ipRestriction?: boolean
    minPasswordLength?: boolean
    requireUppercase?: boolean
    requireNumbers?: boolean
    requireSymbols?: boolean
    passwordExpiry?: boolean
    auditLog?: boolean
    timestamp?: boolean
    immutable?: boolean
    searchRequirements?: boolean
    retentionPeriod?: boolean
    autoArchive?: boolean
    autoBackup?: boolean
    backupFrequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "companyRegistration" | "companyAddress" | "companyPhone" | "companyEmail" | "fiscalYearStart" | "autoOcr" | "confidenceThreshold" | "approvalRequired" | "approvalThreshold" | "invoicePrefix" | "invoiceFormat" | "invoiceDigits" | "paymentDueNotification" | "paymentDueDays" | "newInvoiceNotification" | "approvalNotification" | "ocrCompleteNotification" | "emailNotifications" | "notificationEmail" | "twoFactor" | "sessionTimeout" | "ipRestriction" | "minPasswordLength" | "requireUppercase" | "requireNumbers" | "requireSymbols" | "passwordExpiry" | "auditLog" | "timestamp" | "immutable" | "searchRequirements" | "retentionPeriod" | "autoArchive" | "autoBackup" | "backupFrequency" | "createdAt" | "updatedAt", ExtArgs["result"]["settings"]>

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyName: string
      companyRegistration: string
      companyAddress: string
      companyPhone: string
      companyEmail: string
      fiscalYearStart: number
      autoOcr: boolean
      confidenceThreshold: number
      approvalRequired: boolean
      approvalThreshold: number
      invoicePrefix: string
      invoiceFormat: string
      invoiceDigits: number
      paymentDueNotification: boolean
      paymentDueDays: number
      newInvoiceNotification: boolean
      approvalNotification: boolean
      ocrCompleteNotification: boolean
      emailNotifications: boolean
      notificationEmail: string | null
      twoFactor: boolean
      sessionTimeout: number
      ipRestriction: boolean
      minPasswordLength: number
      requireUppercase: boolean
      requireNumbers: boolean
      requireSymbols: boolean
      passwordExpiry: number
      auditLog: boolean
      timestamp: boolean
      immutable: boolean
      searchRequirements: boolean
      retentionPeriod: string
      autoArchive: boolean
      autoBackup: boolean
      backupFrequency: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
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
    updateManyAndReturn<T extends SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
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
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'String'>
    readonly companyName: FieldRef<"Settings", 'String'>
    readonly companyRegistration: FieldRef<"Settings", 'String'>
    readonly companyAddress: FieldRef<"Settings", 'String'>
    readonly companyPhone: FieldRef<"Settings", 'String'>
    readonly companyEmail: FieldRef<"Settings", 'String'>
    readonly fiscalYearStart: FieldRef<"Settings", 'Int'>
    readonly autoOcr: FieldRef<"Settings", 'Boolean'>
    readonly confidenceThreshold: FieldRef<"Settings", 'Float'>
    readonly approvalRequired: FieldRef<"Settings", 'Boolean'>
    readonly approvalThreshold: FieldRef<"Settings", 'Float'>
    readonly invoicePrefix: FieldRef<"Settings", 'String'>
    readonly invoiceFormat: FieldRef<"Settings", 'String'>
    readonly invoiceDigits: FieldRef<"Settings", 'Int'>
    readonly paymentDueNotification: FieldRef<"Settings", 'Boolean'>
    readonly paymentDueDays: FieldRef<"Settings", 'Int'>
    readonly newInvoiceNotification: FieldRef<"Settings", 'Boolean'>
    readonly approvalNotification: FieldRef<"Settings", 'Boolean'>
    readonly ocrCompleteNotification: FieldRef<"Settings", 'Boolean'>
    readonly emailNotifications: FieldRef<"Settings", 'Boolean'>
    readonly notificationEmail: FieldRef<"Settings", 'String'>
    readonly twoFactor: FieldRef<"Settings", 'Boolean'>
    readonly sessionTimeout: FieldRef<"Settings", 'Int'>
    readonly ipRestriction: FieldRef<"Settings", 'Boolean'>
    readonly minPasswordLength: FieldRef<"Settings", 'Int'>
    readonly requireUppercase: FieldRef<"Settings", 'Boolean'>
    readonly requireNumbers: FieldRef<"Settings", 'Boolean'>
    readonly requireSymbols: FieldRef<"Settings", 'Boolean'>
    readonly passwordExpiry: FieldRef<"Settings", 'Int'>
    readonly auditLog: FieldRef<"Settings", 'Boolean'>
    readonly timestamp: FieldRef<"Settings", 'Boolean'>
    readonly immutable: FieldRef<"Settings", 'Boolean'>
    readonly searchRequirements: FieldRef<"Settings", 'Boolean'>
    readonly retentionPeriod: FieldRef<"Settings", 'String'>
    readonly autoArchive: FieldRef<"Settings", 'Boolean'>
    readonly autoBackup: FieldRef<"Settings", 'Boolean'>
    readonly backupFrequency: FieldRef<"Settings", 'String'>
    readonly createdAt: FieldRef<"Settings", 'DateTime'>
    readonly updatedAt: FieldRef<"Settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings updateManyAndReturn
   */
  export type SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    registrationNumber: 'registrationNumber',
    address: 'address',
    phone: 'phone',
    email: 'email',
    contact: 'contact',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    clientId: 'clientId',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    budget: 'budget',
    actualAmount: 'actualAmount',
    manager: 'manager',
    members: 'members',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    invoiceNumber: 'invoiceNumber',
    issueDate: 'issueDate',
    dueDate: 'dueDate',
    transactionDate: 'transactionDate',
    transactionPeriodStart: 'transactionPeriodStart',
    transactionPeriodEnd: 'transactionPeriodEnd',
    currency: 'currency',
    subject: 'subject',
    purchaseOrderNumber: 'purchaseOrderNumber',
    projectName: 'projectName',
    projectId: 'projectId',
    projectCode: 'projectCode',
    supplier: 'supplier',
    supplierId: 'supplierId',
    supplierRegistrationNumber: 'supplierRegistrationNumber',
    supplierAddress: 'supplierAddress',
    supplierPhone: 'supplierPhone',
    supplierEmail: 'supplierEmail',
    supplierContactPerson: 'supplierContactPerson',
    billingTo: 'billingTo',
    billingToDepartment: 'billingToDepartment',
    billingToContactPerson: 'billingToContactPerson',
    subtotal: 'subtotal',
    taxAmount: 'taxAmount',
    amount: 'amount',
    taxExcludedAmount: 'taxExcludedAmount',
    taxExemptAmount: 'taxExemptAmount',
    nonTaxableAmount: 'nonTaxableAmount',
    paymentDueDate: 'paymentDueDate',
    paymentTerms: 'paymentTerms',
    bankName: 'bankName',
    bankBranchName: 'bankBranchName',
    bankAccountType: 'bankAccountType',
    bankAccountNumber: 'bankAccountNumber',
    bankAccountHolder: 'bankAccountHolder',
    transferFeePayer: 'transferFeePayer',
    normalizedSupplierName: 'normalizedSupplierName',
    matchingProjectName: 'matchingProjectName',
    matchingContactPerson: 'matchingContactPerson',
    receiptMethod: 'receiptMethod',
    receiptDateTime: 'receiptDateTime',
    registeredBy: 'registeredBy',
    receivedFromEmail: 'receivedFromEmail',
    fileHash: 'fileHash',
    storagePath: 'storagePath',
    ocrConfidenceScore: 'ocrConfidenceScore',
    documentVersion: 'documentVersion',
    filePath: 'filePath',
    fileName: 'fileName',
    fileSize: 'fileSize',
    project: 'project',
    status: 'status',
    ocrConfidence: 'ocrConfidence',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const InvoiceItemScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    name: 'name',
    description: 'description',
    quantity: 'quantity',
    unit: 'unit',
    unitPrice: 'unitPrice',
    amount: 'amount',
    taxRate: 'taxRate',
    taxAmount: 'taxAmount',
    remarks: 'remarks'
  };

  export type InvoiceItemScalarFieldEnum = (typeof InvoiceItemScalarFieldEnum)[keyof typeof InvoiceItemScalarFieldEnum]


  export const TaxBreakdownScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    taxRate: 'taxRate',
    taxableAmount: 'taxableAmount',
    taxAmount: 'taxAmount'
  };

  export type TaxBreakdownScalarFieldEnum = (typeof TaxBreakdownScalarFieldEnum)[keyof typeof TaxBreakdownScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    supplier: 'supplier',
    project: 'project',
    amount: 'amount',
    dueDate: 'dueDate',
    status: 'status',
    paidAt: 'paidAt',
    paymentMethod: 'paymentMethod',
    bankTransactionId: 'bankTransactionId',
    reconciliationStatus: 'reconciliationStatus',
    reconciliationNote: 'reconciliationNote',
    reconciliationDate: 'reconciliationDate',
    actualAmount: 'actualAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    message: 'message',
    relatedId: 'relatedId',
    relatedType: 'relatedType',
    priority: 'priority',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const MonthlyReportScalarFieldEnum: {
    id: 'id',
    period: 'period',
    totalInvoices: 'totalInvoices',
    totalAmount: 'totalAmount',
    statusBreakdown: 'statusBreakdown',
    supplierBreakdown: 'supplierBreakdown',
    generatedAt: 'generatedAt',
    filePath: 'filePath'
  };

  export type MonthlyReportScalarFieldEnum = (typeof MonthlyReportScalarFieldEnum)[keyof typeof MonthlyReportScalarFieldEnum]


  export const ReportScheduleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    frequency: 'frequency',
    dayOfMonth: 'dayOfMonth',
    recipients: 'recipients',
    enabled: 'enabled',
    lastSentAt: 'lastSentAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportScheduleScalarFieldEnum = (typeof ReportScheduleScalarFieldEnum)[keyof typeof ReportScheduleScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    companyRegistration: 'companyRegistration',
    companyAddress: 'companyAddress',
    companyPhone: 'companyPhone',
    companyEmail: 'companyEmail',
    fiscalYearStart: 'fiscalYearStart',
    autoOcr: 'autoOcr',
    confidenceThreshold: 'confidenceThreshold',
    approvalRequired: 'approvalRequired',
    approvalThreshold: 'approvalThreshold',
    invoicePrefix: 'invoicePrefix',
    invoiceFormat: 'invoiceFormat',
    invoiceDigits: 'invoiceDigits',
    paymentDueNotification: 'paymentDueNotification',
    paymentDueDays: 'paymentDueDays',
    newInvoiceNotification: 'newInvoiceNotification',
    approvalNotification: 'approvalNotification',
    ocrCompleteNotification: 'ocrCompleteNotification',
    emailNotifications: 'emailNotifications',
    notificationEmail: 'notificationEmail',
    twoFactor: 'twoFactor',
    sessionTimeout: 'sessionTimeout',
    ipRestriction: 'ipRestriction',
    minPasswordLength: 'minPasswordLength',
    requireUppercase: 'requireUppercase',
    requireNumbers: 'requireNumbers',
    requireSymbols: 'requireSymbols',
    passwordExpiry: 'passwordExpiry',
    auditLog: 'auditLog',
    timestamp: 'timestamp',
    immutable: 'immutable',
    searchRequirements: 'searchRequirements',
    retentionPeriod: 'retentionPeriod',
    autoArchive: 'autoArchive',
    autoBackup: 'autoBackup',
    backupFrequency: 'backupFrequency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    status?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    name?: StringFilter<"Supplier"> | string
    code?: StringFilter<"Supplier"> | string
    registrationNumber?: StringFilter<"Supplier"> | string
    address?: StringFilter<"Supplier"> | string
    phone?: StringFilter<"Supplier"> | string
    email?: StringFilter<"Supplier"> | string
    contact?: StringFilter<"Supplier"> | string
    status?: StringFilter<"Supplier"> | string
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    projects?: ProjectListRelationFilter
    invoices?: InvoiceListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    registrationNumber?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    name?: StringFilter<"Supplier"> | string
    registrationNumber?: StringFilter<"Supplier"> | string
    address?: StringFilter<"Supplier"> | string
    phone?: StringFilter<"Supplier"> | string
    email?: StringFilter<"Supplier"> | string
    contact?: StringFilter<"Supplier"> | string
    status?: StringFilter<"Supplier"> | string
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    projects?: ProjectListRelationFilter
    invoices?: InvoiceListRelationFilter
  }, "id" | "code">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    registrationNumber?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    name?: StringWithAggregatesFilter<"Supplier"> | string
    code?: StringWithAggregatesFilter<"Supplier"> | string
    registrationNumber?: StringWithAggregatesFilter<"Supplier"> | string
    address?: StringWithAggregatesFilter<"Supplier"> | string
    phone?: StringWithAggregatesFilter<"Supplier"> | string
    email?: StringWithAggregatesFilter<"Supplier"> | string
    contact?: StringWithAggregatesFilter<"Supplier"> | string
    status?: StringWithAggregatesFilter<"Supplier"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    code?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    clientId?: StringFilter<"Project"> | string
    status?: StringFilter<"Project"> | string
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    budget?: FloatNullableFilter<"Project"> | number | null
    actualAmount?: FloatFilter<"Project"> | number
    manager?: StringNullableFilter<"Project"> | string | null
    members?: StringNullableListFilter<"Project">
    tags?: StringNullableListFilter<"Project">
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    client?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    invoices?: InvoiceListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    clientId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    actualAmount?: SortOrder
    manager?: SortOrderInput | SortOrder
    members?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: SupplierOrderByWithRelationInput
    invoices?: InvoiceOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    clientId?: StringFilter<"Project"> | string
    status?: StringFilter<"Project"> | string
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    budget?: FloatNullableFilter<"Project"> | number | null
    actualAmount?: FloatFilter<"Project"> | number
    manager?: StringNullableFilter<"Project"> | string | null
    members?: StringNullableListFilter<"Project">
    tags?: StringNullableListFilter<"Project">
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    client?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    invoices?: InvoiceListRelationFilter
  }, "id" | "code">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    clientId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    actualAmount?: SortOrder
    manager?: SortOrderInput | SortOrder
    members?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    code?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    clientId?: StringWithAggregatesFilter<"Project"> | string
    status?: StringWithAggregatesFilter<"Project"> | string
    startDate?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    budget?: FloatNullableWithAggregatesFilter<"Project"> | number | null
    actualAmount?: FloatWithAggregatesFilter<"Project"> | number
    manager?: StringNullableWithAggregatesFilter<"Project"> | string | null
    members?: StringNullableListFilter<"Project">
    tags?: StringNullableListFilter<"Project">
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringNullableFilter<"Invoice"> | string | null
    issueDate?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    transactionDate?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    transactionPeriodStart?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    transactionPeriodEnd?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    currency?: StringNullableFilter<"Invoice"> | string | null
    subject?: StringNullableFilter<"Invoice"> | string | null
    purchaseOrderNumber?: StringNullableFilter<"Invoice"> | string | null
    projectName?: StringNullableFilter<"Invoice"> | string | null
    projectId?: StringNullableFilter<"Invoice"> | string | null
    projectCode?: StringNullableFilter<"Invoice"> | string | null
    supplier?: StringFilter<"Invoice"> | string
    supplierId?: StringFilter<"Invoice"> | string
    supplierRegistrationNumber?: StringNullableFilter<"Invoice"> | string | null
    supplierAddress?: StringNullableFilter<"Invoice"> | string | null
    supplierPhone?: StringNullableFilter<"Invoice"> | string | null
    supplierEmail?: StringNullableFilter<"Invoice"> | string | null
    supplierContactPerson?: StringNullableFilter<"Invoice"> | string | null
    billingTo?: StringNullableFilter<"Invoice"> | string | null
    billingToDepartment?: StringNullableFilter<"Invoice"> | string | null
    billingToContactPerson?: StringNullableFilter<"Invoice"> | string | null
    subtotal?: FloatNullableFilter<"Invoice"> | number | null
    taxAmount?: FloatFilter<"Invoice"> | number
    amount?: FloatFilter<"Invoice"> | number
    taxExcludedAmount?: FloatFilter<"Invoice"> | number
    taxExemptAmount?: FloatNullableFilter<"Invoice"> | number | null
    nonTaxableAmount?: FloatNullableFilter<"Invoice"> | number | null
    paymentDueDate?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    paymentTerms?: StringNullableFilter<"Invoice"> | string | null
    bankName?: StringNullableFilter<"Invoice"> | string | null
    bankBranchName?: StringNullableFilter<"Invoice"> | string | null
    bankAccountType?: StringNullableFilter<"Invoice"> | string | null
    bankAccountNumber?: StringNullableFilter<"Invoice"> | string | null
    bankAccountHolder?: StringNullableFilter<"Invoice"> | string | null
    transferFeePayer?: StringNullableFilter<"Invoice"> | string | null
    normalizedSupplierName?: StringNullableFilter<"Invoice"> | string | null
    matchingProjectName?: StringNullableFilter<"Invoice"> | string | null
    matchingContactPerson?: StringNullableFilter<"Invoice"> | string | null
    receiptMethod?: StringNullableFilter<"Invoice"> | string | null
    receiptDateTime?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    registeredBy?: StringNullableFilter<"Invoice"> | string | null
    receivedFromEmail?: StringNullableFilter<"Invoice"> | string | null
    fileHash?: StringNullableFilter<"Invoice"> | string | null
    storagePath?: StringNullableFilter<"Invoice"> | string | null
    ocrConfidenceScore?: FloatNullableFilter<"Invoice"> | number | null
    documentVersion?: IntNullableFilter<"Invoice"> | number | null
    filePath?: StringNullableFilter<"Invoice"> | string | null
    fileName?: StringNullableFilter<"Invoice"> | string | null
    fileSize?: IntNullableFilter<"Invoice"> | number | null
    project?: StringFilter<"Invoice"> | string
    status?: StringFilter<"Invoice"> | string
    ocrConfidence?: FloatNullableFilter<"Invoice"> | number | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    supplierRef?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
    projectRef?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    items?: InvoiceItemListRelationFilter
    taxBreakdowns?: TaxBreakdownListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    transactionDate?: SortOrderInput | SortOrder
    transactionPeriodStart?: SortOrderInput | SortOrder
    transactionPeriodEnd?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    purchaseOrderNumber?: SortOrderInput | SortOrder
    projectName?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    projectCode?: SortOrderInput | SortOrder
    supplier?: SortOrder
    supplierId?: SortOrder
    supplierRegistrationNumber?: SortOrderInput | SortOrder
    supplierAddress?: SortOrderInput | SortOrder
    supplierPhone?: SortOrderInput | SortOrder
    supplierEmail?: SortOrderInput | SortOrder
    supplierContactPerson?: SortOrderInput | SortOrder
    billingTo?: SortOrderInput | SortOrder
    billingToDepartment?: SortOrderInput | SortOrder
    billingToContactPerson?: SortOrderInput | SortOrder
    subtotal?: SortOrderInput | SortOrder
    taxAmount?: SortOrder
    amount?: SortOrder
    taxExcludedAmount?: SortOrder
    taxExemptAmount?: SortOrderInput | SortOrder
    nonTaxableAmount?: SortOrderInput | SortOrder
    paymentDueDate?: SortOrderInput | SortOrder
    paymentTerms?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    bankBranchName?: SortOrderInput | SortOrder
    bankAccountType?: SortOrderInput | SortOrder
    bankAccountNumber?: SortOrderInput | SortOrder
    bankAccountHolder?: SortOrderInput | SortOrder
    transferFeePayer?: SortOrderInput | SortOrder
    normalizedSupplierName?: SortOrderInput | SortOrder
    matchingProjectName?: SortOrderInput | SortOrder
    matchingContactPerson?: SortOrderInput | SortOrder
    receiptMethod?: SortOrderInput | SortOrder
    receiptDateTime?: SortOrderInput | SortOrder
    registeredBy?: SortOrderInput | SortOrder
    receivedFromEmail?: SortOrderInput | SortOrder
    fileHash?: SortOrderInput | SortOrder
    storagePath?: SortOrderInput | SortOrder
    ocrConfidenceScore?: SortOrderInput | SortOrder
    documentVersion?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    project?: SortOrder
    status?: SortOrder
    ocrConfidence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supplierRef?: SupplierOrderByWithRelationInput
    projectRef?: ProjectOrderByWithRelationInput
    items?: InvoiceItemOrderByRelationAggregateInput
    taxBreakdowns?: TaxBreakdownOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    invoiceNumber?: StringNullableFilter<"Invoice"> | string | null
    issueDate?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    transactionDate?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    transactionPeriodStart?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    transactionPeriodEnd?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    currency?: StringNullableFilter<"Invoice"> | string | null
    subject?: StringNullableFilter<"Invoice"> | string | null
    purchaseOrderNumber?: StringNullableFilter<"Invoice"> | string | null
    projectName?: StringNullableFilter<"Invoice"> | string | null
    projectId?: StringNullableFilter<"Invoice"> | string | null
    projectCode?: StringNullableFilter<"Invoice"> | string | null
    supplier?: StringFilter<"Invoice"> | string
    supplierId?: StringFilter<"Invoice"> | string
    supplierRegistrationNumber?: StringNullableFilter<"Invoice"> | string | null
    supplierAddress?: StringNullableFilter<"Invoice"> | string | null
    supplierPhone?: StringNullableFilter<"Invoice"> | string | null
    supplierEmail?: StringNullableFilter<"Invoice"> | string | null
    supplierContactPerson?: StringNullableFilter<"Invoice"> | string | null
    billingTo?: StringNullableFilter<"Invoice"> | string | null
    billingToDepartment?: StringNullableFilter<"Invoice"> | string | null
    billingToContactPerson?: StringNullableFilter<"Invoice"> | string | null
    subtotal?: FloatNullableFilter<"Invoice"> | number | null
    taxAmount?: FloatFilter<"Invoice"> | number
    amount?: FloatFilter<"Invoice"> | number
    taxExcludedAmount?: FloatFilter<"Invoice"> | number
    taxExemptAmount?: FloatNullableFilter<"Invoice"> | number | null
    nonTaxableAmount?: FloatNullableFilter<"Invoice"> | number | null
    paymentDueDate?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    paymentTerms?: StringNullableFilter<"Invoice"> | string | null
    bankName?: StringNullableFilter<"Invoice"> | string | null
    bankBranchName?: StringNullableFilter<"Invoice"> | string | null
    bankAccountType?: StringNullableFilter<"Invoice"> | string | null
    bankAccountNumber?: StringNullableFilter<"Invoice"> | string | null
    bankAccountHolder?: StringNullableFilter<"Invoice"> | string | null
    transferFeePayer?: StringNullableFilter<"Invoice"> | string | null
    normalizedSupplierName?: StringNullableFilter<"Invoice"> | string | null
    matchingProjectName?: StringNullableFilter<"Invoice"> | string | null
    matchingContactPerson?: StringNullableFilter<"Invoice"> | string | null
    receiptMethod?: StringNullableFilter<"Invoice"> | string | null
    receiptDateTime?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    registeredBy?: StringNullableFilter<"Invoice"> | string | null
    receivedFromEmail?: StringNullableFilter<"Invoice"> | string | null
    fileHash?: StringNullableFilter<"Invoice"> | string | null
    storagePath?: StringNullableFilter<"Invoice"> | string | null
    ocrConfidenceScore?: FloatNullableFilter<"Invoice"> | number | null
    documentVersion?: IntNullableFilter<"Invoice"> | number | null
    filePath?: StringNullableFilter<"Invoice"> | string | null
    fileName?: StringNullableFilter<"Invoice"> | string | null
    fileSize?: IntNullableFilter<"Invoice"> | number | null
    project?: StringFilter<"Invoice"> | string
    status?: StringFilter<"Invoice"> | string
    ocrConfidence?: FloatNullableFilter<"Invoice"> | number | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    supplierRef?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
    projectRef?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    items?: InvoiceItemListRelationFilter
    taxBreakdowns?: TaxBreakdownListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    transactionDate?: SortOrderInput | SortOrder
    transactionPeriodStart?: SortOrderInput | SortOrder
    transactionPeriodEnd?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    purchaseOrderNumber?: SortOrderInput | SortOrder
    projectName?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    projectCode?: SortOrderInput | SortOrder
    supplier?: SortOrder
    supplierId?: SortOrder
    supplierRegistrationNumber?: SortOrderInput | SortOrder
    supplierAddress?: SortOrderInput | SortOrder
    supplierPhone?: SortOrderInput | SortOrder
    supplierEmail?: SortOrderInput | SortOrder
    supplierContactPerson?: SortOrderInput | SortOrder
    billingTo?: SortOrderInput | SortOrder
    billingToDepartment?: SortOrderInput | SortOrder
    billingToContactPerson?: SortOrderInput | SortOrder
    subtotal?: SortOrderInput | SortOrder
    taxAmount?: SortOrder
    amount?: SortOrder
    taxExcludedAmount?: SortOrder
    taxExemptAmount?: SortOrderInput | SortOrder
    nonTaxableAmount?: SortOrderInput | SortOrder
    paymentDueDate?: SortOrderInput | SortOrder
    paymentTerms?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    bankBranchName?: SortOrderInput | SortOrder
    bankAccountType?: SortOrderInput | SortOrder
    bankAccountNumber?: SortOrderInput | SortOrder
    bankAccountHolder?: SortOrderInput | SortOrder
    transferFeePayer?: SortOrderInput | SortOrder
    normalizedSupplierName?: SortOrderInput | SortOrder
    matchingProjectName?: SortOrderInput | SortOrder
    matchingContactPerson?: SortOrderInput | SortOrder
    receiptMethod?: SortOrderInput | SortOrder
    receiptDateTime?: SortOrderInput | SortOrder
    registeredBy?: SortOrderInput | SortOrder
    receivedFromEmail?: SortOrderInput | SortOrder
    fileHash?: SortOrderInput | SortOrder
    storagePath?: SortOrderInput | SortOrder
    ocrConfidenceScore?: SortOrderInput | SortOrder
    documentVersion?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    project?: SortOrder
    status?: SortOrder
    ocrConfidence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    invoiceNumber?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    issueDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    transactionDate?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    transactionPeriodStart?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    transactionPeriodEnd?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    currency?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    subject?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    purchaseOrderNumber?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    projectName?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    projectId?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    projectCode?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    supplier?: StringWithAggregatesFilter<"Invoice"> | string
    supplierId?: StringWithAggregatesFilter<"Invoice"> | string
    supplierRegistrationNumber?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    supplierAddress?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    supplierPhone?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    supplierEmail?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    supplierContactPerson?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    billingTo?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    billingToDepartment?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    billingToContactPerson?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    subtotal?: FloatNullableWithAggregatesFilter<"Invoice"> | number | null
    taxAmount?: FloatWithAggregatesFilter<"Invoice"> | number
    amount?: FloatWithAggregatesFilter<"Invoice"> | number
    taxExcludedAmount?: FloatWithAggregatesFilter<"Invoice"> | number
    taxExemptAmount?: FloatNullableWithAggregatesFilter<"Invoice"> | number | null
    nonTaxableAmount?: FloatNullableWithAggregatesFilter<"Invoice"> | number | null
    paymentDueDate?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    paymentTerms?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    bankName?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    bankBranchName?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    bankAccountType?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    bankAccountNumber?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    bankAccountHolder?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    transferFeePayer?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    normalizedSupplierName?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    matchingProjectName?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    matchingContactPerson?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    receiptMethod?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    receiptDateTime?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    registeredBy?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    receivedFromEmail?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    fileHash?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    storagePath?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    ocrConfidenceScore?: FloatNullableWithAggregatesFilter<"Invoice"> | number | null
    documentVersion?: IntNullableWithAggregatesFilter<"Invoice"> | number | null
    filePath?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    fileName?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    fileSize?: IntNullableWithAggregatesFilter<"Invoice"> | number | null
    project?: StringWithAggregatesFilter<"Invoice"> | string
    status?: StringWithAggregatesFilter<"Invoice"> | string
    ocrConfidence?: FloatNullableWithAggregatesFilter<"Invoice"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type InvoiceItemWhereInput = {
    AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    OR?: InvoiceItemWhereInput[]
    NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    id?: StringFilter<"InvoiceItem"> | string
    invoiceId?: StringFilter<"InvoiceItem"> | string
    name?: StringFilter<"InvoiceItem"> | string
    description?: StringNullableFilter<"InvoiceItem"> | string | null
    quantity?: FloatFilter<"InvoiceItem"> | number
    unit?: StringNullableFilter<"InvoiceItem"> | string | null
    unitPrice?: FloatFilter<"InvoiceItem"> | number
    amount?: FloatFilter<"InvoiceItem"> | number
    taxRate?: FloatNullableFilter<"InvoiceItem"> | number | null
    taxAmount?: FloatNullableFilter<"InvoiceItem"> | number | null
    remarks?: StringNullableFilter<"InvoiceItem"> | string | null
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }

  export type InvoiceItemOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unit?: SortOrderInput | SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    taxRate?: SortOrderInput | SortOrder
    taxAmount?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type InvoiceItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    OR?: InvoiceItemWhereInput[]
    NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    invoiceId?: StringFilter<"InvoiceItem"> | string
    name?: StringFilter<"InvoiceItem"> | string
    description?: StringNullableFilter<"InvoiceItem"> | string | null
    quantity?: FloatFilter<"InvoiceItem"> | number
    unit?: StringNullableFilter<"InvoiceItem"> | string | null
    unitPrice?: FloatFilter<"InvoiceItem"> | number
    amount?: FloatFilter<"InvoiceItem"> | number
    taxRate?: FloatNullableFilter<"InvoiceItem"> | number | null
    taxAmount?: FloatNullableFilter<"InvoiceItem"> | number | null
    remarks?: StringNullableFilter<"InvoiceItem"> | string | null
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }, "id">

  export type InvoiceItemOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unit?: SortOrderInput | SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    taxRate?: SortOrderInput | SortOrder
    taxAmount?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: InvoiceItemCountOrderByAggregateInput
    _avg?: InvoiceItemAvgOrderByAggregateInput
    _max?: InvoiceItemMaxOrderByAggregateInput
    _min?: InvoiceItemMinOrderByAggregateInput
    _sum?: InvoiceItemSumOrderByAggregateInput
  }

  export type InvoiceItemScalarWhereWithAggregatesInput = {
    AND?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
    OR?: InvoiceItemScalarWhereWithAggregatesInput[]
    NOT?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvoiceItem"> | string
    invoiceId?: StringWithAggregatesFilter<"InvoiceItem"> | string
    name?: StringWithAggregatesFilter<"InvoiceItem"> | string
    description?: StringNullableWithAggregatesFilter<"InvoiceItem"> | string | null
    quantity?: FloatWithAggregatesFilter<"InvoiceItem"> | number
    unit?: StringNullableWithAggregatesFilter<"InvoiceItem"> | string | null
    unitPrice?: FloatWithAggregatesFilter<"InvoiceItem"> | number
    amount?: FloatWithAggregatesFilter<"InvoiceItem"> | number
    taxRate?: FloatNullableWithAggregatesFilter<"InvoiceItem"> | number | null
    taxAmount?: FloatNullableWithAggregatesFilter<"InvoiceItem"> | number | null
    remarks?: StringNullableWithAggregatesFilter<"InvoiceItem"> | string | null
  }

  export type TaxBreakdownWhereInput = {
    AND?: TaxBreakdownWhereInput | TaxBreakdownWhereInput[]
    OR?: TaxBreakdownWhereInput[]
    NOT?: TaxBreakdownWhereInput | TaxBreakdownWhereInput[]
    id?: StringFilter<"TaxBreakdown"> | string
    invoiceId?: StringFilter<"TaxBreakdown"> | string
    taxRate?: FloatFilter<"TaxBreakdown"> | number
    taxableAmount?: FloatFilter<"TaxBreakdown"> | number
    taxAmount?: FloatFilter<"TaxBreakdown"> | number
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }

  export type TaxBreakdownOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    taxRate?: SortOrder
    taxableAmount?: SortOrder
    taxAmount?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type TaxBreakdownWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaxBreakdownWhereInput | TaxBreakdownWhereInput[]
    OR?: TaxBreakdownWhereInput[]
    NOT?: TaxBreakdownWhereInput | TaxBreakdownWhereInput[]
    invoiceId?: StringFilter<"TaxBreakdown"> | string
    taxRate?: FloatFilter<"TaxBreakdown"> | number
    taxableAmount?: FloatFilter<"TaxBreakdown"> | number
    taxAmount?: FloatFilter<"TaxBreakdown"> | number
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }, "id">

  export type TaxBreakdownOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    taxRate?: SortOrder
    taxableAmount?: SortOrder
    taxAmount?: SortOrder
    _count?: TaxBreakdownCountOrderByAggregateInput
    _avg?: TaxBreakdownAvgOrderByAggregateInput
    _max?: TaxBreakdownMaxOrderByAggregateInput
    _min?: TaxBreakdownMinOrderByAggregateInput
    _sum?: TaxBreakdownSumOrderByAggregateInput
  }

  export type TaxBreakdownScalarWhereWithAggregatesInput = {
    AND?: TaxBreakdownScalarWhereWithAggregatesInput | TaxBreakdownScalarWhereWithAggregatesInput[]
    OR?: TaxBreakdownScalarWhereWithAggregatesInput[]
    NOT?: TaxBreakdownScalarWhereWithAggregatesInput | TaxBreakdownScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaxBreakdown"> | string
    invoiceId?: StringWithAggregatesFilter<"TaxBreakdown"> | string
    taxRate?: FloatWithAggregatesFilter<"TaxBreakdown"> | number
    taxableAmount?: FloatWithAggregatesFilter<"TaxBreakdown"> | number
    taxAmount?: FloatWithAggregatesFilter<"TaxBreakdown"> | number
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    invoiceId?: StringFilter<"Payment"> | string
    supplier?: StringFilter<"Payment"> | string
    project?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    status?: StringFilter<"Payment"> | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    bankTransactionId?: StringNullableFilter<"Payment"> | string | null
    reconciliationStatus?: StringNullableFilter<"Payment"> | string | null
    reconciliationNote?: StringNullableFilter<"Payment"> | string | null
    reconciliationDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    actualAmount?: FloatNullableFilter<"Payment"> | number | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    supplier?: SortOrder
    project?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    bankTransactionId?: SortOrderInput | SortOrder
    reconciliationStatus?: SortOrderInput | SortOrder
    reconciliationNote?: SortOrderInput | SortOrder
    reconciliationDate?: SortOrderInput | SortOrder
    actualAmount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    invoiceId?: StringFilter<"Payment"> | string
    supplier?: StringFilter<"Payment"> | string
    project?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    status?: StringFilter<"Payment"> | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    bankTransactionId?: StringNullableFilter<"Payment"> | string | null
    reconciliationStatus?: StringNullableFilter<"Payment"> | string | null
    reconciliationNote?: StringNullableFilter<"Payment"> | string | null
    reconciliationDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    actualAmount?: FloatNullableFilter<"Payment"> | number | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    supplier?: SortOrder
    project?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    bankTransactionId?: SortOrderInput | SortOrder
    reconciliationStatus?: SortOrderInput | SortOrder
    reconciliationNote?: SortOrderInput | SortOrder
    reconciliationDate?: SortOrderInput | SortOrder
    actualAmount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    invoiceId?: StringWithAggregatesFilter<"Payment"> | string
    supplier?: StringWithAggregatesFilter<"Payment"> | string
    project?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    dueDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    paymentMethod?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    bankTransactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    reconciliationStatus?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    reconciliationNote?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    reconciliationDate?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    actualAmount?: FloatNullableWithAggregatesFilter<"Payment"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    relatedId?: StringNullableFilter<"Notification"> | string | null
    relatedType?: StringNullableFilter<"Notification"> | string | null
    priority?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    relatedId?: SortOrderInput | SortOrder
    relatedType?: SortOrderInput | SortOrder
    priority?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    relatedId?: StringNullableFilter<"Notification"> | string | null
    relatedType?: StringNullableFilter<"Notification"> | string | null
    priority?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    relatedId?: SortOrderInput | SortOrder
    relatedType?: SortOrderInput | SortOrder
    priority?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    relatedId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    relatedType?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    priority?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type MonthlyReportWhereInput = {
    AND?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    OR?: MonthlyReportWhereInput[]
    NOT?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    id?: StringFilter<"MonthlyReport"> | string
    period?: StringFilter<"MonthlyReport"> | string
    totalInvoices?: IntFilter<"MonthlyReport"> | number
    totalAmount?: FloatFilter<"MonthlyReport"> | number
    statusBreakdown?: JsonFilter<"MonthlyReport">
    supplierBreakdown?: JsonFilter<"MonthlyReport">
    generatedAt?: DateTimeFilter<"MonthlyReport"> | Date | string
    filePath?: StringNullableFilter<"MonthlyReport"> | string | null
  }

  export type MonthlyReportOrderByWithRelationInput = {
    id?: SortOrder
    period?: SortOrder
    totalInvoices?: SortOrder
    totalAmount?: SortOrder
    statusBreakdown?: SortOrder
    supplierBreakdown?: SortOrder
    generatedAt?: SortOrder
    filePath?: SortOrderInput | SortOrder
  }

  export type MonthlyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    OR?: MonthlyReportWhereInput[]
    NOT?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    period?: StringFilter<"MonthlyReport"> | string
    totalInvoices?: IntFilter<"MonthlyReport"> | number
    totalAmount?: FloatFilter<"MonthlyReport"> | number
    statusBreakdown?: JsonFilter<"MonthlyReport">
    supplierBreakdown?: JsonFilter<"MonthlyReport">
    generatedAt?: DateTimeFilter<"MonthlyReport"> | Date | string
    filePath?: StringNullableFilter<"MonthlyReport"> | string | null
  }, "id">

  export type MonthlyReportOrderByWithAggregationInput = {
    id?: SortOrder
    period?: SortOrder
    totalInvoices?: SortOrder
    totalAmount?: SortOrder
    statusBreakdown?: SortOrder
    supplierBreakdown?: SortOrder
    generatedAt?: SortOrder
    filePath?: SortOrderInput | SortOrder
    _count?: MonthlyReportCountOrderByAggregateInput
    _avg?: MonthlyReportAvgOrderByAggregateInput
    _max?: MonthlyReportMaxOrderByAggregateInput
    _min?: MonthlyReportMinOrderByAggregateInput
    _sum?: MonthlyReportSumOrderByAggregateInput
  }

  export type MonthlyReportScalarWhereWithAggregatesInput = {
    AND?: MonthlyReportScalarWhereWithAggregatesInput | MonthlyReportScalarWhereWithAggregatesInput[]
    OR?: MonthlyReportScalarWhereWithAggregatesInput[]
    NOT?: MonthlyReportScalarWhereWithAggregatesInput | MonthlyReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonthlyReport"> | string
    period?: StringWithAggregatesFilter<"MonthlyReport"> | string
    totalInvoices?: IntWithAggregatesFilter<"MonthlyReport"> | number
    totalAmount?: FloatWithAggregatesFilter<"MonthlyReport"> | number
    statusBreakdown?: JsonWithAggregatesFilter<"MonthlyReport">
    supplierBreakdown?: JsonWithAggregatesFilter<"MonthlyReport">
    generatedAt?: DateTimeWithAggregatesFilter<"MonthlyReport"> | Date | string
    filePath?: StringNullableWithAggregatesFilter<"MonthlyReport"> | string | null
  }

  export type ReportScheduleWhereInput = {
    AND?: ReportScheduleWhereInput | ReportScheduleWhereInput[]
    OR?: ReportScheduleWhereInput[]
    NOT?: ReportScheduleWhereInput | ReportScheduleWhereInput[]
    id?: StringFilter<"ReportSchedule"> | string
    name?: StringFilter<"ReportSchedule"> | string
    frequency?: StringFilter<"ReportSchedule"> | string
    dayOfMonth?: IntNullableFilter<"ReportSchedule"> | number | null
    recipients?: StringNullableListFilter<"ReportSchedule">
    enabled?: BoolFilter<"ReportSchedule"> | boolean
    lastSentAt?: DateTimeNullableFilter<"ReportSchedule"> | Date | string | null
    createdAt?: DateTimeFilter<"ReportSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"ReportSchedule"> | Date | string
  }

  export type ReportScheduleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    frequency?: SortOrder
    dayOfMonth?: SortOrderInput | SortOrder
    recipients?: SortOrder
    enabled?: SortOrder
    lastSentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportScheduleWhereInput | ReportScheduleWhereInput[]
    OR?: ReportScheduleWhereInput[]
    NOT?: ReportScheduleWhereInput | ReportScheduleWhereInput[]
    name?: StringFilter<"ReportSchedule"> | string
    frequency?: StringFilter<"ReportSchedule"> | string
    dayOfMonth?: IntNullableFilter<"ReportSchedule"> | number | null
    recipients?: StringNullableListFilter<"ReportSchedule">
    enabled?: BoolFilter<"ReportSchedule"> | boolean
    lastSentAt?: DateTimeNullableFilter<"ReportSchedule"> | Date | string | null
    createdAt?: DateTimeFilter<"ReportSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"ReportSchedule"> | Date | string
  }, "id">

  export type ReportScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    frequency?: SortOrder
    dayOfMonth?: SortOrderInput | SortOrder
    recipients?: SortOrder
    enabled?: SortOrder
    lastSentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportScheduleCountOrderByAggregateInput
    _avg?: ReportScheduleAvgOrderByAggregateInput
    _max?: ReportScheduleMaxOrderByAggregateInput
    _min?: ReportScheduleMinOrderByAggregateInput
    _sum?: ReportScheduleSumOrderByAggregateInput
  }

  export type ReportScheduleScalarWhereWithAggregatesInput = {
    AND?: ReportScheduleScalarWhereWithAggregatesInput | ReportScheduleScalarWhereWithAggregatesInput[]
    OR?: ReportScheduleScalarWhereWithAggregatesInput[]
    NOT?: ReportScheduleScalarWhereWithAggregatesInput | ReportScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReportSchedule"> | string
    name?: StringWithAggregatesFilter<"ReportSchedule"> | string
    frequency?: StringWithAggregatesFilter<"ReportSchedule"> | string
    dayOfMonth?: IntNullableWithAggregatesFilter<"ReportSchedule"> | number | null
    recipients?: StringNullableListFilter<"ReportSchedule">
    enabled?: BoolWithAggregatesFilter<"ReportSchedule"> | boolean
    lastSentAt?: DateTimeNullableWithAggregatesFilter<"ReportSchedule"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReportSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReportSchedule"> | Date | string
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: StringFilter<"Settings"> | string
    companyName?: StringFilter<"Settings"> | string
    companyRegistration?: StringFilter<"Settings"> | string
    companyAddress?: StringFilter<"Settings"> | string
    companyPhone?: StringFilter<"Settings"> | string
    companyEmail?: StringFilter<"Settings"> | string
    fiscalYearStart?: IntFilter<"Settings"> | number
    autoOcr?: BoolFilter<"Settings"> | boolean
    confidenceThreshold?: FloatFilter<"Settings"> | number
    approvalRequired?: BoolFilter<"Settings"> | boolean
    approvalThreshold?: FloatFilter<"Settings"> | number
    invoicePrefix?: StringFilter<"Settings"> | string
    invoiceFormat?: StringFilter<"Settings"> | string
    invoiceDigits?: IntFilter<"Settings"> | number
    paymentDueNotification?: BoolFilter<"Settings"> | boolean
    paymentDueDays?: IntFilter<"Settings"> | number
    newInvoiceNotification?: BoolFilter<"Settings"> | boolean
    approvalNotification?: BoolFilter<"Settings"> | boolean
    ocrCompleteNotification?: BoolFilter<"Settings"> | boolean
    emailNotifications?: BoolFilter<"Settings"> | boolean
    notificationEmail?: StringNullableFilter<"Settings"> | string | null
    twoFactor?: BoolFilter<"Settings"> | boolean
    sessionTimeout?: IntFilter<"Settings"> | number
    ipRestriction?: BoolFilter<"Settings"> | boolean
    minPasswordLength?: IntFilter<"Settings"> | number
    requireUppercase?: BoolFilter<"Settings"> | boolean
    requireNumbers?: BoolFilter<"Settings"> | boolean
    requireSymbols?: BoolFilter<"Settings"> | boolean
    passwordExpiry?: IntFilter<"Settings"> | number
    auditLog?: BoolFilter<"Settings"> | boolean
    timestamp?: BoolFilter<"Settings"> | boolean
    immutable?: BoolFilter<"Settings"> | boolean
    searchRequirements?: BoolFilter<"Settings"> | boolean
    retentionPeriod?: StringFilter<"Settings"> | string
    autoArchive?: BoolFilter<"Settings"> | boolean
    autoBackup?: BoolFilter<"Settings"> | boolean
    backupFrequency?: StringFilter<"Settings"> | string
    createdAt?: DateTimeFilter<"Settings"> | Date | string
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyRegistration?: SortOrder
    companyAddress?: SortOrder
    companyPhone?: SortOrder
    companyEmail?: SortOrder
    fiscalYearStart?: SortOrder
    autoOcr?: SortOrder
    confidenceThreshold?: SortOrder
    approvalRequired?: SortOrder
    approvalThreshold?: SortOrder
    invoicePrefix?: SortOrder
    invoiceFormat?: SortOrder
    invoiceDigits?: SortOrder
    paymentDueNotification?: SortOrder
    paymentDueDays?: SortOrder
    newInvoiceNotification?: SortOrder
    approvalNotification?: SortOrder
    ocrCompleteNotification?: SortOrder
    emailNotifications?: SortOrder
    notificationEmail?: SortOrderInput | SortOrder
    twoFactor?: SortOrder
    sessionTimeout?: SortOrder
    ipRestriction?: SortOrder
    minPasswordLength?: SortOrder
    requireUppercase?: SortOrder
    requireNumbers?: SortOrder
    requireSymbols?: SortOrder
    passwordExpiry?: SortOrder
    auditLog?: SortOrder
    timestamp?: SortOrder
    immutable?: SortOrder
    searchRequirements?: SortOrder
    retentionPeriod?: SortOrder
    autoArchive?: SortOrder
    autoBackup?: SortOrder
    backupFrequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    companyName?: StringFilter<"Settings"> | string
    companyRegistration?: StringFilter<"Settings"> | string
    companyAddress?: StringFilter<"Settings"> | string
    companyPhone?: StringFilter<"Settings"> | string
    companyEmail?: StringFilter<"Settings"> | string
    fiscalYearStart?: IntFilter<"Settings"> | number
    autoOcr?: BoolFilter<"Settings"> | boolean
    confidenceThreshold?: FloatFilter<"Settings"> | number
    approvalRequired?: BoolFilter<"Settings"> | boolean
    approvalThreshold?: FloatFilter<"Settings"> | number
    invoicePrefix?: StringFilter<"Settings"> | string
    invoiceFormat?: StringFilter<"Settings"> | string
    invoiceDigits?: IntFilter<"Settings"> | number
    paymentDueNotification?: BoolFilter<"Settings"> | boolean
    paymentDueDays?: IntFilter<"Settings"> | number
    newInvoiceNotification?: BoolFilter<"Settings"> | boolean
    approvalNotification?: BoolFilter<"Settings"> | boolean
    ocrCompleteNotification?: BoolFilter<"Settings"> | boolean
    emailNotifications?: BoolFilter<"Settings"> | boolean
    notificationEmail?: StringNullableFilter<"Settings"> | string | null
    twoFactor?: BoolFilter<"Settings"> | boolean
    sessionTimeout?: IntFilter<"Settings"> | number
    ipRestriction?: BoolFilter<"Settings"> | boolean
    minPasswordLength?: IntFilter<"Settings"> | number
    requireUppercase?: BoolFilter<"Settings"> | boolean
    requireNumbers?: BoolFilter<"Settings"> | boolean
    requireSymbols?: BoolFilter<"Settings"> | boolean
    passwordExpiry?: IntFilter<"Settings"> | number
    auditLog?: BoolFilter<"Settings"> | boolean
    timestamp?: BoolFilter<"Settings"> | boolean
    immutable?: BoolFilter<"Settings"> | boolean
    searchRequirements?: BoolFilter<"Settings"> | boolean
    retentionPeriod?: StringFilter<"Settings"> | string
    autoArchive?: BoolFilter<"Settings"> | boolean
    autoBackup?: BoolFilter<"Settings"> | boolean
    backupFrequency?: StringFilter<"Settings"> | string
    createdAt?: DateTimeFilter<"Settings"> | Date | string
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
  }, "id">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyRegistration?: SortOrder
    companyAddress?: SortOrder
    companyPhone?: SortOrder
    companyEmail?: SortOrder
    fiscalYearStart?: SortOrder
    autoOcr?: SortOrder
    confidenceThreshold?: SortOrder
    approvalRequired?: SortOrder
    approvalThreshold?: SortOrder
    invoicePrefix?: SortOrder
    invoiceFormat?: SortOrder
    invoiceDigits?: SortOrder
    paymentDueNotification?: SortOrder
    paymentDueDays?: SortOrder
    newInvoiceNotification?: SortOrder
    approvalNotification?: SortOrder
    ocrCompleteNotification?: SortOrder
    emailNotifications?: SortOrder
    notificationEmail?: SortOrderInput | SortOrder
    twoFactor?: SortOrder
    sessionTimeout?: SortOrder
    ipRestriction?: SortOrder
    minPasswordLength?: SortOrder
    requireUppercase?: SortOrder
    requireNumbers?: SortOrder
    requireSymbols?: SortOrder
    passwordExpiry?: SortOrder
    auditLog?: SortOrder
    timestamp?: SortOrder
    immutable?: SortOrder
    searchRequirements?: SortOrder
    retentionPeriod?: SortOrder
    autoArchive?: SortOrder
    autoBackup?: SortOrder
    backupFrequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settings"> | string
    companyName?: StringWithAggregatesFilter<"Settings"> | string
    companyRegistration?: StringWithAggregatesFilter<"Settings"> | string
    companyAddress?: StringWithAggregatesFilter<"Settings"> | string
    companyPhone?: StringWithAggregatesFilter<"Settings"> | string
    companyEmail?: StringWithAggregatesFilter<"Settings"> | string
    fiscalYearStart?: IntWithAggregatesFilter<"Settings"> | number
    autoOcr?: BoolWithAggregatesFilter<"Settings"> | boolean
    confidenceThreshold?: FloatWithAggregatesFilter<"Settings"> | number
    approvalRequired?: BoolWithAggregatesFilter<"Settings"> | boolean
    approvalThreshold?: FloatWithAggregatesFilter<"Settings"> | number
    invoicePrefix?: StringWithAggregatesFilter<"Settings"> | string
    invoiceFormat?: StringWithAggregatesFilter<"Settings"> | string
    invoiceDigits?: IntWithAggregatesFilter<"Settings"> | number
    paymentDueNotification?: BoolWithAggregatesFilter<"Settings"> | boolean
    paymentDueDays?: IntWithAggregatesFilter<"Settings"> | number
    newInvoiceNotification?: BoolWithAggregatesFilter<"Settings"> | boolean
    approvalNotification?: BoolWithAggregatesFilter<"Settings"> | boolean
    ocrCompleteNotification?: BoolWithAggregatesFilter<"Settings"> | boolean
    emailNotifications?: BoolWithAggregatesFilter<"Settings"> | boolean
    notificationEmail?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    twoFactor?: BoolWithAggregatesFilter<"Settings"> | boolean
    sessionTimeout?: IntWithAggregatesFilter<"Settings"> | number
    ipRestriction?: BoolWithAggregatesFilter<"Settings"> | boolean
    minPasswordLength?: IntWithAggregatesFilter<"Settings"> | number
    requireUppercase?: BoolWithAggregatesFilter<"Settings"> | boolean
    requireNumbers?: BoolWithAggregatesFilter<"Settings"> | boolean
    requireSymbols?: BoolWithAggregatesFilter<"Settings"> | boolean
    passwordExpiry?: IntWithAggregatesFilter<"Settings"> | number
    auditLog?: BoolWithAggregatesFilter<"Settings"> | boolean
    timestamp?: BoolWithAggregatesFilter<"Settings"> | boolean
    immutable?: BoolWithAggregatesFilter<"Settings"> | boolean
    searchRequirements?: BoolWithAggregatesFilter<"Settings"> | boolean
    retentionPeriod?: StringWithAggregatesFilter<"Settings"> | string
    autoArchive?: BoolWithAggregatesFilter<"Settings"> | boolean
    autoBackup?: BoolWithAggregatesFilter<"Settings"> | boolean
    backupFrequency?: StringWithAggregatesFilter<"Settings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    id?: string
    name: string
    code: string
    registrationNumber: string
    address: string
    phone: string
    email: string
    contact: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutClientInput
    invoices?: InvoiceCreateNestedManyWithoutSupplierRefInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    registrationNumber: string
    address: string
    phone: string
    email: string
    contact: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutSupplierRefInput
  }

  export type SupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutClientNestedInput
    invoices?: InvoiceUpdateManyWithoutSupplierRefNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutSupplierRefNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    name: string
    code: string
    registrationNumber: string
    address: string
    phone: string
    email: string
    contact: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    status?: string
    startDate: Date | string
    endDate?: Date | string | null
    budget?: number | null
    actualAmount?: number
    manager?: string | null
    members?: ProjectCreatemembersInput | string[]
    tags?: ProjectCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    client: SupplierCreateNestedOneWithoutProjectsInput
    invoices?: InvoiceCreateNestedManyWithoutProjectRefInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    clientId: string
    status?: string
    startDate: Date | string
    endDate?: Date | string | null
    budget?: number | null
    actualAmount?: number
    manager?: string | null
    members?: ProjectCreatemembersInput | string[]
    tags?: ProjectCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutProjectRefInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    actualAmount?: FloatFieldUpdateOperationsInput | number
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ProjectUpdatemembersInput | string[]
    tags?: ProjectUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: SupplierUpdateOneRequiredWithoutProjectsNestedInput
    invoices?: InvoiceUpdateManyWithoutProjectRefNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    actualAmount?: FloatFieldUpdateOperationsInput | number
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ProjectUpdatemembersInput | string[]
    tags?: ProjectUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutProjectRefNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    clientId: string
    status?: string
    startDate: Date | string
    endDate?: Date | string | null
    budget?: number | null
    actualAmount?: number
    manager?: string | null
    members?: ProjectCreatemembersInput | string[]
    tags?: ProjectCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    actualAmount?: FloatFieldUpdateOperationsInput | number
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ProjectUpdatemembersInput | string[]
    tags?: ProjectUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    actualAmount?: FloatFieldUpdateOperationsInput | number
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ProjectUpdatemembersInput | string[]
    tags?: ProjectUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    invoiceNumber?: string | null
    issueDate: Date | string
    dueDate: Date | string
    transactionDate?: Date | string | null
    transactionPeriodStart?: Date | string | null
    transactionPeriodEnd?: Date | string | null
    currency?: string | null
    subject?: string | null
    purchaseOrderNumber?: string | null
    projectName?: string | null
    projectCode?: string | null
    supplier: string
    supplierRegistrationNumber?: string | null
    supplierAddress?: string | null
    supplierPhone?: string | null
    supplierEmail?: string | null
    supplierContactPerson?: string | null
    billingTo?: string | null
    billingToDepartment?: string | null
    billingToContactPerson?: string | null
    subtotal?: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount?: number | null
    nonTaxableAmount?: number | null
    paymentDueDate?: Date | string | null
    paymentTerms?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountType?: string | null
    bankAccountNumber?: string | null
    bankAccountHolder?: string | null
    transferFeePayer?: string | null
    normalizedSupplierName?: string | null
    matchingProjectName?: string | null
    matchingContactPerson?: string | null
    receiptMethod?: string | null
    receiptDateTime?: Date | string | null
    registeredBy?: string | null
    receivedFromEmail?: string | null
    fileHash?: string | null
    storagePath?: string | null
    ocrConfidenceScore?: number | null
    documentVersion?: number | null
    filePath?: string | null
    fileName?: string | null
    fileSize?: number | null
    project: string
    status?: string
    ocrConfidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierRef?: SupplierCreateNestedOneWithoutInvoicesInput
    projectRef?: ProjectCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    taxBreakdowns?: TaxBreakdownCreateNestedManyWithoutInvoiceInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    invoiceNumber?: string | null
    issueDate: Date | string
    dueDate: Date | string
    transactionDate?: Date | string | null
    transactionPeriodStart?: Date | string | null
    transactionPeriodEnd?: Date | string | null
    currency?: string | null
    subject?: string | null
    purchaseOrderNumber?: string | null
    projectName?: string | null
    projectId?: string | null
    projectCode?: string | null
    supplier: string
    supplierId: string
    supplierRegistrationNumber?: string | null
    supplierAddress?: string | null
    supplierPhone?: string | null
    supplierEmail?: string | null
    supplierContactPerson?: string | null
    billingTo?: string | null
    billingToDepartment?: string | null
    billingToContactPerson?: string | null
    subtotal?: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount?: number | null
    nonTaxableAmount?: number | null
    paymentDueDate?: Date | string | null
    paymentTerms?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountType?: string | null
    bankAccountNumber?: string | null
    bankAccountHolder?: string | null
    transferFeePayer?: string | null
    normalizedSupplierName?: string | null
    matchingProjectName?: string | null
    matchingContactPerson?: string | null
    receiptMethod?: string | null
    receiptDateTime?: Date | string | null
    registeredBy?: string | null
    receivedFromEmail?: string | null
    fileHash?: string | null
    storagePath?: string | null
    ocrConfidenceScore?: number | null
    documentVersion?: number | null
    filePath?: string | null
    fileName?: string | null
    fileSize?: number | null
    project: string
    status?: string
    ocrConfidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    taxBreakdowns?: TaxBreakdownUncheckedCreateNestedManyWithoutInvoiceInput
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierRef?: SupplierUpdateOneWithoutInvoicesNestedInput
    projectRef?: ProjectUpdateOneWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    taxBreakdowns?: TaxBreakdownUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    taxBreakdowns?: TaxBreakdownUncheckedUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    invoiceNumber?: string | null
    issueDate: Date | string
    dueDate: Date | string
    transactionDate?: Date | string | null
    transactionPeriodStart?: Date | string | null
    transactionPeriodEnd?: Date | string | null
    currency?: string | null
    subject?: string | null
    purchaseOrderNumber?: string | null
    projectName?: string | null
    projectId?: string | null
    projectCode?: string | null
    supplier: string
    supplierId: string
    supplierRegistrationNumber?: string | null
    supplierAddress?: string | null
    supplierPhone?: string | null
    supplierEmail?: string | null
    supplierContactPerson?: string | null
    billingTo?: string | null
    billingToDepartment?: string | null
    billingToContactPerson?: string | null
    subtotal?: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount?: number | null
    nonTaxableAmount?: number | null
    paymentDueDate?: Date | string | null
    paymentTerms?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountType?: string | null
    bankAccountNumber?: string | null
    bankAccountHolder?: string | null
    transferFeePayer?: string | null
    normalizedSupplierName?: string | null
    matchingProjectName?: string | null
    matchingContactPerson?: string | null
    receiptMethod?: string | null
    receiptDateTime?: Date | string | null
    registeredBy?: string | null
    receivedFromEmail?: string | null
    fileHash?: string | null
    storagePath?: string | null
    ocrConfidenceScore?: number | null
    documentVersion?: number | null
    filePath?: string | null
    fileName?: string | null
    fileSize?: number | null
    project: string
    status?: string
    ocrConfidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    quantity: number
    unit?: string | null
    unitPrice: number
    amount: number
    taxRate?: number | null
    taxAmount?: number | null
    remarks?: string | null
    invoice: InvoiceCreateNestedOneWithoutItemsInput
  }

  export type InvoiceItemUncheckedCreateInput = {
    id?: string
    invoiceId: string
    name: string
    description?: string | null
    quantity: number
    unit?: string | null
    unitPrice: number
    amount: number
    taxRate?: number | null
    taxAmount?: number | null
    remarks?: string | null
  }

  export type InvoiceItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    invoice?: InvoiceUpdateOneRequiredWithoutItemsNestedInput
  }

  export type InvoiceItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceItemCreateManyInput = {
    id?: string
    invoiceId: string
    name: string
    description?: string | null
    quantity: number
    unit?: string | null
    unitPrice: number
    amount: number
    taxRate?: number | null
    taxAmount?: number | null
    remarks?: string | null
  }

  export type InvoiceItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaxBreakdownCreateInput = {
    id?: string
    taxRate: number
    taxableAmount: number
    taxAmount: number
    invoice: InvoiceCreateNestedOneWithoutTaxBreakdownsInput
  }

  export type TaxBreakdownUncheckedCreateInput = {
    id?: string
    invoiceId: string
    taxRate: number
    taxableAmount: number
    taxAmount: number
  }

  export type TaxBreakdownUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    invoice?: InvoiceUpdateOneRequiredWithoutTaxBreakdownsNestedInput
  }

  export type TaxBreakdownUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type TaxBreakdownCreateManyInput = {
    id?: string
    invoiceId: string
    taxRate: number
    taxableAmount: number
    taxAmount: number
  }

  export type TaxBreakdownUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type TaxBreakdownUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentCreateInput = {
    id?: string
    supplier: string
    project: string
    amount: number
    dueDate: Date | string
    status?: string
    paidAt?: Date | string | null
    paymentMethod?: string | null
    bankTransactionId?: string | null
    reconciliationStatus?: string | null
    reconciliationNote?: string | null
    reconciliationDate?: Date | string | null
    actualAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    invoiceId: string
    supplier: string
    project: string
    amount: number
    dueDate: Date | string
    status?: string
    paidAt?: Date | string | null
    paymentMethod?: string | null
    bankTransactionId?: string | null
    reconciliationStatus?: string | null
    reconciliationNote?: string | null
    reconciliationDate?: Date | string | null
    actualAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationNote?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationNote?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    invoiceId: string
    supplier: string
    project: string
    amount: number
    dueDate: Date | string
    status?: string
    paidAt?: Date | string | null
    paymentMethod?: string | null
    bankTransactionId?: string | null
    reconciliationStatus?: string | null
    reconciliationNote?: string | null
    reconciliationDate?: Date | string | null
    actualAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationNote?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationNote?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    title: string
    message: string
    relatedId?: string | null
    relatedType?: string | null
    priority?: string
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    title: string
    message: string
    relatedId?: string | null
    relatedType?: string | null
    priority?: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    relatedId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    relatedId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: string
    title: string
    message: string
    relatedId?: string | null
    relatedType?: string | null
    priority?: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    relatedId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    relatedId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyReportCreateInput = {
    id?: string
    period: string
    totalInvoices: number
    totalAmount: number
    statusBreakdown: JsonNullValueInput | InputJsonValue
    supplierBreakdown: JsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    filePath?: string | null
  }

  export type MonthlyReportUncheckedCreateInput = {
    id?: string
    period: string
    totalInvoices: number
    totalAmount: number
    statusBreakdown: JsonNullValueInput | InputJsonValue
    supplierBreakdown: JsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    filePath?: string | null
  }

  export type MonthlyReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    totalInvoices?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    statusBreakdown?: JsonNullValueInput | InputJsonValue
    supplierBreakdown?: JsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    totalInvoices?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    statusBreakdown?: JsonNullValueInput | InputJsonValue
    supplierBreakdown?: JsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyReportCreateManyInput = {
    id?: string
    period: string
    totalInvoices: number
    totalAmount: number
    statusBreakdown: JsonNullValueInput | InputJsonValue
    supplierBreakdown: JsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    filePath?: string | null
  }

  export type MonthlyReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    totalInvoices?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    statusBreakdown?: JsonNullValueInput | InputJsonValue
    supplierBreakdown?: JsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    totalInvoices?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    statusBreakdown?: JsonNullValueInput | InputJsonValue
    supplierBreakdown?: JsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportScheduleCreateInput = {
    id?: string
    name: string
    frequency: string
    dayOfMonth?: number | null
    recipients?: ReportScheduleCreaterecipientsInput | string[]
    enabled?: boolean
    lastSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportScheduleUncheckedCreateInput = {
    id?: string
    name: string
    frequency: string
    dayOfMonth?: number | null
    recipients?: ReportScheduleCreaterecipientsInput | string[]
    enabled?: boolean
    lastSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    recipients?: ReportScheduleUpdaterecipientsInput | string[]
    enabled?: BoolFieldUpdateOperationsInput | boolean
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    recipients?: ReportScheduleUpdaterecipientsInput | string[]
    enabled?: BoolFieldUpdateOperationsInput | boolean
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportScheduleCreateManyInput = {
    id?: string
    name: string
    frequency: string
    dayOfMonth?: number | null
    recipients?: ReportScheduleCreaterecipientsInput | string[]
    enabled?: boolean
    lastSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    recipients?: ReportScheduleUpdaterecipientsInput | string[]
    enabled?: BoolFieldUpdateOperationsInput | boolean
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    recipients?: ReportScheduleUpdaterecipientsInput | string[]
    enabled?: BoolFieldUpdateOperationsInput | boolean
    lastSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateInput = {
    id?: string
    companyName: string
    companyRegistration: string
    companyAddress: string
    companyPhone: string
    companyEmail: string
    fiscalYearStart?: number
    autoOcr?: boolean
    confidenceThreshold?: number
    approvalRequired?: boolean
    approvalThreshold?: number
    invoicePrefix?: string
    invoiceFormat?: string
    invoiceDigits?: number
    paymentDueNotification?: boolean
    paymentDueDays?: number
    newInvoiceNotification?: boolean
    approvalNotification?: boolean
    ocrCompleteNotification?: boolean
    emailNotifications?: boolean
    notificationEmail?: string | null
    twoFactor?: boolean
    sessionTimeout?: number
    ipRestriction?: boolean
    minPasswordLength?: number
    requireUppercase?: boolean
    requireNumbers?: boolean
    requireSymbols?: boolean
    passwordExpiry?: number
    auditLog?: boolean
    timestamp?: boolean
    immutable?: boolean
    searchRequirements?: boolean
    retentionPeriod?: string
    autoArchive?: boolean
    autoBackup?: boolean
    backupFrequency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsUncheckedCreateInput = {
    id?: string
    companyName: string
    companyRegistration: string
    companyAddress: string
    companyPhone: string
    companyEmail: string
    fiscalYearStart?: number
    autoOcr?: boolean
    confidenceThreshold?: number
    approvalRequired?: boolean
    approvalThreshold?: number
    invoicePrefix?: string
    invoiceFormat?: string
    invoiceDigits?: number
    paymentDueNotification?: boolean
    paymentDueDays?: number
    newInvoiceNotification?: boolean
    approvalNotification?: boolean
    ocrCompleteNotification?: boolean
    emailNotifications?: boolean
    notificationEmail?: string | null
    twoFactor?: boolean
    sessionTimeout?: number
    ipRestriction?: boolean
    minPasswordLength?: number
    requireUppercase?: boolean
    requireNumbers?: boolean
    requireSymbols?: boolean
    passwordExpiry?: number
    auditLog?: boolean
    timestamp?: boolean
    immutable?: boolean
    searchRequirements?: boolean
    retentionPeriod?: string
    autoArchive?: boolean
    autoBackup?: boolean
    backupFrequency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyRegistration?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    companyPhone?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    fiscalYearStart?: IntFieldUpdateOperationsInput | number
    autoOcr?: BoolFieldUpdateOperationsInput | boolean
    confidenceThreshold?: FloatFieldUpdateOperationsInput | number
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    approvalThreshold?: FloatFieldUpdateOperationsInput | number
    invoicePrefix?: StringFieldUpdateOperationsInput | string
    invoiceFormat?: StringFieldUpdateOperationsInput | string
    invoiceDigits?: IntFieldUpdateOperationsInput | number
    paymentDueNotification?: BoolFieldUpdateOperationsInput | boolean
    paymentDueDays?: IntFieldUpdateOperationsInput | number
    newInvoiceNotification?: BoolFieldUpdateOperationsInput | boolean
    approvalNotification?: BoolFieldUpdateOperationsInput | boolean
    ocrCompleteNotification?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    notificationEmail?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactor?: BoolFieldUpdateOperationsInput | boolean
    sessionTimeout?: IntFieldUpdateOperationsInput | number
    ipRestriction?: BoolFieldUpdateOperationsInput | boolean
    minPasswordLength?: IntFieldUpdateOperationsInput | number
    requireUppercase?: BoolFieldUpdateOperationsInput | boolean
    requireNumbers?: BoolFieldUpdateOperationsInput | boolean
    requireSymbols?: BoolFieldUpdateOperationsInput | boolean
    passwordExpiry?: IntFieldUpdateOperationsInput | number
    auditLog?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: BoolFieldUpdateOperationsInput | boolean
    immutable?: BoolFieldUpdateOperationsInput | boolean
    searchRequirements?: BoolFieldUpdateOperationsInput | boolean
    retentionPeriod?: StringFieldUpdateOperationsInput | string
    autoArchive?: BoolFieldUpdateOperationsInput | boolean
    autoBackup?: BoolFieldUpdateOperationsInput | boolean
    backupFrequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyRegistration?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    companyPhone?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    fiscalYearStart?: IntFieldUpdateOperationsInput | number
    autoOcr?: BoolFieldUpdateOperationsInput | boolean
    confidenceThreshold?: FloatFieldUpdateOperationsInput | number
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    approvalThreshold?: FloatFieldUpdateOperationsInput | number
    invoicePrefix?: StringFieldUpdateOperationsInput | string
    invoiceFormat?: StringFieldUpdateOperationsInput | string
    invoiceDigits?: IntFieldUpdateOperationsInput | number
    paymentDueNotification?: BoolFieldUpdateOperationsInput | boolean
    paymentDueDays?: IntFieldUpdateOperationsInput | number
    newInvoiceNotification?: BoolFieldUpdateOperationsInput | boolean
    approvalNotification?: BoolFieldUpdateOperationsInput | boolean
    ocrCompleteNotification?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    notificationEmail?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactor?: BoolFieldUpdateOperationsInput | boolean
    sessionTimeout?: IntFieldUpdateOperationsInput | number
    ipRestriction?: BoolFieldUpdateOperationsInput | boolean
    minPasswordLength?: IntFieldUpdateOperationsInput | number
    requireUppercase?: BoolFieldUpdateOperationsInput | boolean
    requireNumbers?: BoolFieldUpdateOperationsInput | boolean
    requireSymbols?: BoolFieldUpdateOperationsInput | boolean
    passwordExpiry?: IntFieldUpdateOperationsInput | number
    auditLog?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: BoolFieldUpdateOperationsInput | boolean
    immutable?: BoolFieldUpdateOperationsInput | boolean
    searchRequirements?: BoolFieldUpdateOperationsInput | boolean
    retentionPeriod?: StringFieldUpdateOperationsInput | string
    autoArchive?: BoolFieldUpdateOperationsInput | boolean
    autoBackup?: BoolFieldUpdateOperationsInput | boolean
    backupFrequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateManyInput = {
    id?: string
    companyName: string
    companyRegistration: string
    companyAddress: string
    companyPhone: string
    companyEmail: string
    fiscalYearStart?: number
    autoOcr?: boolean
    confidenceThreshold?: number
    approvalRequired?: boolean
    approvalThreshold?: number
    invoicePrefix?: string
    invoiceFormat?: string
    invoiceDigits?: number
    paymentDueNotification?: boolean
    paymentDueDays?: number
    newInvoiceNotification?: boolean
    approvalNotification?: boolean
    ocrCompleteNotification?: boolean
    emailNotifications?: boolean
    notificationEmail?: string | null
    twoFactor?: boolean
    sessionTimeout?: number
    ipRestriction?: boolean
    minPasswordLength?: number
    requireUppercase?: boolean
    requireNumbers?: boolean
    requireSymbols?: boolean
    passwordExpiry?: number
    auditLog?: boolean
    timestamp?: boolean
    immutable?: boolean
    searchRequirements?: boolean
    retentionPeriod?: string
    autoArchive?: boolean
    autoBackup?: boolean
    backupFrequency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyRegistration?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    companyPhone?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    fiscalYearStart?: IntFieldUpdateOperationsInput | number
    autoOcr?: BoolFieldUpdateOperationsInput | boolean
    confidenceThreshold?: FloatFieldUpdateOperationsInput | number
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    approvalThreshold?: FloatFieldUpdateOperationsInput | number
    invoicePrefix?: StringFieldUpdateOperationsInput | string
    invoiceFormat?: StringFieldUpdateOperationsInput | string
    invoiceDigits?: IntFieldUpdateOperationsInput | number
    paymentDueNotification?: BoolFieldUpdateOperationsInput | boolean
    paymentDueDays?: IntFieldUpdateOperationsInput | number
    newInvoiceNotification?: BoolFieldUpdateOperationsInput | boolean
    approvalNotification?: BoolFieldUpdateOperationsInput | boolean
    ocrCompleteNotification?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    notificationEmail?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactor?: BoolFieldUpdateOperationsInput | boolean
    sessionTimeout?: IntFieldUpdateOperationsInput | number
    ipRestriction?: BoolFieldUpdateOperationsInput | boolean
    minPasswordLength?: IntFieldUpdateOperationsInput | number
    requireUppercase?: BoolFieldUpdateOperationsInput | boolean
    requireNumbers?: BoolFieldUpdateOperationsInput | boolean
    requireSymbols?: BoolFieldUpdateOperationsInput | boolean
    passwordExpiry?: IntFieldUpdateOperationsInput | number
    auditLog?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: BoolFieldUpdateOperationsInput | boolean
    immutable?: BoolFieldUpdateOperationsInput | boolean
    searchRequirements?: BoolFieldUpdateOperationsInput | boolean
    retentionPeriod?: StringFieldUpdateOperationsInput | string
    autoArchive?: BoolFieldUpdateOperationsInput | boolean
    autoBackup?: BoolFieldUpdateOperationsInput | boolean
    backupFrequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyRegistration?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    companyPhone?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    fiscalYearStart?: IntFieldUpdateOperationsInput | number
    autoOcr?: BoolFieldUpdateOperationsInput | boolean
    confidenceThreshold?: FloatFieldUpdateOperationsInput | number
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    approvalThreshold?: FloatFieldUpdateOperationsInput | number
    invoicePrefix?: StringFieldUpdateOperationsInput | string
    invoiceFormat?: StringFieldUpdateOperationsInput | string
    invoiceDigits?: IntFieldUpdateOperationsInput | number
    paymentDueNotification?: BoolFieldUpdateOperationsInput | boolean
    paymentDueDays?: IntFieldUpdateOperationsInput | number
    newInvoiceNotification?: BoolFieldUpdateOperationsInput | boolean
    approvalNotification?: BoolFieldUpdateOperationsInput | boolean
    ocrCompleteNotification?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    notificationEmail?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactor?: BoolFieldUpdateOperationsInput | boolean
    sessionTimeout?: IntFieldUpdateOperationsInput | number
    ipRestriction?: BoolFieldUpdateOperationsInput | boolean
    minPasswordLength?: IntFieldUpdateOperationsInput | number
    requireUppercase?: BoolFieldUpdateOperationsInput | boolean
    requireNumbers?: BoolFieldUpdateOperationsInput | boolean
    requireSymbols?: BoolFieldUpdateOperationsInput | boolean
    passwordExpiry?: IntFieldUpdateOperationsInput | number
    auditLog?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: BoolFieldUpdateOperationsInput | boolean
    immutable?: BoolFieldUpdateOperationsInput | boolean
    searchRequirements?: BoolFieldUpdateOperationsInput | boolean
    retentionPeriod?: StringFieldUpdateOperationsInput | string
    autoArchive?: BoolFieldUpdateOperationsInput | boolean
    autoBackup?: BoolFieldUpdateOperationsInput | boolean
    backupFrequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    registrationNumber?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    registrationNumber?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    registrationNumber?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    actualAmount?: SortOrder
    manager?: SortOrder
    members?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    budget?: SortOrder
    actualAmount?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    actualAmount?: SortOrder
    manager?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    actualAmount?: SortOrder
    manager?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    budget?: SortOrder
    actualAmount?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type SupplierNullableScalarRelationFilter = {
    is?: SupplierWhereInput | null
    isNot?: SupplierWhereInput | null
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type InvoiceItemListRelationFilter = {
    every?: InvoiceItemWhereInput
    some?: InvoiceItemWhereInput
    none?: InvoiceItemWhereInput
  }

  export type TaxBreakdownListRelationFilter = {
    every?: TaxBreakdownWhereInput
    some?: TaxBreakdownWhereInput
    none?: TaxBreakdownWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type InvoiceItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaxBreakdownOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    transactionDate?: SortOrder
    transactionPeriodStart?: SortOrder
    transactionPeriodEnd?: SortOrder
    currency?: SortOrder
    subject?: SortOrder
    purchaseOrderNumber?: SortOrder
    projectName?: SortOrder
    projectId?: SortOrder
    projectCode?: SortOrder
    supplier?: SortOrder
    supplierId?: SortOrder
    supplierRegistrationNumber?: SortOrder
    supplierAddress?: SortOrder
    supplierPhone?: SortOrder
    supplierEmail?: SortOrder
    supplierContactPerson?: SortOrder
    billingTo?: SortOrder
    billingToDepartment?: SortOrder
    billingToContactPerson?: SortOrder
    subtotal?: SortOrder
    taxAmount?: SortOrder
    amount?: SortOrder
    taxExcludedAmount?: SortOrder
    taxExemptAmount?: SortOrder
    nonTaxableAmount?: SortOrder
    paymentDueDate?: SortOrder
    paymentTerms?: SortOrder
    bankName?: SortOrder
    bankBranchName?: SortOrder
    bankAccountType?: SortOrder
    bankAccountNumber?: SortOrder
    bankAccountHolder?: SortOrder
    transferFeePayer?: SortOrder
    normalizedSupplierName?: SortOrder
    matchingProjectName?: SortOrder
    matchingContactPerson?: SortOrder
    receiptMethod?: SortOrder
    receiptDateTime?: SortOrder
    registeredBy?: SortOrder
    receivedFromEmail?: SortOrder
    fileHash?: SortOrder
    storagePath?: SortOrder
    ocrConfidenceScore?: SortOrder
    documentVersion?: SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    project?: SortOrder
    status?: SortOrder
    ocrConfidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    subtotal?: SortOrder
    taxAmount?: SortOrder
    amount?: SortOrder
    taxExcludedAmount?: SortOrder
    taxExemptAmount?: SortOrder
    nonTaxableAmount?: SortOrder
    ocrConfidenceScore?: SortOrder
    documentVersion?: SortOrder
    fileSize?: SortOrder
    ocrConfidence?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    transactionDate?: SortOrder
    transactionPeriodStart?: SortOrder
    transactionPeriodEnd?: SortOrder
    currency?: SortOrder
    subject?: SortOrder
    purchaseOrderNumber?: SortOrder
    projectName?: SortOrder
    projectId?: SortOrder
    projectCode?: SortOrder
    supplier?: SortOrder
    supplierId?: SortOrder
    supplierRegistrationNumber?: SortOrder
    supplierAddress?: SortOrder
    supplierPhone?: SortOrder
    supplierEmail?: SortOrder
    supplierContactPerson?: SortOrder
    billingTo?: SortOrder
    billingToDepartment?: SortOrder
    billingToContactPerson?: SortOrder
    subtotal?: SortOrder
    taxAmount?: SortOrder
    amount?: SortOrder
    taxExcludedAmount?: SortOrder
    taxExemptAmount?: SortOrder
    nonTaxableAmount?: SortOrder
    paymentDueDate?: SortOrder
    paymentTerms?: SortOrder
    bankName?: SortOrder
    bankBranchName?: SortOrder
    bankAccountType?: SortOrder
    bankAccountNumber?: SortOrder
    bankAccountHolder?: SortOrder
    transferFeePayer?: SortOrder
    normalizedSupplierName?: SortOrder
    matchingProjectName?: SortOrder
    matchingContactPerson?: SortOrder
    receiptMethod?: SortOrder
    receiptDateTime?: SortOrder
    registeredBy?: SortOrder
    receivedFromEmail?: SortOrder
    fileHash?: SortOrder
    storagePath?: SortOrder
    ocrConfidenceScore?: SortOrder
    documentVersion?: SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    project?: SortOrder
    status?: SortOrder
    ocrConfidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    transactionDate?: SortOrder
    transactionPeriodStart?: SortOrder
    transactionPeriodEnd?: SortOrder
    currency?: SortOrder
    subject?: SortOrder
    purchaseOrderNumber?: SortOrder
    projectName?: SortOrder
    projectId?: SortOrder
    projectCode?: SortOrder
    supplier?: SortOrder
    supplierId?: SortOrder
    supplierRegistrationNumber?: SortOrder
    supplierAddress?: SortOrder
    supplierPhone?: SortOrder
    supplierEmail?: SortOrder
    supplierContactPerson?: SortOrder
    billingTo?: SortOrder
    billingToDepartment?: SortOrder
    billingToContactPerson?: SortOrder
    subtotal?: SortOrder
    taxAmount?: SortOrder
    amount?: SortOrder
    taxExcludedAmount?: SortOrder
    taxExemptAmount?: SortOrder
    nonTaxableAmount?: SortOrder
    paymentDueDate?: SortOrder
    paymentTerms?: SortOrder
    bankName?: SortOrder
    bankBranchName?: SortOrder
    bankAccountType?: SortOrder
    bankAccountNumber?: SortOrder
    bankAccountHolder?: SortOrder
    transferFeePayer?: SortOrder
    normalizedSupplierName?: SortOrder
    matchingProjectName?: SortOrder
    matchingContactPerson?: SortOrder
    receiptMethod?: SortOrder
    receiptDateTime?: SortOrder
    registeredBy?: SortOrder
    receivedFromEmail?: SortOrder
    fileHash?: SortOrder
    storagePath?: SortOrder
    ocrConfidenceScore?: SortOrder
    documentVersion?: SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    project?: SortOrder
    status?: SortOrder
    ocrConfidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    subtotal?: SortOrder
    taxAmount?: SortOrder
    amount?: SortOrder
    taxExcludedAmount?: SortOrder
    taxExemptAmount?: SortOrder
    nonTaxableAmount?: SortOrder
    ocrConfidenceScore?: SortOrder
    documentVersion?: SortOrder
    fileSize?: SortOrder
    ocrConfidence?: SortOrder
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

  export type InvoiceScalarRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type InvoiceItemCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    remarks?: SortOrder
  }

  export type InvoiceItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
  }

  export type InvoiceItemMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    remarks?: SortOrder
  }

  export type InvoiceItemMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    remarks?: SortOrder
  }

  export type InvoiceItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    amount?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
  }

  export type TaxBreakdownCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    taxRate?: SortOrder
    taxableAmount?: SortOrder
    taxAmount?: SortOrder
  }

  export type TaxBreakdownAvgOrderByAggregateInput = {
    taxRate?: SortOrder
    taxableAmount?: SortOrder
    taxAmount?: SortOrder
  }

  export type TaxBreakdownMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    taxRate?: SortOrder
    taxableAmount?: SortOrder
    taxAmount?: SortOrder
  }

  export type TaxBreakdownMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    taxRate?: SortOrder
    taxableAmount?: SortOrder
    taxAmount?: SortOrder
  }

  export type TaxBreakdownSumOrderByAggregateInput = {
    taxRate?: SortOrder
    taxableAmount?: SortOrder
    taxAmount?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    supplier?: SortOrder
    project?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    paymentMethod?: SortOrder
    bankTransactionId?: SortOrder
    reconciliationStatus?: SortOrder
    reconciliationNote?: SortOrder
    reconciliationDate?: SortOrder
    actualAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    actualAmount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    supplier?: SortOrder
    project?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    paymentMethod?: SortOrder
    bankTransactionId?: SortOrder
    reconciliationStatus?: SortOrder
    reconciliationNote?: SortOrder
    reconciliationDate?: SortOrder
    actualAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    supplier?: SortOrder
    project?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    paymentMethod?: SortOrder
    bankTransactionId?: SortOrder
    reconciliationStatus?: SortOrder
    reconciliationNote?: SortOrder
    reconciliationDate?: SortOrder
    actualAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    actualAmount?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    relatedId?: SortOrder
    relatedType?: SortOrder
    priority?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    relatedId?: SortOrder
    relatedType?: SortOrder
    priority?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    relatedId?: SortOrder
    relatedType?: SortOrder
    priority?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
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

  export type MonthlyReportCountOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    totalInvoices?: SortOrder
    totalAmount?: SortOrder
    statusBreakdown?: SortOrder
    supplierBreakdown?: SortOrder
    generatedAt?: SortOrder
    filePath?: SortOrder
  }

  export type MonthlyReportAvgOrderByAggregateInput = {
    totalInvoices?: SortOrder
    totalAmount?: SortOrder
  }

  export type MonthlyReportMaxOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    totalInvoices?: SortOrder
    totalAmount?: SortOrder
    generatedAt?: SortOrder
    filePath?: SortOrder
  }

  export type MonthlyReportMinOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    totalInvoices?: SortOrder
    totalAmount?: SortOrder
    generatedAt?: SortOrder
    filePath?: SortOrder
  }

  export type MonthlyReportSumOrderByAggregateInput = {
    totalInvoices?: SortOrder
    totalAmount?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ReportScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    frequency?: SortOrder
    dayOfMonth?: SortOrder
    recipients?: SortOrder
    enabled?: SortOrder
    lastSentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportScheduleAvgOrderByAggregateInput = {
    dayOfMonth?: SortOrder
  }

  export type ReportScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    frequency?: SortOrder
    dayOfMonth?: SortOrder
    enabled?: SortOrder
    lastSentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    frequency?: SortOrder
    dayOfMonth?: SortOrder
    enabled?: SortOrder
    lastSentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportScheduleSumOrderByAggregateInput = {
    dayOfMonth?: SortOrder
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyRegistration?: SortOrder
    companyAddress?: SortOrder
    companyPhone?: SortOrder
    companyEmail?: SortOrder
    fiscalYearStart?: SortOrder
    autoOcr?: SortOrder
    confidenceThreshold?: SortOrder
    approvalRequired?: SortOrder
    approvalThreshold?: SortOrder
    invoicePrefix?: SortOrder
    invoiceFormat?: SortOrder
    invoiceDigits?: SortOrder
    paymentDueNotification?: SortOrder
    paymentDueDays?: SortOrder
    newInvoiceNotification?: SortOrder
    approvalNotification?: SortOrder
    ocrCompleteNotification?: SortOrder
    emailNotifications?: SortOrder
    notificationEmail?: SortOrder
    twoFactor?: SortOrder
    sessionTimeout?: SortOrder
    ipRestriction?: SortOrder
    minPasswordLength?: SortOrder
    requireUppercase?: SortOrder
    requireNumbers?: SortOrder
    requireSymbols?: SortOrder
    passwordExpiry?: SortOrder
    auditLog?: SortOrder
    timestamp?: SortOrder
    immutable?: SortOrder
    searchRequirements?: SortOrder
    retentionPeriod?: SortOrder
    autoArchive?: SortOrder
    autoBackup?: SortOrder
    backupFrequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    fiscalYearStart?: SortOrder
    confidenceThreshold?: SortOrder
    approvalThreshold?: SortOrder
    invoiceDigits?: SortOrder
    paymentDueDays?: SortOrder
    sessionTimeout?: SortOrder
    minPasswordLength?: SortOrder
    passwordExpiry?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyRegistration?: SortOrder
    companyAddress?: SortOrder
    companyPhone?: SortOrder
    companyEmail?: SortOrder
    fiscalYearStart?: SortOrder
    autoOcr?: SortOrder
    confidenceThreshold?: SortOrder
    approvalRequired?: SortOrder
    approvalThreshold?: SortOrder
    invoicePrefix?: SortOrder
    invoiceFormat?: SortOrder
    invoiceDigits?: SortOrder
    paymentDueNotification?: SortOrder
    paymentDueDays?: SortOrder
    newInvoiceNotification?: SortOrder
    approvalNotification?: SortOrder
    ocrCompleteNotification?: SortOrder
    emailNotifications?: SortOrder
    notificationEmail?: SortOrder
    twoFactor?: SortOrder
    sessionTimeout?: SortOrder
    ipRestriction?: SortOrder
    minPasswordLength?: SortOrder
    requireUppercase?: SortOrder
    requireNumbers?: SortOrder
    requireSymbols?: SortOrder
    passwordExpiry?: SortOrder
    auditLog?: SortOrder
    timestamp?: SortOrder
    immutable?: SortOrder
    searchRequirements?: SortOrder
    retentionPeriod?: SortOrder
    autoArchive?: SortOrder
    autoBackup?: SortOrder
    backupFrequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyRegistration?: SortOrder
    companyAddress?: SortOrder
    companyPhone?: SortOrder
    companyEmail?: SortOrder
    fiscalYearStart?: SortOrder
    autoOcr?: SortOrder
    confidenceThreshold?: SortOrder
    approvalRequired?: SortOrder
    approvalThreshold?: SortOrder
    invoicePrefix?: SortOrder
    invoiceFormat?: SortOrder
    invoiceDigits?: SortOrder
    paymentDueNotification?: SortOrder
    paymentDueDays?: SortOrder
    newInvoiceNotification?: SortOrder
    approvalNotification?: SortOrder
    ocrCompleteNotification?: SortOrder
    emailNotifications?: SortOrder
    notificationEmail?: SortOrder
    twoFactor?: SortOrder
    sessionTimeout?: SortOrder
    ipRestriction?: SortOrder
    minPasswordLength?: SortOrder
    requireUppercase?: SortOrder
    requireNumbers?: SortOrder
    requireSymbols?: SortOrder
    passwordExpiry?: SortOrder
    auditLog?: SortOrder
    timestamp?: SortOrder
    immutable?: SortOrder
    searchRequirements?: SortOrder
    retentionPeriod?: SortOrder
    autoArchive?: SortOrder
    autoBackup?: SortOrder
    backupFrequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    fiscalYearStart?: SortOrder
    confidenceThreshold?: SortOrder
    approvalThreshold?: SortOrder
    invoiceDigits?: SortOrder
    paymentDueDays?: SortOrder
    sessionTimeout?: SortOrder
    minPasswordLength?: SortOrder
    passwordExpiry?: SortOrder
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type ProjectCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutSupplierRefInput = {
    create?: XOR<InvoiceCreateWithoutSupplierRefInput, InvoiceUncheckedCreateWithoutSupplierRefInput> | InvoiceCreateWithoutSupplierRefInput[] | InvoiceUncheckedCreateWithoutSupplierRefInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSupplierRefInput | InvoiceCreateOrConnectWithoutSupplierRefInput[]
    createMany?: InvoiceCreateManySupplierRefInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutSupplierRefInput = {
    create?: XOR<InvoiceCreateWithoutSupplierRefInput, InvoiceUncheckedCreateWithoutSupplierRefInput> | InvoiceCreateWithoutSupplierRefInput[] | InvoiceUncheckedCreateWithoutSupplierRefInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSupplierRefInput | InvoiceCreateOrConnectWithoutSupplierRefInput[]
    createMany?: InvoiceCreateManySupplierRefInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type ProjectUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutClientInput | ProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutClientInput | ProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutClientInput | ProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutSupplierRefNestedInput = {
    create?: XOR<InvoiceCreateWithoutSupplierRefInput, InvoiceUncheckedCreateWithoutSupplierRefInput> | InvoiceCreateWithoutSupplierRefInput[] | InvoiceUncheckedCreateWithoutSupplierRefInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSupplierRefInput | InvoiceCreateOrConnectWithoutSupplierRefInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutSupplierRefInput | InvoiceUpsertWithWhereUniqueWithoutSupplierRefInput[]
    createMany?: InvoiceCreateManySupplierRefInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutSupplierRefInput | InvoiceUpdateWithWhereUniqueWithoutSupplierRefInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutSupplierRefInput | InvoiceUpdateManyWithWhereWithoutSupplierRefInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutClientInput | ProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutClientInput | ProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutClientInput | ProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutSupplierRefNestedInput = {
    create?: XOR<InvoiceCreateWithoutSupplierRefInput, InvoiceUncheckedCreateWithoutSupplierRefInput> | InvoiceCreateWithoutSupplierRefInput[] | InvoiceUncheckedCreateWithoutSupplierRefInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSupplierRefInput | InvoiceCreateOrConnectWithoutSupplierRefInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutSupplierRefInput | InvoiceUpsertWithWhereUniqueWithoutSupplierRefInput[]
    createMany?: InvoiceCreateManySupplierRefInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutSupplierRefInput | InvoiceUpdateWithWhereUniqueWithoutSupplierRefInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutSupplierRefInput | InvoiceUpdateManyWithWhereWithoutSupplierRefInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type ProjectCreatemembersInput = {
    set: string[]
  }

  export type ProjectCreatetagsInput = {
    set: string[]
  }

  export type SupplierCreateNestedOneWithoutProjectsInput = {
    create?: XOR<SupplierCreateWithoutProjectsInput, SupplierUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutProjectsInput
    connect?: SupplierWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutProjectRefInput = {
    create?: XOR<InvoiceCreateWithoutProjectRefInput, InvoiceUncheckedCreateWithoutProjectRefInput> | InvoiceCreateWithoutProjectRefInput[] | InvoiceUncheckedCreateWithoutProjectRefInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutProjectRefInput | InvoiceCreateOrConnectWithoutProjectRefInput[]
    createMany?: InvoiceCreateManyProjectRefInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutProjectRefInput = {
    create?: XOR<InvoiceCreateWithoutProjectRefInput, InvoiceUncheckedCreateWithoutProjectRefInput> | InvoiceCreateWithoutProjectRefInput[] | InvoiceUncheckedCreateWithoutProjectRefInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutProjectRefInput | InvoiceCreateOrConnectWithoutProjectRefInput[]
    createMany?: InvoiceCreateManyProjectRefInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdatemembersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SupplierUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<SupplierCreateWithoutProjectsInput, SupplierUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutProjectsInput
    upsert?: SupplierUpsertWithoutProjectsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutProjectsInput, SupplierUpdateWithoutProjectsInput>, SupplierUncheckedUpdateWithoutProjectsInput>
  }

  export type InvoiceUpdateManyWithoutProjectRefNestedInput = {
    create?: XOR<InvoiceCreateWithoutProjectRefInput, InvoiceUncheckedCreateWithoutProjectRefInput> | InvoiceCreateWithoutProjectRefInput[] | InvoiceUncheckedCreateWithoutProjectRefInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutProjectRefInput | InvoiceCreateOrConnectWithoutProjectRefInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutProjectRefInput | InvoiceUpsertWithWhereUniqueWithoutProjectRefInput[]
    createMany?: InvoiceCreateManyProjectRefInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutProjectRefInput | InvoiceUpdateWithWhereUniqueWithoutProjectRefInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutProjectRefInput | InvoiceUpdateManyWithWhereWithoutProjectRefInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutProjectRefNestedInput = {
    create?: XOR<InvoiceCreateWithoutProjectRefInput, InvoiceUncheckedCreateWithoutProjectRefInput> | InvoiceCreateWithoutProjectRefInput[] | InvoiceUncheckedCreateWithoutProjectRefInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutProjectRefInput | InvoiceCreateOrConnectWithoutProjectRefInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutProjectRefInput | InvoiceUpsertWithWhereUniqueWithoutProjectRefInput[]
    createMany?: InvoiceCreateManyProjectRefInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutProjectRefInput | InvoiceUpdateWithWhereUniqueWithoutProjectRefInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutProjectRefInput | InvoiceUpdateManyWithWhereWithoutProjectRefInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type SupplierCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<SupplierCreateWithoutInvoicesInput, SupplierUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutInvoicesInput
    connect?: SupplierWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<ProjectCreateWithoutInvoicesInput, ProjectUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutInvoicesInput
    connect?: ProjectWhereUniqueInput
  }

  export type InvoiceItemCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type TaxBreakdownCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<TaxBreakdownCreateWithoutInvoiceInput, TaxBreakdownUncheckedCreateWithoutInvoiceInput> | TaxBreakdownCreateWithoutInvoiceInput[] | TaxBreakdownUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: TaxBreakdownCreateOrConnectWithoutInvoiceInput | TaxBreakdownCreateOrConnectWithoutInvoiceInput[]
    createMany?: TaxBreakdownCreateManyInvoiceInputEnvelope
    connect?: TaxBreakdownWhereUniqueInput | TaxBreakdownWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type TaxBreakdownUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<TaxBreakdownCreateWithoutInvoiceInput, TaxBreakdownUncheckedCreateWithoutInvoiceInput> | TaxBreakdownCreateWithoutInvoiceInput[] | TaxBreakdownUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: TaxBreakdownCreateOrConnectWithoutInvoiceInput | TaxBreakdownCreateOrConnectWithoutInvoiceInput[]
    createMany?: TaxBreakdownCreateManyInvoiceInputEnvelope
    connect?: TaxBreakdownWhereUniqueInput | TaxBreakdownWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SupplierUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<SupplierCreateWithoutInvoicesInput, SupplierUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutInvoicesInput
    upsert?: SupplierUpsertWithoutInvoicesInput
    disconnect?: SupplierWhereInput | boolean
    delete?: SupplierWhereInput | boolean
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutInvoicesInput, SupplierUpdateWithoutInvoicesInput>, SupplierUncheckedUpdateWithoutInvoicesInput>
  }

  export type ProjectUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<ProjectCreateWithoutInvoicesInput, ProjectUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutInvoicesInput
    upsert?: ProjectUpsertWithoutInvoicesInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutInvoicesInput, ProjectUpdateWithoutInvoicesInput>, ProjectUncheckedUpdateWithoutInvoicesInput>
  }

  export type InvoiceItemUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type TaxBreakdownUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<TaxBreakdownCreateWithoutInvoiceInput, TaxBreakdownUncheckedCreateWithoutInvoiceInput> | TaxBreakdownCreateWithoutInvoiceInput[] | TaxBreakdownUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: TaxBreakdownCreateOrConnectWithoutInvoiceInput | TaxBreakdownCreateOrConnectWithoutInvoiceInput[]
    upsert?: TaxBreakdownUpsertWithWhereUniqueWithoutInvoiceInput | TaxBreakdownUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: TaxBreakdownCreateManyInvoiceInputEnvelope
    set?: TaxBreakdownWhereUniqueInput | TaxBreakdownWhereUniqueInput[]
    disconnect?: TaxBreakdownWhereUniqueInput | TaxBreakdownWhereUniqueInput[]
    delete?: TaxBreakdownWhereUniqueInput | TaxBreakdownWhereUniqueInput[]
    connect?: TaxBreakdownWhereUniqueInput | TaxBreakdownWhereUniqueInput[]
    update?: TaxBreakdownUpdateWithWhereUniqueWithoutInvoiceInput | TaxBreakdownUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: TaxBreakdownUpdateManyWithWhereWithoutInvoiceInput | TaxBreakdownUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: TaxBreakdownScalarWhereInput | TaxBreakdownScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type TaxBreakdownUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<TaxBreakdownCreateWithoutInvoiceInput, TaxBreakdownUncheckedCreateWithoutInvoiceInput> | TaxBreakdownCreateWithoutInvoiceInput[] | TaxBreakdownUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: TaxBreakdownCreateOrConnectWithoutInvoiceInput | TaxBreakdownCreateOrConnectWithoutInvoiceInput[]
    upsert?: TaxBreakdownUpsertWithWhereUniqueWithoutInvoiceInput | TaxBreakdownUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: TaxBreakdownCreateManyInvoiceInputEnvelope
    set?: TaxBreakdownWhereUniqueInput | TaxBreakdownWhereUniqueInput[]
    disconnect?: TaxBreakdownWhereUniqueInput | TaxBreakdownWhereUniqueInput[]
    delete?: TaxBreakdownWhereUniqueInput | TaxBreakdownWhereUniqueInput[]
    connect?: TaxBreakdownWhereUniqueInput | TaxBreakdownWhereUniqueInput[]
    update?: TaxBreakdownUpdateWithWhereUniqueWithoutInvoiceInput | TaxBreakdownUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: TaxBreakdownUpdateManyWithWhereWithoutInvoiceInput | TaxBreakdownUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: TaxBreakdownScalarWhereInput | TaxBreakdownScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutItemsInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    upsert?: InvoiceUpsertWithoutItemsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutItemsInput, InvoiceUpdateWithoutItemsInput>, InvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type InvoiceCreateNestedOneWithoutTaxBreakdownsInput = {
    create?: XOR<InvoiceCreateWithoutTaxBreakdownsInput, InvoiceUncheckedCreateWithoutTaxBreakdownsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutTaxBreakdownsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutTaxBreakdownsNestedInput = {
    create?: XOR<InvoiceCreateWithoutTaxBreakdownsInput, InvoiceUncheckedCreateWithoutTaxBreakdownsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutTaxBreakdownsInput
    upsert?: InvoiceUpsertWithoutTaxBreakdownsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutTaxBreakdownsInput, InvoiceUpdateWithoutTaxBreakdownsInput>, InvoiceUncheckedUpdateWithoutTaxBreakdownsInput>
  }

  export type InvoiceCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    upsert?: InvoiceUpsertWithoutPaymentsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutPaymentsInput, InvoiceUpdateWithoutPaymentsInput>, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReportScheduleCreaterecipientsInput = {
    set: string[]
  }

  export type ReportScheduleUpdaterecipientsInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
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

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    message: string
    relatedId?: string | null
    relatedType?: string | null
    priority?: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    message: string
    relatedId?: string | null
    relatedType?: string | null
    priority?: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
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
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    relatedId?: StringNullableFilter<"Notification"> | string | null
    relatedType?: StringNullableFilter<"Notification"> | string | null
    priority?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type ProjectCreateWithoutClientInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    status?: string
    startDate: Date | string
    endDate?: Date | string | null
    budget?: number | null
    actualAmount?: number
    manager?: string | null
    members?: ProjectCreatemembersInput | string[]
    tags?: ProjectCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutProjectRefInput
  }

  export type ProjectUncheckedCreateWithoutClientInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    status?: string
    startDate: Date | string
    endDate?: Date | string | null
    budget?: number | null
    actualAmount?: number
    manager?: string | null
    members?: ProjectCreatemembersInput | string[]
    tags?: ProjectCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutProjectRefInput
  }

  export type ProjectCreateOrConnectWithoutClientInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput>
  }

  export type ProjectCreateManyClientInputEnvelope = {
    data: ProjectCreateManyClientInput | ProjectCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutSupplierRefInput = {
    id?: string
    invoiceNumber?: string | null
    issueDate: Date | string
    dueDate: Date | string
    transactionDate?: Date | string | null
    transactionPeriodStart?: Date | string | null
    transactionPeriodEnd?: Date | string | null
    currency?: string | null
    subject?: string | null
    purchaseOrderNumber?: string | null
    projectName?: string | null
    projectCode?: string | null
    supplier: string
    supplierRegistrationNumber?: string | null
    supplierAddress?: string | null
    supplierPhone?: string | null
    supplierEmail?: string | null
    supplierContactPerson?: string | null
    billingTo?: string | null
    billingToDepartment?: string | null
    billingToContactPerson?: string | null
    subtotal?: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount?: number | null
    nonTaxableAmount?: number | null
    paymentDueDate?: Date | string | null
    paymentTerms?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountType?: string | null
    bankAccountNumber?: string | null
    bankAccountHolder?: string | null
    transferFeePayer?: string | null
    normalizedSupplierName?: string | null
    matchingProjectName?: string | null
    matchingContactPerson?: string | null
    receiptMethod?: string | null
    receiptDateTime?: Date | string | null
    registeredBy?: string | null
    receivedFromEmail?: string | null
    fileHash?: string | null
    storagePath?: string | null
    ocrConfidenceScore?: number | null
    documentVersion?: number | null
    filePath?: string | null
    fileName?: string | null
    fileSize?: number | null
    project: string
    status?: string
    ocrConfidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectRef?: ProjectCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    taxBreakdowns?: TaxBreakdownCreateNestedManyWithoutInvoiceInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutSupplierRefInput = {
    id?: string
    invoiceNumber?: string | null
    issueDate: Date | string
    dueDate: Date | string
    transactionDate?: Date | string | null
    transactionPeriodStart?: Date | string | null
    transactionPeriodEnd?: Date | string | null
    currency?: string | null
    subject?: string | null
    purchaseOrderNumber?: string | null
    projectName?: string | null
    projectId?: string | null
    projectCode?: string | null
    supplier: string
    supplierRegistrationNumber?: string | null
    supplierAddress?: string | null
    supplierPhone?: string | null
    supplierEmail?: string | null
    supplierContactPerson?: string | null
    billingTo?: string | null
    billingToDepartment?: string | null
    billingToContactPerson?: string | null
    subtotal?: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount?: number | null
    nonTaxableAmount?: number | null
    paymentDueDate?: Date | string | null
    paymentTerms?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountType?: string | null
    bankAccountNumber?: string | null
    bankAccountHolder?: string | null
    transferFeePayer?: string | null
    normalizedSupplierName?: string | null
    matchingProjectName?: string | null
    matchingContactPerson?: string | null
    receiptMethod?: string | null
    receiptDateTime?: Date | string | null
    registeredBy?: string | null
    receivedFromEmail?: string | null
    fileHash?: string | null
    storagePath?: string | null
    ocrConfidenceScore?: number | null
    documentVersion?: number | null
    filePath?: string | null
    fileName?: string | null
    fileSize?: number | null
    project: string
    status?: string
    ocrConfidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    taxBreakdowns?: TaxBreakdownUncheckedCreateNestedManyWithoutInvoiceInput
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutSupplierRefInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutSupplierRefInput, InvoiceUncheckedCreateWithoutSupplierRefInput>
  }

  export type InvoiceCreateManySupplierRefInputEnvelope = {
    data: InvoiceCreateManySupplierRefInput | InvoiceCreateManySupplierRefInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutClientInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutClientInput, ProjectUncheckedUpdateWithoutClientInput>
    create: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutClientInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutClientInput, ProjectUncheckedUpdateWithoutClientInput>
  }

  export type ProjectUpdateManyWithWhereWithoutClientInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutClientInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    code?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    clientId?: StringFilter<"Project"> | string
    status?: StringFilter<"Project"> | string
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    budget?: FloatNullableFilter<"Project"> | number | null
    actualAmount?: FloatFilter<"Project"> | number
    manager?: StringNullableFilter<"Project"> | string | null
    members?: StringNullableListFilter<"Project">
    tags?: StringNullableListFilter<"Project">
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type InvoiceUpsertWithWhereUniqueWithoutSupplierRefInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutSupplierRefInput, InvoiceUncheckedUpdateWithoutSupplierRefInput>
    create: XOR<InvoiceCreateWithoutSupplierRefInput, InvoiceUncheckedCreateWithoutSupplierRefInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutSupplierRefInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutSupplierRefInput, InvoiceUncheckedUpdateWithoutSupplierRefInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutSupplierRefInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutSupplierRefInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringNullableFilter<"Invoice"> | string | null
    issueDate?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    transactionDate?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    transactionPeriodStart?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    transactionPeriodEnd?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    currency?: StringNullableFilter<"Invoice"> | string | null
    subject?: StringNullableFilter<"Invoice"> | string | null
    purchaseOrderNumber?: StringNullableFilter<"Invoice"> | string | null
    projectName?: StringNullableFilter<"Invoice"> | string | null
    projectId?: StringNullableFilter<"Invoice"> | string | null
    projectCode?: StringNullableFilter<"Invoice"> | string | null
    supplier?: StringFilter<"Invoice"> | string
    supplierId?: StringFilter<"Invoice"> | string
    supplierRegistrationNumber?: StringNullableFilter<"Invoice"> | string | null
    supplierAddress?: StringNullableFilter<"Invoice"> | string | null
    supplierPhone?: StringNullableFilter<"Invoice"> | string | null
    supplierEmail?: StringNullableFilter<"Invoice"> | string | null
    supplierContactPerson?: StringNullableFilter<"Invoice"> | string | null
    billingTo?: StringNullableFilter<"Invoice"> | string | null
    billingToDepartment?: StringNullableFilter<"Invoice"> | string | null
    billingToContactPerson?: StringNullableFilter<"Invoice"> | string | null
    subtotal?: FloatNullableFilter<"Invoice"> | number | null
    taxAmount?: FloatFilter<"Invoice"> | number
    amount?: FloatFilter<"Invoice"> | number
    taxExcludedAmount?: FloatFilter<"Invoice"> | number
    taxExemptAmount?: FloatNullableFilter<"Invoice"> | number | null
    nonTaxableAmount?: FloatNullableFilter<"Invoice"> | number | null
    paymentDueDate?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    paymentTerms?: StringNullableFilter<"Invoice"> | string | null
    bankName?: StringNullableFilter<"Invoice"> | string | null
    bankBranchName?: StringNullableFilter<"Invoice"> | string | null
    bankAccountType?: StringNullableFilter<"Invoice"> | string | null
    bankAccountNumber?: StringNullableFilter<"Invoice"> | string | null
    bankAccountHolder?: StringNullableFilter<"Invoice"> | string | null
    transferFeePayer?: StringNullableFilter<"Invoice"> | string | null
    normalizedSupplierName?: StringNullableFilter<"Invoice"> | string | null
    matchingProjectName?: StringNullableFilter<"Invoice"> | string | null
    matchingContactPerson?: StringNullableFilter<"Invoice"> | string | null
    receiptMethod?: StringNullableFilter<"Invoice"> | string | null
    receiptDateTime?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    registeredBy?: StringNullableFilter<"Invoice"> | string | null
    receivedFromEmail?: StringNullableFilter<"Invoice"> | string | null
    fileHash?: StringNullableFilter<"Invoice"> | string | null
    storagePath?: StringNullableFilter<"Invoice"> | string | null
    ocrConfidenceScore?: FloatNullableFilter<"Invoice"> | number | null
    documentVersion?: IntNullableFilter<"Invoice"> | number | null
    filePath?: StringNullableFilter<"Invoice"> | string | null
    fileName?: StringNullableFilter<"Invoice"> | string | null
    fileSize?: IntNullableFilter<"Invoice"> | number | null
    project?: StringFilter<"Invoice"> | string
    status?: StringFilter<"Invoice"> | string
    ocrConfidence?: FloatNullableFilter<"Invoice"> | number | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type SupplierCreateWithoutProjectsInput = {
    id?: string
    name: string
    code: string
    registrationNumber: string
    address: string
    phone: string
    email: string
    contact: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutSupplierRefInput
  }

  export type SupplierUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    code: string
    registrationNumber: string
    address: string
    phone: string
    email: string
    contact: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutSupplierRefInput
  }

  export type SupplierCreateOrConnectWithoutProjectsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutProjectsInput, SupplierUncheckedCreateWithoutProjectsInput>
  }

  export type InvoiceCreateWithoutProjectRefInput = {
    id?: string
    invoiceNumber?: string | null
    issueDate: Date | string
    dueDate: Date | string
    transactionDate?: Date | string | null
    transactionPeriodStart?: Date | string | null
    transactionPeriodEnd?: Date | string | null
    currency?: string | null
    subject?: string | null
    purchaseOrderNumber?: string | null
    projectName?: string | null
    projectCode?: string | null
    supplier: string
    supplierRegistrationNumber?: string | null
    supplierAddress?: string | null
    supplierPhone?: string | null
    supplierEmail?: string | null
    supplierContactPerson?: string | null
    billingTo?: string | null
    billingToDepartment?: string | null
    billingToContactPerson?: string | null
    subtotal?: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount?: number | null
    nonTaxableAmount?: number | null
    paymentDueDate?: Date | string | null
    paymentTerms?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountType?: string | null
    bankAccountNumber?: string | null
    bankAccountHolder?: string | null
    transferFeePayer?: string | null
    normalizedSupplierName?: string | null
    matchingProjectName?: string | null
    matchingContactPerson?: string | null
    receiptMethod?: string | null
    receiptDateTime?: Date | string | null
    registeredBy?: string | null
    receivedFromEmail?: string | null
    fileHash?: string | null
    storagePath?: string | null
    ocrConfidenceScore?: number | null
    documentVersion?: number | null
    filePath?: string | null
    fileName?: string | null
    fileSize?: number | null
    project: string
    status?: string
    ocrConfidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierRef?: SupplierCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    taxBreakdowns?: TaxBreakdownCreateNestedManyWithoutInvoiceInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutProjectRefInput = {
    id?: string
    invoiceNumber?: string | null
    issueDate: Date | string
    dueDate: Date | string
    transactionDate?: Date | string | null
    transactionPeriodStart?: Date | string | null
    transactionPeriodEnd?: Date | string | null
    currency?: string | null
    subject?: string | null
    purchaseOrderNumber?: string | null
    projectName?: string | null
    projectCode?: string | null
    supplier: string
    supplierId: string
    supplierRegistrationNumber?: string | null
    supplierAddress?: string | null
    supplierPhone?: string | null
    supplierEmail?: string | null
    supplierContactPerson?: string | null
    billingTo?: string | null
    billingToDepartment?: string | null
    billingToContactPerson?: string | null
    subtotal?: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount?: number | null
    nonTaxableAmount?: number | null
    paymentDueDate?: Date | string | null
    paymentTerms?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountType?: string | null
    bankAccountNumber?: string | null
    bankAccountHolder?: string | null
    transferFeePayer?: string | null
    normalizedSupplierName?: string | null
    matchingProjectName?: string | null
    matchingContactPerson?: string | null
    receiptMethod?: string | null
    receiptDateTime?: Date | string | null
    registeredBy?: string | null
    receivedFromEmail?: string | null
    fileHash?: string | null
    storagePath?: string | null
    ocrConfidenceScore?: number | null
    documentVersion?: number | null
    filePath?: string | null
    fileName?: string | null
    fileSize?: number | null
    project: string
    status?: string
    ocrConfidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    taxBreakdowns?: TaxBreakdownUncheckedCreateNestedManyWithoutInvoiceInput
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutProjectRefInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutProjectRefInput, InvoiceUncheckedCreateWithoutProjectRefInput>
  }

  export type InvoiceCreateManyProjectRefInputEnvelope = {
    data: InvoiceCreateManyProjectRefInput | InvoiceCreateManyProjectRefInput[]
    skipDuplicates?: boolean
  }

  export type SupplierUpsertWithoutProjectsInput = {
    update: XOR<SupplierUpdateWithoutProjectsInput, SupplierUncheckedUpdateWithoutProjectsInput>
    create: XOR<SupplierCreateWithoutProjectsInput, SupplierUncheckedCreateWithoutProjectsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutProjectsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutProjectsInput, SupplierUncheckedUpdateWithoutProjectsInput>
  }

  export type SupplierUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutSupplierRefNestedInput
  }

  export type SupplierUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutSupplierRefNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutProjectRefInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutProjectRefInput, InvoiceUncheckedUpdateWithoutProjectRefInput>
    create: XOR<InvoiceCreateWithoutProjectRefInput, InvoiceUncheckedCreateWithoutProjectRefInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutProjectRefInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutProjectRefInput, InvoiceUncheckedUpdateWithoutProjectRefInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutProjectRefInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutProjectRefInput>
  }

  export type SupplierCreateWithoutInvoicesInput = {
    id?: string
    name: string
    code: string
    registrationNumber: string
    address: string
    phone: string
    email: string
    contact: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutClientInput
  }

  export type SupplierUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    code: string
    registrationNumber: string
    address: string
    phone: string
    email: string
    contact: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
  }

  export type SupplierCreateOrConnectWithoutInvoicesInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutInvoicesInput, SupplierUncheckedCreateWithoutInvoicesInput>
  }

  export type ProjectCreateWithoutInvoicesInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    status?: string
    startDate: Date | string
    endDate?: Date | string | null
    budget?: number | null
    actualAmount?: number
    manager?: string | null
    members?: ProjectCreatemembersInput | string[]
    tags?: ProjectCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    client: SupplierCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutInvoicesInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    clientId: string
    status?: string
    startDate: Date | string
    endDate?: Date | string | null
    budget?: number | null
    actualAmount?: number
    manager?: string | null
    members?: ProjectCreatemembersInput | string[]
    tags?: ProjectCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutInvoicesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutInvoicesInput, ProjectUncheckedCreateWithoutInvoicesInput>
  }

  export type InvoiceItemCreateWithoutInvoiceInput = {
    id?: string
    name: string
    description?: string | null
    quantity: number
    unit?: string | null
    unitPrice: number
    amount: number
    taxRate?: number | null
    taxAmount?: number | null
    remarks?: string | null
  }

  export type InvoiceItemUncheckedCreateWithoutInvoiceInput = {
    id?: string
    name: string
    description?: string | null
    quantity: number
    unit?: string | null
    unitPrice: number
    amount: number
    taxRate?: number | null
    taxAmount?: number | null
    remarks?: string | null
  }

  export type InvoiceItemCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemCreateManyInvoiceInputEnvelope = {
    data: InvoiceItemCreateManyInvoiceInput | InvoiceItemCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type TaxBreakdownCreateWithoutInvoiceInput = {
    id?: string
    taxRate: number
    taxableAmount: number
    taxAmount: number
  }

  export type TaxBreakdownUncheckedCreateWithoutInvoiceInput = {
    id?: string
    taxRate: number
    taxableAmount: number
    taxAmount: number
  }

  export type TaxBreakdownCreateOrConnectWithoutInvoiceInput = {
    where: TaxBreakdownWhereUniqueInput
    create: XOR<TaxBreakdownCreateWithoutInvoiceInput, TaxBreakdownUncheckedCreateWithoutInvoiceInput>
  }

  export type TaxBreakdownCreateManyInvoiceInputEnvelope = {
    data: TaxBreakdownCreateManyInvoiceInput | TaxBreakdownCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutInvoiceInput = {
    id?: string
    supplier: string
    project: string
    amount: number
    dueDate: Date | string
    status?: string
    paidAt?: Date | string | null
    paymentMethod?: string | null
    bankTransactionId?: string | null
    reconciliationStatus?: string | null
    reconciliationNote?: string | null
    reconciliationDate?: Date | string | null
    actualAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutInvoiceInput = {
    id?: string
    supplier: string
    project: string
    amount: number
    dueDate: Date | string
    status?: string
    paidAt?: Date | string | null
    paymentMethod?: string | null
    bankTransactionId?: string | null
    reconciliationStatus?: string | null
    reconciliationNote?: string | null
    reconciliationDate?: Date | string | null
    actualAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentCreateManyInvoiceInputEnvelope = {
    data: PaymentCreateManyInvoiceInput | PaymentCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type SupplierUpsertWithoutInvoicesInput = {
    update: XOR<SupplierUpdateWithoutInvoicesInput, SupplierUncheckedUpdateWithoutInvoicesInput>
    create: XOR<SupplierCreateWithoutInvoicesInput, SupplierUncheckedCreateWithoutInvoicesInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutInvoicesInput, SupplierUncheckedUpdateWithoutInvoicesInput>
  }

  export type SupplierUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutClientNestedInput
  }

  export type SupplierUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ProjectUpsertWithoutInvoicesInput = {
    update: XOR<ProjectUpdateWithoutInvoicesInput, ProjectUncheckedUpdateWithoutInvoicesInput>
    create: XOR<ProjectCreateWithoutInvoicesInput, ProjectUncheckedCreateWithoutInvoicesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutInvoicesInput, ProjectUncheckedUpdateWithoutInvoicesInput>
  }

  export type ProjectUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    actualAmount?: FloatFieldUpdateOperationsInput | number
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ProjectUpdatemembersInput | string[]
    tags?: ProjectUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: SupplierUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    actualAmount?: FloatFieldUpdateOperationsInput | number
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ProjectUpdatemembersInput | string[]
    tags?: ProjectUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    update: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    data: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceItemScalarWhereInput
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceItemScalarWhereInput = {
    AND?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    OR?: InvoiceItemScalarWhereInput[]
    NOT?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    id?: StringFilter<"InvoiceItem"> | string
    invoiceId?: StringFilter<"InvoiceItem"> | string
    name?: StringFilter<"InvoiceItem"> | string
    description?: StringNullableFilter<"InvoiceItem"> | string | null
    quantity?: FloatFilter<"InvoiceItem"> | number
    unit?: StringNullableFilter<"InvoiceItem"> | string | null
    unitPrice?: FloatFilter<"InvoiceItem"> | number
    amount?: FloatFilter<"InvoiceItem"> | number
    taxRate?: FloatNullableFilter<"InvoiceItem"> | number | null
    taxAmount?: FloatNullableFilter<"InvoiceItem"> | number | null
    remarks?: StringNullableFilter<"InvoiceItem"> | string | null
  }

  export type TaxBreakdownUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: TaxBreakdownWhereUniqueInput
    update: XOR<TaxBreakdownUpdateWithoutInvoiceInput, TaxBreakdownUncheckedUpdateWithoutInvoiceInput>
    create: XOR<TaxBreakdownCreateWithoutInvoiceInput, TaxBreakdownUncheckedCreateWithoutInvoiceInput>
  }

  export type TaxBreakdownUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: TaxBreakdownWhereUniqueInput
    data: XOR<TaxBreakdownUpdateWithoutInvoiceInput, TaxBreakdownUncheckedUpdateWithoutInvoiceInput>
  }

  export type TaxBreakdownUpdateManyWithWhereWithoutInvoiceInput = {
    where: TaxBreakdownScalarWhereInput
    data: XOR<TaxBreakdownUpdateManyMutationInput, TaxBreakdownUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type TaxBreakdownScalarWhereInput = {
    AND?: TaxBreakdownScalarWhereInput | TaxBreakdownScalarWhereInput[]
    OR?: TaxBreakdownScalarWhereInput[]
    NOT?: TaxBreakdownScalarWhereInput | TaxBreakdownScalarWhereInput[]
    id?: StringFilter<"TaxBreakdown"> | string
    invoiceId?: StringFilter<"TaxBreakdown"> | string
    taxRate?: FloatFilter<"TaxBreakdown"> | number
    taxableAmount?: FloatFilter<"TaxBreakdown"> | number
    taxAmount?: FloatFilter<"TaxBreakdown"> | number
  }

  export type PaymentUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
  }

  export type PaymentUpdateManyWithWhereWithoutInvoiceInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    invoiceId?: StringFilter<"Payment"> | string
    supplier?: StringFilter<"Payment"> | string
    project?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    status?: StringFilter<"Payment"> | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    bankTransactionId?: StringNullableFilter<"Payment"> | string | null
    reconciliationStatus?: StringNullableFilter<"Payment"> | string | null
    reconciliationNote?: StringNullableFilter<"Payment"> | string | null
    reconciliationDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    actualAmount?: FloatNullableFilter<"Payment"> | number | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type InvoiceCreateWithoutItemsInput = {
    id?: string
    invoiceNumber?: string | null
    issueDate: Date | string
    dueDate: Date | string
    transactionDate?: Date | string | null
    transactionPeriodStart?: Date | string | null
    transactionPeriodEnd?: Date | string | null
    currency?: string | null
    subject?: string | null
    purchaseOrderNumber?: string | null
    projectName?: string | null
    projectCode?: string | null
    supplier: string
    supplierRegistrationNumber?: string | null
    supplierAddress?: string | null
    supplierPhone?: string | null
    supplierEmail?: string | null
    supplierContactPerson?: string | null
    billingTo?: string | null
    billingToDepartment?: string | null
    billingToContactPerson?: string | null
    subtotal?: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount?: number | null
    nonTaxableAmount?: number | null
    paymentDueDate?: Date | string | null
    paymentTerms?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountType?: string | null
    bankAccountNumber?: string | null
    bankAccountHolder?: string | null
    transferFeePayer?: string | null
    normalizedSupplierName?: string | null
    matchingProjectName?: string | null
    matchingContactPerson?: string | null
    receiptMethod?: string | null
    receiptDateTime?: Date | string | null
    registeredBy?: string | null
    receivedFromEmail?: string | null
    fileHash?: string | null
    storagePath?: string | null
    ocrConfidenceScore?: number | null
    documentVersion?: number | null
    filePath?: string | null
    fileName?: string | null
    fileSize?: number | null
    project: string
    status?: string
    ocrConfidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierRef?: SupplierCreateNestedOneWithoutInvoicesInput
    projectRef?: ProjectCreateNestedOneWithoutInvoicesInput
    taxBreakdowns?: TaxBreakdownCreateNestedManyWithoutInvoiceInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutItemsInput = {
    id?: string
    invoiceNumber?: string | null
    issueDate: Date | string
    dueDate: Date | string
    transactionDate?: Date | string | null
    transactionPeriodStart?: Date | string | null
    transactionPeriodEnd?: Date | string | null
    currency?: string | null
    subject?: string | null
    purchaseOrderNumber?: string | null
    projectName?: string | null
    projectId?: string | null
    projectCode?: string | null
    supplier: string
    supplierId: string
    supplierRegistrationNumber?: string | null
    supplierAddress?: string | null
    supplierPhone?: string | null
    supplierEmail?: string | null
    supplierContactPerson?: string | null
    billingTo?: string | null
    billingToDepartment?: string | null
    billingToContactPerson?: string | null
    subtotal?: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount?: number | null
    nonTaxableAmount?: number | null
    paymentDueDate?: Date | string | null
    paymentTerms?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountType?: string | null
    bankAccountNumber?: string | null
    bankAccountHolder?: string | null
    transferFeePayer?: string | null
    normalizedSupplierName?: string | null
    matchingProjectName?: string | null
    matchingContactPerson?: string | null
    receiptMethod?: string | null
    receiptDateTime?: Date | string | null
    registeredBy?: string | null
    receivedFromEmail?: string | null
    fileHash?: string | null
    storagePath?: string | null
    ocrConfidenceScore?: number | null
    documentVersion?: number | null
    filePath?: string | null
    fileName?: string | null
    fileSize?: number | null
    project: string
    status?: string
    ocrConfidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taxBreakdowns?: TaxBreakdownUncheckedCreateNestedManyWithoutInvoiceInput
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutItemsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
  }

  export type InvoiceUpsertWithoutItemsInput = {
    update: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutItemsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type InvoiceUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierRef?: SupplierUpdateOneWithoutInvoicesNestedInput
    projectRef?: ProjectUpdateOneWithoutInvoicesNestedInput
    taxBreakdowns?: TaxBreakdownUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taxBreakdowns?: TaxBreakdownUncheckedUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateWithoutTaxBreakdownsInput = {
    id?: string
    invoiceNumber?: string | null
    issueDate: Date | string
    dueDate: Date | string
    transactionDate?: Date | string | null
    transactionPeriodStart?: Date | string | null
    transactionPeriodEnd?: Date | string | null
    currency?: string | null
    subject?: string | null
    purchaseOrderNumber?: string | null
    projectName?: string | null
    projectCode?: string | null
    supplier: string
    supplierRegistrationNumber?: string | null
    supplierAddress?: string | null
    supplierPhone?: string | null
    supplierEmail?: string | null
    supplierContactPerson?: string | null
    billingTo?: string | null
    billingToDepartment?: string | null
    billingToContactPerson?: string | null
    subtotal?: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount?: number | null
    nonTaxableAmount?: number | null
    paymentDueDate?: Date | string | null
    paymentTerms?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountType?: string | null
    bankAccountNumber?: string | null
    bankAccountHolder?: string | null
    transferFeePayer?: string | null
    normalizedSupplierName?: string | null
    matchingProjectName?: string | null
    matchingContactPerson?: string | null
    receiptMethod?: string | null
    receiptDateTime?: Date | string | null
    registeredBy?: string | null
    receivedFromEmail?: string | null
    fileHash?: string | null
    storagePath?: string | null
    ocrConfidenceScore?: number | null
    documentVersion?: number | null
    filePath?: string | null
    fileName?: string | null
    fileSize?: number | null
    project: string
    status?: string
    ocrConfidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierRef?: SupplierCreateNestedOneWithoutInvoicesInput
    projectRef?: ProjectCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutTaxBreakdownsInput = {
    id?: string
    invoiceNumber?: string | null
    issueDate: Date | string
    dueDate: Date | string
    transactionDate?: Date | string | null
    transactionPeriodStart?: Date | string | null
    transactionPeriodEnd?: Date | string | null
    currency?: string | null
    subject?: string | null
    purchaseOrderNumber?: string | null
    projectName?: string | null
    projectId?: string | null
    projectCode?: string | null
    supplier: string
    supplierId: string
    supplierRegistrationNumber?: string | null
    supplierAddress?: string | null
    supplierPhone?: string | null
    supplierEmail?: string | null
    supplierContactPerson?: string | null
    billingTo?: string | null
    billingToDepartment?: string | null
    billingToContactPerson?: string | null
    subtotal?: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount?: number | null
    nonTaxableAmount?: number | null
    paymentDueDate?: Date | string | null
    paymentTerms?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountType?: string | null
    bankAccountNumber?: string | null
    bankAccountHolder?: string | null
    transferFeePayer?: string | null
    normalizedSupplierName?: string | null
    matchingProjectName?: string | null
    matchingContactPerson?: string | null
    receiptMethod?: string | null
    receiptDateTime?: Date | string | null
    registeredBy?: string | null
    receivedFromEmail?: string | null
    fileHash?: string | null
    storagePath?: string | null
    ocrConfidenceScore?: number | null
    documentVersion?: number | null
    filePath?: string | null
    fileName?: string | null
    fileSize?: number | null
    project: string
    status?: string
    ocrConfidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutTaxBreakdownsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutTaxBreakdownsInput, InvoiceUncheckedCreateWithoutTaxBreakdownsInput>
  }

  export type InvoiceUpsertWithoutTaxBreakdownsInput = {
    update: XOR<InvoiceUpdateWithoutTaxBreakdownsInput, InvoiceUncheckedUpdateWithoutTaxBreakdownsInput>
    create: XOR<InvoiceCreateWithoutTaxBreakdownsInput, InvoiceUncheckedCreateWithoutTaxBreakdownsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutTaxBreakdownsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutTaxBreakdownsInput, InvoiceUncheckedUpdateWithoutTaxBreakdownsInput>
  }

  export type InvoiceUpdateWithoutTaxBreakdownsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierRef?: SupplierUpdateOneWithoutInvoicesNestedInput
    projectRef?: ProjectUpdateOneWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutTaxBreakdownsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateWithoutPaymentsInput = {
    id?: string
    invoiceNumber?: string | null
    issueDate: Date | string
    dueDate: Date | string
    transactionDate?: Date | string | null
    transactionPeriodStart?: Date | string | null
    transactionPeriodEnd?: Date | string | null
    currency?: string | null
    subject?: string | null
    purchaseOrderNumber?: string | null
    projectName?: string | null
    projectCode?: string | null
    supplier: string
    supplierRegistrationNumber?: string | null
    supplierAddress?: string | null
    supplierPhone?: string | null
    supplierEmail?: string | null
    supplierContactPerson?: string | null
    billingTo?: string | null
    billingToDepartment?: string | null
    billingToContactPerson?: string | null
    subtotal?: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount?: number | null
    nonTaxableAmount?: number | null
    paymentDueDate?: Date | string | null
    paymentTerms?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountType?: string | null
    bankAccountNumber?: string | null
    bankAccountHolder?: string | null
    transferFeePayer?: string | null
    normalizedSupplierName?: string | null
    matchingProjectName?: string | null
    matchingContactPerson?: string | null
    receiptMethod?: string | null
    receiptDateTime?: Date | string | null
    registeredBy?: string | null
    receivedFromEmail?: string | null
    fileHash?: string | null
    storagePath?: string | null
    ocrConfidenceScore?: number | null
    documentVersion?: number | null
    filePath?: string | null
    fileName?: string | null
    fileSize?: number | null
    project: string
    status?: string
    ocrConfidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierRef?: SupplierCreateNestedOneWithoutInvoicesInput
    projectRef?: ProjectCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    taxBreakdowns?: TaxBreakdownCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutPaymentsInput = {
    id?: string
    invoiceNumber?: string | null
    issueDate: Date | string
    dueDate: Date | string
    transactionDate?: Date | string | null
    transactionPeriodStart?: Date | string | null
    transactionPeriodEnd?: Date | string | null
    currency?: string | null
    subject?: string | null
    purchaseOrderNumber?: string | null
    projectName?: string | null
    projectId?: string | null
    projectCode?: string | null
    supplier: string
    supplierId: string
    supplierRegistrationNumber?: string | null
    supplierAddress?: string | null
    supplierPhone?: string | null
    supplierEmail?: string | null
    supplierContactPerson?: string | null
    billingTo?: string | null
    billingToDepartment?: string | null
    billingToContactPerson?: string | null
    subtotal?: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount?: number | null
    nonTaxableAmount?: number | null
    paymentDueDate?: Date | string | null
    paymentTerms?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountType?: string | null
    bankAccountNumber?: string | null
    bankAccountHolder?: string | null
    transferFeePayer?: string | null
    normalizedSupplierName?: string | null
    matchingProjectName?: string | null
    matchingContactPerson?: string | null
    receiptMethod?: string | null
    receiptDateTime?: Date | string | null
    registeredBy?: string | null
    receivedFromEmail?: string | null
    fileHash?: string | null
    storagePath?: string | null
    ocrConfidenceScore?: number | null
    documentVersion?: number | null
    filePath?: string | null
    fileName?: string | null
    fileSize?: number | null
    project: string
    status?: string
    ocrConfidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    taxBreakdowns?: TaxBreakdownUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutPaymentsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
  }

  export type InvoiceUpsertWithoutPaymentsInput = {
    update: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoiceUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierRef?: SupplierUpdateOneWithoutInvoicesNestedInput
    projectRef?: ProjectUpdateOneWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    taxBreakdowns?: TaxBreakdownUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    taxBreakdowns?: TaxBreakdownUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: string
    title: string
    message: string
    relatedId?: string | null
    relatedType?: string | null
    priority?: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    relatedId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    relatedId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    relatedId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyClientInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    status?: string
    startDate: Date | string
    endDate?: Date | string | null
    budget?: number | null
    actualAmount?: number
    manager?: string | null
    members?: ProjectCreatemembersInput | string[]
    tags?: ProjectCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateManySupplierRefInput = {
    id?: string
    invoiceNumber?: string | null
    issueDate: Date | string
    dueDate: Date | string
    transactionDate?: Date | string | null
    transactionPeriodStart?: Date | string | null
    transactionPeriodEnd?: Date | string | null
    currency?: string | null
    subject?: string | null
    purchaseOrderNumber?: string | null
    projectName?: string | null
    projectId?: string | null
    projectCode?: string | null
    supplier: string
    supplierRegistrationNumber?: string | null
    supplierAddress?: string | null
    supplierPhone?: string | null
    supplierEmail?: string | null
    supplierContactPerson?: string | null
    billingTo?: string | null
    billingToDepartment?: string | null
    billingToContactPerson?: string | null
    subtotal?: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount?: number | null
    nonTaxableAmount?: number | null
    paymentDueDate?: Date | string | null
    paymentTerms?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountType?: string | null
    bankAccountNumber?: string | null
    bankAccountHolder?: string | null
    transferFeePayer?: string | null
    normalizedSupplierName?: string | null
    matchingProjectName?: string | null
    matchingContactPerson?: string | null
    receiptMethod?: string | null
    receiptDateTime?: Date | string | null
    registeredBy?: string | null
    receivedFromEmail?: string | null
    fileHash?: string | null
    storagePath?: string | null
    ocrConfidenceScore?: number | null
    documentVersion?: number | null
    filePath?: string | null
    fileName?: string | null
    fileSize?: number | null
    project: string
    status?: string
    ocrConfidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    actualAmount?: FloatFieldUpdateOperationsInput | number
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ProjectUpdatemembersInput | string[]
    tags?: ProjectUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutProjectRefNestedInput
  }

  export type ProjectUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    actualAmount?: FloatFieldUpdateOperationsInput | number
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ProjectUpdatemembersInput | string[]
    tags?: ProjectUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutProjectRefNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    actualAmount?: FloatFieldUpdateOperationsInput | number
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ProjectUpdatemembersInput | string[]
    tags?: ProjectUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutSupplierRefInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectRef?: ProjectUpdateOneWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    taxBreakdowns?: TaxBreakdownUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutSupplierRefInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    taxBreakdowns?: TaxBreakdownUncheckedUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutSupplierRefInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyProjectRefInput = {
    id?: string
    invoiceNumber?: string | null
    issueDate: Date | string
    dueDate: Date | string
    transactionDate?: Date | string | null
    transactionPeriodStart?: Date | string | null
    transactionPeriodEnd?: Date | string | null
    currency?: string | null
    subject?: string | null
    purchaseOrderNumber?: string | null
    projectName?: string | null
    projectCode?: string | null
    supplier: string
    supplierId: string
    supplierRegistrationNumber?: string | null
    supplierAddress?: string | null
    supplierPhone?: string | null
    supplierEmail?: string | null
    supplierContactPerson?: string | null
    billingTo?: string | null
    billingToDepartment?: string | null
    billingToContactPerson?: string | null
    subtotal?: number | null
    taxAmount: number
    amount: number
    taxExcludedAmount: number
    taxExemptAmount?: number | null
    nonTaxableAmount?: number | null
    paymentDueDate?: Date | string | null
    paymentTerms?: string | null
    bankName?: string | null
    bankBranchName?: string | null
    bankAccountType?: string | null
    bankAccountNumber?: string | null
    bankAccountHolder?: string | null
    transferFeePayer?: string | null
    normalizedSupplierName?: string | null
    matchingProjectName?: string | null
    matchingContactPerson?: string | null
    receiptMethod?: string | null
    receiptDateTime?: Date | string | null
    registeredBy?: string | null
    receivedFromEmail?: string | null
    fileHash?: string | null
    storagePath?: string | null
    ocrConfidenceScore?: number | null
    documentVersion?: number | null
    filePath?: string | null
    fileName?: string | null
    fileSize?: number | null
    project: string
    status?: string
    ocrConfidence?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateWithoutProjectRefInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierRef?: SupplierUpdateOneWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    taxBreakdowns?: TaxBreakdownUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutProjectRefInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    taxBreakdowns?: TaxBreakdownUncheckedUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutProjectRefInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    projectCode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierPhone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierEmail?: NullableStringFieldUpdateOperationsInput | string | null
    supplierContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    billingTo?: NullableStringFieldUpdateOperationsInput | string | null
    billingToDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    billingToContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxExcludedAmount?: FloatFieldUpdateOperationsInput | number
    taxExemptAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    nonTaxableAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranchName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolder?: NullableStringFieldUpdateOperationsInput | string | null
    transferFeePayer?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedSupplierName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingProjectName?: NullableStringFieldUpdateOperationsInput | string | null
    matchingContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receiptDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    receivedFromEmail?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    ocrConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    documentVersion?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    project?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ocrConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemCreateManyInvoiceInput = {
    id?: string
    name: string
    description?: string | null
    quantity: number
    unit?: string | null
    unitPrice: number
    amount: number
    taxRate?: number | null
    taxAmount?: number | null
    remarks?: string | null
  }

  export type TaxBreakdownCreateManyInvoiceInput = {
    id?: string
    taxRate: number
    taxableAmount: number
    taxAmount: number
  }

  export type PaymentCreateManyInvoiceInput = {
    id?: string
    supplier: string
    project: string
    amount: number
    dueDate: Date | string
    status?: string
    paidAt?: Date | string | null
    paymentMethod?: string | null
    bankTransactionId?: string | null
    reconciliationStatus?: string | null
    reconciliationNote?: string | null
    reconciliationDate?: Date | string | null
    actualAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceItemUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceItemUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceItemUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    taxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaxBreakdownUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type TaxBreakdownUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type TaxBreakdownUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationNote?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationNote?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationNote?: NullableStringFieldUpdateOperationsInput | string | null
    reconciliationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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