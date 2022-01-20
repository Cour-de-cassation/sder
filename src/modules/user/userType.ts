import { idType } from '../id';

export type { userType, passwordTimeValidityStatusType };

type userType = {
  _id: idType;
  email: string;
  role: string;
  name: string;
  hashedPassword: string;
  deletionDate: number | undefined;
  isActivated: boolean;
  passwordLastUpdateDate: number;
};

type passwordTimeValidityStatusType = 'valid' | 'outdated';
