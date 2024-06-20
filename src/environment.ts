export { getEnvironment };

function getEnvironment() {
  return {
    port: 54321,
    SDER_DB_URL: process.env.SDER_DB_URL || 'mongodb://localhost:55433',
    SDER_DB_NAME: process.env.SDER_DB_NAME || 'SDER',
  };
}
