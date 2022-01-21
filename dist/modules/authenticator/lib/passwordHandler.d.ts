import { passwordTimeValidityStatusType } from '../types';
export { passwordHandler };
declare const passwordHandler: {
    checkUser(user: {
        hashedPassword: string;
    }, password: string): Promise<boolean>;
    getPasswordTimeValidityStatus(user: {
        passwordLastUpdateDate: number;
    }): passwordTimeValidityStatusType;
    generate(): string;
    isValid(password: string): boolean;
};
