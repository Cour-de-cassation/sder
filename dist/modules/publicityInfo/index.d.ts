import { publicityInfoType } from './types';
export type { publicityInfoType };
export { publicityInfoModule };
declare const publicityInfoModule: {
    lib: {
        converter: {
            convertParameters: (params: {
                _id: string;
                sourceDb: string;
            }) => Pick<publicityInfoType, "_id" | "sourceDb"> | undefined;
        };
    };
};
