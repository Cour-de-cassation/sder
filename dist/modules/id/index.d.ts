import { idType, omitIdType } from './idType';
import { buildId, convertToString, equalId } from './lib';
export { idModule };
export type { idType, omitIdType };
declare const idModule: {
    lib: {
        buildId: typeof buildId;
        convertToString: typeof convertToString;
        equalId: typeof equalId;
    };
};
