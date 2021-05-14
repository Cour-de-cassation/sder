import { areMongoIdEqual } from '../../../utils';
import { rawJurinetRepositoryType } from './rawJurinetRepositoryType';
import { rawJurinetCollectionName } from '../rawJurinetCollectionName';

export { buildRawJurinetFakeRepository };

let collection = [] as any[];

async function buildRawJurinetFakeRepository(): Promise<rawJurinetRepositoryType> {
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
        throw new Error(`No matching ${rawJurinetCollectionName} for _id ${id}`);
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
