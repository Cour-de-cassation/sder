import { filterKeysType } from './utilityTypes';
export type { filterNetworkKeysType };
declare type filterNetworkKeysType<T> = filterKeysType<T, {
    network: true;
}>;
