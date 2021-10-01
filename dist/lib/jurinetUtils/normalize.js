"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize = void 0;
var constants_1 = require("../../constants");
var decisions_1 = require("../../modules/decisions");
var zoningUtils_1 = require("../zoningUtils");
var jurinet_1 = require("../jurinet");
var xmlToJson_1 = require("./xmlToJson");
var utils_1 = require("../../utils");
function normalize(document, previousVersion, ignorePreviousContent) {
    return __awaiter(this, void 0, void 0, function () {
        var cleanedJson, originalText, pseudoText, pseudoStatus, cleanedXml, cleanedXmlAnonymized, cleanedJsonAnonymized, normalizedDecision, zoning, e_1, occultations;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    originalText = '';
                    pseudoText = '';
                    pseudoStatus = document.IND_ANO;
                    try {
                        cleanedXml = jurinet_1.jurinetLib.cleanText(document.XML);
                        cleanedJson = xmlToJson_1.xmlToJson(cleanedXml, {
                            filter: false,
                            htmlDecode: true,
                            toLowerCase: true,
                        });
                        originalText = cleanedJson.texte_arret;
                    }
                    catch (ignore) { }
                    try {
                        cleanedXmlAnonymized = jurinet_1.jurinetLib.cleanText(document.XMLA);
                        cleanedJsonAnonymized = xmlToJson_1.xmlToJson(cleanedXmlAnonymized, {
                            filter: false,
                            htmlDecode: true,
                            toLowerCase: true,
                        });
                        pseudoText = cleanedJsonAnonymized.texte_arret;
                    }
                    catch (ignore) { }
                    if (previousVersion && !ignorePreviousContent) {
                        if (previousVersion.pseudoText) {
                            pseudoText = previousVersion.pseudoText;
                        }
                        if (previousVersion.pseudoStatus) {
                            pseudoStatus = previousVersion.pseudoStatus;
                        }
                    }
                    normalizedDecision = decisions_1.decisionModule.lib.buildDecision({
                        _rev: previousVersion ? previousVersion._rev + 1 : 0,
                        _version: parseFloat(constants_1.CONSTANTS.MONGO_DECISIONS_VERSION),
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
                        public: null,
                        parties: [],
                        decatt: undefined,
                        locked: false,
                        labelStatus: pseudoText ? 'exported' : 'toBeTreated',
                        zoning: undefined,
                        occultation: {
                            additionalTerms: '',
                            categoriesToOmit: [],
                        },
                        blocOccultation: undefined,
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
                            .map(function (x) { return x.trim(); })
                            .filter(function (x) { return x.length > 0; });
                        normalizedDecision.analysis.summary = cleanedJson.analyses[0].analyse[0].sommaire;
                    }
                    if (document._titrage && document._titrage.length) {
                        document._titrage.forEach(function (reference) {
                            var normalizedReference = [];
                            for (var key in reference) {
                                switch (key) {
                                    case 'ID_DOCUMENT':
                                    case 'NUM_ANALYSE':
                                    case 'NUM_TITREREFERENCE':
                                        break;
                                    default:
                                        if (reference[key] && typeof reference[key] === 'string') {
                                            normalizedReference.push(reference[key].replace(/\*/gim, '').trim());
                                        }
                                        else {
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
                        document._analyse.forEach(function (reference) {
                            var normalizedReference = [];
                            for (var key in reference) {
                                switch (key) {
                                    case 'ID_DOCUMENT':
                                    case 'NUM_ANALYSE':
                                    case 'NUM_TITREREFERENCE':
                                        break;
                                    default:
                                        if (reference[key] && typeof reference[key] === 'string') {
                                            normalizedReference.push(reference[key].replace(/\*/gim, '').trim());
                                        }
                                        else {
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
                        document._partie.forEach(function (reference) {
                            var normalizedReference = [];
                            for (var key in reference) {
                                switch (key) {
                                    case 'ID_DOCUMENT':
                                        break;
                                    default:
                                        if (reference[key] && typeof reference[key] === 'string') {
                                            normalizedReference.push(reference[key].replace(/\*/gim, '').trim());
                                        }
                                        else {
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
                    if (document._bloc_occultation) {
                        normalizedDecision.blocOccultation = document._bloc_occultation;
                    }
                    if (!normalizedDecision.pseudoText) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, zoningUtils_1.zoningUtils.getZones(normalizedDecision.sourceId, normalizedDecision.sourceName, normalizedDecision.pseudoText)];
                case 2:
                    zoning = _a.sent();
                    if (zoning && !zoning.detail) {
                        normalizedDecision.zoning = zoning;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    normalizedDecision.zoning = undefined;
                    return [3 /*break*/, 4];
                case 4:
                    occultations = {
                        IND_PM: ['personneMorale', 'etablissement', 'numeroSiretSiren'],
                        IND_ADRESSE: ['adresse', 'localite'],
                        IND_DT_NAISSANCE: ['dateNaissance'],
                        IND_DT_DECE: ['dateDeces'],
                        IND_DT_MARIAGE: ['dateMariage'],
                        IND_IMMATRICULATION: ['plaqueImmatriculation'],
                        IND_CADASTRE: ['cadastre'],
                        IND_CHAINE: ['compteBancaire', 'telephoneFax', 'insee'],
                        IND_COORDONNEE_ELECTRONIQUE: ['email'],
                        IND_PRENOM_PROFESSIONEL: ['professionnelMagistratGreffier'],
                        IND_NOM_PROFESSIONEL: ['professionnelMagistratGreffier'],
                    };
                    utils_1.keysOf(occultations).forEach(function (occultationCategoryField) {
                        if (occultationCategoryField === 'IND_PM' ||
                            occultationCategoryField === 'IND_NOM_PROFESSIONEL' ||
                            occultationCategoryField === 'IND_PRENOM_PROFESSIONEL') {
                            if (!document[occultationCategoryField]) {
                                occultations[occultationCategoryField].forEach(function (item) {
                                    normalizedDecision.occultation.categoriesToOmit.push(item);
                                });
                            }
                        }
                        else {
                            if (!document[occultationCategoryField] &&
                                document[occultationCategoryField] !== null &&
                                document[occultationCategoryField] !== undefined) {
                                occultations[occultationCategoryField].forEach(function (item) {
                                    normalizedDecision.occultation.categoriesToOmit.push(item);
                                });
                            }
                        }
                    });
                    if (!!document.OCCULTATION_SUPPLEMENTAIRE) {
                        normalizedDecision.occultation.additionalTerms = document.OCCULTATION_SUPPLEMENTAIRE;
                    }
                    if (!normalizedDecision.originalText) {
                        throw new Error("JurinetUtils.Normalize: Document '" + normalizedDecision.sourceId + "' has not text.");
                    }
                    return [2 /*return*/, normalizedDecision];
            }
        });
    });
}
exports.normalize = normalize;
