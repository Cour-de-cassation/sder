"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitTextIntoWords = void 0;
var lodash_1 = require("lodash");
function splitTextIntoWords(text, start) {
    return splitAccordingToSeparatingCharacters(text).reduce(function (accumulator, word) {
        return __spreadArrays(accumulator, [
            {
                text: word,
                start: accumulator.length > 0
                    ? accumulator[accumulator.length - 1].start + accumulator[accumulator.length - 1].text.length + 1
                    : start,
            },
        ]);
    }, []);
}
exports.splitTextIntoWords = splitTextIntoWords;
function splitAccordingToSeparatingCharacters(text) {
    var SEPARATION_CHARACTERS = [' ', '-'];
    var splitText = text.split(SEPARATION_CHARACTERS[0]);
    var _loop_1 = function (i, length_1) {
        splitText = lodash_1.flatten(splitText.map(function (reSplitText) { return reSplitText.split(SEPARATION_CHARACTERS[i]); }));
    };
    for (var i = 1, length_1 = SEPARATION_CHARACTERS.length; i < length_1; i++) {
        _loop_1(i, length_1);
    }
    return splitText;
}
