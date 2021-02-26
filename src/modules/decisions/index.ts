import { collectionType } from '../collectionType';
import { decisionCollectionName } from './decisionCollectionName';
import { decisionType } from './decisionType';
import { decisionsIndexes } from './indexes';
import { buildDecision, generateDecision } from './lib';
import { buildDecisionRepository } from './repository';
import { decisionService } from './service';
import { decisionsValidationSchema } from './validation';

export { decisionModule };

export type { decisionType };

const decisionCollection: collectionType<decisionType> = {
  indexes: decisionsIndexes,
  name: decisionCollectionName,
  validationSchema: decisionsValidationSchema,
};

const decisionModule = {
  buildRepository: buildDecisionRepository,
  collection: decisionCollection,
  lib: { buildDecision, generateDecision },
  service: decisionService,
};
