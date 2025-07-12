
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model FileShare
 * 
 */
export type FileShare = $Result.DefaultSelection<Prisma.$FileSharePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FileShares
 * const fileShares = await prisma.fileShare.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more FileShares
   * const fileShares = await prisma.fileShare.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.fileShare`: Exposes CRUD operations for the **FileShare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileShares
    * const fileShares = await prisma.fileShare.findMany()
    * ```
    */
  get fileShare(): Prisma.FileShareDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    FileShare: 'FileShare'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "fileShare"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FileShare: {
        payload: Prisma.$FileSharePayload<ExtArgs>
        fields: Prisma.FileShareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileShareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileShareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>
          }
          findFirst: {
            args: Prisma.FileShareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileShareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>
          }
          findMany: {
            args: Prisma.FileShareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>[]
          }
          create: {
            args: Prisma.FileShareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>
          }
          createMany: {
            args: Prisma.FileShareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileShareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>[]
          }
          delete: {
            args: Prisma.FileShareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>
          }
          update: {
            args: Prisma.FileShareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>
          }
          deleteMany: {
            args: Prisma.FileShareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileShareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileShareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>[]
          }
          upsert: {
            args: Prisma.FileShareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>
          }
          aggregate: {
            args: Prisma.FileShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileShare>
          }
          groupBy: {
            args: Prisma.FileShareGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileShareCountArgs<ExtArgs>
            result: $Utils.Optional<FileShareCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    fileShare?: FileShareOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model FileShare
   */

  export type AggregateFileShare = {
    _count: FileShareCountAggregateOutputType | null
    _avg: FileShareAvgAggregateOutputType | null
    _sum: FileShareSumAggregateOutputType | null
    _min: FileShareMinAggregateOutputType | null
    _max: FileShareMaxAggregateOutputType | null
  }

  export type FileShareAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type FileShareSumAggregateOutputType = {
    fileSize: number | null
  }

  export type FileShareMinAggregateOutputType = {
    id: string | null
    pickupCode: string | null
    fileName: string | null
    originalName: string | null
    filePath: string | null
    fileSize: number | null
    mimeType: string | null
    createdAt: Date | null
    expiresAt: Date | null
    downloaded: boolean | null
    downloadedAt: Date | null
  }

  export type FileShareMaxAggregateOutputType = {
    id: string | null
    pickupCode: string | null
    fileName: string | null
    originalName: string | null
    filePath: string | null
    fileSize: number | null
    mimeType: string | null
    createdAt: Date | null
    expiresAt: Date | null
    downloaded: boolean | null
    downloadedAt: Date | null
  }

  export type FileShareCountAggregateOutputType = {
    id: number
    pickupCode: number
    fileName: number
    originalName: number
    filePath: number
    fileSize: number
    mimeType: number
    createdAt: number
    expiresAt: number
    downloaded: number
    downloadedAt: number
    _all: number
  }


  export type FileShareAvgAggregateInputType = {
    fileSize?: true
  }

  export type FileShareSumAggregateInputType = {
    fileSize?: true
  }

  export type FileShareMinAggregateInputType = {
    id?: true
    pickupCode?: true
    fileName?: true
    originalName?: true
    filePath?: true
    fileSize?: true
    mimeType?: true
    createdAt?: true
    expiresAt?: true
    downloaded?: true
    downloadedAt?: true
  }

  export type FileShareMaxAggregateInputType = {
    id?: true
    pickupCode?: true
    fileName?: true
    originalName?: true
    filePath?: true
    fileSize?: true
    mimeType?: true
    createdAt?: true
    expiresAt?: true
    downloaded?: true
    downloadedAt?: true
  }

  export type FileShareCountAggregateInputType = {
    id?: true
    pickupCode?: true
    fileName?: true
    originalName?: true
    filePath?: true
    fileSize?: true
    mimeType?: true
    createdAt?: true
    expiresAt?: true
    downloaded?: true
    downloadedAt?: true
    _all?: true
  }

  export type FileShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileShare to aggregate.
     */
    where?: FileShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileShares to fetch.
     */
    orderBy?: FileShareOrderByWithRelationInput | FileShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileShares
    **/
    _count?: true | FileShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileShareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileShareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileShareMaxAggregateInputType
  }

  export type GetFileShareAggregateType<T extends FileShareAggregateArgs> = {
        [P in keyof T & keyof AggregateFileShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileShare[P]>
      : GetScalarType<T[P], AggregateFileShare[P]>
  }




  export type FileShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileShareWhereInput
    orderBy?: FileShareOrderByWithAggregationInput | FileShareOrderByWithAggregationInput[]
    by: FileShareScalarFieldEnum[] | FileShareScalarFieldEnum
    having?: FileShareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileShareCountAggregateInputType | true
    _avg?: FileShareAvgAggregateInputType
    _sum?: FileShareSumAggregateInputType
    _min?: FileShareMinAggregateInputType
    _max?: FileShareMaxAggregateInputType
  }

  export type FileShareGroupByOutputType = {
    id: string
    pickupCode: string
    fileName: string
    originalName: string
    filePath: string
    fileSize: number
    mimeType: string
    createdAt: Date
    expiresAt: Date
    downloaded: boolean
    downloadedAt: Date | null
    _count: FileShareCountAggregateOutputType | null
    _avg: FileShareAvgAggregateOutputType | null
    _sum: FileShareSumAggregateOutputType | null
    _min: FileShareMinAggregateOutputType | null
    _max: FileShareMaxAggregateOutputType | null
  }

  type GetFileShareGroupByPayload<T extends FileShareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileShareGroupByOutputType[P]>
            : GetScalarType<T[P], FileShareGroupByOutputType[P]>
        }
      >
    >


  export type FileShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pickupCode?: boolean
    fileName?: boolean
    originalName?: boolean
    filePath?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    downloaded?: boolean
    downloadedAt?: boolean
  }, ExtArgs["result"]["fileShare"]>

  export type FileShareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pickupCode?: boolean
    fileName?: boolean
    originalName?: boolean
    filePath?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    downloaded?: boolean
    downloadedAt?: boolean
  }, ExtArgs["result"]["fileShare"]>

  export type FileShareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pickupCode?: boolean
    fileName?: boolean
    originalName?: boolean
    filePath?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    downloaded?: boolean
    downloadedAt?: boolean
  }, ExtArgs["result"]["fileShare"]>

  export type FileShareSelectScalar = {
    id?: boolean
    pickupCode?: boolean
    fileName?: boolean
    originalName?: boolean
    filePath?: boolean
    fileSize?: boolean
    mimeType?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    downloaded?: boolean
    downloadedAt?: boolean
  }

  export type FileShareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pickupCode" | "fileName" | "originalName" | "filePath" | "fileSize" | "mimeType" | "createdAt" | "expiresAt" | "downloaded" | "downloadedAt", ExtArgs["result"]["fileShare"]>

  export type $FileSharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileShare"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pickupCode: string
      fileName: string
      originalName: string
      filePath: string
      fileSize: number
      mimeType: string
      createdAt: Date
      expiresAt: Date
      downloaded: boolean
      downloadedAt: Date | null
    }, ExtArgs["result"]["fileShare"]>
    composites: {}
  }

  type FileShareGetPayload<S extends boolean | null | undefined | FileShareDefaultArgs> = $Result.GetResult<Prisma.$FileSharePayload, S>

  type FileShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileShareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileShareCountAggregateInputType | true
    }

  export interface FileShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileShare'], meta: { name: 'FileShare' } }
    /**
     * Find zero or one FileShare that matches the filter.
     * @param {FileShareFindUniqueArgs} args - Arguments to find a FileShare
     * @example
     * // Get one FileShare
     * const fileShare = await prisma.fileShare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileShareFindUniqueArgs>(args: SelectSubset<T, FileShareFindUniqueArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileShare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileShareFindUniqueOrThrowArgs} args - Arguments to find a FileShare
     * @example
     * // Get one FileShare
     * const fileShare = await prisma.fileShare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileShareFindUniqueOrThrowArgs>(args: SelectSubset<T, FileShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileShare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileShareFindFirstArgs} args - Arguments to find a FileShare
     * @example
     * // Get one FileShare
     * const fileShare = await prisma.fileShare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileShareFindFirstArgs>(args?: SelectSubset<T, FileShareFindFirstArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileShare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileShareFindFirstOrThrowArgs} args - Arguments to find a FileShare
     * @example
     * // Get one FileShare
     * const fileShare = await prisma.fileShare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileShareFindFirstOrThrowArgs>(args?: SelectSubset<T, FileShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileShares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileShares
     * const fileShares = await prisma.fileShare.findMany()
     * 
     * // Get first 10 FileShares
     * const fileShares = await prisma.fileShare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileShareWithIdOnly = await prisma.fileShare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileShareFindManyArgs>(args?: SelectSubset<T, FileShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileShare.
     * @param {FileShareCreateArgs} args - Arguments to create a FileShare.
     * @example
     * // Create one FileShare
     * const FileShare = await prisma.fileShare.create({
     *   data: {
     *     // ... data to create a FileShare
     *   }
     * })
     * 
     */
    create<T extends FileShareCreateArgs>(args: SelectSubset<T, FileShareCreateArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileShares.
     * @param {FileShareCreateManyArgs} args - Arguments to create many FileShares.
     * @example
     * // Create many FileShares
     * const fileShare = await prisma.fileShare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileShareCreateManyArgs>(args?: SelectSubset<T, FileShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileShares and returns the data saved in the database.
     * @param {FileShareCreateManyAndReturnArgs} args - Arguments to create many FileShares.
     * @example
     * // Create many FileShares
     * const fileShare = await prisma.fileShare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileShares and only return the `id`
     * const fileShareWithIdOnly = await prisma.fileShare.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileShareCreateManyAndReturnArgs>(args?: SelectSubset<T, FileShareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileShare.
     * @param {FileShareDeleteArgs} args - Arguments to delete one FileShare.
     * @example
     * // Delete one FileShare
     * const FileShare = await prisma.fileShare.delete({
     *   where: {
     *     // ... filter to delete one FileShare
     *   }
     * })
     * 
     */
    delete<T extends FileShareDeleteArgs>(args: SelectSubset<T, FileShareDeleteArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileShare.
     * @param {FileShareUpdateArgs} args - Arguments to update one FileShare.
     * @example
     * // Update one FileShare
     * const fileShare = await prisma.fileShare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileShareUpdateArgs>(args: SelectSubset<T, FileShareUpdateArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileShares.
     * @param {FileShareDeleteManyArgs} args - Arguments to filter FileShares to delete.
     * @example
     * // Delete a few FileShares
     * const { count } = await prisma.fileShare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileShareDeleteManyArgs>(args?: SelectSubset<T, FileShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileShares
     * const fileShare = await prisma.fileShare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileShareUpdateManyArgs>(args: SelectSubset<T, FileShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileShares and returns the data updated in the database.
     * @param {FileShareUpdateManyAndReturnArgs} args - Arguments to update many FileShares.
     * @example
     * // Update many FileShares
     * const fileShare = await prisma.fileShare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileShares and only return the `id`
     * const fileShareWithIdOnly = await prisma.fileShare.updateManyAndReturn({
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
    updateManyAndReturn<T extends FileShareUpdateManyAndReturnArgs>(args: SelectSubset<T, FileShareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileShare.
     * @param {FileShareUpsertArgs} args - Arguments to update or create a FileShare.
     * @example
     * // Update or create a FileShare
     * const fileShare = await prisma.fileShare.upsert({
     *   create: {
     *     // ... data to create a FileShare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileShare we want to update
     *   }
     * })
     */
    upsert<T extends FileShareUpsertArgs>(args: SelectSubset<T, FileShareUpsertArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileShareCountArgs} args - Arguments to filter FileShares to count.
     * @example
     * // Count the number of FileShares
     * const count = await prisma.fileShare.count({
     *   where: {
     *     // ... the filter for the FileShares we want to count
     *   }
     * })
    **/
    count<T extends FileShareCountArgs>(
      args?: Subset<T, FileShareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileShareAggregateArgs>(args: Subset<T, FileShareAggregateArgs>): Prisma.PrismaPromise<GetFileShareAggregateType<T>>

    /**
     * Group by FileShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileShareGroupByArgs} args - Group by arguments.
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
      T extends FileShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileShareGroupByArgs['orderBy'] }
        : { orderBy?: FileShareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileShare model
   */
  readonly fields: FileShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileShare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FileShare model
   */
  interface FileShareFieldRefs {
    readonly id: FieldRef<"FileShare", 'String'>
    readonly pickupCode: FieldRef<"FileShare", 'String'>
    readonly fileName: FieldRef<"FileShare", 'String'>
    readonly originalName: FieldRef<"FileShare", 'String'>
    readonly filePath: FieldRef<"FileShare", 'String'>
    readonly fileSize: FieldRef<"FileShare", 'Int'>
    readonly mimeType: FieldRef<"FileShare", 'String'>
    readonly createdAt: FieldRef<"FileShare", 'DateTime'>
    readonly expiresAt: FieldRef<"FileShare", 'DateTime'>
    readonly downloaded: FieldRef<"FileShare", 'Boolean'>
    readonly downloadedAt: FieldRef<"FileShare", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileShare findUnique
   */
  export type FileShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Filter, which FileShare to fetch.
     */
    where: FileShareWhereUniqueInput
  }

  /**
   * FileShare findUniqueOrThrow
   */
  export type FileShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Filter, which FileShare to fetch.
     */
    where: FileShareWhereUniqueInput
  }

  /**
   * FileShare findFirst
   */
  export type FileShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Filter, which FileShare to fetch.
     */
    where?: FileShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileShares to fetch.
     */
    orderBy?: FileShareOrderByWithRelationInput | FileShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileShares.
     */
    cursor?: FileShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileShares.
     */
    distinct?: FileShareScalarFieldEnum | FileShareScalarFieldEnum[]
  }

  /**
   * FileShare findFirstOrThrow
   */
  export type FileShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Filter, which FileShare to fetch.
     */
    where?: FileShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileShares to fetch.
     */
    orderBy?: FileShareOrderByWithRelationInput | FileShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileShares.
     */
    cursor?: FileShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileShares.
     */
    distinct?: FileShareScalarFieldEnum | FileShareScalarFieldEnum[]
  }

  /**
   * FileShare findMany
   */
  export type FileShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Filter, which FileShares to fetch.
     */
    where?: FileShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileShares to fetch.
     */
    orderBy?: FileShareOrderByWithRelationInput | FileShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileShares.
     */
    cursor?: FileShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileShares.
     */
    skip?: number
    distinct?: FileShareScalarFieldEnum | FileShareScalarFieldEnum[]
  }

  /**
   * FileShare create
   */
  export type FileShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * The data needed to create a FileShare.
     */
    data: XOR<FileShareCreateInput, FileShareUncheckedCreateInput>
  }

  /**
   * FileShare createMany
   */
  export type FileShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileShares.
     */
    data: FileShareCreateManyInput | FileShareCreateManyInput[]
  }

  /**
   * FileShare createManyAndReturn
   */
  export type FileShareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * The data used to create many FileShares.
     */
    data: FileShareCreateManyInput | FileShareCreateManyInput[]
  }

  /**
   * FileShare update
   */
  export type FileShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * The data needed to update a FileShare.
     */
    data: XOR<FileShareUpdateInput, FileShareUncheckedUpdateInput>
    /**
     * Choose, which FileShare to update.
     */
    where: FileShareWhereUniqueInput
  }

  /**
   * FileShare updateMany
   */
  export type FileShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileShares.
     */
    data: XOR<FileShareUpdateManyMutationInput, FileShareUncheckedUpdateManyInput>
    /**
     * Filter which FileShares to update
     */
    where?: FileShareWhereInput
    /**
     * Limit how many FileShares to update.
     */
    limit?: number
  }

  /**
   * FileShare updateManyAndReturn
   */
  export type FileShareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * The data used to update FileShares.
     */
    data: XOR<FileShareUpdateManyMutationInput, FileShareUncheckedUpdateManyInput>
    /**
     * Filter which FileShares to update
     */
    where?: FileShareWhereInput
    /**
     * Limit how many FileShares to update.
     */
    limit?: number
  }

  /**
   * FileShare upsert
   */
  export type FileShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * The filter to search for the FileShare to update in case it exists.
     */
    where: FileShareWhereUniqueInput
    /**
     * In case the FileShare found by the `where` argument doesn't exist, create a new FileShare with this data.
     */
    create: XOR<FileShareCreateInput, FileShareUncheckedCreateInput>
    /**
     * In case the FileShare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileShareUpdateInput, FileShareUncheckedUpdateInput>
  }

  /**
   * FileShare delete
   */
  export type FileShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Filter which FileShare to delete.
     */
    where: FileShareWhereUniqueInput
  }

  /**
   * FileShare deleteMany
   */
  export type FileShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileShares to delete
     */
    where?: FileShareWhereInput
    /**
     * Limit how many FileShares to delete.
     */
    limit?: number
  }

  /**
   * FileShare without action
   */
  export type FileShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FileShareScalarFieldEnum: {
    id: 'id',
    pickupCode: 'pickupCode',
    fileName: 'fileName',
    originalName: 'originalName',
    filePath: 'filePath',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    downloaded: 'downloaded',
    downloadedAt: 'downloadedAt'
  };

  export type FileShareScalarFieldEnum = (typeof FileShareScalarFieldEnum)[keyof typeof FileShareScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type FileShareWhereInput = {
    AND?: FileShareWhereInput | FileShareWhereInput[]
    OR?: FileShareWhereInput[]
    NOT?: FileShareWhereInput | FileShareWhereInput[]
    id?: StringFilter<"FileShare"> | string
    pickupCode?: StringFilter<"FileShare"> | string
    fileName?: StringFilter<"FileShare"> | string
    originalName?: StringFilter<"FileShare"> | string
    filePath?: StringFilter<"FileShare"> | string
    fileSize?: IntFilter<"FileShare"> | number
    mimeType?: StringFilter<"FileShare"> | string
    createdAt?: DateTimeFilter<"FileShare"> | Date | string
    expiresAt?: DateTimeFilter<"FileShare"> | Date | string
    downloaded?: BoolFilter<"FileShare"> | boolean
    downloadedAt?: DateTimeNullableFilter<"FileShare"> | Date | string | null
  }

  export type FileShareOrderByWithRelationInput = {
    id?: SortOrder
    pickupCode?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    downloaded?: SortOrder
    downloadedAt?: SortOrderInput | SortOrder
  }

  export type FileShareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pickupCode?: string
    AND?: FileShareWhereInput | FileShareWhereInput[]
    OR?: FileShareWhereInput[]
    NOT?: FileShareWhereInput | FileShareWhereInput[]
    fileName?: StringFilter<"FileShare"> | string
    originalName?: StringFilter<"FileShare"> | string
    filePath?: StringFilter<"FileShare"> | string
    fileSize?: IntFilter<"FileShare"> | number
    mimeType?: StringFilter<"FileShare"> | string
    createdAt?: DateTimeFilter<"FileShare"> | Date | string
    expiresAt?: DateTimeFilter<"FileShare"> | Date | string
    downloaded?: BoolFilter<"FileShare"> | boolean
    downloadedAt?: DateTimeNullableFilter<"FileShare"> | Date | string | null
  }, "id" | "pickupCode">

  export type FileShareOrderByWithAggregationInput = {
    id?: SortOrder
    pickupCode?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    downloaded?: SortOrder
    downloadedAt?: SortOrderInput | SortOrder
    _count?: FileShareCountOrderByAggregateInput
    _avg?: FileShareAvgOrderByAggregateInput
    _max?: FileShareMaxOrderByAggregateInput
    _min?: FileShareMinOrderByAggregateInput
    _sum?: FileShareSumOrderByAggregateInput
  }

  export type FileShareScalarWhereWithAggregatesInput = {
    AND?: FileShareScalarWhereWithAggregatesInput | FileShareScalarWhereWithAggregatesInput[]
    OR?: FileShareScalarWhereWithAggregatesInput[]
    NOT?: FileShareScalarWhereWithAggregatesInput | FileShareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FileShare"> | string
    pickupCode?: StringWithAggregatesFilter<"FileShare"> | string
    fileName?: StringWithAggregatesFilter<"FileShare"> | string
    originalName?: StringWithAggregatesFilter<"FileShare"> | string
    filePath?: StringWithAggregatesFilter<"FileShare"> | string
    fileSize?: IntWithAggregatesFilter<"FileShare"> | number
    mimeType?: StringWithAggregatesFilter<"FileShare"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FileShare"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"FileShare"> | Date | string
    downloaded?: BoolWithAggregatesFilter<"FileShare"> | boolean
    downloadedAt?: DateTimeNullableWithAggregatesFilter<"FileShare"> | Date | string | null
  }

  export type FileShareCreateInput = {
    id?: string
    pickupCode: string
    fileName: string
    originalName: string
    filePath: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    expiresAt: Date | string
    downloaded?: boolean
    downloadedAt?: Date | string | null
  }

  export type FileShareUncheckedCreateInput = {
    id?: string
    pickupCode: string
    fileName: string
    originalName: string
    filePath: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    expiresAt: Date | string
    downloaded?: boolean
    downloadedAt?: Date | string | null
  }

  export type FileShareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupCode?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    downloaded?: BoolFieldUpdateOperationsInput | boolean
    downloadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileShareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupCode?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    downloaded?: BoolFieldUpdateOperationsInput | boolean
    downloadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileShareCreateManyInput = {
    id?: string
    pickupCode: string
    fileName: string
    originalName: string
    filePath: string
    fileSize: number
    mimeType: string
    createdAt?: Date | string
    expiresAt: Date | string
    downloaded?: boolean
    downloadedAt?: Date | string | null
  }

  export type FileShareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupCode?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    downloaded?: BoolFieldUpdateOperationsInput | boolean
    downloadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileShareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupCode?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    downloaded?: BoolFieldUpdateOperationsInput | boolean
    downloadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FileShareCountOrderByAggregateInput = {
    id?: SortOrder
    pickupCode?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    downloaded?: SortOrder
    downloadedAt?: SortOrder
  }

  export type FileShareAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type FileShareMaxOrderByAggregateInput = {
    id?: SortOrder
    pickupCode?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    downloaded?: SortOrder
    downloadedAt?: SortOrder
  }

  export type FileShareMinOrderByAggregateInput = {
    id?: SortOrder
    pickupCode?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    downloaded?: SortOrder
    downloadedAt?: SortOrder
  }

  export type FileShareSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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