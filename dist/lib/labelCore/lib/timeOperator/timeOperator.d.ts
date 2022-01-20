export { timeOperator };
export type { dateType };
declare type dateType = {
    year: number;
    month: number;
    dayOfMonth: number;
};
declare const timeOperator: {
    compareDates: typeof compareDates;
    convertDurationToReadableDuration: typeof convertDurationToReadableDuration;
    convertTimestampToReadableDate: typeof convertTimestampToReadableDate;
    convertTimestampToDate: typeof convertTimestampToDate;
};
declare function convertTimestampToReadableDate(timestamp: number, displayTime?: boolean): string;
declare function convertDurationToReadableDuration(duration: number): string;
declare function compareDates(date1: dateType, date2: dateType): 1 | 0 | -1;
declare function convertTimestampToDate(timestamp: number): {
    year: number;
    month: number;
    dayOfMonth: number;
};
