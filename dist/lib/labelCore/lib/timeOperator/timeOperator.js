"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeOperator = void 0;
var timeOperator = {
    compareDates: compareDates,
    convertDurationToReadableDuration: convertDurationToReadableDuration,
    convertTimestampToReadableDate: convertTimestampToReadableDate,
    convertTimestampToDate: convertTimestampToDate,
};
exports.timeOperator = timeOperator;
function convertTimestampToReadableDate(timestamp, displayTime) {
    var date = new Date(timestamp);
    var readableDay = date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate();
    var readableMonth = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : "" + (date.getMonth() + 1);
    var readableYear = date.getFullYear();
    if (!displayTime) {
        return readableDay + "/" + readableMonth + "/" + readableYear;
    }
    var readableHours = date.getHours() < 10 ? "0" + date.getHours() : "" + date.getHours();
    var readableMinutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : "" + date.getMinutes();
    return readableDay + "/" + readableMonth + "/" + readableYear + " " + readableHours + ":" + readableMinutes;
}
function convertDurationToReadableDuration(duration) {
    var totalSeconds = Math.floor(duration / 1000);
    var totalHours = Math.floor(totalSeconds / 3600);
    var remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
    var remainingSeconds = Math.floor((totalSeconds % 3600) % 60);
    if (totalHours > 0) {
        return totalHours + "h" + remainingMinutes + "m" + remainingSeconds + "s";
    }
    if (remainingMinutes > 0) {
        return remainingMinutes + "m" + remainingSeconds + "s";
    }
    return remainingSeconds + "s";
}
function compareDates(date1, date2) {
    if (date1.year < date2.year) {
        return -1;
    }
    else if (date1.year > date2.year) {
        return 1;
    }
    if (date1.month < date2.month) {
        return -1;
    }
    else if (date1.month > date2.month) {
        return 1;
    }
    if (date1.dayOfMonth < date2.dayOfMonth) {
        return -1;
    }
    else if (date1.dayOfMonth > date2.dayOfMonth) {
        return 1;
    }
    return 0;
}
function convertTimestampToDate(timestamp) {
    var date = new Date();
    date.setTime(timestamp);
    return { year: date.getFullYear(), month: date.getMonth(), dayOfMonth: date.getDate() };
}
