import { buildObjectId } from '../../../utils';
import { decisionType } from '../decisionType';

export { buildDecision };

function buildDecision(
  treatmentFields: Omit<decisionType, '_id' | '_rev' | 'isLoadedInLabel' | 'labelTreatments'>,
): decisionType {
  return {
    ...treatmentFields,
    _id: buildObjectId(),
    _rev: 0,
    isLoadedInLabel: false,
    labelTreatments: [],
  };
}
