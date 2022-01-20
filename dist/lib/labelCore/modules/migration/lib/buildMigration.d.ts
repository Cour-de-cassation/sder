import { migrationType } from '../migrationType';
export { buildMigration };
declare function buildMigration(migrationFields: Omit<migrationType, 'creationDate'>): migrationType;
