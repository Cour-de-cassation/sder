import { labelTreatmentsType } from '../decisionType';
import { buildDecisionRepository, decisionRepositoryType } from '../repository';

export { buildDecisionService, decisionService };

const decisionService = buildDecisionService(buildDecisionRepository);

function buildDecisionService(decisionRepositoryBuilder: () => Promise<decisionRepositoryType>) {
  return {
    async fetchDecisionsToPseudonymise({ date }: { date: Date }) {
      const decisionRepository = await decisionRepositoryBuilder();

      return decisionRepository.findAllToPseudonymiseSince(date);
    },

    async setDecisionsLoadedInLabel({ decisionIds }: { decisionIds: string[] }) {
      const decisionRepository = await decisionRepositoryBuilder();

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
      const decisionRepository = await decisionRepositoryBuilder();

      const decision = await decisionRepository.findByDecisionId(decisionId);

      await decisionRepository.updateById(decision._id, {
        _rev: decision._rev + 1,
        isLoadedInLabel: true,
        labelTreatments,
        pseudoText: decisionPseudonymisedText,
      });
    },
  };
}
