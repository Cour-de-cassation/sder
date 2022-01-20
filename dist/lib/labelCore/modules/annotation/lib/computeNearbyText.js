"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeNearbyText = void 0;
var CHARACTER_COUNT_TO_SHOW = 25;
var LINE_SEPARATION_CHARACTERS = ['\n', '\r'];
function computeNearbyText(annotation, text) {
    var lineSeparationCharacterBeforeIndex = computeLineSeparationCharacterBeforeIndex(text, annotation.start);
    var lineSeparationCharacterAfterIndex = computeLineSeparationCharacterAfterIndex(text, annotation.start + annotation.text.length);
    var indexToStartFrom = Math.max(lineSeparationCharacterBeforeIndex, annotation.start - CHARACTER_COUNT_TO_SHOW);
    var indexToEndWith = Math.min(lineSeparationCharacterAfterIndex, annotation.start + annotation.text.length + CHARACTER_COUNT_TO_SHOW);
    var textStart = indexToStartFrom + 1;
    var textEnd = indexToEndWith;
    return { textStart: textStart, textEnd: textEnd };
}
exports.computeNearbyText = computeNearbyText;
function computeLineSeparationCharacterBeforeIndex(text, annotationStart) {
    for (var _i = 0, LINE_SEPARATION_CHARACTERS_1 = LINE_SEPARATION_CHARACTERS; _i < LINE_SEPARATION_CHARACTERS_1.length; _i++) {
        var LINE_SEPARATION_CHARACTER = LINE_SEPARATION_CHARACTERS_1[_i];
        var lineSeparationCharacterIndex = text.lastIndexOf(LINE_SEPARATION_CHARACTER, annotationStart);
        if (lineSeparationCharacterIndex !== -1) {
            return lineSeparationCharacterIndex;
        }
    }
    return 0;
}
function computeLineSeparationCharacterAfterIndex(text, annotationEnd) {
    for (var _i = 0, LINE_SEPARATION_CHARACTERS_2 = LINE_SEPARATION_CHARACTERS; _i < LINE_SEPARATION_CHARACTERS_2.length; _i++) {
        var LINE_SEPARATION_CHARACTER = LINE_SEPARATION_CHARACTERS_2[_i];
        var lineSeparationCharacterIndex = text.indexOf(LINE_SEPARATION_CHARACTER, annotationEnd);
        if (lineSeparationCharacterIndex !== -1) {
            return lineSeparationCharacterIndex;
        }
    }
    return text.length;
}
