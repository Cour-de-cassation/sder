export {normalize}

function normalize(document, previousVersion, ignorePreviousContent) {
    let cleanedXml = null;
    let cleanedXmla = null;
    let originalText = undefined;
    let pseudoText = undefined;
    let pseudoStatus = document.IND_ANO;

    try {
      cleanedXml = JurinetUtils.CleanXML(document.XML);
      cleanedXml = JurinetUtils.XMLToJSON(cleanedXml, {
        filter: false,
        htmlDecode: true,
        toLowerCase: true,
      });
      originalText = cleanedXml.texte_arret;
    } catch (ignore) {}

    try {
      cleanedXmla = JurinetUtils.CleanXML(document.XMLA);
      cleanedXmla = JurinetUtils.XMLToJSON(cleanedXmla, {
        filter: false,
        htmlDecode: true,
        toLowerCase: true,
      });
      pseudoText = cleanedXmla.texte_arret;
    } catch (ignore) {}

    if (previousVersion && !ignorePreviousContent) {
      if (previousVersion.pseudoText) {
        pseudoText = previousVersion.pseudoText;
      }
      if (previousVersion.pseudoStatus) {
        pseudoStatus = previousVersion.pseudoStatus;
      }
    }

    let normalizedDecision = {
      _rev: previousVersion ? previousVersion._rev + 1 : 0,
      _version: parseFloat(process.env.MONGO_DECISIONS_VERSION),
      sourceId: document._id,
      sourceName: 'jurinet',
      jurisdictionId: undefined,
      jurisdictionCode: document.TYPE_ARRET,
      jurisdictionName: document.JURIDICTION,
      chamberId: document.ID_CHAMBRE,
      chamberName: undefined,
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
        target: document.TEXTE_VISE,
        link: document.RAPROCHEMENT,
        source: document.SOURCE,
        doctrine: document.DOCTRINE,
        title: undefined,
        summary: undefined,
        reference: [],
        analyse: [],
      },
      parties: [],
      decatt: null,
      locked: false,
      labelStatus: pseudoText ? 'exported' : 'toBeTreated',
      labelTreatments: [],
      zoning: undefined,
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

    if (cleanedXml && cleanedXml.numpourvois && cleanedXml.numpourvois[0] && cleanedXml.numpourvois[0].numpourvoi) {
      normalizedDecision.appeals = cleanedXml.numpourvois[0].numpourvoi[0]['$value'].split(',');
    }

    if (cleanedXml && cleanedXml.analyses && cleanedXml.analyses[0].analyse) {
      normalizedDecision.analysis.title = cleanedXml.analyses[0].analyse[0].titre_principal
        .split('*')
        .map((x) => {
          return x.trim();
        })
        .filter((x) => {
          return x.length > 0;
        });
      normalizedDecision.analysis.summary = cleanedXml.analyses[0].analyse[0].sommaire;
    }

    if (document._titrage && document._titrage.length) {
      document._titrage.forEach((reference) => {
        let normalizedReference = [];
        for (let key in reference) {
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
        let normalizedReference = [];
        for (let key in reference) {
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
        let normalizedReference = [];
        for (let key in reference) {
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
        const zoning = await ZoningUtils.getZones(
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
}}
