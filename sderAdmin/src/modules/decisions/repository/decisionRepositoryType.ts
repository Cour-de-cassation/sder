import { mongoIdType } from '../../../utils';
import { decisionType } from '../decisionType';

export type { decisionRepositoryType };

type decisionRepositoryType = {
  clear: () => void;
  findAllByDecisionIds: (decisionIds: string[]) => Promise<decisionType[]>;
  findAllIds: () => Promise<Array<decisionType['_id']>>;
  findAllPseudonymisationToExport: () => Promise<
    Array<{ documentId: decisionType['sourceId']; pseudoText: decisionType['pseudoText'] }>
  >;
  findAllToPseudonymiseSince: (date: Date) => Promise<decisionType[]>;
  findById: (id: mongoIdType) => Promise<decisionType>;
  findByDecisionId: (decisionId: string) => Promise<decisionType>;
  insert: (decision: decisionType) => Promise<void>;
  updateById: (id: mongoIdType, decisionField: Partial<decisionType>) => Promise<void>;
  updateByIds: (ids: mongoIdType[], decisionField: Partial<decisionType>) => Promise<void>;
};
