"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAnonymizationTextGenerator = void 0;
var parseFormatSpecifiers_1 = require("./parseFormatSpecifiers");
function buildAnonymizationTextGenerator(printfString, specifierGenerator) {
    var parsedFormatSpecifiers = parseFormatSpecifiers_1.parseFormatSpecifiers(printfString);
    return {
        generate: generate,
    };
    function generate(entityId) {
        return parsedFormatSpecifiers.reduce(function (printedString, parsedFormatSpecifier) {
            var stringPrefix = printedString.slice(0, parsedFormatSpecifier.index);
            var specifierValue = computeSpecifierValue(specifierGenerator, parsedFormatSpecifier.specifier, entityId);
            var stringSuffix = printedString.slice(parsedFormatSpecifier.index + parsedFormatSpecifier.specifier.length);
            return "" + stringPrefix + specifierValue + stringSuffix;
        }, printfString);
    }
}
exports.buildAnonymizationTextGenerator = buildAnonymizationTextGenerator;
function computeSpecifierValue(specifierGenerator, specifier, entityId) {
    switch (specifier) {
        case '%d':
            return specifierGenerator[specifier].generate();
        case '%c':
            return specifierGenerator[specifier].generate(entityId);
    }
}
