import { userType } from '../userType';
export { buildLogin };
declare function buildLogin({ checkCallAttempts, findByEmail, privateKey, }: {
    checkCallAttempts: (identifier: string) => void;
    findByEmail: (email: string) => Promise<userType>;
    privateKey: string;
}): ({ email, password }: {
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
