import { buildObjectId } from '../../../utils';
import { decisionType } from '../decisionType';

export { buildDecision };

function buildDecision(
  decisionFields: Omit<decisionType, '_id' | '_rev' | 'labelStatus' | 'labelTreatments'>,
): decisionType {
  return {
    ...decisionFields,
    _id: buildObjectId(),
    _rev: 0,
    labelStatus: 'toBeTreated',
    labelTreatments: [],
  };
}
