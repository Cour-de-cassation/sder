import { idType } from '../id';
import { buildType } from '../modelType';
export { problemReportModel };
export type { problemReportType };
declare const problemReportModel: {
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
declare type problemReportType = buildType<typeof problemReportModel, {
    id: idType;
}>;
