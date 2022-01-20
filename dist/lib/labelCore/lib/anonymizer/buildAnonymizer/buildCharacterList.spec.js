"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var buildCharacterList_1 = require("./buildCharacterList");
var isCapitalLetterCharCode_1 = require("./isCapitalLetterCharCode");
describe('buildCharacterList', function () {
    it('should work for 2-sized list', function () {
        var length = 2;
        var characterList = buildCharacterList_1.buildCharacterList(length);
        expect(characterList.length).toBe(Math.pow(26 - buildCharacterList_1.FORBIDDEN_CHARACTERS.length, length));
        var uniqueCharacterList = lodash_1.uniq(characterList);
        expect(uniqueCharacterList).toEqual(characterList);
        expect(characterList.every(onlyContainsAZCharacters)).toBeTruthy();
    });
});
function onlyContainsAZCharacters(characters) {
    for (var i = 0; i < characters.length; i++) {
        var charCode = characters.charCodeAt(i);
        if (!isCapitalLetterCharCode_1.isCapitalLetterCharCode(charCode)) {
            return false;
        }
    }
    return true;
}
