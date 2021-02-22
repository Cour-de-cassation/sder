import { decisionType, labelTreatmentsType } from '../decisionType';
import { buildDecision } from '../lib';
import { buildDecisionRepository } from '../repository';

export { decisionService };

const decisionService = {
  async createDecision(decisionFields: Omit<decisionType, '_id' | '_rev' | 'isLoadedInLabel' | 'labelTreatments'>) {
    const decisionRepository = await buildDecisionRepository();

    const decision = buildDecision(decisionFields);
    await decisionRepository.insert(decision);
  },

  async fetchDecisionsToPseudonymise({ date }: { date: Date }) {
    const decisionRepository = await buildDecisionRepository();

    return decisionRepository.findAllToPseudonymiseSince(date);
  },

  async setDecisionsLoadedInLabel({ decisionIds }: { decisionIds: string[] }) {
    const decisionRepository = await buildDecisionRepository();

    const decisions = await decisionRepository.findAllByDecisionIds(decisionIds);

    await decisionRepository.updateByIds(
      decisions.map((decision) => decision._id),
      { isLoadedInLabel: true },
    );
  },

  async updateDecisionPseudonymisation({
    decisionId,
    decisionPseudonymisedText,
    labelTreatments,
  }: {
    decisionId: string;
    decisionPseudonymisedText: string;
    labelTreatments: labelTreatmentsType;
  }) {
    const decisionRepository = await buildDecisionRepository();

    const decision = await decisionRepository.findByDecisionId(decisionId);

    await decisionRepository.updateById(decision._id, {
      _rev: decision._rev + 1,
      isLoadedInLabel: true,
      labelTreatments,
      pseudoText: decisionPseudonymisedText,
    });
  },
};
