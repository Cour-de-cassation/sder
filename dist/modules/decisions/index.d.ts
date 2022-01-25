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
        createDecision(decisionFields: Omit<decisionType, "_id" | "labelStatus" | "labelTreatments" | "_rev">): Promise<void>;
        fetchDecisionBySourceIdAndSourceName(sourceId: number, sourceName: string): Promise<decisionType | undefined>;
        fetchPseudonymisationsToExport(): Promise<{
            decisionId: number;
            pseudoText: string;
        }[]>;
        fetchPublicDecisionsBySourceAndJurisdictionsBetween({ startDate, endDate, source, jurisdictions, }: {
            startDate: Date;
            endDate: Date;
            source: string;
            jurisdictions: string[];
        }): Promise<decisionType[]>;
        fetchChainedJuricaDecisionsToPseudonymiseBetween({ startDate, endDate }: {
            startDate: Date;
            endDate: Date;
        }): Promise<decisionType[]>;
        fetchDecisionsToPseudonymiseBetween({ source, startDate, endDate, }: {
            source: string;
            startDate: Date;
            endDate: Date;
        }): Promise<decisionType[]>;
        deprecatedUpdateDecisionsLabelStatus({ decisionIds, labelStatus, }: {
            decisionIds: number[];
            labelStatus: import("./decisionType").labelStatusType;
        }): Promise<void>;
        updateDecisionsLabelStatus({ decisionIds, labelStatus, }: {
            decisionIds: import("bson").ObjectID[];
            labelStatus: import("./decisionType").labelStatusType;
        }): Promise<void>;
        depracatedUpdateDecisionPseudonymisation({ decisionId, decisionPseudonymisedText, labelTreatments, }: {
            decisionId: number;
            decisionPseudonymisedText: string;
            labelTreatments: import("./decisionType").labelTreatmentsType;
        }): Promise<void>;
        updateDecisionPseudonymisation({ decisionId, decisionPseudonymisedText, labelTreatments, }: {
            decisionId: import("bson").ObjectID;
            decisionPseudonymisedText: string;
            labelTreatments: import("./decisionType").labelTreatmentsType;
        }): Promise<void>;
    };
};
