import { idType } from '../id';
import { buildType } from '../modelType';
export { fetchedMonitoringEntryModel, monitoringEntryModel };
export type { fetchedMonitoringEntryType, monitoringEntryType };
declare const fetchedMonitoringEntryModel: {
    readonly kind: "object";
    readonly content: {
        readonly _id: {
            readonly kind: "custom";
            readonly content: "id";
        };
        readonly action: {
            readonly kind: "primitive";
            readonly content: "string";
        };
        readonly creationDate: {
            readonly kind: "primitive";
            readonly content: "number";
        };
        readonly documentId: {
            readonly kind: "custom";
            readonly content: "id";
        };
        readonly origin: {
            readonly kind: "constant";
            readonly content: readonly ["document", "panel", "footer", "shortcut"];
        };
    };
};
declare const monitoringEntryModel: {
    readonly kind: "object";
    readonly content: {
        readonly userId: {
            readonly kind: "custom";
            readonly content: "id";
        };
        readonly _id: {
            readonly kind: "custom";
            readonly content: "id";
        };
        readonly action: {
            readonly kind: "primitive";
            readonly content: "string";
        };
        readonly creationDate: {
            readonly kind: "primitive";
            readonly content: "number";
        };
        readonly documentId: {
            readonly kind: "custom";
            readonly content: "id";
        };
        readonly origin: {
            readonly kind: "constant";
            readonly content: readonly ["document", "panel", "footer", "shortcut"];
        };
    };
};
declare type fetchedMonitoringEntryType = buildType<typeof fetchedMonitoringEntryModel, {
    id: idType;
}>;
declare type monitoringEntryType = buildType<typeof monitoringEntryModel, {
    id: idType;
}>;
