import { idType } from '../id';
import { buildType } from '../modelType';
export { ressourceFilterModel };
export type { ressourceFilterType };
declare const ressourceFilterModel: {
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
declare type ressourceFilterType = buildType<typeof ressourceFilterModel, {
    id: idType;
}>;
