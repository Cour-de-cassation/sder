import { buildType } from '../modelType';
export { annotationModel };
export type { annotationType };
declare const annotationModel: {
    readonly kind: "object";
    readonly content: {
        readonly category: {
            readonly kind: "primitive";
            readonly content: "string";
        };
        readonly entityId: {
            readonly kind: "primitive";
            readonly content: "string";
        };
        readonly start: {
            readonly kind: "primitive";
            readonly content: "number";
        };
        readonly text: {
            readonly kind: "primitive";
            readonly content: "string";
        };
        readonly certaintyScore: {
            readonly kind: "or";
            readonly content: readonly [{
                readonly kind: "primitive";
                readonly content: "number";
            }, {
                readonly kind: "primitive";
                readonly content: "undefined";
            }];
        };
    };
};
declare type annotationType = buildType<typeof annotationModel>;
