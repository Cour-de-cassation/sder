import { mongoIdType } from '../../../utils';
import { decisionType } from '../decisionType';

export type { decisionRepositoryType };

type decisionRepositoryType = {
  clear: () => void;
  findAll: () => Promise<Array<decisionType>>;
  findAllByDecisionIds: (decisionIds: Array<decisionType['sourceId']>) => Promise<decisionType[]>;
  findAllIds: () => Promise<Array<decisionType['_id']>>;
  findAllIdsByLabelStatus: (labelStatus: decisionType['labelStatus']) => Promise<Array<decisionType['_id']>>;
  findAllPseudonymisationToExport: () => Promise<
    Array<{ decisionId: decisionType['sourceId']; pseudoText: decisionType['pseudoText'] }>
  >;
  findAllToPseudonymiseSince: (date: Date) => Promise<decisionType[]>;
  findAllIdsWithoutLabelFields: () => Promise<Array<decisionType['_id']>>;
  findById: (id: mongoIdType) => Promise<decisionType>;
  findByDecisionId: (decisionId: decisionType['sourceId']) => Promise<decisionType>;
  findBySourceIdAndSourceName: (
    sourceId: decisionType['sourceId'],
    sourceName: decisionType['sourceName'],
  ) => Promise<decisionType>;
  insert: (decision: decisionType) => Promise<void>;
  updateById: (id: mongoIdType, decisionField: Partial<decisionType>) => Promise<void>;
  updateByIds: (ids: mongoIdType[], decisionField: Partial<decisionType>) => Promise<void>;
};
