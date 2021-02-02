import { MongoClient } from 'mongodb';
import { collectionType, decisionsCollection } from '../collections';

const SDER_DB_URL = 'mongodb://bkpanonym:27017';
const SDER_DB_NAME = 'SDER';

const collections = [decisionsCollection];

setValidationOnAllCollections();

async function setValidationOnAllCollections() {
  console.log(`Connecting to MongoDb: ${SDER_DB_URL}`);
  const mongo = await new MongoClient(SDER_DB_URL, {
    useUnifiedTopology: true,
  }).connect();

  console.log(`Setting validation on the ${SDER_DB_NAME} DB`);
  const db = mongo.db(SDER_DB_NAME);

  for (const collection of collections) {
    console.log(`Setting validation on collection ${collection.name}`);
    await setValidation(collection);
    console.log(`Validation of collection ${collection.name} DONE`);
  }

  console.log(`Validation finished`);
  process.exit(0);

  async function setValidation(collection: collectionType) {
    await db.command({
      collMod: collection.name,
      validator: collection.validationSchema,
      validationLevel: 'moderate',
      validationAction: 'error',
    });
  }
}
