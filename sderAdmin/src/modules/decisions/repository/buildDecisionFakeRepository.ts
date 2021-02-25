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

    async findAllByDecisionIds(decisionIds) {
      return collection.filter((decision) => decisionIds.includes(decision.sourceId));
    },

    async findAllIds() {
      return collection.map((decision) => decision._id);
    },

    async findAllPseudonymisationToExport() {
      return collection
        .filter((decision) => decision.labelStatus === 'done')
        .map(({ sourceId, pseudoText }) => ({ documentId: sourceId, pseudoText }));
    },

    async findAllToPseudonymiseSince(date) {
      return collection.filter(
        (decision) =>
          decision.dateCreation >= date && (decision.labelStatus === 'toBeTreated' || decision.pseudoText === ''),
      );
    },

    async findById(id) {
      const result = collection.find((decision) => areMongoIdEqual(decision._id, id));

      if (!result) {
        throw new Error(`No matching ${collectionName} for _id ${id}`);
      }

      return result;
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
