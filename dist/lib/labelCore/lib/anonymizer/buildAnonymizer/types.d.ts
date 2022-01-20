export type { formatSpecifierType, specifierGeneratorType, specifierType };
declare type specifierType = '%c' | '%d';
declare type formatSpecifierType = {
    index: number;
    specifier: specifierType;
};
declare type specifierGeneratorType = {
    '%c': {
        generate: (entityId: string) => string;
    };
    '%d': {
        generate: () => string;
    };
};
