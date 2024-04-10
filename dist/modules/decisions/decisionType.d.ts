import { mongoIdType } from '../../utils';
export { labelStatuses };
export type { decisionType, labelStatusType, labelTreatmentsType, publishStatusType };
declare type labelStatusType = 'toBeTreated' | 'loaded' | 'done' | 'exported' | 'blocked';
declare const labelStatuses: labelStatusType[];
declare type publishStatusType = 'toBePublished' | 'pending' | 'sucess' | 'failure_preparing' | 'failure_indexing' | 'blocked' | 'unpublished';
declare const publishStatuses: publishStatusType[];
declare type zoning = {
    zones?: {
        'introduction'?: {
            start: number;
            end: number;
        };
        'moyens'?: {
            start: number;
            end: number;
        };
        'expose du litige'?: {
            start: number;
            end: number;
        };
        'motivations'?: {
            start: number;
            end: number;
        };
        'dispositif'?: {
            start: number;
            end: number;
        };
        'moyens annexes'?: {
            start: number;
            end: number;
        };
    };
    introduction_subzonage?: {
        'n_arret'?: string;
        'formation'?: string;
        'publication'?: string[];
        'juridiction': string;
        'chambre': string;
        'pourvoi'?: string[];
        'composition'?: {
            start: number;
            end: number;
        };
    };
    visa?: string[];
    is_public?: number;
    is_public_text?: string[];
    arret_id: number;
};
declare type decisionType = {
    _id: mongoIdType;
    _rev: number;
    _version: number;
    analysis: {
        analyse: string[];
        doctrine: string;
        link: string;
        reference: Array<string>;
        source: string;
        summary: string;
        target: string;
        title: Array<string>;
    };
    appeals: Array<string>;
    chamberId: string;
    chamberName: string;
    dateCreation?: string;
    dateDecision?: string;
    decatt?: number[];
    jurisdictionCode: string;
    jurisdictionId: string;
    jurisdictionName: string;
    labelStatus: typeof labelStatuses[number];
    publishStatus?: typeof publishStatuses[number];
    labelTreatments: labelTreatmentsType;
    locked: boolean;
    occultation: {
        additionalTerms: string;
        categoriesToOmit: string[];
    };
    originalText: string;
    parties: Array<any>;
    pseudoStatus: string;
    pseudoText: string;
    pubCategory: string;
    public: boolean | null;
    registerNumber: string;
    numeroRoleGeneral?: string;
    solution: string;
    sourceId: number;
    sourceName: string;
    zoning?: {
        introduction_subzonage: {
            publication: string[];
        };
    };
    publication?: string[];
    formation?: string;
    blocOccultation?: number;
    natureAffaireCivil?: string;
    natureAffairePenal?: string;
    codeMatiereCivil?: string;
    NACCode?: string;
    endCaseCode?: string;
    originalTextZoning?: zoning;
    debatPublic?: boolean;
};
declare type labelTreatmentsType = Array<{
    annotations: Array<{
        category: string;
        entityId: string;
        start: number;
        text: string;
    }>;
    source: string;
    order: number;
}>;
