import { omit } from 'lodash';
import { generateDecision } from '../lib';
import { buildDecisionRepository } from '../repository';
import { decisionService } from './decisionService';

describe('decisionService', () => {
  describe('createDecision', () => {
    it('should create a new decision in the database with the given field', async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisionField = omit(generateDecision(), ['_id', '_rev', 'isLoadedInLabel', 'labelTreatments']);

      await decisionService.createDecision(decisionField);

      const decision = await decisionRepository.findByDecisionId(decisionField.sourceId);
      expect(omit(decision, ['_id', '_rev', 'isLoadedInLabel', 'labelTreatments'])).toEqual(decisionField);
    });

    it('should create a new decision in the database with a _rev at 0', async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisionField = omit(generateDecision(), ['_id', '_rev', 'isLoadedInLabel', 'labelTreatments']);

      await decisionService.createDecision(decisionField);

      const decision = await decisionRepository.findByDecisionId(decisionField.sourceId);
      expect(decision._rev).toEqual(0);
    });

    it('should create a new decision in the database with an empty labelTreatments', async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisionField = omit(generateDecision(), ['_id', '_rev', 'isLoadedInLabel', 'labelTreatments']);

      await decisionService.createDecision(decisionField);

      const decision = await decisionRepository.findByDecisionId(decisionField.sourceId);
      expect(decision.labelTreatments).toEqual([]);
    });

    it('should create a new decision in the database with a false label loaded status', async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisionField = omit(generateDecision(), ['_id', '_rev', 'isLoadedInLabel', 'labelTreatments']);

      await decisionService.createDecision(decisionField);

      const decision = await decisionRepository.findByDecisionId(decisionField.sourceId);
      expect(decision.isLoadedInLabel).toEqual(false);
    });
  });

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
      const decisionRepository = await buildDecisionRepository();
      await decisionRepository.insert(decision);

      await decisionService.updateDecisionPseudonymisation({
        decisionId: decision.sourceId,
        decisionPseudonymisedText: 'NEW_PSEUDONYMISATION',
        labelTreatments: treatmenst,
      });

      const updatedDecision = await decisionRepository.findById(decision._id);
      expect(updatedDecision.pseudoText).toEqual('NEW_PSEUDONYMISATION');
      expect(updatedDecision.labelTreatments).toEqual(treatmenst);
    });

    it('should update decision _rev field', async () => {
      const decisionRepository = await buildDecisionRepository();
      await decisionRepository.insert(decision);

      await decisionService.updateDecisionPseudonymisation({
        decisionId: decision.sourceId,
        decisionPseudonymisedText: 'NEW_PSEUDONYMISATION',
        labelTreatments: treatmenst,
      });

      const updatedDecision = await decisionRepository.findById(decision._id);
      expect(updatedDecision._rev).toEqual(decision._rev + 1);
    });
  });
});
