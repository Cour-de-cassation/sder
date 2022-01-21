import { assertAuthorization } from './assertAuthorization';
import { buildBaseUser } from './buildBaseUser';
import { computeHashedPassword } from './computeHashedPassword';
import { buildExtractUserIdFromAuthorizationHeader } from './extractUserIdFromAuthorizationHeader';
import { formatEmail } from './formatEmail';
import { buildGetTokenForUser } from './getTokenForUser';
import { passwordHandler } from './passwordHandler';

export { buildAuthenticator };

function buildAuthenticator(privateKey: string) {
  return {
    assertAuthorization,
    buildBaseUser,
    computeHashedPassword,
    extractUserIdFromAuthorizationHeader: buildExtractUserIdFromAuthorizationHeader(privateKey),
    formatEmail,
    getTokenForUser: buildGetTokenForUser(privateKey),
    passwordHandler,
  };
}
