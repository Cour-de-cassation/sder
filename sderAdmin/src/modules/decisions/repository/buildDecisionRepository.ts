import { buildMongo } from '../../../utils';
import { decisionType } from '../decisionType';
import { decisionRepositoryType } from './decisionRepositoryType';

export { buildDecisionRepository };

async function buildDecisionRepository(): Promise<decisionRepositoryType> {
  const db = await buildMongo();
  const collectionName = 'decisions';
  const collection = db.collection<decisionType>(collectionName);

  return {
    async clear() {
      await collection.deleteMany({});
    },

    async findAllByDecisionIds(decisionIds) {
      return collection.find({ sourceId: { $in: decisionIds } }).toArray();
    },

    async findAllIds() {
      const decisionFieldsIds = await collection.find().project({ _id: 1 }).toArray();
      return decisionFieldsIds.map(({ _id }) => _id);
    },

    async findAllPseudonymisationToExport() {
      const pseudonymisations = await collection
        .find({ labelStatus: 'done' })
        .project({ sourceId: 1, pseudoText: 1 })
        .toArray();

      return pseudonymisations.map(({ sourceId, pseudoText }) => ({ documentId: sourceId, pseudoText }));
    },

    async findAllToPseudonymiseSince(date) {
      return collection
        .find({
          $or: [
            {
              labelStatus: 'toBeTreated',
            },
            {
              pseudoText: { $eq: '' },
            },
          ],
          dateCreation: { $gte: date },
        })
        .toArray();
    },

    async findById(id) {
      const result = await collection.findOne({ _id: id } as any);

      if (!result) {
        throw new Error(`No matching ${collectionName} for _id ${id}`);
      }

      return result;
    },

    async findByDecisionId(decisionId) {
      const result = await collection.findOne({ sourceId: decisionId } as any);

      if (!result) {
        throw new Error(`No matching ${collectionName} for sourceId ${decisionId}`);
      }

      return result;
    },

    async insert(decision) {
      await collection.insert(decision);
    },

    async updateById(id, decisionField) {
      await collection.updateOne({ _id: id }, { $set: decisionField });
    },

    async updateByIds(ids, decisionField) {
      await collection.update({ _id: { $in: ids } }, { $set: decisionField });
    },
  };
}
