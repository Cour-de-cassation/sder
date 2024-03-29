export { getEnvironment };

function getEnvironment() {
  return {
    port: 54321,
    SDER_DB_URL: process.env.SDER_DB_URL || 'mongodb://dbsder:27017',
    SDER_DB_NAME: process.env.SDER_DB_NAME || 'SDER',
  };
}
