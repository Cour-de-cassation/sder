"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFormatSpecifiers = void 0;
function parseFormatSpecifiers(printfString) {
    var regex = RegExp('%(c|d)', 'g');
    var parsedFormatSpecifier;
    var parsedFormatSpecifiers = [];
    while ((parsedFormatSpecifier = regex.exec(printfString)) !== null) {
        var specifier = parsedFormatSpecifier[0];
        parsedFormatSpecifiers.push({
            index: parsedFormatSpecifier.index,
            specifier: specifier,
        });
    }
    return parsedFormatSpecifiers;
}
exports.parseFormatSpecifiers = parseFormatSpecifiers;
