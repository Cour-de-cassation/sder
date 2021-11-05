import { dependencyManager } from '../../../utils';
import { buildDecisionFakeRepository } from './buildDecisionFakeRepository';
import { buildDecisionRepository } from './buildDecisionRepository';
export { buildRepository as buildDecisionRepository };
var buildRepository = dependencyManager.inject({
    defaultValue: buildDecisionRepository,
    testValue: buildDecisionFakeRepository,
});
