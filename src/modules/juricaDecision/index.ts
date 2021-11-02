import { juricaDecisionType } from './juricaDecisionType';
import { generateJuricaDecision } from './lib';

export type { juricaDecisionType };

export { juricaDecisionModule };

const juricaDecisionModule = {
  lib: { generateJuricaDecision },
};
