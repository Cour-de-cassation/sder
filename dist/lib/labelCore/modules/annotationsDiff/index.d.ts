import { annotationsDiffType } from './annotationsDiffType';
import { applyToAnnotations, assertAnnotationsDiffAreConsistent, buildAnnotationsDiff, computeAnnotationsDiff, computeDetailsFromAnnotationsDiff, inverse, squash } from './lib';
export { annotationsDiffModule };
export type { annotationsDiffType };
declare const annotationsDiffModule: {
    model: {
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
    generator: import("../../types/generatorType").generatorType<{
        readonly before: {
            readonly category: string;
            readonly entityId: string;
            readonly start: number;
            readonly text: string;
            readonly certaintyScore: number | undefined;
        }[];
        readonly after: {
            readonly category: string;
            readonly entityId: string;
            readonly start: number;
            readonly text: string;
            readonly certaintyScore: number | undefined;
        }[];
    }>;
    lib: {
        applyToAnnotations: typeof applyToAnnotations;
        assertAnnotationsDiffAreConsistent: typeof assertAnnotationsDiffAreConsistent;
        buildAnnotationsDiff: typeof buildAnnotationsDiff;
        computeAnnotationsDiff: typeof computeAnnotationsDiff;
        computeDetailsFromAnnotationsDiff: typeof computeDetailsFromAnnotationsDiff;
        inverse: typeof inverse;
        squash: typeof squash;
    };
};
