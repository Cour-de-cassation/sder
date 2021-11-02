import { publicityInfoType } from '../types';
export { converter };
declare const converter: {
    convertParameters: typeof convertParameters;
};
declare function convertParameters(params: {
    _id: string;
    sourceDb: string;
}): Pick<publicityInfoType, '_id' | 'sourceDb'> | undefined;
