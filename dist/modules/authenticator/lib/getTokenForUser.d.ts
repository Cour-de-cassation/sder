import { idType } from '../../id';
export { buildGetTokenForUser };
declare function buildGetTokenForUser(privateKey: string): (user: {
    _id: idType;
    email: string;
    password: string;
    hashedPassword: string;
    passwordLastUpdateDate: number;
}) => Promise<string>;
