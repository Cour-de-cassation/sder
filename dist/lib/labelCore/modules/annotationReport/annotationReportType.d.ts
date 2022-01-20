import { idType } from '../id';
import { buildType } from '../modelType';
export { annotationReportModel };
export type { annotationReportType };
declare const annotationReportModel: {
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
declare type annotationReportType = buildType<typeof annotationReportModel, {
    id: idType;
}>;
