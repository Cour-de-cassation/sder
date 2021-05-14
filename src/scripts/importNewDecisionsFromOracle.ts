import { environment } from '../environment';
import { decisionModule, rawJurinetModule, rawJuricaModule, genericCollectionType } from '../modules';
import { buildRunMongo } from '../utils';
import { parentPort } from 'worker_threads';

const decisions: genericCollectionType = decisionModule.collection;
const rawJurinet: genericCollectionType = rawJurinetModule.collection;
const rawJurica: genericCollectionType = rawJuricaModule.collection;

importNewDecisionsFromOracle();

async function importNewDecisionsFromOracle() {
  console.log(
    `Importing new decisions from ${environment.JURINET_DB_URL} to ${environment.SDER_DB_URL}/${environment.SDER_DB_NAME}`,
  );

  /*
  for (const collection of collections) {
    console.log(`Setting validation on collection ${collection.name}`);
    // await setValidation(collection);
    console.log(`Validation of collection ${collection.name} DONE`);
  }

  console.log(`Validation finished`);
  */

  if (parentPort) parentPort.postMessage('done');
  process.exit(0);

  /*
  async function setValidation(collection: genericCollectionType) {
    const runMongo = buildRunMongo(collection.name);

    await runMongo(({ db }) =>
      db.command({
        collMod: collection.name,
        validator: collection.validationSchema,
        validationLevel: 'moderate',
        validationAction: 'error',
      }),
    );
  }
  */
}
