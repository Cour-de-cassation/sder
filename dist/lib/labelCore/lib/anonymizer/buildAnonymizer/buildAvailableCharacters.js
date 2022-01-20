"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAvailableCharacters = void 0;
var buildCharacterList_1 = require("./buildCharacterList");
function buildAvailableCharacters(count) {
    var power = 0;
    var availableCharacters = [];
    do {
        power++;
        var characterList = buildCharacterList_1.buildCharacterList(power);
        availableCharacters = __spreadArrays(availableCharacters, [characterList]);
    } while (Math.pow(26 - buildCharacterList_1.FORBIDDEN_CHARACTERS.length, power) < count);
    return availableCharacters;
}
exports.buildAvailableCharacters = buildAvailableCharacters;
