import { mongoIdType } from '../../../utils';
import { decisionType } from '../decisionType';

export type { decisionRepositoryType };

type decisionRepositoryType = {
  clear: () => void;
  findAll: () => Promise<decisionType[]>;
  findAllToPseudonymiseSince: (date: Date) => Promise<decisionType[]>;
  findById: (id: mongoIdType) => Promise<decisionType>;
  findByDecisionId: (decisionId: string) => Promise<decisionType>;
  insert: (decision: decisionType) => Promise<void>;
  updateById: (id: mongoIdType, decisionField: Partial<decisionType>) => Promise<void>;
};
