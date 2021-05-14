import { buildRunMongo } from '../../../utils';
import { rawJurinetRepositoryType } from './rawJurinetRepositoryType';
import { rawJurinetCollectionName } from '../rawJurinetCollectionName';

export { buildRawJurinetRepository };

async function buildRawJurinetRepository(): Promise<rawJurinetRepositoryType> {
  const runMongo = buildRunMongo<any>(rawJurinetCollectionName);

  return {
    async clear() {
      await runMongo(({ collection }) => collection.deleteMany({}));
    },

    async findAll() {
      return runMongo(async ({ collection }) => collection.find().toArray());
    },

    async findAllIds() {
      return runMongo(async ({ collection }) => {
        const decisionFieldsIds = await collection.find().project({ _id: 1 }).toArray();
        return decisionFieldsIds.map(({ _id }) => _id);
      });
    },

    async findById(id) {
      return runMongo(async ({ collection }) => {
        const result = await collection.findOne({ _id: id } as any);

        if (!result) {
          throw new Error(`No matching ${rawJurinetCollectionName} for _id ${id}`);
        }

        return result;
      });
    },

    async insert(decision) {
      await runMongo(({ collection }) => collection.insertOne(decision));
    },

    async updateById(id, decisionField) {
      await runMongo(({ collection }) => collection.updateOne({ _id: id }, { $set: decisionField }));
    },

    async updateByIds(ids, decisionField) {
      await runMongo(({ collection }) => collection.updateMany({ _id: { $in: ids } }, { $set: decisionField }));
    },
  };
}
