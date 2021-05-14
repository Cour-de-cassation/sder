import { genericCollectionType } from '../collectionType';
export { rawJuricaModule };
declare const rawJuricaModule: {
    buildRepository: typeof import("./repository/buildRawJuricaFakeRepository").buildRawJuricaFakeRepository;
    collection: genericCollectionType;
    service: {
        createDecision(decisionFields: any): Promise<void>;
    };
};
