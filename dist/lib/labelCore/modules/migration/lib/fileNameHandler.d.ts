import { idType } from '../../../modules/id';
export { fileNameHandler };
declare const fileNameHandler: {
    buildFileName: typeof buildFileName;
    parseFileName: typeof parseFileName;
    sortFileNames: typeof sortFileNames;
};
declare function buildFileName({ _id, order, extension }: {
    _id: idType;
    order: number;
    extension: 'ts' | 'js';
}): string;
declare function sortFileNames(fileNames: string[], direction: 'asc' | 'desc'): string[];
declare function parseFileName(fileName: string): {
    _id: import("bson").ObjectId;
    order: number;
};
