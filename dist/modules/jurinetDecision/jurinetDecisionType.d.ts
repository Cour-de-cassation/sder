export type { jurinetDecisionType };
declare type jurinetDecisionType = {
    _id: number;
    _titrage: Array<referenceType>;
    _analyse: Array<referenceType>;
    _partie: Array<referenceType>;
    _decatt: Array<number>;
    IND_ANO: string;
    XML: string;
    XMLA: string;
    TEXTE_VISE: string;
    RAPROCHEMENT: string;
    DOCTRINE: string;
    SOURCE: string;
    TYPE_ARRET: string;
    JURIDICTION: string;
    ID_CHAMBRE: string;
    CAT_PUB: string;
    DT_DECISION?: Date;
    DT_CREATION?: Date;
    ID_SOLUTION: string;
    NUM_DECISION: string;
};
declare type referenceType = any;
