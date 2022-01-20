import { idType } from '../id';
import { buildType } from '../modelType';
export { migrationModel };
export type { migrationType };
declare const migrationModel: {
    readonly kind: "object";
    readonly content: {
        readonly _id: {
            readonly kind: "custom";
            readonly content: "id";
        };
        readonly creationDate: {
            readonly kind: "primitive";
            readonly content: "number";
        };
        readonly order: {
            readonly kind: "primitive";
            readonly content: "number";
        };
    };
};
declare type migrationType = buildType<typeof migrationModel, {
    id: idType;
}>;
