"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csvExtractor_1 = require("./csvExtractor");
describe('csvExtractor', function () {
    it('should extract in the right format', function () {
        var data = [
            { user: { name: 'Nicolas', birthDate: '25/04/2001' } },
            { user: { name: 'Benoit', birthDate: '17/01/2002' } },
        ];
        var fields = [
            {
                title: 'name',
                extractor: function (data) { return data.user.name; },
            },
            {
                title: 'birthDate',
                extractor: function (data) { return data.user.birthDate; },
            },
        ];
        var CSV = csvExtractor_1.csvExtractor.convertDataToCsv(data, fields);
        expect(CSV).toBe('name;birthDate\nNicolas;25/04/2001\nBenoit;17/01/2002');
    });
});
