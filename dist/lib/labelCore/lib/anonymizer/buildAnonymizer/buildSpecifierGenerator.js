"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSpecifierGenerator = void 0;
var annotation_1 = require("../../../modules/annotation");
var buildAvailableCharactersMapper_1 = require("./buildAvailableCharactersMapper");
var buildEntityIdOrderMapper_1 = require("./buildEntityIdOrderMapper");
function buildSpecifierGenerator(entityIds, seed) {
    var currentNumber = 1;
    var availableCharactersMapper = buildAvailableCharactersMapper_1.buildAvailableCharactersMapper(entityIds, seed);
    var entityIdOrderMapper = buildEntityIdOrderMapper_1.buildEntityIdOrderMapper(entityIds);
    return {
        '%c': {
            generate: function (entityId) {
                var category = annotation_1.annotationModule.lib.entityIdHandler.getCategory(entityId);
                var orderInCategory = entityIdOrderMapper[entityId];
                var specifierValue = availableCharactersMapper[category][orderInCategory];
                return specifierValue;
            },
        },
        '%d': {
            generate: function () {
                var specifierValue = currentNumber;
                currentNumber++;
                return "" + specifierValue;
            },
        },
    };
}
exports.buildSpecifierGenerator = buildSpecifierGenerator;
