import { specifierGeneratorType } from './types';
export { buildAnonymizationTextGenerator };
declare function buildAnonymizationTextGenerator(printfString: string, specifierGenerator: specifierGeneratorType): {
    generate: (entityId: string) => string;
};
