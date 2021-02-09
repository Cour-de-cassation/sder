import { MongoClient, ObjectId } from 'mongodb';
import { environment } from '../environment';

export { buildMongo };

export type { mongoIdType };

type mongoIdType = ObjectId;

async function buildMongo() {
  const client = await new MongoClient(environment.SDER_DB_URL, {
    useUnifiedTopology: true,
  }).connect();
  const dbName = environment.SDER_DB_NAME;

  return client.db(dbName);
}
