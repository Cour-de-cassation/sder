import { collectionType } from '../collectionType';
import { decisionType } from './decisionType';
import { buildDecision, generateDecision } from './lib';
export { decisionModule };
export type { decisionType };
declare const decisionModule: {
    buildRepository: typeof import("./repository/buildDecisionFakeRepository").buildDecisionFakeRepository;
    collection: collectionType<decisionType>;
    lib: {
        buildDecision: typeof buildDecision;
        generateDecision: typeof generateDecision;
    };
    service: {
        createDecision(decisionFields: Pick<decisionType, "analysis" | "appeals" | "chamberId" | "chamberName" | "dateCreation" | "dateDecision" | "jurisdictionCode" | "jurisdictionId" | "jurisdictionName" | "locked" | "originalText" | "parties" | "pseudoStatus" | "pseudoText" | "pubCategory" | "registerNumber" | "solution" | "sourceId" | "sourceName">): Promise<void>;
        fetchPseudonymisationsToExport(): Promise<{
            decisionId: string;
            pseudoText: string;
        }[]>;
        fetchDecisionsToPseudonymise({ date }: {
            date: Date;
        }): Promise<decisionType[]>;
        updateDecisionsLabelStatus({ decisionIds, labelStatus, }: {
            decisionIds: string[];
            labelStatus: "done" | "toBeTreated" | "loaded" | "exported";
        }): Promise<void>;
        updateDecisionPseudonymisation({ decisionId, decisionPseudonymisedText, labelTreatments, }: {
            decisionId: string;
            decisionPseudonymisedText: string;
            labelTreatments: import("./decisionType").labelTreatmentsType;
        }): Promise<void>;
    };
};
