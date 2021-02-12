import { buildDecisionRepository } from '../../modules';

(async () => {
  addNewFieldsToDecisions();
})();

async function addNewFieldsToDecisions() {
  console.log('addNewFieldsToDecisions');

  const decisionRepository = await buildDecisionRepository();

  console.log('Fetching decisions');
  const decisions = await decisionRepository.findAll();
  console.log(`${decisions} decisions to update`);

  for (let index = 0; index < decisions.length; index++) {
    console.log(`Treatment of decision ${index + 1}/${decisions.length}`);
    await decisionRepository.updateById(decisions[index]._id, { isLoadedInLabel: false, labelTreatments: [] });
  }

  console.log('DONE');
  process.exit(0);
}
