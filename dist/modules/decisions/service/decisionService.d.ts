import { decisionType, labelTreatmentsType } from '../decisionType';
export { decisionService };
declare const decisionService: {
    createDecision(decisionFields: Omit<decisionType, '_id' | '_rev' | 'labelStatus' | 'labelTreatments'>): Promise<void>;
    fetchDecisionBySourceIdAndSourceName(sourceId: decisionType['sourceId'], sourceName: decisionType['sourceName']): Promise<decisionType | undefined>;
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
        source: decisionType['sourceName'];
        startDate: Date;
        endDate: Date;
    }): Promise<decisionType[]>;
    deprecatedUpdateDecisionsLabelStatus({ decisionIds, labelStatus, }: {
        decisionIds: number[];
        labelStatus: decisionType['labelStatus'];
    }): Promise<void>;
    updateDecisionsLabelStatus({ decisionIds, labelStatus, }: {
        decisionIds: Array<decisionType['_id']>;
        labelStatus: decisionType['labelStatus'];
    }): Promise<void>;
    depracatedUpdateDecisionPseudonymisation({ decisionId, decisionPseudonymisedText, labelTreatments, }: {
        decisionId: number;
        decisionPseudonymisedText: string;
        labelTreatments: labelTreatmentsType;
    }): Promise<void>;
    updateDecisionPseudonymisation({ decisionId, decisionPseudonymisedText, labelTreatments, }: {
        decisionId: decisionType['_id'];
        decisionPseudonymisedText: string;
        labelTreatments: labelTreatmentsType;
    }): Promise<void>;
};
