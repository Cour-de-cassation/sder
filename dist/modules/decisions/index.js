import { decisionCollectionName } from './decisionCollectionName';
import { decisionsIndexes } from './indexes';
import { buildDecision, generateDecision } from './lib';
import { buildDecisionRepository } from './repository';
import { decisionService } from './service';
import { decisionsValidationSchema } from './validation';
export { decisionModule };
var decisionCollection = {
    indexes: decisionsIndexes,
    name: decisionCollectionName,
    validationSchema: decisionsValidationSchema,
};
var decisionModule = {
    buildRepository: buildDecisionRepository,
    collection: decisionCollection,
    lib: { buildDecision: buildDecision, generateDecision: generateDecision },
    service: decisionService,
};
