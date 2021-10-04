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
        createDecision(decisionFields: Pick<decisionType, "public" | "_version" | "analysis" | "appeals" | "chamberId" | "chamberName" | "dateCreation" | "dateDecision" | "decatt" | "jurisdictionCode" | "jurisdictionId" | "jurisdictionName" | "locked" | "occultation" | "originalText" | "parties" | "pseudoStatus" | "pseudoText" | "pubCategory" | "registerNumber" | "solution" | "sourceId" | "sourceName" | "zoning" | "publication" | "formation" | "blocOccultation">): Promise<void>;
        fetchDecisionBySourceIdAndSourceName(sourceId: number, sourceName: string): Promise<decisionType | undefined>;
        fetchPseudonymisationsToExport(): Promise<{
            decisionId: number;
            pseudoText: string;
        }[]>;
        fetchPublicDecisionsBySourceAndJurisdictionsBetween({ startDate, endDate, source, jurisdictions, }: {
            startDate: Date;
            endDate?: Date | undefined;
            source: string;
            jurisdictions: string[];
        }): Promise<decisionType[]>;
        fetchChainedJuricaDecisionsToPseudonymiseBetween({ startDate, endDate, }: {
            startDate: Date;
            endDate?: Date | undefined;
        }): Promise<decisionType[]>;
        fetchDecisionsToPseudonymiseBetween({ source, startDate, endDate, }: {
            source: string;
            startDate: Date;
            endDate?: Date | undefined;
        }): Promise<decisionType[]>;
        deprecatedUpdateDecisionsLabelStatus({ decisionIds, labelStatus, }: {
            decisionIds: number[];
            labelStatus: "done" | "toBeTreated" | "loaded" | "exported";
        }): Promise<void>;
        updateDecisionsLabelStatus({ decisionIds, labelStatus, }: {
            decisionIds: import("bson").ObjectId[];
            labelStatus: "done" | "toBeTreated" | "loaded" | "exported";
        }): Promise<void>;
        depracatedUpdateDecisionPseudonymisation({ decisionId, decisionPseudonymisedText, labelTreatments, }: {
            decisionId: number;
            decisionPseudonymisedText: string;
            labelTreatments: import("./decisionType").labelTreatmentsType;
        }): Promise<void>;
        updateDecisionPseudonymisation({ decisionId, decisionPseudonymisedText, labelTreatments, }: {
            decisionId: import("bson").ObjectId;
            decisionPseudonymisedText: string;
            labelTreatments: import("./decisionType").labelTreatmentsType;
        }): Promise<void>;
    };
};
