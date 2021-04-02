import { Db, Collection, ObjectId } from 'mongodb';
export { areMongoIdEqual, buildObjectId, buildRunMongo };
export type { mongoIdType };
declare type mongoIdType = ObjectId;
declare function buildRunMongo<T>(collectionName: string): <U>(command: (param: {
    db: Db;
    collection: Collection<T>;
}) => Promise<U>) => Promise<U>;
declare function areMongoIdEqual(id1: mongoIdType, id2: mongoIdType): boolean;
declare function buildObjectId(): ObjectId;
