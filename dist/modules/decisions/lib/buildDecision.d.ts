import { decisionType } from '../decisionType';
export { buildDecision };
declare function buildDecision(decisionFields: Omit<decisionType, '_id' | 'labelTreatments'>): decisionType;
