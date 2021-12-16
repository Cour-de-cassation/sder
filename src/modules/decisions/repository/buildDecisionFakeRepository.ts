import { areMongoIdEqual } from '../../../utils';
import { decisionType } from '../decisionType';
import { decisionRepositoryType } from './decisionRepositoryType';

export { buildDecisionFakeRepository };

const collectionName = 'decisions';
let collection = [] as decisionType[];

async function buildDecisionFakeRepository(): Promise<decisionRepositoryType> {
  return {
    async clear() {
      collection = [];
    },

    async findAll() {
      return collection;
    },

    async findAllByDecisionIds(decisionIds) {
      return collection.filter((decision) => decisionIds.includes(decision.sourceId));
    },

    async findAllByLabelStatusAndSourceIdsAndSourceName({ sourceIds, sourceName, labelStatus }) {
      return collection.filter(
        (decision) =>
          sourceIds.includes(decision.sourceId) &&
          decision.sourceName === sourceName &&
          labelStatus === decision.labelStatus,
      );
    },

    async findAllIds() {
      return collection.map((decision) => decision._id);
    },

    async findAllIdsByLabelStatus(labelStatus) {
      return collection.filter((decision) => decision.labelStatus === labelStatus).map((decision) => decision._id);
    },

    async findAllPseudonymisationToExport() {
      return collection
        .filter((decision) => decision.labelStatus === 'done')
        .map(({ sourceId, pseudoText }) => ({ decisionId: sourceId, pseudoText }));
    },

    async findAllBetween({ startDate, endDate, source }) {
      return collection.filter(
        (decision) =>
          decision.dateCreation &&
          new Date(decision.dateCreation) >= startDate &&
          decision.dateCreation &&
          new Date(decision.dateCreation) < endDate &&
          decision.sourceName === source,
      );
    },

    async findAllPublicBySourceAndJurisdictionBetween({ startDate, endDate, source, jurisdiction, labelStatus }) {
      const jurisdictionRegex = new RegExp(jurisdiction, 'i');

      return collection.filter(
        (decision) =>
          decision.labelStatus === labelStatus &&
          !!decision.public &&
          decision.dateCreation &&
          new Date(decision.dateCreation) >= startDate &&
          decision.dateCreation &&
          new Date(decision.dateCreation) < endDate &&
          decision.sourceName === source &&
          jurisdictionRegex.test(decision.jurisdictionName),
      );
    },

    async findAllIdsWithoutLabelFields() {
      return collection.filter((decision) => decision.labelStatus === undefined).map((decision) => decision._id);
    },

    async findById(id) {
      const result = collection.find((decision) => areMongoIdEqual(decision._id, id));

      if (!result) {
        throw new Error(`No matching ${collectionName} for _id ${id}`);
      }

      return result;
    },

    async findBySourceIdAndSourceName({ sourceId, sourceName }) {
      return collection.find((decision) => decision.sourceId === sourceId && decision.sourceName === sourceName);
    },

    async findByDecisionId(decisionId) {
      const result = collection.find((decision) => decision.sourceId === decisionId);

      if (!result) {
        throw new Error(`No matching ${collectionName} for sourceId ${decisionId}`);
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
