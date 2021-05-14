import { areMongoIdEqual } from '../../../utils';
import { rawJuricaRepositoryType } from './rawJuricaRepositoryType';
import { rawJuricaCollectionName } from '../rawJuricaCollectionName';

export { buildRawJuricaFakeRepository };

let collection = [] as any[];

async function buildRawJuricaFakeRepository(): Promise<rawJuricaRepositoryType> {
  return {
    async clear() {
      collection = [];
    },

    async findAll() {
      return collection;
    },

    async findAllIds() {
      return collection.map((decision) => decision._id);
    },

    async findById(id) {
      const result = collection.find((decision) => areMongoIdEqual(decision._id, id));

      if (!result) {
        throw new Error(`No matching ${rawJuricaCollectionName} for _id ${id}`);
      }

      return result;
    },

    async insert(decision) {
      collection.push(decision);
    },

    async updateById(id, decisionField) {
      collection = collection.map((decision) =>
        areMongoIdEqual(decision._id, id) ? { ...decision, ...decisionField } : decision,
      );
    },

    async updateByIds(ids, decisionField) {
      collection = collection.map((decision) =>
        ids.some((id) => areMongoIdEqual(id, decision._id)) ? { ...decision, ...decisionField } : decision,
      );
    },
  };
}
