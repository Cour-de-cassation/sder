import { decisionType, labelTreatmentsType } from '../decisionType';
export { decisionService };
declare const decisionService: {
    createDecision(decisionFields: Omit<decisionType, '_id' | '_rev' | 'labelStatus' | 'labelTreatments'>): Promise<void>;
    fetchPseudonymisationsToExport(): Promise<{
        decisionId: number;
        pseudoText: string;
    }[]>;
    fetchDecisionsToPseudonymise({ date }: {
        date: Date;
    }): Promise<decisionType[]>;
    updateDecisionsLabelStatus({ decisionIds, labelStatus, }: {
        decisionIds: number[];
        labelStatus: decisionType['labelStatus'];
    }): Promise<void>;
    updateDecisionPseudonymisation({ decisionId, decisionPseudonymisedText, labelTreatments, }: {
        decisionId: number;
        decisionPseudonymisedText: string;
        labelTreatments: labelTreatmentsType;
    }): Promise<void>;
};
