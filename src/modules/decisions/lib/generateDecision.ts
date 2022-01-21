import { idModule } from '../../id';
import { decisionType } from '../decisionType';

export { generateDecision };

const MAX_RAND_NUMBER = 1000000;

function generateDecision(decisionFields: Partial<decisionType> = {}): decisionType {
  return {
    _id: idModule.lib.buildId(),
    _rev: 0,
    _version: 0,
    analysis: {
      doctrine: `DOCTRINE_${Math.random()}`,
      link: `LINK_${Math.random()}`,
      reference: [],
      source: `SOURCE_${Math.random()}`,
      summary: `SUMMARY_${Math.random()}`,
      target: `TARGET_${Math.random()}`,
      title: [],
      analyse: [],
    },
    appeals: [],
    chamberId: `CHAMBER_ID_${Math.random()}`,
    chamberName: `CHAMBER_NAME_${Math.random()}`,
    dateCreation: new Date().toISOString(),
    dateDecision: new Date().toISOString(),
    decatt: undefined,
    jurisdictionCode: `JURISDICTION_CODE_${Math.random()}`,
    jurisdictionId: `JURISDICTION_ID_${Math.random()}`,
    jurisdictionName: `JURISDICTION_NAME_${Math.random()}`,
    labelStatus: 'toBeTreated',
    labelTreatments: [],
    locked: false,
    occultation: {
      additionalTerms: '',
      categoriesToOmit: [],
    },
    originalText: `ORIGINAL_TEXT_${Math.random()}`,
    parties: [`PARTIES_${Math.random()}`],
    pseudoStatus: `PSEUDO_STATUS_${Math.random()}`,
    pseudoText: `PSEUDO_TEXT_${Math.random()}`,
    pubCategory: `PUB_CATEGORY_${Math.random()}`,
    public: null,
    registerNumber: `REGISTER_NUMBER_${Math.random()}`,
    solution: `SOLUTION_${Math.random()}`,
    sourceId: Math.floor(Math.random() * MAX_RAND_NUMBER),
    sourceName: `SOURCE_NAME_${Math.random()}`,
    zoning: {
      introduction_subzonage: {
        publication: [],
      },
    },
    natureAffaireCivil: `NATURE_AFFAIRE_CIVIL_${Math.random()}`,
    natureAffairePenal: `NATURE_AFFAIRE_PENAL_${Math.random()}`,
    ...decisionFields,
  };
}
