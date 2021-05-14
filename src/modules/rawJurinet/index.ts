import { genericCollectionType } from '../collectionType';
import { rawJurinetCollectionName } from './rawJurinetCollectionName';
import { rawJurinetIndexes } from './indexes';
import { buildRawJurinetRepository } from './repository';
import { decisionService } from './service';
import { rawJurinetCollectionValidationSchema } from './validation';

export { rawJurinetModule };

const rawJurinetCollection: genericCollectionType = {
  indexes: rawJurinetIndexes,
  name: rawJurinetCollectionName,
  validationSchema: rawJurinetCollectionValidationSchema,
};

const rawJurinetModule = {
  buildRepository: buildRawJurinetRepository,
  collection: rawJurinetCollection,
  service: decisionService,
};
