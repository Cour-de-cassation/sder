import { getEnvironment } from '../environment';
import { decisionModule, genericCollectionType } from '../modules';
import { buildRunMongo } from '../utils';

const collections: genericCollectionType[] = [decisionModule.collection];

setIndexesOnAllCollections();

async function setIndexesOnAllCollections() {
  const environment = getEnvironment();
  console.log(`Connecting to MongoDb: ${environment.SDER_DB_URL}`);

  console.log(`Setting indexes on the ${environment.SDER_DB_NAME} DB`);
  for (const collection of collections) {
    console.log(`Setting indexes on collection ${collection.name}`);
    await setIndexes(collection);
    console.log(`Indexes of collection ${collection.name} DONE`);
  }

  console.log(`Indexes computation finished`);
  process.exit(0);

  async function setIndexes(collection: genericCollectionType) {
    const runMongo = buildRunMongo(collection.name);

    for (const index of collection.indexes) {
      await runMongo(({ collection }) => collection.createIndex(index));
    }
  }
}
