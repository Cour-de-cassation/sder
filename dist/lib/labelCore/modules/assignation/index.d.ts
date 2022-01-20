import { assignationType } from './assignationType';
import { buildAssignation } from './lib';
export { assignationModule };
export type { assignationType };
declare const assignationModule: {
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
    generator: import("../../types/generatorType").generatorType<{
        readonly _id: import("bson").ObjectId;
        readonly documentId: import("bson").ObjectId;
        readonly treatmentId: import("bson").ObjectId;
        readonly userId: import("bson").ObjectId;
    }>;
    lib: {
        buildAssignation: typeof buildAssignation;
    };
};
