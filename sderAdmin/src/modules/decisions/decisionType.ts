import { mongoIdType } from '../../utils';

export type { decisionType };

type decisionType = {
  _id: mongoIdType;
  _rev: number;
  analysis: {
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
  dateCreation: Date;
  dateDecision: Date;
  isLoadedInLabel: boolean;
  jurisdictionCode: string;
  jurisdictionId: string;
  jurisdictionName: string;
  labelTreatments: Array<{
    annotations: Array<{
      category: string;
      entityId: string;
      start: number;
      text: string;
    }>;
    source: string;
    order: number;
  }>;
  locked: string;
  originalText: string;
  parties: string;
  pseudoStatus: string;
  pseudoText: string;
  pubCategory: string;
  registerNumber: string;
  solution: string;
  sourceId: string;
  sourceName: string;
};
