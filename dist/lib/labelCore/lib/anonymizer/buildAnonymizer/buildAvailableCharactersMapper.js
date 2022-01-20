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
exports.buildAvailableCharactersMapper = void 0;
var lodash_1 = require("lodash");
var annotation_1 = require("../../../modules/annotation");
var buildAvailableCharacters_1 = require("./buildAvailableCharacters");
var buildCharacterList_1 = require("./buildCharacterList");
var convertTextIntoCharCode_1 = require("./convertTextIntoCharCode");
var shuffleCharacterLists_1 = require("./shuffleCharacterLists");
var DEFAULT_MAX_DISTINCT_REPLACEMENT_CHARACTERS = 26 - buildCharacterList_1.FORBIDDEN_CHARACTERS.length;
function buildAvailableCharactersMapper(entityIds, seed) {
    var entityIdsByCategoryCount = lodash_1.countBy(entityIds, annotation_1.annotationModule.lib.entityIdHandler.getCategory);
    return Object.keys(entityIdsByCategoryCount).reduce(function (accumulator, category) {
        var _a;
        var entityIdsCount = entityIdsByCategoryCount[category];
        var availableCharacters = buildAvailableCharacters_1.buildAvailableCharacters(Math.max(entityIdsCount, DEFAULT_MAX_DISTINCT_REPLACEMENT_CHARACTERS));
        var compoundSeed = seed * convertTextIntoCharCode_1.convertTextIntoCharCode(category);
        return __assign(__assign({}, accumulator), (_a = {}, _a[category] = shuffleCharacterLists_1.shuffleCharacterLists(availableCharacters, compoundSeed), _a));
    }, {});
}
exports.buildAvailableCharactersMapper = buildAvailableCharactersMapper;
