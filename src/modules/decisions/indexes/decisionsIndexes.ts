export { decisionsIndexes };

const decisionsIndexes = [
  { labelStatus: 1 } as const,
  { sourceId: 1 } as const,
  { sourceId: 1, sourceName: 1 } as const,
  { dateCreation: 1, sourceName: 1 } as const,
];
