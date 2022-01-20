import { idType } from '../id';
import { buildType } from '../modelType';
export { assignationModel };
export type { assignationType };
declare const assignationModel: {
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
        readonly treatmentId: {
            readonly kind: "custom";
            readonly content: "id";
        };
        readonly userId: {
            readonly kind: "custom";
            readonly content: "id";
        };
    };
};
declare type assignationType = buildType<typeof assignationModel, {
    id: idType;
}>;
