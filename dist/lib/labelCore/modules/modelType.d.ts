export { buildModel };
export type { buildType, buildPrimitiveType, buildConstantType, customMappingType, modelType, modelCasePrimitiveType, modelCaseConstantType, modelCaseCustomType, modelCaseObjectType, modelCaseArrayType, modelPrimitiveType, modelConstantType, modelObjectType, };
declare type modelType = modelCasePrimitiveType | modelCaseConstantType | modelCaseCustomType | modelCaseOrType | modelCaseObjectType | modelCaseArrayType;
declare type modelCasePrimitiveType = {
    kind: 'primitive';
    content: modelPrimitiveType;
};
declare type modelCaseConstantType = {
    kind: 'constant';
    content: modelConstantType;
};
declare type modelCaseCustomType = {
    kind: 'custom';
    content: string;
};
declare type modelCaseOrType = {
    kind: 'or';
    content: Readonly<[modelOrEntryType, modelOrEntryType]>;
};
declare type modelCaseObjectType = {
    kind: 'object';
    content: modelObjectType;
};
declare type modelCaseArrayType = {
    kind: 'array';
    content: modelType;
};
declare type modelPrimitiveType = 'boolean' | 'date' | 'number' | 'string' | 'undefined' | 'void';
declare type modelConstantType = readonly string[];
declare type modelOrEntryType = modelCasePrimitiveType | modelCaseConstantType | modelCaseCustomType | modelCaseObjectType | modelCaseArrayType;
declare type modelObjectType = {
    [key in string]: modelType;
};
declare type buildType<modelT extends modelType, customMappingT extends customMappingType = {}> = modelT extends modelCasePrimitiveType ? buildPrimitiveType<modelT['content']> : modelT extends modelCaseConstantType ? buildConstantType<modelT['content']> : modelT extends modelCaseCustomType ? customMappingT[modelT['content']] : modelT extends modelCaseOrType ? buildOrEntryType<modelT['content'][0], customMappingT> | buildOrEntryType<modelT['content'][1], customMappingT> : modelT extends modelCaseObjectType ? {
    [key in keyof modelT['content']]: buildType<modelT['content'][key], customMappingT>;
} : modelT extends modelCaseArrayType ? Array<buildType<modelT['content'], customMappingT>> : never;
declare type buildPrimitiveType<modelPrimitiveT extends modelPrimitiveType> = modelPrimitiveT extends 'boolean' ? boolean : modelPrimitiveT extends 'date' ? Date : modelPrimitiveT extends 'number' ? number : modelPrimitiveT extends 'string' ? string : modelPrimitiveT extends 'undefined' ? undefined : modelPrimitiveT extends 'void' ? void : never;
declare type buildConstantType<modelConstantT extends modelConstantType> = modelConstantT[number];
declare type buildOrEntryType<modelOrEntryT extends modelOrEntryType, customMappingT extends customMappingType = {}> = modelOrEntryT extends modelCasePrimitiveType ? buildPrimitiveType<modelOrEntryT['content']> : modelOrEntryT extends modelCaseConstantType ? buildConstantType<modelOrEntryT['content']> : modelOrEntryT extends modelCaseArrayType ? Array<buildType<modelOrEntryT['content'], customMappingT>> : modelOrEntryT extends modelCaseCustomType ? customMappingT[modelOrEntryT['content']] : modelOrEntryT extends modelCaseObjectType ? {
    [key in keyof modelOrEntryT['content']]: buildType<modelOrEntryT['content'][key], customMappingT>;
} : never;
declare type customMappingType = {
    [typeName: string]: any;
};
declare function buildModel<modelT extends modelType>(model: modelT): modelT;
