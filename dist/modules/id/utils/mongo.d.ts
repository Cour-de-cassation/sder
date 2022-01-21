import { ObjectId } from 'mongodb';
export { buildMongoId, areMongoIdEqual };
export type { mongoIdType };
declare type mongoIdType = ObjectId;
declare function buildMongoId(id?: string | mongoIdType): mongoIdType;
declare function areMongoIdEqual(id1: mongoIdType, id2: mongoIdType): boolean;
