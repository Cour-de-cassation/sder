import { idType } from '../id';
export type { userType, passwordTimeValidityStatusType };
declare type userType = {
    _id: idType;
    email: string;
    role: string;
    name: string;
    hashedPassword: string;
    deletionDate: number | undefined;
    isActivated: boolean;
    passwordLastUpdateDate: number;
};
declare type passwordTimeValidityStatusType = 'valid' | 'outdated';
