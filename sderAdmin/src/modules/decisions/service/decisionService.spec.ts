import { omit } from 'lodash';
import { generateDecision } from '../lib';
import { buildDecisionRepository } from '../repository';
import { decisionService } from './decisionService';

describe('decisionService', () => {
  describe('createDecision', () => {
    it('should create a new decision in the database with the given field', async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisionField = omit(generateDecision(), ['_id', '_rev', 'labelStatus', 'labelTreatments']);

      await decisionService.createDecision(decisionField);

      const decision = await decisionRepository.findByDecisionId(decisionField.sourceId);
      expect(omit(decision, ['_id', '_rev', 'labelStatus', 'labelTreatments'])).toEqual(decisionField);
    });

    it('should create a new decision in the database with a _rev at 0', async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisionField = omit(generateDecision(), ['_id', '_rev', 'labelStatus', 'labelTreatments']);

      await decisionService.createDecision(decisionField);

      const decision = await decisionRepository.findByDecisionId(decisionField.sourceId);
      expect(decision._rev).toEqual(0);
    });

    it('should create a new decision in the database with an empty labelTreatments', async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisionField = omit(generateDecision(), ['_id', '_rev', 'labelStatus', 'labelTreatments']);

      await decisionService.createDecision(decisionField);

      const decision = await decisionRepository.findByDecisionId(decisionField.sourceId);
      expect(decision.labelTreatments).toEqual([]);
    });

    it(`should create a new decision in the database with a 'toBeTreated' label status`, async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisionField = omit(generateDecision(), ['_id', '_rev', 'labelStatus', 'labelTreatments']);

      await decisionService.createDecision(decisionField);

      const decision = await decisionRepository.findByDecisionId(decisionField.sourceId);
      expect(decision.labelStatus).toEqual('toBeTreated');
    });
  });

  describe('fetchPseudonymizationsToExport', () => {
    it(`should fetch all the pseudonymization text and id of the decisions ready to be exported`, async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisions = ([
        { labelStatus: 'done' },
        { labelStatus: 'loaded' },
        { labelStatus: 'done' },
        { labelStatus: 'toBeTreated' },
      ] as const).map(generateDecision);
      await Promise.all(decisions.map(decisionRepository.insert));

      const pseudonymizations = await decisionService.fetchPseudonymizationsToExport();

      expect(pseudonymizations.sort()).toEqual(
        [
          {
            documentId: decisions[0].sourceId,
            pseudoText: decisions[0].pseudoText,
          },
          {
            documentId: decisions[2].sourceId,
            pseudoText: decisions[2].pseudoText,
          },
        ].sort(),
      );
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
