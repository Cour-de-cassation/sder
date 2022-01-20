import { migrationType } from './migrationType';
import { buildMigration } from './lib';
export { migrationModule };
export type { migrationType };
declare const migrationModule: {
    model: {
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
    generator: import("../../types/generatorType").generatorType<{
        readonly _id: import("bson").ObjectId;
        readonly creationDate: number;
        readonly order: number;
    }>;
    lib: {
        buildMigration: typeof buildMigration;
        fileNameHandler: {
            buildFileName: ({ _id, order, extension }: {
                _id: import("bson").ObjectId;
                order: number;
                extension: "ts" | "js";
            }) => string;
            parseFileName: (fileName: string) => {
                _id: import("bson").ObjectId;
                order: number;
            };
            sortFileNames: (fileNames: string[], direction: "desc" | "asc") => string[];
        };
    };
};
