import { buildRunMongo } from '../../../utils';
import { decisionCollectionName } from '../decisionCollectionName';
import { decisionType, labelStatuses } from '../decisionType';
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

    async findAllByLabelStatusAndSourceIdsAndSourceName({ sourceIds, sourceName, labelStatus }) {
      return runMongo(async ({ collection }) =>
        collection.find({ sourceId: { $in: sourceIds }, sourceName, labelStatus }).toArray(),
      );
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

    async findAllBetween({ startDate, endDate, source, labelStatus }) {
      return runMongo(({ collection }) =>
        collection
          .find({
            dateDecision: { $gte: startDate.toISOString() as any, $lt: endDate.toISOString() as any },
            sourceName: source,
            labelStatus: labelStatus || { $in: labelStatuses },
          })
          .toArray(),
      );
    },

    async findAllBetweenDateCreation({ startDate, endDate, source, labelStatus }) {
      return runMongo(({ collection }) =>
        collection
          .find({
            dateCreation: { $gte: startDate.toISOString() as any, $lt: endDate.toISOString() as any },
            sourceName: source,
            labelStatus: labelStatus || { $in: labelStatuses },
          })
          .toArray(),
      );
    },

    async findAllBySourceAndJurisdictionBetween({ startDate, endDate, source, jurisdiction }) {
      const jurisdictionRegex = new RegExp(jurisdiction, 'i');
      return runMongo(({ collection }) =>
        collection
          .find({
            dateDecision: { $gte: startDate.toISOString() as any, $lt: endDate.toISOString() as any },
            sourceName: source,
            jurisdictionName: jurisdictionRegex,
          })
          .toArray(),
      );
    },

    async findAllBySourceAndJurisdictionAndChamberBetween({ startDate, endDate, source, jurisdiction, chamberId }) {
      return runMongo(({ collection }) =>
        collection
          .find({
            dateDecision: { $gte: startDate.toISOString() as any, $lt: endDate.toISOString() as any },
            sourceName: source,
            jurisdictionName: jurisdiction && new RegExp(jurisdiction, 'i'),
            chamberId: chamberId && new RegExp(chamberId, 'i'),
          })
          .toArray(),
      );
    },

    async findAllPublicBySourceAndJurisdictionAndChamberBetweenWithLabelStatus({
      startDate,
      endDate,
      source,
      jurisdiction,
      chamberId,
      labelStatus,
    }) {
      return runMongo(({ collection }) =>
        collection
          .find({
            dateDecision: { $gte: startDate.toISOString() as any, $lt: endDate.toISOString() as any },
            sourceName: source,
            jurisdictionName: jurisdiction && new RegExp(jurisdiction, 'i'),
            chamberId: chamberId && new RegExp(chamberId, 'i'),
            public: true,
            labelStatus,
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

    async findBySourceIdAndSourceName({ sourceId, sourceName }) {
      return runMongo(async ({ collection }) => {
        const result = await collection.findOne({ sourceId, sourceName });

        return result || undefined;
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
