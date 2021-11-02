import { jurinetDecisionType } from './jurinetDecisionType';
import { generateJurinetDecision } from './lib';

export type { jurinetDecisionType };

export { jurinetDecisionModule };

const jurinetDecisionModule = {
  lib: { generateJurinetDecision },
};
