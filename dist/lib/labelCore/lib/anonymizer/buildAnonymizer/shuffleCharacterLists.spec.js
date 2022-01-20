"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var shuffleCharacterLists_1 = require("./shuffleCharacterLists");
describe('shuffleCharacterLists', function () {
    var seed = 123;
    it('should shuffle the character lists', function () {
        var characterLists = [
            ['A', 'B'],
            ['C', 'D'],
        ];
        var shuffledCharacterList = shuffleCharacterLists_1.shuffleCharacterLists(characterLists, seed);
        expect(__spreadArrays(shuffledCharacterList).sort()).toEqual(['A', 'B', 'C', 'D']);
    });
    it('should preserve the orders of the initial lists', function () {
        var characterLists = [
            ['A', 'B', 'C'],
            ['D', 'E', 'F', 'G'],
        ];
        var shuffledCharacterList = shuffleCharacterLists_1.shuffleCharacterLists(characterLists, seed);
        expect(__spreadArrays(shuffledCharacterList.slice(0, 3)).sort()).toEqual(['A', 'B', 'C']);
        expect(__spreadArrays(shuffledCharacterList.slice(3)).sort()).toEqual(['D', 'E', 'F', 'G']);
    });
});
