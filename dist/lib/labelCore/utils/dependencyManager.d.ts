export { buildDependencyManager };
declare type injectionValuesType<T> = {
    forLocal?: T;
    forPreProd?: T;
    forProd: T;
    forTest?: T;
};
declare function buildDependencyManager(environmentValue: string | undefined): {
    dependencyManager: {
        inject<T>(injectionValues: injectionValuesType<T>): T;
    };
};
