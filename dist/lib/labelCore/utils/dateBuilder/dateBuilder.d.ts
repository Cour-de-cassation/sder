export { buildDateBuilder, dateBuilder };
declare const dateBuilder: {
    daysAgo(days: number): number;
    minutesAgo(minutes: number): number;
    monthsAgo(months: number): number;
};
declare function buildDateBuilder(now: () => Date): {
    daysAgo(days: number): number;
    minutesAgo(minutes: number): number;
    monthsAgo(months: number): number;
};
