import { omit } from 'lodash';
import { dateBuilder } from '../../../utils';
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

  describe('fetchDecisionBySourceIdAndSourceName', () => {
    it('should fetch the right decision', async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisions = [
        { sourceId: 100, sourceName: 'jurica' },
        { sourceId: 200, sourceName: 'jurica' },
        { sourceId: 300, sourceName: 'jurica' },
        { sourceId: 200, sourceName: 'jurinet' },
      ].map(generateDecision);
      await Promise.all(decisions.map(decisionRepository.insert));

      const fetchedDecisions = await decisionService.fetchDecisionsBySourceIdsAndSourceName([200, 300], 'jurica');

      expect(fetchedDecisions.sort()).toEqual([decisions[1], decisions[2]].sort());
    });
  });

  describe('fetchJurinetAndChainedJuricaDecisionsToPseudonymiseBetween', () => {
    it('should fetch the jurinet decisions between the given date', async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisions = ([
        {
          sourceId: 300,
          sourceName: 'jurica',
          dateCreation: dateBuilder.daysAgo(3),
          pseudoText: '',
          labelStatus: 'toBeTreated',
        },
        {
          sourceId: 200,
          sourceName: 'jurinet',
          dateCreation: dateBuilder.daysAgo(3),
          pseudoText: '',
          labelStatus: 'toBeTreated',
        },
      ] as const).map(generateDecision);
      await Promise.all(decisions.map(decisionRepository.insert));

      const fetchedDecisions = await decisionService.fetchJurinetAndChainedJuricaDecisionsToPseudonymiseBetween({
        startDate: new Date(dateBuilder.daysAgo(5)),
        endDate: new Date(dateBuilder.daysAgo(1)),
      });

      expect(fetchedDecisions.sort()).toEqual([decisions[1]].sort());
    });

    it('should not fetch the jurinet decisions between the given date already treated', async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisions = ([
        {
          sourceId: 200,
          sourceName: 'jurinet',
          dateCreation: dateBuilder.daysAgo(3),
          pseudoText: 'TEXT',
          labelStatus: 'done',
        },
      ] as const).map(generateDecision);
      await Promise.all(decisions.map(decisionRepository.insert));

      const fetchedDecisions = await decisionService.fetchJurinetAndChainedJuricaDecisionsToPseudonymiseBetween({
        startDate: new Date(dateBuilder.daysAgo(5)),
        endDate: new Date(dateBuilder.daysAgo(1)),
      });

      expect(fetchedDecisions.sort()).toEqual([].sort());
    });

    it('should fetch the jurica decisions chained to jurinet decision between the given date already treated', async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisions = [
        {
          sourceId: 300,
          sourceName: 'jurica',
          dateCreation: dateBuilder.daysAgo(9),
          pseudoText: '',
          labelStatus: 'toBeTreated' as const,
        },
        {
          sourceId: 400,
          sourceName: 'jurica',
          dateCreation: dateBuilder.daysAgo(3),
          pseudoText: '',
          labelStatus: 'toBeTreated' as const,
        },
        {
          sourceId: 200,
          sourceName: 'jurinet',
          dateCreation: dateBuilder.daysAgo(3),
          pseudoText: '',
          labelStatus: 'toBeTreated' as const,
          decatt: [300],
        },
      ].map(generateDecision);
      await Promise.all(decisions.map(decisionRepository.insert));

      const fetchedDecisions = await decisionService.fetchJurinetAndChainedJuricaDecisionsToPseudonymiseBetween({
        startDate: new Date(dateBuilder.daysAgo(5)),
        endDate: new Date(dateBuilder.daysAgo(1)),
      });

      expect(fetchedDecisions).toEqual([decisions[2], decisions[0]]);
    });

    it('should fetch the jurica decisions chained to jurinet decision between the given date already treated (case jurinet is treated)', async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisions = [
        {
          sourceId: 300,
          sourceName: 'jurica',
          dateCreation: dateBuilder.daysAgo(9),
          pseudoText: '',
          labelStatus: 'toBeTreated' as const,
        },
        {
          sourceId: 400,
          sourceName: 'jurica',
          dateCreation: dateBuilder.daysAgo(3),
          pseudoText: '',
          labelStatus: 'toBeTreated' as const,
        },
        {
          sourceId: 200,
          sourceName: 'jurinet',
          dateCreation: dateBuilder.daysAgo(3),
          pseudoText: 'TEXT',
          labelStatus: 'done' as const,
          decatt: [300],
        },
      ].map(generateDecision);
      await Promise.all(decisions.map(decisionRepository.insert));

      const fetchedDecisions = await decisionService.fetchJurinetAndChainedJuricaDecisionsToPseudonymiseBetween({
        startDate: new Date(dateBuilder.daysAgo(5)),
        endDate: new Date(dateBuilder.daysAgo(1)),
      });

      expect(fetchedDecisions).toEqual([decisions[0]]);
    });
  });

  describe('fetchPseudonymisationsToExport', () => {
    it(`should fetch all the pseudonymisation text and id of the decisions ready to be exported`, async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisions = ([
        { labelStatus: 'done' },
        { labelStatus: 'loaded' },
        { labelStatus: 'done' },
        { labelStatus: 'toBeTreated' },
      ] as const).map(generateDecision);
      await Promise.all(decisions.map(decisionRepository.insert));

      const pseudonymisations = await decisionService.fetchPseudonymisationsToExport();

      expect(pseudonymisations.sort()).toEqual(
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
      );
    });
  });

  describe('updateDecisionsLabelStatus', () => {
    it('should update labelStatus for the given decision ids', async () => {
      const decisionRepository = await buildDecisionRepository();
      const decisions = ([
        { labelStatus: 'toBeTreated' },
        { labelStatus: 'toBeTreated' },
        { labelStatus: 'toBeTreated' },
      ] as const).map(generateDecision);
      await Promise.all(decisions.map(decisionRepository.insert));

      await decisionService.updateDecisionsLabelStatus({
        decisionIds: [decisions[0]._id, decisions[2]._id],
        labelStatus: 'loaded',
      });

      const updatedDecision0 = await decisionRepository.findById(decisions[0]._id);
      const updatedDecision1 = await decisionRepository.findById(decisions[1]._id);
      const updatedDecision2 = await decisionRepository.findById(decisions[2]._id);
      expect(omit(updatedDecision0, 'labelStatus')).toEqual(omit(decisions[0], 'labelStatus'));
      expect(updatedDecision0.labelStatus).toEqual('loaded');
      expect(updatedDecision1).toEqual(decisions[1]);
      expect(omit(updatedDecision2, 'labelStatus')).toEqual(omit(decisions[2], 'labelStatus'));
      expect(updatedDecision2.labelStatus).toEqual('loaded');
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
        decisionId: decision._id,
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
        decisionId: decision._id,
        decisionPseudonymisedText: 'NEW_PSEUDONYMISATION',
        labelTreatments: treatmenst,
      });

      const updatedDecision = await decisionRepository.findById(decision._id);
      expect(updatedDecision._rev).toEqual(decision._rev + 1);
    });
  });
});
