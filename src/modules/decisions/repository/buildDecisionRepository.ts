import { buildRunMongo } from '../../../utils';
import { decisionCollectionName } from '../decisionCollectionName';
import { decisionType } from '../decisionType';
import { decisionRepositoryType } from './decisionRepositoryType';

export { buildDecisionRepository };

async function buildDecisionRepository(): Promise<decisionRepositoryType> {
  const runMongo = buildRunMongo<decisionType>(decisionCollectionName);

  return {
    async clear() {
      await runMongo(({ collection }) => collection.deleteMany({}));
    },

    async findAll() {
      return runMongo(async ({ collection }) => collection.find().toArray());
    },

    async findAllByDecisionIds(decisionIds) {
      return runMongo(({ collection }) => collection.find({ sourceId: { $in: decisionIds } }).toArray());
    },

    async findAllIds() {
      return runMongo(async ({ collection }) => {
        const decisionFieldsIds = await collection.find().project({ _id: 1 }).toArray();
        return decisionFieldsIds.map(({ _id }) => _id);
      });
    },

    async findAllIdsByLabelStatus(labelStatus) {
      return runMongo(async ({ collection }) => {
        const decisionFieldsIds = await collection.find({ labelStatus }).project({ _id: 1 }).toArray();
        return decisionFieldsIds.map(({ _id }) => _id);
      });
    },

    async findAllPseudonymisationToExport() {
      return runMongo(async ({ collection }) => {
        const pseudonymisations = await collection
          .find({ labelStatus: 'done' })
          .project({ sourceId: 1, pseudoText: 1 })
          .toArray();

        return pseudonymisations.map(({ sourceId, pseudoText }) => ({ decisionId: sourceId, pseudoText }));
      });
    },

    async findAllToPseudonymiseSince(date) {
      return runMongo(({ collection }) =>
        collection
          .find({
            dateCreation: { $gte: date.toISOString() as any },
            labelStatus: 'toBeTreated',
          })
          .toArray(),
      );
    },

    async findAllIdsWithoutLabelFields() {
      return runMongo(async ({ collection }) => {
        const decisionFieldsIds = await collection
          .find({ labelStatus: { $exists: false } })
          .project({ _id: 1 })
          .toArray();

        return decisionFieldsIds.map(({ _id }) => _id);
      });
    },

    async findById(id) {
      return runMongo(async ({ collection }) => {
        const result = await collection.findOne({ _id: id } as any);

        if (!result) {
          throw new Error(`No matching ${decisionCollectionName} for _id ${id}`);
        }

        return result;
      });
    },

    async findByDecisionId(decisionId) {
      return runMongo(async ({ collection }) => {
        const result = await collection.findOne({ sourceId: decisionId } as any);

        if (!result) {
          throw new Error(`No matching ${decisionCollectionName} for sourceId ${decisionId}`);
        }

        return result;
      });
    },

    async findBySourceIdAndSourceName(sourceId, sourceName) {
      return runMongo(async ({ collection }) => {
        const result = await collection.findOne({ sourceId, sourceName } as any);

        if (!result) {
          throw new Error(`No matching ${decisionCollectionName} for sourceId ${sourceId}`);
        }

        return result;
      });
    },

    async insert(decision) {
      await runMongo(({ collection }) => collection.insert(decision));
    },

    async updateById(id, decisionField) {
      await runMongo(({ collection }) => collection.updateOne({ _id: id }, { $set: decisionField }));
    },

    async updateByIds(ids, decisionField) {
      await runMongo(({ collection }) => collection.updateMany({ _id: { $in: ids } }, { $set: decisionField }));
    },
  };
}
