"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildAnnotation_1 = require("./buildAnnotation");
var stringify_1 = require("./stringify");
describe('stringify', function () {
    it('should stringify an annotation without the entityId', function () {
        var annotation = buildAnnotation_1.buildAnnotation({ category: 'nom', start: 12, text: 'SERRANO' });
        var stringifyedAnnotation = stringify_1.stringify(annotation);
        expect(stringifyedAnnotation).toBe("(nom / SERRANO / 12)");
    });
    it('should stringify an annotation with the entityId', function () {
        var annotation = buildAnnotation_1.buildAnnotation({ category: 'nom', start: 12, text: 'SERRANO' });
        var stringifyedAnnotation = stringify_1.stringify(annotation, { displayEntityId: true });
        expect(stringifyedAnnotation).toBe("(nom / SERRANO (nom_SERRANO) / 12)");
    });
});
