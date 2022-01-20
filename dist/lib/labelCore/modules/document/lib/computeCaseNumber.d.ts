import { documentType } from '../documentType';
export { computeCaseNumber };
declare function computeCaseNumber(document: Pick<documentType, 'decisionMetadata' | 'documentNumber'>): number;
