
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model PhotoUrl
 * 
 */
export type PhotoUrl = $Result.DefaultSelection<Prisma.$PhotoUrlPayload>
/**
 * Model Amenity
 * 
 */
export type Amenity = $Result.DefaultSelection<Prisma.$AmenityPayload>
/**
 * Model HighLight
 * 
 */
export type HighLight = $Result.DefaultSelection<Prisma.$HighLightPayload>
/**
 * Model FavouriteProperty
 * 
 */
export type FavouriteProperty = $Result.DefaultSelection<Prisma.$FavouritePropertyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  tanent: 'tanent',
  manager: 'manager',
  admin: 'admin'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photoUrl`: Exposes CRUD operations for the **PhotoUrl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhotoUrls
    * const photoUrls = await prisma.photoUrl.findMany()
    * ```
    */
  get photoUrl(): Prisma.PhotoUrlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.amenity`: Exposes CRUD operations for the **Amenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amenities
    * const amenities = await prisma.amenity.findMany()
    * ```
    */
  get amenity(): Prisma.AmenityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.highLight`: Exposes CRUD operations for the **HighLight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HighLights
    * const highLights = await prisma.highLight.findMany()
    * ```
    */
  get highLight(): Prisma.HighLightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favouriteProperty`: Exposes CRUD operations for the **FavouriteProperty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavouriteProperties
    * const favouriteProperties = await prisma.favouriteProperty.findMany()
    * ```
    */
  get favouriteProperty(): Prisma.FavouritePropertyDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Property: 'Property',
    PhotoUrl: 'PhotoUrl',
    Amenity: 'Amenity',
    HighLight: 'HighLight',
    FavouriteProperty: 'FavouriteProperty'
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
      modelProps: "user" | "property" | "photoUrl" | "amenity" | "highLight" | "favouriteProperty"
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
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      PhotoUrl: {
        payload: Prisma.$PhotoUrlPayload<ExtArgs>
        fields: Prisma.PhotoUrlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoUrlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoUrlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoUrlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoUrlPayload>
          }
          findFirst: {
            args: Prisma.PhotoUrlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoUrlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoUrlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoUrlPayload>
          }
          findMany: {
            args: Prisma.PhotoUrlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoUrlPayload>[]
          }
          create: {
            args: Prisma.PhotoUrlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoUrlPayload>
          }
          createMany: {
            args: Prisma.PhotoUrlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PhotoUrlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoUrlPayload>
          }
          update: {
            args: Prisma.PhotoUrlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoUrlPayload>
          }
          deleteMany: {
            args: Prisma.PhotoUrlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUrlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhotoUrlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoUrlPayload>
          }
          aggregate: {
            args: Prisma.PhotoUrlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotoUrl>
          }
          groupBy: {
            args: Prisma.PhotoUrlGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoUrlGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoUrlCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoUrlCountAggregateOutputType> | number
          }
        }
      }
      Amenity: {
        payload: Prisma.$AmenityPayload<ExtArgs>
        fields: Prisma.AmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findFirst: {
            args: Prisma.AmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findMany: {
            args: Prisma.AmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          create: {
            args: Prisma.AmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          createMany: {
            args: Prisma.AmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          update: {
            args: Prisma.AmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          deleteMany: {
            args: Prisma.AmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          aggregate: {
            args: Prisma.AmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmenity>
          }
          groupBy: {
            args: Prisma.AmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmenityCountArgs<ExtArgs>
            result: $Utils.Optional<AmenityCountAggregateOutputType> | number
          }
        }
      }
      HighLight: {
        payload: Prisma.$HighLightPayload<ExtArgs>
        fields: Prisma.HighLightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HighLightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighLightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HighLightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighLightPayload>
          }
          findFirst: {
            args: Prisma.HighLightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighLightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HighLightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighLightPayload>
          }
          findMany: {
            args: Prisma.HighLightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighLightPayload>[]
          }
          create: {
            args: Prisma.HighLightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighLightPayload>
          }
          createMany: {
            args: Prisma.HighLightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HighLightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighLightPayload>
          }
          update: {
            args: Prisma.HighLightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighLightPayload>
          }
          deleteMany: {
            args: Prisma.HighLightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HighLightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HighLightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighLightPayload>
          }
          aggregate: {
            args: Prisma.HighLightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHighLight>
          }
          groupBy: {
            args: Prisma.HighLightGroupByArgs<ExtArgs>
            result: $Utils.Optional<HighLightGroupByOutputType>[]
          }
          count: {
            args: Prisma.HighLightCountArgs<ExtArgs>
            result: $Utils.Optional<HighLightCountAggregateOutputType> | number
          }
        }
      }
      FavouriteProperty: {
        payload: Prisma.$FavouritePropertyPayload<ExtArgs>
        fields: Prisma.FavouritePropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavouritePropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavouritePropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePropertyPayload>
          }
          findFirst: {
            args: Prisma.FavouritePropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavouritePropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePropertyPayload>
          }
          findMany: {
            args: Prisma.FavouritePropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePropertyPayload>[]
          }
          create: {
            args: Prisma.FavouritePropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePropertyPayload>
          }
          createMany: {
            args: Prisma.FavouritePropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FavouritePropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePropertyPayload>
          }
          update: {
            args: Prisma.FavouritePropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePropertyPayload>
          }
          deleteMany: {
            args: Prisma.FavouritePropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavouritePropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavouritePropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePropertyPayload>
          }
          aggregate: {
            args: Prisma.FavouritePropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavouriteProperty>
          }
          groupBy: {
            args: Prisma.FavouritePropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavouritePropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavouritePropertyCountArgs<ExtArgs>
            result: $Utils.Optional<FavouritePropertyCountAggregateOutputType> | number
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
    user?: UserOmit
    property?: PropertyOmit
    photoUrl?: PhotoUrlOmit
    amenity?: AmenityOmit
    highLight?: HighLightOmit
    favouriteProperty?: FavouritePropertyOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    properties: number
    FavouriteProperty: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | UserCountOutputTypeCountPropertiesArgs
    FavouriteProperty?: boolean | UserCountOutputTypeCountFavouritePropertyArgs
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
  export type UserCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavouritePropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouritePropertyWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    photoUrls: number
    amenities: number
    highLights: number
    FavouriteProperty: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photoUrls?: boolean | PropertyCountOutputTypeCountPhotoUrlsArgs
    amenities?: boolean | PropertyCountOutputTypeCountAmenitiesArgs
    highLights?: boolean | PropertyCountOutputTypeCountHighLightsArgs
    FavouriteProperty?: boolean | PropertyCountOutputTypeCountFavouritePropertyArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountPhotoUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoUrlWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountHighLightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighLightWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountFavouritePropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouritePropertyWhereInput
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
    firstName: string | null
    lastName: string | null
    username: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    password: string | null
    isVerified: boolean | null
    role: $Enums.UserRole | null
    phoneNumber: string | null
    forgotPasswordToken: string | null
    forgotPasswordTokenExpiry: Date | null
    verifyToken: string | null
    verifyTokenExpiry: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    username: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    password: string | null
    isVerified: boolean | null
    role: $Enums.UserRole | null
    phoneNumber: string | null
    forgotPasswordToken: string | null
    forgotPasswordTokenExpiry: Date | null
    verifyToken: string | null
    verifyTokenExpiry: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    username: number
    email: number
    createdAt: number
    updatedAt: number
    password: number
    isVerified: number
    role: number
    phoneNumber: number
    forgotPasswordToken: number
    forgotPasswordTokenExpiry: number
    verifyToken: number
    verifyTokenExpiry: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    password?: true
    isVerified?: true
    role?: true
    phoneNumber?: true
    forgotPasswordToken?: true
    forgotPasswordTokenExpiry?: true
    verifyToken?: true
    verifyTokenExpiry?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    password?: true
    isVerified?: true
    role?: true
    phoneNumber?: true
    forgotPasswordToken?: true
    forgotPasswordTokenExpiry?: true
    verifyToken?: true
    verifyTokenExpiry?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    password?: true
    isVerified?: true
    role?: true
    phoneNumber?: true
    forgotPasswordToken?: true
    forgotPasswordTokenExpiry?: true
    verifyToken?: true
    verifyTokenExpiry?: true
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
    firstName: string
    lastName: string
    username: string
    email: string
    createdAt: Date
    updatedAt: Date
    password: string
    isVerified: boolean
    role: $Enums.UserRole
    phoneNumber: string | null
    forgotPasswordToken: string | null
    forgotPasswordTokenExpiry: Date | null
    verifyToken: string | null
    verifyTokenExpiry: Date | null
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
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    password?: boolean
    isVerified?: boolean
    role?: boolean
    phoneNumber?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordTokenExpiry?: boolean
    verifyToken?: boolean
    verifyTokenExpiry?: boolean
    properties?: boolean | User$propertiesArgs<ExtArgs>
    FavouriteProperty?: boolean | User$FavouritePropertyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    password?: boolean
    isVerified?: boolean
    role?: boolean
    phoneNumber?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordTokenExpiry?: boolean
    verifyToken?: boolean
    verifyTokenExpiry?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "username" | "email" | "createdAt" | "updatedAt" | "password" | "isVerified" | "role" | "phoneNumber" | "forgotPasswordToken" | "forgotPasswordTokenExpiry" | "verifyToken" | "verifyTokenExpiry", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | User$propertiesArgs<ExtArgs>
    FavouriteProperty?: boolean | User$FavouritePropertyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      FavouriteProperty: Prisma.$FavouritePropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      username: string
      email: string
      createdAt: Date
      updatedAt: Date
      password: string
      isVerified: boolean
      role: $Enums.UserRole
      phoneNumber: string | null
      forgotPasswordToken: string | null
      forgotPasswordTokenExpiry: Date | null
      verifyToken: string | null
      verifyTokenExpiry: Date | null
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
    properties<T extends User$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, User$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    FavouriteProperty<T extends User$FavouritePropertyArgs<ExtArgs> = {}>(args?: Subset<T, User$FavouritePropertyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly forgotPasswordToken: FieldRef<"User", 'String'>
    readonly forgotPasswordTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly verifyToken: FieldRef<"User", 'String'>
    readonly verifyTokenExpiry: FieldRef<"User", 'DateTime'>
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
   * User.properties
   */
  export type User$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * User.FavouriteProperty
   */
  export type User$FavouritePropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteProperty
     */
    select?: FavouritePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteProperty
     */
    omit?: FavouritePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritePropertyInclude<ExtArgs> | null
    where?: FavouritePropertyWhereInput
    orderBy?: FavouritePropertyOrderByWithRelationInput | FavouritePropertyOrderByWithRelationInput[]
    cursor?: FavouritePropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouritePropertyScalarFieldEnum | FavouritePropertyScalarFieldEnum[]
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
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    pricePerMonth: number | null
    securityDeposit: number | null
    applicationFee: number | null
    beds: number | null
    baths: number | null
    squareFeet: number | null
    averageRating: number | null
    numberOfReviews: number | null
  }

  export type PropertySumAggregateOutputType = {
    pricePerMonth: number | null
    securityDeposit: number | null
    applicationFee: number | null
    beds: number | null
    baths: number | null
    squareFeet: number | null
    averageRating: number | null
    numberOfReviews: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    pricePerMonth: number | null
    securityDeposit: number | null
    applicationFee: number | null
    isParkingIncluded: boolean | null
    beds: number | null
    baths: number | null
    squareFeet: number | null
    propertyType: string | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: string | null
    ownerId: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    pricePerMonth: number | null
    securityDeposit: number | null
    applicationFee: number | null
    isParkingIncluded: boolean | null
    beds: number | null
    baths: number | null
    squareFeet: number | null
    propertyType: string | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: string | null
    ownerId: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    name: number
    description: number
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded: number
    beds: number
    baths: number
    squareFeet: number
    propertyType: number
    averageRating: number
    numberOfReviews: number
    locationId: number
    ownerId: number
    isAvailable: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    pricePerMonth?: true
    securityDeposit?: true
    applicationFee?: true
    beds?: true
    baths?: true
    squareFeet?: true
    averageRating?: true
    numberOfReviews?: true
  }

  export type PropertySumAggregateInputType = {
    pricePerMonth?: true
    securityDeposit?: true
    applicationFee?: true
    beds?: true
    baths?: true
    squareFeet?: true
    averageRating?: true
    numberOfReviews?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pricePerMonth?: true
    securityDeposit?: true
    applicationFee?: true
    isParkingIncluded?: true
    beds?: true
    baths?: true
    squareFeet?: true
    propertyType?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    ownerId?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pricePerMonth?: true
    securityDeposit?: true
    applicationFee?: true
    isParkingIncluded?: true
    beds?: true
    baths?: true
    squareFeet?: true
    propertyType?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    ownerId?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pricePerMonth?: true
    securityDeposit?: true
    applicationFee?: true
    isParkingIncluded?: true
    beds?: true
    baths?: true
    squareFeet?: true
    propertyType?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    ownerId?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    name: string
    description: string
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded: boolean
    beds: number
    baths: number
    squareFeet: number
    propertyType: string
    averageRating: number
    numberOfReviews: number
    locationId: string
    ownerId: string
    isAvailable: boolean
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    pricePerMonth?: boolean
    securityDeposit?: boolean
    applicationFee?: boolean
    isParkingIncluded?: boolean
    beds?: boolean
    baths?: boolean
    squareFeet?: boolean
    propertyType?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    ownerId?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    photoUrls?: boolean | Property$photoUrlsArgs<ExtArgs>
    amenities?: boolean | Property$amenitiesArgs<ExtArgs>
    highLights?: boolean | Property$highLightsArgs<ExtArgs>
    FavouriteProperty?: boolean | Property$FavouritePropertyArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>



  export type PropertySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    pricePerMonth?: boolean
    securityDeposit?: boolean
    applicationFee?: boolean
    isParkingIncluded?: boolean
    beds?: boolean
    baths?: boolean
    squareFeet?: boolean
    propertyType?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    ownerId?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "pricePerMonth" | "securityDeposit" | "applicationFee" | "isParkingIncluded" | "beds" | "baths" | "squareFeet" | "propertyType" | "averageRating" | "numberOfReviews" | "locationId" | "ownerId" | "isAvailable" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    photoUrls?: boolean | Property$photoUrlsArgs<ExtArgs>
    amenities?: boolean | Property$amenitiesArgs<ExtArgs>
    highLights?: boolean | Property$highLightsArgs<ExtArgs>
    FavouriteProperty?: boolean | Property$FavouritePropertyArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      photoUrls: Prisma.$PhotoUrlPayload<ExtArgs>[]
      amenities: Prisma.$AmenityPayload<ExtArgs>[]
      highLights: Prisma.$HighLightPayload<ExtArgs>[]
      FavouriteProperty: Prisma.$FavouritePropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      pricePerMonth: number
      securityDeposit: number
      applicationFee: number
      isParkingIncluded: boolean
      beds: number
      baths: number
      squareFeet: number
      propertyType: string
      averageRating: number
      numberOfReviews: number
      locationId: string
      ownerId: string
      isAvailable: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    photoUrls<T extends Property$photoUrlsArgs<ExtArgs> = {}>(args?: Subset<T, Property$photoUrlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoUrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    amenities<T extends Property$amenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Property$amenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    highLights<T extends Property$highLightsArgs<ExtArgs> = {}>(args?: Subset<T, Property$highLightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighLightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    FavouriteProperty<T extends Property$FavouritePropertyArgs<ExtArgs> = {}>(args?: Subset<T, Property$FavouritePropertyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly name: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly pricePerMonth: FieldRef<"Property", 'Float'>
    readonly securityDeposit: FieldRef<"Property", 'Float'>
    readonly applicationFee: FieldRef<"Property", 'Float'>
    readonly isParkingIncluded: FieldRef<"Property", 'Boolean'>
    readonly beds: FieldRef<"Property", 'Int'>
    readonly baths: FieldRef<"Property", 'Int'>
    readonly squareFeet: FieldRef<"Property", 'Float'>
    readonly propertyType: FieldRef<"Property", 'String'>
    readonly averageRating: FieldRef<"Property", 'Float'>
    readonly numberOfReviews: FieldRef<"Property", 'Int'>
    readonly locationId: FieldRef<"Property", 'String'>
    readonly ownerId: FieldRef<"Property", 'String'>
    readonly isAvailable: FieldRef<"Property", 'Boolean'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.photoUrls
   */
  export type Property$photoUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoUrl
     */
    select?: PhotoUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoUrl
     */
    omit?: PhotoUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoUrlInclude<ExtArgs> | null
    where?: PhotoUrlWhereInput
    orderBy?: PhotoUrlOrderByWithRelationInput | PhotoUrlOrderByWithRelationInput[]
    cursor?: PhotoUrlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoUrlScalarFieldEnum | PhotoUrlScalarFieldEnum[]
  }

  /**
   * Property.amenities
   */
  export type Property$amenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    where?: AmenityWhereInput
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    cursor?: AmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Property.highLights
   */
  export type Property$highLightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighLight
     */
    select?: HighLightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighLight
     */
    omit?: HighLightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighLightInclude<ExtArgs> | null
    where?: HighLightWhereInput
    orderBy?: HighLightOrderByWithRelationInput | HighLightOrderByWithRelationInput[]
    cursor?: HighLightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HighLightScalarFieldEnum | HighLightScalarFieldEnum[]
  }

  /**
   * Property.FavouriteProperty
   */
  export type Property$FavouritePropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteProperty
     */
    select?: FavouritePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteProperty
     */
    omit?: FavouritePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritePropertyInclude<ExtArgs> | null
    where?: FavouritePropertyWhereInput
    orderBy?: FavouritePropertyOrderByWithRelationInput | FavouritePropertyOrderByWithRelationInput[]
    cursor?: FavouritePropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouritePropertyScalarFieldEnum | FavouritePropertyScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model PhotoUrl
   */

  export type AggregatePhotoUrl = {
    _count: PhotoUrlCountAggregateOutputType | null
    _min: PhotoUrlMinAggregateOutputType | null
    _max: PhotoUrlMaxAggregateOutputType | null
  }

  export type PhotoUrlMinAggregateOutputType = {
    id: string | null
    url: string | null
    propertyId: string | null
  }

  export type PhotoUrlMaxAggregateOutputType = {
    id: string | null
    url: string | null
    propertyId: string | null
  }

  export type PhotoUrlCountAggregateOutputType = {
    id: number
    url: number
    propertyId: number
    _all: number
  }


  export type PhotoUrlMinAggregateInputType = {
    id?: true
    url?: true
    propertyId?: true
  }

  export type PhotoUrlMaxAggregateInputType = {
    id?: true
    url?: true
    propertyId?: true
  }

  export type PhotoUrlCountAggregateInputType = {
    id?: true
    url?: true
    propertyId?: true
    _all?: true
  }

  export type PhotoUrlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoUrl to aggregate.
     */
    where?: PhotoUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoUrls to fetch.
     */
    orderBy?: PhotoUrlOrderByWithRelationInput | PhotoUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhotoUrls
    **/
    _count?: true | PhotoUrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoUrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoUrlMaxAggregateInputType
  }

  export type GetPhotoUrlAggregateType<T extends PhotoUrlAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotoUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotoUrl[P]>
      : GetScalarType<T[P], AggregatePhotoUrl[P]>
  }




  export type PhotoUrlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoUrlWhereInput
    orderBy?: PhotoUrlOrderByWithAggregationInput | PhotoUrlOrderByWithAggregationInput[]
    by: PhotoUrlScalarFieldEnum[] | PhotoUrlScalarFieldEnum
    having?: PhotoUrlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoUrlCountAggregateInputType | true
    _min?: PhotoUrlMinAggregateInputType
    _max?: PhotoUrlMaxAggregateInputType
  }

  export type PhotoUrlGroupByOutputType = {
    id: string
    url: string
    propertyId: string
    _count: PhotoUrlCountAggregateOutputType | null
    _min: PhotoUrlMinAggregateOutputType | null
    _max: PhotoUrlMaxAggregateOutputType | null
  }

  type GetPhotoUrlGroupByPayload<T extends PhotoUrlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoUrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoUrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoUrlGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoUrlGroupByOutputType[P]>
        }
      >
    >


  export type PhotoUrlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoUrl"]>



  export type PhotoUrlSelectScalar = {
    id?: boolean
    url?: boolean
    propertyId?: boolean
  }

  export type PhotoUrlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "propertyId", ExtArgs["result"]["photoUrl"]>
  export type PhotoUrlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PhotoUrlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhotoUrl"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      propertyId: string
    }, ExtArgs["result"]["photoUrl"]>
    composites: {}
  }

  type PhotoUrlGetPayload<S extends boolean | null | undefined | PhotoUrlDefaultArgs> = $Result.GetResult<Prisma.$PhotoUrlPayload, S>

  type PhotoUrlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoUrlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoUrlCountAggregateInputType | true
    }

  export interface PhotoUrlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhotoUrl'], meta: { name: 'PhotoUrl' } }
    /**
     * Find zero or one PhotoUrl that matches the filter.
     * @param {PhotoUrlFindUniqueArgs} args - Arguments to find a PhotoUrl
     * @example
     * // Get one PhotoUrl
     * const photoUrl = await prisma.photoUrl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoUrlFindUniqueArgs>(args: SelectSubset<T, PhotoUrlFindUniqueArgs<ExtArgs>>): Prisma__PhotoUrlClient<$Result.GetResult<Prisma.$PhotoUrlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhotoUrl that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoUrlFindUniqueOrThrowArgs} args - Arguments to find a PhotoUrl
     * @example
     * // Get one PhotoUrl
     * const photoUrl = await prisma.photoUrl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoUrlFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoUrlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoUrlClient<$Result.GetResult<Prisma.$PhotoUrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoUrl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUrlFindFirstArgs} args - Arguments to find a PhotoUrl
     * @example
     * // Get one PhotoUrl
     * const photoUrl = await prisma.photoUrl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoUrlFindFirstArgs>(args?: SelectSubset<T, PhotoUrlFindFirstArgs<ExtArgs>>): Prisma__PhotoUrlClient<$Result.GetResult<Prisma.$PhotoUrlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoUrl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUrlFindFirstOrThrowArgs} args - Arguments to find a PhotoUrl
     * @example
     * // Get one PhotoUrl
     * const photoUrl = await prisma.photoUrl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoUrlFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoUrlFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoUrlClient<$Result.GetResult<Prisma.$PhotoUrlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhotoUrls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUrlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotoUrls
     * const photoUrls = await prisma.photoUrl.findMany()
     * 
     * // Get first 10 PhotoUrls
     * const photoUrls = await prisma.photoUrl.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoUrlWithIdOnly = await prisma.photoUrl.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoUrlFindManyArgs>(args?: SelectSubset<T, PhotoUrlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoUrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhotoUrl.
     * @param {PhotoUrlCreateArgs} args - Arguments to create a PhotoUrl.
     * @example
     * // Create one PhotoUrl
     * const PhotoUrl = await prisma.photoUrl.create({
     *   data: {
     *     // ... data to create a PhotoUrl
     *   }
     * })
     * 
     */
    create<T extends PhotoUrlCreateArgs>(args: SelectSubset<T, PhotoUrlCreateArgs<ExtArgs>>): Prisma__PhotoUrlClient<$Result.GetResult<Prisma.$PhotoUrlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhotoUrls.
     * @param {PhotoUrlCreateManyArgs} args - Arguments to create many PhotoUrls.
     * @example
     * // Create many PhotoUrls
     * const photoUrl = await prisma.photoUrl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoUrlCreateManyArgs>(args?: SelectSubset<T, PhotoUrlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PhotoUrl.
     * @param {PhotoUrlDeleteArgs} args - Arguments to delete one PhotoUrl.
     * @example
     * // Delete one PhotoUrl
     * const PhotoUrl = await prisma.photoUrl.delete({
     *   where: {
     *     // ... filter to delete one PhotoUrl
     *   }
     * })
     * 
     */
    delete<T extends PhotoUrlDeleteArgs>(args: SelectSubset<T, PhotoUrlDeleteArgs<ExtArgs>>): Prisma__PhotoUrlClient<$Result.GetResult<Prisma.$PhotoUrlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhotoUrl.
     * @param {PhotoUrlUpdateArgs} args - Arguments to update one PhotoUrl.
     * @example
     * // Update one PhotoUrl
     * const photoUrl = await prisma.photoUrl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUrlUpdateArgs>(args: SelectSubset<T, PhotoUrlUpdateArgs<ExtArgs>>): Prisma__PhotoUrlClient<$Result.GetResult<Prisma.$PhotoUrlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhotoUrls.
     * @param {PhotoUrlDeleteManyArgs} args - Arguments to filter PhotoUrls to delete.
     * @example
     * // Delete a few PhotoUrls
     * const { count } = await prisma.photoUrl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoUrlDeleteManyArgs>(args?: SelectSubset<T, PhotoUrlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUrlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotoUrls
     * const photoUrl = await prisma.photoUrl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUrlUpdateManyArgs>(args: SelectSubset<T, PhotoUrlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhotoUrl.
     * @param {PhotoUrlUpsertArgs} args - Arguments to update or create a PhotoUrl.
     * @example
     * // Update or create a PhotoUrl
     * const photoUrl = await prisma.photoUrl.upsert({
     *   create: {
     *     // ... data to create a PhotoUrl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotoUrl we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUrlUpsertArgs>(args: SelectSubset<T, PhotoUrlUpsertArgs<ExtArgs>>): Prisma__PhotoUrlClient<$Result.GetResult<Prisma.$PhotoUrlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhotoUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUrlCountArgs} args - Arguments to filter PhotoUrls to count.
     * @example
     * // Count the number of PhotoUrls
     * const count = await prisma.photoUrl.count({
     *   where: {
     *     // ... the filter for the PhotoUrls we want to count
     *   }
     * })
    **/
    count<T extends PhotoUrlCountArgs>(
      args?: Subset<T, PhotoUrlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoUrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotoUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoUrlAggregateArgs>(args: Subset<T, PhotoUrlAggregateArgs>): Prisma.PrismaPromise<GetPhotoUrlAggregateType<T>>

    /**
     * Group by PhotoUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUrlGroupByArgs} args - Group by arguments.
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
      T extends PhotoUrlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoUrlGroupByArgs['orderBy'] }
        : { orderBy?: PhotoUrlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhotoUrlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhotoUrl model
   */
  readonly fields: PhotoUrlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotoUrl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoUrlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PhotoUrl model
   */
  interface PhotoUrlFieldRefs {
    readonly id: FieldRef<"PhotoUrl", 'String'>
    readonly url: FieldRef<"PhotoUrl", 'String'>
    readonly propertyId: FieldRef<"PhotoUrl", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PhotoUrl findUnique
   */
  export type PhotoUrlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoUrl
     */
    select?: PhotoUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoUrl
     */
    omit?: PhotoUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoUrlInclude<ExtArgs> | null
    /**
     * Filter, which PhotoUrl to fetch.
     */
    where: PhotoUrlWhereUniqueInput
  }

  /**
   * PhotoUrl findUniqueOrThrow
   */
  export type PhotoUrlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoUrl
     */
    select?: PhotoUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoUrl
     */
    omit?: PhotoUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoUrlInclude<ExtArgs> | null
    /**
     * Filter, which PhotoUrl to fetch.
     */
    where: PhotoUrlWhereUniqueInput
  }

  /**
   * PhotoUrl findFirst
   */
  export type PhotoUrlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoUrl
     */
    select?: PhotoUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoUrl
     */
    omit?: PhotoUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoUrlInclude<ExtArgs> | null
    /**
     * Filter, which PhotoUrl to fetch.
     */
    where?: PhotoUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoUrls to fetch.
     */
    orderBy?: PhotoUrlOrderByWithRelationInput | PhotoUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoUrls.
     */
    cursor?: PhotoUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoUrls.
     */
    distinct?: PhotoUrlScalarFieldEnum | PhotoUrlScalarFieldEnum[]
  }

  /**
   * PhotoUrl findFirstOrThrow
   */
  export type PhotoUrlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoUrl
     */
    select?: PhotoUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoUrl
     */
    omit?: PhotoUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoUrlInclude<ExtArgs> | null
    /**
     * Filter, which PhotoUrl to fetch.
     */
    where?: PhotoUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoUrls to fetch.
     */
    orderBy?: PhotoUrlOrderByWithRelationInput | PhotoUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoUrls.
     */
    cursor?: PhotoUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoUrls.
     */
    distinct?: PhotoUrlScalarFieldEnum | PhotoUrlScalarFieldEnum[]
  }

  /**
   * PhotoUrl findMany
   */
  export type PhotoUrlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoUrl
     */
    select?: PhotoUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoUrl
     */
    omit?: PhotoUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoUrlInclude<ExtArgs> | null
    /**
     * Filter, which PhotoUrls to fetch.
     */
    where?: PhotoUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoUrls to fetch.
     */
    orderBy?: PhotoUrlOrderByWithRelationInput | PhotoUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhotoUrls.
     */
    cursor?: PhotoUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoUrls.
     */
    skip?: number
    distinct?: PhotoUrlScalarFieldEnum | PhotoUrlScalarFieldEnum[]
  }

  /**
   * PhotoUrl create
   */
  export type PhotoUrlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoUrl
     */
    select?: PhotoUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoUrl
     */
    omit?: PhotoUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoUrlInclude<ExtArgs> | null
    /**
     * The data needed to create a PhotoUrl.
     */
    data: XOR<PhotoUrlCreateInput, PhotoUrlUncheckedCreateInput>
  }

  /**
   * PhotoUrl createMany
   */
  export type PhotoUrlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhotoUrls.
     */
    data: PhotoUrlCreateManyInput | PhotoUrlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhotoUrl update
   */
  export type PhotoUrlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoUrl
     */
    select?: PhotoUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoUrl
     */
    omit?: PhotoUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoUrlInclude<ExtArgs> | null
    /**
     * The data needed to update a PhotoUrl.
     */
    data: XOR<PhotoUrlUpdateInput, PhotoUrlUncheckedUpdateInput>
    /**
     * Choose, which PhotoUrl to update.
     */
    where: PhotoUrlWhereUniqueInput
  }

  /**
   * PhotoUrl updateMany
   */
  export type PhotoUrlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhotoUrls.
     */
    data: XOR<PhotoUrlUpdateManyMutationInput, PhotoUrlUncheckedUpdateManyInput>
    /**
     * Filter which PhotoUrls to update
     */
    where?: PhotoUrlWhereInput
    /**
     * Limit how many PhotoUrls to update.
     */
    limit?: number
  }

  /**
   * PhotoUrl upsert
   */
  export type PhotoUrlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoUrl
     */
    select?: PhotoUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoUrl
     */
    omit?: PhotoUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoUrlInclude<ExtArgs> | null
    /**
     * The filter to search for the PhotoUrl to update in case it exists.
     */
    where: PhotoUrlWhereUniqueInput
    /**
     * In case the PhotoUrl found by the `where` argument doesn't exist, create a new PhotoUrl with this data.
     */
    create: XOR<PhotoUrlCreateInput, PhotoUrlUncheckedCreateInput>
    /**
     * In case the PhotoUrl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUrlUpdateInput, PhotoUrlUncheckedUpdateInput>
  }

  /**
   * PhotoUrl delete
   */
  export type PhotoUrlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoUrl
     */
    select?: PhotoUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoUrl
     */
    omit?: PhotoUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoUrlInclude<ExtArgs> | null
    /**
     * Filter which PhotoUrl to delete.
     */
    where: PhotoUrlWhereUniqueInput
  }

  /**
   * PhotoUrl deleteMany
   */
  export type PhotoUrlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoUrls to delete
     */
    where?: PhotoUrlWhereInput
    /**
     * Limit how many PhotoUrls to delete.
     */
    limit?: number
  }

  /**
   * PhotoUrl without action
   */
  export type PhotoUrlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoUrl
     */
    select?: PhotoUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoUrl
     */
    omit?: PhotoUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoUrlInclude<ExtArgs> | null
  }


  /**
   * Model Amenity
   */

  export type AggregateAmenity = {
    _count: AmenityCountAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  export type AmenityMinAggregateOutputType = {
    id: string | null
    name: string | null
    propertyId: string | null
  }

  export type AmenityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    propertyId: string | null
  }

  export type AmenityCountAggregateOutputType = {
    id: number
    name: number
    propertyId: number
    _all: number
  }


  export type AmenityMinAggregateInputType = {
    id?: true
    name?: true
    propertyId?: true
  }

  export type AmenityMaxAggregateInputType = {
    id?: true
    name?: true
    propertyId?: true
  }

  export type AmenityCountAggregateInputType = {
    id?: true
    name?: true
    propertyId?: true
    _all?: true
  }

  export type AmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenity to aggregate.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amenities
    **/
    _count?: true | AmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmenityMaxAggregateInputType
  }

  export type GetAmenityAggregateType<T extends AmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmenity[P]>
      : GetScalarType<T[P], AggregateAmenity[P]>
  }




  export type AmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityWhereInput
    orderBy?: AmenityOrderByWithAggregationInput | AmenityOrderByWithAggregationInput[]
    by: AmenityScalarFieldEnum[] | AmenityScalarFieldEnum
    having?: AmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmenityCountAggregateInputType | true
    _min?: AmenityMinAggregateInputType
    _max?: AmenityMaxAggregateInputType
  }

  export type AmenityGroupByOutputType = {
    id: string
    name: string
    propertyId: string
    _count: AmenityCountAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  type GetAmenityGroupByPayload<T extends AmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmenityGroupByOutputType[P]>
            : GetScalarType<T[P], AmenityGroupByOutputType[P]>
        }
      >
    >


  export type AmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenity"]>



  export type AmenitySelectScalar = {
    id?: boolean
    name?: boolean
    propertyId?: boolean
  }

  export type AmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "propertyId", ExtArgs["result"]["amenity"]>
  export type AmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $AmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amenity"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      propertyId: string
    }, ExtArgs["result"]["amenity"]>
    composites: {}
  }

  type AmenityGetPayload<S extends boolean | null | undefined | AmenityDefaultArgs> = $Result.GetResult<Prisma.$AmenityPayload, S>

  type AmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmenityCountAggregateInputType | true
    }

  export interface AmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amenity'], meta: { name: 'Amenity' } }
    /**
     * Find zero or one Amenity that matches the filter.
     * @param {AmenityFindUniqueArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmenityFindUniqueArgs>(args: SelectSubset<T, AmenityFindUniqueArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Amenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmenityFindUniqueOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, AmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmenityFindFirstArgs>(args?: SelectSubset<T, AmenityFindFirstArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, AmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Amenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amenities
     * const amenities = await prisma.amenity.findMany()
     * 
     * // Get first 10 Amenities
     * const amenities = await prisma.amenity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amenityWithIdOnly = await prisma.amenity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmenityFindManyArgs>(args?: SelectSubset<T, AmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Amenity.
     * @param {AmenityCreateArgs} args - Arguments to create a Amenity.
     * @example
     * // Create one Amenity
     * const Amenity = await prisma.amenity.create({
     *   data: {
     *     // ... data to create a Amenity
     *   }
     * })
     * 
     */
    create<T extends AmenityCreateArgs>(args: SelectSubset<T, AmenityCreateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Amenities.
     * @param {AmenityCreateManyArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmenityCreateManyArgs>(args?: SelectSubset<T, AmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Amenity.
     * @param {AmenityDeleteArgs} args - Arguments to delete one Amenity.
     * @example
     * // Delete one Amenity
     * const Amenity = await prisma.amenity.delete({
     *   where: {
     *     // ... filter to delete one Amenity
     *   }
     * })
     * 
     */
    delete<T extends AmenityDeleteArgs>(args: SelectSubset<T, AmenityDeleteArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Amenity.
     * @param {AmenityUpdateArgs} args - Arguments to update one Amenity.
     * @example
     * // Update one Amenity
     * const amenity = await prisma.amenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmenityUpdateArgs>(args: SelectSubset<T, AmenityUpdateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Amenities.
     * @param {AmenityDeleteManyArgs} args - Arguments to filter Amenities to delete.
     * @example
     * // Delete a few Amenities
     * const { count } = await prisma.amenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmenityDeleteManyArgs>(args?: SelectSubset<T, AmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmenityUpdateManyArgs>(args: SelectSubset<T, AmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Amenity.
     * @param {AmenityUpsertArgs} args - Arguments to update or create a Amenity.
     * @example
     * // Update or create a Amenity
     * const amenity = await prisma.amenity.upsert({
     *   create: {
     *     // ... data to create a Amenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amenity we want to update
     *   }
     * })
     */
    upsert<T extends AmenityUpsertArgs>(args: SelectSubset<T, AmenityUpsertArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityCountArgs} args - Arguments to filter Amenities to count.
     * @example
     * // Count the number of Amenities
     * const count = await prisma.amenity.count({
     *   where: {
     *     // ... the filter for the Amenities we want to count
     *   }
     * })
    **/
    count<T extends AmenityCountArgs>(
      args?: Subset<T, AmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmenityAggregateArgs>(args: Subset<T, AmenityAggregateArgs>): Prisma.PrismaPromise<GetAmenityAggregateType<T>>

    /**
     * Group by Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityGroupByArgs} args - Group by arguments.
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
      T extends AmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmenityGroupByArgs['orderBy'] }
        : { orderBy?: AmenityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amenity model
   */
  readonly fields: AmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Amenity model
   */
  interface AmenityFieldRefs {
    readonly id: FieldRef<"Amenity", 'String'>
    readonly name: FieldRef<"Amenity", 'String'>
    readonly propertyId: FieldRef<"Amenity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Amenity findUnique
   */
  export type AmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findUniqueOrThrow
   */
  export type AmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findFirst
   */
  export type AmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findFirstOrThrow
   */
  export type AmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findMany
   */
  export type AmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenities to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity create
   */
  export type AmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a Amenity.
     */
    data: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
  }

  /**
   * Amenity createMany
   */
  export type AmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amenity update
   */
  export type AmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a Amenity.
     */
    data: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
    /**
     * Choose, which Amenity to update.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity updateMany
   */
  export type AmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
  }

  /**
   * Amenity upsert
   */
  export type AmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the Amenity to update in case it exists.
     */
    where: AmenityWhereUniqueInput
    /**
     * In case the Amenity found by the `where` argument doesn't exist, create a new Amenity with this data.
     */
    create: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
    /**
     * In case the Amenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
  }

  /**
   * Amenity delete
   */
  export type AmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter which Amenity to delete.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity deleteMany
   */
  export type AmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenities to delete
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to delete.
     */
    limit?: number
  }

  /**
   * Amenity without action
   */
  export type AmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
  }


  /**
   * Model HighLight
   */

  export type AggregateHighLight = {
    _count: HighLightCountAggregateOutputType | null
    _min: HighLightMinAggregateOutputType | null
    _max: HighLightMaxAggregateOutputType | null
  }

  export type HighLightMinAggregateOutputType = {
    id: string | null
    name: string | null
    propertyId: string | null
  }

  export type HighLightMaxAggregateOutputType = {
    id: string | null
    name: string | null
    propertyId: string | null
  }

  export type HighLightCountAggregateOutputType = {
    id: number
    name: number
    propertyId: number
    _all: number
  }


  export type HighLightMinAggregateInputType = {
    id?: true
    name?: true
    propertyId?: true
  }

  export type HighLightMaxAggregateInputType = {
    id?: true
    name?: true
    propertyId?: true
  }

  export type HighLightCountAggregateInputType = {
    id?: true
    name?: true
    propertyId?: true
    _all?: true
  }

  export type HighLightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HighLight to aggregate.
     */
    where?: HighLightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighLights to fetch.
     */
    orderBy?: HighLightOrderByWithRelationInput | HighLightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HighLightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighLights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighLights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HighLights
    **/
    _count?: true | HighLightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HighLightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HighLightMaxAggregateInputType
  }

  export type GetHighLightAggregateType<T extends HighLightAggregateArgs> = {
        [P in keyof T & keyof AggregateHighLight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHighLight[P]>
      : GetScalarType<T[P], AggregateHighLight[P]>
  }




  export type HighLightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighLightWhereInput
    orderBy?: HighLightOrderByWithAggregationInput | HighLightOrderByWithAggregationInput[]
    by: HighLightScalarFieldEnum[] | HighLightScalarFieldEnum
    having?: HighLightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HighLightCountAggregateInputType | true
    _min?: HighLightMinAggregateInputType
    _max?: HighLightMaxAggregateInputType
  }

  export type HighLightGroupByOutputType = {
    id: string
    name: string
    propertyId: string
    _count: HighLightCountAggregateOutputType | null
    _min: HighLightMinAggregateOutputType | null
    _max: HighLightMaxAggregateOutputType | null
  }

  type GetHighLightGroupByPayload<T extends HighLightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HighLightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HighLightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HighLightGroupByOutputType[P]>
            : GetScalarType<T[P], HighLightGroupByOutputType[P]>
        }
      >
    >


  export type HighLightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highLight"]>



  export type HighLightSelectScalar = {
    id?: boolean
    name?: boolean
    propertyId?: boolean
  }

  export type HighLightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "propertyId", ExtArgs["result"]["highLight"]>
  export type HighLightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $HighLightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HighLight"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      propertyId: string
    }, ExtArgs["result"]["highLight"]>
    composites: {}
  }

  type HighLightGetPayload<S extends boolean | null | undefined | HighLightDefaultArgs> = $Result.GetResult<Prisma.$HighLightPayload, S>

  type HighLightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HighLightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HighLightCountAggregateInputType | true
    }

  export interface HighLightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HighLight'], meta: { name: 'HighLight' } }
    /**
     * Find zero or one HighLight that matches the filter.
     * @param {HighLightFindUniqueArgs} args - Arguments to find a HighLight
     * @example
     * // Get one HighLight
     * const highLight = await prisma.highLight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HighLightFindUniqueArgs>(args: SelectSubset<T, HighLightFindUniqueArgs<ExtArgs>>): Prisma__HighLightClient<$Result.GetResult<Prisma.$HighLightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HighLight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HighLightFindUniqueOrThrowArgs} args - Arguments to find a HighLight
     * @example
     * // Get one HighLight
     * const highLight = await prisma.highLight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HighLightFindUniqueOrThrowArgs>(args: SelectSubset<T, HighLightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HighLightClient<$Result.GetResult<Prisma.$HighLightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HighLight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighLightFindFirstArgs} args - Arguments to find a HighLight
     * @example
     * // Get one HighLight
     * const highLight = await prisma.highLight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HighLightFindFirstArgs>(args?: SelectSubset<T, HighLightFindFirstArgs<ExtArgs>>): Prisma__HighLightClient<$Result.GetResult<Prisma.$HighLightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HighLight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighLightFindFirstOrThrowArgs} args - Arguments to find a HighLight
     * @example
     * // Get one HighLight
     * const highLight = await prisma.highLight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HighLightFindFirstOrThrowArgs>(args?: SelectSubset<T, HighLightFindFirstOrThrowArgs<ExtArgs>>): Prisma__HighLightClient<$Result.GetResult<Prisma.$HighLightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HighLights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighLightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HighLights
     * const highLights = await prisma.highLight.findMany()
     * 
     * // Get first 10 HighLights
     * const highLights = await prisma.highLight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const highLightWithIdOnly = await prisma.highLight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HighLightFindManyArgs>(args?: SelectSubset<T, HighLightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighLightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HighLight.
     * @param {HighLightCreateArgs} args - Arguments to create a HighLight.
     * @example
     * // Create one HighLight
     * const HighLight = await prisma.highLight.create({
     *   data: {
     *     // ... data to create a HighLight
     *   }
     * })
     * 
     */
    create<T extends HighLightCreateArgs>(args: SelectSubset<T, HighLightCreateArgs<ExtArgs>>): Prisma__HighLightClient<$Result.GetResult<Prisma.$HighLightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HighLights.
     * @param {HighLightCreateManyArgs} args - Arguments to create many HighLights.
     * @example
     * // Create many HighLights
     * const highLight = await prisma.highLight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HighLightCreateManyArgs>(args?: SelectSubset<T, HighLightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HighLight.
     * @param {HighLightDeleteArgs} args - Arguments to delete one HighLight.
     * @example
     * // Delete one HighLight
     * const HighLight = await prisma.highLight.delete({
     *   where: {
     *     // ... filter to delete one HighLight
     *   }
     * })
     * 
     */
    delete<T extends HighLightDeleteArgs>(args: SelectSubset<T, HighLightDeleteArgs<ExtArgs>>): Prisma__HighLightClient<$Result.GetResult<Prisma.$HighLightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HighLight.
     * @param {HighLightUpdateArgs} args - Arguments to update one HighLight.
     * @example
     * // Update one HighLight
     * const highLight = await prisma.highLight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HighLightUpdateArgs>(args: SelectSubset<T, HighLightUpdateArgs<ExtArgs>>): Prisma__HighLightClient<$Result.GetResult<Prisma.$HighLightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HighLights.
     * @param {HighLightDeleteManyArgs} args - Arguments to filter HighLights to delete.
     * @example
     * // Delete a few HighLights
     * const { count } = await prisma.highLight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HighLightDeleteManyArgs>(args?: SelectSubset<T, HighLightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HighLights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighLightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HighLights
     * const highLight = await prisma.highLight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HighLightUpdateManyArgs>(args: SelectSubset<T, HighLightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HighLight.
     * @param {HighLightUpsertArgs} args - Arguments to update or create a HighLight.
     * @example
     * // Update or create a HighLight
     * const highLight = await prisma.highLight.upsert({
     *   create: {
     *     // ... data to create a HighLight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HighLight we want to update
     *   }
     * })
     */
    upsert<T extends HighLightUpsertArgs>(args: SelectSubset<T, HighLightUpsertArgs<ExtArgs>>): Prisma__HighLightClient<$Result.GetResult<Prisma.$HighLightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HighLights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighLightCountArgs} args - Arguments to filter HighLights to count.
     * @example
     * // Count the number of HighLights
     * const count = await prisma.highLight.count({
     *   where: {
     *     // ... the filter for the HighLights we want to count
     *   }
     * })
    **/
    count<T extends HighLightCountArgs>(
      args?: Subset<T, HighLightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HighLightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HighLight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighLightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HighLightAggregateArgs>(args: Subset<T, HighLightAggregateArgs>): Prisma.PrismaPromise<GetHighLightAggregateType<T>>

    /**
     * Group by HighLight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighLightGroupByArgs} args - Group by arguments.
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
      T extends HighLightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HighLightGroupByArgs['orderBy'] }
        : { orderBy?: HighLightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HighLightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHighLightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HighLight model
   */
  readonly fields: HighLightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HighLight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HighLightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HighLight model
   */
  interface HighLightFieldRefs {
    readonly id: FieldRef<"HighLight", 'String'>
    readonly name: FieldRef<"HighLight", 'String'>
    readonly propertyId: FieldRef<"HighLight", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HighLight findUnique
   */
  export type HighLightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighLight
     */
    select?: HighLightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighLight
     */
    omit?: HighLightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighLightInclude<ExtArgs> | null
    /**
     * Filter, which HighLight to fetch.
     */
    where: HighLightWhereUniqueInput
  }

  /**
   * HighLight findUniqueOrThrow
   */
  export type HighLightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighLight
     */
    select?: HighLightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighLight
     */
    omit?: HighLightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighLightInclude<ExtArgs> | null
    /**
     * Filter, which HighLight to fetch.
     */
    where: HighLightWhereUniqueInput
  }

  /**
   * HighLight findFirst
   */
  export type HighLightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighLight
     */
    select?: HighLightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighLight
     */
    omit?: HighLightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighLightInclude<ExtArgs> | null
    /**
     * Filter, which HighLight to fetch.
     */
    where?: HighLightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighLights to fetch.
     */
    orderBy?: HighLightOrderByWithRelationInput | HighLightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HighLights.
     */
    cursor?: HighLightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighLights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighLights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HighLights.
     */
    distinct?: HighLightScalarFieldEnum | HighLightScalarFieldEnum[]
  }

  /**
   * HighLight findFirstOrThrow
   */
  export type HighLightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighLight
     */
    select?: HighLightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighLight
     */
    omit?: HighLightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighLightInclude<ExtArgs> | null
    /**
     * Filter, which HighLight to fetch.
     */
    where?: HighLightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighLights to fetch.
     */
    orderBy?: HighLightOrderByWithRelationInput | HighLightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HighLights.
     */
    cursor?: HighLightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighLights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighLights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HighLights.
     */
    distinct?: HighLightScalarFieldEnum | HighLightScalarFieldEnum[]
  }

  /**
   * HighLight findMany
   */
  export type HighLightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighLight
     */
    select?: HighLightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighLight
     */
    omit?: HighLightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighLightInclude<ExtArgs> | null
    /**
     * Filter, which HighLights to fetch.
     */
    where?: HighLightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighLights to fetch.
     */
    orderBy?: HighLightOrderByWithRelationInput | HighLightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HighLights.
     */
    cursor?: HighLightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighLights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighLights.
     */
    skip?: number
    distinct?: HighLightScalarFieldEnum | HighLightScalarFieldEnum[]
  }

  /**
   * HighLight create
   */
  export type HighLightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighLight
     */
    select?: HighLightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighLight
     */
    omit?: HighLightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighLightInclude<ExtArgs> | null
    /**
     * The data needed to create a HighLight.
     */
    data: XOR<HighLightCreateInput, HighLightUncheckedCreateInput>
  }

  /**
   * HighLight createMany
   */
  export type HighLightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HighLights.
     */
    data: HighLightCreateManyInput | HighLightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HighLight update
   */
  export type HighLightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighLight
     */
    select?: HighLightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighLight
     */
    omit?: HighLightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighLightInclude<ExtArgs> | null
    /**
     * The data needed to update a HighLight.
     */
    data: XOR<HighLightUpdateInput, HighLightUncheckedUpdateInput>
    /**
     * Choose, which HighLight to update.
     */
    where: HighLightWhereUniqueInput
  }

  /**
   * HighLight updateMany
   */
  export type HighLightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HighLights.
     */
    data: XOR<HighLightUpdateManyMutationInput, HighLightUncheckedUpdateManyInput>
    /**
     * Filter which HighLights to update
     */
    where?: HighLightWhereInput
    /**
     * Limit how many HighLights to update.
     */
    limit?: number
  }

  /**
   * HighLight upsert
   */
  export type HighLightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighLight
     */
    select?: HighLightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighLight
     */
    omit?: HighLightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighLightInclude<ExtArgs> | null
    /**
     * The filter to search for the HighLight to update in case it exists.
     */
    where: HighLightWhereUniqueInput
    /**
     * In case the HighLight found by the `where` argument doesn't exist, create a new HighLight with this data.
     */
    create: XOR<HighLightCreateInput, HighLightUncheckedCreateInput>
    /**
     * In case the HighLight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HighLightUpdateInput, HighLightUncheckedUpdateInput>
  }

  /**
   * HighLight delete
   */
  export type HighLightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighLight
     */
    select?: HighLightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighLight
     */
    omit?: HighLightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighLightInclude<ExtArgs> | null
    /**
     * Filter which HighLight to delete.
     */
    where: HighLightWhereUniqueInput
  }

  /**
   * HighLight deleteMany
   */
  export type HighLightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HighLights to delete
     */
    where?: HighLightWhereInput
    /**
     * Limit how many HighLights to delete.
     */
    limit?: number
  }

  /**
   * HighLight without action
   */
  export type HighLightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighLight
     */
    select?: HighLightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighLight
     */
    omit?: HighLightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighLightInclude<ExtArgs> | null
  }


  /**
   * Model FavouriteProperty
   */

  export type AggregateFavouriteProperty = {
    _count: FavouritePropertyCountAggregateOutputType | null
    _min: FavouritePropertyMinAggregateOutputType | null
    _max: FavouritePropertyMaxAggregateOutputType | null
  }

  export type FavouritePropertyMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    userId: string | null
  }

  export type FavouritePropertyMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    userId: string | null
  }

  export type FavouritePropertyCountAggregateOutputType = {
    id: number
    propertyId: number
    userId: number
    _all: number
  }


  export type FavouritePropertyMinAggregateInputType = {
    id?: true
    propertyId?: true
    userId?: true
  }

  export type FavouritePropertyMaxAggregateInputType = {
    id?: true
    propertyId?: true
    userId?: true
  }

  export type FavouritePropertyCountAggregateInputType = {
    id?: true
    propertyId?: true
    userId?: true
    _all?: true
  }

  export type FavouritePropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavouriteProperty to aggregate.
     */
    where?: FavouritePropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavouriteProperties to fetch.
     */
    orderBy?: FavouritePropertyOrderByWithRelationInput | FavouritePropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavouritePropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavouriteProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavouriteProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavouriteProperties
    **/
    _count?: true | FavouritePropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavouritePropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavouritePropertyMaxAggregateInputType
  }

  export type GetFavouritePropertyAggregateType<T extends FavouritePropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateFavouriteProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavouriteProperty[P]>
      : GetScalarType<T[P], AggregateFavouriteProperty[P]>
  }




  export type FavouritePropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouritePropertyWhereInput
    orderBy?: FavouritePropertyOrderByWithAggregationInput | FavouritePropertyOrderByWithAggregationInput[]
    by: FavouritePropertyScalarFieldEnum[] | FavouritePropertyScalarFieldEnum
    having?: FavouritePropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavouritePropertyCountAggregateInputType | true
    _min?: FavouritePropertyMinAggregateInputType
    _max?: FavouritePropertyMaxAggregateInputType
  }

  export type FavouritePropertyGroupByOutputType = {
    id: string
    propertyId: string
    userId: string
    _count: FavouritePropertyCountAggregateOutputType | null
    _min: FavouritePropertyMinAggregateOutputType | null
    _max: FavouritePropertyMaxAggregateOutputType | null
  }

  type GetFavouritePropertyGroupByPayload<T extends FavouritePropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavouritePropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavouritePropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavouritePropertyGroupByOutputType[P]>
            : GetScalarType<T[P], FavouritePropertyGroupByOutputType[P]>
        }
      >
    >


  export type FavouritePropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    userId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favouriteProperty"]>



  export type FavouritePropertySelectScalar = {
    id?: boolean
    propertyId?: boolean
    userId?: boolean
  }

  export type FavouritePropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "userId", ExtArgs["result"]["favouriteProperty"]>
  export type FavouritePropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FavouritePropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavouriteProperty"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      userId: string
    }, ExtArgs["result"]["favouriteProperty"]>
    composites: {}
  }

  type FavouritePropertyGetPayload<S extends boolean | null | undefined | FavouritePropertyDefaultArgs> = $Result.GetResult<Prisma.$FavouritePropertyPayload, S>

  type FavouritePropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavouritePropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavouritePropertyCountAggregateInputType | true
    }

  export interface FavouritePropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavouriteProperty'], meta: { name: 'FavouriteProperty' } }
    /**
     * Find zero or one FavouriteProperty that matches the filter.
     * @param {FavouritePropertyFindUniqueArgs} args - Arguments to find a FavouriteProperty
     * @example
     * // Get one FavouriteProperty
     * const favouriteProperty = await prisma.favouriteProperty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavouritePropertyFindUniqueArgs>(args: SelectSubset<T, FavouritePropertyFindUniqueArgs<ExtArgs>>): Prisma__FavouritePropertyClient<$Result.GetResult<Prisma.$FavouritePropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavouriteProperty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavouritePropertyFindUniqueOrThrowArgs} args - Arguments to find a FavouriteProperty
     * @example
     * // Get one FavouriteProperty
     * const favouriteProperty = await prisma.favouriteProperty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavouritePropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, FavouritePropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavouritePropertyClient<$Result.GetResult<Prisma.$FavouritePropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavouriteProperty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritePropertyFindFirstArgs} args - Arguments to find a FavouriteProperty
     * @example
     * // Get one FavouriteProperty
     * const favouriteProperty = await prisma.favouriteProperty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavouritePropertyFindFirstArgs>(args?: SelectSubset<T, FavouritePropertyFindFirstArgs<ExtArgs>>): Prisma__FavouritePropertyClient<$Result.GetResult<Prisma.$FavouritePropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavouriteProperty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritePropertyFindFirstOrThrowArgs} args - Arguments to find a FavouriteProperty
     * @example
     * // Get one FavouriteProperty
     * const favouriteProperty = await prisma.favouriteProperty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavouritePropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, FavouritePropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavouritePropertyClient<$Result.GetResult<Prisma.$FavouritePropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavouriteProperties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritePropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavouriteProperties
     * const favouriteProperties = await prisma.favouriteProperty.findMany()
     * 
     * // Get first 10 FavouriteProperties
     * const favouriteProperties = await prisma.favouriteProperty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favouritePropertyWithIdOnly = await prisma.favouriteProperty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavouritePropertyFindManyArgs>(args?: SelectSubset<T, FavouritePropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavouriteProperty.
     * @param {FavouritePropertyCreateArgs} args - Arguments to create a FavouriteProperty.
     * @example
     * // Create one FavouriteProperty
     * const FavouriteProperty = await prisma.favouriteProperty.create({
     *   data: {
     *     // ... data to create a FavouriteProperty
     *   }
     * })
     * 
     */
    create<T extends FavouritePropertyCreateArgs>(args: SelectSubset<T, FavouritePropertyCreateArgs<ExtArgs>>): Prisma__FavouritePropertyClient<$Result.GetResult<Prisma.$FavouritePropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavouriteProperties.
     * @param {FavouritePropertyCreateManyArgs} args - Arguments to create many FavouriteProperties.
     * @example
     * // Create many FavouriteProperties
     * const favouriteProperty = await prisma.favouriteProperty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavouritePropertyCreateManyArgs>(args?: SelectSubset<T, FavouritePropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FavouriteProperty.
     * @param {FavouritePropertyDeleteArgs} args - Arguments to delete one FavouriteProperty.
     * @example
     * // Delete one FavouriteProperty
     * const FavouriteProperty = await prisma.favouriteProperty.delete({
     *   where: {
     *     // ... filter to delete one FavouriteProperty
     *   }
     * })
     * 
     */
    delete<T extends FavouritePropertyDeleteArgs>(args: SelectSubset<T, FavouritePropertyDeleteArgs<ExtArgs>>): Prisma__FavouritePropertyClient<$Result.GetResult<Prisma.$FavouritePropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavouriteProperty.
     * @param {FavouritePropertyUpdateArgs} args - Arguments to update one FavouriteProperty.
     * @example
     * // Update one FavouriteProperty
     * const favouriteProperty = await prisma.favouriteProperty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavouritePropertyUpdateArgs>(args: SelectSubset<T, FavouritePropertyUpdateArgs<ExtArgs>>): Prisma__FavouritePropertyClient<$Result.GetResult<Prisma.$FavouritePropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavouriteProperties.
     * @param {FavouritePropertyDeleteManyArgs} args - Arguments to filter FavouriteProperties to delete.
     * @example
     * // Delete a few FavouriteProperties
     * const { count } = await prisma.favouriteProperty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavouritePropertyDeleteManyArgs>(args?: SelectSubset<T, FavouritePropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavouriteProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritePropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavouriteProperties
     * const favouriteProperty = await prisma.favouriteProperty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavouritePropertyUpdateManyArgs>(args: SelectSubset<T, FavouritePropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FavouriteProperty.
     * @param {FavouritePropertyUpsertArgs} args - Arguments to update or create a FavouriteProperty.
     * @example
     * // Update or create a FavouriteProperty
     * const favouriteProperty = await prisma.favouriteProperty.upsert({
     *   create: {
     *     // ... data to create a FavouriteProperty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavouriteProperty we want to update
     *   }
     * })
     */
    upsert<T extends FavouritePropertyUpsertArgs>(args: SelectSubset<T, FavouritePropertyUpsertArgs<ExtArgs>>): Prisma__FavouritePropertyClient<$Result.GetResult<Prisma.$FavouritePropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavouriteProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritePropertyCountArgs} args - Arguments to filter FavouriteProperties to count.
     * @example
     * // Count the number of FavouriteProperties
     * const count = await prisma.favouriteProperty.count({
     *   where: {
     *     // ... the filter for the FavouriteProperties we want to count
     *   }
     * })
    **/
    count<T extends FavouritePropertyCountArgs>(
      args?: Subset<T, FavouritePropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavouritePropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavouriteProperty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritePropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavouritePropertyAggregateArgs>(args: Subset<T, FavouritePropertyAggregateArgs>): Prisma.PrismaPromise<GetFavouritePropertyAggregateType<T>>

    /**
     * Group by FavouriteProperty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritePropertyGroupByArgs} args - Group by arguments.
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
      T extends FavouritePropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavouritePropertyGroupByArgs['orderBy'] }
        : { orderBy?: FavouritePropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavouritePropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavouritePropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavouriteProperty model
   */
  readonly fields: FavouritePropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavouriteProperty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavouritePropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FavouriteProperty model
   */
  interface FavouritePropertyFieldRefs {
    readonly id: FieldRef<"FavouriteProperty", 'String'>
    readonly propertyId: FieldRef<"FavouriteProperty", 'String'>
    readonly userId: FieldRef<"FavouriteProperty", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FavouriteProperty findUnique
   */
  export type FavouritePropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteProperty
     */
    select?: FavouritePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteProperty
     */
    omit?: FavouritePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritePropertyInclude<ExtArgs> | null
    /**
     * Filter, which FavouriteProperty to fetch.
     */
    where: FavouritePropertyWhereUniqueInput
  }

  /**
   * FavouriteProperty findUniqueOrThrow
   */
  export type FavouritePropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteProperty
     */
    select?: FavouritePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteProperty
     */
    omit?: FavouritePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritePropertyInclude<ExtArgs> | null
    /**
     * Filter, which FavouriteProperty to fetch.
     */
    where: FavouritePropertyWhereUniqueInput
  }

  /**
   * FavouriteProperty findFirst
   */
  export type FavouritePropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteProperty
     */
    select?: FavouritePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteProperty
     */
    omit?: FavouritePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritePropertyInclude<ExtArgs> | null
    /**
     * Filter, which FavouriteProperty to fetch.
     */
    where?: FavouritePropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavouriteProperties to fetch.
     */
    orderBy?: FavouritePropertyOrderByWithRelationInput | FavouritePropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavouriteProperties.
     */
    cursor?: FavouritePropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavouriteProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavouriteProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavouriteProperties.
     */
    distinct?: FavouritePropertyScalarFieldEnum | FavouritePropertyScalarFieldEnum[]
  }

  /**
   * FavouriteProperty findFirstOrThrow
   */
  export type FavouritePropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteProperty
     */
    select?: FavouritePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteProperty
     */
    omit?: FavouritePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritePropertyInclude<ExtArgs> | null
    /**
     * Filter, which FavouriteProperty to fetch.
     */
    where?: FavouritePropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavouriteProperties to fetch.
     */
    orderBy?: FavouritePropertyOrderByWithRelationInput | FavouritePropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavouriteProperties.
     */
    cursor?: FavouritePropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavouriteProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavouriteProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavouriteProperties.
     */
    distinct?: FavouritePropertyScalarFieldEnum | FavouritePropertyScalarFieldEnum[]
  }

  /**
   * FavouriteProperty findMany
   */
  export type FavouritePropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteProperty
     */
    select?: FavouritePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteProperty
     */
    omit?: FavouritePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritePropertyInclude<ExtArgs> | null
    /**
     * Filter, which FavouriteProperties to fetch.
     */
    where?: FavouritePropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavouriteProperties to fetch.
     */
    orderBy?: FavouritePropertyOrderByWithRelationInput | FavouritePropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavouriteProperties.
     */
    cursor?: FavouritePropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavouriteProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavouriteProperties.
     */
    skip?: number
    distinct?: FavouritePropertyScalarFieldEnum | FavouritePropertyScalarFieldEnum[]
  }

  /**
   * FavouriteProperty create
   */
  export type FavouritePropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteProperty
     */
    select?: FavouritePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteProperty
     */
    omit?: FavouritePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritePropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a FavouriteProperty.
     */
    data: XOR<FavouritePropertyCreateInput, FavouritePropertyUncheckedCreateInput>
  }

  /**
   * FavouriteProperty createMany
   */
  export type FavouritePropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavouriteProperties.
     */
    data: FavouritePropertyCreateManyInput | FavouritePropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavouriteProperty update
   */
  export type FavouritePropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteProperty
     */
    select?: FavouritePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteProperty
     */
    omit?: FavouritePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritePropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a FavouriteProperty.
     */
    data: XOR<FavouritePropertyUpdateInput, FavouritePropertyUncheckedUpdateInput>
    /**
     * Choose, which FavouriteProperty to update.
     */
    where: FavouritePropertyWhereUniqueInput
  }

  /**
   * FavouriteProperty updateMany
   */
  export type FavouritePropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavouriteProperties.
     */
    data: XOR<FavouritePropertyUpdateManyMutationInput, FavouritePropertyUncheckedUpdateManyInput>
    /**
     * Filter which FavouriteProperties to update
     */
    where?: FavouritePropertyWhereInput
    /**
     * Limit how many FavouriteProperties to update.
     */
    limit?: number
  }

  /**
   * FavouriteProperty upsert
   */
  export type FavouritePropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteProperty
     */
    select?: FavouritePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteProperty
     */
    omit?: FavouritePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritePropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the FavouriteProperty to update in case it exists.
     */
    where: FavouritePropertyWhereUniqueInput
    /**
     * In case the FavouriteProperty found by the `where` argument doesn't exist, create a new FavouriteProperty with this data.
     */
    create: XOR<FavouritePropertyCreateInput, FavouritePropertyUncheckedCreateInput>
    /**
     * In case the FavouriteProperty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavouritePropertyUpdateInput, FavouritePropertyUncheckedUpdateInput>
  }

  /**
   * FavouriteProperty delete
   */
  export type FavouritePropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteProperty
     */
    select?: FavouritePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteProperty
     */
    omit?: FavouritePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritePropertyInclude<ExtArgs> | null
    /**
     * Filter which FavouriteProperty to delete.
     */
    where: FavouritePropertyWhereUniqueInput
  }

  /**
   * FavouriteProperty deleteMany
   */
  export type FavouritePropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavouriteProperties to delete
     */
    where?: FavouritePropertyWhereInput
    /**
     * Limit how many FavouriteProperties to delete.
     */
    limit?: number
  }

  /**
   * FavouriteProperty without action
   */
  export type FavouritePropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavouriteProperty
     */
    select?: FavouritePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavouriteProperty
     */
    omit?: FavouritePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritePropertyInclude<ExtArgs> | null
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
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    password: 'password',
    isVerified: 'isVerified',
    role: 'role',
    phoneNumber: 'phoneNumber',
    forgotPasswordToken: 'forgotPasswordToken',
    forgotPasswordTokenExpiry: 'forgotPasswordTokenExpiry',
    verifyToken: 'verifyToken',
    verifyTokenExpiry: 'verifyTokenExpiry'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    pricePerMonth: 'pricePerMonth',
    securityDeposit: 'securityDeposit',
    applicationFee: 'applicationFee',
    isParkingIncluded: 'isParkingIncluded',
    beds: 'beds',
    baths: 'baths',
    squareFeet: 'squareFeet',
    propertyType: 'propertyType',
    averageRating: 'averageRating',
    numberOfReviews: 'numberOfReviews',
    locationId: 'locationId',
    ownerId: 'ownerId',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const PhotoUrlScalarFieldEnum: {
    id: 'id',
    url: 'url',
    propertyId: 'propertyId'
  };

  export type PhotoUrlScalarFieldEnum = (typeof PhotoUrlScalarFieldEnum)[keyof typeof PhotoUrlScalarFieldEnum]


  export const AmenityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    propertyId: 'propertyId'
  };

  export type AmenityScalarFieldEnum = (typeof AmenityScalarFieldEnum)[keyof typeof AmenityScalarFieldEnum]


  export const HighLightScalarFieldEnum: {
    id: 'id',
    name: 'name',
    propertyId: 'propertyId'
  };

  export type HighLightScalarFieldEnum = (typeof HighLightScalarFieldEnum)[keyof typeof HighLightScalarFieldEnum]


  export const FavouritePropertyScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    userId: 'userId'
  };

  export type FavouritePropertyScalarFieldEnum = (typeof FavouritePropertyScalarFieldEnum)[keyof typeof FavouritePropertyScalarFieldEnum]


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


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
    email: 'email',
    password: 'password',
    phoneNumber: 'phoneNumber',
    forgotPasswordToken: 'forgotPasswordToken',
    verifyToken: 'verifyToken'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const PropertyOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    propertyType: 'propertyType',
    locationId: 'locationId',
    ownerId: 'ownerId'
  };

  export type PropertyOrderByRelevanceFieldEnum = (typeof PropertyOrderByRelevanceFieldEnum)[keyof typeof PropertyOrderByRelevanceFieldEnum]


  export const PhotoUrlOrderByRelevanceFieldEnum: {
    id: 'id',
    url: 'url',
    propertyId: 'propertyId'
  };

  export type PhotoUrlOrderByRelevanceFieldEnum = (typeof PhotoUrlOrderByRelevanceFieldEnum)[keyof typeof PhotoUrlOrderByRelevanceFieldEnum]


  export const AmenityOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    propertyId: 'propertyId'
  };

  export type AmenityOrderByRelevanceFieldEnum = (typeof AmenityOrderByRelevanceFieldEnum)[keyof typeof AmenityOrderByRelevanceFieldEnum]


  export const HighLightOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    propertyId: 'propertyId'
  };

  export type HighLightOrderByRelevanceFieldEnum = (typeof HighLightOrderByRelevanceFieldEnum)[keyof typeof HighLightOrderByRelevanceFieldEnum]


  export const FavouritePropertyOrderByRelevanceFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    userId: 'userId'
  };

  export type FavouritePropertyOrderByRelevanceFieldEnum = (typeof FavouritePropertyOrderByRelevanceFieldEnum)[keyof typeof FavouritePropertyOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    phoneNumber?: StringNullableFilter<"User"> | string | null
    forgotPasswordToken?: StringNullableFilter<"User"> | string | null
    forgotPasswordTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    verifyToken?: StringNullableFilter<"User"> | string | null
    verifyTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    properties?: PropertyListRelationFilter
    FavouriteProperty?: FavouritePropertyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    forgotPasswordToken?: SortOrderInput | SortOrder
    forgotPasswordTokenExpiry?: SortOrderInput | SortOrder
    verifyToken?: SortOrderInput | SortOrder
    verifyTokenExpiry?: SortOrderInput | SortOrder
    properties?: PropertyOrderByRelationAggregateInput
    FavouriteProperty?: FavouritePropertyOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    phoneNumber?: StringNullableFilter<"User"> | string | null
    forgotPasswordToken?: StringNullableFilter<"User"> | string | null
    forgotPasswordTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    verifyToken?: StringNullableFilter<"User"> | string | null
    verifyTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    properties?: PropertyListRelationFilter
    FavouriteProperty?: FavouritePropertyListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    forgotPasswordToken?: SortOrderInput | SortOrder
    forgotPasswordTokenExpiry?: SortOrderInput | SortOrder
    verifyToken?: SortOrderInput | SortOrder
    verifyTokenExpiry?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    password?: StringWithAggregatesFilter<"User"> | string
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    forgotPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    forgotPasswordTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    verifyToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    verifyTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    name?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    pricePerMonth?: FloatFilter<"Property"> | number
    securityDeposit?: FloatFilter<"Property"> | number
    applicationFee?: FloatFilter<"Property"> | number
    isParkingIncluded?: BoolFilter<"Property"> | boolean
    beds?: IntFilter<"Property"> | number
    baths?: IntFilter<"Property"> | number
    squareFeet?: FloatFilter<"Property"> | number
    propertyType?: StringFilter<"Property"> | string
    averageRating?: FloatFilter<"Property"> | number
    numberOfReviews?: IntFilter<"Property"> | number
    locationId?: StringFilter<"Property"> | string
    ownerId?: StringFilter<"Property"> | string
    isAvailable?: BoolFilter<"Property"> | boolean
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    photoUrls?: PhotoUrlListRelationFilter
    amenities?: AmenityListRelationFilter
    highLights?: HighLightListRelationFilter
    FavouriteProperty?: FavouritePropertyListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerMonth?: SortOrder
    securityDeposit?: SortOrder
    applicationFee?: SortOrder
    isParkingIncluded?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    squareFeet?: SortOrder
    propertyType?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    ownerId?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    photoUrls?: PhotoUrlOrderByRelationAggregateInput
    amenities?: AmenityOrderByRelationAggregateInput
    highLights?: HighLightOrderByRelationAggregateInput
    FavouriteProperty?: FavouritePropertyOrderByRelationAggregateInput
    _relevance?: PropertyOrderByRelevanceInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    name?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    pricePerMonth?: FloatFilter<"Property"> | number
    securityDeposit?: FloatFilter<"Property"> | number
    applicationFee?: FloatFilter<"Property"> | number
    isParkingIncluded?: BoolFilter<"Property"> | boolean
    beds?: IntFilter<"Property"> | number
    baths?: IntFilter<"Property"> | number
    squareFeet?: FloatFilter<"Property"> | number
    propertyType?: StringFilter<"Property"> | string
    averageRating?: FloatFilter<"Property"> | number
    numberOfReviews?: IntFilter<"Property"> | number
    locationId?: StringFilter<"Property"> | string
    ownerId?: StringFilter<"Property"> | string
    isAvailable?: BoolFilter<"Property"> | boolean
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    photoUrls?: PhotoUrlListRelationFilter
    amenities?: AmenityListRelationFilter
    highLights?: HighLightListRelationFilter
    FavouriteProperty?: FavouritePropertyListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerMonth?: SortOrder
    securityDeposit?: SortOrder
    applicationFee?: SortOrder
    isParkingIncluded?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    squareFeet?: SortOrder
    propertyType?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    ownerId?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    name?: StringWithAggregatesFilter<"Property"> | string
    description?: StringWithAggregatesFilter<"Property"> | string
    pricePerMonth?: FloatWithAggregatesFilter<"Property"> | number
    securityDeposit?: FloatWithAggregatesFilter<"Property"> | number
    applicationFee?: FloatWithAggregatesFilter<"Property"> | number
    isParkingIncluded?: BoolWithAggregatesFilter<"Property"> | boolean
    beds?: IntWithAggregatesFilter<"Property"> | number
    baths?: IntWithAggregatesFilter<"Property"> | number
    squareFeet?: FloatWithAggregatesFilter<"Property"> | number
    propertyType?: StringWithAggregatesFilter<"Property"> | string
    averageRating?: FloatWithAggregatesFilter<"Property"> | number
    numberOfReviews?: IntWithAggregatesFilter<"Property"> | number
    locationId?: StringWithAggregatesFilter<"Property"> | string
    ownerId?: StringWithAggregatesFilter<"Property"> | string
    isAvailable?: BoolWithAggregatesFilter<"Property"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type PhotoUrlWhereInput = {
    AND?: PhotoUrlWhereInput | PhotoUrlWhereInput[]
    OR?: PhotoUrlWhereInput[]
    NOT?: PhotoUrlWhereInput | PhotoUrlWhereInput[]
    id?: StringFilter<"PhotoUrl"> | string
    url?: StringFilter<"PhotoUrl"> | string
    propertyId?: StringFilter<"PhotoUrl"> | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PhotoUrlOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    propertyId?: SortOrder
    property?: PropertyOrderByWithRelationInput
    _relevance?: PhotoUrlOrderByRelevanceInput
  }

  export type PhotoUrlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoUrlWhereInput | PhotoUrlWhereInput[]
    OR?: PhotoUrlWhereInput[]
    NOT?: PhotoUrlWhereInput | PhotoUrlWhereInput[]
    url?: StringFilter<"PhotoUrl"> | string
    propertyId?: StringFilter<"PhotoUrl"> | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PhotoUrlOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    propertyId?: SortOrder
    _count?: PhotoUrlCountOrderByAggregateInput
    _max?: PhotoUrlMaxOrderByAggregateInput
    _min?: PhotoUrlMinOrderByAggregateInput
  }

  export type PhotoUrlScalarWhereWithAggregatesInput = {
    AND?: PhotoUrlScalarWhereWithAggregatesInput | PhotoUrlScalarWhereWithAggregatesInput[]
    OR?: PhotoUrlScalarWhereWithAggregatesInput[]
    NOT?: PhotoUrlScalarWhereWithAggregatesInput | PhotoUrlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhotoUrl"> | string
    url?: StringWithAggregatesFilter<"PhotoUrl"> | string
    propertyId?: StringWithAggregatesFilter<"PhotoUrl"> | string
  }

  export type AmenityWhereInput = {
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    id?: StringFilter<"Amenity"> | string
    name?: StringFilter<"Amenity"> | string
    propertyId?: StringFilter<"Amenity"> | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type AmenityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
    property?: PropertyOrderByWithRelationInput
    _relevance?: AmenityOrderByRelevanceInput
  }

  export type AmenityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    name?: StringFilter<"Amenity"> | string
    propertyId?: StringFilter<"Amenity"> | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type AmenityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
    _count?: AmenityCountOrderByAggregateInput
    _max?: AmenityMaxOrderByAggregateInput
    _min?: AmenityMinOrderByAggregateInput
  }

  export type AmenityScalarWhereWithAggregatesInput = {
    AND?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    OR?: AmenityScalarWhereWithAggregatesInput[]
    NOT?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Amenity"> | string
    name?: StringWithAggregatesFilter<"Amenity"> | string
    propertyId?: StringWithAggregatesFilter<"Amenity"> | string
  }

  export type HighLightWhereInput = {
    AND?: HighLightWhereInput | HighLightWhereInput[]
    OR?: HighLightWhereInput[]
    NOT?: HighLightWhereInput | HighLightWhereInput[]
    id?: StringFilter<"HighLight"> | string
    name?: StringFilter<"HighLight"> | string
    propertyId?: StringFilter<"HighLight"> | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type HighLightOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
    property?: PropertyOrderByWithRelationInput
    _relevance?: HighLightOrderByRelevanceInput
  }

  export type HighLightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HighLightWhereInput | HighLightWhereInput[]
    OR?: HighLightWhereInput[]
    NOT?: HighLightWhereInput | HighLightWhereInput[]
    name?: StringFilter<"HighLight"> | string
    propertyId?: StringFilter<"HighLight"> | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type HighLightOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
    _count?: HighLightCountOrderByAggregateInput
    _max?: HighLightMaxOrderByAggregateInput
    _min?: HighLightMinOrderByAggregateInput
  }

  export type HighLightScalarWhereWithAggregatesInput = {
    AND?: HighLightScalarWhereWithAggregatesInput | HighLightScalarWhereWithAggregatesInput[]
    OR?: HighLightScalarWhereWithAggregatesInput[]
    NOT?: HighLightScalarWhereWithAggregatesInput | HighLightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HighLight"> | string
    name?: StringWithAggregatesFilter<"HighLight"> | string
    propertyId?: StringWithAggregatesFilter<"HighLight"> | string
  }

  export type FavouritePropertyWhereInput = {
    AND?: FavouritePropertyWhereInput | FavouritePropertyWhereInput[]
    OR?: FavouritePropertyWhereInput[]
    NOT?: FavouritePropertyWhereInput | FavouritePropertyWhereInput[]
    id?: StringFilter<"FavouriteProperty"> | string
    propertyId?: StringFilter<"FavouriteProperty"> | string
    userId?: StringFilter<"FavouriteProperty"> | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FavouritePropertyOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    property?: PropertyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: FavouritePropertyOrderByRelevanceInput
  }

  export type FavouritePropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_propertyId?: FavouritePropertyUserIdPropertyIdCompoundUniqueInput
    AND?: FavouritePropertyWhereInput | FavouritePropertyWhereInput[]
    OR?: FavouritePropertyWhereInput[]
    NOT?: FavouritePropertyWhereInput | FavouritePropertyWhereInput[]
    propertyId?: StringFilter<"FavouriteProperty"> | string
    userId?: StringFilter<"FavouriteProperty"> | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_propertyId">

  export type FavouritePropertyOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    _count?: FavouritePropertyCountOrderByAggregateInput
    _max?: FavouritePropertyMaxOrderByAggregateInput
    _min?: FavouritePropertyMinOrderByAggregateInput
  }

  export type FavouritePropertyScalarWhereWithAggregatesInput = {
    AND?: FavouritePropertyScalarWhereWithAggregatesInput | FavouritePropertyScalarWhereWithAggregatesInput[]
    OR?: FavouritePropertyScalarWhereWithAggregatesInput[]
    NOT?: FavouritePropertyScalarWhereWithAggregatesInput | FavouritePropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FavouriteProperty"> | string
    propertyId?: StringWithAggregatesFilter<"FavouriteProperty"> | string
    userId?: StringWithAggregatesFilter<"FavouriteProperty"> | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    password: string
    isVerified?: boolean
    role?: $Enums.UserRole
    phoneNumber?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    verifyToken?: string | null
    verifyTokenExpiry?: Date | string | null
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    FavouriteProperty?: FavouritePropertyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    password: string
    isVerified?: boolean
    role?: $Enums.UserRole
    phoneNumber?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    verifyToken?: string | null
    verifyTokenExpiry?: Date | string | null
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    FavouriteProperty?: FavouritePropertyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    FavouriteProperty?: FavouritePropertyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    FavouriteProperty?: FavouritePropertyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    password: string
    isVerified?: boolean
    role?: $Enums.UserRole
    phoneNumber?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    verifyToken?: string | null
    verifyTokenExpiry?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyCreateInput = {
    id?: string
    name: string
    description: string
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded?: boolean
    beds: number
    baths: number
    squareFeet?: number
    propertyType: string
    averageRating?: number
    numberOfReviews?: number
    locationId: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutPropertiesInput
    photoUrls?: PhotoUrlCreateNestedManyWithoutPropertyInput
    amenities?: AmenityCreateNestedManyWithoutPropertyInput
    highLights?: HighLightCreateNestedManyWithoutPropertyInput
    FavouriteProperty?: FavouritePropertyCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded?: boolean
    beds: number
    baths: number
    squareFeet?: number
    propertyType: string
    averageRating?: number
    numberOfReviews?: number
    locationId: string
    ownerId: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photoUrls?: PhotoUrlUncheckedCreateNestedManyWithoutPropertyInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutPropertyInput
    highLights?: HighLightUncheckedCreateNestedManyWithoutPropertyInput
    FavouriteProperty?: FavouritePropertyUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    applicationFee?: FloatFieldUpdateOperationsInput | number
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    squareFeet?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    numberOfReviews?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    photoUrls?: PhotoUrlUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUpdateManyWithoutPropertyNestedInput
    highLights?: HighLightUpdateManyWithoutPropertyNestedInput
    FavouriteProperty?: FavouritePropertyUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    applicationFee?: FloatFieldUpdateOperationsInput | number
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    squareFeet?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    numberOfReviews?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrls?: PhotoUrlUncheckedUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutPropertyNestedInput
    highLights?: HighLightUncheckedUpdateManyWithoutPropertyNestedInput
    FavouriteProperty?: FavouritePropertyUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    name: string
    description: string
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded?: boolean
    beds: number
    baths: number
    squareFeet?: number
    propertyType: string
    averageRating?: number
    numberOfReviews?: number
    locationId: string
    ownerId: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    applicationFee?: FloatFieldUpdateOperationsInput | number
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    squareFeet?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    numberOfReviews?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    applicationFee?: FloatFieldUpdateOperationsInput | number
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    squareFeet?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    numberOfReviews?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUrlCreateInput = {
    id?: string
    url: string
    property: PropertyCreateNestedOneWithoutPhotoUrlsInput
  }

  export type PhotoUrlUncheckedCreateInput = {
    id?: string
    url: string
    propertyId: string
  }

  export type PhotoUrlUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    property?: PropertyUpdateOneRequiredWithoutPhotoUrlsNestedInput
  }

  export type PhotoUrlUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUrlCreateManyInput = {
    id?: string
    url: string
    propertyId: string
  }

  export type PhotoUrlUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUrlUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityCreateInput = {
    id?: string
    name: string
    property: PropertyCreateNestedOneWithoutAmenitiesInput
  }

  export type AmenityUncheckedCreateInput = {
    id?: string
    name: string
    propertyId: string
  }

  export type AmenityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    property?: PropertyUpdateOneRequiredWithoutAmenitiesNestedInput
  }

  export type AmenityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityCreateManyInput = {
    id?: string
    name: string
    propertyId: string
  }

  export type AmenityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type HighLightCreateInput = {
    id?: string
    name: string
    property: PropertyCreateNestedOneWithoutHighLightsInput
  }

  export type HighLightUncheckedCreateInput = {
    id?: string
    name: string
    propertyId: string
  }

  export type HighLightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    property?: PropertyUpdateOneRequiredWithoutHighLightsNestedInput
  }

  export type HighLightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type HighLightCreateManyInput = {
    id?: string
    name: string
    propertyId: string
  }

  export type HighLightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HighLightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type FavouritePropertyCreateInput = {
    id?: string
    property: PropertyCreateNestedOneWithoutFavouritePropertyInput
    user: UserCreateNestedOneWithoutFavouritePropertyInput
  }

  export type FavouritePropertyUncheckedCreateInput = {
    id?: string
    propertyId: string
    userId: string
  }

  export type FavouritePropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    property?: PropertyUpdateOneRequiredWithoutFavouritePropertyNestedInput
    user?: UserUpdateOneRequiredWithoutFavouritePropertyNestedInput
  }

  export type FavouritePropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FavouritePropertyCreateManyInput = {
    id?: string
    propertyId: string
    userId: string
  }

  export type FavouritePropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FavouritePropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type FavouritePropertyListRelationFilter = {
    every?: FavouritePropertyWhereInput
    some?: FavouritePropertyWhereInput
    none?: FavouritePropertyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavouritePropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    phoneNumber?: SortOrder
    forgotPasswordToken?: SortOrder
    forgotPasswordTokenExpiry?: SortOrder
    verifyToken?: SortOrder
    verifyTokenExpiry?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    phoneNumber?: SortOrder
    forgotPasswordToken?: SortOrder
    forgotPasswordTokenExpiry?: SortOrder
    verifyToken?: SortOrder
    verifyTokenExpiry?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    phoneNumber?: SortOrder
    forgotPasswordToken?: SortOrder
    forgotPasswordTokenExpiry?: SortOrder
    verifyToken?: SortOrder
    verifyTokenExpiry?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PhotoUrlListRelationFilter = {
    every?: PhotoUrlWhereInput
    some?: PhotoUrlWhereInput
    none?: PhotoUrlWhereInput
  }

  export type AmenityListRelationFilter = {
    every?: AmenityWhereInput
    some?: AmenityWhereInput
    none?: AmenityWhereInput
  }

  export type HighLightListRelationFilter = {
    every?: HighLightWhereInput
    some?: HighLightWhereInput
    none?: HighLightWhereInput
  }

  export type PhotoUrlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AmenityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HighLightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyOrderByRelevanceInput = {
    fields: PropertyOrderByRelevanceFieldEnum | PropertyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerMonth?: SortOrder
    securityDeposit?: SortOrder
    applicationFee?: SortOrder
    isParkingIncluded?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    squareFeet?: SortOrder
    propertyType?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    ownerId?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    pricePerMonth?: SortOrder
    securityDeposit?: SortOrder
    applicationFee?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    squareFeet?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerMonth?: SortOrder
    securityDeposit?: SortOrder
    applicationFee?: SortOrder
    isParkingIncluded?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    squareFeet?: SortOrder
    propertyType?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    ownerId?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerMonth?: SortOrder
    securityDeposit?: SortOrder
    applicationFee?: SortOrder
    isParkingIncluded?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    squareFeet?: SortOrder
    propertyType?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    ownerId?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    pricePerMonth?: SortOrder
    securityDeposit?: SortOrder
    applicationFee?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    squareFeet?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type PhotoUrlOrderByRelevanceInput = {
    fields: PhotoUrlOrderByRelevanceFieldEnum | PhotoUrlOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhotoUrlCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    propertyId?: SortOrder
  }

  export type PhotoUrlMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    propertyId?: SortOrder
  }

  export type PhotoUrlMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    propertyId?: SortOrder
  }

  export type AmenityOrderByRelevanceInput = {
    fields: AmenityOrderByRelevanceFieldEnum | AmenityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AmenityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
  }

  export type AmenityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
  }

  export type AmenityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
  }

  export type HighLightOrderByRelevanceInput = {
    fields: HighLightOrderByRelevanceFieldEnum | HighLightOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HighLightCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
  }

  export type HighLightMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
  }

  export type HighLightMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
  }

  export type FavouritePropertyOrderByRelevanceInput = {
    fields: FavouritePropertyOrderByRelevanceFieldEnum | FavouritePropertyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FavouritePropertyUserIdPropertyIdCompoundUniqueInput = {
    userId: string
    propertyId: string
  }

  export type FavouritePropertyCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
  }

  export type FavouritePropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
  }

  export type FavouritePropertyMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
  }

  export type PropertyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type FavouritePropertyCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouritePropertyCreateWithoutUserInput, FavouritePropertyUncheckedCreateWithoutUserInput> | FavouritePropertyCreateWithoutUserInput[] | FavouritePropertyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouritePropertyCreateOrConnectWithoutUserInput | FavouritePropertyCreateOrConnectWithoutUserInput[]
    createMany?: FavouritePropertyCreateManyUserInputEnvelope
    connect?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type FavouritePropertyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouritePropertyCreateWithoutUserInput, FavouritePropertyUncheckedCreateWithoutUserInput> | FavouritePropertyCreateWithoutUserInput[] | FavouritePropertyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouritePropertyCreateOrConnectWithoutUserInput | FavouritePropertyCreateOrConnectWithoutUserInput[]
    createMany?: FavouritePropertyCreateManyUserInputEnvelope
    connect?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PropertyUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOwnerInput | PropertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOwnerInput | PropertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOwnerInput | PropertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type FavouritePropertyUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouritePropertyCreateWithoutUserInput, FavouritePropertyUncheckedCreateWithoutUserInput> | FavouritePropertyCreateWithoutUserInput[] | FavouritePropertyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouritePropertyCreateOrConnectWithoutUserInput | FavouritePropertyCreateOrConnectWithoutUserInput[]
    upsert?: FavouritePropertyUpsertWithWhereUniqueWithoutUserInput | FavouritePropertyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouritePropertyCreateManyUserInputEnvelope
    set?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    disconnect?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    delete?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    connect?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    update?: FavouritePropertyUpdateWithWhereUniqueWithoutUserInput | FavouritePropertyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouritePropertyUpdateManyWithWhereWithoutUserInput | FavouritePropertyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouritePropertyScalarWhereInput | FavouritePropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOwnerInput | PropertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOwnerInput | PropertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOwnerInput | PropertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type FavouritePropertyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouritePropertyCreateWithoutUserInput, FavouritePropertyUncheckedCreateWithoutUserInput> | FavouritePropertyCreateWithoutUserInput[] | FavouritePropertyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouritePropertyCreateOrConnectWithoutUserInput | FavouritePropertyCreateOrConnectWithoutUserInput[]
    upsert?: FavouritePropertyUpsertWithWhereUniqueWithoutUserInput | FavouritePropertyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouritePropertyCreateManyUserInputEnvelope
    set?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    disconnect?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    delete?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    connect?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    update?: FavouritePropertyUpdateWithWhereUniqueWithoutUserInput | FavouritePropertyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouritePropertyUpdateManyWithWhereWithoutUserInput | FavouritePropertyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouritePropertyScalarWhereInput | FavouritePropertyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    connect?: UserWhereUniqueInput
  }

  export type PhotoUrlCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PhotoUrlCreateWithoutPropertyInput, PhotoUrlUncheckedCreateWithoutPropertyInput> | PhotoUrlCreateWithoutPropertyInput[] | PhotoUrlUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PhotoUrlCreateOrConnectWithoutPropertyInput | PhotoUrlCreateOrConnectWithoutPropertyInput[]
    createMany?: PhotoUrlCreateManyPropertyInputEnvelope
    connect?: PhotoUrlWhereUniqueInput | PhotoUrlWhereUniqueInput[]
  }

  export type AmenityCreateNestedManyWithoutPropertyInput = {
    create?: XOR<AmenityCreateWithoutPropertyInput, AmenityUncheckedCreateWithoutPropertyInput> | AmenityCreateWithoutPropertyInput[] | AmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutPropertyInput | AmenityCreateOrConnectWithoutPropertyInput[]
    createMany?: AmenityCreateManyPropertyInputEnvelope
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
  }

  export type HighLightCreateNestedManyWithoutPropertyInput = {
    create?: XOR<HighLightCreateWithoutPropertyInput, HighLightUncheckedCreateWithoutPropertyInput> | HighLightCreateWithoutPropertyInput[] | HighLightUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: HighLightCreateOrConnectWithoutPropertyInput | HighLightCreateOrConnectWithoutPropertyInput[]
    createMany?: HighLightCreateManyPropertyInputEnvelope
    connect?: HighLightWhereUniqueInput | HighLightWhereUniqueInput[]
  }

  export type FavouritePropertyCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FavouritePropertyCreateWithoutPropertyInput, FavouritePropertyUncheckedCreateWithoutPropertyInput> | FavouritePropertyCreateWithoutPropertyInput[] | FavouritePropertyUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavouritePropertyCreateOrConnectWithoutPropertyInput | FavouritePropertyCreateOrConnectWithoutPropertyInput[]
    createMany?: FavouritePropertyCreateManyPropertyInputEnvelope
    connect?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
  }

  export type PhotoUrlUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PhotoUrlCreateWithoutPropertyInput, PhotoUrlUncheckedCreateWithoutPropertyInput> | PhotoUrlCreateWithoutPropertyInput[] | PhotoUrlUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PhotoUrlCreateOrConnectWithoutPropertyInput | PhotoUrlCreateOrConnectWithoutPropertyInput[]
    createMany?: PhotoUrlCreateManyPropertyInputEnvelope
    connect?: PhotoUrlWhereUniqueInput | PhotoUrlWhereUniqueInput[]
  }

  export type AmenityUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<AmenityCreateWithoutPropertyInput, AmenityUncheckedCreateWithoutPropertyInput> | AmenityCreateWithoutPropertyInput[] | AmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutPropertyInput | AmenityCreateOrConnectWithoutPropertyInput[]
    createMany?: AmenityCreateManyPropertyInputEnvelope
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
  }

  export type HighLightUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<HighLightCreateWithoutPropertyInput, HighLightUncheckedCreateWithoutPropertyInput> | HighLightCreateWithoutPropertyInput[] | HighLightUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: HighLightCreateOrConnectWithoutPropertyInput | HighLightCreateOrConnectWithoutPropertyInput[]
    createMany?: HighLightCreateManyPropertyInputEnvelope
    connect?: HighLightWhereUniqueInput | HighLightWhereUniqueInput[]
  }

  export type FavouritePropertyUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FavouritePropertyCreateWithoutPropertyInput, FavouritePropertyUncheckedCreateWithoutPropertyInput> | FavouritePropertyCreateWithoutPropertyInput[] | FavouritePropertyUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavouritePropertyCreateOrConnectWithoutPropertyInput | FavouritePropertyCreateOrConnectWithoutPropertyInput[]
    createMany?: FavouritePropertyCreateManyPropertyInputEnvelope
    connect?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    upsert?: UserUpsertWithoutPropertiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPropertiesInput, UserUpdateWithoutPropertiesInput>, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type PhotoUrlUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PhotoUrlCreateWithoutPropertyInput, PhotoUrlUncheckedCreateWithoutPropertyInput> | PhotoUrlCreateWithoutPropertyInput[] | PhotoUrlUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PhotoUrlCreateOrConnectWithoutPropertyInput | PhotoUrlCreateOrConnectWithoutPropertyInput[]
    upsert?: PhotoUrlUpsertWithWhereUniqueWithoutPropertyInput | PhotoUrlUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PhotoUrlCreateManyPropertyInputEnvelope
    set?: PhotoUrlWhereUniqueInput | PhotoUrlWhereUniqueInput[]
    disconnect?: PhotoUrlWhereUniqueInput | PhotoUrlWhereUniqueInput[]
    delete?: PhotoUrlWhereUniqueInput | PhotoUrlWhereUniqueInput[]
    connect?: PhotoUrlWhereUniqueInput | PhotoUrlWhereUniqueInput[]
    update?: PhotoUrlUpdateWithWhereUniqueWithoutPropertyInput | PhotoUrlUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PhotoUrlUpdateManyWithWhereWithoutPropertyInput | PhotoUrlUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PhotoUrlScalarWhereInput | PhotoUrlScalarWhereInput[]
  }

  export type AmenityUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<AmenityCreateWithoutPropertyInput, AmenityUncheckedCreateWithoutPropertyInput> | AmenityCreateWithoutPropertyInput[] | AmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutPropertyInput | AmenityCreateOrConnectWithoutPropertyInput[]
    upsert?: AmenityUpsertWithWhereUniqueWithoutPropertyInput | AmenityUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: AmenityCreateManyPropertyInputEnvelope
    set?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    disconnect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    delete?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    update?: AmenityUpdateWithWhereUniqueWithoutPropertyInput | AmenityUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: AmenityUpdateManyWithWhereWithoutPropertyInput | AmenityUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
  }

  export type HighLightUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<HighLightCreateWithoutPropertyInput, HighLightUncheckedCreateWithoutPropertyInput> | HighLightCreateWithoutPropertyInput[] | HighLightUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: HighLightCreateOrConnectWithoutPropertyInput | HighLightCreateOrConnectWithoutPropertyInput[]
    upsert?: HighLightUpsertWithWhereUniqueWithoutPropertyInput | HighLightUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: HighLightCreateManyPropertyInputEnvelope
    set?: HighLightWhereUniqueInput | HighLightWhereUniqueInput[]
    disconnect?: HighLightWhereUniqueInput | HighLightWhereUniqueInput[]
    delete?: HighLightWhereUniqueInput | HighLightWhereUniqueInput[]
    connect?: HighLightWhereUniqueInput | HighLightWhereUniqueInput[]
    update?: HighLightUpdateWithWhereUniqueWithoutPropertyInput | HighLightUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: HighLightUpdateManyWithWhereWithoutPropertyInput | HighLightUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: HighLightScalarWhereInput | HighLightScalarWhereInput[]
  }

  export type FavouritePropertyUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FavouritePropertyCreateWithoutPropertyInput, FavouritePropertyUncheckedCreateWithoutPropertyInput> | FavouritePropertyCreateWithoutPropertyInput[] | FavouritePropertyUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavouritePropertyCreateOrConnectWithoutPropertyInput | FavouritePropertyCreateOrConnectWithoutPropertyInput[]
    upsert?: FavouritePropertyUpsertWithWhereUniqueWithoutPropertyInput | FavouritePropertyUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FavouritePropertyCreateManyPropertyInputEnvelope
    set?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    disconnect?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    delete?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    connect?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    update?: FavouritePropertyUpdateWithWhereUniqueWithoutPropertyInput | FavouritePropertyUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FavouritePropertyUpdateManyWithWhereWithoutPropertyInput | FavouritePropertyUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FavouritePropertyScalarWhereInput | FavouritePropertyScalarWhereInput[]
  }

  export type PhotoUrlUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PhotoUrlCreateWithoutPropertyInput, PhotoUrlUncheckedCreateWithoutPropertyInput> | PhotoUrlCreateWithoutPropertyInput[] | PhotoUrlUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PhotoUrlCreateOrConnectWithoutPropertyInput | PhotoUrlCreateOrConnectWithoutPropertyInput[]
    upsert?: PhotoUrlUpsertWithWhereUniqueWithoutPropertyInput | PhotoUrlUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PhotoUrlCreateManyPropertyInputEnvelope
    set?: PhotoUrlWhereUniqueInput | PhotoUrlWhereUniqueInput[]
    disconnect?: PhotoUrlWhereUniqueInput | PhotoUrlWhereUniqueInput[]
    delete?: PhotoUrlWhereUniqueInput | PhotoUrlWhereUniqueInput[]
    connect?: PhotoUrlWhereUniqueInput | PhotoUrlWhereUniqueInput[]
    update?: PhotoUrlUpdateWithWhereUniqueWithoutPropertyInput | PhotoUrlUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PhotoUrlUpdateManyWithWhereWithoutPropertyInput | PhotoUrlUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PhotoUrlScalarWhereInput | PhotoUrlScalarWhereInput[]
  }

  export type AmenityUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<AmenityCreateWithoutPropertyInput, AmenityUncheckedCreateWithoutPropertyInput> | AmenityCreateWithoutPropertyInput[] | AmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutPropertyInput | AmenityCreateOrConnectWithoutPropertyInput[]
    upsert?: AmenityUpsertWithWhereUniqueWithoutPropertyInput | AmenityUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: AmenityCreateManyPropertyInputEnvelope
    set?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    disconnect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    delete?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    update?: AmenityUpdateWithWhereUniqueWithoutPropertyInput | AmenityUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: AmenityUpdateManyWithWhereWithoutPropertyInput | AmenityUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
  }

  export type HighLightUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<HighLightCreateWithoutPropertyInput, HighLightUncheckedCreateWithoutPropertyInput> | HighLightCreateWithoutPropertyInput[] | HighLightUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: HighLightCreateOrConnectWithoutPropertyInput | HighLightCreateOrConnectWithoutPropertyInput[]
    upsert?: HighLightUpsertWithWhereUniqueWithoutPropertyInput | HighLightUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: HighLightCreateManyPropertyInputEnvelope
    set?: HighLightWhereUniqueInput | HighLightWhereUniqueInput[]
    disconnect?: HighLightWhereUniqueInput | HighLightWhereUniqueInput[]
    delete?: HighLightWhereUniqueInput | HighLightWhereUniqueInput[]
    connect?: HighLightWhereUniqueInput | HighLightWhereUniqueInput[]
    update?: HighLightUpdateWithWhereUniqueWithoutPropertyInput | HighLightUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: HighLightUpdateManyWithWhereWithoutPropertyInput | HighLightUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: HighLightScalarWhereInput | HighLightScalarWhereInput[]
  }

  export type FavouritePropertyUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FavouritePropertyCreateWithoutPropertyInput, FavouritePropertyUncheckedCreateWithoutPropertyInput> | FavouritePropertyCreateWithoutPropertyInput[] | FavouritePropertyUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavouritePropertyCreateOrConnectWithoutPropertyInput | FavouritePropertyCreateOrConnectWithoutPropertyInput[]
    upsert?: FavouritePropertyUpsertWithWhereUniqueWithoutPropertyInput | FavouritePropertyUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FavouritePropertyCreateManyPropertyInputEnvelope
    set?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    disconnect?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    delete?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    connect?: FavouritePropertyWhereUniqueInput | FavouritePropertyWhereUniqueInput[]
    update?: FavouritePropertyUpdateWithWhereUniqueWithoutPropertyInput | FavouritePropertyUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FavouritePropertyUpdateManyWithWhereWithoutPropertyInput | FavouritePropertyUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FavouritePropertyScalarWhereInput | FavouritePropertyScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutPhotoUrlsInput = {
    create?: XOR<PropertyCreateWithoutPhotoUrlsInput, PropertyUncheckedCreateWithoutPhotoUrlsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPhotoUrlsInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutPhotoUrlsNestedInput = {
    create?: XOR<PropertyCreateWithoutPhotoUrlsInput, PropertyUncheckedCreateWithoutPhotoUrlsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPhotoUrlsInput
    upsert?: PropertyUpsertWithoutPhotoUrlsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutPhotoUrlsInput, PropertyUpdateWithoutPhotoUrlsInput>, PropertyUncheckedUpdateWithoutPhotoUrlsInput>
  }

  export type PropertyCreateNestedOneWithoutAmenitiesInput = {
    create?: XOR<PropertyCreateWithoutAmenitiesInput, PropertyUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutAmenitiesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutAmenitiesNestedInput = {
    create?: XOR<PropertyCreateWithoutAmenitiesInput, PropertyUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutAmenitiesInput
    upsert?: PropertyUpsertWithoutAmenitiesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutAmenitiesInput, PropertyUpdateWithoutAmenitiesInput>, PropertyUncheckedUpdateWithoutAmenitiesInput>
  }

  export type PropertyCreateNestedOneWithoutHighLightsInput = {
    create?: XOR<PropertyCreateWithoutHighLightsInput, PropertyUncheckedCreateWithoutHighLightsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutHighLightsInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutHighLightsNestedInput = {
    create?: XOR<PropertyCreateWithoutHighLightsInput, PropertyUncheckedCreateWithoutHighLightsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutHighLightsInput
    upsert?: PropertyUpsertWithoutHighLightsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutHighLightsInput, PropertyUpdateWithoutHighLightsInput>, PropertyUncheckedUpdateWithoutHighLightsInput>
  }

  export type PropertyCreateNestedOneWithoutFavouritePropertyInput = {
    create?: XOR<PropertyCreateWithoutFavouritePropertyInput, PropertyUncheckedCreateWithoutFavouritePropertyInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutFavouritePropertyInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFavouritePropertyInput = {
    create?: XOR<UserCreateWithoutFavouritePropertyInput, UserUncheckedCreateWithoutFavouritePropertyInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritePropertyInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutFavouritePropertyNestedInput = {
    create?: XOR<PropertyCreateWithoutFavouritePropertyInput, PropertyUncheckedCreateWithoutFavouritePropertyInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutFavouritePropertyInput
    upsert?: PropertyUpsertWithoutFavouritePropertyInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutFavouritePropertyInput, PropertyUpdateWithoutFavouritePropertyInput>, PropertyUncheckedUpdateWithoutFavouritePropertyInput>
  }

  export type UserUpdateOneRequiredWithoutFavouritePropertyNestedInput = {
    create?: XOR<UserCreateWithoutFavouritePropertyInput, UserUncheckedCreateWithoutFavouritePropertyInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritePropertyInput
    upsert?: UserUpsertWithoutFavouritePropertyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavouritePropertyInput, UserUpdateWithoutFavouritePropertyInput>, UserUncheckedUpdateWithoutFavouritePropertyInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type PropertyCreateWithoutOwnerInput = {
    id?: string
    name: string
    description: string
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded?: boolean
    beds: number
    baths: number
    squareFeet?: number
    propertyType: string
    averageRating?: number
    numberOfReviews?: number
    locationId: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photoUrls?: PhotoUrlCreateNestedManyWithoutPropertyInput
    amenities?: AmenityCreateNestedManyWithoutPropertyInput
    highLights?: HighLightCreateNestedManyWithoutPropertyInput
    FavouriteProperty?: FavouritePropertyCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description: string
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded?: boolean
    beds: number
    baths: number
    squareFeet?: number
    propertyType: string
    averageRating?: number
    numberOfReviews?: number
    locationId: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photoUrls?: PhotoUrlUncheckedCreateNestedManyWithoutPropertyInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutPropertyInput
    highLights?: HighLightUncheckedCreateNestedManyWithoutPropertyInput
    FavouriteProperty?: FavouritePropertyUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput>
  }

  export type PropertyCreateManyOwnerInputEnvelope = {
    data: PropertyCreateManyOwnerInput | PropertyCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type FavouritePropertyCreateWithoutUserInput = {
    id?: string
    property: PropertyCreateNestedOneWithoutFavouritePropertyInput
  }

  export type FavouritePropertyUncheckedCreateWithoutUserInput = {
    id?: string
    propertyId: string
  }

  export type FavouritePropertyCreateOrConnectWithoutUserInput = {
    where: FavouritePropertyWhereUniqueInput
    create: XOR<FavouritePropertyCreateWithoutUserInput, FavouritePropertyUncheckedCreateWithoutUserInput>
  }

  export type FavouritePropertyCreateManyUserInputEnvelope = {
    data: FavouritePropertyCreateManyUserInput | FavouritePropertyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutOwnerInput, PropertyUncheckedUpdateWithoutOwnerInput>
    create: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutOwnerInput, PropertyUncheckedUpdateWithoutOwnerInput>
  }

  export type PropertyUpdateManyWithWhereWithoutOwnerInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: StringFilter<"Property"> | string
    name?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    pricePerMonth?: FloatFilter<"Property"> | number
    securityDeposit?: FloatFilter<"Property"> | number
    applicationFee?: FloatFilter<"Property"> | number
    isParkingIncluded?: BoolFilter<"Property"> | boolean
    beds?: IntFilter<"Property"> | number
    baths?: IntFilter<"Property"> | number
    squareFeet?: FloatFilter<"Property"> | number
    propertyType?: StringFilter<"Property"> | string
    averageRating?: FloatFilter<"Property"> | number
    numberOfReviews?: IntFilter<"Property"> | number
    locationId?: StringFilter<"Property"> | string
    ownerId?: StringFilter<"Property"> | string
    isAvailable?: BoolFilter<"Property"> | boolean
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
  }

  export type FavouritePropertyUpsertWithWhereUniqueWithoutUserInput = {
    where: FavouritePropertyWhereUniqueInput
    update: XOR<FavouritePropertyUpdateWithoutUserInput, FavouritePropertyUncheckedUpdateWithoutUserInput>
    create: XOR<FavouritePropertyCreateWithoutUserInput, FavouritePropertyUncheckedCreateWithoutUserInput>
  }

  export type FavouritePropertyUpdateWithWhereUniqueWithoutUserInput = {
    where: FavouritePropertyWhereUniqueInput
    data: XOR<FavouritePropertyUpdateWithoutUserInput, FavouritePropertyUncheckedUpdateWithoutUserInput>
  }

  export type FavouritePropertyUpdateManyWithWhereWithoutUserInput = {
    where: FavouritePropertyScalarWhereInput
    data: XOR<FavouritePropertyUpdateManyMutationInput, FavouritePropertyUncheckedUpdateManyWithoutUserInput>
  }

  export type FavouritePropertyScalarWhereInput = {
    AND?: FavouritePropertyScalarWhereInput | FavouritePropertyScalarWhereInput[]
    OR?: FavouritePropertyScalarWhereInput[]
    NOT?: FavouritePropertyScalarWhereInput | FavouritePropertyScalarWhereInput[]
    id?: StringFilter<"FavouriteProperty"> | string
    propertyId?: StringFilter<"FavouriteProperty"> | string
    userId?: StringFilter<"FavouriteProperty"> | string
  }

  export type UserCreateWithoutPropertiesInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    password: string
    isVerified?: boolean
    role?: $Enums.UserRole
    phoneNumber?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    verifyToken?: string | null
    verifyTokenExpiry?: Date | string | null
    FavouriteProperty?: FavouritePropertyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPropertiesInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    password: string
    isVerified?: boolean
    role?: $Enums.UserRole
    phoneNumber?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    verifyToken?: string | null
    verifyTokenExpiry?: Date | string | null
    FavouriteProperty?: FavouritePropertyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPropertiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
  }

  export type PhotoUrlCreateWithoutPropertyInput = {
    id?: string
    url: string
  }

  export type PhotoUrlUncheckedCreateWithoutPropertyInput = {
    id?: string
    url: string
  }

  export type PhotoUrlCreateOrConnectWithoutPropertyInput = {
    where: PhotoUrlWhereUniqueInput
    create: XOR<PhotoUrlCreateWithoutPropertyInput, PhotoUrlUncheckedCreateWithoutPropertyInput>
  }

  export type PhotoUrlCreateManyPropertyInputEnvelope = {
    data: PhotoUrlCreateManyPropertyInput | PhotoUrlCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type AmenityCreateWithoutPropertyInput = {
    id?: string
    name: string
  }

  export type AmenityUncheckedCreateWithoutPropertyInput = {
    id?: string
    name: string
  }

  export type AmenityCreateOrConnectWithoutPropertyInput = {
    where: AmenityWhereUniqueInput
    create: XOR<AmenityCreateWithoutPropertyInput, AmenityUncheckedCreateWithoutPropertyInput>
  }

  export type AmenityCreateManyPropertyInputEnvelope = {
    data: AmenityCreateManyPropertyInput | AmenityCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type HighLightCreateWithoutPropertyInput = {
    id?: string
    name: string
  }

  export type HighLightUncheckedCreateWithoutPropertyInput = {
    id?: string
    name: string
  }

  export type HighLightCreateOrConnectWithoutPropertyInput = {
    where: HighLightWhereUniqueInput
    create: XOR<HighLightCreateWithoutPropertyInput, HighLightUncheckedCreateWithoutPropertyInput>
  }

  export type HighLightCreateManyPropertyInputEnvelope = {
    data: HighLightCreateManyPropertyInput | HighLightCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type FavouritePropertyCreateWithoutPropertyInput = {
    id?: string
    user: UserCreateNestedOneWithoutFavouritePropertyInput
  }

  export type FavouritePropertyUncheckedCreateWithoutPropertyInput = {
    id?: string
    userId: string
  }

  export type FavouritePropertyCreateOrConnectWithoutPropertyInput = {
    where: FavouritePropertyWhereUniqueInput
    create: XOR<FavouritePropertyCreateWithoutPropertyInput, FavouritePropertyUncheckedCreateWithoutPropertyInput>
  }

  export type FavouritePropertyCreateManyPropertyInputEnvelope = {
    data: FavouritePropertyCreateManyPropertyInput | FavouritePropertyCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPropertiesInput = {
    update: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type UserUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FavouriteProperty?: FavouritePropertyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FavouriteProperty?: FavouritePropertyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PhotoUrlUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PhotoUrlWhereUniqueInput
    update: XOR<PhotoUrlUpdateWithoutPropertyInput, PhotoUrlUncheckedUpdateWithoutPropertyInput>
    create: XOR<PhotoUrlCreateWithoutPropertyInput, PhotoUrlUncheckedCreateWithoutPropertyInput>
  }

  export type PhotoUrlUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PhotoUrlWhereUniqueInput
    data: XOR<PhotoUrlUpdateWithoutPropertyInput, PhotoUrlUncheckedUpdateWithoutPropertyInput>
  }

  export type PhotoUrlUpdateManyWithWhereWithoutPropertyInput = {
    where: PhotoUrlScalarWhereInput
    data: XOR<PhotoUrlUpdateManyMutationInput, PhotoUrlUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PhotoUrlScalarWhereInput = {
    AND?: PhotoUrlScalarWhereInput | PhotoUrlScalarWhereInput[]
    OR?: PhotoUrlScalarWhereInput[]
    NOT?: PhotoUrlScalarWhereInput | PhotoUrlScalarWhereInput[]
    id?: StringFilter<"PhotoUrl"> | string
    url?: StringFilter<"PhotoUrl"> | string
    propertyId?: StringFilter<"PhotoUrl"> | string
  }

  export type AmenityUpsertWithWhereUniqueWithoutPropertyInput = {
    where: AmenityWhereUniqueInput
    update: XOR<AmenityUpdateWithoutPropertyInput, AmenityUncheckedUpdateWithoutPropertyInput>
    create: XOR<AmenityCreateWithoutPropertyInput, AmenityUncheckedCreateWithoutPropertyInput>
  }

  export type AmenityUpdateWithWhereUniqueWithoutPropertyInput = {
    where: AmenityWhereUniqueInput
    data: XOR<AmenityUpdateWithoutPropertyInput, AmenityUncheckedUpdateWithoutPropertyInput>
  }

  export type AmenityUpdateManyWithWhereWithoutPropertyInput = {
    where: AmenityScalarWhereInput
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyWithoutPropertyInput>
  }

  export type AmenityScalarWhereInput = {
    AND?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
    OR?: AmenityScalarWhereInput[]
    NOT?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
    id?: StringFilter<"Amenity"> | string
    name?: StringFilter<"Amenity"> | string
    propertyId?: StringFilter<"Amenity"> | string
  }

  export type HighLightUpsertWithWhereUniqueWithoutPropertyInput = {
    where: HighLightWhereUniqueInput
    update: XOR<HighLightUpdateWithoutPropertyInput, HighLightUncheckedUpdateWithoutPropertyInput>
    create: XOR<HighLightCreateWithoutPropertyInput, HighLightUncheckedCreateWithoutPropertyInput>
  }

  export type HighLightUpdateWithWhereUniqueWithoutPropertyInput = {
    where: HighLightWhereUniqueInput
    data: XOR<HighLightUpdateWithoutPropertyInput, HighLightUncheckedUpdateWithoutPropertyInput>
  }

  export type HighLightUpdateManyWithWhereWithoutPropertyInput = {
    where: HighLightScalarWhereInput
    data: XOR<HighLightUpdateManyMutationInput, HighLightUncheckedUpdateManyWithoutPropertyInput>
  }

  export type HighLightScalarWhereInput = {
    AND?: HighLightScalarWhereInput | HighLightScalarWhereInput[]
    OR?: HighLightScalarWhereInput[]
    NOT?: HighLightScalarWhereInput | HighLightScalarWhereInput[]
    id?: StringFilter<"HighLight"> | string
    name?: StringFilter<"HighLight"> | string
    propertyId?: StringFilter<"HighLight"> | string
  }

  export type FavouritePropertyUpsertWithWhereUniqueWithoutPropertyInput = {
    where: FavouritePropertyWhereUniqueInput
    update: XOR<FavouritePropertyUpdateWithoutPropertyInput, FavouritePropertyUncheckedUpdateWithoutPropertyInput>
    create: XOR<FavouritePropertyCreateWithoutPropertyInput, FavouritePropertyUncheckedCreateWithoutPropertyInput>
  }

  export type FavouritePropertyUpdateWithWhereUniqueWithoutPropertyInput = {
    where: FavouritePropertyWhereUniqueInput
    data: XOR<FavouritePropertyUpdateWithoutPropertyInput, FavouritePropertyUncheckedUpdateWithoutPropertyInput>
  }

  export type FavouritePropertyUpdateManyWithWhereWithoutPropertyInput = {
    where: FavouritePropertyScalarWhereInput
    data: XOR<FavouritePropertyUpdateManyMutationInput, FavouritePropertyUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyCreateWithoutPhotoUrlsInput = {
    id?: string
    name: string
    description: string
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded?: boolean
    beds: number
    baths: number
    squareFeet?: number
    propertyType: string
    averageRating?: number
    numberOfReviews?: number
    locationId: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutPropertiesInput
    amenities?: AmenityCreateNestedManyWithoutPropertyInput
    highLights?: HighLightCreateNestedManyWithoutPropertyInput
    FavouriteProperty?: FavouritePropertyCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutPhotoUrlsInput = {
    id?: string
    name: string
    description: string
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded?: boolean
    beds: number
    baths: number
    squareFeet?: number
    propertyType: string
    averageRating?: number
    numberOfReviews?: number
    locationId: string
    ownerId: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    amenities?: AmenityUncheckedCreateNestedManyWithoutPropertyInput
    highLights?: HighLightUncheckedCreateNestedManyWithoutPropertyInput
    FavouriteProperty?: FavouritePropertyUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutPhotoUrlsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPhotoUrlsInput, PropertyUncheckedCreateWithoutPhotoUrlsInput>
  }

  export type PropertyUpsertWithoutPhotoUrlsInput = {
    update: XOR<PropertyUpdateWithoutPhotoUrlsInput, PropertyUncheckedUpdateWithoutPhotoUrlsInput>
    create: XOR<PropertyCreateWithoutPhotoUrlsInput, PropertyUncheckedCreateWithoutPhotoUrlsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutPhotoUrlsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutPhotoUrlsInput, PropertyUncheckedUpdateWithoutPhotoUrlsInput>
  }

  export type PropertyUpdateWithoutPhotoUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    applicationFee?: FloatFieldUpdateOperationsInput | number
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    squareFeet?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    numberOfReviews?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    amenities?: AmenityUpdateManyWithoutPropertyNestedInput
    highLights?: HighLightUpdateManyWithoutPropertyNestedInput
    FavouriteProperty?: FavouritePropertyUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutPhotoUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    applicationFee?: FloatFieldUpdateOperationsInput | number
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    squareFeet?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    numberOfReviews?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amenities?: AmenityUncheckedUpdateManyWithoutPropertyNestedInput
    highLights?: HighLightUncheckedUpdateManyWithoutPropertyNestedInput
    FavouriteProperty?: FavouritePropertyUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutAmenitiesInput = {
    id?: string
    name: string
    description: string
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded?: boolean
    beds: number
    baths: number
    squareFeet?: number
    propertyType: string
    averageRating?: number
    numberOfReviews?: number
    locationId: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutPropertiesInput
    photoUrls?: PhotoUrlCreateNestedManyWithoutPropertyInput
    highLights?: HighLightCreateNestedManyWithoutPropertyInput
    FavouriteProperty?: FavouritePropertyCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutAmenitiesInput = {
    id?: string
    name: string
    description: string
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded?: boolean
    beds: number
    baths: number
    squareFeet?: number
    propertyType: string
    averageRating?: number
    numberOfReviews?: number
    locationId: string
    ownerId: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photoUrls?: PhotoUrlUncheckedCreateNestedManyWithoutPropertyInput
    highLights?: HighLightUncheckedCreateNestedManyWithoutPropertyInput
    FavouriteProperty?: FavouritePropertyUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutAmenitiesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutAmenitiesInput, PropertyUncheckedCreateWithoutAmenitiesInput>
  }

  export type PropertyUpsertWithoutAmenitiesInput = {
    update: XOR<PropertyUpdateWithoutAmenitiesInput, PropertyUncheckedUpdateWithoutAmenitiesInput>
    create: XOR<PropertyCreateWithoutAmenitiesInput, PropertyUncheckedCreateWithoutAmenitiesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutAmenitiesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutAmenitiesInput, PropertyUncheckedUpdateWithoutAmenitiesInput>
  }

  export type PropertyUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    applicationFee?: FloatFieldUpdateOperationsInput | number
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    squareFeet?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    numberOfReviews?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    photoUrls?: PhotoUrlUpdateManyWithoutPropertyNestedInput
    highLights?: HighLightUpdateManyWithoutPropertyNestedInput
    FavouriteProperty?: FavouritePropertyUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    applicationFee?: FloatFieldUpdateOperationsInput | number
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    squareFeet?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    numberOfReviews?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrls?: PhotoUrlUncheckedUpdateManyWithoutPropertyNestedInput
    highLights?: HighLightUncheckedUpdateManyWithoutPropertyNestedInput
    FavouriteProperty?: FavouritePropertyUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutHighLightsInput = {
    id?: string
    name: string
    description: string
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded?: boolean
    beds: number
    baths: number
    squareFeet?: number
    propertyType: string
    averageRating?: number
    numberOfReviews?: number
    locationId: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutPropertiesInput
    photoUrls?: PhotoUrlCreateNestedManyWithoutPropertyInput
    amenities?: AmenityCreateNestedManyWithoutPropertyInput
    FavouriteProperty?: FavouritePropertyCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutHighLightsInput = {
    id?: string
    name: string
    description: string
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded?: boolean
    beds: number
    baths: number
    squareFeet?: number
    propertyType: string
    averageRating?: number
    numberOfReviews?: number
    locationId: string
    ownerId: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photoUrls?: PhotoUrlUncheckedCreateNestedManyWithoutPropertyInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutPropertyInput
    FavouriteProperty?: FavouritePropertyUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutHighLightsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutHighLightsInput, PropertyUncheckedCreateWithoutHighLightsInput>
  }

  export type PropertyUpsertWithoutHighLightsInput = {
    update: XOR<PropertyUpdateWithoutHighLightsInput, PropertyUncheckedUpdateWithoutHighLightsInput>
    create: XOR<PropertyCreateWithoutHighLightsInput, PropertyUncheckedCreateWithoutHighLightsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutHighLightsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutHighLightsInput, PropertyUncheckedUpdateWithoutHighLightsInput>
  }

  export type PropertyUpdateWithoutHighLightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    applicationFee?: FloatFieldUpdateOperationsInput | number
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    squareFeet?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    numberOfReviews?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    photoUrls?: PhotoUrlUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUpdateManyWithoutPropertyNestedInput
    FavouriteProperty?: FavouritePropertyUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutHighLightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    applicationFee?: FloatFieldUpdateOperationsInput | number
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    squareFeet?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    numberOfReviews?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrls?: PhotoUrlUncheckedUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutPropertyNestedInput
    FavouriteProperty?: FavouritePropertyUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutFavouritePropertyInput = {
    id?: string
    name: string
    description: string
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded?: boolean
    beds: number
    baths: number
    squareFeet?: number
    propertyType: string
    averageRating?: number
    numberOfReviews?: number
    locationId: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutPropertiesInput
    photoUrls?: PhotoUrlCreateNestedManyWithoutPropertyInput
    amenities?: AmenityCreateNestedManyWithoutPropertyInput
    highLights?: HighLightCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutFavouritePropertyInput = {
    id?: string
    name: string
    description: string
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded?: boolean
    beds: number
    baths: number
    squareFeet?: number
    propertyType: string
    averageRating?: number
    numberOfReviews?: number
    locationId: string
    ownerId: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photoUrls?: PhotoUrlUncheckedCreateNestedManyWithoutPropertyInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutPropertyInput
    highLights?: HighLightUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutFavouritePropertyInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutFavouritePropertyInput, PropertyUncheckedCreateWithoutFavouritePropertyInput>
  }

  export type UserCreateWithoutFavouritePropertyInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    password: string
    isVerified?: boolean
    role?: $Enums.UserRole
    phoneNumber?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    verifyToken?: string | null
    verifyTokenExpiry?: Date | string | null
    properties?: PropertyCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutFavouritePropertyInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    password: string
    isVerified?: boolean
    role?: $Enums.UserRole
    phoneNumber?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    verifyToken?: string | null
    verifyTokenExpiry?: Date | string | null
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutFavouritePropertyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavouritePropertyInput, UserUncheckedCreateWithoutFavouritePropertyInput>
  }

  export type PropertyUpsertWithoutFavouritePropertyInput = {
    update: XOR<PropertyUpdateWithoutFavouritePropertyInput, PropertyUncheckedUpdateWithoutFavouritePropertyInput>
    create: XOR<PropertyCreateWithoutFavouritePropertyInput, PropertyUncheckedCreateWithoutFavouritePropertyInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutFavouritePropertyInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutFavouritePropertyInput, PropertyUncheckedUpdateWithoutFavouritePropertyInput>
  }

  export type PropertyUpdateWithoutFavouritePropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    applicationFee?: FloatFieldUpdateOperationsInput | number
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    squareFeet?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    numberOfReviews?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    photoUrls?: PhotoUrlUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUpdateManyWithoutPropertyNestedInput
    highLights?: HighLightUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutFavouritePropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    applicationFee?: FloatFieldUpdateOperationsInput | number
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    squareFeet?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    numberOfReviews?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrls?: PhotoUrlUncheckedUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutPropertyNestedInput
    highLights?: HighLightUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UserUpsertWithoutFavouritePropertyInput = {
    update: XOR<UserUpdateWithoutFavouritePropertyInput, UserUncheckedUpdateWithoutFavouritePropertyInput>
    create: XOR<UserCreateWithoutFavouritePropertyInput, UserUncheckedCreateWithoutFavouritePropertyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavouritePropertyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavouritePropertyInput, UserUncheckedUpdateWithoutFavouritePropertyInput>
  }

  export type UserUpdateWithoutFavouritePropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutFavouritePropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type PropertyCreateManyOwnerInput = {
    id?: string
    name: string
    description: string
    pricePerMonth: number
    securityDeposit: number
    applicationFee: number
    isParkingIncluded?: boolean
    beds: number
    baths: number
    squareFeet?: number
    propertyType: string
    averageRating?: number
    numberOfReviews?: number
    locationId: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavouritePropertyCreateManyUserInput = {
    id?: string
    propertyId: string
  }

  export type PropertyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    applicationFee?: FloatFieldUpdateOperationsInput | number
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    squareFeet?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    numberOfReviews?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrls?: PhotoUrlUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUpdateManyWithoutPropertyNestedInput
    highLights?: HighLightUpdateManyWithoutPropertyNestedInput
    FavouriteProperty?: FavouritePropertyUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    applicationFee?: FloatFieldUpdateOperationsInput | number
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    squareFeet?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    numberOfReviews?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrls?: PhotoUrlUncheckedUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutPropertyNestedInput
    highLights?: HighLightUncheckedUpdateManyWithoutPropertyNestedInput
    FavouriteProperty?: FavouritePropertyUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: FloatFieldUpdateOperationsInput | number
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    applicationFee?: FloatFieldUpdateOperationsInput | number
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    squareFeet?: FloatFieldUpdateOperationsInput | number
    propertyType?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    numberOfReviews?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavouritePropertyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    property?: PropertyUpdateOneRequiredWithoutFavouritePropertyNestedInput
  }

  export type FavouritePropertyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type FavouritePropertyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUrlCreateManyPropertyInput = {
    id?: string
    url: string
  }

  export type AmenityCreateManyPropertyInput = {
    id?: string
    name: string
  }

  export type HighLightCreateManyPropertyInput = {
    id?: string
    name: string
  }

  export type FavouritePropertyCreateManyPropertyInput = {
    id?: string
    userId: string
  }

  export type PhotoUrlUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUrlUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUrlUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HighLightUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HighLightUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HighLightUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FavouritePropertyUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFavouritePropertyNestedInput
  }

  export type FavouritePropertyUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FavouritePropertyUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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