"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("../generator");
var countWords_1 = require("./countWords");
describe('countWords', function () {
    it('should return the number of words in the document text', function () {
        var document = generator_1.documentGenerator.generate({ text: 'Some text with five words' });
        var wordsCount = countWords_1.countWords(document);
        expect(wordsCount).toEqual(5);
    });
    it('should not count spaces', function () {
        var document = generator_1.documentGenerator.generate({ text: 'Some text with      five words' });
        var wordsCount = countWords_1.countWords(document);
        expect(wordsCount).toEqual(5);
    });
});
