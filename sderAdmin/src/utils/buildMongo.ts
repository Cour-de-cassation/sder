import { MongoClient, ObjectId } from 'mongodb';
import { environment } from '../environment';

export { areMongoIdEqual, buildMongo, buildObjectId };

export type { mongoIdType };

type mongoIdType = ObjectId;

async function buildMongo() {
  const client = await new MongoClient(environment.SDER_DB_URL, {
    useUnifiedTopology: true,
  }).connect();
  const dbName = environment.SDER_DB_NAME;

  return client.db(dbName);
}

function areMongoIdEqual(id1: mongoIdType, id2: mongoIdType): boolean {
  return id1.equals(id2);
}

function buildObjectId() {
  return new ObjectId();
}
