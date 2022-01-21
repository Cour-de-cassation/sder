import { idType } from '../modules/id';
export { buildJwtSigner };
declare function buildJwtSigner(privateKey: string): {
    sign: (userId: idType) => string;
    verifyToken: (token: string) => string;
};
