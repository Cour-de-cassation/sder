"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ressourceFilterGenerator = void 0;
var id_1 = require("../../id");
var ressourceFilterGenerator = {
    generate: function (_a) {
        var _b = _a === void 0 ? {} : _a, endDate = _b.endDate, jurisdiction = _b.jurisdiction, mustHaveSubAnnotations = _b.mustHaveSubAnnotations, mustHaveSurAnnotations = _b.mustHaveSurAnnotations, publicationCategory = _b.publicationCategory, startDate = _b.startDate, source = _b.source, userId = _b.userId;
        return ({
            endDate: endDate ? endDate : undefined,
            jurisdiction: jurisdiction || jurisdiction,
            mustHaveSubAnnotations: mustHaveSubAnnotations ? mustHaveSubAnnotations : false,
            mustHaveSurAnnotations: mustHaveSurAnnotations ? mustHaveSurAnnotations : false,
            publicationCategory: publicationCategory ? publicationCategory : undefined,
            startDate: startDate ? startDate : undefined,
            source: source ? source : undefined,
            userId: userId ? id_1.idModule.lib.buildId(userId) : undefined,
        });
    },
};
exports.ressourceFilterGenerator = ressourceFilterGenerator;
