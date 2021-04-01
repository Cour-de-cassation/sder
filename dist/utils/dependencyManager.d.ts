export { dependencyManager };
declare const dependencyManager: {
    inject<T>({ defaultValue, testValue }: {
        defaultValue: T;
        testValue?: T | undefined;
    }): T;
};
