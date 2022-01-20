"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shuffle_1 = require("./shuffle");
describe('schuffle', function () {
    var array = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ];
    it('should return a shuffled array', function () {
        var seed = 54;
        var shuffledArray = shuffle_1.shuffle(array, seed);
        expect(shuffledArray).not.toEqual(array);
        expect(shuffledArray.sort()).toEqual(array);
    });
    it('should return an identical array for same seed', function () {
        var seed = 12345;
        var shuffledArray1 = shuffle_1.shuffle(array, seed);
        var shuffledArray2 = shuffle_1.shuffle(array, seed);
        expect(shuffledArray1).toEqual(shuffledArray2);
    });
});
