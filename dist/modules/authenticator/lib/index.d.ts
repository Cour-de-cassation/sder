import { assertAuthorization } from './assertAuthorization';
import { buildBaseUser } from './buildBaseUser';
import { computeHashedPassword } from './computeHashedPassword';
import { formatEmail } from './formatEmail';
export { buildAuthenticator };
declare function buildAuthenticator(privateKey: string): {
    assertAuthorization: typeof assertAuthorization;
    buildBaseUser: typeof buildBaseUser;
    computeHashedPassword: typeof computeHashedPassword;
    extractUserIdFromAuthorizationHeader: (authorization: string | undefined) => import("bson").ObjectID;
    formatEmail: typeof formatEmail;
    getTokenForUser: (user: {
        _id: import("bson").ObjectID;
    }) => Promise<string>;
    passwordHandler: {
        checkUser(user: {
            hashedPassword: string;
        }, password: string): Promise<boolean>;
        getPasswordTimeValidityStatus(user: {
            passwordLastUpdateDate: number;
        }): "valid" | "outdated";
        generate(): string;
        isValid(password: string): boolean;
    };
};
