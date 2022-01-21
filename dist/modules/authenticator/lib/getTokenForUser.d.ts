import { idType } from '../../id';
export { buildGetTokenForUser };
declare function buildGetTokenForUser(privateKey: string): (user: {
    _id: idType;
}) => Promise<string>;
