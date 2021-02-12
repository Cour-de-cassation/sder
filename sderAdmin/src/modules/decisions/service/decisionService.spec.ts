import { generateDecision } from '../lib';
import { buildDecisionFakeRepository } from '../repository';
import { buildDecisionService } from './decisionService';

describe('decisionService', () => {
  describe('updateDecisionPseudonymisation', () => {
    const decision = generateDecision();
    const treatmenst = [
      {
        annotations: [{ category: 'CATEGORY', entityId: 'ENTITY_ID', start: 0, text: 'TEXT' }],
        source: 'SOURCE',
        order: 0,
      },
    ];

    it('should update decision pseudonymisation text and treatments', async () => {
      const decisionFakeRepository = await buildDecisionFakeRepository();
      const decisionService = buildDecisionService(buildDecisionFakeRepository);
      await decisionFakeRepository.insert(decision);

      await decisionService.updateDecisionPseudonymisation({
        decisionId: decision.sourceId,
        decisionPseudonymisedText: 'NEW_PSEUDONYMISATION',
        labelTreatments: treatmenst,
      });

      const updatedDecision = await decisionFakeRepository.findById(decision._id);
      expect(updatedDecision.pseudoText).toEqual('NEW_PSEUDONYMISATION');
      expect(updatedDecision.labelTreatments).toEqual(treatmenst);
    });

    it('should update decision _rev field', async () => {
      const decisionFakeRepository = await buildDecisionFakeRepository();
      const decisionService = buildDecisionService(buildDecisionFakeRepository);
      await decisionFakeRepository.insert(decision);

      await decisionService.updateDecisionPseudonymisation({
        decisionId: decision.sourceId,
        decisionPseudonymisedText: 'NEW_PSEUDONYMISATION',
        labelTreatments: treatmenst,
      });

      const updatedDecision = await decisionFakeRepository.findById(decision._id);
      expect(updatedDecision._rev).toEqual(decision._rev + 1);
    });
  });
});
