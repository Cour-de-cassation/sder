import { buildType } from '../modelType';
export { annotationsDiffModel };
export type { annotationsDiffType };
declare const annotationsDiffModel: {
    readonly kind: "object";
    readonly content: {
        readonly before: {
            readonly kind: "array";
            readonly content: {
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
        };
        readonly after: {
            readonly kind: "array";
            readonly content: {
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
        };
    };
};
declare type annotationsDiffType = buildType<typeof annotationsDiffModel>;
