import { idType } from '../id';
import { buildType } from '../modelType';
export { userModel, passwordTimeValidityStatusModel };
export type { userType, passwordTimeValidityStatusType };
declare const userModel: {
    readonly kind: "object";
    readonly content: {
        readonly _id: {
            readonly kind: "custom";
            readonly content: "id";
        };
        readonly deletionDate: {
            readonly kind: "or";
            readonly content: readonly [{
                readonly kind: "primitive";
                readonly content: "number";
            }, {
                readonly kind: "primitive";
                readonly content: "undefined";
            }];
        };
        readonly email: {
            readonly kind: "primitive";
            readonly content: "string";
        };
        readonly hashedPassword: {
            readonly kind: "primitive";
            readonly content: "string";
        };
        readonly isActivated: {
            readonly kind: "primitive";
            readonly content: "boolean";
        };
        readonly name: {
            readonly kind: "primitive";
            readonly content: "string";
        };
        readonly passwordLastUpdateDate: {
            readonly kind: "primitive";
            readonly content: "number";
        };
        readonly role: {
            readonly kind: "constant";
            readonly content: readonly ["admin", "annotator", "publicator", "scrutator"];
        };
    };
};
declare const passwordTimeValidityStatusModel: {
    kind: "constant";
    content: readonly ["valid", "outdated"];
};
declare type userType = buildType<typeof userModel, {
    id: idType;
}>;
declare type passwordTimeValidityStatusType = buildType<typeof passwordTimeValidityStatusModel>;
