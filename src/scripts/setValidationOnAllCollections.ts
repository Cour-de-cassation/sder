import { collectionType, decisionsCollection } from '../collections';
import { environment } from '../environment';
import { buildMongo } from '../utils';

const collections = [decisionsCollection];

setValidationOnAllCollections();

async function setValidationOnAllCollections() {
  console.log(`Connecting to MongoDb: ${environment.SDER_DB_URL}`);
  const db = await buildMongo();

  console.log(`Setting validation on the ${environment.SDER_DB_NAME} DB`);
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
