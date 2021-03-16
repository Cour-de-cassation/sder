import { buildMongo } from '../../../utils';
import { decisionCollectionName } from '../decisionCollectionName';
import { decisionType } from '../decisionType';
import { decisionRepositoryType } from './decisionRepositoryType';

export { buildDecisionRepository };

async function buildDecisionRepository(): Promise<decisionRepositoryType> {
  const db = await buildMongo();
  const collection = db.collection<decisionType>(decisionCollectionName);

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

      return pseudonymisations.map(({ sourceId, pseudoText }) => ({ decisionId: sourceId, pseudoText }));
    },

    async findAllToPseudonymiseSince(date) {
      return collection
        .find({
          dateCreation: { $gte: date.toISOString() as any },
          labelStatus: 'toBeTreated',
        })
        .toArray();
    },

    async findAllIdsWithoutLabelFields() {
      const decisionFieldsIds = await collection
        .find({ labelStatus: { $exists: false } })
        .project({ _id: 1 })
        .toArray();

      return decisionFieldsIds.map(({ _id }) => _id);
    },

    async findById(id) {
      const result = await collection.findOne({ _id: id } as any);

      if (!result) {
        throw new Error(`No matching ${decisionCollectionName} for _id ${id}`);
      }

      return result;
    },

    async findByDecisionId(decisionId) {
      const result = await collection.findOne({ sourceId: decisionId } as any);

      if (!result) {
        throw new Error(`No matching ${decisionCollectionName} for sourceId ${decisionId}`);
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
