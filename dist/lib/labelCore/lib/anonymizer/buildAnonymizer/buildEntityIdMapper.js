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
exports.buildEntityIdMapper = void 0;
var lodash_1 = require("lodash");
var annotation_1 = require("../../../modules/annotation");
var buildSpecifierGenerator_1 = require("./buildSpecifierGenerator");
var buildAnonymizationTextGenerator_1 = require("./buildAnonymizationTextGenerator");
var constants_1 = require("./constants");
function buildEntityIdMapper(settings, entityIds, seed) {
    var sortedEntityIds = lodash_1.uniq(entityIds).sort(function (entityIdA, entityIdB) {
        var textA = annotation_1.annotationModule.lib.entityIdHandler.getText(entityIdA);
        var textB = annotation_1.annotationModule.lib.entityIdHandler.getText(entityIdB);
        return textA.localeCompare(textB);
    });
    var specifierGenerator = buildSpecifierGenerator_1.buildSpecifierGenerator(sortedEntityIds, seed);
    return sortedEntityIds.reduce(function (accumulator, entityId) {
        var _a;
        var _b;
        var category = annotation_1.annotationModule.lib.entityIdHandler.getCategory(entityId);
        var anonymization = ((_b = settings[category]) === null || _b === void 0 ? void 0 : _b.anonymization) || constants_1.ANONYMIZATION_DEFAULT_TEXT;
        var anonymizationTextGenerator = buildAnonymizationTextGenerator_1.buildAnonymizationTextGenerator(anonymization, specifierGenerator);
        var anonymizationText = anonymizationTextGenerator.generate(entityId);
        return __assign(__assign({}, accumulator), (_a = {}, _a[entityId] = anonymizationText, _a));
    }, {});
}
exports.buildEntityIdMapper = buildEntityIdMapper;
