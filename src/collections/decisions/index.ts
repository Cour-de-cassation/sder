import { decisionType } from '../../modules';
import { collectionType } from '../collectionType';
import { decisionsIndexes } from './decisionsIndexes';
import { decisionsValidationSchema } from './decisionsValidationSchema';

export { decisionsCollection };

const decisionsCollection: collectionType<decisionType> = {
  indexes: decisionsIndexes,
  name: 'decisions',
  validationSchema: decisionsValidationSchema,
};
