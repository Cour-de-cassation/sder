export type { publicityInfoType };

type publicityInfoType = {
  _id: number;
  sourceDb: 'jurinet' | 'jurica';
  releasabilityStatus: 'releasable' | 'partiallyReleasable' | 'nonReleasable' | 'undetermined';
  jurisdiction: 'CC' | 'CA' | 'TJ';
  codeField: string;
  publicityStatus: 'public' | 'nonPublic' | 'unspecified';
};
