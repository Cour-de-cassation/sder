const supertest = require('supertest');

import { decisionModule } from '../modules';
import { dateBuilder } from '../utils';
import { server } from './server';

const request = supertest(server);

describe('/decisions-to-pseudonymise', () => {
  it('should return all the decision to pseudonymise since the given date', async () => {
    const decisionRepository = await decisionModule.buildRepository();
    const decisions = [
      { dateCreation: dateBuilder.daysAgo(1) },
      { dateCreation: dateBuilder.daysAgo(3) },
      { dateCreation: dateBuilder.daysAgo(5) },
    ].map(decisionModule.lib.generateDecision);
    await Promise.all(decisions.map(decisionRepository.insert));

    const response = await request.get(`/decisions-to-pseudonymise?date="${dateBuilder.daysAgo(4)}"`);

    expect(response.status).toEqual(200);
    expect(JSON.stringify(response.body.sort(), null, 2)).toEqual(
      JSON.stringify([decisions[0], decisions[1]].sort(), null, 2),
    );
  });

  it('should return an empty array if there are no decision to pseudonymise since the given date', async () => {
    const decisionRepository = await decisionModule.buildRepository();
    const decisions = [{ dateCreation: dateBuilder.daysAgo(3) }, { dateCreation: dateBuilder.daysAgo(5) }].map(
      decisionModule.lib.generateDecision,
    );
    await Promise.all(decisions.map(decisionRepository.insert));

    const response = await request.get(`/decisions-to-pseudonymise?date="${dateBuilder.daysAgo(2)}"`);

    expect(response.status).toEqual(200);
    expect(JSON.stringify(response.body.sort(), null, 2)).toEqual(JSON.stringify([]));
  });
});
