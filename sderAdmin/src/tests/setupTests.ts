import { buildDecisionFakeRepository } from '../modules';

global.beforeEach(async () => {
  const decisionRepository = await buildDecisionFakeRepository();
  await decisionRepository.clear();
});
