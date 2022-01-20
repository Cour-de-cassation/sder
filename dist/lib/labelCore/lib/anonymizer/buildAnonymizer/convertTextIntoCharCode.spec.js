"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var convertTextIntoCharCode_1 = require("./convertTextIntoCharCode");
describe('convertTextIntoCharCode', function () {
    it('should return 16185141513', function () {
        var text = 'prenom';
        var charCode = convertTextIntoCharCode_1.convertTextIntoCharCode(text);
        expect(charCode).toEqual(16185141513);
    });
});
