import { cleanHTML } from './cleanHTML';
import { getJuricaDuplicate } from './getJuricaDuplicate';
import { normalize } from './normalize';
import { removeMultipleSpaces } from './removeMultipleSpaces';
import { replaceErroneousChars } from './replaceErroneousChars';
export { jurinetUtils };
declare const jurinetUtils: {
    cleanHTML: typeof cleanHTML;
    getJuricaDuplicate: typeof getJuricaDuplicate;
    normalize: typeof normalize;
    removeMultipleSpaces: typeof removeMultipleSpaces;
    replaceErroneousChars: typeof replaceErroneousChars;
};
