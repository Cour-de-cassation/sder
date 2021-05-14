import { genericCollectionType } from '../collectionType';
export { rawJurinetModule };
declare const rawJurinetModule: {
    buildRepository: typeof import("./repository/buildRawJurinetFakeRepository").buildRawJurinetFakeRepository;
    collection: genericCollectionType;
    service: {
        createDecision(decisionFields: any): Promise<void>;
    };
};
