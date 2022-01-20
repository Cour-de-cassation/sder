import { idModule } from '../../id';
import { decisionType } from '../decisionType';

export { buildDecision };

function buildDecision(decisionFields: Omit<decisionType, '_id' | 'labelTreatments'>): decisionType {
  return {
    ...decisionFields,
    _id: idModule.lib.buildId(),
    labelTreatments: [],
  };
}
