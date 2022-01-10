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
var cleanHTML_1 = require("./cleanHTML");
function normalize(document, previousVersion, ignorePreviousContent) {
    return __awaiter(this, void 0, void 0, function () {
        var originalText, pseudoText, pseudoStatus, dateDecision, dateDecisionElements, dateCreation, dateCreationElements, normalizedDecision;
        return __generator(this, function (_a) {
            originalText = undefined;
            pseudoText = undefined;
            pseudoStatus = document.IND_ANO;
            if (document.JDEC_HTML_SOURCE) {
                try {
                    originalText = cleanHTML_1.cleanHTML(document.JDEC_HTML_SOURCE);
                }
                catch (e) {
                    console.warn("JuricaUtils.Normalize: Could not properly clean the original text of document '" + document._id + "'.");
                    console.warn(e);
                }
            }
            if (document.HTMLA) {
                try {
                    pseudoText = cleanHTML_1.cleanHTML(document.HTMLA);
                }
                catch (e) {
                    console.warn("JuricaUtils.Normalize: Could not properly clean the pseudonymized text of document '" + document._id + "'.");
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
            dateDecision = null;
            if (document.JDEC_DATE) {
                dateDecision = new Date();
                dateDecisionElements = document.JDEC_DATE.split('-');
                dateDecision.setFullYear(parseInt(dateDecisionElements[0], 10));
                dateDecision.setMonth(parseInt(dateDecisionElements[1], 10) - 1);
                dateDecision.setDate(parseInt(dateDecisionElements[2], 10));
                dateDecision.setHours(0);
                dateDecision.setMinutes(0);
                dateDecision.setSeconds(0);
                dateDecision.setMilliseconds(0);
            }
            if (dateDecision && !isNaN(dateDecision.valueOf())) {
                console.warn("JuricaUtils.Normalize: could not process decision date '" + document.JDEC_DATE + "'");
                dateDecision = document.JDEC_DATE;
            }
            dateCreation = null;
            if (document.JDEC_DATE_CREATION) {
                dateCreation = new Date();
                dateCreationElements = document.JDEC_DATE_CREATION;
                dateCreation.setFullYear(parseInt(dateCreationElements.substring(0, 4), 10));
                dateCreation.setMonth(parseInt(dateCreationElements.substring(4, 6), 10) - 1);
                dateCreation.setDate(parseInt(dateCreationElements.substring(6), 10));
                dateCreation.setHours(0);
                dateCreation.setMinutes(0);
                dateCreation.setSeconds(0);
                dateCreation.setMilliseconds(0);
            }
            if (dateCreation && isNaN(dateCreation.valueOf())) {
                console.warn("JuricaUtils.Normalize: could not process decision creation date '" + document.JDEC_DATE_CREATION + "'");
                dateCreation = document.JDEC_DATE_CREATION;
            }
            normalizedDecision = {
                _rev: previousVersion ? previousVersion._rev + 1 : 0,
                _version: parseFloat(constants_1.CONSTANTS.MONGO_DECISIONS_VERSION),
                sourceId: document._id,
                sourceName: 'jurica',
                jurisdictionId: document.JDEC_ID_JURIDICTION,
                jurisdictionCode: document.JDEC_CODE_JURIDICTION,
                jurisdictionName: document.JDEC_JURIDICTION,
                chamberId: document.JDEC_CODE_AUTORITE,
                chamberName: document.JDEC_LIB_AUTORITE,
                registerNumber: document.JDEC_NUM_RG + " " + document.JDEC_NUM_REGISTRE,
                pubCategory: document.JDEC_NOTICE_FORMAT,
                dateDecision: dateDecision === null || dateDecision === void 0 ? void 0 : dateDecision.toString(),
                dateCreation: dateCreation === null || dateCreation === void 0 ? void 0 : dateCreation.toString(),
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
                labelTreatments: [],
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
                public: parseInt(document.JDEC_IND_DEC_PUB, 10) === 1
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
                throw new Error("JuricaUtils.Normalize: Document '" + normalizedDecision.sourceId + "' has no text.");
            }
            return [2 /*return*/, normalizedDecision];
        });
    });
}
exports.normalize = normalize;
