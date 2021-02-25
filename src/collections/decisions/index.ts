import { collectionType } from '../collectionType';
import { decisionsValidationSchema } from './decisionsValidationSchema';

export { decisionsCollection };

const decisionsCollection: collectionType = {
  name: 'decisions',
  validationSchema: decisionsValidationSchema,
};
