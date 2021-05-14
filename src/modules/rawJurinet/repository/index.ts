import { dependencyManager } from '../../../utils';
import { buildRawJurinetFakeRepository } from './buildRawJurinetFakeRepository';
import { buildRawJurinetRepository } from './buildRawJurinetRepository';
import { rawJurinetRepositoryType } from './rawJurinetRepositoryType';

export { buildRepository as buildRawJurinetRepository };

export type { rawJurinetRepositoryType };

const buildRepository = dependencyManager.inject({
  defaultValue: buildRawJurinetRepository,
  testValue: buildRawJurinetFakeRepository,
});
