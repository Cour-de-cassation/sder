import { CONSTANTS } from '../../constants';
import { decisionModule, decisionType } from '../../modules/decisions';
import { jurinetDecisionType } from '../../modules/jurinetDecision';
import { zoningUtils } from '../zoningUtils';
import { cleanXml } from './cleanXml';
import { xmlToJson } from './xmlToJson';

export { normalize };

async function normalize(document: jurinetDecisionType, previousVersion: decisionType, ignorePreviousContent: boolean) {
  let cleanedJson;
  let originalText = '';
  let pseudoText = '';
  let pseudoStatus = document.IND_ANO;

  try {
    const cleanedXml = cleanXml(document.XML);
    cleanedJson = xmlToJson(cleanedXml, {
      filter: false,
      htmlDecode: true,
      toLowerCase: true,
    });
    originalText = cleanedJson.texte_arret;
  } catch (ignore) {}

  try {
    const cleanedXmlAnonymized = cleanXml(document.XMLA);
    const cleanedJsonAnonymized = xmlToJson(cleanedXmlAnonymized, {
      filter: false,
      htmlDecode: true,
      toLowerCase: true,
    });
    pseudoText = cleanedJsonAnonymized.texte_arret;
  } catch (ignore) {}

  if (previousVersion && !ignorePreviousContent) {
    if (previousVersion.pseudoText) {
      pseudoText = previousVersion.pseudoText;
    }
    if (previousVersion.pseudoStatus) {
      pseudoStatus = previousVersion.pseudoStatus;
    }
  }

  const normalizedDecision: Omit<decisionType, '_id'> = decisionModule.lib.buildDecision({
    _rev: previousVersion ? previousVersion._rev + 1 : 0,
    _version: parseFloat(CONSTANTS.MONGO_DECISIONS_VERSION),
    sourceId: document._id,
    sourceName: 'jurinet',
    jurisdictionCode: document.TYPE_ARRET,
    jurisdictionId: '',
    jurisdictionName: document.JURIDICTION,
    chamberId: document.ID_CHAMBRE,
    chamberName: '',
    registerNumber: document.NUM_DECISION,
    pubCategory: document.CAT_PUB,
    dateDecision: document.DT_DECISION ? document.DT_DECISION.toISOString() : undefined,
    dateCreation: document.DT_CREATION ? document.DT_CREATION.toISOString() : undefined,
    solution: document.ID_SOLUTION,
    originalText: originalText
      ? originalText
          .replace(/\*DEB[A-Z]*/gm, '')
          .replace(/\*FIN[A-Z]*/gm, '')
          .trim()
      : '',
    pseudoText: pseudoText
      ? pseudoText
          .replace(/\*DEB[A-Z]*/gm, '')
          .replace(/\*FIN[A-Z]*/gm, '')
          .trim()
      : '',
    pseudoStatus: pseudoStatus,
    appeals: [],
    analysis: {
      analyse: [],
      title: [],
      summary: '',
      doctrine: document.DOCTRINE,
      link: document.RAPROCHEMENT,
      target: document.TEXTE_VISE,
      reference: [],
      source: document.SOURCE,
    },
    parties: [],
    decatt: undefined,
    locked: false,
    labelStatus: pseudoText ? 'exported' : 'toBeTreated',
    zoning: undefined,
  });

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

  if (cleanedJson && cleanedJson.numpourvois && cleanedJson.numpourvois[0] && cleanedJson.numpourvois[0].numpourvoi) {
    normalizedDecision.appeals = cleanedJson.numpourvois[0].numpourvoi[0]['$value'].split(',');
  }

  if (cleanedJson && cleanedJson.analyses && cleanedJson.analyses[0].analyse) {
    normalizedDecision.analysis.title = cleanedJson.analyses[0].analyse[0].titre_principal
      .split('*')
      .map((x: string) => x.trim())
      .filter((x: string) => x.length > 0);
    normalizedDecision.analysis.summary = cleanedJson.analyses[0].analyse[0].sommaire;
  }

  if (document._titrage && document._titrage.length) {
    document._titrage.forEach((reference) => {
      const normalizedReference: any = [];
      for (const key in reference) {
        switch (key) {
          case 'ID_DOCUMENT':
          case 'NUM_ANALYSE':
          case 'NUM_TITREREFERENCE':
            break;
          default:
            if (reference[key] && typeof reference[key] === 'string') {
              normalizedReference.push(reference[key].replace(/\*/gim, '').trim());
            } else {
              normalizedReference.push(reference[key]);
            }
            break;
        }
      }
      if (normalizedReference) {
        normalizedDecision.analysis.reference.push(normalizedReference);
      }
    });
  }

  if (document._analyse && document._analyse.length) {
    document._analyse.forEach((reference) => {
      const normalizedReference: any = [];
      for (const key in reference) {
        switch (key) {
          case 'ID_DOCUMENT':
          case 'NUM_ANALYSE':
          case 'NUM_TITREREFERENCE':
            break;
          default:
            if (reference[key] && typeof reference[key] === 'string') {
              normalizedReference.push(reference[key].replace(/\*/gim, '').trim());
            } else {
              normalizedReference.push(reference[key]);
            }
            break;
        }
      }
      if (normalizedReference) {
        normalizedDecision.analysis.analyse.push(normalizedReference);
      }
    });
  }

  if (document._partie && document._partie.length) {
    document._partie.forEach((reference) => {
      const normalizedReference: any = [];
      for (const key in reference) {
        switch (key) {
          case 'ID_DOCUMENT':
            break;
          default:
            if (reference[key] && typeof reference[key] === 'string') {
              normalizedReference.push(reference[key].replace(/\*/gim, '').trim());
            } else {
              normalizedReference.push(reference[key]);
            }
            break;
        }
      }
      if (normalizedReference) {
        normalizedDecision.parties.push(normalizedReference);
      }
    });
  }

  if (document._decatt && document._decatt.length > 0) {
    normalizedDecision.decatt = document._decatt;
  }

  if (normalizedDecision.pseudoText) {
    try {
      const zoning = await zoningUtils.getZones(
        normalizedDecision.sourceId,
        normalizedDecision.sourceName,
        normalizedDecision.pseudoText,
      );
      if (zoning && !zoning.detail) {
        normalizedDecision.zoning = zoning;
      }
    } catch (e) {
      normalizedDecision.zoning = undefined;
    }
  }

  if (!normalizedDecision.originalText) {
    throw new Error(`JurinetUtils.Normalize: Document '${normalizedDecision.sourceId}' has not text.`);
  }

  return normalizedDecision;
}
