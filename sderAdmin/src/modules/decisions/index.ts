import { decisionType } from './decisionType';
import { buildDecision, generateDecision } from './lib';
import { buildDecisionRepository } from './repository';
import { decisionService } from './service';

export { decisionModule };

export type { decisionType };

const decisionModule = {
  buildRepository: buildDecisionRepository,
  lib: { buildDecision, generateDecision },
  service: decisionService,
};
