import { omitIdType } from '../../id';
import { assignationType } from '../assignationType';
export { buildAssignation };
declare function buildAssignation(assignationFields: omitIdType<assignationType>): assignationType;
