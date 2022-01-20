"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("../generator");
var getLastTreatment_1 = require("./getLastTreatment");
describe('getLastTreatment', function () {
    it('should extract the last treatment', function () {
        var treatments = [0, 2, 1].map(function (order) { return generator_1.treatmentGenerator.generate({ order: order }); });
        var lastTreatment = getLastTreatment_1.getLastTreatment(treatments);
        expect(lastTreatment).toEqual(treatments[1]);
    });
});
