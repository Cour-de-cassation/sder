import { idModule, idType } from '../../id';
import { errorHandlers, buildJwtSigner } from '../../../lib';
import { userType } from '../userType';

export { fetchAuthenticatedUserFromAuthorizationHeader };

async function fetchAuthenticatedUserFromAuthorizationHeader(
  authorization: string | undefined,
  { findById, privateKey }: { findById: (id: idType) => Promise<userType>; privateKey: string },
) {
  const jwtSigner = buildJwtSigner(privateKey);

  if (authorization) {
    const token = authorization.split(' ')[1];
    const userId = jwtSigner.verifyToken(token);

    try {
      return await findById(idModule.lib.buildId(userId));
    } catch (_error) {
      throw errorHandlers.authenticationErrorHandler.build(`No user for ${userId}`);
    }
  } else {
    throw errorHandlers.authenticationErrorHandler.build('No authorization value provided');
  }
}
