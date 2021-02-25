import { omit } from 'lodash';
import { generateDecision } from './generateDecision';
import { buildDecision } from './buildDecision';

describe('buildDecision', () => {
  it('should build a decision with a _rev at 0', async () => {
    const decisionField = omit(generateDecision(), ['_id', '_rev', 'labelStatus', 'labelTreatments']);

    const decision = buildDecision(decisionField);

    expect(decision._rev).toEqual(0);
  });

  it('should build a decision with an empty labelTreatments', async () => {
    const decisionField = omit(generateDecision(), ['_id', '_rev', 'labelStatus', 'labelTreatments']);

    const decision = buildDecision(decisionField);

    expect(decision.labelTreatments).toEqual([]);
  });

  it(`should build a decision with a 'toBeTreated' label status`, async () => {
    const decisionField = omit(generateDecision(), ['_id', '_rev', 'labelStatus', 'labelTreatments']);

    const decision = buildDecision(decisionField);

    expect(decision.labelStatus).toEqual('toBeTreated');
  });
});
