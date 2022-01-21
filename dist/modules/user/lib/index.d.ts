import { idType } from '../../id';
import { userType } from '../userType';
export { buildUserLib };
declare function buildUserLib(privateKey: string): {
    fetchAuthenticatedUserFromAuthorizationHeader: (authorization: string | undefined, findById: (_id: idType) => Promise<userType>) => Promise<userType>;
    buildLogin: ({ findByEmail }: {
        findByEmail: (email: userType['email']) => Promise<userType>;
    }) => ({ email, password }: {
        email: string;
        password: string;
    }) => Promise<{
        _id: import("bson").ObjectId;
        email: string;
        name: string;
        role: string;
        token: string;
        passwordTimeValidityStatus: import("../userType").passwordTimeValidityStatusType;
    }>;
};
