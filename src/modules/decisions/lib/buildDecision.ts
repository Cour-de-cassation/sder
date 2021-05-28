import { buildObjectId } from '../../../utils';
import { decisionType } from '../decisionType';

export { buildDecision };

function buildDecision(decisionFields: Omit<decisionType, '_id' | 'labelTreatments'>): decisionType {
  return {
    ...decisionFields,
    _id: buildObjectId(),
    labelTreatments: [],
  };
}
