export { dateBuilder };
var dateBuilder = {
    daysAgo: function (days) {
        var dateInSeveralDaysInThePast = new Date();
        dateInSeveralDaysInThePast.setDate(dateInSeveralDaysInThePast.getDate() - days);
        return dateInSeveralDaysInThePast.toISOString();
    },
};
