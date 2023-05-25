import { decisionType } from '../../modules/decisions';
import { jurinetDecisionType } from '../../modules/jurinetDecision';
export { normalize };
declare function normalize(document: jurinetDecisionType, previousVersion?: decisionType, ignorePreviousContent?: boolean): Promise<Omit<decisionType, "_id">>;
