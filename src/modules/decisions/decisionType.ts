import { mongoIdType } from '../../utils';

export type { decisionType, labelTreatmentsType };

type decisionType = {
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
  labelStatus: 'toBeTreated' | 'loaded' | 'done' | 'exported';
  labelTreatments: labelTreatmentsType;
  locked: false;
  occultation: {
    additionalTerms: string;
    categoriesToOmit: string[];
  };
  originalText: string;
  parties: string[];
  pseudoStatus: string;
  pseudoText: string;
  pubCategory: string;
  registerNumber: string;
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
};

type labelTreatmentsType = Array<{
  annotations: Array<{
    category: string;
    entityId: string;
    start: number;
    text: string;
  }>;
  source: string;
  order: number;
}>;
