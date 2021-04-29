import { decisionModule } from '../modules';

export { resetAllDecisionsLabelStatus };

resetAllDecisionsLabelStatus();

async function resetAllDecisionsLabelStatus() {
  console.log('resetAllDecisionsLabelStatus');

  console.log('Init decision repository');
  const decisionRepository = await decisionModule.buildRepository();

  console.log('Fetching decision ids to reset');
  const decisionIds = [
    ...(await decisionRepository.findAllIdsByLabelStatus('loaded')),
    ...(await decisionRepository.findAllIdsByLabelStatus('done')),
    ...(await decisionRepository.findAllIdsByLabelStatus('exported')),
  ];
  console.log(`${decisionIds.length} decisions fetched`);

  console.log('Reset label status to toBeTreated');
  await decisionModule.service.updateDecisionsLabelStatus({ decisionIds, labelStatus: 'toBeTreated' });
  console.log('DONE');
}
