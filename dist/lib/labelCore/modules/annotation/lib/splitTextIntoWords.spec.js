"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var splitTextIntoWords_1 = require("./splitTextIntoWords");
describe('splitTextIntoWords', function () {
    it('should split text according to space and dashes', function () {
        var text = 'Harry Potter and Carla Bruni-Sarkozy';
        var words = splitTextIntoWords_1.splitTextIntoWords(text, 10);
        expect(words).toEqual([
            { text: 'Harry', start: 10 },
            { text: 'Potter', start: 16 },
            { text: 'and', start: 23 },
            { text: 'Carla', start: 27 },
            { text: 'Bruni', start: 33 },
            { text: 'Sarkozy', start: 39 },
        ]);
    });
});
