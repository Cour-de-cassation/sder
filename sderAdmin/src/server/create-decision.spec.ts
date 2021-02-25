import { omit } from 'lodash';
const supertest = require('supertest');

import { decisionModule } from '../modules';
import { server } from './server';

const request = supertest(server);

describe('/create-decision', () => {
  it('should create a new decision in the database with the given field', async () => {
    const decisionRepository = await decisionModule.buildRepository();
    const decisionField = omit(decisionModule.lib.generateDecision(), [
      '_id',
      '_rev',
      'labelStatus',
      'labelTreatments',
    ]);

    const response = await request.post(`/create-decision`).send(decisionField);

    const createdDecishion = await decisionRepository.findByDecisionId(decisionField.sourceId);
    expect(response.status).toEqual(200);
    expect(omit(createdDecishion, ['_id', '_rev', 'labelStatus', 'labelTreatments'])).toEqual(decisionField);
  });

  it('should create a new decision in the database with a _rev at 0', async () => {
    const decisionRepository = await decisionModule.buildRepository();
    const decisionField = omit(decisionModule.lib.generateDecision(), [
      '_id',
      '_rev',
      'labelStatus',
      'labelTreatments',
    ]);

    const response = await request.post(`/create-decision`).send(decisionField);

    const createdDecishion = await decisionRepository.findByDecisionId(decisionField.sourceId);
    expect(response.status).toEqual(200);
    expect(createdDecishion._rev).toEqual(0);
  });

  it('should create a new decision in the database with an empty labelTreatments', async () => {
    const decisionRepository = await decisionModule.buildRepository();
    const decisionField = omit(decisionModule.lib.generateDecision(), [
      '_id',
      '_rev',
      'labelStatus',
      'labelTreatments',
    ]);

    const response = await request.post(`/create-decision`).send(decisionField);

    const createdDecishion = await decisionRepository.findByDecisionId(decisionField.sourceId);
    expect(response.status).toEqual(200);
    expect(createdDecishion.labelTreatments).toEqual([]);
  });

  it(`should create a new decision in the database with a 'toBeTreated' label status`, async () => {
    const decisionRepository = await decisionModule.buildRepository();
    const decisionField = omit(decisionModule.lib.generateDecision(), [
      '_id',
      '_rev',
      'labelStatus',
      'labelTreatments',
    ]);

    const response = await request.post(`/create-decision`).send(decisionField);

    const createdDecishion = await decisionRepository.findByDecisionId(decisionField.sourceId);
    expect(response.status).toEqual(200);
    expect(createdDecishion.labelStatus).toEqual('toBeTreated');
  });
});
