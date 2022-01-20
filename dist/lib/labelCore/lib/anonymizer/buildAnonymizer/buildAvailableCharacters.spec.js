"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var buildAvailableCharacters_1 = require("./buildAvailableCharacters");
describe('buildAvailableCharacters', function () {
    it('should build a set of available characters distinct with one or two characters length', function () {
        var count = 100;
        var availableCharacters = lodash_1.flatten(buildAvailableCharacters_1.buildAvailableCharacters(count));
        var distinctAvailableCharacters = lodash_1.uniq(availableCharacters);
        expect(availableCharacters).toEqual(distinctAvailableCharacters);
        expect(availableCharacters.every(isCharacterLengthLessThanTwo)).toBeTruthy();
    });
});
function isCharacterLengthLessThanTwo(character) {
    return character.length <= 2;
}
