import { ObjectId } from 'mongodb';
export { areMongoIdEqual, buildMongo, buildObjectId };
export type { mongoIdType };
declare type mongoIdType = ObjectId;
declare function buildMongo(): Promise<import("mongodb").Db>;
declare function areMongoIdEqual(id1: mongoIdType, id2: mongoIdType): boolean;
declare function buildObjectId(): ObjectId;
