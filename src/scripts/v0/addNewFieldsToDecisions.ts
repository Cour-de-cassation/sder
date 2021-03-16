import { decisionModule } from '../../modules';

(async () => {
  addNewFieldsToDecisions();
})();

async function addNewFieldsToDecisions() {
  const decisionRepository = await decisionModule.buildRepository();

  console.log('Fetching decisions');
  const decisionIds = await decisionRepository.findAllIdsWithoutLabelFields();
  console.log(`${decisionIds.length} decisions to update`);

  for (let index = 0; index < decisionIds.length; index++) {
    console.log(`Treatment of decision ${index + 1}/${decisionIds.length}`);
    await decisionRepository.updateById(decisionIds[index], { labelStatus: 'toBeTreated', labelTreatments: [] });
  }

  console.log('DONE');
  process.exit(0);
}
