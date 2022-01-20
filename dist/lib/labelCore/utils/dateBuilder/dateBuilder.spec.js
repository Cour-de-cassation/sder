"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateBuilder_1 = require("./dateBuilder");
describe('dateBuilder', function () {
    var dateBuilder = dateBuilder_1.buildDateBuilder(function () { return new Date('2012-07-14T14:00:00.000Z'); });
    describe('daysAgo', function () {
        it('should return the date in the given days ago', function () {
            var days = 15;
            var dateAgo = dateBuilder.daysAgo(days);
            expect(dateAgo).toEqual(new Date('2012-06-29T14:00:00.000Z').getTime());
        });
    });
    describe('minutesAgo', function () {
        it('should return the date in the given minutes ago', function () {
            var minutes = 15;
            var dateAgo = dateBuilder.minutesAgo(minutes);
            expect(dateAgo).toEqual(new Date('2012-07-14T13:45:00.000Z').getTime());
        });
    });
    describe('monthsAgo', function () {
        it('should return the date in the given months ago', function () {
            var months = 2;
            var dateAgo = dateBuilder.monthsAgo(months);
            expect(dateAgo).toEqual(new Date('2012-05-14T14:00:00.000Z').getTime());
        });
    });
});
