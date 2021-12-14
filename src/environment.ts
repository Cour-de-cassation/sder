export { getEnvironment };

const runModes = ['PREPROD', 'PROD'] as const;
type runModeType = typeof runModes[number];

function getEnvironment() {
  const RUN_MODE = process.env.RUN_MODE as 'PREPROD' | 'PROD' | undefined;
  if (RUN_MODE && runModes.includes(RUN_MODE)) {
    return environment[RUN_MODE];
  } else {
    throw new Error(`Found no environment for RUN_MODE: ${RUN_MODE}`);
  }
}

const environment: Record<runModeType, { port: number; SDER_DB_URL: string; SDER_DB_NAME: string }> = {
  PREPROD: {
    port: 54321,
    SDER_DB_URL: 'mongodb://127.0.0.1:27017',
    SDER_DB_NAME: 'SDER',
  },
  PROD: {
    port: 54321,
    SDER_DB_URL: 'mongodb://172.16.118.100:27017',
    SDER_DB_NAME: 'SDER',
  },
};
