"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isCapitalLetterCharCode_1 = require("./isCapitalLetterCharCode");
describe('isCapitalLetterCharCode', function () {
    it('should be truthy', function () {
        expect(isCapitalLetterCharCode_1.isCapitalLetterCharCode('E'.charCodeAt(0))).toBeTruthy();
    });
    it('should be falsy', function () {
        expect(isCapitalLetterCharCode_1.isCapitalLetterCharCode('^'.charCodeAt(0))).toBeFalsy();
        expect(isCapitalLetterCharCode_1.isCapitalLetterCharCode('!'.charCodeAt(0))).toBeFalsy();
        expect(isCapitalLetterCharCode_1.isCapitalLetterCharCode('$'.charCodeAt(0))).toBeFalsy();
    });
});
