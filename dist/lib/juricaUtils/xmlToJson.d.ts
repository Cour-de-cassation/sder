export { xmlToJson };
declare type xmlToJsonOptionType = {
    filter?: boolean;
    htmlDecode?: boolean;
    toLowerCase?: boolean;
};
declare function xmlToJson(xml: string, opt: xmlToJsonOptionType): any;
