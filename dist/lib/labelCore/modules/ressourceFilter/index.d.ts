import { filterTreatedDocuments } from './lib';
import { ressourceFilterType } from './ressourceFilterType';
export { ressourceFilterModule };
export type { ressourceFilterType };
declare const ressourceFilterModule: {
    model: {
        readonly kind: "object";
        readonly content: {
            readonly mustHaveSurAnnotations: {
                readonly kind: "primitive";
                readonly content: "boolean";
            };
            readonly mustHaveSubAnnotations: {
                readonly kind: "primitive";
                readonly content: "boolean";
            };
            readonly publicationCategory: {
                readonly kind: "or";
                readonly content: readonly [{
                    readonly kind: "primitive";
                    readonly content: "string";
                }, {
                    readonly kind: "primitive";
                    readonly content: "undefined";
                }];
            };
            readonly startDate: {
                readonly kind: "or";
                readonly content: readonly [{
                    readonly kind: "primitive";
                    readonly content: "number";
                }, {
                    readonly kind: "primitive";
                    readonly content: "undefined";
                }];
            };
            readonly endDate: {
                readonly kind: "or";
                readonly content: readonly [{
                    readonly kind: "primitive";
                    readonly content: "number";
                }, {
                    readonly kind: "primitive";
                    readonly content: "undefined";
                }];
            };
            readonly source: {
                readonly kind: "or";
                readonly content: readonly [{
                    readonly kind: "primitive";
                    readonly content: "string";
                }, {
                    readonly kind: "primitive";
                    readonly content: "undefined";
                }];
            };
            readonly jurisdiction: {
                readonly kind: "or";
                readonly content: readonly [{
                    readonly kind: "primitive";
                    readonly content: "string";
                }, {
                    readonly kind: "primitive";
                    readonly content: "undefined";
                }];
            };
            readonly userId: {
                readonly kind: "or";
                readonly content: readonly [{
                    readonly kind: "custom";
                    readonly content: "id";
                }, {
                    readonly kind: "primitive";
                    readonly content: "undefined";
                }];
            };
        };
    };
    generator: import("../../types/generatorType").generatorType<{
        readonly mustHaveSurAnnotations: boolean;
        readonly mustHaveSubAnnotations: boolean;
        readonly publicationCategory: string | undefined;
        readonly startDate: number | undefined;
        readonly endDate: number | undefined;
        readonly source: string | undefined;
        readonly jurisdiction: string | undefined;
        readonly userId: import("bson").ObjectId | undefined;
    }>;
    lib: {
        filterTreatedDocuments: typeof filterTreatedDocuments;
    };
};
