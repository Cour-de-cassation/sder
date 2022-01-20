"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentGenerator = void 0;
var id_1 = require("../../id");
var documentGenerator = {
    generate: function (_a) {
        var _b = _a === void 0 ? {} : _a, creationDate = _b.creationDate, decisionMetadata = _b.decisionMetadata, documentNumber = _b.documentNumber, externalId = _b.externalId, _id = _b._id, priority = _b.priority, publicationCategory = _b.publicationCategory, reviewStatus = _b.reviewStatus, route = _b.route, source = _b.source, status = _b.status, title = _b.title, text = _b.text, updateDate = _b.updateDate;
        return ({
            creationDate: creationDate ? creationDate : new Date().getTime(),
            decisionMetadata: decisionMetadata
                ? decisionMetadata
                : {
                    additionalTermsToAnnotate: '',
                    appealNumber: '',
                    boundDecisionDocumentNumbers: [],
                    categoriesToOmit: [],
                    chamberName: '',
                    civilCaseCode: '',
                    civilMatterCode: '',
                    criminalCaseCode: '',
                    date: new Date().getTime(),
                    jurisdiction: '',
                    NACCode: '',
                    endCaseCode: '',
                    occultationBlock: undefined,
                    parties: [],
                    session: '',
                    solution: '',
                },
            documentNumber: documentNumber ? documentNumber : Math.floor(Math.random() * 1000000),
            externalId: externalId ? externalId : "EXTERNAL_ID_" + Math.random(),
            _id: _id ? id_1.idModule.lib.buildId(_id) : id_1.idModule.lib.buildId(),
            priority: priority !== undefined ? priority : 0,
            publicationCategory: publicationCategory ? publicationCategory : [],
            reviewStatus: reviewStatus || { hasBeenAmended: false, viewerNames: [] },
            route: route || 'exhaustive',
            source: source ? source : "SOURCE_" + Math.random(),
            status: status ? status : 'free',
            title: title ? title : "TITLE_" + Math.random(),
            text: text ? text : "TEXT_" + Math.random(),
            updateDate: updateDate ? updateDate : new Date().getTime(),
        });
    },
};
exports.documentGenerator = documentGenerator;
