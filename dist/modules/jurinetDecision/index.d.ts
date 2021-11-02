import { jurinetDecisionType } from './jurinetDecisionType';
import { generateJurinetDecision } from './lib';
export type { jurinetDecisionType };
export { jurinetDecisionModule };
declare const jurinetDecisionModule: {
    lib: {
        generateJurinetDecision: typeof generateJurinetDecision;
    };
};
