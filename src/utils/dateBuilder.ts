export { dateBuilder };

const dateBuilder = {
  daysAgo(days: number): string {
    const dateInSeveralDaysInThePast = new Date();
    dateInSeveralDaysInThePast.setDate(dateInSeveralDaysInThePast.getDate() - days);

    return dateInSeveralDaysInThePast.toISOString();
  },
};
