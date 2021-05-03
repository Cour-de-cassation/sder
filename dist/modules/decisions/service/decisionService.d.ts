import { decisionType, labelTreatmentsType } from '../decisionType';
export { decisionService };
declare const decisionService: {
    createDecision(decisionFields: Omit<decisionType, '_id' | '_rev' | 'labelStatus' | 'labelTreatments'>): Promise<void>;
    fetchDecisionBySourceIdAndSourceName(sourceId: decisionType['sourceId'], sourceName: decisionType['sourceName']): Promise<decisionType>;
    fetchPseudonymisationsToExport(): Promise<{
        decisionId: number;
        pseudoText: string;
    }[]>;
    fetchDecisionsToPseudonymise({ date }: {
        date: Date;
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
