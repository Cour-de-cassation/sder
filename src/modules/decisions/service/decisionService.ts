import { decisionType, labelTreatmentsType } from '../decisionType';
import { buildDecision, shouldBeTreatedByLabel } from '../lib';
import { buildDecisionRepository } from '../repository';

export { decisionService };

const decisionService = {
  async createDecision(decisionFields: Omit<decisionType, '_id' | '_rev' | 'labelStatus' | 'labelTreatments'>) {
    const decisionRepository = await buildDecisionRepository();

    const decision = buildDecision({ ...decisionFields, _rev: 0, labelStatus: 'toBeTreated' });
    await decisionRepository.insert(decision);
  },

  async fetchDecisionsBySourceIdsAndSourceName(
    sourceIds: decisionType['sourceId'][],
    sourceName: decisionType['sourceName'],
  ) {
    const decisionRepository = await buildDecisionRepository();

    return decisionRepository.findAllBySourceIdsAndSourceName(sourceIds, sourceName);
  },

  async fetchPseudonymisationsToExport() {
    const decisionRepository = await buildDecisionRepository();

    return decisionRepository.findAllPseudonymisationToExport();
  },

  async fetchJurinetAndChainedJuricaDecisionsToPseudonymiseBetween({
    startDate,
    endDate = new Date(),
  }: {
    startDate: Date;
    endDate?: Date;
  }) {
    const decisionRepository = await buildDecisionRepository();

    const jurinetDecisions = await decisionRepository.findAllBetween({
      startDate,
      endDate,
      source: 'jurinet',
    });

    const juricaChainedDecisionSourceIds: number[] = [];

    jurinetDecisions.forEach((decision) => {
      if (decision.decatt) {
        decision.decatt.forEach((sourceId) => juricaChainedDecisionSourceIds.push(sourceId));
      }
    });

    const juricaChainedDecisions = await decisionRepository.findAllBySourceIdsAndSourceName(
      juricaChainedDecisionSourceIds,
      'jurica',
    );

    const decisions = [...jurinetDecisions, ...juricaChainedDecisions];

    return decisions.filter(shouldBeTreatedByLabel);
  },

  async deprecatedUpdateDecisionsLabelStatus({
    decisionIds,
    labelStatus,
  }: {
    decisionIds: number[];
    labelStatus: decisionType['labelStatus'];
  }) {
    const decisionRepository = await buildDecisionRepository();

    const decisions = await decisionRepository.findAllByDecisionIds(decisionIds);

    await decisionRepository.updateByIds(
      decisions.map((decision) => decision._id),
      { labelStatus },
    );
  },

  async updateDecisionsLabelStatus({
    decisionIds,
    labelStatus,
  }: {
    decisionIds: Array<decisionType['_id']>;
    labelStatus: decisionType['labelStatus'];
  }) {
    const decisionRepository = await buildDecisionRepository();

    await decisionRepository.updateByIds(decisionIds, { labelStatus });
  },

  async depracatedUpdateDecisionPseudonymisation({
    decisionId,
    decisionPseudonymisedText,
    labelTreatments,
  }: {
    decisionId: number;
    decisionPseudonymisedText: string;
    labelTreatments: labelTreatmentsType;
  }) {
    const decisionRepository = await buildDecisionRepository();

    const decision = await decisionRepository.findByDecisionId(decisionId);

    await decisionRepository.updateById(decision._id, {
      _rev: decision._rev + 1,
      labelStatus: 'done',
      labelTreatments,
      pseudoText: decisionPseudonymisedText,
    });
  },

  async updateDecisionPseudonymisation({
    decisionId,
    decisionPseudonymisedText,
    labelTreatments,
  }: {
    decisionId: decisionType['_id'];
    decisionPseudonymisedText: string;
    labelTreatments: labelTreatmentsType;
  }) {
    const decisionRepository = await buildDecisionRepository();

    const decision = await decisionRepository.findById(decisionId);

    await decisionRepository.updateById(decision._id, {
      _rev: decision._rev + 1,
      labelStatus: 'done',
      labelTreatments,
      pseudoText: decisionPseudonymisedText,
    });
  },
};
