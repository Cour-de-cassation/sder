import { cleanHTML } from './cleanHTML';
import { normalize } from './normalize';
import { removeMultipleSpaces } from './removeMultipleSpaces';
import { replaceErroneousChars } from './replaceErroneousChars';
export { juricaUtils };
declare const juricaUtils: {
    cleanHTML: typeof cleanHTML;
    normalize: typeof normalize;
    removeMultipleSpaces: typeof removeMultipleSpaces;
    replaceErroneousChars: typeof replaceErroneousChars;
};
