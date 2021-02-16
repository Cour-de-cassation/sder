import { decisionModule } from '../modules';

global.beforeEach(async () => {
  const decisionRepository = await decisionModule.buildRepository();
  await decisionRepository.clear();
});
