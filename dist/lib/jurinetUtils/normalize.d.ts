import { decisionType } from '../../modules/decisions';
import { jurinetDecisionType } from '../../modules/jurinetDecision';
export { normalize };
declare function normalize(document: jurinetDecisionType, previousVersion: decisionType, ignorePreviousContent: boolean): Promise<Pick<decisionType, "labelTreatments" | "_rev" | "_version" | "analysis" | "appeals" | "chamberId" | "chamberName" | "dateCreation" | "dateDecision" | "decatt" | "jurisdictionCode" | "jurisdictionId" | "jurisdictionName" | "labelStatus" | "locked" | "occultation" | "originalText" | "parties" | "pseudoStatus" | "pseudoText" | "pubCategory" | "registerNumber" | "solution" | "sourceId" | "sourceName" | "zoning">>;
