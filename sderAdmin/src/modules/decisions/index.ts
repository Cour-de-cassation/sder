import { generateDecision } from './lib';
import { buildDecisionRepository } from './repository';
import { decisionService } from './service';

export { decisionModule };

const decisionModule = {
  buildRepository: buildDecisionRepository,
  lib: { generateDecision },
  service: decisionService,
};
