import { collectionType } from '../collectionType';
import { decisionType, labelStatusType, labelTreatmentsType, publishStatusType } from './decisionType';
import { buildDecision, generateDecision } from './lib';
export { decisionModule };
export type { decisionType, labelStatusType, labelTreatmentsType, publishStatusType };
declare const decisionModule: {
    buildRepository: typeof import("./repository/buildDecisionFakeRepository").buildDecisionFakeRepository;
    collection: collectionType<decisionType>;
    lib: {
        buildDecision: typeof buildDecision;
        generateDecision: typeof generateDecision;
    };
    service: {
        createDecision(decisionFields: Pick<decisionType, "public" | "_version" | "analysis" | "appeals" | "chamberId" | "chamberName" | "dateCreation" | "dateDecision" | "decatt" | "jurisdictionCode" | "jurisdictionId" | "jurisdictionName" | "publishStatus" | "locked" | "occultation" | "originalText" | "parties" | "pseudoStatus" | "pseudoText" | "pubCategory" | "registerNumber" | "numeroRoleGeneral" | "solution" | "sourceId" | "sourceName" | "zoning" | "publication" | "formation" | "blocOccultation" | "natureAffaireCivil" | "natureAffairePenal" | "codeMatiereCivil" | "NACCode" | "endCaseCode" | "originalTextZoning" | "debatPublic">): Promise<void>;
        fetchCourtDecisionById(id: import("bson").ObjectId): Promise<decisionType>;
        fetchDecisionBySourceIdAndSourceName(sourceId: number, sourceName: string): Promise<decisionType | undefined>;
        fetchPseudonymisationsToExport(): Promise<{
            decisionId: number;
            pseudoText: string;
        }[]>;
        fetchAllDecisionsBySourceAndJurisdictionsBetween({ startDate, endDate, source, jurisdictions, }: {
            startDate: Date;
            endDate: Date;
            source: string;
            jurisdictions: string[];
        }): Promise<decisionType[]>;
        fetchAllDecisionsBySourceAndJurisdictionsAndChambersBetween({ startDate, endDate, source, jurisdictions, chambers, }: {
            startDate: Date;
            endDate: Date;
            source: string;
            jurisdictions: string[];
            chambers: string[];
        }): Promise<decisionType[]>;
        fetchPublicDecisionsBySourceAndJurisdictionsAndChambersBetween({ startDate, endDate, source, jurisdictions, chambers, }: {
            startDate: Date;
            endDate: Date;
            source: string;
            jurisdictions: string[];
            chambers: string[];
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
        fetchDecisionsToPseudonymiseBetweenDateCreation({ source, startDate, endDate, }: {
            source: string;
            startDate: Date;
            endDate: Date;
        }): Promise<decisionType[]>;
        deprecatedUpdateDecisionsLabelStatus({ decisionIds, labelStatus, }: {
            decisionIds: number[];
            labelStatus: labelStatusType;
        }): Promise<void>;
        updateDecisionsLabelStatus({ decisionIds, labelStatus, }: {
            decisionIds: import("bson").ObjectId[];
            labelStatus: labelStatusType;
        }): Promise<void>;
        depracatedUpdateDecisionPseudonymisation({ decisionId, decisionPseudonymisedText, labelTreatments, }: {
            decisionId: number;
            decisionPseudonymisedText: string;
            labelTreatments: labelTreatmentsType;
        }): Promise<void>;
        updateDecisionPseudonymisation({ decisionId, decisionPseudonymisedText, labelTreatments, publishStatus, }: {
            decisionId: import("bson").ObjectId;
            decisionPseudonymisedText: string;
            labelTreatments: labelTreatmentsType;
            publishStatus?: "pending" | "blocked" | "toBePublished" | "sucess" | "failure_preparing" | "failure_indexing" | "unpublished" | undefined;
        }): Promise<void>;
    };
};
