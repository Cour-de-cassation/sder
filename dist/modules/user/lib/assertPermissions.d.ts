import { userType } from '../userType';
export { assertPermissions };
declare function assertPermissions(user: userType, permissions: Array<userType['role']>): void;
