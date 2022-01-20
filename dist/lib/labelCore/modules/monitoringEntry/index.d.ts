import { fetchedMonitoringEntryType, monitoringEntryType } from './monitoringEntryType';
export { monitoringEntryModule };
export type { fetchedMonitoringEntryType, monitoringEntryType };
declare const monitoringEntryModule: {
    fetchedModel: {
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
    model: {
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
    generator: import("../../types/generatorType").generatorType<{
        readonly userId: import("bson").ObjectId;
        readonly _id: import("bson").ObjectId;
        readonly action: string;
        readonly creationDate: number;
        readonly documentId: import("bson").ObjectId;
        readonly origin: "footer" | "document" | "panel" | "shortcut";
    }>;
    lib: {
        monitoringEntryBuilder: {
            buildFetchedMonitoringEntry: ({ action, documentId, origin, }: Pick<{
                readonly _id: import("bson").ObjectId;
                readonly action: string;
                readonly creationDate: number;
                readonly documentId: import("bson").ObjectId;
                readonly origin: "footer" | "document" | "panel" | "shortcut";
            }, "origin" | "documentId" | "action">) => {
                readonly _id: import("bson").ObjectId;
                readonly action: string;
                readonly creationDate: number;
                readonly documentId: import("bson").ObjectId;
                readonly origin: "footer" | "document" | "panel" | "shortcut";
            };
        };
    };
};
