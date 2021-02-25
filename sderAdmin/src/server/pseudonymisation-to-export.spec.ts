const supertest = require('supertest');

import { decisionModule } from '../modules';
import { server } from './server';

const request = supertest(server);

describe('/pseudonymisation-to-export', () => {
  it('should return all the pseudonymisation text and id of the decisions ready to be exported', async () => {
    const decisionRepository = await decisionModule.buildRepository();
    const decisions = ([
      { labelStatus: 'done' },
      { labelStatus: 'loaded' },
      { labelStatus: 'done' },
      { labelStatus: 'toBeTreated' },
    ] as const).map(decisionModule.lib.generateDecision);
    await Promise.all(decisions.map(decisionRepository.insert));

    const response = await request.get(`/pseudonymisation-to-export`);

    expect(response.status).toEqual(200);
    expect(JSON.stringify(response.body.sort(), null, 2)).toEqual(
      JSON.stringify(
        [
          {
            decisionId: decisions[0].sourceId,
            pseudoText: decisions[0].pseudoText,
          },
          {
            decisionId: decisions[2].sourceId,
            pseudoText: decisions[2].pseudoText,
          },
        ].sort(),
        null,
        2,
      ),
    );
  });
});
