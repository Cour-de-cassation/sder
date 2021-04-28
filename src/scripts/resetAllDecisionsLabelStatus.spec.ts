import { decisionModule } from '../modules';
import { resetAllDecisionsLabelStatus } from './resetAllDecisionsLabelStatus';

describe('resetAllDecisionsLabelStatus', () => {
  it('should reset all the decisions label status to toBeTreated', async () => {
    const decisionRepository = await decisionModule.buildRepository();
    const decisions = ([
      { labelStatus: 'done' },
      { labelStatus: 'toBeTreated' },
      { labelStatus: 'exported' },
      { labelStatus: 'loaded' },
    ] as const).map(decisionModule.lib.generateDecision);
    await Promise.all(decisions.map(decisionRepository.insert));

    await resetAllDecisionsLabelStatus();

    const decisionsAfterUpdate = await decisionRepository.findAll();
    decisionsAfterUpdate.forEach((decision) => expect(decision.labelStatus).toEqual('toBeTreated'));
  });
});
