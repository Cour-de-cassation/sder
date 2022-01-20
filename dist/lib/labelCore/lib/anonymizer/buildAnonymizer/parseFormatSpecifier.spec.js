"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parseFormatSpecifiers_1 = require("./parseFormatSpecifiers");
describe('parseFormatSpecifier', function () {
    it('should parse format specifier %c', function () {
        var printfString = '[firstName %c]';
        var parsedFormatSpecifiers = parseFormatSpecifiers_1.parseFormatSpecifiers(printfString);
        expect(parsedFormatSpecifiers).toEqual([{ index: 11, specifier: '%c' }]);
    });
    it('should parse format specifier %d', function () {
        var printfString = '[adresse %d]';
        var parsedFormatSpecifiers = parseFormatSpecifiers_1.parseFormatSpecifiers(printfString);
        expect(parsedFormatSpecifiers).toEqual([{ index: 9, specifier: '%d' }]);
    });
});
