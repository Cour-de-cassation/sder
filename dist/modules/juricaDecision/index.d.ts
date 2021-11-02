import { juricaDecisionType } from './juricaDecisionType';
import { generateJuricaDecision } from './lib';
export type { juricaDecisionType };
export { juricaDecisionModule };
declare const juricaDecisionModule: {
    lib: {
        generateJuricaDecision: typeof generateJuricaDecision;
    };
};
