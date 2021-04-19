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
        createDecision(decisionFields: Pick<decisionType, "analysis" | "appeals" | "chamberId" | "chamberName" | "dateCreation" | "dateDecision" | "jurisdictionCode" | "jurisdictionId" | "jurisdictionName" | "locked" | "originalText" | "parties" | "pseudoStatus" | "pseudoText" | "pubCategory" | "registerNumber" | "solution" | "sourceId" | "sourceName" | "zoning">): Promise<void>;
        fetchPseudonymisationsToExport(): Promise<{
            decisionId: number;
            pseudoText: string;
        }[]>;
        fetchDecisionsToPseudonymise({ date }: {
            date: Date;
        }): Promise<decisionType[]>;
        deprecatedUpdateDecisionsLabelStatus({ decisionIds, labelStatus, }: {
            decisionIds: number[];
            labelStatus: "done" | "toBeTreated" | "loaded" | "exported";
        }): Promise<void>;
        updateDecisionsLabelStatus({ decisionIds, labelStatus, }: {
            decisionIds: import("bson").ObjectId[];
            labelStatus: "done" | "toBeTreated" | "loaded" | "exported";
        }): Promise<void>;
        updateDecisionPseudonymisation({ decisionId, decisionPseudonymisedText, labelTreatments, }: {
            decisionId: number;
            decisionPseudonymisedText: string;
            labelTreatments: import("./decisionType").labelTreatmentsType;
        }): Promise<void>;
    };
};
