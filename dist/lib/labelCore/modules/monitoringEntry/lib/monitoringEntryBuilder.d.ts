import { fetchedMonitoringEntryType } from '../monitoringEntryType';
export { monitoringEntryBuilder };
declare const monitoringEntryBuilder: {
    buildFetchedMonitoringEntry: typeof buildFetchedMonitoringEntry;
};
declare function buildFetchedMonitoringEntry({ action, documentId, origin, }: Pick<fetchedMonitoringEntryType, 'action' | 'documentId' | 'origin'>): fetchedMonitoringEntryType;
