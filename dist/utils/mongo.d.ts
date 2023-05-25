import { Db, Collection, ObjectId, Document } from 'mongodb';
export { buildRunMongo };
export type { mongoIdType };
type mongoIdType = ObjectId;
declare function buildRunMongo<T extends Document>(collectionName: string): <U>(command: (param: {
    db: Db;
    collection: Collection<T>;
}) => Promise<U>) => Promise<U>;
