import { assertAuthorization, assertPermissions, buildUser, computeHashedPassword, formatEmail } from './lib';
import { userType, passwordTimeValidityStatusType } from './userType';
export { userModule };
export type { userType, passwordTimeValidityStatusType };
declare const userModule: {
    models: {
        user: {
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
        passwordTimeValidityStatus: {
            kind: "constant";
            content: readonly ["valid", "outdated"];
        };
    };
    generator: import("../../types/generatorType").generatorType<{
        readonly _id: import("bson").ObjectId;
        readonly deletionDate: number | undefined;
        readonly email: string;
        readonly hashedPassword: string;
        readonly isActivated: boolean;
        readonly name: string;
        readonly passwordLastUpdateDate: number;
        readonly role: "annotator" | "admin" | "publicator" | "scrutator";
    }>;
    lib: {
        assertAuthorization: typeof assertAuthorization;
        assertPermissions: typeof assertPermissions;
        buildUser: typeof buildUser;
        computeHashedPassword: typeof computeHashedPassword;
        formatEmail: typeof formatEmail;
        passwordHandler: {
            checkUser(user: {
                readonly _id: import("bson").ObjectId;
                readonly deletionDate: number | undefined;
                readonly email: string;
                readonly hashedPassword: string;
                readonly isActivated: boolean;
                readonly name: string;
                readonly passwordLastUpdateDate: number;
                readonly role: "annotator" | "admin" | "publicator" | "scrutator";
            }, password: string): Promise<boolean>;
            getPasswordTimeValidityStatus(user: {
                readonly _id: import("bson").ObjectId;
                readonly deletionDate: number | undefined;
                readonly email: string;
                readonly hashedPassword: string;
                readonly isActivated: boolean;
                readonly name: string;
                readonly passwordLastUpdateDate: number;
                readonly role: "annotator" | "admin" | "publicator" | "scrutator";
            }): "valid" | "outdated";
            generate(): string;
            isValid(password: string): boolean;
        };
    };
};
