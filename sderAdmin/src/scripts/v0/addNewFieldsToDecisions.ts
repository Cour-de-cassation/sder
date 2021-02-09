import { buildDecisionRepository } from '../../modules';

(async () => {
  addNewFieldsToDecisions();
})();

async function addNewFieldsToDecisions() {
  const decisionRepository = await buildDecisionRepository();

  const decisions = await decisionRepository.findAll();

  for (const decision of decisions) {
    await decisionRepository.updateById(decision._id, { isLoadedInLabel: false, labelTreatments: [] });
  }

  process.exit(0);
}
