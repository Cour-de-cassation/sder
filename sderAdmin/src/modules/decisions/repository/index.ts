import { dependencyManager } from '../../../utils';
import { buildDecisionFakeRepository } from './buildDecisionFakeRepository';
import { buildDecisionRepository } from './buildDecisionRepository';
import { decisionRepositoryType } from './decisionRepositoryType';

export { buildRepository as buildDecisionRepository };

export type { decisionRepositoryType };

const buildRepository = dependencyManager.inject({
  defaultValue: buildDecisionRepository,
  testValue: buildDecisionFakeRepository,
});
