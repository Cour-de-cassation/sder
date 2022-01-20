import { omitIdType } from '../../id';
import { documentType } from '../documentType';
export { buildDocument };
declare function buildDocument(documentFields: Omit<omitIdType<documentType>, 'status' | 'updateDate' | 'reviewStatus'>): documentType;
