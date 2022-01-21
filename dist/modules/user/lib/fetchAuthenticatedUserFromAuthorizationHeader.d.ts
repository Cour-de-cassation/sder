import { idType } from '../../id';
import { userType } from '../userType';
export { fetchAuthenticatedUserFromAuthorizationHeader };
declare function fetchAuthenticatedUserFromAuthorizationHeader(authorization: string | undefined, { findById, privateKey }: {
    findById: (id: idType) => Promise<userType>;
    privateKey: string;
}): Promise<userType>;
