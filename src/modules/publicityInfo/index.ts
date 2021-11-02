import { publicityInfoType } from './types';
import { converter } from './lib';

export type { publicityInfoType };

export { publicityInfoModule };

const publicityInfoModule = {
  lib: {
    converter,
  },
};
