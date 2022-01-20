export { csvExtractor };
declare const csvExtractor: {
    convertDataToCsv: typeof convertDataToCsv;
};
declare function convertDataToCsv<DataT>(data: Array<DataT>, fields: Array<{
    title: string;
    extractor: (data: DataT) => string | number;
}>): string;
