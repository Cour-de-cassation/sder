import { mongoIdType } from './utils';
export type { idType, omitIdType };
declare type idType = mongoIdType;
declare type omitIdType<T> = Omit<T, '_id'>;
