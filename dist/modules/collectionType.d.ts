export type { collectionType, genericCollectionType };
type genericCollectionType = {
    indexes: Array<any>;
    name: string;
    validationSchema: {
        $jsonSchema: any;
    };
};
type collectionType<T> = {
    indexes: Array<indexType<T>>;
    name: string;
    validationSchema: {
        $jsonSchema: any;
    };
};
type indexType<T> = Partial<{
    [field in keyof T]: 1 | -1;
}>;
