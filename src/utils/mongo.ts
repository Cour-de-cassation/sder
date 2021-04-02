import { Collection, MongoClient, ObjectId } from 'mongodb';
import { environment } from '../environment';

export { areMongoIdEqual, buildObjectId, buildRunMongo };

export type { mongoIdType };

type mongoIdType = ObjectId;

function buildRunMongo<T>(collectionName: string) {
  return async <U>(command: (collection: Collection<T>) => Promise<U>) => {
    const client = await new MongoClient(environment.SDER_DB_URL, {
      useUnifiedTopology: true,
    }).connect();
    const dbName = environment.SDER_DB_NAME;
    const db = client.db(dbName);
    const collection = db.collection<T>(collectionName);

    const output = await command(collection);

    await client.close();

    return output;
  };
}

function areMongoIdEqual(id1: mongoIdType, id2: mongoIdType): boolean {
  return id1.equals(id2);
}

function buildObjectId() {
  return new ObjectId();
}
