export { getEnvironment };

function getEnvironment() {
  return {
    SDER_DB_URL: process.env.SDER_DB_URL || 'mongodb://dbdser:27017',
    SDER_DB_NAME: process.env.SDER_DB_NAME || 'SDER',
  }
}
