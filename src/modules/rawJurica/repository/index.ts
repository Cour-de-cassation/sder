import { dependencyManager } from '../../../utils';
import { buildRawJuricaFakeRepository } from './buildRawJuricaFakeRepository';
import { buildRawJuricaRepository } from './buildRawJuricaRepository';
import { rawJuricaRepositoryType } from './rawJuricaRepositoryType';

export { buildRepository as buildRawJuricaRepository };

export type { rawJuricaRepositoryType };

const buildRepository = dependencyManager.inject({
  defaultValue: buildRawJuricaRepository,
  testValue: buildRawJuricaFakeRepository,
});
