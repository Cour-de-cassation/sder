"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var convertOccultationBlockToCategoriesToOmit_1 = require("./convertOccultationBlockToCategoriesToOmit");
describe('convertOccultationBlockInCategoriesToOmit', function () {
    it('should return categories for block 1', function () {
        var categoriesToOmit = (0, convertOccultationBlockToCategoriesToOmit_1.convertOccultationBlockInCategoriesToOmit)(1);
        expect(categoriesToOmit.sort()).toEqual(['professionnelMagistratGreffier'].sort());
    });
    it('should return categories for block 2', function () {
        var categoriesToOmit = (0, convertOccultationBlockToCategoriesToOmit_1.convertOccultationBlockInCategoriesToOmit)(2);
        expect(categoriesToOmit.sort()).toEqual(['professionnelMagistratGreffier', 'dateNaissance', 'dateMariage', 'dateDeces'].sort());
    });
    it('should return categories for block 3', function () {
        var categoriesToOmit = (0, convertOccultationBlockToCategoriesToOmit_1.convertOccultationBlockInCategoriesToOmit)(3);
        expect(categoriesToOmit.sort()).toEqual(['professionnelMagistratGreffier', 'personneMorale', 'numeroSiretSiren'].sort());
    });
    it('should return categories for block 4', function () {
        var categoriesToOmit = (0, convertOccultationBlockToCategoriesToOmit_1.convertOccultationBlockInCategoriesToOmit)(4);
        expect(categoriesToOmit.sort()).toEqual([
            'professionnelMagistratGreffier',
            'dateNaissance',
            'dateMariage',
            'dateDeces',
            'personneMorale',
            'numeroSiretSiren',
        ].sort());
    });
    it('should return categories for block null', function () {
        var categoriesToOmit = (0, convertOccultationBlockToCategoriesToOmit_1.convertOccultationBlockInCategoriesToOmit)(undefined);
        expect(categoriesToOmit.sort()).toEqual(['professionnelMagistratGreffier', 'personneMorale', 'numeroSiretSiren'].sort());
    });
});
