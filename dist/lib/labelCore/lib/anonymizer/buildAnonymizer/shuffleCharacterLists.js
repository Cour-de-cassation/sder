"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleCharacterLists = void 0;
var utils_1 = require("../../../utils");
function shuffleCharacterLists(characterLists, seed) {
    var shuffledCharacterList = [];
    characterLists.forEach(function (characterList) {
        shuffledCharacterList = __spreadArrays(shuffledCharacterList, utils_1.shuffle(characterList, seed));
    });
    return shuffledCharacterList;
}
exports.shuffleCharacterLists = shuffleCharacterLists;
