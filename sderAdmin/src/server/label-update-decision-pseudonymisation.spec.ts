const supertest = require('supertest');

import { decisionModule } from '../modules';
import { server } from './server';

const request = supertest(server);

describe('/label/update-decision-pseudonymisation', () => {
  it('should update the pseudonymisation text of the given decision', async () => {
    const decisionRepository = await decisionModule.buildRepository();
    const decisions = [{ pseudoText: '' }, { pseudoText: '' }].map(decisionModule.lib.generateDecision);
    await Promise.all(decisions.map(decisionRepository.insert));

    const response = await request.patch(`/label/update-decision-pseudonymisation`).send({
      decisionId: decisions[0].sourceId,
      decisionPseudonymisedText: 'NEW PSEUDO TEXT',
      labelTreatments: [],
    });

    const updatedDecision = await decisionRepository.findByDecisionId(decisions[0].sourceId);
    expect(response.status).toEqual(200);
    expect(updatedDecision.pseudoText).toEqual('NEW PSEUDO TEXT');
  });

  it('should update the label treatments of the given decision', async () => {
    const decisionRepository = await decisionModule.buildRepository();
    const decisions = [{ labelTreatments: [] }, { labelTreatments: [] }].map(decisionModule.lib.generateDecision);
    await Promise.all(decisions.map(decisionRepository.insert));
    const labelTreatments = [
      {
        annotations: [
          {
            category: 'CATEGORY',
            entityId: 'ENTITY_ID',
            start: 0,
            text: 'TEXT',
          },
        ],

        source: 'SOURCE',
        order: 0,
      },
    ];

    const response = await request.patch(`/label/update-decision-pseudonymisation`).send({
      decisionId: decisions[0].sourceId,
      decisionPseudonymisedText: '',
      labelTreatments,
    });

    const updatedDecision = await decisionRepository.findByDecisionId(decisions[0].sourceId);
    expect(response.status).toEqual(200);
    expect(updatedDecision.labelTreatments).toEqual(labelTreatments);
  });

  it('should not update the other decisions', async () => {
    const decisionRepository = await decisionModule.buildRepository();
    const decisions = [{ labelTreatments: [] }, { pseudoText: '', labelTreatments: [] }].map(
      decisionModule.lib.generateDecision,
    );
    await Promise.all(decisions.map(decisionRepository.insert));

    const response = await request.patch(`/label/update-decision-pseudonymisation`).send({
      decisionId: decisions[0].sourceId,
      decisionPseudonymisedText: 'NEW PSEUDO TEXT',
      labelTreatments: [
        {
          annotations: [
            {
              category: 'CATEGORY',
              entityId: 'ENTITY_ID',
              start: 0,
              text: 'TEXT',
            },
          ],

          source: 'SOURCE',
          order: 0,
        },
      ],
    });

    const decisionAfterUpdate = await decisionRepository.findByDecisionId(decisions[1].sourceId);
    expect(response.status).toEqual(200);
    expect(decisionAfterUpdate.labelTreatments).toEqual([]);
    expect(decisionAfterUpdate.pseudoText).toEqual('');
  });
});
