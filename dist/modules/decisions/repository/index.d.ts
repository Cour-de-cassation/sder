import { buildDecisionFakeRepository } from './buildDecisionFakeRepository';
import { decisionRepositoryType } from './decisionRepositoryType';
export { buildRepository as buildDecisionRepository };
export type { decisionRepositoryType };
declare const buildRepository: typeof buildDecisionFakeRepository;
