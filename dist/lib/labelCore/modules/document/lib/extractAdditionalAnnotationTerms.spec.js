"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var extractAdditionalAnnotationTerms_1 = require("./extractAdditionalAnnotationTerms");
describe('extractAdditionalAnnotationTerms', function () {
    it('should extract the additional annotation terms', function () {
        var additionalTermsToAnnotate = 'One term / the second term';
        var additionalAnnotationTerms = extractAdditionalAnnotationTerms_1.extractAdditionalAnnotationTerms(additionalTermsToAnnotate);
        expect(additionalAnnotationTerms).toEqual(['One term', 'the second term']);
    });
});
