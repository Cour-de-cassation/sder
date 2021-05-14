import { mongoIdType } from '../../../utils';

export type { rawJuricaRepositoryType };

type rawJuricaRepositoryType = {
  clear: () => void;
  findAll: () => Promise<Array<any>>;
  findAllIds: () => Promise<Array<any['_id']>>;
  findById: (id: mongoIdType) => Promise<any>;
  insert: (decision: any) => Promise<void>;
  updateById: (id: mongoIdType, decisionField: Partial<any>) => Promise<void>;
  updateByIds: (ids: mongoIdType[], decisionField: Partial<any>) => Promise<void>;
};
