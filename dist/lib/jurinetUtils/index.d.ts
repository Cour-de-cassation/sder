import { normalize } from './normalize';
import { cleanXml } from './cleanXml';
import { xmlToJson } from './xmlToJson';
export { jurinetUtils };
declare const jurinetUtils: {
    normalize: typeof normalize;
    cleanXml: typeof cleanXml;
    xmlToJson: typeof xmlToJson;
};
