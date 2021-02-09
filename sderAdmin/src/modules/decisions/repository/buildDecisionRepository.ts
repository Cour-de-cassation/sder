import { buildMongo, mongoIdType } from '../../../utils';
import { decisionType } from '../decisionType';

export { buildDecisionRepository };

async function buildDecisionRepository() {
  const db = await buildMongo();
  const collectionName = 'decisions';
  const collection = db.collection<decisionType>(collectionName);

  return {
    findAll,
    updateById,
  };

  async function findAll() {
    return collection.find().toArray();
  }

  async function updateById(id: mongoIdType, decisionField: Omit<Partial<decisionType>, '_id'>) {
    await collection.updateOne({ _id: id }, decisionField);
  }
}
