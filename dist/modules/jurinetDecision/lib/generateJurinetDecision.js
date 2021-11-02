"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJurinetDecision = void 0;
var MAX_RAND_NUMBER = 1000000;
function generateJurinetDecision(decisionFields) {
    if (decisionFields === void 0) { decisionFields = {}; }
    return __assign({ _id: Math.floor(Math.random() * MAX_RAND_NUMBER), CAT_PUB: 'W', DOCTRINE: '', ID_CHAMBRE: '', ID_SOLUTION: '', IND_ADRESSE: 1, IND_ANO: '0', IND_CADASTRE: 1, IND_CHAINE: 1, IND_COORDONNEE_ELECTRONIQUE: 1, IND_DT_DECE: 1, IND_DT_MARIAGE: 1, IND_DT_NAISSANCE: 1, IND_IMMATRICULATION: 1, IND_NOM_PROFESSIONEL: 0, IND_PRENOM_PROFESSIONEL: 0, JURIDICTION: "Cour d'appel inconnue", NUM_DECISION: '', TEXTE_VISE: '', SOURCE: '', XML: "<?xml version=\"1.0\" ?><DOCUMENT><TEXTE_ARRET>TEXTE DE L'ARRET</TEXTE_ARRET></DOCUMENT>", TYPE_ARRET: '', RAPROCHEMENT: '', XMLA: '', _analyse: [], _decatt: [], _partie: [], _titrage: [], IND_PM: 0 }, decisionFields);
}
exports.generateJurinetDecision = generateJurinetDecision;
