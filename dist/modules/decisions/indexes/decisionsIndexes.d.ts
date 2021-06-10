export { decisionsIndexes };
declare const decisionsIndexes: ({
    readonly labelStatus: 1;
    readonly sourceId?: undefined;
    readonly sourceName?: undefined;
    readonly dateCreation?: undefined;
} | {
    readonly sourceId: 1;
    readonly labelStatus?: undefined;
    readonly sourceName?: undefined;
    readonly dateCreation?: undefined;
} | {
    readonly sourceId: 1;
    readonly sourceName: 1;
    readonly labelStatus?: undefined;
    readonly dateCreation?: undefined;
} | {
    readonly dateCreation: 1;
    readonly sourceName: 1;
    readonly labelStatus?: undefined;
    readonly sourceId?: undefined;
})[];
