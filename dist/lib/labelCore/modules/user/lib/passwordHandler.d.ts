import { passwordTimeValidityStatusType, userType } from '../userType';
export { passwordHandler };
export type { passwordTimeValidityStatusType };
declare const passwordHandler: {
    checkUser(user: userType, password: string): Promise<boolean>;
    getPasswordTimeValidityStatus(user: userType): passwordTimeValidityStatusType;
    generate(): string;
    isValid(password: string): boolean;
};
