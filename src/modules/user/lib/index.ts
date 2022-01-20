import { buildCallAttemptsRegulator } from '../../../lib';
import { idType } from '../../id';
import { userType } from '../userType';
import { fetchAuthenticatedUserFromAuthorizationHeader } from './fetchAuthenticatedUserFromAuthorizationHeader';
import { buildLogin } from './login';

export { buildUserLib };

const DELAY_BETWEEN_LOGIN_ATTEMPTS_IN_SECONDS = 1 * 1000;

const MAX_LOGIN_ATTEMPTS = 1;

function buildUserLib(privateKey: string) {
  const { checkCallAttempts } = buildCallAttemptsRegulator(MAX_LOGIN_ATTEMPTS, DELAY_BETWEEN_LOGIN_ATTEMPTS_IN_SECONDS);
  return {
    fetchAuthenticatedUserFromAuthorizationHeader: (
      authorization: string | undefined,
      findById: (_id: idType) => Promise<userType>,
    ) => fetchAuthenticatedUserFromAuthorizationHeader(authorization, { findById, privateKey }),
    buildLogin: ({ findByEmail }: { findByEmail: (email: userType['email']) => Promise<userType> }) =>
      buildLogin({ findByEmail, privateKey, checkCallAttempts }),
  };
}
