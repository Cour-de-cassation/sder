"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeOperator_1 = require("./timeOperator");
describe('timeOperator', function () {
    describe('convertDurationToReadableDuration', function () {
        it('should return 0s for milliseconds < 1000', function () {
            expect(timeOperator_1.timeOperator.convertDurationToReadableDuration(900)).toBe('0s');
        });
        it('should return 14s for 14 seconds', function () {
            expect(timeOperator_1.timeOperator.convertDurationToReadableDuration(14000)).toBe('14s');
        });
        it("should return 10m2s\" for 602 seconds", function () {
            expect(timeOperator_1.timeOperator.convertDurationToReadableDuration(602000)).toBe("10m2s");
        });
        it("should return 2h6m40s\" for 7600 seconds", function () {
            expect(timeOperator_1.timeOperator.convertDurationToReadableDuration(7600000)).toBe("2h6m40s");
        });
    });
    describe('convertTimestampToReadableDate', function () {
        it('should return a date with the appropriate format', function () {
            var regex = new RegExp('[0-9]{2}/[0-9]{2}/[0-9]{4} [0-9]{2}:[0-9]{2}');
            var dateString = timeOperator_1.timeOperator.convertTimestampToReadableDate(1639308840000, true);
            expect(regex.test(dateString)).toBe(true);
        });
    });
    describe('compareDates', function () {
        it('should return -1 if the date 1 is older than date2 by days', function () {
            var date1 = { year: 2021, month: 11, dayOfMonth: 1 };
            var date2 = { year: 2021, month: 11, dayOfMonth: 2 };
            expect(timeOperator_1.timeOperator.compareDates(date1, date2)).toBe(-1);
        });
        it('should return -1 if the date 1 is older than date2 by days', function () {
            var date1 = { year: 2021, month: 11, dayOfMonth: 1 };
            var date2 = { year: 2021, month: 11, dayOfMonth: 2 };
            expect(timeOperator_1.timeOperator.compareDates(date1, date2)).toBe(-1);
        });
        it('should return 0 if the date 1 is equal to date2', function () {
            var date1 = { year: 2021, month: 11, dayOfMonth: 1 };
            var date2 = { year: 2021, month: 11, dayOfMonth: 1 };
            expect(timeOperator_1.timeOperator.compareDates(date1, date2)).toBe(0);
        });
        it('should return 1 if the date 1 is more recent than date2 by days', function () {
            var date1 = { year: 2021, month: 11, dayOfMonth: 2 };
            var date2 = { year: 2021, month: 11, dayOfMonth: 1 };
            expect(timeOperator_1.timeOperator.compareDates(date1, date2)).toBe(1);
        });
        it('should return 1 if the date 1 is more recent than date2 by year', function () {
            var date1 = { year: 2022, month: 0, dayOfMonth: 30 };
            var date2 = { year: 2021, month: 9, dayOfMonth: 28 };
            expect(timeOperator_1.timeOperator.compareDates(date1, date2)).toBe(1);
        });
    });
    describe('convertTimestampToDate', function () {
        it('should convert the timestamp into date', function () {
            // October 11th 2021
            var timestamp = 1633946945874;
            var date = timeOperator_1.timeOperator.convertTimestampToDate(timestamp);
            expect(date).toEqual({ year: 2021, month: 9, dayOfMonth: 11 });
        });
    });
});
