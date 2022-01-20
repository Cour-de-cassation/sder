import { problemReportType } from './problemReportType';
import { buildProblemReport } from './lib';
export { problemReportModule };
export type { problemReportType };
declare const problemReportModule: {
    model: {
        readonly kind: "object";
        readonly content: {
            readonly _id: {
                readonly kind: "custom";
                readonly content: "id";
            };
            readonly documentId: {
                readonly kind: "custom";
                readonly content: "id";
            };
            readonly userId: {
                readonly kind: "custom";
                readonly content: "id";
            };
            readonly date: {
                readonly kind: "primitive";
                readonly content: "number";
            };
            readonly text: {
                readonly kind: "primitive";
                readonly content: "string";
            };
            readonly hasBeenRead: {
                readonly kind: "primitive";
                readonly content: "boolean";
            };
            readonly type: {
                readonly kind: "constant";
                readonly content: readonly ["bug", "annotationProblem", "suggestion"];
            };
        };
    };
    generator: import("../../types/generatorType").generatorType<{
        readonly _id: import("bson").ObjectId;
        readonly documentId: import("bson").ObjectId;
        readonly userId: import("bson").ObjectId;
        readonly date: number;
        readonly text: string;
        readonly hasBeenRead: boolean;
        readonly type: "bug" | "annotationProblem" | "suggestion";
    }>;
    lib: {
        buildProblemReport: typeof buildProblemReport;
    };
};
