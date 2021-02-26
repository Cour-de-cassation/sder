import { environment } from '../environment';
import { decisionModule, genericCollectionType } from '../modules';
import { buildMongo } from '../utils';

const collections: genericCollectionType[] = [decisionModule.collection];

setIndexesOnAllCollections();

async function setIndexesOnAllCollections() {
  console.log(`Connecting to MongoDb: ${environment.SDER_DB_URL}`);
  const db = await buildMongo();

  console.log(`Setting indexes on the ${environment.SDER_DB_NAME} DB`);
  for (const collection of collections) {
    console.log(`Setting indexes on collection ${collection.name}`);
    await setIndexes(collection);
    console.log(`Indexes of collection ${collection.name} DONE`);
  }

  console.log(`Indexes computation finished`);
  process.exit(0);

  async function setIndexes(collection: genericCollectionType) {
    const dbCollection = db.collection(collection.name);

    for (const index of collection.indexes) {
      await dbCollection.createIndex(index);
    }
  }
}
