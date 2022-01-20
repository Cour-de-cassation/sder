"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildSpecifierGenerator_1 = require("./buildSpecifierGenerator");
describe('buildSpecifierGenerator', function () {
    it('should return correct generated specifier values', function () {
        var entityIds = ['nom_gle', 'prenom_romain', 'adresse_13 rue', 'adresse_45 cour'];
        var specifierGenerator = buildSpecifierGenerator_1.buildSpecifierGenerator(entityIds, 123);
        var generatedCharacter1 = specifierGenerator['%c'].generate(entityIds[0]);
        var generatedCharacter2 = specifierGenerator['%c'].generate(entityIds[1]);
        var generatedNumber1 = specifierGenerator['%d'].generate();
        var generatedNumber2 = specifierGenerator['%d'].generate();
        expect(generatedCharacter1.length).toBe(1);
        expect(generatedCharacter2.length).toBe(1);
        expect(generatedCharacter1).not.toBe(generatedCharacter2);
        expect(generatedNumber1).toBe('1');
        expect(generatedNumber2).toBe('2');
    });
});
