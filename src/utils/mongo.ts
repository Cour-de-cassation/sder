import { Db, Collection, MongoClient, ObjectId } from 'mongodb';
import { getEnvironment } from '../environment';

export { buildRunMongo };

export type { mongoIdType };

type mongoIdType = ObjectId;

function buildRunMongo<T>(collectionName: string) {
  const environment = getEnvironment();
  return async <U>(command: (param: { db: Db; collection: Collection<T> }) => Promise<U>) => {
    const client = await new MongoClient(environment.SDER_DB_URL).connect();
    const dbName = environment.SDER_DB_NAME;
    const db = client.db(dbName);
    const collection = db.collection<T>(collectionName);

    const output = await command({ db, collection });

    await client.close();

    return output;
  };
}
