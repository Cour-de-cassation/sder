const supertest = require('supertest');

import { decisionModule, decisionType } from '../modules';
import { dateBuilder } from '../utils';
import { server } from './server';

const request = supertest(server);

describe('/label/update-loaded-label-status', () => {
  it('should update the loaded label status of the given decision', async () => {
    const decisionRepository = await decisionModule.buildRepository();
    const decisions = ([
      { labelStatus: 'toBeTreated' },
      { labelStatus: 'toBeTreated' },
      { labelStatus: 'toBeTreated' },
    ] as const).map(decisionModule.lib.generateDecision);
    await Promise.all(decisions.map(decisionRepository.insert));

    const response = await request
      .patch(`/label/update-loaded-label-status`)
      .send({ decisionIds: [decisions[0].sourceId, decisions[2].sourceId] });

    const updatedDecision0 = await decisionRepository.findByDecisionId(decisions[0].sourceId);
    const updatedDecision2 = await decisionRepository.findByDecisionId(decisions[2].sourceId);
    expect(response.status).toEqual(200);
    expect(updatedDecision0.labelStatus).toEqual('loaded');
    expect(updatedDecision2.labelStatus).toEqual('loaded');
  });

  it('should not update the loaded label status of the other decision', async () => {
    const decisionRepository = await decisionModule.buildRepository();
    const decisions = ([
      { labelStatus: 'toBeTreated' },
      { labelStatus: 'toBeTreated' },
      { labelStatus: 'toBeTreated' },
    ] as const).map(decisionModule.lib.generateDecision);
    await Promise.all(decisions.map(decisionRepository.insert));

    const response = await request
      .patch(`/label/update-loaded-label-status`)
      .send({ decisionIds: [decisions[0].sourceId, decisions[2].sourceId] });

    const updatedDecision1 = await decisionRepository.findByDecisionId(decisions[1].sourceId);
    expect(response.status).toEqual(200);
    expect(updatedDecision1.labelStatus).toEqual('toBeTreated');
  });

  it('the /label/decisions-to-pseudonymise route should not return anything after an update', async () => {
    const decisionRepository = await decisionModule.buildRepository();
    const decisions = ([
      { dateCreation: dateBuilder.daysAgo(1), labelStatus: 'toBeTreated' },
      { dateCreation: dateBuilder.daysAgo(3), labelStatus: 'toBeTreated' },
      { dateCreation: dateBuilder.daysAgo(5), labelStatus: 'toBeTreated' },
    ] as const).map(decisionModule.lib.generateDecision);
    await Promise.all(decisions.map(decisionRepository.insert));
    const decisionIdsToPseudonymise = await fetchDecisionIdsToPseudonymise();

    const response = await request
      .patch(`/label/update-loaded-label-status`)
      .send({ decisionIds: decisionIdsToPseudonymise });

    const decisionIdsToPseudonymiseAfterUpdate = await fetchDecisionIdsToPseudonymise();
    expect(response.status).toEqual(200);
    expect(decisionIdsToPseudonymiseAfterUpdate).toEqual([]);

    async function fetchDecisionIdsToPseudonymise(): Promise<string[]> {
      return (
        await request.get(`/label/decisions-to-pseudonymise?date="${dateBuilder.daysAgo(4).toISOString()}"`)
      ).body.map((decision: decisionType) => decision.sourceId);
    }
  });
});
