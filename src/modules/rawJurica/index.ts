import { genericCollectionType } from '../collectionType';
import { rawJuricaCollectionName } from './rawJuricaCollectionName';
import { rawJuricaIndexes } from './indexes';
import { buildRawJuricaRepository } from './repository';
import { decisionService } from './service';
import { rawJuricaCollectionValidationSchema } from './validation';

export { rawJuricaModule };

const rawJuricaCollection: genericCollectionType = {
  indexes: rawJuricaIndexes,
  name: rawJuricaCollectionName,
  validationSchema: rawJuricaCollectionValidationSchema,
};

const rawJuricaModule = {
  buildRepository: buildRawJuricaRepository,
  collection: rawJuricaCollection,
  service: decisionService,
};
