import { annotationReportType } from './annotationReportType';
import { buildAnnotationReport } from './lib';
export { annotationReportModule };
export type { annotationReportType };
declare const annotationReportModule: {
    model: {
        readonly kind: "object";
        readonly content: {
            readonly checkList: {
                readonly kind: "array";
                readonly content: {
                    readonly kind: "primitive";
                    readonly content: "string";
                };
            };
            readonly documentId: {
                readonly kind: "custom";
                readonly content: "id";
            };
            readonly _id: {
                readonly kind: "custom";
                readonly content: "id";
            };
        };
    };
    generator: import("../../types/generatorType").generatorType<{
        readonly checkList: string[];
        readonly documentId: import("bson").ObjectId;
        readonly _id: import("bson").ObjectId;
    }>;
    lib: {
        buildAnnotationReport: typeof buildAnnotationReport;
    };
};
