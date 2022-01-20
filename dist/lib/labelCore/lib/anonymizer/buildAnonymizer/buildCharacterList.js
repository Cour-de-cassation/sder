"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FORBIDDEN_CHARACTERS = exports.buildCharacterList = void 0;
var lodash_1 = require("lodash");
var FORBIDDEN_CHARACTERS = ['Q'];
exports.FORBIDDEN_CHARACTERS = FORBIDDEN_CHARACTERS;
function buildCharacterList(length) {
    var A_ASCII_CODE = 65;
    var characterListLength = Math.pow(26, length);
    var characterLists = [];
    var _loop_1 = function (i) {
        var currentCharacterList = lodash_1.range(characterListLength).map(function (_, index) {
            return String.fromCharCode(((index / Math.pow(26, length - 1 - i)) % 26) + A_ASCII_CODE);
        });
        characterLists.push(currentCharacterList);
    };
    for (var i = 0; i < length; i++) {
        _loop_1(i);
    }
    var characterList = lodash_1.range(characterListLength).map(function (_, index) {
        var currentStringArray = [];
        for (var i = 0; i < length; i++) {
            currentStringArray.push(characterLists[i][index]);
        }
        return currentStringArray.join('');
    });
    return characterList.filter(function (characters) {
        return FORBIDDEN_CHARACTERS.every(function (forbiddenCharacter) { return !characters.includes(forbiddenCharacter); });
    });
}
exports.buildCharacterList = buildCharacterList;
