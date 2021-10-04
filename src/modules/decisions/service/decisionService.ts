import { decisionType, labelTreatmentsType } from '../decisionType';
import { buildDecision } from '../lib';
import { buildDecisionRepository } from '../repository';

export { decisionService };

const decisionService = {
  async createDecision(decisionFields: Omit<decisionType, '_id' | '_rev' | 'labelStatus' | 'labelTreatments'>) {
    const decisionRepository = await buildDecisionRepository();

    const decision = buildDecision({ ...decisionFields, _rev: 0, labelStatus: 'toBeTreated' });
    await decisionRepository.insert(decision);
  },

  async fetchDecisionBySourceIdAndSourceName(
    sourceId: decisionType['sourceId'],
    sourceName: decisionType['sourceName'],
  ) {
    const decisionRepository = await buildDecisionRepository();

    return decisionRepository.findBySourceIdAndSourceName({ sourceId, sourceName });
  },

  async fetchPseudonymisationsToExport() {
    const decisionRepository = await buildDecisionRepository();

    return decisionRepository.findAllPseudonymisationToExport();
  },

  async fetchPublicDecisionsBySourceAndJurisdictionsBetween({
    startDate,
    endDate = new Date(),
    source,
    jurisdictions,
  }: {
    startDate: Date;
    endDate?: Date;
    source: string;
    jurisdictions: string[];
  }) {
    const decisionRepository = await buildDecisionRepository();

    const decisions: decisionType[] = [];

    jurisdictions.forEach(async (jurisdiction) => {
      const decisionsForJuridiction = await decisionRepository.findAllPublicBySourceAndJurisdictionBetween({
        endDate,
        startDate,
        jurisdiction,
        source,
      });
      decisions.push(...decisionsForJuridiction);
    });

    return decisions;
  },

  async fetchChainedJuricaDecisionsToPseudonymiseBetween({
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

    const juricaChainedDecisions = await decisionRepository.findAllByLabelStatusAndSourceIdsAndSourceName({
      sourceIds: juricaChainedDecisionSourceIds,
      sourceName: 'jurica',
      labelStatus: 'toBeTreated',
    });

    return juricaChainedDecisions.filter((decision) => !decision.pseudoText);
  },

  async fetchDecisionsToPseudonymiseBetween({
    source,
    startDate,
    endDate = new Date(),
  }: {
    source: decisionType['sourceName'];
    startDate: Date;
    endDate?: Date;
  }) {
    const decisionRepository = await buildDecisionRepository();

    const decisions = await decisionRepository.findAllBetween({
      startDate,
      endDate,
      source,
      labelStatus: 'toBeTreated',
    });

    return decisions.filter((decision) => !decision.pseudoText);
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
