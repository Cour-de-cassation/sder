"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("../generator");
var extractLastUpdateDate_1 = require("./extractLastUpdateDate");
describe('extractLastUpdateDate', function () {
    it('should return the last update date', function () {
        var treatments = [{ lastUpdateDate: 123 }, { lastUpdateDate: 789 }, { lastUpdateDate: 456 }].map(generator_1.treatmentGenerator.generate);
        var lastUpdateDate = extractLastUpdateDate_1.extractLastUpdateDate(treatments);
        expect(lastUpdateDate).toBe(789);
    });
});
