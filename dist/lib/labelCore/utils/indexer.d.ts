export { indexer };
declare const indexer: {
    assertEveryIdIsDefined: typeof assertEveryIdIsDefined;
    indexBy: typeof indexBy;
    indexManyBy: typeof indexManyBy;
    mapIndexBy: typeof mapIndexBy;
};
declare function indexBy<T>(datas: Array<T>, indexFun: (data: T) => string): {
    [index: string]: T;
};
declare function mapIndexBy<T, U>(datas: Array<T>, indexFun: (data: T) => string, mapper: (data: T) => U): {
    [index: string]: U;
};
declare function indexManyBy<T>(datas: Array<T>, indexFun: (data: T) => string): {
    [index: string]: Array<T>;
};
declare function assertEveryIdIsDefined<T>(ids: string[], itemsById: Record<string, T>, buildErrorDescription: (_id: string) => string): void;
