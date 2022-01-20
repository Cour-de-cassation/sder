import { userType } from '../userType';
export { buildUser };
declare function buildUser({ email, name, password, role, }: {
    email: string;
    name: string;
    password: string;
    role: userType['role'];
}): Promise<userType>;
