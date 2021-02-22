import { omit } from 'lodash';
import { generateDecision } from './generateDecision';
import { buildDecision } from './buildDecision';

describe('buildDecision', () => {
  it('should a decision with a _rev at 0', async () => {
    const decisionField = omit(generateDecision(), ['_id', '_rev', 'isLoadedInLabel', 'labelTreatments']);

    const decision = buildDecision(decisionField);

    expect(decision._rev).toEqual(0);
  });

  it('should a decision with an empty labelTreatments', async () => {
    const decisionField = omit(generateDecision(), ['_id', '_rev', 'isLoadedInLabel', 'labelTreatments']);

    const decision = buildDecision(decisionField);

    expect(decision.labelTreatments).toEqual([]);
  });

  it('should a decision with a false label loaded status', async () => {
    const decisionField = omit(generateDecision(), ['_id', '_rev', 'isLoadedInLabel', 'labelTreatments']);

    const decision = buildDecision(decisionField);

    expect(decision.isLoadedInLabel).toEqual(false);
  });
});
