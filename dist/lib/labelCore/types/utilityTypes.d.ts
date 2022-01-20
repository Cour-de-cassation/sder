export type { filterKeysType, filterType, writeableType };
declare type filterKeysType<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];
declare type filterType<T, U> = {
    [key in filterKeysType<T, U>]: T[key];
};
declare type writeableType<T> = {
    -readonly [P in keyof T]: T[P];
};
