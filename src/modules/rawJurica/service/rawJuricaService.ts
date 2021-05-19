import { buildRawJurica } from '../lib';
import { buildRawJuricaRepository } from '../repository';

export { rawJuricaService };

const rawJuricaService = {
  async createDecision(decisionFields: any) {
    const decisionRepository = await buildRawJuricaRepository();
    const decision = buildRawJurica(decisionFields);
    await decisionRepository.insert(decision);
  },

  /*
  async fetchPseudonymisationsToExport() {
    const decisionRepository = await buildRawJuricaRepository();

    return decisionRepository.findAllPseudonymisationToExport();
  },

  async fetchDecisionsToPseudonymise({ date }: { date: Date }) {
    const decisionRepository = await buildRawJuricaRepository();

    return decisionRepository.findAllToPseudonymiseSince(date);
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
  */
};
