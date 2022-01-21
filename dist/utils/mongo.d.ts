import { Db, Collection, ObjectId } from 'mongodb';
export { buildRunMongo };
export type { mongoIdType };
declare type mongoIdType = ObjectId;
declare function buildRunMongo<T>(collectionName: string): <U>(command: (param: {
    db: Db;
    collection: Collection<T>;
}) => Promise<U>) => Promise<U>;
