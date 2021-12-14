import { mongoIdType } from '../../../utils';
import { decisionType } from '../decisionType';
export type { decisionRepositoryType };
declare type decisionRepositoryType = {
    clear: () => void;
    findAll: () => Promise<Array<decisionType>>;
    findAllByDecisionIds: (decisionIds: Array<decisionType['sourceId']>) => Promise<decisionType[]>;
    findAllByLabelStatusAndSourceIdsAndSourceName: (params: {
        sourceIds: decisionType['sourceId'][];
        sourceName: decisionType['sourceName'];
        labelStatuses: decisionType['labelStatus'][];
    }) => Promise<decisionType[]>;
    findAllIds: () => Promise<Array<decisionType['_id']>>;
    findAllIdsByLabelStatus: (labelStatus: decisionType['labelStatus']) => Promise<Array<decisionType['_id']>>;
    findAllPseudonymisationToExport: () => Promise<Array<{
        decisionId: decisionType['sourceId'];
        pseudoText: decisionType['pseudoText'];
    }>>;
    findAllBetween: (params: {
        startDate: Date;
        endDate: Date;
        source: string;
        labelStatus?: decisionType['labelStatus'];
    }) => Promise<decisionType[]>;
    findAllPublicBySourceAndJurisdictionBetween: (params: {
        startDate: Date;
        endDate: Date;
        source: string;
        jurisdiction: string;
        labelStatus: decisionType['labelStatus'];
    }) => Promise<decisionType[]>;
    findAllIdsWithoutLabelFields: () => Promise<Array<decisionType['_id']>>;
    findById: (id: mongoIdType) => Promise<decisionType>;
    findBySourceIdAndSourceName: (params: {
        sourceId: decisionType['sourceId'];
        sourceName: decisionType['sourceName'];
    }) => Promise<decisionType | undefined>;
    findByDecisionId: (decisionId: decisionType['sourceId']) => Promise<decisionType>;
    insert: (decision: decisionType) => Promise<void>;
    updateById: (id: mongoIdType, decisionField: Partial<decisionType>) => Promise<void>;
    updateByIds: (ids: mongoIdType[], decisionField: Partial<decisionType>) => Promise<void>;
};
