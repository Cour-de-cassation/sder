export type { collectionType, genericCollectionType };
declare type genericCollectionType = {
    indexes: Array<any>;
    name: string;
    validationSchema: {
        $jsonSchema: any;
    };
};
declare type collectionType<T> = {
    indexes: Array<indexType<T>>;
    name: string;
    validationSchema: {
        $jsonSchema: any;
    };
};
declare type indexType<T> = Partial<{
    [field in keyof T]: 1 | -1;
}>;
