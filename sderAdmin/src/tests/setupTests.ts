import { buildDecisionRepository } from '../modules';

global.beforeEach(async () => {
  const decisionRepository = await buildDecisionRepository();
  await decisionRepository.clear();
});
