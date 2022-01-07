import { CONSTANTS } from '../../constants';
import { decisionType } from '../../modules/decisions';
import { juricaDecisionType } from '../../modules/juricaDecision';
import { cleanHTML } from './cleanHTML';

export { normalize };

async function normalize(
  document: juricaDecisionType,
  previousVersion?: decisionType,
  ignorePreviousContent?: boolean,
) {
  let originalText = undefined;
  let pseudoText = undefined;
  let pseudoStatus = document.IND_ANO;

  if (document.JDEC_HTML_SOURCE) {
    try {
      originalText = cleanHTML(document.JDEC_HTML_SOURCE);
    } catch (e) {
      console.warn(`JuricaUtils.Normalize: Could not properly clean the original text of document '${document._id}'.`);
      console.warn(e);
    }
  }

  if (document.HTMLA) {
    try {
      pseudoText = cleanHTML(document.HTMLA);
    } catch (e) {
      console.warn(
        `JuricaUtils.Normalize: Could not properly clean the pseudonymized text of document '${document._id}'.`,
      );
      console.warn(e);
    }
  }

  if (previousVersion && !ignorePreviousContent) {
    if (previousVersion.pseudoText) {
      pseudoText = previousVersion.pseudoText;
    }
    if (previousVersion.pseudoStatus) {
      pseudoStatus = previousVersion.pseudoStatus;
    }
  }

  let dateDecision = null;
  if (document.JDEC_DATE) {
    dateDecision = new Date();
    const dateDecisionElements = document.JDEC_DATE.split('-');
    dateDecision.setFullYear(parseInt(dateDecisionElements[0], 10));
    dateDecision.setMonth(parseInt(dateDecisionElements[1], 10) - 1);
    dateDecision.setDate(parseInt(dateDecisionElements[2], 10));
    dateDecision.setHours(0);
    dateDecision.setMinutes(0);
    dateDecision.setSeconds(0);
    dateDecision.setMilliseconds(0);
  }
  if (dateDecision && !isNaN(dateDecision.valueOf())) {
    console.warn(`JuricaUtils.Normalize: could not process decision date '${document.JDEC_DATE}'`);
    dateDecision = document.JDEC_DATE;
  }

  let dateCreation = null;
  if (document.JDEC_DATE_CREATION) {
    dateCreation = new Date();
    const dateCreationElements = document.JDEC_DATE_CREATION;
    dateCreation.setFullYear(parseInt(dateCreationElements.substring(0, 4), 10));
    dateCreation.setMonth(parseInt(dateCreationElements.substring(4, 6), 10) - 1);
    dateCreation.setDate(parseInt(dateCreationElements.substring(6), 10));
    dateCreation.setHours(0);
    dateCreation.setMinutes(0);
    dateCreation.setSeconds(0);
    dateCreation.setMilliseconds(0);
  }
  if (dateCreation && isNaN(dateCreation.valueOf())) {
    console.warn(`JuricaUtils.Normalize: could not process decision creation date '${document.JDEC_DATE_CREATION}'`);
    dateCreation = document.JDEC_DATE_CREATION;
  }

  const normalizedDecision = {
    _rev: previousVersion ? previousVersion._rev + 1 : 0,
    _version: parseFloat(CONSTANTS.MONGO_DECISIONS_VERSION),
    sourceId: document._id,
    sourceName: 'jurica',
    jurisdictionId: document.JDEC_ID_JURIDICTION,
    jurisdictionCode: document.JDEC_CODE_JURIDICTION,
    jurisdictionName: document.JDEC_JURIDICTION,
    chamberId: document.JDEC_CODE_AUTORITE,
    chamberName: document.JDEC_LIB_AUTORITE,
    registerNumber: `${document.JDEC_NUM_RG} ${document.JDEC_NUM_REGISTRE}`,
    pubCategory: document.JDEC_NOTICE_FORMAT,
    dateDecision: dateDecision?.toString(),
    dateCreation: dateCreation?.toString(),
    solution: document.JDEC_LIBELLE,
    originalText: originalText
      ? originalText
          .replace(/\*DEB[A-Z]*/gm, '')
          .replace(/\*FIN[A-Z]*/gm, '')
          .trim()
      : undefined,
    pseudoText: pseudoText
      ? pseudoText
          .replace(/\*DEB[A-Z]*/gm, '')
          .replace(/\*FIN[A-Z]*/gm, '')
          .trim()
      : undefined,
    pseudoStatus: pseudoStatus,
    appeals: [],
    analysis: {
      nature: undefined,
      target: undefined,
      link: undefined,
      source: undefined,
      doctrine: undefined,
      title: undefined,
      summary: undefined,
      reference: [],
      analyse: [],
    },
    parties: [],
    decatt: null,
    locked: false,
    labelStatus: pseudoText ? 'exported' : 'toBeTreated',
    labelTreatments: [] as any,
    zoning: undefined,
    occultation: {
      additionalTerms: '',
      categoriesToOmit: ['personneMorale', 'numeroSiretSiren', 'professionnelMagistratGreffier'],
    },
    publication: [],
    formation: undefined,
    blocOccultation: undefined,
    endCaseCode: document.JDEC_CODE || null,
    NACCode: document.JDEC_CODNAC || null,
    public:
      parseInt(document.JDEC_IND_DEC_PUB, 10) === 1
        ? true
        : parseInt(document.JDEC_IND_DEC_PUB, 10) === 0
        ? false
        : null,
  };

  if (previousVersion) {
    if (previousVersion.labelStatus) {
      normalizedDecision.labelStatus = previousVersion.labelStatus;
    }
    if (previousVersion.labelTreatments) {
      normalizedDecision.labelTreatments = previousVersion.labelTreatments;
    }
    if (previousVersion._version) {
      normalizedDecision._version = previousVersion._version;
    }
  }

  if (!normalizedDecision.originalText) {
    throw new Error(`JuricaUtils.Normalize: Document '${normalizedDecision.sourceId}' has no text.`);
  }

  return normalizedDecision;
}
