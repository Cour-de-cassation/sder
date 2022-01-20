export type { generatorType };
declare type generatorType<T> = {
    generate: (defaults?: Partial<T>) => T;
};
