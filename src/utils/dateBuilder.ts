export { dateBuilder };

const dateBuilder = {
  daysAgo(days: number) {
    const dateInSeveralDaysInThePast = new Date();
    dateInSeveralDaysInThePast.setDate(dateInSeveralDaysInThePast.getDate() - days);

    return dateInSeveralDaysInThePast;
  },
};
